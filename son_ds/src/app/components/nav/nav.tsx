import Link from "next/link";
import styles from "./nav.module.css";
import Image from "next/image";

const Nav: React.FC = () => (
  <nav className={styles.nav}>
    <div className={styles.logo}>
      <Image src="/logo-border.svg" width={31} height={31} alt="Son Logo" />
      son-ds
    </div>
    <ul className={styles.menu}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/docs">Docs</Link>
      </li>
      <li>
        <Link href="/lds_components" className={styles.primary}>
          Components
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
