"use client";
import styles from './components.module.css';
import Btn from './btn';
// import Alert from './alert';

interface CardProps {
    variant?: 'normal' | 'quick note'
    alert?: boolean;
    image?: boolean;
}

export default function Card({ variant = 'normal', alert, image }: CardProps) {
    if (variant === 'quick note') {
        return <div className={`${styles.card} ${styles.quickNote}`}>
            <div className={styles.qnHeader}>
                Header
            </div>
            <div className={styles.qnContent}>
                Lorem ipsum dolor sit amet consectetur.
                {alert && <div className={`${styles.alertDanger} ${styles.alertMini}`}>Failed!</div>}
            </div>
        </div>;
    }
    return <div className={styles.card}>
        {image && <div className={styles.fakeImage}></div>}
        <h3>Card Title</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
        <Btn variant="primary" label="Click Me" />
        {alert && <div className={`${styles.alertWarning} ${styles.alertMini}`}>Don't do that!</div>}
    </div>;
}