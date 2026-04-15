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
    let btnClass = styles.btn + ' ' + styles[`btn${variant.charAt(0).toUpperCase() + variant.slice(1)}`];
    const btnSize = styles[`btn${size.charAt(0).toUpperCase() + size.slice(1)}`];
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