import { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import ElectricButton from "@/Animation/ElectricButton";

const ServicesHero = () => {
    const scrollIndicatorRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollIndicatorRef.current) {
                const scrolled = window.scrollY;
                scrollIndicatorRef.current.style.opacity = Math.max(0, 1 - scrolled / 300);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className={styles.heroSection}>
            {/* Video Background */}
            <div className={styles.videoContainer}>
                <video
                    src="/assets/video/homevideo.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={styles.bgVideo}
                />
                <div className={styles.overlay} />
            </div>

            {/* Hero Content */}
            <div className={styles.heroContent}>
                <div className={styles.titleWrapper}>
                    <span className={styles.subtitle}>VIDEO PRODUCTION SERVICES</span>
                    <h1 className={styles.mainTitle}>
                        OUR <span className={styles.redText}>SERVICES</span>
                    </h1>
                    <div className={styles.divider} />
                </div>

                <div className={styles.descriptionWrapper}>
                    <p className={styles.description}>
                        We help brands, businesses, and creators bring their ideas to life through high-quality video production.
                        From concept to final delivery, our team handles every step of the process.
                    </p>
                    <div className="pt-4">
                        <Link href="/contact" style={{ textDecoration: 'none' }}>
                            <ElectricButton name="Start Your Project" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                ref={scrollIndicatorRef}
                className={styles.scrollIndicator}
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <div className={styles.mouse}>
                    <div className={styles.scroller} />
                </div>
                <span className={styles.scrollText}>Scroll Down</span>
            </div>
        </section>
    );
};

export default ServicesHero;
