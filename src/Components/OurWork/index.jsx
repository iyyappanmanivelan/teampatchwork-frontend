import WorkHero from "./WorkHero";
import ProjectStats from "./ProjectStats";
import WorkGallery from "./WorkGallery";
import BeforeAfter from "./BeforeAfter";
import BehindTheScenes from "./BehindTheScenes";
import ServicesCTA from "../Services/ServicesCTA"; // Reusing CTA
import styles from "./styles.module.css";

const OurWork = () => {
    return (
        <div className={styles.pageWrapper}>
            <WorkHero />
            <ProjectStats />
            <WorkGallery />
            <BeforeAfter />
            <BehindTheScenes />
            <ServicesCTA />
        </div>
    );
};

export default OurWork;
