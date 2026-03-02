import Slider from "react-slick";
import styles from "./styles.module.css";
import Title from "@/Common/Title";

const Brands = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 8000, // Slow continuous speed
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Continuous
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className={styles.brandsec}>
      {/* <Title title={"Our Brands"} /> Removed for Marquee look */}
      <div className={styles.brandslider}>
        <Slider {...settings}>
          {data?.map((name, i) => (
            <div key={i} className={styles.brandcard}>
              <h4>{name}</h4>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Brands;
