import Head from "next/head";
import ContactInfo from "@/Components/Contact/ContactInfo";
import ContactForm from "@/Components/Contact/ContactForm";
import NextSteps from "@/Components/Contact/NextSteps";
import Title from "@/Common/Title";
import styles from "@/Components/Contact/styles.module.css";

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Us | Team Patch Work</title>
            </Head>
            <main className={`${styles.contactMain} tactical-container`}>
                <div className="tactical-grid" />
                <div className={styles.tacticalLine} />

                {/* Simple Hero Shim */}
                <div className={styles.heroShim}></div>

                <div className="container position-relative" style={{ zIndex: 5 }}>
                    <div className={styles.pageHeader}>
                        <Title title="GET IN TOUCH" />
                    </div>

                    <div className={styles.contactLayout}>
                        <ContactInfo />
                        <ContactForm />
                    </div>

                    <NextSteps />
                </div>
            </main>
        </>
    );
}
