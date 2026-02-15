import { useEffect, useMemo, useState } from "react";

/**
 * Subtle mouse-driven parallax (no heavy libs).
 * Returns normalized mouse position and a helper to create transforms.
 */
export default function useMouseParallax({ strength = 18 } = {}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let raf = 0;

    const onMove = (e) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1; // -1..1
      const ny = (e.clientY / window.innerHeight) * 2 - 1; // -1..1

      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setPos({ x: nx, y: ny }));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  const api = useMemo(() => {
    const translate = (mult = 1) => ({
      x: pos.x * strength * mult,
      y: pos.y * strength * mult,
    });

    return { pos, translate };
  }, [pos, strength]);

  return api;
}
