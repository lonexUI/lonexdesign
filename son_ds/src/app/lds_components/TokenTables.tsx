import { TokenData } from "@/lib/fetchTokens";
import styles from "./componentsLibrary.module.css";

interface TokenTablesProps {
  tokenData: TokenData;
}

export default function TokenTables({ tokenData }: TokenTablesProps) {
  return (
    <section className={styles.tokenSection}>
      <div className={styles.tokenHeader}>
        <h2>{tokenData.name}</h2>
        <p>Loaded token tables from the shared content repo.</p>
      </div>
      <div className={styles.tokenFlex}>
        {tokenData.tables.map((table) => (
          <div key={table.name} className={styles.tokenTableCard}>
            <h3>{table.name}</h3>
            <table className={styles.tokenTable}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Value</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {table.values.map((value) => (
                  <tr key={`${table.name}-${value.name}`}>
                    <td>{value.name}</td>
                    <td>
                      <div className={styles.tokenValueCell}>
                        <span
                          className={styles.tokenSwatch}
                          style={{ backgroundColor: value.value }}
                          aria-hidden="true"
                        />
                        <code>{value.value}</code>
                      </div>
                    </td>
                    <td>{value.description || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </section>
  );
}
// will fix in the future
