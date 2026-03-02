import React from "react";
import styles from "./styles.module.css";

const NextSteps = () => {
    const steps = [
        {
            id: 1,
            title: "Review",
            desc: "We review your message and details."
        },
        {
            id: 2,
            title: "Connect",
            desc: "Our team contacts you within 24 hours."
        },
        {
            id: 3,
            title: "Strategy",
            desc: "We discuss requirements and timeline."
        },
        {
            id: 4,
            title: "Proposal",
            desc: "You receive a customized quote and plan."
        }
    ];

    return (
        <section className={styles.stepsSection}>
            <h2 className={styles.sectionTitle}>What Happens Next</h2>
            <div className={styles.stepsGrid}>
                {steps.map((step, index) => (
                    <div key={step.id} className={styles.stepCard}>
                        <div className={styles.stepNumber}>0{step.id}</div>
                        <h3 className={styles.stepTitle}>{step.title}</h3>
                        <p className={styles.stepDesc}>{step.desc}</p>
                        {index < steps.length - 1 && <div className={styles.connector} />}
                    </div>
                ))}
            </div>

            <div className={styles.finalCall}>
                <h3>Let’s Create Something Great</h3>
                <p>Your story deserves to be seen and heard.</p>
            </div>
        </section>
    );
};

export default NextSteps;
