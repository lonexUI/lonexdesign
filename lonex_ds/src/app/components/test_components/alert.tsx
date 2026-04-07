"use client";

import styles from './components.module.css';

interface AlertProps {
    variant?: 'danger' | 'info' | 'success' | 'warning';
}

const Alert: React.FC<AlertProps> = ({ variant = 'warning' }) => {
    const alertClass = styles.alert + " " + styles[`alert${variant.charAt(0).toUpperCase() + variant.slice(1)}`];
    return (
        <div className={alertClass}>
            <strong>{variant.charAt(0).toUpperCase() + variant.slice(1)}!</strong> This is an alert message.
        </div>
    )
}

export default Alert;