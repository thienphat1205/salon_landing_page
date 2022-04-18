import React from "react";
import { Row, Col } from "antd";
import s from "./index.module.less";
import Section from "../Section";
import HeadingText from "../HeadingText";
import ServiceList from "../ServiceList";

const dataList = {
  serviceList: [
    {
      name: "Full set/ Overlay",
      price: "$38",
    },
    {
      name: "Fill-ins",
      price: "$28",
    },
    {
      name: "White tips (Full set)y",
      price: "$45",
    },
    {
      name: "Gel Full set",
      price: "$55",
    },
    {
      name: "Gel Fill-ins",
      price: "$45",
    },
    {
      name: "OmbréFull set",
      price: "$65+",
    },
    {
      name: "Ombré2 colors fill-ins",
      price: "$55+",
    },
    {
      name: "Ombré1 colors fill-ins",
      price: "$42+",
    },
    {
      name: "Acrylic remove only",
      price: "$10",
    },
    {
      name: "Cut & Shape on Acrylic ",
      price: "$12",
    },
    {
      name: "Gel color change on Acrylic",
      price: "$30",
    },
    {
      name: "Acrylic Add-ons:",
      description: [
        "Add $5 for French Polish",
        "Add $5+ for Nail Design",
        "Add $2/ea. for 3 or More Colors",
        "Acrylic repairs $5/ea.",
        "Special Shape  $10+(Full set)/$5+(Fill-ins)",
      ],
    },
  ],
};

const AcrylicNails = () => {
  return (
    <Section id="AcrylicNails">
      <div className={s.spaServices}>
        <div className={s.viewTop}>
          <HeadingText title="Acrylic Nails" />
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

export default AcrylicNails;
