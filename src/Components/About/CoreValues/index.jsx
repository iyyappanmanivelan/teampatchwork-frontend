import React from "react";
import { Lightbulb, Aperture, Clock, Layers, ScanSearch } from "lucide-react";
import Title from "@/Common/Title";
import styles from "./styles.module.css";

const iconMap = {
  creative: <Lightbulb size={40} strokeWidth={1.5} />,
  quality: <Aperture size={40} strokeWidth={1.5} />,
  time: <Clock size={40} strokeWidth={1.5} />,
  flexible: <Layers size={40} strokeWidth={1.5} />,
  detail: <ScanSearch size={40} strokeWidth={1.5} />,
};

const CoreValues = ({ coredata }) => {
  if (!coredata) return null;

  return (
    <section className={styles.section}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
        <Title title="WHY CLIENTS CHOOSE US" />

        <div className={styles.valuesGrid}>
          {coredata.map((item, i) => (
            <div key={i} className={styles.valueCard}>
              <div className={styles.cardInner}>
                {/* Tactical Corners */}
                <span className={styles.cornerTL} />
                <span className={styles.cornerTR} />
                <span className={styles.cornerBL} />
                <span className={styles.cornerBR} />

                <div className={styles.iconBox}>
                  {iconMap[item.icon] || <Lightbulb />}
                </div>

                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <div className={styles.divider} />
                  <p className={styles.cardDesc}>{item.description}</p>
                </div>

                <div className={styles.indexNumber}>0{i + 1}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
