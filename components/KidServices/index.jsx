import React from "react";
import { Row, Col } from "antd";
import s from "./index.module.less";
import Section from "../Section";
import HeadingText from "../HeadingText";
import ServiceList from "../ServiceList";

const dataList = {
  serviceList: [
    {
      name: "Little Pedi",
      price: "$25",
    },
    {
      name: "Little Mani",
      price: "$15",
    },
    {
      name: "Gel Mani",
      price: "$34",
    },
    {
      name: "Gel Pedi",
      price: "$45",
    },
    {
      name: "Gel polish change",
      price: "$18",
    },
    {
      name: "Gel polish change toes",
      price: "$23",
    },
    {
      name: "Dip powder",
      price: "$40",
    },
    {
      name: "Dip manicure",
      price: "$45",
    },
    {
      name: "Acrylic Fullset",
      price: "$35",
    },
    {
      name: "Acrylic Fill-ins",
      price: "$25",
    },
    {
      name: "Regular color change| Hands",
      price: "$7",
    },
    {
      name: "Regular color change | Toes",
      price: "$9",
    },
    {
      name: "Nails trimming and shaping| Hands",
      price: "$6",
    },
    {
      name: "Nails trimming and shaping| Feet",
      price: "$8",
    },
    {
      name: "Add-ons:",
      description: [
        "Add $5 for French Polish",
        "Add $5+ for Nail Design",
        "Add $2/ea.for 3 or More Colors.",
        "Special Shape  $10+(Full set)/$5+(Fill-ins)",
      ],
    },
  ],
};

const KidServices = () => {
  return (
    <Section id="KidServices">
      <div className={s.spaServices}>
        <div className={s.viewTop}>
          <HeadingText title="Kid Services (Under 10)" />
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

export default KidServices;
