import ThemeToggle from "./components/theme/themeBtn";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="hero">
        <h1 className="hero_heading">lonex_ds</h1>
        <p>A modern design system for building beautiful interfaces.</p>
        <div className="cta-row">
          <Link href="#get-started" className="btn">
            Get Started
          </Link>
          <Link href="#" className="btn btn-secondary">
            View Components
          </Link>
        </div>
      </div>
      <section className="bento-grid">
        <div className="bento-tile tile-large">
          <div>
            <h3>Ultra Lightweight</h3>
            <p>Optimized for speed. No bloat, just pure CSS variables and utility classes.</p>
          </div>
          <div className="stat">1.2<span>kb</span></div>
        </div>

        <div className="bento-tile tile-wide">
          <h3>Built for Modernity</h3>
          <p>Seamless integration with <span className="accent-blue">React</span>, <span className="accent-blue">Vue</span>, and <span className="accent-blue">Vanilla JS</span>.</p>
        </div>

        <div className="bento-tile">
          <h3>Typography</h3>
          <p>Aa Bb Cc</p>
        </div>

        <div className="bento-tile">
          <h3>Native Dark Mode</h3>
          <p>Auto-sensing themes.</p>
        </div>
      </section>
      <ThemeToggle />
    </div>
  );
}
