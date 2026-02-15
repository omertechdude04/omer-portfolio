import { useEffect, useMemo, useState } from "react";
import Section from "../components/Section";
import { PROJECTS } from "../data/content";

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  const active = useMemo(() => PROJECTS[activeIdx], [activeIdx]);

  const openProject = (idx) => {
    setActiveIdx(idx);
    setOpen(true);
  };

  const close = () => setOpen(false);

  useEffect(() => {
    const onKey = (e) => {
      if (!open) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") setActiveIdx((i) => (i + 1) % PROJECTS.length);
      if (e.key === "ArrowLeft") setActiveIdx((i) => (i - 1 + PROJECTS.length) % PROJECTS.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Prevent background scroll while modal open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <Section id="projects" eyebrow="Selected work" title="Projects">
      <div className="appsShell">
        <div className="appsGrid" role="list">
          {PROJECTS.map((p, idx) => (
            <button
              key={p.title}
              type="button"
              className="appIcon"
              role="listitem"
              onClick={() => openProject(idx)}
            >
              <div className="appIconImgWrap">
                {p.image ? (
                  <img className="appIconImg" src={p.image} alt={`${p.title} icon`} loading="lazy" />
                ) : (
                  <div className="appIconFallback">+</div>
                )}
                <div className="appIconGloss" />
              </div>
              <div className="appIconLabel">{p.title}</div>
            </button>
          ))}
        </div>

        {/* Expanded "app" modal */}
        {open && (
          <div className="appModal" role="dialog" aria-modal="true" aria-label="Project details">
            <button className="appBackdrop" onClick={close} aria-label="Close" />

            <div className="appSheet">
              <div className="appSheetTop">
                <div className="appSheetHero">
                  <div className="appSheetThumb">
                    {active?.image ? (
                      <img src={active.image} alt={`${active.title} preview`} />
                    ) : (
                      <div className="appSheetThumbFallback">Add image</div>
                    )}
                    <div className="appSheetThumbGlow" />
                  </div>

                  <div className="appSheetTitle">
                    <div className="appSheetName">{active?.title}</div>
                    <div className="appSheetSub">{active?.subtitle || "Project"}</div>

                    <div className="appSheetBtns">
                      {active?.live && active.live !== "#" && (
                        <a className="appBtn primary" href={active.live} target="_blank" rel="noreferrer">
                          Link <span aria-hidden>↗</span>
                        </a>
                      )}
                      {active?.code && active.code !== "#" && (
                        <a className="appBtn ghost" href={active.code} target="_blank" rel="noreferrer">
                          Code <span aria-hidden>↗</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <button className="appClose" onClick={close} aria-label="Close">
                    ✕
                  </button>
                </div>

                <div className="appSheetBody">
                  <p className="appSheetDesc">{active?.desc}</p>

                  {Array.isArray(active?.highlights) && active.highlights.length > 0 && (
                    <div className="appSheetBlock">
                      <div className="appSheetBlockTitle">Highlights</div>
                      <ul className="appSheetBullets">
                        {active.highlights.map((h) => (
                          <li key={h}>
                            <span className="appDot" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {Array.isArray(active?.stack) && active.stack.length > 0 && (
                    <div className="appSheetBlock">
                      <div className="appSheetBlockTitle">Stack</div>
                      <div className="appSheetTags">
                        {active.stack.map((t) => (
                          <span key={t} className="appTag">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Optional extra fields if you ever add them */}
                  {active?.role && (
                    <div className="appSheetMetaRow">
                      <span>Role</span>
                      <span>{active.role}</span>
                    </div>
                  )}
                  {active?.year && (
                    <div className="appSheetMetaRow">
                      <span>Year</span>
                      <span>{active.year}</span>
                    </div>
                  )}
                </div>

                {/* mini dock navigation */}
                <div className="appDock">
                  <button
                    className="dockBtn"
                    onClick={() => setActiveIdx((i) => (i - 1 + PROJECTS.length) % PROJECTS.length)}
                    aria-label="Previous project"
                  >
                    ←
                  </button>

                  <div className="dockDots" aria-label="Project position">
                    {PROJECTS.map((_, i) => (
                      <span key={i} className={`dockDot ${i === activeIdx ? "on" : ""}`} />
                    ))}
                  </div>

                  <button
                    className="dockBtn"
                    onClick={() => setActiveIdx((i) => (i + 1) % PROJECTS.length)}
                    aria-label="Next project"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
