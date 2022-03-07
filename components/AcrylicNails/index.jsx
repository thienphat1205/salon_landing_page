import React from "react";
import { Row, Col } from "antd";
import s from "./index.module.less";
import Section from "../Section";
import HeadingText from "../HeadingText";
import ServiceList from "../ServiceList";

const dataList = {
  serviceList: [
    {
      name: "Full set Regular Polish",
      price: "$30",
      description: [],
    },
    {
      name: "Fill-ins Regular Polish",
      price: "$30",
      description: [],
    },
    {
      name: "Full Set Acrylic Color",
      price: "$30",
      description: [],
    },

    {
      name: "Full Set Acrylic with Gel Polish",
      price: "$30",
      description: [],
    },
    {
      name: "Acrylic Powder Color",
      price: "$30",
      description: [],
    },
    {
      name: "Special Shape",
      price: "$30",
      description: ["Stiletto, Coffin, Pointing, Almond…"],
    },
    {
      name: "White Tips (Full set)",
      price: "$30",
      description: [],
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
            <div className={s.viewImage}></div>
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
