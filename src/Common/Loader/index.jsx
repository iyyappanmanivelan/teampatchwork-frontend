import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { gsap } from "gsap";

const Loader = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });
        tl.to(".loaderBar", {
            width: "100%",
            duration: 1.5,
            ease: "power2.inOut"
        }).to(".loaderBar", {
            width: "0%",
            left: "100%",
            duration: 0.5,
            ease: "power2.inOut",
            onComplete: () => gsap.set(".loaderBar", { left: "0%" })
        });

        return () => tl.kill();
    }, []);

    return (
        <div className={styles.loaderContainer}>
            <div className={styles.logoWrapper}>
                <span className={styles.logoText}>TEAM PATCHWORK</span>
            </div>
            <div className={styles.progressContainer}>
                <div className={`${styles.progressBar} loaderBar`}></div>
            </div>
        </div>
    );
};

export default Loader;
