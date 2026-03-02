import { useRef, useEffect } from "react";
import { Sparkles, Zap, Trophy, Clock, Users } from "lucide-react";
import Title from "@/Common/Title";
import styles from "./styles.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        icon: Sparkles,
        title: "Creative Storytelling",
        description: "We don't just record footage; we craft narratives that resonate emotionally and engage your audience."
    },
    {
        icon: Trophy,
        title: "Cinema-Grade Gear",
        description: "Using the latest 4K/6K cameras, professional lighting, and audio equipment for Hollywood-level quality."
    },
    {
        icon: Zap,
        title: "Fast Turnaround",
        description: "Optimized workflows ensuring you get your content ready for launch without delays."
    },
    {
        icon: Users,
        title: "Expert Team",
        description: "A dedicated crew of directors, cinematographers, and editors passionate about your vision."
    },
    {
        icon: Clock,
        title: "Tailored Solutions",
        description: "Custom strategies designed specifically for your brand's unique goals and requirements."
    }
];

const WhyChoose = () => {
    const sectionRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const el = sectionRef.current;

            // Animate Grid Items
            const items = gridRef.current.children;
            gsap.fromTo(items,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 80%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className={styles.whySection}>
            <Title title="Why Choose Team Patchwork" />

            <div ref={gridRef} className={styles.bentoGrid}>
                {/* Large Feature (Item 1) */}
                <div className={`${styles.bentoItem} ${styles.largeItem}`}>
                    <div className={styles.glowEffect}></div>
                    <div className={styles.content}>
                        <div className={styles.iconWrapper}>
                            <Sparkles size={40} />
                        </div>
                        <h3>{features[0].title}</h3>
                        <p>{features[0].description}</p>
                    </div>
                </div>

                {/* Medium Features (Items 2 & 3) */}
                <div className={styles.bentoItem}>
                    <div className={styles.glowEffect}></div>
                    <div className={styles.content}>
                        <div className={styles.iconWrapper}>
                            <Trophy size={32} />
                        </div>
                        <h3>{features[1].title}</h3>
                        <p>{features[1].description}</p>
                    </div>
                </div>

                <div className={styles.bentoItem}>
                    <div className={styles.glowEffect}></div>
                    <div className={styles.content}>
                        <div className={styles.iconWrapper}>
                            <Zap size={32} />
                        </div>
                        <h3>{features[2].title}</h3>
                        <p>{features[2].description}</p>
                    </div>
                </div>

                {/* Wide Features (Items 4 & 5) */}
                <div className={`${styles.bentoItem} ${styles.wideItem}`}>
                    <div className={styles.glowEffect}></div>
                    <div className={styles.content}>
                        <div className={styles.iconWrapper}>
                            <Users size={32} />
                        </div>
                        <h3>{features[3].title}</h3>
                        <p>{features[3].description}</p>
                    </div>
                </div>

                <div className={`${styles.bentoItem} ${styles.wideItem}`}>
                    <div className={styles.glowEffect}></div>
                    <div className={styles.content}>
                        <div className={styles.iconWrapper}>
                            <Clock size={32} />
                        </div>
                        <h3>{features[4].title}</h3>
                        <p>{features[4].description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
