export default function About() {
  const bullets = [
    "Front-End Engineer focused on clean UI, strong typography, and smooth motion.",
    "I build fast React websites and web apps with Tailwind + modern component architecture.",
    "I care about performance, accessibility, and layouts that feel premium and easy to use.",
    "I like turning messy ideas into clean components and shipping real projects.",
    "Always learning, always improving — consistency is my superpower.",
  ];

  return (
    <section id="about" className="section">
      <div className="containerX">
        <div className="sectionHeader">
          <div className="kicker">INTRODUCTION</div>
          <h2 className="titleL" style={{ marginTop: 10 }}>
            About Me
          </h2>
        </div>

        <div className="featureList">
          {bullets.map((t) => (
            <div key={t} className="featureItem">
              <span className="bullet" />
              <span>{t}</span>
            </div>
          ))}
        </div>

        <div className="mini3">
          <div>
            <div className="miniLabel">FOCUS</div>
            <div className="miniValue">UI Polish</div>
          </div>
          <div>
            <div className="miniLabel">BUILD</div>
            <div className="miniValue">React Apps</div>
          </div>
          <div>
            <div className="miniLabel">STYLE</div>
            <div className="miniValue">Clean + modern</div>
          </div>
        </div>
      </div>
    </section>
  );
}
