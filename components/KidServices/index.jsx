import React from "react";
import { Row, Col } from "antd";
import s from "./index.module.less";
import Section from "../Section";
import HeadingText from "../HeadingText";
import ServiceList from "../ServiceList";

const dataList = {
  serviceList: [
    {
      name: "Kid Pedicure",
      price: "$30",
    },
    {
      name: "Kid Manicure",
      price: "$30",
    },
    {
      name: "Combo Pedi + Mani",
      price: "$30",
    },

    {
      name: "Little Peppermint Combo",
      price: "$30",
    },
    {
      name: "Little Green Tea Combo",
      price: "$30",
    },
    {
      name: "Gel Polish",
      price: "$30",
    },
  ],
};

const KidServices = () => {
  return (
    <Section id="KidServices">
      <div className={s.spaServices}>
        <div className={s.viewTop}>
          <HeadingText title="Kid Services (10 - 13 Years Old)" />
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

export default KidServices;
