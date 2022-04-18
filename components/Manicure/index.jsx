import React from "react";
import { Row, Col } from "antd";
import s from "./index.module.less";
import Section from "../Section";
import HeadingText from "../HeadingText";
import ServiceList from "../ServiceList";

const dataList = {
  serviceList: [
    {
      name: "Deluxe Manicure",
      price: "$30",
      isNew: true,
      description: [
        "Seasalt soak, sugar scrub, mud masque and high moisture lotion massage.",
      ],
    },
    {
      name: "Basic Manicure",
      price: "$20",
      description: [
        "Our basic manicure includes nail trimming and shaping, cuticle grooming, buffing, lotion massage and regular polish color of your choice.",
      ],
    },
    {
      name: "GEL/ShellacManicure",
      price: "$37",
      description: ["Basic manicure + gel polish color of your choice."],
    },
    {
      name: "Gel Polish change",
      price: "$25",
    },
    {
      name: "GEL remove only ",
      price: "$10",
    },
    {
      name: "Manicure Add-ons:",
      description: [
        "Add $17 for Gel Polish",
        "Add $5 for French Polish",
        "Add $5+ for Nail Design",
        "Add $2/ea.for 3 or More Colors",
        "Add $12 for 10 Min Massage",
        "Add $6 for Sugar Scrub",
        "Add $10 for Dry Skin Treatment (Paraffin + Mud Mask)",
      ],
    },
  ],
};

const SpaManicure = () => {
  return (
    <Section id="spaManicure">
      <div className={s.spaServices}>
        <div className={s.viewTop}>
          <HeadingText title="Manicure" />
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

export default SpaManicure;
