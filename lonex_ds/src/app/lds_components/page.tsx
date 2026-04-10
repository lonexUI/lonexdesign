import styles from "./componentsLibrary.module.css";
import { fetchComponent } from "@/lib/fetchComponents";
import { parseComponentProps } from "@/lib/parseProps";
import ControlsWithPreview from "./ControlsWithPreview";
import * as Components from "../components";
import Link from "next/link";
import React from "react";

const components: Record<string, React.ComponentType<any>> = {
    "button": Components.Btn,
    "alert": Components.Alert,
    "card": Components.Card
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
                        <Link href="?component=alert"><li className={styles.componentItem}>Alerts</li></Link>
                        <Link href="?component=card"><li className={styles.componentItem}>Cards</li></Link>
                        <li className={styles.componentItem}>Navbar</li>
                        <li className={styles.componentItem}>Header</li>
                        <li className={styles.componentItem}>Dropdown</li>
                        <li className={styles.componentItem}>Search</li>
                    </ul>
                    <span className={styles.subtitle}>TOKENS</span>
                    <ul className={styles.componentList}>
                        <li className={styles.componentItem}>Colors</li>
                        <li className={styles.componentItem}>Typography</li>
                        <li className={styles.componentItem}>Motion</li>
                    </ul>
                </aside>
                <ControlsWithPreview Component={Component} propOptions={propOptions} componentData={componentData} />
            </div>
        </main>
    );
}