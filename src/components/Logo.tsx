'use client';

import { useState } from 'react';

interface MarkColors {
  t: string;
  m: string;
  b: string;
}

interface IsoMarkProps {
  size?: number;
  colors?: MarkColors;
}

export function IsoMark({ size = 36, colors = { t: '#7C3AED', m: '#3B0F8C', b: '#160A38' } }: IsoMarkProps) {
  const gap    = Math.round(size * 0.13);
  const radius = Math.round(size * 0.22);
  const z1 = (Math.round(size * 0.13) + gap) * 2;
  const z2 = (Math.round(size * 0.13) + gap);
  const z3 = 0;
  const slabs = [
    { z: z1, color: colors.t },
    { z: z2, color: colors.m },
    { z: z3, color: colors.b },
  ];
  return (
    <div style={{ flexShrink: 0, width: size * 1.4, height: '1em', overflow: 'visible', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: size, height: size, position: 'relative', transformStyle: 'preserve-3d', transform: 'perspective(600px) rotateX(52deg) rotateZ(45deg)', marginTop: size * 0.45 }}>
        {slabs.map((s, i) => (
          <div key={i} style={{ position: 'absolute', inset: 0, borderRadius: radius, background: s.color, transform: `translateZ(${s.z}px)` }} />
        ))}
      </div>
    </div>
  );
}

interface HoverMarkProps {
  size?: number;
  colors: MarkColors;
}

export function HoverMark({ size = 30, colors }: HoverMarkProps) {
  const [hov, setHov] = useState(false);
  const gap    = Math.round(size * 0.13);
  const radius = Math.round(size * 0.22);
  const z1 = (Math.round(size * 0.13) + gap) * 2;
  const z2 = (Math.round(size * 0.13) + gap);
  const z3 = 0;
  const slabs = [
    { z: z1, color: colors.t, extra: 14 },
    { z: z2, color: colors.m, extra: 7 },
    { z: z3, color: colors.b, extra: 0 },
  ];
  return (
    <div
      style={{ flexShrink: 0, width: size * 1.4, height: '1em', overflow: 'visible', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div style={{ width: size, height: size, position: 'relative', transformStyle: 'preserve-3d', transform: 'perspective(600px) rotateX(52deg) rotateZ(45deg)', marginTop: size * 0.45 }}>
        {slabs.map((s, i) => (
          <div key={i} style={{
            position: 'absolute', inset: 0, borderRadius: radius, background: s.color,
            transform: `translateZ(${hov ? s.z + s.extra : s.z}px)`,
            transition: `transform ${hov ? '0.28s cubic-bezier(0.34,1.56,0.64,1)' : '0.4s cubic-bezier(0.4,0,0.2,1)'}`,
          }} />
        ))}
      </div>
    </div>
  );
}

export default IsoMark;
