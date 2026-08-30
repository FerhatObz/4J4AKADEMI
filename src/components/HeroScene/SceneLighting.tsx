import React from 'react';

export const SceneLighting: React.FC = () => {
  return (
    <>
      {/* Deep Space Ambient */}
      <ambientLight intensity={0.45} color="#F2F2EE" />

      {/* Main Architectural Directional Key Light */}
      <directionalLight
        position={[4, 6, 6]}
        intensity={1.1}
        color="#F2F2EE"
      />

      {/* Controlled Sharp Lime Rim Accent */}
      <pointLight
        position={[2.5, 1.8, 2.5]}
        intensity={2.2}
        distance={7}
        color="#B7FF00"
      />

      {/* Secondary Fill from Shadow Side */}
      <directionalLight
        position={[-5, -3, -2]}
        intensity={0.35}
        color="#8B8F92"
      />
    </>
  );
};
