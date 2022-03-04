import React from "react";
import { Row, Col } from "antd";
import s from "./index.module.less";
import Section from "../Section";
import HeadingText from "../HeadingText";
import ServiceList from "../ServiceList";

const dataList = {
  serviceList: [
    {
      name: "Full-set",
      price: "$30",
    },
    {
      name: "Pink-n-White Fill-ins",
      price: "$30",
    },
    {
      name: "Pink fill-ins ",
      price: "$30",
    },
    {
      name: "Extra Long and Special Shape",
      price: "$30",
    },
    {
      name: "Extension",
      price: "$30",
    },
  ],
};

const PinknWhite = () => {
  return (
    <Section id="PinknWhite">
      <div className={s.spaServices}>
        <div className={s.viewTop}>
          <HeadingText
            title="Pink-n-White"
            desc="Pink-n-white acrylics a.k.a “Permanent French” is durable, classic, shiny and ready to go, leaving you with a clean and natural look. A non-yellowing formula is done in a double process with white powder for the free edge and shade of pink to for the nail bed."
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

export default PinknWhite;
