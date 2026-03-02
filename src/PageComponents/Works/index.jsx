import React, { useState } from "react";
import { WorkData } from "@/constant/OurWork";
import { WorkTabs, ProjectGallery } from "@/Components/Works/GalleryComponents";
import BeforeAfter from "@/Components/Works/BeforeAfter";
import styles from "@/Components/Works/styles.module.css";

const WorksPage = () => {
    const [activeTab, setActiveTab] = useState("all");

    const { categories, beforeAfter, posters, films } = WorkData;

    // Filter Logic
    const showBeforeAfter = activeTab === "all" || activeTab === "post";

    const filteredPosters = activeTab === "all" || activeTab === "poster"
        ? posters
        : [];

    const filteredFilms = activeTab === "all" || activeTab === "film" || activeTab === "post"
        ? films
        : [];

    return (
        <div className={styles.worksSection}>
            <div className="container">

                {/* TABS */}
                <WorkTabs
                    categories={categories}
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                />

                {/* BEFORE & AFTER SLIDER */}
                {showBeforeAfter && (
                    <BeforeAfter data={beforeAfter} />
                )}

                {/* GALLERIES */}
                <ProjectGallery
                    posters={filteredPosters}
                    films={filteredFilms}
                />
            </div>
        </div>
    );
};

export default WorksPage;
