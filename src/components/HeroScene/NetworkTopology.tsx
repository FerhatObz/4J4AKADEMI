import React, { useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export interface TopologyNode {
  id: number;
  label: string;
  sublabel: string;
  position: [number, number, number];
  isActive: boolean;
  status: 'ACTIVE' | 'SECURE' | 'ROUTING' | 'MONITORING';
}

interface NetworkTopologyProps {
  pointer: { x: number; y: number };
  scrollOffset?: number;
  onHoverNode?: (node: TopologyNode | null) => void;
}

export const NetworkTopology: React.FC<NetworkTopologyProps> = ({
  pointer,
  scrollOffset = 0,
  onHoverNode
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // 1. Structured Architectural 3D Node Distribution
  const nodes: TopologyNode[] = useMemo(() => [
    // Ingress Perimeter Cluster
    { id: 1, label: 'NODE_01', sublabel: 'INGRESS // TLS_PROXY', position: [-1.6, 1.2, -0.6], isActive: true, status: 'SECURE' },
    { id: 2, label: 'NODE_02', sublabel: 'FIREWALL // PACKET_FILTER', position: [-1.2, 0.4, 0.4], isActive: false, status: 'MONITORING' },
    { id: 3, label: 'NODE_03', sublabel: 'RECON_GATEWAY // PROBE', position: [-1.5, -0.8, -0.3], isActive: true, status: 'ROUTING' },
    
    // Core Gateway Cluster
    { id: 4, label: 'NODE_04', sublabel: 'AUTH_MATRIX // SHA-512', position: [-0.6, 1.6, 0.2], isActive: true, status: 'ACTIVE' },
    { id: 5, label: 'NODE_05', sublabel: 'ZERO_TRUST // POLICY_ENGINE', position: [0.7, 1.5, -0.4], isActive: false, status: 'SECURE' },
    { id: 6, label: 'NODE_06', sublabel: 'MEMORY_AUDITOR // CAS_SYNC', position: [1.4, 1.1, 0.5], isActive: true, status: 'ACTIVE' },

    // Middle Ring Cluster
    { id: 7, label: 'NODE_07', sublabel: 'BUG_BOUNTY // SURFACE_MAP', position: [1.8, 0.2, -0.5], isActive: true, status: 'ACTIVE' },
    { id: 8, label: 'NODE_08', sublabel: 'RED_TEAM // ADVERSARY_SIM', position: [1.3, -0.7, 0.6], isActive: true, status: 'ROUTING' },
    { id: 9, label: 'NODE_09', sublabel: 'PROTOCOL_PARSER // HTTP3', position: [0.5, -1.5, -0.2], isActive: false, status: 'MONITORING' },
    
    // Deep Analytical Cluster
    { id: 10, label: 'NODE_10', sublabel: 'VULN_DISPATCH // CVE_CORRELATE', position: [-0.7, -1.4, 0.5], isActive: true, status: 'SECURE' },
    { id: 11, label: 'NODE_11', sublabel: 'CRYPTO_VAULT // ED25519', position: [-0.9, -0.2, -1.1], isActive: false, status: 'SECURE' },
    { id: 12, label: 'NODE_12', sublabel: 'HEURISTIC_ENGINE // LLVM_PASS', position: [0.8, -0.3, -1.2], isActive: true, status: 'ACTIVE' },

    // Outer Harmonic Anchors
    { id: 13, label: 'NODE_13', sublabel: 'TELEMETRY // LATENCY_0.1MS', position: [2.1, -1.2, -0.8], isActive: false, status: 'ROUTING' },
    { id: 14, label: 'NODE_14', sublabel: 'SANDBOX // ISOLATION_ENV', position: [-2.0, -0.4, 0.7], isActive: true, status: 'SECURE' },
    { id: 15, label: 'NODE_15', sublabel: 'KERNEL_HOOK // eBPF_TRACE', position: [-0.2, 2.0, -0.7], isActive: true, status: 'ACTIVE' }
  ], []);

  // 2. Compute Connection Line Segments between Adjacent Nodes
  const { linePositions, lineColors } = useMemo(() => {
    const positions: number[] = [];
    const colors: number[] = [];
    const maxDist = 2.1;

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const p1 = new THREE.Vector3(...nodes[i].position);
        const p2 = new THREE.Vector3(...nodes[j].position);
        const dist = p1.distanceTo(p2);

        if (dist <= maxDist) {
          positions.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);

          const isHighlight = nodes[i].isActive && nodes[j].isActive;
          const r = isHighlight ? 0.72 : 0.25;
          const g = isHighlight ? 1.0 : 0.27;
          const b = isHighlight ? 0.0 : 0.3;

          colors.push(r, g, b, r, g, b);
        }
      }
    }

    return {
      linePositions: new Float32Array(positions),
      lineColors: new Float32Array(colors)
    };
  }, [nodes]);

  // Frame kinematics
  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const time = state.clock.elapsedTime;

    // Subtle drift with mouse reaction
    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      pointer.x * 0.25 + Math.sin(time * 0.1) * 0.05,
      2.5,
      delta
    );
    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      -pointer.y * 0.18 + Math.cos(time * 0.12) * 0.04,
      2.5,
      delta
    );

    // Scroll expansion/dissolution
    const targetScale = 1.0 + scrollOffset * 0.6;
    groupRef.current.scale.setScalar(
      THREE.MathUtils.damp(groupRef.current.scale.x, targetScale, 3, delta)
    );
  });

  const handlePointerOver = (node: TopologyNode, e: React.PointerEvent) => {
    e.stopPropagation();
    setHoveredId(node.id);
    onHoverNode?.(node);
  };

  const handlePointerOut = () => {
    setHoveredId(null);
    onHoverNode?.(null);
  };

  return (
    <group ref={groupRef}>
      {/* Topology Connection Line Web */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={lineColors.length / 3}
            array={lineColors}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors={true}
          transparent={true}
          opacity={0.45}
          linewidth={1}
          depthWrite={false}
        />
      </lineSegments>

      {/* 3D Structured Nodes */}
      {nodes.map((node) => {
        const isHovered = hoveredId === node.id;
        const nodeColor = isHovered ? '#FFFFFF' : node.isActive ? '#B7FF00' : '#8B8F92';
        const nodeScale = isHovered ? 0.07 : node.isActive ? 0.045 : 0.03;

        return (
          <group
            key={node.id}
            position={node.position}
            onPointerOver={(e) => handlePointerOver(node, e as unknown as React.PointerEvent)}
            onPointerOut={handlePointerOut}
          >
            {/* Core Node Point */}
            <mesh>
              <sphereGeometry args={[nodeScale, 16, 16]} />
              <meshBasicMaterial color={nodeColor} />
            </mesh>

            {/* Precision Wire Ring on Active/Hovered Nodes */}
            {(node.isActive || isHovered) && (
              <mesh rotation={[Math.PI / 4, 0, 0]}>
                <ringGeometry args={[nodeScale * 1.5, nodeScale * 1.8, 16]} />
                <meshBasicMaterial
                  color={nodeColor}
                  transparent={true}
                  opacity={isHovered ? 0.9 : 0.4}
                  side={THREE.DoubleSide}
                />
              </mesh>
            )}

            {/* Subtle Outer Pulse for Key Security Gateways */}
            {node.isActive && (
              <mesh>
                <sphereGeometry args={[nodeScale * 2.2, 12, 12]} />
                <meshBasicMaterial
                  color="#B7FF00"
                  transparent={true}
                  opacity={0.12}
                  wireframe={true}
                />
              </mesh>
            )}
          </group>
        );
      })}
    </group>
  );
};
