import React, { useState, useEffect } from 'react';

export const AnalogClock: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [elapsedSeconds, setElapsedSeconds] = useState(73293427);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secDeg = (seconds / 60) * 360;
  const minDeg = ((minutes + seconds / 60) / 60) * 360;
  const hourDeg = ((hours + minutes / 60) / 12) * 360;

  return (
    <div className="bg-zinc-950 border border-white/10 rounded-xl p-3 font-mono space-y-2">
      <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">UPTIME</div>

      <div className="flex items-center gap-3">
        {/* Compact Analog Clock Face */}
        <div className="relative w-11 h-11 rounded-full border border-amber-500/40 bg-zinc-900 flex items-center justify-center shrink-0 shadow-inner">
          {/* Hour Hand */}
          <div
            className="absolute w-0.5 bg-amber-400 rounded-full origin-bottom"
            style={{
              height: '10px',
              bottom: '50%',
              transform: `rotate(${hourDeg}deg)`,
              transformOrigin: '50% 100%',
            }}
          />
          {/* Minute Hand */}
          <div
            className="absolute w-0.5 bg-zinc-200 rounded-full origin-bottom"
            style={{
              height: '14px',
              bottom: '50%',
              transform: `rotate(${minDeg}deg)`,
              transformOrigin: '50% 100%',
            }}
          />
          {/* Second Hand */}
          <div
            className="absolute w-0.5 bg-amber-500 rounded-full origin-bottom"
            style={{
              height: '16px',
              bottom: '50%',
              transform: `rotate(${secDeg}deg)`,
              transformOrigin: '50% 100%',
            }}
          />
          {/* Center Pivot */}
          <div className="w-1.5 h-1.5 rounded-full bg-amber-400 z-10"></div>
        </div>

        {/* Digital Readout */}
        <div className="space-y-0.5 text-[11px]">
          <div className="text-[9px] text-zinc-400 uppercase tracking-wider">IN INDUSTRY</div>
          <div className="text-amber-400 font-bold text-xs">1y 118d • Acmegrade</div>
          <div className="text-zinc-200 font-semibold">{time.toLocaleTimeString()}</div>
        </div>
      </div>
    </div>
  );
};
