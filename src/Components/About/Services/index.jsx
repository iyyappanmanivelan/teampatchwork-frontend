import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import styles from "./styles.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Services = ({ servicelist }) => {
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!servicelist || servicelist.length === 0) return;

    let ctx = gsap.context(() => {
      // Select all slides: Intro, Services, End
      const slides = gsap.utils.toArray(`.${styles.introSlide}, .${styles.serviceSlide}, .${styles.endSlide}`);

      // Initially set all slides (except the first one) to be off-screen to the right
      gsap.set(slides.slice(1), { xPercent: 100 });

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

      // Animate each slide (except the first one) to slide IN from the right
      slides.forEach((slide, i) => {
        if (i === 0) return;
        tl.to(slide, {
          xPercent: 0,
          ease: "none"
        });
      });
    });

    return () => {
      ctx.revert();
    };
  }, [servicelist]);

  return (
    <section className={styles.servicesSection}>
      <div ref={triggerRef}>
        <div className={styles.horizontalScroll}>
          {/* Intro Section */}
          <div className={styles.introSlide}>
            <div className="container">
              <span className={styles.label}>OUR EXPERTISE</span>
              <h2 className={styles.bigTitle}>WHAT <br /><span className={styles.redText}>WE DO</span></h2>
              <div className={styles.line} />
            </div>
          </div>

          {/* Service Slides */}
          {servicelist?.map((data, i) => (
            <div key={i} className={styles.serviceSlide}>
              <div className={styles.slideContent}>
                <div className={styles.imageBox}>
                  <Image
                    src={data?.image}
                    alt={data?.title}
                    fill
                    className={styles.bgImage}
                  />
                  <div className={styles.slideOverlay} />
                </div>

                <div className={styles.textBox}>
                  <h3 className={styles.slideTitle}>{data?.title}</h3>
                  <p className={styles.slideDesc}>{data?.description}</p>
                </div>
              </div>
            </div>
          ))}

          {/* End Slide */}
          <div className={styles.endSlide}>
            <h2 className={styles.endTitle}>REDEFINING<br />REALITY.</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
