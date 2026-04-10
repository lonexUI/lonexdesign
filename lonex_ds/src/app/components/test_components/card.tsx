"use client";
import styles from './components.module.css';
import Btn from './btn';
import { div, image } from 'framer-motion/client';
// import Alert from './alert';

interface CardProps {
    alert?: boolean;
    image?: boolean;
}

export default function Card({ alert, image }: CardProps) {
    return <div className={styles.card}>
        {/* <div className={styles.fakeImage}></div> */}
        {image && <div className={styles.fakeImage}></div>}
        <h3>Card Title</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
        {/* name Btn will become ldsBtn in future */}
        <Btn variant="primary" label="Click Me" />
        {alert && <div className={styles.alertWarning + ' ' + styles.alertMini}>Dont do that!</div>}
    </div>;
}