"use client";

import { useEffect, useRef } from "react";
import type { WebGLRenderer, Points } from "three";

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    let renderer: WebGLRenderer | null = null;
    let disposed = false;

    const init = async () => {
      const THREE = await import("three");
      const { OrbitControls } = await import(
        "three/examples/jsm/controls/OrbitControls.js"
      );
      const { PCDLoader } = await import(
        "three/examples/jsm/loaders/PCDLoader.js"
      );

      if (disposed || !containerRef.current) return;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xfdf2e9);

      const camera = new THREE.PerspectiveCamera(
        30,
        window.innerWidth / window.innerHeight,
        0.01,
        40
      );
      camera.position.set(0, 0, 1);
      scene.add(camera);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.minDistance = 0.5;
      controls.maxDistance = 10;
      controls.enableDamping = true;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.8;

      scene.add(new THREE.AmbientLight(0xfff5e1, 0.8));
      const dirLight = new THREE.DirectionalLight(0xff7f50, 1.5);
      dirLight.position.set(5, 5, 5);
      scene.add(dirLight);

      let fallbackPoints: Points | null = null;

      const createFallback = () => {
        const count = 10000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const color = new THREE.Color(0xe67e22);

        for (let i = 0; i < count; i++) {
          const i3 = i * 3;
          const radius = 0.3 + Math.random() * 0.2;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(2 * Math.random() - 1);
          positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
          positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
          positions[i3 + 2] = radius * Math.cos(phi);
          colors[i3] = color.r;
          colors[i3 + 1] = color.g;
          colors[i3 + 2] = color.b;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute(
          "position",
          new THREE.BufferAttribute(positions, 3)
        );
        geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
          size: 0.003,
          vertexColors: true,
          transparent: true,
          opacity: 0.8,
        });

        fallbackPoints = new THREE.Points(geometry, material);
        scene.add(fallbackPoints);
      };

      const loader = new PCDLoader();
      loader.load(
        "https://threejs.org/examples/models/pcd/binary/Zaghetto.pcd",
        (points) => {
          points.geometry.center();
          points.geometry.rotateX(Math.PI);
          points.material.size = 0.003;
          (points.material as InstanceType<typeof THREE.PointsMaterial>).color.setHex(0xe67e22);
          scene.add(points);
        },
        undefined,
        () => {
          createFallback();
        }
      );

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer?.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", handleResize);

      const renderLoop = () => {
        if (disposed) return;
        animFrameRef.current = requestAnimationFrame(renderLoop);
        controls.update();
        if (fallbackPoints) fallbackPoints.rotation.y += 0.001;
        renderer?.render(scene, camera);
      };
      renderLoop();

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    };

    init();

    return () => {
      disposed = true;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (renderer && containerRef.current) {
        try {
          containerRef.current.removeChild(renderer.domElement);
        } catch {
          // already removed
        }
        renderer.dispose();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
