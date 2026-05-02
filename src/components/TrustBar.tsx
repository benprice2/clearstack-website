'use client';

import React from 'react';

const items = [
  { icon: '⚡', label: 'React & Next.js' },
  { icon: '🤖', label: 'AI Automation' },
  { icon: '🚀', label: 'Fast delivery' },
  { icon: '🇳🇿', label: 'Auckland based' },
  { icon: '📋', label: 'NZ registered' },
];

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="trust-inner">
        {items.map((item, i) => (
          <React.Fragment key={item.label}>
            <div className="trust-item">
              <div className="trust-icon">{item.icon}</div>
              {item.label}
            </div>
            {i < items.length - 1 && <div className="trust-sep"></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
