export interface PropOption {
    name: string;
    type: "toggle" | "select";
    values?: string[];
    default?: string | boolean;
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
            if (valueStr.toLowerCase().startsWith("boolean")) {
                // Extract default for boolean: "boolean:true" or "boolean:false"
                let defaultValue: boolean | undefined;
                const boolMatch = valueStr.match(/boolean:(?:true|false)/i);
                if (boolMatch) {
                    defaultValue = boolMatch[0].toLowerCase().endsWith("true");
                }
                options.push({
                    name: key,
                    type: "toggle",
                    default: defaultValue,
                });
            } else {
                // Otherwise treat as select with pipe-separated values and use the first value as default
                const values = valueStr.split("|").map((v) => v.trim()).filter(Boolean);

                if (values.length > 0) {
                    options.push({
                        name: key,
                        type: "select",
                        values,
                        default: values[0],
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
