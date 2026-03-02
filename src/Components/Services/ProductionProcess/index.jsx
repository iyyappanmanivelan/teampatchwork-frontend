import { useRef, useEffect, useState } from "react";
import { Search, Lightbulb, Video, Palette, CheckCircle } from "lucide-react";
import Title from "@/Common/Title";
import styles from "./styles.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        number: "01",
        title: "Discovery",
        description: "Understanding your goals, target audience, and core message to build a solid foundation.",
        icon: Search
    },
    {
        number: "02",
        title: "Concept & Script",
        description: "Developing creative concepts and writing compelling scripts that align with your vision.",
        icon: Lightbulb
    },
    {
        number: "03",
        title: "Production",
        description: "Filming with cinema-grade equipment, professional crew, and directing the best performances.",
        icon: Video
    },
    {
        number: "04",
        title: "Post-Production",
        description: "Magic happens here: editing, color grading, sound design, and motion graphics integration.",
        icon: Palette
    },
    {
        number: "05",
        title: "Delivery",
        description: "Final quality checks and formatting for all your distribution platforms.",
        icon: CheckCircle
    }
];

const ProductionProcess = () => {
    const sectionRef = useRef(null);
    const lineRef = useRef(null);
    const progressRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const el = sectionRef.current;
            const line = lineRef.current;
            const progress = progressRef.current;

            if (!el || !line || !progress) return;

            // Animate Progress Line
            gsap.fromTo(progress,
                { height: "0%" },
                {
                    height: "100%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: line,
                        start: "top center",
                        end: "bottom center",
                        scrub: 1,
                    }
                }
            );

            // Animate Steps
            const stepsEls = el.querySelectorAll(`.${styles.timelineStep}`);
            stepsEls.forEach((step, i) => {
                gsap.fromTo(step,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        scrollTrigger: {
                            trigger: step,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className={styles.processSection}>
            <div className={styles.headerWrapper}>
                <Title title="Our Production Process" />
            </div>

            <div className={styles.timelineContainer}>
                {/* Central Line */}
                <div ref={lineRef} className={styles.centralLine}>
                    <div ref={progressRef} className={styles.progressLine}></div>
                </div>

                {steps.map((step, index) => {
                    const Icon = step.icon;
                    const isEven = index % 2 === 0;

                    return (
                        <div
                            key={index}
                            className={`${styles.timelineStep} ${isEven ? styles.left : styles.right}`}
                        >
                            {/* Icon Marker (Center) */}
                            <div className={styles.markerWrapper}>
                                <div className={styles.marker}>
                                    <Icon size={20} className={styles.markerIcon} />
                                </div>
                            </div>

                            {/* Content Card */}
                            <div className={styles.cardContent}>
                                <div className={styles.stepNumber}>{step.number}</div>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDescription}>{step.description}</p>
                            </div>

                            {/* Empty Side for Layout */}
                            <div className={styles.emptySpace}></div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ProductionProcess;
