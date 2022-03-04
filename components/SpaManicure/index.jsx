import React from "react";
import { Row, Col } from "antd";
import s from "./index.module.less";
import Section from "../Section";
import HeadingText from "../HeadingText";
import ServiceList from "../ServiceList";

const dataList = {
  serviceList: [
    {
      name: "Basic Manicure",
      price: "$30",
      description: [
        "Our basic manicure includes nail trimming and shaping, cuticle grooming, buffing, lotion massage and regular polish color of your choice.",
      ],
    },
    {
      name: "GEL Manicure",
      price: "$30",
      description: ["Basic manicure + gel polish color of your choice."],
    },
    {
      name: "French Gel",
      price: "$30",
      description: [],
    },
    {
      name: "Gel Polish change",
      price: "$30",
      description: [
        "For longer lasting polish and waive the soak-off fee, upgrade to on basic manicure service for only $15 more.",
      ],
    },
    {
      name: "Toes Gel Polish Change",
      price: "$30",
      description: [
        "For longer lasting polish and waive the soak-off fee, upgrade to on basic Pedicure service for only $25 more.",
      ],
    },
    {
      name: "Dry skin Treatment Extra",
      price: "$30",
      description: [
        "Perfect Combination of Paraffin and Moisture Mask. Results are dramatically different, revealing healthier and softer skin. This treatment is ideal for dry skin and heels.",
      ],
    },
  ],
};

const SpaManicure = () => {
  return (
    <Section id="spaManicure">
      <div className={s.spaServices}>
        <div className={s.viewTop}>
          <HeadingText title="Spa Manicure" />
        </div>
        <Row gutter={[30, 8]}>
          <Col md={12} xs={24}>
            <div data-aos="fade-down-left">
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

export default SpaManicure;
