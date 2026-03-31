import styles from "./componentsLibrary.module.css";
import { fetchComponent } from "@/lib/fetchComponents";
import { parseComponentProps } from "@/lib/parseProps";
import ClientComponent from "./ClientComponent";
import * as Components from "../components";
import Link from "next/link";
import React from "react";

const components: Record<string, React.ComponentType<any>> = {
    "button": Components.Btn,
    "alert": Components.Alert,
    // "card": Components.Card,
};

export default async function componentsLibrary({ searchParams }: { searchParams: Promise<{ component?: string }> }) {
    const resolvedSearchParams = await searchParams;
    const componentName = resolvedSearchParams?.component || "alert";

    let componentData;
    try {
        componentData = await fetchComponent(componentName);
    } catch (error) {
        // Fallback data if fetch fails
        componentData = {
            name: "Unknown",
            slug: componentName,
            category: "Unknown",
            description: "Component data not found in CMS.",
            code: "// No code available",
            props: "{}"
        };
    }

    const propOptions = parseComponentProps(componentData.props);

    // Get the component from the registry
    const Component = components[componentData.name.toLowerCase()];

    return (
        <main>
            <div className={styles.container}>
                <aside className={styles.sidebar}>
                    <span className={styles.subtitle}>COMPONENTS</span>
                    <ul className={styles.componentList}>
                        <Link href="?component=btn"><li className={styles.componentItem}>Buttons</li></Link>
                        {/* <Link href="?component=card"><li className={styles.componentItem}>Cards</li></Link> */}
                        <Link href="?component=alert"><li className={styles.componentItem}>Alerts</li></Link>
                        <li className={styles.componentItem}>Modals</li>
                        <li className={styles.componentItem}>Forms</li>
                        <li className={styles.componentItem}>Typography</li>
                    </ul>
                    <span className={styles.subtitle}>TOKENS</span>
                    <ul className={styles.componentList}>
                        <li className={styles.componentItem}>Colors</li>
                        <li className={styles.componentItem}>Typography</li>
                        <li className={styles.componentItem}>Motion</li>
                    </ul>
                </aside>
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
                            {Component ? <Component /> : <div>Component not found</div>}
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
                    <ClientComponent propOptions={propOptions} />
                </aside>
            </div>
        </main>
    );
}