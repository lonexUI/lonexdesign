"use client";

import styles from './components.module.css';

interface AlertProps {
    variant?: 'danger' | 'info' | 'success' | 'warning';
    mini?: boolean;
}

const Alert: React.FC<AlertProps> = ({ variant = 'warning', mini = false }) => {
    const alertClass = styles.alert + " " + styles[`alert${variant.charAt(0).toUpperCase() + variant.slice(1)}`];
    if (mini) {
        return (
            <div className={alertClass + ' ' + styles.alertMini}>
                <strong>{variant.charAt(0).toUpperCase() + variant.slice(1)}!</strong>
            </div>
        )
    }
    return (
        <div className={alertClass}>
            <strong>{variant.charAt(0).toUpperCase() + variant.slice(1)}!</strong> This is an alert message.
        </div>
    )
}

export default Alert;