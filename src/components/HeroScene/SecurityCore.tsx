import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SecurityCoreProps {
  pointer: { x: number; y: number };
  scrollOffset?: number;
}

export const SecurityCore: React.FC<SecurityCoreProps> = ({
  pointer,
  scrollOffset = 0
}) => {
  const coreGroupRef = useRef<THREE.Group>(null);
  const outerCageRef = useRef<THREE.Group>(null);
  const midLatticeRef = useRef<THREE.Group>(null);
  const innerCoreRef = useRef<THREE.Mesh>(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;

    if (coreGroupRef.current) {
      // Damped pointer reaction on core orientation
      targetRotation.current.y = pointer.x * 0.5 + Math.sin(time * 0.2) * 0.05;
      targetRotation.current.x = -pointer.y * 0.35 + Math.cos(time * 0.15) * 0.04;

      coreGroupRef.current.rotation.y = THREE.MathUtils.damp(
        coreGroupRef.current.rotation.y,
        targetRotation.current.y,
        3.5,
        delta
      );
      coreGroupRef.current.rotation.x = THREE.MathUtils.damp(
        coreGroupRef.current.rotation.x,
        targetRotation.current.x,
        3.5,
        delta
      );

      // Scroll transition: Core pulls back into focal depth
      const targetZ = -scrollOffset * 4.0;
      const targetScale = Math.max(0.3, 1.0 - scrollOffset * 0.5);

      coreGroupRef.current.position.z = THREE.MathUtils.damp(
        coreGroupRef.current.position.z,
        targetZ,
        4,
        delta
      );
      coreGroupRef.current.scale.setScalar(
        THREE.MathUtils.damp(coreGroupRef.current.scale.x, targetScale, 4, delta)
      );
    }

    // Outer fragmented geometric cage: slow counter-rotation
    if (outerCageRef.current) {
      outerCageRef.current.rotation.y += delta * 0.15;
      outerCageRef.current.rotation.z += delta * 0.08;
    }

    // Mid cryptographic lattice: forward rotation with subtle pulsation
    if (midLatticeRef.current) {
      midLatticeRef.current.rotation.y -= delta * 0.25;
      midLatticeRef.current.rotation.x += delta * 0.1;
      const pulse = 1.0 + Math.sin(time * 1.5) * 0.02;
      midLatticeRef.current.scale.setScalar(pulse);
    }

    // Inner dark crystalline core
    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.x += delta * 0.18;
      innerCoreRef.current.rotation.z -= delta * 0.12;
    }
  });

  return (
    <group ref={coreGroupRef}>
      {/* 1. OUTER LAYER: Precision Fragmented Icosahedron Wireframe & Plates */}
      <group ref={outerCageRef}>
        {/* Dark Translucent Geometric Facets */}
        <mesh>
          <icosahedronGeometry args={[0.95, 0]} />
          <meshPhysicalMaterial
            color="#08090A"
            roughness={0.2}
            metalness={0.9}
            clearcoat={1.0}
            clearcoatRoughness={0.1}
            transparent={true}
            opacity={0.65}
          />
        </mesh>

        {/* Outer Structural Wireframe with Acid Lime Accents */}
        <lineSegments>
          <edgesGeometry args={[new THREE.IcosahedronGeometry(0.952, 0)]} />
          <lineBasicMaterial color="#B7FF00" transparent opacity={0.6} linewidth={1} />
        </lineSegments>

        {/* Secondary Shadow Edges for Mechanical Depth */}
        <lineSegments>
          <edgesGeometry args={[new THREE.IcosahedronGeometry(0.955, 0)]} />
          <lineBasicMaterial color="#4B5054" transparent opacity={0.4} linewidth={1} />
        </lineSegments>
      </group>

      {/* 2. MID LAYER: Interlocking Cryptographic Rings & Coordinate Brackets */}
      <group ref={midLatticeRef}>
        {/* Ring 1 - Equatorial Guide */}
        <mesh rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[0.75, 0.008, 16, 64]} />
          <meshBasicMaterial color="#8B8F92" transparent opacity={0.5} />
        </mesh>

        {/* Ring 2 - Polar Interlock */}
        <mesh rotation={[-Math.PI / 3, Math.PI / 4, 0]}>
          <torusGeometry args={[0.82, 0.006, 16, 64]} />
          <meshBasicMaterial color="#B7FF00" transparent opacity={0.4} />
        </mesh>

        {/* Ring 3 - Meridian Bracket */}
        <mesh rotation={[0, Math.PI / 3, Math.PI / 6]}>
          <torusGeometry args={[0.68, 0.007, 16, 64]} />
          <meshBasicMaterial color="#3A3E42" transparent opacity={0.6} />
        </mesh>

        {/* Precision Core Axis Guide Lines */}
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={6}
              array={new Float32Array([
                0, -1.2, 0,  0, 1.2, 0,
                -1.2, 0, 0,  1.2, 0, 0,
                0, 0, -1.2,  0, 0, 1.2
              ])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#3A3E42" transparent opacity={0.3} />
        </lineSegments>
      </group>

      {/* 3. INNER LAYER: Monolithic Dark Security Core */}
      <mesh ref={innerCoreRef} scale={0.45}>
        <octahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial
          color="#101214"
          emissive="#B7FF00"
          emissiveIntensity={0.12}
          roughness={0.1}
          metalness={0.95}
          clearcoat={1.0}
        />
        <lineSegments>
          <edgesGeometry args={[new THREE.OctahedronGeometry(1.01, 0)]} />
          <lineBasicMaterial color="#B7FF00" transparent opacity={0.85} />
        </lineSegments>
      </mesh>

      {/* Micro Vertex Anchor Indicators */}
      {[-0.65, 0.65].map((x, i) =>
        [-0.65, 0.65].map((y, j) => (
          <mesh key={`${i}-${j}`} position={[x, y, 0]}>
            <boxGeometry args={[0.02, 0.02, 0.02]} />
            <meshBasicMaterial color="#B7FF00" transparent opacity={0.7} />
          </mesh>
        ))
      )}
    </group>
  );
};
