import Title from "@/Common/Title";
import ServicesHero from "./ServicesHero";
import ServiceCard from "./ServiceCard";
import ProductionProcess from "./ProductionProcess";
import WhyChoose from "./WhyChoose";
import ServicesCTA from "./ServicesCTA";
import styles from "./styles.module.css";

const servicesData = [
    {
        type: "corporate",
        title: "Corporate Video Production",
        description: "Professional corporate videos that showcase your company, services, and values.",
        image: "/assets/service/s1.png",
        includes: [
            "Company profile videos",
            "CEO and team interviews",
            "Training and internal communication videos",
            "Corporate event coverage"
        ],
        idealFor: "Websites, presentations, recruitment, and brand storytelling."
    },
    {
        type: "promotional",
        title: "Promotional & Brand Videos",
        description: "Engaging promotional videos designed to attract attention and convert viewers into customers.",
        image: "/assets/service/s2.png",
        includes: [
            "Product showcase videos",
            "Brand story films",
            "Launch videos",
            "Advertisement content"
        ],
        idealFor: "Marketing campaigns, websites, and digital ads."
    },
    {
        type: "social",
        title: "Social Media Video Content",
        description: "Short, eye-catching videos optimized for social media platforms.",
        image: "/assets/service/s3.png",
        includes: [
            "Instagram Reels",
            "YouTube Shorts",
            "TikTok videos",
            "Monthly content packages"
        ],
        idealFor: "Growing your online presence and engagement."
    },
    {
        type: "event",
        title: "Event Video Coverage",
        description: "Capture the energy and key moments of your events with professional video coverage.",
        image: "/assets/service/s4.png",
        includes: [
            "Corporate events",
            "Product launches",
            "Conferences and seminars",
            "Special celebrations"
        ],
        idealFor: "Event highlights, promotions, and archives."
    },
    {
        type: "commercial",
        title: "Commercial & Advertising Films",
        description: "High-impact commercial films designed for television, digital platforms, and advertising campaigns.",
        image: "/assets/service/s5.png",
        includes: [
            "Scripted ad films",
            "TV commercials",
            "Digital ad creatives",
            "Concept-driven campaigns"
        ],
        idealFor: "Brand awareness and large-scale promotions."
    },
    {
        type: "postproduction",
        title: "Post-Production & Editing",
        description: "Professional editing and finishing services to polish your footage into a compelling final product.",
        image: "/assets/service/s6.png",
        includes: [
            "Video editing",
            "Color grading",
            "Motion graphics",
            "Sound design and music"
        ],
        idealFor: "Enhancing video quality and storytelling."
    }
];

const Services = () => {
    return (
        <div className={styles.servicesPage}>
            <ServicesHero />

            {/* Services Grid Section */}
            <section className="sectiongap">
                <Title title="Our Services" />

                <div className={styles.servicesGrid}>
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </section>

            <ProductionProcess />
            <WhyChoose />
            <ServicesCTA />
        </div>
    );
};

export default Services;
