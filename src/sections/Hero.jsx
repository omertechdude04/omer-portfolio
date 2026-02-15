import Navbar from "../components/Navbar";
import AstroBackground from "../components/AstroBackground";
import Typewriter from "../components/Typewriter";

// ✅ Put your image at: src/assets/me.jpg
import me from "../assets/omer4.png";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <AstroBackground />

      {/* ✅ Navbar sits ON TOP of hero background */}
      <Navbar overlay />

      <div className="containerX heroGrid">
        <div>
          <div className="kicker">FRONT-END • UI • PERFORMANCE</div>

          <h1 className="titleXL" style={{ marginTop: 14 }}>
            Hi, I&apos;m Omer <span className="wave">👋</span>
          </h1>

          <div style={{ marginTop: 10, fontSize: 18, fontWeight: 700 }}>
            I&apos;m a <Typewriter words={["UI Builder", "Front-End Developer", "React Developer"]} />
          </div>

          <p className="lead" style={{ marginTop: 14 }}>
            I build sleek websites and web apps with modern UI, smooth motion, and clean code —
            “less but better” design, strong typography, and crisp layouts.
          </p>

          <div className="heroButtons">
            <a className="pill btnGhost" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="pill btnGhost" href="https://github.com/omertechdude04" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>

          <div className="scrollHint">
            <span>Scroll</span> <span className="arrow">↓</span>
          </div>
        </div>

        <div className="portraitWrap">
          <div className="portrait">
            <img src={me} alt="Omer headshot" />
          </div>
        </div>
      </div>
    </section>
  );
}
