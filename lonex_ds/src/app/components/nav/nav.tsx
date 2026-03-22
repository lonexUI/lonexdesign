import Link from "next/link";
import styles from "./nav.module.css";

const Nav: React.FC = () => (
    <nav className={styles.nav}>
        <div className={styles.logo}>lonex_ds</div>
        <ul className={styles.menu}>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
);

export default Nav;