import Title from "@/Common/Title";
import styles from "./styles.module.css";
import { DynamicIcon } from "lucide-react/dynamic";
import Image from "next/image";

const Portfolio = ({ portfolio_data }) => {
  return (
    <section className="sectiongap">

      <div className="intro">
        <Title title={"Our Portfolio"} />
        <p>Showcasing projects that reflect creativity, strategy, and measurable impact.</p>
      </div>


      <div className="container-fluid pt-4">
        <div className="row">
          {portfolio_data?.map((data, i) => (
            <div className="col-lg-4 mt-3" key={i}>
              <div className={`${styles.cardWrapper} position-relative`}>
                <div className={styles.imgWrapper}>
                  <Image
                    src={data?.img}
                    alt={data?.title || "Portfolio image"}
                    width={400}
                    height={300}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    className="img-fluid"
                  />
                </div>

                <div
                  className={`${styles.overlayWrapper} position-absolute `}
                ></div>

                <div className={`${styles.textLayer} position-absolute `}>
                  <h4>{data?.title}</h4>

                  <h6>
                    {data?.subtitle}{" "}
                    {data?.icon ? (
                      <span className="mx-2">
                        <DynamicIcon
                          name={data?.icon}
                          color="#E50914"
                          size={30}
                        />
                      </span>
                    ) : (
                      ""
                    )}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
