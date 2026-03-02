import React, { useState } from "react";
import Title from "@/Common/Title";
import styles from "./styles.module.css";

const MissionBrief = ({ steps }) => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className={styles.section}>
            <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
                <Title title="OPERATIONAL PROTOCOLS" />

                <div className={styles.accordionContainer}>
                    {steps?.map((step, i) => (
                        <div
                            key={i}
                            className={`${styles.stepPanel} ${activeStep === i ? styles.activePanel : ''}`}
                            onMouseEnter={() => setActiveStep(i)}
                        >
                            <div className={styles.panelOverlay} />
                            <div className={styles.panelContent}>
                                <div className={styles.headerGroup}>
                                    <span className={styles.phaseNumber}>{step.phase}</span>
                                    <h3 className={styles.stepTitle}>{step.title}</h3>
                                </div>

                                <div className={styles.descriptionWrapper}>
                                    <div className={styles.divider} />
                                    <p className={styles.description}>{step.description}</p>
                                </div>
                            </div>

                            {/* Vertical Text for Inactive State */}
                            <div className={styles.verticalLabel}>
                                <span className={styles.vPhase}>{step.phase}</span>
                                <span className={styles.vTitle}>{step.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MissionBrief;
