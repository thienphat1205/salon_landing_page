import React from "react";
import { Row, Col } from "antd";
import s from "./index.module.less";
import Section from "../Section";
import HeadingText from "../HeadingText";
import ServiceList from "../ServiceList";

const dataList = {
  serviceList: [
    {
      name: "Pink & White Full set/ Overlay",
      price: "$60",
    },
    {
      name: "Pink& White Fill-ins",
      price: "$50",
    },
    {
      name: "Pink only Fullset",
      price: "$50",
    },
    {
      name: "Pink fill-ins",
      price: "$38",
    },
    {
      name: "Pink & White remove",
      price: "$10",
    },
    {
      name: "Pink-n-White Add-ons:",
      description: [
        "Pink & White repairs $5/ea.",
        "Special Shape  $10+(Full set)/$5+(Fill-ins)",
      ],
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
            desc={`Pink & white acrylics a.k.a “Permanent French” is durable, classic, shiny and ready to go, leaving you with a clean and natural look.`}
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

export default PinknWhite;
