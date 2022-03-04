import React from "react";
import { Row, Col } from "antd";
import s from "./index.module.less";
import Section from "../Section";
import HeadingText from "../HeadingText";
import ServiceList from "../ServiceList";

const dataList = {
  serviceList: [
    {
      name: "Full-set with GEL color",
      price: "$30",
    },
    {
      name: "Pink-n-White Full",
      price: "$30",
    },
    {
      name: "Pink-n-White Fill",
      price: "$30",
    },
    {
      name: "Natural set with clear gel Full",
      price: "$30",
    },
    {
      name: "Natural set with clear gel Fill",
      price: "$30",
    },
    {
      name: "Special Shape Extra Full/ Fill",
      price: "$30",
      description: ["Stiletto, Coffin, Pointing, Almond…"],
    },
  ],
};

const LightConceptGel = () => {
  return (
    <Section id="LightConceptGel">
      <div className={s.spaServices}>
        <div className={s.viewTop}>
          <HeadingText
            title="Light Concept Gel"
            desc="It is natural looking, shining and flexible, non-yellowing on clear, pink & white or gel color as well.."
          />
        </div>
        <Row gutter={[30, 8]}>
          <Col md={12} xs={24}>
            <div data-aos="fade-right">
              <ServiceList data={dataList} showTitle={false} />
            </div>
          </Col>
          <Col md={12} xs={24}>
            <div className={s.viewImage}></div>
          </Col>
        </Row>
      </div>
    </Section>
  );
};

export default LightConceptGel;
