import styles from "./styles.module.css";
import Title from "@/Common/Title";
import Link from "next/link";
import ElectricButton from "@/Animation/ElectricButton";

const WorkHero = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.videoBackground}>
                <video autoPlay loop muted playsInline className={styles.video}>
                    <source src="/assets/video/about_banner.mp4" type="video/mp4" />
                </video>
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.content}>
                <div className={styles.titleWrapper}>
                    <span className={styles.subtitle}>FEATURED PROJECTS</span>
                    <h1 className={styles.mainTitle}>
                        OUR <span className={styles.redText}>WORK</span>
                    </h1>
                    <div className={styles.divider}></div>
                </div>

                <div className={styles.descriptionWrapper}>
                    <p className={styles.description}>
                        Our portfolio showcases a wide range of creative projects, from concept-driven videos to high-quality product visuals.
                        Each piece reflects our focus on storytelling, visual clarity, and professional execution.
                    </p>
                    <div className="pt-4">
                        <Link href="/contact" style={{ textDecoration: 'none' }}>
                            <ElectricButton name="Start a Project" />
                        </Link>
                    </div>
                </div>
            </div>

            <div
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

export default WorkHero;
