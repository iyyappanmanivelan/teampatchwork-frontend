import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import Title from "@/Common/Title";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Categories provided by user
const categories = [
    "All",
    "Brand Identity",
    "Promotional",
    "Testimonials",
    "Real Estate",
    "Food & Lifestyle",
    "Motion Graphics"
];

const projects = [
    {
        id: 1,
        category: "Brand Identity",
        title: "EcoTech Vision",
        description: "Videos that define and communicate a brand’s personality, values, and vision.",
        image: "/assets/ourworks/image.png"
    },
    {
        id: 2,
        category: "Promotional",
        title: "Summer Launch",
        description: "Campaign-based visuals created for product launches and seasonal promotions.",
        image: "/assets/ourworks/image copy.png"
    },
    {
        id: 3,
        category: "Real Estate",
        title: "Skyline Luxury",
        description: "Visual content designed to highlight spaces through cinematic shots.",
        image: "/assets/ourworks/image copy 2.png"
    },
    {
        id: 4,
        category: "Testimonials",
        title: "Client Stories",
        description: "Professional interview-style videos that build trust and credibility.",
        image: "/assets/service/s3.png"
    },
    {
        id: 5,
        category: "Food & Lifestyle",
        title: "Urban Cafe",
        description: "Creative visuals that focus on mood, aesthetics, and storytelling.",
        image: "/assets/service/s2.png" // Reusing available images for now
    },
    {
        id: 6,
        category: "Motion Graphics",
        title: "Tech Explainers",
        description: "Animated text and graphics that enhance storytelling.",
        image: "/assets/service/s6.png"
    }
];

const WorkGallery = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const gridRef = useRef(null);

    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter(p => p.category.includes(activeFilter) || activeFilter.includes(p.category));

    useEffect(() => {
        // Re-trigger animation when filter changes
        if (gridRef.current) {
            gsap.fromTo(gridRef.current.children,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "power2.out" }
            );
        }
    }, [activeFilter]);

    return (
        <section className="sectiongap">
            <Title title="Featured Projects" />

            {/* Filter Buttons */}
            <div className={styles.filterContainer}>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`${styles.filterBtn} ${activeFilter === cat ? styles.active : ''}`}
                        onClick={() => setActiveFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Gallery Grid */}
            <div ref={gridRef} className={styles.galleryGrid}>
                {filteredProjects.map((project) => (
                    <div key={project.id} className={styles.projectCard}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className={styles.projectImage}
                            />
                            <div className={styles.overlay}>
                                <div className={styles.overlayContent}>
                                    <span className={styles.categoryTag}>{project.category}</span>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkGallery;
