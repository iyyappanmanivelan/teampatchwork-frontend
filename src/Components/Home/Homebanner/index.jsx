import TextType from "@/Animation/TextType";
import styles from "./style.module.css";
import ElectricButton from "@/Animation/ElectricButton";
import Link from "next/link";
import { HomeData } from "@/constant/Home";

const HomeBanner = () => {
  return (
    <section className={` position-relative tactical-container ${styles.bannersec}`}>
      {/* Tactical Background Elements */}
      <div className="tactical-grid" />

      <div className={styles.introvideo}>
        <video
          src="/assets/video/homevideo.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>

      {/* Main Content Wrapper (Flex Centered) */}
      <div className={styles.contentWrapper}>
        <div className={styles.introWrapper}>
          <TextType
            text={["Deliver high-quality content", "Understanding your vision"]}
            typingSpeed={60}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter=""
          />
        </div>

        <div className={styles.descWrapper}>
          <p>
            We offer innovative branding solutions for your business. We provide
            digital marketing, graphic design, and Motion graphic requirements for
            your company. Our graphic design agency creates impactful marketing
            strategies for your success story.
          </p>
          <div className="pt-4">
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <ElectricButton name={"Start Your Project"} />
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HomeBanner;
