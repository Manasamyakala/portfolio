import React, { useState, useEffect, useMemo } from 'react';

export const GitHubSnake: React.FC = () => {
  const COLS = 52;
  const ROWS = 7;
  const TOTAL_CELLS = COLS * ROWS;

  // Pre-generate grid path: column by column (bottom-to-top, top-to-bottom)
  const path = useMemo(() => {
    const coords: Array<{ r: number; c: number }> = [];
    for (let c = 0; c < COLS; c++) {
      if (c % 2 === 0) {
        // Bottom (ROW 6) up to top (ROW 0)
        for (let r = ROWS - 1; r >= 0; r--) {
          coords.push({ r, c });
        }
      } else {
        // Top (ROW 0) down to bottom (ROW 6)
        for (let r = 0; r < ROWS; r++) {
          coords.push({ r, c });
        }
      }
    }
    return coords;
  }, [COLS, ROWS]);

  // Pre-determine which random days have commits (1, 2, 3) vs empty days (0)
  const greenLevels = useMemo(() => {
    const levels: number[][] = [];
    for (let r = 0; r < ROWS; r++) {
      const row: number[] = [];
      for (let c = 0; c < COLS; c++) {
        const rand = Math.random();
        if (rand > 0.85) row.push(3); // Bright green
        else if (rand > 0.70) row.push(2); // Medium green
        else if (rand > 0.55) row.push(1); // Dark green
        else row.push(0); // Empty black day
      }
      levels.push(row);
    }
    return levels;
  }, [ROWS, COLS]);

  // Current head step (0 to TOTAL_CELLS)
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev + 1 >= TOTAL_CELLS + 10) {
          // Pause briefly at full grid, then reset to 0 (all empty black)
          return 0;
        }
        return prev + 1;
      });
    }, 35); // Smooth crawling speed

    return () => clearInterval(interval);
  }, [TOTAL_CELLS]);

  // Get cell state
  const getSquareStyle = (r: number, c: number) => {
    const cellIdx = path.findIndex((p) => p.r === r && p.c === c);

    if (step >= TOTAL_CELLS) {
      const lvl = greenLevels[r][c];
      if (lvl === 3) return 'bg-emerald-400 border border-emerald-500/30';
      if (lvl === 2) return 'bg-emerald-600 border border-emerald-700/30';
      if (lvl === 1) return 'bg-emerald-800 border border-emerald-900/40';
      return 'bg-[#121212] border border-[#1e1e1e]';
    }

    if (cellIdx === step) {
      return 'bg-amber-400 border border-amber-300 shadow-[0_0_6px_#f59e0b] z-10 scale-105';
    }

    if (cellIdx < step) {
      const lvl = greenLevels[r][c];
      if (lvl === 3) return 'bg-emerald-400 border border-emerald-500/30';
      if (lvl === 2) return 'bg-emerald-600 border border-emerald-700/30';
      if (lvl === 1) return 'bg-emerald-800 border border-emerald-900/40';
      return 'bg-[#121212] border border-[#1e1e1e]';
    }

    return 'bg-[#121212] border border-[#1e1e1e]';
  };

  return (
    <div className="w-full bg-[#0a0a09] border border-white/10 rounded-xl p-3 space-y-2 font-mono">
      {/* Contribution Grid */}
      <div className="overflow-x-auto py-1">
        <div className="grid grid-rows-7 grid-flow-col gap-1 w-max mx-auto">
          {Array.from({ length: COLS }).map((_, c) =>
            Array.from({ length: ROWS }).map((_, r) => (
              <div
                key={`${r}-${c}`}
                className={`w-2.5 h-2.5 rounded-none transition-colors duration-75 ${getSquareStyle(r, c)}`}
              />
            ))
          )}
        </div>
      </div>

      {/* Sub-footer stats */}
      <div className="flex items-center justify-between text-[10px] text-zinc-400 pt-1 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span>• 15 day streak</span>
          <span>longest 15</span>
          <span>450+ contributions</span>
        </div>
      </div>
    </div>
  );
};
