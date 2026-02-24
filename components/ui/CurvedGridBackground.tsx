"use client";
import type { ThreeElements } from "@react-three/fiber";

declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}

export {};
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";

type PointerState = {
  x: number; // -1 ~ 1
  y: number; // -1 ~ 1
  active: boolean;
};

function CurvedGrid() {
  const meshRef = useRef<THREE.Mesh>(null);
  const timeRef = useRef(0);
  const pointerRef = useRef<PointerState>({ x: 0, y: 0, active: false });

  // 이벤트는 Canvas가 아니라 window/document에서 받도록
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      // viewport 기준 -1~1 정규화
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -((e.clientY / window.innerHeight) * 2 - 1);
      pointerRef.current = { x: nx, y: ny, active: true };
    };

    const onLeave = () => {
      // 페이지/탭을 벗어나면 ripple 정리
      pointerRef.current.active = false;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    // 브라우저에 따라 pointerleave가 window에서 안 잡히는 경우가 있어서 보강
    window.addEventListener("blur", onLeave);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) onLeave();
    });

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("blur", onLeave);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("visibilitychange", () => {
        if (document.hidden) onLeave();
      });
    };
  }, []);

  const { size, viewport } = useThree();
  // size: px 단위 (canvas의 실제 픽셀 크기)
  // viewport: world 단위 (카메라 기준 화면에 보이는 월드 크기)

  // === 1) CELL_PX를 월드 단위로 변환 ===
  const CELL_PX = 50;
  const CANVAS_WIDTH = viewport.width * 1.2;
  const CANVAS_HEIGHT = viewport.height * 1.2;

  const worldPerPixelX = CANVAS_WIDTH / size.width;

  // 정사각형 셀을 위해 X/Y 중 하나로 통일 (보통 X 기준 추천)
  const cellWorld = worldPerPixelX * CELL_PX;

  // === 2) segments를 정수로 계산 ===
  const segX = Math.max(1, Math.round(CANVAS_WIDTH / cellWorld));
  const segY = Math.max(1, Math.round(CANVAS_HEIGHT / cellWorld));

  // === 3) plane 크기는 viewport에 딱 맞게 ===
  const geo = useMemo(
    () => new THREE.PlaneGeometry(CANVAS_WIDTH, CANVAS_HEIGHT, segX, segY),
    [CANVAS_WIDTH, CANVAS_HEIGHT, segX, segY],
  );

  // 원본 위치 저장
  const base = useMemo(() => {
    const pos = geo.attributes.position;
    const arr = new Float32Array(pos.array.length);
    arr.set(pos.array as Float32Array);
    return arr;
  }, [geo]);

  useFrame((_, delta) => {
    timeRef.current += delta;

    const mesh = meshRef.current;
    if (!mesh) return;

    const pos = (mesh.geometry as THREE.PlaneGeometry).attributes.position;
    const arr = pos.array as Float32Array;

    const { x, y, active } = pointerRef.current;

    // pointer(-1~1)을 plane 좌표로 매핑
    const mx = x * (viewport.width / 2);
    const my = y * (viewport.height / 2);

    // ripple 파라미터 (정신없지 않게 작게)
    const rippleAmp = 0.26;
    const rippleFreq = 3.6;
    const rippleSpeed = 5.2;
    const rippleFalloff = 1.1;

    for (let i = 0; i < arr.length; i += 3) {
      const x0 = base[i + 0];
      const y0 = base[i + 1];

      const dx = x0 - mx;
      const dy = y0 - my;
      const d = Math.sqrt(dx * dx + dy * dy);

      // active일 때만 ripple 생성, 아니면 0으로 복귀
      const targetZ = active
        ? Math.sin(d * rippleFreq - timeRef.current * rippleSpeed) *
          Math.exp(-d * rippleFalloff) *
          rippleAmp
        : 0;

      // 부드럽게 따라가게 (damp)
      const z = arr[i + 2];
      arr[i + 2] = z + (targetZ - z) * 0.12;
    }

    pos.needsUpdate = true;
    (mesh.geometry as THREE.PlaneGeometry).computeVertexNormals();
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geo}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    >
      <meshStandardMaterial
        color="#e5e5e5"
        wireframe
        opacity={0.08}
        transparent
      />
    </mesh>
  );
}

export function CurvedGridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50">
      <Canvas camera={{ position: [0, 0, 6.8], fov: 52 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 6, 4]} intensity={0.85} />
        <directionalLight position={[-4, 2, -2]} intensity={0.25} />
        <CurvedGrid />
      </Canvas>
    </div>
  );
}
