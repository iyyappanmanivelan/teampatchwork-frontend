import { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { value: "100+", label: "Videos Produced" },
    { value: "50+", label: "Happy Clients" },
    { value: "15+", label: "Industries Served" },
    { value: "100%", label: "On-Time Delivery" },
];

const ProjectStats = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;

        gsap.fromTo(el.children,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                }
            }
        );
    }, []);

    return (
        <section className={`${styles.statsSection} sectiongap`}>
            <div ref={sectionRef} className={styles.statsGrid}>
                {stats.map((stat, index) => (
                    <div key={index} className={styles.statItem}>
                        <div className={styles.value}>{stat.value}</div>
                        <div className={styles.label}>{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectStats;
