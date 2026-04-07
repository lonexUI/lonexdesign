"use client";

import styles from './components.module.css';
interface BtnProps {
    variant?: 'primary' | 'secondary' | 'tretiary';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    rounded?: boolean;
    label?: string;
}

const Btn: React.FC<BtnProps> = ({ variant = 'primary', size = 'md', rounded = false, disabled = false, label = 'Button' }) => {
    let btnClass = styles.btn + ' ' + (variant === 'primary' ? styles.btnPrimary : variant === 'secondary' ? styles.btnSecondary : styles.btnTertiary);
    const btnSize = size === 'sm' ? styles.btnSm : size === 'lg' ? styles.btnLg : styles.btnMd;
    if (rounded) {
        btnClass += ` ${styles.btnRounded}`;
    }


    return (
        <button className={btnClass + ' ' + btnSize} disabled={disabled}>
            {label}
        </button>
    )
}

export default Btn;