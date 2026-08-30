import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { FieldVertexShader, FieldFragmentShader } from '../../three/shaders/fieldShader';

interface DigitalFieldProps {
  pointer: { x: number; y: number };
  scrollOffset?: number;
}

export const DigitalField: React.FC<DigitalFieldProps> = ({ pointer, scrollOffset = 0 }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Custom uniforms for field shader
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uPointer: { value: new THREE.Vector2(0, 0) },
    uScroll: { value: 0 },
    uColorBg: { value: new THREE.Color('#08090A') },
    uColorLine: { value: new THREE.Color('#3A3E42') },
    uColorAccent: { value: new THREE.Color('#B7FF00') }
  }), []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value += delta;
      
      // Smoothly interpolate pointer coordinate to shader uniform
      material.uniforms.uPointer.value.lerp(
        new THREE.Vector2(pointer.x, pointer.y),
        0.08
      );

      // Interpolate scroll
      material.uniforms.uScroll.value = THREE.MathUtils.lerp(
        material.uniforms.uScroll.value,
        scrollOffset,
        0.1
      );

      // Subtle field rotation & parallax
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.05) * 0.04;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={[0, -0.3, -2.2]}
      rotation={[-Math.PI / 2.6, 0, 0]}
    >
      <planeGeometry args={[16, 16, 80, 80]} />
      <shaderMaterial
        vertexShader={FieldVertexShader}
        fragmentShader={FieldFragmentShader}
        uniforms={uniforms}
        transparent={true}
        depthWrite={false}
        wireframe={false}
      />
    </mesh>
  );
};
