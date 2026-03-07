"use client";

import { useEffect, useRef } from "react";

export function BlurReveal() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = layerRef.current;
    if (!el) return;

    const onMouseMove = (e: MouseEvent) => {
      const xPercent = (e.clientX / window.innerWidth) * 100;
      const yPercent = (e.clientY / window.innerHeight) * 100;
      el.style.setProperty("--x", `${xPercent}%`);
      el.style.setProperty("--y", `${yPercent}%`);
    };

    document.addEventListener("mousemove", onMouseMove);
    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div
      ref={layerRef}
      className="blur-reveal fixed inset-0 z-[2] pointer-events-none"
      style={{
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
      aria-hidden="true"
    />
  );
}
