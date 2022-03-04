import React from "react";
import styles from "./index.module.less";
import { Carousel } from "antd";
import Section from "../Section";

const dummyList = [
  {
    title: "SERVICES",
    desc: "OUTSTANDING BEAUTY OR YOUR NAILS",
  },
  {
    title: "SERVICES",
    desc: "OUTSTANDING BEAUTY OR YOUR NAILS",
  },
];

export const Cover = () => {
  return (
    <>
      <div className={styles.cover}>
        <div className={styles.contentCover}>
          <Carousel autoplay>
            {dummyList.map((item, idx) => {
              const { title, desc } = item;
              return (
                <div className={styles.itemCarousel} key={idx}>
                  <div style={{ maxWidth: "1140px" }}>
                    <h2 className={styles.textTitle}>{title}</h2>
                    <p className={styles.textDesc}>{desc}</p>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      <Section>
        <div className={styles.viewChoice}>
          <p className={styles.text1}>Best Choice Ever</p>
          <p className={styles.text2}>Our Services</p>
          <div className={styles.line} />
          <p className={styles.text}>
            All services are non-refundable. We will try our best to accommodate
            your service requests and expectations with our best efforts,
            skills, and technicians.
          </p>
          <p className={styles.text}>
            Please have all your jewelry and personal belongings in your
            possession and protection at all times. Lush Nail Spa is not
            responsible for any losses or damages to any personal items.
          </p>
        </div>
        <div className={styles.viewDivider}>
          <div className={styles.divider} />
          <p>We offer a glass of complimentary wine.</p>
        </div>
      </Section>
    </>
  );
};

export default Cover;
