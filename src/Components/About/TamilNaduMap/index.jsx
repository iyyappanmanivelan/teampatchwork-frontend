import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Title from "@/Common/Title";
import styles from "./styles.module.css";

const TamilNaduMap = ({ data }) => {
    const mapRef = useRef(null);
    const hotspotRefs = useRef([]);
    const canvasRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Entrance animation for hotspots
            gsap.fromTo(
                hotspotRefs.current,
                { opacity: 0, scale: 0, z: 50 },
                {
                    opacity: 1,
                    scale: 1,
                    z: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: mapRef.current,
                        start: "top 70%",
                    },
                }
            );
        }, mapRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className={styles.mapSection}>
            <div className="container">
                <div className={styles.header}>
                    <Title title={data.title} />
                    <p className={styles.subtitle}>{data.subtitle}</p>
                </div>

                <div className={styles.perspectiveContainer}>
                    <div className={styles.mapWrapper} ref={mapRef}>
                        {/* 3D Map Base */}
                        <div className={styles.isometricMap}>
                            <div className={styles.tnImage} />
                            <div className={styles.mapGrid} />

                            {/* Wireframe Connections */}
                            <svg className={styles.connectionsSvg} viewBox="0 0 100 100">
                                <line x1="85" y1="25" x2="55" y2="55" className={styles.connectionLine} />
                                <line x1="55" y1="55" x2="45" y2="78" className={styles.connectionLine} />
                                <line x1="15" y1="60" x2="35" y2="42" className={styles.connectionLine} />
                                <line x1="35" y1="42" x2="55" y2="55" className={styles.connectionLine} />
                            </svg>

                            {/* Hotspots */}
                            {data.hotspots.map((spot, i) => (
                                <div
                                    key={spot.id}
                                    ref={(el) => (hotspotRefs.current[i] = el)}
                                    className={styles.hotspot}
                                    style={{ top: spot.top, left: spot.left }}
                                >
                                    <div className={styles.pinWrapper}>
                                        <div className={styles.pulseDisk} />
                                        <div className={styles.markerPoint} />
                                        <div className={styles.verticalStem} />
                                        <div className={styles.labelWrapper}>
                                            <span className={styles.spotType}>{spot.type}</span>
                                            <span className={styles.spotName}>{spot.name}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Tactical HUD Overlay Elements */}
                        <div className={styles.tacticalHud}>
                            <div className={styles.hudHeader}>TN_REGION_ANALYSIS</div>
                            <div className={styles.hudRow}>
                                <span>COORDINATES:</span>
                                <span>11.1271 N, 78.6569 E</span>
                            </div>
                            <div className={styles.hudRow}>
                                <span>STATUS:</span>
                                <span className={styles.active}>EN_ROUTE</span>
                            </div>
                        </div>

                        <div className={styles.scanLine} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TamilNaduMap;
