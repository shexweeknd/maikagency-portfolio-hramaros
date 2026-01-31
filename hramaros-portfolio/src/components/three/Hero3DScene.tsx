"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  // Generate random particles
  const particles = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.02;
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#0066FF"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

function FloatingCode() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Code-like floating elements */}
      {[...Array(8)].map((_, i) => (
        <mesh key={i} position={[
          Math.sin(i * Math.PI / 4) * 3,
          Math.cos(i * Math.PI / 4) * 2,
          Math.sin(i * Math.PI / 2) * 1.5
        ]}>
          <boxGeometry args={[0.1, 0.02, 0.5 + Math.random() * 0.5]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? "#0066FF" : "#8B5CF6"}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

function GlowingSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.05);
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -2]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshBasicMaterial
        color="#0066FF"
        transparent
        opacity={0.1}
        wireframe
      />
    </mesh>
  );
}

export function Hero3DScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <ParticleField />
        <FloatingCode />
        <GlowingSphere />
      </Canvas>
    </div>
  );
}
