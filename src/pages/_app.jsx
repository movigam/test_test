import "../styles/globals.css";
import styles from "../styles/app.module.css";

import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            GAOGAO - GATE
          </Link>
          <nav>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link href="/test">TEST</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/index.html">ABOUT</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/contact">CONTACT</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
