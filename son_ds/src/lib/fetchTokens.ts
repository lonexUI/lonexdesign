export interface TokenValue {
    name: string;
    value: string;
    description?: string;
}

export interface TokenTable {
    name: string;
    values: TokenValue[];
}

export interface TokenData {
    name: string;
    tables: TokenTable[];
}

export async function fetchToken(tokenName: string): Promise<TokenData> {
    const url = `https://sondesignsystem.github.io/son-content/content/tokens/${tokenName}.json`;

    try {
        const response = await fetch(url, {
            next: { revalidate: 3600 },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch token data for ${tokenName}: ${response.statusText}`);
        }

        const data: TokenData = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching token ${tokenName}.json:`, error);
        throw error;
    }
}
