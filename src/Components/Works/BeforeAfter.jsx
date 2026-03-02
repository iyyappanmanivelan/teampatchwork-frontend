import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { MoveHorizontal } from "lucide-react";

const BeforeAfter = ({ data }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef(null);
    const isDragging = useRef(false);

    const handleMove = (clientX) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
            const percentage = (x / rect.width) * 100;
            setSliderPosition(percentage);
        }
    };

    const onMouseDown = () => {
        isDragging.current = true;
    };

    const onMouseUp = () => {
        isDragging.current = false;
    };

    const onMouseMove = (e) => {
        if (isDragging.current) {
            handleMove(e.clientX);
        }
    };

    const onTouchMove = (e) => {
        handleMove(e.touches[0].clientX);
    };

    // Allow clicking to jump
    const onClick = (e) => {
        handleMove(e.clientX);
    };

    // Global mouse up to stop dragging even if mouse leaves container
    useEffect(() => {
        const handleGlobalMouseUp = () => {
            isDragging.current = false;
        };
        window.addEventListener('mouseup', handleGlobalMouseUp);
        return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
    }, []);

    return (
        <div className={styles.beforeAfterSection}>
            <h3 className={styles.sectionTitle}>{data.title}</h3>

            <div
                className={styles.compareContainer}
                ref={containerRef}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onTouchMove={onTouchMove}
                onClick={onClick}
            >
                {/* BOTTOM LAYER (AFTER) */}
                <div className={styles.compareImage}>
                    <Image src={data.afterImg} alt="After" fill style={{ objectFit: 'cover' }} />
                    <div className={styles.imageLabel} style={{ textAlign: 'right' }}>AFTER</div>
                </div>

                {/* TOP LAYER (BEFORE) - Clipped */}
                <div
                    className={styles.compareImage}
                    style={{
                        clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                        zIndex: 2
                    }}
                >
                    <Image src={data.beforeImg} alt="Before" fill style={{ objectFit: 'cover' }} />
                    <div className={styles.imageLabel} style={{ textAlign: 'left' }}>BEFORE</div>
                </div>

                {/* SLIDER HANDLE */}
                <div
                    className={styles.sliderHandle}
                    style={{ left: `${sliderPosition}%` }}
                >
                    <div className={styles.sliderKnob}>
                        <MoveHorizontal className={styles.knobIcon} />
                    </div>
                </div>
            </div>

            <div className={styles.metaDetails}>
                <div className={styles.metaRow}>
                    <span className={styles.metaLabel}>Role:</span> {data.role}
                </div>
                <div className={styles.metaRow}>
                    <span className={styles.metaLabel}>Software:</span> {data.software}
                </div>
                <div className={styles.metaRow}>
                    <span className={styles.metaLabel}>Outcome:</span> {data.outcome}
                </div>
            </div>
        </div>
    );
};

export default BeforeAfter;
