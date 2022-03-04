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
