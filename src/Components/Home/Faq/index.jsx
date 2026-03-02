import CircularText from "@/Animation/CircularText";
import Title from "@/Common/Title";
import styles from "./styles.module.css";
import { DynamicIcon } from "lucide-react/dynamic";
import Image from "next/image";
import { useState } from "react";

const Faq = ({ faqData }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="sectiongap">
      <div className="intro">
        <Title title={"Your Faq's"} />
        <p>Everything you need to know before starting your project with us.</p>
      </div>
      <div className="container pt-4">
        <div className="row">
          <div className="col-lg-7">
            <div className={styles.accordionWrapper}>
              {faqData?.map((data, i) => (
                <div
                  key={data?.id}
                  className={`${styles.accordionItem} ${openIndex === i ? styles.active : ''}`}
                >
                  <button
                    className={styles.accordionButton}
                    onClick={() => toggleAccordion(i)}
                    aria-expanded={openIndex === i}
                  >
                    <span className={styles.questionNumber}>Q{i + 1}.</span>
                    <span className={styles.questionText}>{data?.question}</span>
                    <span className={`${styles.iconWrapper} ${openIndex === i ? styles.iconOpen : ''}`}>
                      <DynamicIcon
                        name={openIndex === i ? "minus" : "plus"}
                        color="#E50914"
                        size={24}
                      />
                    </span>
                  </button>

                  <div className={`${styles.accordionContent} ${openIndex === i ? styles.contentOpen : ''}`}>
                    <div className={styles.accordionBody}>
                      {data?.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5 h-100">
            <div className={styles.imgWrapper}>
              <Image
                src="/assets/Home/faq.webp"
                alt="FAQ support image"
                width={500}
                height={500}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
