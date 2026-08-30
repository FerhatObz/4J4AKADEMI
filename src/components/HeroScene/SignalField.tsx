import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SignalFieldProps {
  scrollOffset?: number;
}

interface SignalPacket {
  start: THREE.Vector3;
  end: THREE.Vector3;
  progress: number;
  speed: number;
  color: string;
}

export const SignalField: React.FC<SignalFieldProps> = ({ scrollOffset = 0 }) => {
  const sweepMeshRef = useRef<THREE.Mesh>(null);
  const packetsRef = useRef<THREE.InstancedMesh>(null);

  // Defined transmission paths between major network nodes
  const paths = useMemo(() => [
    { start: new THREE.Vector3(-1.6, 1.2, -0.6), end: new THREE.Vector3(-0.6, 1.6, 0.2) },
    { start: new THREE.Vector3(-0.6, 1.6, 0.2), end: new THREE.Vector3(1.4, 1.1, 0.5) },
    { start: new THREE.Vector3(1.4, 1.1, 0.5), end: new THREE.Vector3(1.8, 0.2, -0.5) },
    { start: new THREE.Vector3(1.8, 0.2, -0.5), end: new THREE.Vector3(1.3, -0.7, 0.6) },
    { start: new THREE.Vector3(1.3, -0.7, 0.6), end: new THREE.Vector3(-0.7, -1.4, 0.5) },
    { start: new THREE.Vector3(-0.7, -1.4, 0.5), end: new THREE.Vector3(-1.5, -0.8, -0.3) },
    { start: new THREE.Vector3(-1.5, -0.8, -0.3), end: new THREE.Vector3(-1.6, 1.2, -0.6) },
    { start: new THREE.Vector3(0, 0, 0), end: new THREE.Vector3(1.8, 0.2, -0.5) },
    { start: new THREE.Vector3(0, 0, 0), end: new THREE.Vector3(-1.6, 1.2, -0.6) },
    { start: new THREE.Vector3(0, 0, 0), end: new THREE.Vector3(-0.7, -1.4, 0.5) }
  ], []);

  // Signal packets state
  const packetState = useMemo<SignalPacket[]>(() => {
    return paths.map((path, idx) => ({
      start: path.start,
      end: path.end,
      progress: (idx / paths.length),
      speed: 0.18 + Math.random() * 0.15,
      color: idx % 2 === 0 ? '#B7FF00' : '#F2F2EE'
    }));
  }, [paths]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;

    // 1. Gentle Scan Sweep Plane
    if (sweepMeshRef.current) {
      sweepMeshRef.current.rotation.z = time * 0.35;
      const pulseOpacity = (0.2 + Math.sin(time * 1.8) * 0.08) * (1.0 - scrollOffset);
      (sweepMeshRef.current.material as THREE.MeshBasicMaterial).opacity = Math.max(0, pulseOpacity);
    }

    // 2. Animate Signal Packets along Vectors
    if (packetsRef.current) {
      packetState.forEach((packet, i) => {
        packet.progress = (packet.progress + delta * packet.speed) % 1.0;

        // Linear interpolation along edge
        const currentPos = new THREE.Vector3().lerpVectors(
          packet.start,
          packet.end,
          packet.progress
        );

        dummy.position.copy(currentPos);
        // Pulse size along route
        const scale = (0.02 + Math.sin(packet.progress * Math.PI) * 0.02) * (1.0 - scrollOffset * 0.5);
        dummy.scale.set(scale, scale, scale * 3.5);
        dummy.lookAt(packet.end);
        dummy.updateMatrix();

        packetsRef.current!.setMatrixAt(i, dummy.matrix);
      });

      packetsRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group>
      {/* Precision Scan Radar Sweep Disc */}
      <mesh ref={sweepMeshRef} rotation={[-Math.PI / 3, 0, 0]} position={[0, 0, -0.4]}>
        <ringGeometry args={[0.2, 2.4, 32, 1, 0, Math.PI / 2.5]} />
        <meshBasicMaterial
          color="#B7FF00"
          transparent={true}
          opacity={0.15}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {/* Procedural Data Signal Packets moving along network edges */}
      <instancedMesh
        ref={packetsRef}
        args={[undefined, undefined, packetState.length]}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="#B7FF00" transparent opacity={0.85} />
      </instancedMesh>
    </group>
  );
};
