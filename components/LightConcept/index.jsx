import React from "react";
import { Row, Col } from "antd";
import s from "./index.module.less";
import Section from "../Section";
import HeadingText from "../HeadingText";
import ServiceList from "../ServiceList";

const dataList = {
  serviceList: [
    {
      name: "SQUARE/ SQUOVAL",
      price: "$0+",
    },
    {
      name: "ROUNDED / OVAL",
      price: "$0+",
    },
    {
      name: "ALMOND",
      price: "$10+(Full set)/ $5+ (Fill-ins)",
    },
    {
      name: "COFFIN",
      price: "$10+(Full set)/ $5+ (Fill-ins)",
    },
    {
      name: "STILETTO",
      price: "$10+(Full set)/ $5+ (Fill-ins)",
    },
  ],
};

const LightConceptGel = () => {
  return (
    <Section id="LightConceptGel">
      <div className={s.spaServices}>
        <div className={s.viewTop}>
          <HeadingText
            title="Nails shape/length"
            desc="Price may vary depending on length of nails"
          />
        </div>
        <Row gutter={[30, 8]}>
          <Col md={12} xs={24}>
            <div data-aos="fade-down-right">
              <ServiceList data={dataList} showTitle={false} />
            </div>
          </Col>
          <Col md={12} xs={24}>
            <div data-aos="zoom-in-left" className={s.viewImage}></div>
          </Col>
        </Row>
      </div>
    </Section>
  );
};

export default LightConceptGel;
