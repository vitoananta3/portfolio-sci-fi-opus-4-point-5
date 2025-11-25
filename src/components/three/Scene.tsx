"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, useTexture } from "@react-three/drei";
import { useRef, useMemo, Suspense } from "react";
import type * as THREE from "three";

function ParticleField() {
  const points = useRef<THREE.Points>(null);
  const particleCount = 2000;

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 50;
      positions[i3 + 1] = (Math.random() - 0.5) * 50;
      positions[i3 + 2] = (Math.random() - 0.5) * 50;

      // Cyan to purple color range
      const t = Math.random();
      colors[i3] = 0.2 + t * 0.3; // R
      colors[i3 + 1] = 0.7 + t * 0.2; // G
      colors[i3 + 2] = 0.9 + t * 0.1; // B
    }

    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02;
      points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

function HolographicRing({
  radius = 3,
  tube = 0.02,
  position = [0, 0, 0] as [number, number, number],
  rotationSpeed = 0.5,
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * rotationSpeed;
      meshRef.current.rotation.z = state.clock.elapsedTime * rotationSpeed * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[radius, tube, 16, 100]} />
      <meshBasicMaterial color="#00d4ff" transparent opacity={0.4} />
    </mesh>
  );
}

function HolographicCore() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
    if (coreRef.current) {
      coreRef.current.scale.setScalar(
        1 + Math.sin(state.clock.elapsedTime * 2) * 0.05
      );
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} position={[0, 0, -5]}>
        {/* Central core */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[0.8, 2]} />
          <meshBasicMaterial
            color="#00d4ff"
            transparent
            opacity={0.3}
            wireframe
          />
        </mesh>

        {/* Inner glow */}
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshBasicMaterial color="#00ffff" transparent opacity={0.2} />
        </mesh>

        {/* Orbiting rings */}
        <HolographicRing radius={1.5} rotationSpeed={0.3} />
        <HolographicRing radius={2} rotationSpeed={-0.4} />
        <HolographicRing radius={2.5} rotationSpeed={0.2} />
      </group>
    </Float>
  );
}

function GridFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -8, 0]}>
      <planeGeometry args={[100, 100, 50, 50]} />
      <meshBasicMaterial color="#00d4ff" transparent opacity={0.05} wireframe />
    </mesh>
  );
}

function SceneContent() {
  return (
    <>
      <color attach="background" args={["#0a0d14"]} />
      <fog attach="fog" args={["#0a0d14", 10, 50]} />

      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#00d4ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8b5cf6" />

      <Stars
        radius={100}
        depth={50}
        count={3000}
        factor={3}
        saturation={0.5}
        fade
        speed={0.5}
      />

      <ParticleField />
      <HolographicCore />
      <GridFloor />
    </>
  );
}

export function Scene() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 pointer-events-none" />
    </div>
  );
}

