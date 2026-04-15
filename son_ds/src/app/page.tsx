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
          <Link href="/lds_components" className="btn btn-secondary">
            View Components
          </Link>
        </div>
      </div>
      <div className="bento-container">

        <div className="bento-tile tile-main has-glow glow-blue">
          <div className="tile-content">
            <div>
              <h3>Ultra Lightweight</h3>
              <p>Optimized for Core Web Vitals. No unnecessary bloat or heavy runtimes; just pure, high-performance CSS.</p>
            </div>

            <div className="stat-container">
              <div className="stat-value">1.2<span className="stat-unit">kb</span></div>
              <div className="visual-chart">
                <div className="bar bar-1"></div>
                <div className="bar bar-2"></div>
                <div className="bar bar-3"></div>
                <div className="bar bar-4"></div>
                <div className="bar bar-5"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bento-tile tile-wide has-glow glow-purple">
          <div className="tile-content">
            <div>
              <h3>Built for Modernity</h3>
              <p>Seamlessly integrates with your existing framework of choice.</p>
              <div className="pills-row">
                <span className="pill-small pill-blue"><span className="dot"></span> React</span>
                <span className="pill-small pill-green"><span className="dot"></span> Vue</span>
                <span className="pill-small pill-yellow"><span className="dot"></span> Svelte</span>
              </div>
            </div>
          </div>
          <div className="decorative-code">
            import Lonex from '@lonex_ds';
          </div>
        </div>

        <div className="bento-tile">
          <h3>Typography</h3>
          <p>A balanced, readable scale.</p>
          <div className="type-preview">
            <span className="type-bg">Aa</span>
            <span className="type-fg">Aa</span>
          </div>
        </div>

        <div className="bento-tile tile-dark-mode">
          <h3>Native Dark Mode</h3>
          <p>Auto-sensing themes via prefers-color-scheme.</p>
          <div className="theme-toggle">
            <div className="toggle-track">
              <div className="toggle-thumb"></div>
            </div>
          </div>
        </div>

      </div>
      <div className="terminal">
        <div className="terminal-header">
          <div className="dot dot-red"></div>
          <div className="dot dot-yellow"></div>
          <div className="dot dot-green"></div>
        </div>
        <div className="terminal-body">
          <code>
            <span style={{ color: '#71717a' }}>$</span>
            <span className="command">npm install</span> lonex-ds
          </code>
          <Link href="#" className="copy-btn">
            Copy
          </Link>
        </div>
      </div>
      <ThemeToggle />
    </div>
  );
}
