import Head from "next/head";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import styles from "@/styles/thankyou.module.css";

export default function ThankYou() {
    return (
        <>
            <Head>
                <title>Thank You | Team Patch Work</title>
            </Head>
            <main className={`${styles.thankYouMain} tactical-container`}>
                <div className="tactical-grid" />

                <div className={styles.contentWrapper}>
                    <CheckCircle size={80} color="#E50914" style={{ margin: "0 auto 2rem" }} />
                    <h1 className={styles.title}>
                        MESSAGE <span className="red-glow">RECEIVED</span>
                    </h1>
                    <p className={styles.description}>
                        Thank you for reaching out to Team Patch Work. We have received your project details and will be in touch within 24 hours to discuss the next steps.
                    </p>

                    <Link href="/" className={styles.homeBtn}>
                        BACK TO HOME
                    </Link>
                </div>
            </main>
        </>
    );
}
