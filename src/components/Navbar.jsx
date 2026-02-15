import { useEffect, useState } from "react";
import logo from "../assets/logo2.png";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
];

export default function Navbar({ overlay = false }) {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const ids = LINKS.map((l) => l.id);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.05, 0.12, 0.2] }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const go = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`navWrap ${overlay ? "navOverlay" : ""}`}>
      <div className="containerX navInner">
        <a
          href="#top"
          className="brand"
          onClick={(e) => {
            e.preventDefault();
            go("top");
          }}
        >
          <img src={logo} alt="OMER TECH DUDE Logo" className="brandLogo" />
        </a>

        <nav className="navLinks" aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => {
                e.preventDefault();
                go(l.id);
              }}
              className={`navLink ${active === l.id ? "active" : ""}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="navCta">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              go("contact");
            }}
            className="navContactBtn"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
