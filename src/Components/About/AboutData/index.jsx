import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { AboutUsData } from "@/constant/AboutUs";
import styles from "./styles.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutData = () => {
  const { about_section } = AboutUsData;
  const triggerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(`.${styles.stackItemWrapper}`);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${slides.length * 100}%`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      slides.forEach((slide, i) => {
        if (i === 0) return; // First slide stays fixed
        tl.fromTo(
          slide,
          { yPercent: 100, opacity: 0 },
          { yPercent: 0, opacity: 1, ease: "none" } // Used ease: none for smoother scrubbing
        );
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  if (!about_section || about_section.length === 0) return null;

  return (
    <section className={styles.aboutDataSection} ref={triggerRef}>
      <div className={styles.stickyContainer}>
        {about_section.map((item, i) => (
          <div key={i} className={styles.stackItemWrapper} style={{ zIndex: i + 1 }}>
            <div
              className={styles.stackItem}
              style={{
                background: item.bgColor,
                color: item.textColor,
              }}
            >
              <div className={styles.contentBox}>
                <h2 className={styles.title}>{item.title}</h2>
                <div className={styles.divider} />
                {item.description.map((desc, idx) => (
                  <p key={idx} className={styles.description}>{desc}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutData;
