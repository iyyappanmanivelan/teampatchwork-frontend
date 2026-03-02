import Title from "@/Common/Title";
import Slider from "react-slick";
import styles from "./styles.module.css";
import { DynamicIcon } from "lucide-react/dynamic";

const Testimonal = ({ testimonal_data }) => {
  // Custom arrow components
  const NextArrow = ({ onClick }) => (
    <button className={`${styles.sliderArrow} ${styles.nextArrow}`} onClick={onClick} aria-label="Next testimonial">
      <DynamicIcon name="chevron-right" size={24} />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button className={`${styles.sliderArrow} ${styles.prevArrow}`} onClick={onClick} aria-label="Previous testimonial">
      <DynamicIcon name="chevron-left" size={24} />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: `slick-dots ${styles.customDots}`,
  };

  // Helper function to render stars
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <DynamicIcon
        key={index}
        name="star"
        fill={index < rating ? "#fff316ff" : "none"}
        color={index < rating ? "#fff316ff" : "#666"}
        size={20}
      />
    ));
  };

  return (
    <section className="sectiongap">

      <div className="intro">
        <Title title={"Our clients Says"} />
        <p>Where creativity meets performance-driven strategy.</p>
      </div>

      <div className="container pt-4">
        <Slider {...settings}>
          {testimonal_data?.map((data, i) => (
            <div key={i} className={styles.testimonialSlide}>
              <div className={styles.testimonialCard}>
                {/* Quote Icon */}
                <div className={styles.quoteIcon}>
                  <DynamicIcon name="quote" size={48} color="#E50914" />
                </div>

                {/* Feedback */}
                <p className={styles.feedback}>{data?.feedback}</p>

                {/* Rating */}
                <div className={styles.rating}>
                  {renderStars(parseInt(data?.rating))}
                </div>

                {/* Client Info */}
                <div className={styles.clientInfo}>
                  <h4 className={styles.clientName}>{data?.name}</h4>
                  <h6 className={styles.clientRole}>{data?.role}</h6>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonal;
