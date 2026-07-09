"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function RosePetal({
  angle,
  radius,
  height,
  color,
}: {
  angle: number;
  radius: number;
  height: number;
  color: string;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.z = angle + Math.sin(t * 0.5 + angle) * 0.05;
  });

  return (
    <mesh
      ref={ref}
      position={[
        Math.cos(angle) * radius,
        height,
        Math.sin(angle) * radius,
      ]}
      rotation={[0.3, angle, 0.2]}
      scale={[0.6, 1, 0.3]}
    >
      <sphereGeometry args={[0.35, 12, 12, 0, Math.PI * 2, 0, Math.PI * 0.55]} />
      <meshPhysicalMaterial
        color={color}
        roughness={0.1}
        metalness={0.02}
        clearcoat={1}
        clearcoatRoughness={0.05}
        sheen={1}
        sheenRoughness={0.2}
        sheenColor={new THREE.Color("#FFE4EC")}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export function SatinRose() {
  const groupRef = useRef<THREE.Group>(null);
  const petalCount = 12;
  const colors = ["#D4738F", "#E8A0BF", "#F4C2C2", "#C2557A"];

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} position={[0, 0, 0]} scale={1.2}>
        {Array.from({ length: petalCount }, (_, i) => {
          const layer = Math.floor(i / 4);
          const angleInLayer = ((i % 4) / 4) * Math.PI * 2;
          return (
            <RosePetal
              key={i}
              angle={angleInLayer + layer * 0.4}
              radius={0.15 + layer * 0.2}
              height={layer * 0.08}
              color={colors[layer % colors.length]}
            />
          );
        })}

        <mesh position={[0, -0.1, 0]} scale={[0.15, 0.4, 0.15]}>
          <cylinderGeometry args={[1, 1.2, 1, 8]} />
          <meshStandardMaterial color="#2D5A27" roughness={0.8} />
        </mesh>

        <mesh position={[0, 0.05, 0]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <MeshDistortMaterial
            color="#8B2252"
            roughness={0.2}
            metalness={0.1}
            distort={0.15}
            speed={1}
          />
        </mesh>
      </group>
    </Float>
  );
}
