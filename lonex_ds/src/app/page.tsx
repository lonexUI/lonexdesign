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
      <ThemeToggle />
    </div>
  );
}
