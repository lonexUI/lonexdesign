"use client";

import ClientComponent from "./ClientComponent";
import { PropOption } from "@/lib/parseProps";
import React from "react";
import styles from "./componentsLibrary.module.css";
import * as Components from "../components";

interface ComponentData {
    name: string;
    slug: string;
    category: string;
    description: string;
    code: string;
    props: string;
}

interface previewProps {
    componentName: string;
    propOptions: PropOption[];
    componentData: ComponentData;
}

const componentMap: Record<string, React.ComponentType<Record<string, string | boolean>> | undefined> = {
    button: Components.Btn,
    alert: Components.Alert,
    card: Components.Card,
    input: Components.Input,
    links: Components.Links,
};

export default function ControlsWithPreview({ componentName, propOptions, componentData }: previewProps) {
    const Component = componentMap[componentName];

    // Memoize defaults to avoid recalculating on every render
    const defaults = React.useMemo(() => {
        const selected: Record<string, string> = {};
        const toggled: Record<string, boolean> = {};

        propOptions.forEach((option) => {
            if (option.type === "select" && option.default) {
                selected[option.name] = option.default as string;
            }
            if (option.type === "toggle" && typeof option.default === "boolean") {
                toggled[option.name] = option.default;
            }
        });

        return { selected, toggled };
    }, [propOptions]);

    const [selectedValues, setSelectedValues] = React.useState<Record<string, string>>(defaults.selected);
    const [toggledProps, setToggledProps] = React.useState<Record<string, boolean>>(defaults.toggled);

    // Reset state when component or propOptions change
    React.useEffect(() => {
        setSelectedValues(defaults.selected);
        setToggledProps(defaults.toggled);
    }, [defaults]);

    return (
        <>
            <main className={styles.mainContent}>
                <section className={styles.componentHeader}>
                    <div className={styles.breadcrumb}>
                        <span className={styles.breadcrumbItem}>Components</span>
                        <span className={styles.breadcrumbItem}>{componentData.category}</span>
                    </div>
                    <h1>{componentData.name}</h1>
                    <p>{componentData.description}</p>
                </section>
                <section className={styles.previewStage}>
                    <div className="canvas">
                        {Component ? <Component {...selectedValues} {...toggledProps} /> : <div>Component not found</div>}
                    </div>
                </section>
                <section className={styles.codePreview}>
                    <div className={styles.codeBlock}>
                        <code>{componentData.code}</code>
                    </div>
                </section>
            </main>
            <aside className={[styles.sidebar, styles.controls].join(" ")}>
                <h3>Properties</h3>
                <ClientComponent
                    propOptions={propOptions}
                    selectedValues={selectedValues}
                    toggledProps={toggledProps}
                    setSelectedValues={setSelectedValues}
                    setToggledProps={setToggledProps}
                />
            </aside>
        </>
    )
}