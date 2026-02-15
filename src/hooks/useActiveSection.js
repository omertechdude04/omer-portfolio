import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view.
 * Expects section elements like <section id="about">...</section>
 */
export default function useActiveSection(sectionIds = []) {
  const [active, setActive] = useState(sectionIds?.[0] || "home");

  useEffect(() => {
    const ids = Array.isArray(sectionIds) ? sectionIds : [];
    if (!ids.length) return;

    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const io = new IntersectionObserver(
      (entries) => {
        // pick the most visible entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      { root: null, threshold: [0.2, 0.35, 0.5, 0.65] }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sectionIds]);

  return active;
}
