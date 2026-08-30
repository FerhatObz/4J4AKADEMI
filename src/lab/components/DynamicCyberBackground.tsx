import React from 'react';

interface DynamicCyberBackgroundProps {
  accentColor?: string;
}

export const DynamicCyberBackground: React.FC<DynamicCyberBackgroundProps> = ({
  accentColor = '#B7FF00'
}) => {
  return (
    <div
      className="dynamic-cyber-bg"
      style={{ '--active-accent': accentColor } as React.CSSProperties}
      aria-hidden="true"
    >
      {/* Dynamic Ambient Glow Radial */}
      <div className="ambient-radial-glow" />

      {/* Cyber Grid Lines Pattern */}
      <div className="cyber-grid-pattern" />

      {/* Radar Scanline */}
      <div className="cyber-radar-sweep" />

      {/* Subtle Coordinate Crosshairs */}
      <div className="cyber-crosshair crosshair--top-left">+</div>
      <div className="cyber-crosshair crosshair--top-right">+</div>
      <div className="cyber-crosshair crosshair--bottom-left">+</div>
      <div className="cyber-crosshair crosshair--bottom-right">+</div>
    </div>
  );
};
