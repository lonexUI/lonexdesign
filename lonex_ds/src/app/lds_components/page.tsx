import styles from "./componentsLibrary.module.css";
import { fetchComponent } from "@/lib/fetchComponents";
import { parseComponentProps } from "@/lib/parseProps";
import ClientComponent from "./ClientComponent";
import * as Components from "../components";

// Define a registry of components linked to CMS names
const components: Record<string, React.ComponentType<any>> = {
    "button": Components.Btn,
    "btn": Components.Btn,
    "alert": Components.Alert, // Map CMS component names to React components
    // Add more mappings as needed, e.g., "card": Components.Card
};

export default async function componentsLibrary() {
    const componentData = await fetchComponent("alert");
    const propOptions = parseComponentProps(componentData.props);

    // Get the component from the registry
    const Component = components[componentData.name.toLowerCase()]; // Assuming name is case-insensitive

    return (
        <main>
            <div className={styles.container}>
                <aside className={styles.sidebar}>
                    <span className={styles.subtitle}>COMPONENTS</span>
                    <ul className={styles.componentList}>
                        <li className={styles.componentItem}>Buttons</li>
                        <li className={styles.componentItem}>Cards</li>
                        <li className={styles.componentItem}>Modals</li>
                        <li className={styles.componentItem}>Forms</li>
                        <li className={styles.componentItem}>Typography</li>
                    </ul>
                    <span className={styles.subtitle}>MODULES</span>
                    <ul className={styles.componentList}>
                        <li className={styles.componentItem}>Buttons</li>
                        <li className={styles.componentItem}>Cards</li>
                        <li className={styles.componentItem}>Modals</li>
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