import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <div className="containerX footer">
        <div className="hairline" style={{ marginBottom: 18 }} />
        © {new Date().getFullYear()} Omer Tech Dude
      </div>
    </main>
  );
}
