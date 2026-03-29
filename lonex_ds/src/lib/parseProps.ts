export interface PropOption {
    name: string;
    type: "toggle" | "select";
    values?: string[];
}

export function parseComponentProps(propsString: string): PropOption[] {
    try {
        // Clean up the props string - remove newlines and extra whitespace
        let cleaned = propsString
            .replace(/\n/g, "")
            .replace(/\s+/g, " ")
            .trim();

        // Remove trailing commas before closing braces
        cleaned = cleaned.replace(/,\s*([}\]])/g, "$1");

        // Try to parse as JSON
        const propsObj = JSON.parse(cleaned);

        const options: PropOption[] = [];

        for (const [key, value] of Object.entries(propsObj)) {
            const valueStr = String(value).trim();

            // Check if it's a boolean type
            if (valueStr.toLowerCase() === "boolean") {
                options.push({
                    name: key,
                    type: "toggle",
                });
            } else {
                // Otherwise treat as select with pipe-separated values
                const values = valueStr.split("|").map((v) => v.trim());
                if (values.length > 0) {
                    options.push({
                        name: key,
                        type: "select",
                        values,
                    });
                }
            }
        }

        return options;
    } catch (error) {
        console.error("Error parsing props:", error);
        return [];
    }
}
