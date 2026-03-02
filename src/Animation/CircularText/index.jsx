// CircularText.jsx
import React, { useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import styles from "./styles.module.css";

/**
 * Props:
 * - text: string shown around the circle
 * - spinDuration: number (seconds for one full rotation) — default 20
 * - onHover: "speedUp" | "slowDown" | "pause" | "goBonkers" | null
 * - size: number (px) container width/height (default 200)
 * - radius: number (px) optional override for radius where letters sit
 */
const CircularText = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  size = 200,
  radius = null,
  className = "",
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation = useMotionValue(0);

  const computedRadius = radius ?? Math.max(size / 2 - 30, size * 0.35);

  // start continuous rotation
  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: {
        duration: Math.max(spinDuration, 0.001),
        ease: "linear",
        repeat: Infinity,
        type: "tween",
      },
    });

    return () => controls.stop();
    // re-start when spinDuration or text changes
  }, [spinDuration, text, controls, rotation]);

  // helper to (re)start rotation from current angle with a new duration
  const startSpin = (durationSeconds, scale = 1, resumeInfinite = true) => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale,
      transition: {
        duration: Math.max(durationSeconds, 0.0001),
        ease: "linear",
        repeat: resumeInfinite ? Infinity : 0,
        type: "tween",
      },
    });
  };

  const handleHoverStart = () => {
    if (!onHover) return;

    switch (onHover) {
      case "slowDown":
        startSpin(spinDuration * 2, 1);
        break;
      case "speedUp":
        startSpin(Math.max(spinDuration / 4, 0.01), 1);
        break;
      case "pause":
        // stop keeps the rotation value frozen in place
        controls.stop();
        break;
      case "goBonkers":
        startSpin(Math.max(spinDuration / 20, 0.01), 0.92);
        break;
      default:
        startSpin(spinDuration, 1);
    }
  };

  const handleHoverEnd = () => {
    // resume normal speed from current rotation
    startSpin(spinDuration, 1);
  };

  return (
    <motion.div
      className={`${styles.circularText} ${className}`}
      style={{ width: size, height: size, rotate: rotation }}
      initial={{ rotate: 0, scale: 1 }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      aria-label={text}
      role="img"
    >
      {letters.map((letter, i) => {
        const rotationDeg = (i / letters.length) * 360;
        // center each letter at container center and push outward by radius
        const transform = `translate(-50%, -50%) rotate(${rotationDeg}deg) translateY(-${computedRadius}px)`;
        const innerTransform = `rotate(${-rotationDeg}deg)`;

        return (
          <span
            key={i}
            className={styles.letter}
            style={{
              transform,
              WebkitTransform: transform,
            }}
          >
            <span
              className={styles.letterInner}
              style={{
                transform: innerTransform,
                WebkitTransform: innerTransform,
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;
