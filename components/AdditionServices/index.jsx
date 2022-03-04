import React from "react";
import { Row, Col } from "antd";
import s from "./index.module.less";
import Section from "../Section";
import HeadingText from "../HeadingText";
import ServiceList from "../ServiceList";

const dataList = {
  serviceList: [
    {
      name: "Nails repair",
      price: "$30",
    },
    {
      name: "French design",
      price: "$30",
    },
    {
      name: "Nail design",
      price: "$30",
    },

    {
      name: "Gel Color take-off",
      price: "$30",
    },
    {
      name: "Regular Polish Change Hands",
      price: "$30",
    },
    {
      name: "Regular Polish Change Toes",
      price: "$30",
    },
    {
      name: "Acrylic take-off",
      price: "$30",
    },
    {
      name: "Dipping Powder (SNS) take-off",
      price: "$30",
    },
    {
      name: "Gel Polish Change Hands",
      price: "$30",
    },
    {
      name: "Gel Polish Change Toes",
      price: "$30",
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
            <div className={s.viewImage}></div>
          </Col>
          <Col md={12} xs={24}>
            <div data-aos="fade-right">
              <ServiceList data={dataList} showTitle={false} />
            </div>
          </Col>
        </Row>
      </div>
    </Section>
  );
};

export default AdditionServices;
