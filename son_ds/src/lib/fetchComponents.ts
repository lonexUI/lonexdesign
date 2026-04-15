export interface ComponentData {
    name: string;
    slug: string;
    category: string;
    description: string;
    code: string;
    props: string;
}

export async function fetchComponent(componentName: string): Promise<ComponentData> {
    const url = `https://sondesignsystem.github.io/son-content/content/components/${componentName}.json`;

    try {
        const response = await fetch(url, {
            next: { revalidate: 3600 }, // Revalidate every hour
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch component: ${response.statusText}`);
        }

        const data: ComponentData = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching ${componentName}.json:`, error);
        throw error;
    }
}
