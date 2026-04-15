"use client";

import { motion } from "framer-motion";
import styles from "./componentsLibrary.module.css";
import { PropOption } from "@/lib/parseProps";

interface ClientComponentProps {
    propOptions: PropOption[];
    selectedValues: Record<string, string>;
    toggledProps: Record<string, boolean>;
    setSelectedValues: React.Dispatch<React.SetStateAction<Record<string, string>>>;
    setToggledProps: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}

export default function ClientComponent({
    propOptions,
    selectedValues,
    toggledProps,
    setSelectedValues,
    setToggledProps,
}: ClientComponentProps) {
    const handleSelectChange = (propName: string, value: string) => {
        setSelectedValues((prev) => ({
            ...prev,
            [propName]: value,
        }));
    };

    const handleToggle = (propName: string) => {
        setToggledProps((prev) => ({
            ...prev,
            [propName]: !prev[propName],
        }));
    };

    return (
        <>
            {propOptions.map((option) => (
                <div key={option.name}>
                    {option.type === "select" && (
                        <div className={styles.propertyGroup}>
                            <label className={styles.propertyLabel}>
                                {option.name.charAt(0).toUpperCase() + option.name.slice(1)}
                            </label>
                            <div className={styles.segmentedControl}>
                                {option.values?.map((val) => (
                                    <button
                                        key={`${option.name}-${val}`}
                                        onClick={() => handleSelectChange(option.name, val)}
                                        className={`${styles.segmentBtn} ${selectedValues[option.name] === val ? styles.activeText : ""
                                            }`}
                                    >
                                        {selectedValues[option.name] === val && (
                                            <motion.div
                                                layoutId={`active-pill-${option.name}`}
                                                className={styles.activeBackground}
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                        <span className={styles.btnLabel}>{val}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {option.type === "toggle" && (
                        <div className={styles.propertyGroupInline}>
                            <label className={styles.propertyLabel}>
                                {option.name.charAt(0).toUpperCase() + option.name.slice(1)}
                            </label>
                            <label className={styles.switch}>
                                <input
                                    type="checkbox"
                                    checked={toggledProps[option.name] || false}
                                    onChange={() => handleToggle(option.name)}
                                />
                                <span className={styles.slider}></span>
                            </label>
                        </div>
                    )}
                </div>
            ))}
        </>
    );
}