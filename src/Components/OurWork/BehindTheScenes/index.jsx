import styles from "./styles.module.css";
import Title from "@/Common/Title";
import Image from "next/image";

const btsImages = [
    { src: "/assets/service/s1.png", alt: "On Set" },
    { src: "/assets/service/s4.png", alt: "Camera Rig" },
    { src: "/assets/service/s6.png", alt: "Editing Suite" },
    { src: "/assets/service/s2.png", alt: "Lighting Setup" },
];

const BehindTheScenes = () => {
    return (
        <section className="sectiongap">
            <Title title="Behind The Scenes" />
            <div className={styles.grid}>
                {btsImages.map((img, index) => (
                    <div key={index} className={styles.card}>
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className={styles.image}
                        />
                        <div className={styles.overlay}>
                            <span>{img.alt}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BehindTheScenes;
