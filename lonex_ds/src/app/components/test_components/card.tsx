"use client";
import styles from './components.module.css';
import Btn from './btn';
import Alert from './alert';

export default function Card() {
    return <div className={styles.card}>
        {/* <div className={styles.fakeImage}></div> */}
        <h3>Card Title</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
        {/* name Btn will become ldsBtn in future */}
        <Alert variant="info" />
        <Btn variant="primary" label="Click Me" />
    </div>;
}