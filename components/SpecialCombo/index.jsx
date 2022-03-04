import React from "react";
import { Row, Col } from "antd";
import s from "./index.module.less";
import Section from "../Section";
import HeadingText from "../HeadingText";
import ServiceList from "../ServiceList";

const dataList = {
  serviceList: [
    {
      name: "Spa Combo",
      price: "$30",
      description: ["Basic Manicure ($20)", "Basic Pedicure ($35)"],
    },
    {
      name: "All-about-Gel Combo",
      price: "$30",
      description: [],
    },
    {
      name: "All-about-Gel French",
      price: "$30",
      description: ["GEL Manicure ($35)", "GEL Pedicure ($55)"],
    },
    {
      name: "Basic Pedi & Mani Gel Color",
      price: "$30",
      description: [],
    },
    {
      name: "Basic Pedi & Mani Gel French",
      price: "$30",
      description: [
        "For longer lasting polish and waive the soak-off fee, upgrade to on basic Pedicure service for only $25 more.",
      ],
    },
  ],
};

const SpaManicure = () => {
  return (
    <Section id="SpecialCombo">
      <div className={s.spaServices}>
        <div className={s.viewTop}>
          <HeadingText title="Specials Combo" />
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

export default SpaManicure;
