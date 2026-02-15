import Section from "../components/Section";
import { SKILLS } from "../data/content";

// ✅ Icon URLs (Devicon via jsDelivr)
const ICONS = {
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Redux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  Tailwind:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  Vite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",

  // If you want a real Framer icon later, we can swap this to a local SVG.
  "Framer Motion":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-plain.svg",

  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  GitHub:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  Netlify:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
  "Figma (basic)":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",

  Swift: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
};

function iconFor(label) {
  if (ICONS[label]) return ICONS[label];
  const first = String(label).split(" ")[0];
  return ICONS[first] || "";
}

function SkillTile({ label }) {
  const src = iconFor(label);

  return (
    <div className="skillTile" role="listitem" aria-label={label}>
      <div className="skillTileInner">
        {src ? (
          <img
            className="skillTileIcon"
            src={src}
            alt={label}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              const wrap = e.currentTarget.closest(".skillTile");
              if (wrap) wrap.classList.add("noIcon");
            }}
          />
        ) : null}

        <div className="skillTileText">{label}</div>
      </div>
    </div>
  );
}

function SkillGroup({ label, items }) {
  return (
    <div className="skillGroup">
      <div className="skillGroupLabel">{label}</div>
      <div className="skillGrid" role="list">
        {items.map((s) => (
          <SkillTile key={s} label={s} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  // keep your “Swift (a little)” but show as Swift
  const extraFixed = (SKILLS.extra || []).map((x) =>
    x.toLowerCase().startsWith("swift") ? "Swift" : x
  );

  return (
    <Section id="skills" eyebrow="Technical proficiencies" title="Skills">
      <div className="skillsWrap">
        <SkillGroup label="PROGRAMMING" items={SKILLS.programming} />
        <SkillGroup label="TOOLS" items={SKILLS.tools} />
      </div>
    </Section>
  );
}
