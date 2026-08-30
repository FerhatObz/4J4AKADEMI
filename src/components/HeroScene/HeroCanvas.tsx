import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { DigitalField } from './DigitalField';
import { CyberVisualSystem } from './CyberVisualSystem';
import { SceneLighting } from './SceneLighting';

interface HeroCanvasProps {
  pointer: { x: number; y: number };
  scrollOffset?: number;
}

export const HeroCanvas: React.FC<HeroCanvasProps> = ({ pointer, scrollOffset = 0 }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Simple WebGL detection
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!hasWebGL) {
    return <div className="hero-canvas-fallback" aria-hidden="true" />;
  }

  return (
    <div className="hero-canvas-container" style={{ pointerEvents: 'auto' }}>
      <Canvas
        camera={{
          position: [0, 0, 4.8],
          fov: isMobile ? 55 : 42,
          near: 0.1,
          far: 50
        }}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
      >
        <SceneLighting />
        <Suspense fallback={null}>
          <DigitalField pointer={pointer} scrollOffset={scrollOffset} />
          <CyberVisualSystem pointer={pointer} scrollOffset={scrollOffset} />
        </Suspense>
      </Canvas>
    </div>
  );
};
