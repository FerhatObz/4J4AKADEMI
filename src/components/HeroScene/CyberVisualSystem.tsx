import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

import { SecurityCore } from './SecurityCore';
import { NetworkTopology, TopologyNode } from './NetworkTopology';
import { SignalField } from './SignalField';

interface CyberVisualSystemProps {
  pointer: { x: number; y: number };
  scrollOffset?: number;
}

export const CyberVisualSystem: React.FC<CyberVisualSystemProps> = ({
  pointer,
  scrollOffset = 0
}) => {
  const masterGroupRef = useRef<THREE.Group>(null);
  const networkLayerRef = useRef<THREE.Group>(null);
  const coreLayerRef = useRef<THREE.Group>(null);
  const signalLayerRef = useRef<THREE.Group>(null);

  const [hoveredNode, setHoveredNode] = useState<TopologyNode | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;

    // Responsive Base Positioning: Right 42% on desktop, centered lower on mobile
    const targetBaseX = isMobile ? 0 : 2.0;
    const targetBaseY = isMobile ? -0.8 : 0.05;
    const targetScale = isMobile ? 0.65 : 1.0;

    if (masterGroupRef.current) {
      masterGroupRef.current.position.x = THREE.MathUtils.damp(
        masterGroupRef.current.position.x,
        targetBaseX,
        4,
        delta
      );
      masterGroupRef.current.position.y = THREE.MathUtils.damp(
        masterGroupRef.current.position.y,
        targetBaseY,
        4,
        delta
      );
      masterGroupRef.current.scale.setScalar(
        THREE.MathUtils.damp(masterGroupRef.current.scale.x, targetScale, 4, delta)
      );

      // Subtle slow cinematic idle breathing
      masterGroupRef.current.position.y += Math.sin(time * 0.4) * 0.0015;
    }

    // 4 DIFFERENTIAL DEPTH PARALLAX LAYERS:
    // Layer 1: Network Topology (Parallax factor: 0.06)
    if (networkLayerRef.current) {
      networkLayerRef.current.position.x = THREE.MathUtils.damp(
        networkLayerRef.current.position.x,
        pointer.x * 0.22,
        3,
        delta
      );
      networkLayerRef.current.position.y = THREE.MathUtils.damp(
        networkLayerRef.current.position.y,
        pointer.y * 0.16,
        3,
        delta
      );
    }

    // Layer 2: Security Core (Parallax factor: 0.12)
    if (coreLayerRef.current) {
      coreLayerRef.current.position.x = THREE.MathUtils.damp(
        coreLayerRef.current.position.x,
        pointer.x * 0.42,
        3.5,
        delta
      );
      coreLayerRef.current.position.y = THREE.MathUtils.damp(
        coreLayerRef.current.position.y,
        pointer.y * 0.32,
        3.5,
        delta
      );
    }

    // Layer 3: Foreground Signals (Parallax factor: 0.18)
    if (signalLayerRef.current) {
      signalLayerRef.current.position.x = THREE.MathUtils.damp(
        signalLayerRef.current.position.x,
        pointer.x * 0.65,
        4,
        delta
      );
      signalLayerRef.current.position.y = THREE.MathUtils.damp(
        signalLayerRef.current.position.y,
        pointer.y * 0.52,
        4,
        delta
      );
    }
  });

  return (
    <group ref={masterGroupRef} position={[2.0, 0.05, 0]}>
      {/* LAYER 01: NETWORK / INFORMATION TOPOLOGY */}
      <group ref={networkLayerRef}>
        <NetworkTopology
          pointer={pointer}
          scrollOffset={scrollOffset}
          onHoverNode={setHoveredNode}
        />
      </group>

      {/* LAYER 02: SECURITY CORE */}
      <group ref={coreLayerRef}>
        <SecurityCore pointer={pointer} scrollOffset={scrollOffset} />
      </group>

      {/* LAYER 03: SIGNAL & SCAN FIELD */}
      <group ref={signalLayerRef}>
        <SignalField scrollOffset={scrollOffset} />
      </group>

      {/* INTERACTIVE HUD TOOLTIP ON HOVERED NODE */}
      {hoveredNode && (
        <Html
          position={[hoveredNode.position[0], hoveredNode.position[1] + 0.18, hoveredNode.position[2]]}
          center
          distanceFactor={6}
          style={{ pointerEvents: 'none', userSelect: 'none' }}
        >
          <div className="topology-hud-tooltip">
            <div className="topology-hud-header">
              <span className="topology-hud-dot" />
              <span className="topology-hud-id">{hoveredNode.label}</span>
              <span className="topology-hud-status">{hoveredNode.status}</span>
            </div>
            <div className="topology-hud-sub">{hoveredNode.sublabel}</div>
          </div>
        </Html>
      )}
    </group>
  );
};
