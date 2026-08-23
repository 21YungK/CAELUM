"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import {
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";
import * as THREE from "three";

function CaelumDrone({
  onLaunch,
}: {
  onLaunch?: () => void;
}) {
  const group = useRef<THREE.Group>(null);

  const [launched, setLaunched] = useState(false);

  const rotorFL = useRef<THREE.Object3D | null>(null);
  const rotorFR = useRef<THREE.Object3D | null>(null);
  const rotorRL = useRef<THREE.Object3D | null>(null);
  const rotorRR = useRef<THREE.Object3D | null>(null);

  const isDragging = useRef(false);

  const lastPointerX = useRef(0);
  const lastPointerY = useRef(0);

  const { scene } = useGLTF("/models/caelum-uav.glb");

  const { viewport, size } = useThree();

  const isMobile = size.width < 768;

  const launchDrone = () => {
    if (launched) return;

    setLaunched(true);
    onLaunch?.();
  };

  useEffect(() => {
    rotorFL.current =
      scene.getObjectByName("Rotor_FL") ?? null;

    rotorFR.current =
      scene.getObjectByName("Rotor_FR") ?? null;

    rotorRL.current =
      scene.getObjectByName("Rotor_RL") ?? null;

    rotorRR.current =
      scene.getObjectByName("Rotor_RR") ?? null;
  }, [scene]);

  useFrame((state, delta) => {
    if (!group.current) return;

    const t = state.clock.elapsedTime;

    if (!launched) {
      // Scaling

      const targetScale = isMobile ? 0.48 : 0.8;

      group.current.scale.lerp(
        new THREE.Vector3(
          targetScale,
          targetScale,
          targetScale
        ),
        Math.min(delta * 5, 1)
      );

      // Hover

      if (!isDragging.current) {
        group.current.rotation.y += delta * 0.14;
      }

      // WIP stabilization

      if (!isDragging.current) {
        group.current.rotation.x =
          THREE.MathUtils.lerp(
            group.current.rotation.x,
            0.08 +
              Math.sin(t * 1.15) * 0.035,
            Math.min(delta * 2, 1)
          );

        group.current.rotation.z =
          THREE.MathUtils.lerp(
            group.current.rotation.z,
            Math.sin(t * 1.65) * 0.045,
            Math.min(delta * 2, 1)
          );
      }

      // responsive pos

      const baseX = isMobile ? 0 : 0.45;
      const baseY = isMobile ? -0.05 : -0.2;

      group.current.position.x =
        baseX +
        Math.sin(t * 0.55) *
          (isMobile ? 0.015 : 0.04);

      group.current.position.y =
        baseY +
        Math.sin(t * 0.9) *
          (isMobile ? 0.04 : 0.08);
    }

    if (launched) {

      // launch mode

      group.current.rotation.x =
        THREE.MathUtils.lerp(
          group.current.rotation.x,
          -0.45,
          Math.min(delta * 6, 1)
        );

      group.current.rotation.z =
        THREE.MathUtils.lerp(
          group.current.rotation.z,
          -0.3,
          Math.min(delta * 5, 1)
        );

      group.current.rotation.y += delta * 0.65;

      group.current.position.y += delta * 4.5;
      group.current.position.x += delta * 2;
      group.current.position.z -= delta * 5;
    }

    // Props
    const propSpeed =
      delta * (launched ? 55 : 28);

    if (rotorFL.current) {
      rotorFL.current.rotation.y += propSpeed;
    }

    if (rotorRR.current) {
      rotorRR.current.rotation.y += propSpeed;
    }

    if (rotorFR.current) {
      rotorFR.current.rotation.y -= propSpeed;
    }

    if (rotorRL.current) {
      rotorRL.current.rotation.y -= propSpeed;
    }
  });

  return (
    <group
      ref={group}
      scale={isMobile ? 0.48 : 0.8}
      rotation={[0.08, -0.75, 0]}
      position={[
        isMobile ? 0 : 0.45,
        isMobile ? -0.05 : -0.2,
        0,
      ]}
      onPointerDown={(e) => {
        e.stopPropagation();

        isDragging.current = true;

        lastPointerX.current = e.clientX;
        lastPointerY.current = e.clientY;

        (
          e.target as HTMLElement
        ).setPointerCapture?.(e.pointerId);
      }}
      onPointerMove={(e) => {
        if (
          !isDragging.current ||
          !group.current ||
          launched
        ) {
          return;
        }

        e.stopPropagation();

        const deltaX =
          e.clientX -
          lastPointerX.current;

        const deltaY =
          e.clientY -
          lastPointerY.current;

        lastPointerX.current = e.clientX;
        lastPointerY.current = e.clientY;

        // Horizontal drag
        group.current.rotation.y +=
          deltaX * (isMobile ? 0.012 : 0.008);

        // Vertical drag
        group.current.rotation.x +=
          deltaY * (isMobile ? 0.01 : 0.006);

        // Fast swipe = launch
        const launchThreshold =
          isMobile ? 55 : 38;

        if (
          Math.abs(deltaX) >
          launchThreshold
        ) {
          launchDrone();
        }
      }}
      onPointerUp={(e) => {
        e.stopPropagation();

        isDragging.current = false;

        (
          e.target as HTMLElement
        ).releasePointerCapture?.(
          e.pointerId
        );
      }}
      onPointerCancel={() => {
        isDragging.current = false;
      }}
    >
      <primitive object={scene} />
    </group>
  );
}

export default function DroneScene({
  onLaunch,
}: {
  onLaunch?: () => void;
}) {
  return (
    <div className="h-full w-full cursor-grab touch-none active:cursor-grabbing">
      <Canvas
        camera={{
          position: [5.8, 3.3, 7.8],
          fov: 34,
        }}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <ambientLight intensity={0.65} />

        <directionalLight
          position={[4, 6, 5]}
          intensity={3}
        />

        <directionalLight
          position={[-4, 3, 1]}
          intensity={1.6}
        />

        <directionalLight
          position={[0, -2, -5]}
          intensity={0.8}
        />

        <Suspense fallback={null}>
          <CaelumDrone
            onLaunch={onLaunch}
          />

          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/caelum-uav.glb");