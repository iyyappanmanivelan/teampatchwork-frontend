import { useRef, useEffect } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import styles from "./styles.module.css";

const ServiceCard = ({ service, index }) => {
    const cardRef = useRef(null);
    const isEven = index % 2 === 0;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible);
                }
            },
            { threshold: 0.2 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={cardRef}
            className={`${styles.cardWrapper} ${isEven ? styles.even : styles.odd}`}
        >
            {/* Image Section */}
            <div className={styles.imageSection}>
                <div className={styles.imageContainer}>
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={styles.serviceImage}
                    />
                    <div className={styles.imageDecor}></div>
                </div>
                <div className={styles.badge}>
                    <span className={styles.badgeNumber}>{String(index + 1).padStart(2, '0')}</span>
                </div>
            </div>

            {/* Content Section */}
            <div className={styles.contentSection}>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>

                <div className={styles.details}>
                    <div className={styles.includes}>
                        <h4 className={styles.subTitle}>Includes:</h4>
                        <ul className={styles.list}>
                            {service.includes.map((item, i) => (
                                <li key={i}>
                                    <Check size={16} className={styles.checkIcon} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.idealFor}>
                        <h4 className={styles.subTitle}>Ideal For:</h4>
                        <p className={styles.idealText}>{service.idealFor}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
