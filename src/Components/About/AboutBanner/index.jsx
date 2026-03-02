import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import ElectricButton from "@/Animation/ElectricButton";
import Link from "next/link";
import { gsap } from "gsap";

const AboutBanner = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const mainContentRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Reset initial states
      gsap.set([titleRef.current, contentRef.current], { opacity: 0 });
      gsap.set(titleRef.current, { y: 60, skewX: 5 });
      gsap.set(contentRef.current, { y: 30, opacity: 0 });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        skewX: 0,
        duration: 1.2,
        ease: "power4.out"
      })
        .to(contentRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out"
        }, "-=0.6");
    }, containerRef); // Scope to container

    // Mouse Parallax Logic
    const handleMouseMove = (e) => {
      if (!mainContentRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xPos = (clientX / innerWidth - 0.5) * 30;
      const yPos = (clientY / innerHeight - 0.5) * 30;

      gsap.to(mainContentRef.current, {
        x: xPos,
        y: yPos,
        duration: 1.5,
        ease: "power2.out",
        overwrite: "auto" // Prevent conflict
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      ctx.revert(); // Cleanup GSAP
    };
  }, []);

  return (
    <section ref={containerRef} className={`${styles.aboutsection} position-relative`}>
      {/* Cinematic Video Background */}
      <div className={styles.videoContainer}>
        <video
          src="/assets/video/about_banner.mp4"
          autoPlay
          muted
          loop
          playsInline
          className={styles.bgVideo}
        />
        <div className={styles.overlay} />
      </div>

      {/* Main Content */}
      <div ref={mainContentRef} className={styles.mainContent}>
        <div ref={titleRef} className={styles.titleWrapper}>
          <span className={styles.subtitle}>ESTABLISHED 2024</span>
          <h1 className={styles.mainTitle}>
            ABOUT <span className={styles.redText}>US</span>
          </h1>
          <div className={styles.divider} />
        </div>

        <div ref={contentRef} className={styles.descriptionWrapper}>
          <p className={styles.description}>
            Team Patch Work is a creative video production studio dedicated to
            turning ideas into impactful visuals. We bring brands, businesses,
            and ideas to life through high-quality video production and tactical digital solutions.
          </p>
          <div className="pt-5">
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <ElectricButton name={"INITIATE COLLABORATION"} />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={styles.scrollIndicator}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className={styles.mouse}>
          <div className={styles.scroller} />
        </div>
        <span className={styles.scrollText}>Scroll Down</span>
      </div>
    </section>
  );
};

export default AboutBanner;
