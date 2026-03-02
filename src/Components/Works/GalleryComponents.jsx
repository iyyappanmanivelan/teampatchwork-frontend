import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

export const WorkTabs = ({ categories, activeTab, onTabChange }) => {
    return (
        <div className={styles.tabsContainer}>
            {categories.map((cat) => (
                <button
                    key={cat.id}
                    className={`${styles.tabBtn} ${activeTab === cat.id ? styles.active : ""}`}
                    onClick={() => onTabChange(cat.id)}
                >
                    {cat.label}
                </button>
            ))}
        </div>
    );
};

export const ProjectGallery = ({ posters, films }) => {
    return (
        <div className={styles.gallerySection}>
            {/* POSTER GALLERY */}
            {posters && posters.length > 0 && (
                <div className="mb-5">
                    <h3 className={styles.sectionTitle}>POSTER DESIGN GALLERY</h3>
                    <div className={styles.galleryGrid}>
                        {posters.map((item) => (
                            <div key={item.id} className={styles.posterCard}>
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className={styles.galleryImg}
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className={styles.cardOverlay}>
                                    <h4 className={styles.cardTitle}>{item.title}</h4>
                                    <span className={styles.cardCategory}>POSTER ART</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* FILM GALLERY */}
            {films && films.length > 0 && (
                <div>
                    <h3 className={styles.sectionTitle}>FILM & VIDEOGRAPHY</h3>
                    <div className={styles.galleryGrid}>
                        {films.map((item) => (
                            <div key={item.id} className={styles.filmCard}>
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className={styles.galleryImg}
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className={styles.cardOverlay}>
                                    <h4 className={styles.cardTitle}>{item.title}</h4>
                                    <span className={styles.cardCategory}>{item.category}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
