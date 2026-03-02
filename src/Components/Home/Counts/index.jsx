import Title from "@/Common/Title";
import styles from "./styles.module.css";
import CountUp from "react-countup";

const Counts = () => {
  return (
    <section className="sectiongap position-relative">
      <div className="intro">
        <Title title={"GROWTH ENGINE"} />
        <p>Where creativity meets performance-driven strategy.</p>
      </div>


      <div className="container pt-4">
        <div className="row align-items-center">
          {/* Left Side: Statement */}
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div className={styles.statementWrapper}>
              <span className={styles.overline}>GROWTH_ENGINE</span>
              <h2 className={styles.statementTitle}>
                DESIGNING <br />
                <span className={styles.redText}>THE FUTURE</span>
              </h2>
              <p className={styles.statementDesc}>
                We don't just track numbers; we track impact. From local startups to global enterprises, our footprint is defined by measurable success and creative dominance.
              </p>
              <div className={styles.decorativeLine} />
            </div>
          </div>

          {/* Right Side: 2x2 Metrics Grid */}
          <div className="col-lg-7">
            <div className={styles.statGrid}>
              {/* Stat 1 */}
              <div className={styles.statCard}>
                <h3 className={styles.statNumber}>
                  <CountUp start={0} end={4} duration={3} suffix="+" />
                </h3>
                <h6 className={styles.statLabel}>YEARS OF EXCELLENCE</h6>
              </div>

              {/* Stat 2 */}
              <div className={styles.statCard}>
                <h3 className={styles.statNumber}>
                  <CountUp start={0} end={50} duration={3} suffix="+" />
                </h3>
                <h6 className={styles.statLabel}>PROJECTS SHIPPED</h6>
              </div>

              {/* Stat 3 */}
              <div className={styles.statCard}>
                <h3 className={styles.statNumber}>
                  <CountUp start={0} end={10} duration={3} suffix="+" />
                </h3>
                <h6 className={styles.statLabel}>GLOBAL CLIENTS</h6>
              </div>

              {/* Stat 4 */}
              <div className={styles.statCard}>
                <h3 className={styles.statNumber}>
                  <CountUp start={0} end={7} duration={3} suffix="+" />
                </h3>
                <h6 className={styles.statLabel}>DESIGN AWARDS</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counts;
