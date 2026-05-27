import Link from "next/link";
import styles from "./components.module.css";

interface LinksProps {
  color?: boolean;
  underline?: boolean;
}

export default function Links({ color, underline }: LinksProps) {
  const linkClassName = `${styles.link} ${color ? styles.linkPrimary : ""} ${underline ? styles.linkHover : ""}`;

  return (
    <div>
      <Link className={linkClassName.trim()} href="#">
        This is a Link!
      </Link>
    </div>
  );
}
