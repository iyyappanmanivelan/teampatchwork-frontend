import React from "react";
import styles from "./styles.module.css";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactInfo = () => {
    return (
        <section className={styles.infoSection}>
            <div className={styles.introBox}>
                <h2 className={styles.title}>Project<br />Inception</h2>
                <div className={styles.divider} />
                <p className={styles.description}>
                    Ready to deploy? Whether it’s a high-stakes commercial or tactical brand content,
                    Team Patch Work is on standby. Initiate communication below.
                </p>
            </div>

            <div className={styles.detailsGrid}>
                <div className={styles.infoItem}>
                    <div className={styles.iconWrapper}>
                        <Phone className={styles.icon} size={24} />
                    </div>
                    <div className={styles.infoContent}>
                        <h3>Comms Line</h3>
                        <p>+91 99520 89569</p>
                    </div>
                </div>

                <div className={styles.infoItem}>
                    <div className={styles.iconWrapper}>
                        <Mail className={styles.icon} size={24} />
                    </div>
                    <div className={styles.infoContent}>
                        <h3>Digital Drop</h3>
                        <p>contact@teampatchwork.com</p>
                    </div>
                </div>

                <div className={styles.infoItem}>
                    <div className={styles.iconWrapper}>
                        <MapPin className={styles.icon} size={24} />
                    </div>
                    <div className={styles.infoContent}>
                        <h3>Base of Operations</h3>
                        <p>Chennai, Tamil Nadu</p>
                    </div>
                </div>

                <div className={styles.infoItem}>
                    <div className={styles.iconWrapper}>
                        <Clock className={styles.icon} size={24} />
                    </div>
                    <div className={styles.infoContent}>
                        <h3>Operational Hours</h3>
                        <p>Mon - Sat: 0900 - 1900</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;
