import Link from "next/link";
import styles from "./components.module.css";

interface LinksProps {
    colorHoverState?: boolean;
}

export default function Links({ colorHoverState }: LinksProps) {
    const linkClassName = colorHoverState ? styles.linkHover : styles.link;
    return <div>
        <Link className={`${linkClassName}`} href="#">This is a Link!</Link>
    </div>
}