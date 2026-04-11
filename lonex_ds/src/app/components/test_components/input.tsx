import styles from "./components.module.css";

export default function Input() {
    return <div className={styles.inputContainer}>
        <label htmlFor={styles.input}>Input Label</label>
        <input id={styles.input} type="text" placeholder="Enter text..." />
    </div>
}