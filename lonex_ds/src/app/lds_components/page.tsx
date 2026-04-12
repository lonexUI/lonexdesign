import styles from "./componentsLibrary.module.css";
import { fetchComponent } from "@/lib/fetchComponents";
import { parseComponentProps } from "@/lib/parseProps";
import ControlsWithPreview from "./ControlsWithPreview";
import Link from "next/link";

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
    return (
        <main>
            <div className={styles.container}>
                <aside className={styles.sidebar}>
                    <span className={styles.subtitle}>COMPONENTS</span>
                    <ul className={styles.componentList}>


                        <details>
                            <summary className={styles.componentItem}>Atoms</summary>
                            <ul className={`${styles.componentList} ${styles.listInsideDropdown}`}>
                                <Link href="?component=button"><li className={styles.componentItem}>Buttons</li></Link>
                                <Link href="?component=alert"><li className={styles.componentItem}>Alerts</li></Link>
                                <Link href="?component=card"><li className={styles.componentItem}>Cards</li></Link>
                                <Link href="?component=input"><li className={styles.componentItem}>Input</li></Link>
                                <Link href="?component=links"><li className={styles.componentItem}>Links</li></Link>
                            </ul>
                        </details>
                        <details>
                            <summary className={styles.componentItem}>Molecules</summary>
                            <ul className={`${styles.componentList} ${styles.listInsideDropdown}`}>
                                <Link href="#"><li className={styles.componentItem}>Searchbar</li></Link>
                                <Link href="#"><li className={styles.componentItem}>Form</li></Link>
                                <Link href="#"><li className={styles.componentItem}>Dropdowns</li></Link>
                                <Link href="#"><li className={styles.componentItem}>Segmented Controls X</li></Link>
                                <Link href="#"><li className={styles.componentItem}>Modals X</li></Link>
                            </ul>
                        </details>
                    </ul>
                    <span className={styles.subtitle}>TOKENS</span>
                    <ul className={styles.componentList}>
                        <li className={styles.componentItem}>Colors</li>
                        <li className={styles.componentItem}>Typography</li>
                        <li className={styles.componentItem}>Motion</li>
                    </ul>
                </aside>
                <ControlsWithPreview componentName={componentName} propOptions={propOptions} componentData={componentData} />
            </div>
        </main>
    );
}