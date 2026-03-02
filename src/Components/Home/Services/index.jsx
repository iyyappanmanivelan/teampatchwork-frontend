import Title from "@/Common/Title";
import styles from "./styles.module.css";

const Services = ({ data }) => {
  return (
    <section className="sectiongap">
      <div className="intro">
        <Title title={"Our Capabilities"} />
        <p>Strategic video production services designed to elevate your brand presence.</p>
      </div>
      <div className="container pt-4">
        <div className={styles.servicesGrid}>
          {data?.map((name, i) => (
            <div key={i} className={styles.servicecard}>
              <h4>{name}</h4>
              <p>Explore More</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
