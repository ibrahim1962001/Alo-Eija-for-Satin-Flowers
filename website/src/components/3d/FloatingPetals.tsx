"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface PetalProps {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  color: string;
  speed: number;
  offset: number;
}

function Petal({ position, rotation, scale, color, speed, offset }: PetalProps) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed + offset;
    ref.current.position.y = position[1] + Math.sin(t) * 0.3;
    ref.current.rotation.x = rotation[0] + Math.sin(t * 0.5) * 0.2;
    ref.current.rotation.z = rotation[2] + Math.cos(t * 0.3) * 0.15;
  });

  return (
    <mesh ref={ref} position={position} rotation={rotation} scale={scale}>
      <sphereGeometry args={[0.15, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.6]} />
      <meshPhysicalMaterial
        color={color}
        roughness={0.15}
        metalness={0.05}
        clearcoat={0.8}
        clearcoatRoughness={0.1}
        sheen={1}
        sheenRoughness={0.3}
        sheenColor={new THREE.Color(color).multiplyScalar(1.5)}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export function FloatingPetals() {
  const petals = useMemo(() => {
    const colors = ["#E8A0BF", "#F4C2C2", "#D4738F", "#F5D5E0", "#C9A962", "#FFF0F5"];
    return Array.from({ length: 40 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6 - 2,
      ] as [number, number, number],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ] as [number, number, number],
      scale: 0.4 + Math.random() * 0.8,
      color: colors[i % colors.length],
      speed: 0.3 + Math.random() * 0.5,
      offset: Math.random() * Math.PI * 2,
    }));
  }, []);

  return (
    <group>
      {petals.map((petal, i) => (
        <Petal key={i} {...petal} />
      ))}
    </group>
  );
}
