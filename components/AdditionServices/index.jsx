import React from "react";
import { Row, Col } from "antd";
import s from "./index.module.less";
import Section from "../Section";
import HeadingText from "../HeadingText";
import ServiceList from "../ServiceList";

const dataList = {
  serviceList: [
    {
      name: "Nails trimming and shaping",
      price: "$10+",
    },
    {
      name: "Regular color change | Hands",
      price: "$10",
    },
    {
      name: "Regular color change | Toes",
      price: "$15",
    },
    {
      name: "Nails trimming and shaping| Hands",
      price: "$8",
    },
    {
      name: "Nails trimming and shaping| Feet",
      price: "$12",
    },
  ],
};

const AdditionServices = () => {
  return (
    <Section id="Addition Services">
      <div className={s.spaServices}>
        <div className={s.viewTop}>
          <HeadingText title="Addition Services" />
        </div>
        <Row gutter={[30, 8]}>
          <Col md={12} xs={24}>
            <div data-aos="zoom-in-right" className={s.viewImage}></div>
          </Col>
          <Col md={12} xs={24}>
            <div data-aos="fade-down-left">
              <ServiceList data={dataList} showTitle={false} />
            </div>
          </Col>
        </Row>
      </div>
    </Section>
  );
};

export default AdditionServices;
