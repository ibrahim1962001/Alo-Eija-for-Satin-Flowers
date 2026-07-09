"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, Sparkles } from "@react-three/drei";
import { FloatingPetals } from "./FloatingPetals";
import { SatinRose } from "./SatinRose";

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <hemisphereLight
        intensity={0.6}
        color="#FFE4EC"
        groundColor="#2D1520"
      />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#FFE4EC" />
      <directionalLight position={[-3, 2, -2]} intensity={0.4} color="#C9A962" />
      <pointLight position={[0, 3, 2]} intensity={0.6} color="#F4C2C2" />

      <SatinRose />
      <FloatingPetals />

      <Sparkles
        count={40}
        scale={10}
        size={2}
        speed={0.3}
        color="#C9A962"
        opacity={0.5}
      />

      <Stars
        radius={50}
        depth={30}
        count={100}
        factor={2}
        saturation={0.5}
        fade
        speed={0.5}
      />
    </>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
