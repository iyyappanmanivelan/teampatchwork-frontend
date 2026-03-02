import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/404.module.css";

export default function Custom404() {
    return (
        <>
            <Head>
                <title>404 - Page Not Found | Team Patch Work</title>
            </Head>
            <main className={`${styles.errorMain} tactical-container`}>
                {/* Background Grid */}
                <div className="tactical-grid" style={{ opacity: 0.3 }} />

                <h1 className={styles.bgText}>404</h1>

                <div className={styles.contentWrapper}>
                    <h2 className={styles.title}>
                        SIGNAL LOST
                    </h2>
                    <p className={styles.description}>
                        The page you are looking for has been moved, deleted, or does not exist. Please return to base.
                    </p>

                    <Link href="/" className={styles.homeBtn}>
                        RETURN TO HOME
                    </Link>
                </div>
            </main>
        </>
    );
}
