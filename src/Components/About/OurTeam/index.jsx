import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Assuming lucide-react is available
import styles from "./styles.module.css";
import Title from "@/Common/Title";

const OurTeam = ({ team = [] }) => { // Default to empty array if undefined
    const [activeIndex, setActiveIndex] = useState(1); // Start at index 1

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % team.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + team.length) % team.length);
    };

    const handleCardClick = (index) => {
        setActiveIndex(index);
    };

    // Helper to get relative position for 3D logic
    const getCardStyle = (index) => {
        const total = team.length;
        // Calculate distance with wrap-around logic for infinite feel (visual only)
        // For simplicity, we'll just do linear distance for this specific request size (4 items)

        let diff = index - activeIndex;

        // Normalize diff to effectively center the active one
        // But for 4 items, it's easier to just use standard distance

        const isActive = diff === 0;
        const isLeft = diff < 0;
        const isRight = diff > 0;

        let transform = "";
        let zIndex = 0;
        let opacity = 0;
        let filter = "";

        if (isActive) {
            transform = "translateX(0) scale(1.2) rotateY(0deg)";
            zIndex = 10;
            opacity = 1;
            filter = "brightness(1.2)";
        } else if (diff === -1 || (activeIndex === 0 && index === total - 1)) {
            // Left neighbor
            transform = "translateX(-120%) scale(0.8) rotateY(25deg)";
            zIndex = 5;
            opacity = 0.6;
            filter = "brightness(0.5)";
        } else if (diff === 1 || (activeIndex === total - 1 && index === 0)) {
            // Right neighbor
            transform = "translateX(120%) scale(0.8) rotateY(-25deg)";
            zIndex = 5;
            opacity = 0.6;
            filter = "brightness(0.5)";
        } else {
            // Others (hidden/far)
            transform = diff < 0 ? "translateX(-200%) scale(0.5)" : "translateX(200%) scale(0.5)";
            zIndex = 1;
            opacity = 0;
        }

        return { transform, zIndex, opacity, filter };
    };

    if (!team || team.length === 0) return null;

    return (
        <section className={styles.teamSection}>
            <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
                <Title title="THE SQUAD" />

                <div className={styles.carouselContainer}>
                    <div className={styles.carouselTrack}>
                        {team.map((member, i) => {
                            const style = getCardStyle(i);
                            return (
                                <div
                                    key={i}
                                    className={`${styles.teamCard} ${i === activeIndex ? styles.activeCard : ''}`}
                                    style={style}
                                    onClick={() => handleCardClick(i)}
                                >
                                    <div className={styles.imageWrapper}>
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className={styles.memberImage}
                                        />
                                        {i === activeIndex && (
                                            <>
                                                <div className={styles.scannerLine} />
                                                <div className={styles.scannerOverlay} />
                                            </>
                                        )}
                                    </div>

                                    <div className={styles.infoBox}>
                                        <h3 className={styles.memberName}>{member.name}</h3>
                                        <p className={styles.memberRole}>{member.role}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className={styles.controls}>
                        <button onClick={handlePrev} className={styles.navBtn}><ChevronLeft size={30} /></button>
                        <button onClick={handleNext} className={styles.navBtn}><ChevronRight size={30} /></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;