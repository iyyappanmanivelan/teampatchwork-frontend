import ElectricButton from "@/Animation/ElectricButton";
import Link from "next/link";
import styles from "./styles.module.css";

const ServicesCTA = () => {
    return (
        <section className={styles.ctaSection}>
            <div className={styles.ctaContainer}>
                {/* Content */}
                <div className={styles.ctaContent}>
                    <h2 className={styles.ctaTitle}>
                        READY TO BRING YOUR <span className={styles.highlight}>STORY</span> TO LIFE?
                    </h2>

                    <p className={styles.ctaSubtitle}>
                        Contact us today to discuss your project and get a custom quote.
                    </p>

                    <div className={styles.ctaButton}>
                        <Link href="/contact" style={{ textDecoration: 'none' }}>
                            <ElectricButton name="Get Started Now" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesCTA;
