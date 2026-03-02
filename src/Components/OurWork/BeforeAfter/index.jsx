import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import Title from "@/Common/Title";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BeforeAfter = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef(null);
    const isDragging = useRef(false);

    // Handle drag for slider
    const handleMouseMove = (e) => {
        if (!isDragging.current || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        setSliderPosition((x / rect.width) * 100);
    };

    const handleTouchMove = (e) => {
        if (!isDragging.current || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
        setSliderPosition((x / rect.width) * 100);
    };

    return (
        <section className="sectiongap">
            <Title title="Before & After Edits" />
            <p className={styles.intro}>
                See the power of professional color grading and post-production.
                Drag the slider to compare raw footage with the final cinematic look.
            </p>

            <div
                ref={containerRef}
                className={styles.comparisonContainer}
                onMouseDown={() => (isDragging.current = true)}
                onMouseUp={() => (isDragging.current = false)}
                onMouseLeave={() => (isDragging.current = false)}
                onMouseMove={handleMouseMove}
                onTouchStart={() => (isDragging.current = true)}
                onTouchEnd={() => (isDragging.current = false)}
                onTouchMove={handleTouchMove}
            >
                {/* After Image (Background) */}
                <div className={styles.imageLayer}>
                    <Image
                        src="/assets/ourworks/image.png"
                        alt="After Color Grading"
                        fill
                        className={styles.image}
                    />
                    <span className={styles.labelAfter}>FINAL GRADE</span>
                </div>

                {/* Before Image (Clipped Foreground) */}
                <div
                    className={styles.imageLayer}
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                    <Image
                        src="/assets/ourworks/image.png"
                        alt="Before Color Grading"
                        fill
                        className={`${styles.image} ${styles.rawFilter}`} // CSS filter to simulate Log footage
                    />
                    <span className={styles.labelBefore}>RAW LOG</span>
                </div>

                {/* Slider Handle */}
                <div
                    classNam={styles.sliderHandle}
                    style={{ left: `${sliderPosition}%` }}
                >
                    <div className={styles.sliderLine}></div>
                    <div className={styles.sliderButton}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 8L22 12L18 16" />
                            <path d="M6 8L2 12L6 16" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeforeAfter;
