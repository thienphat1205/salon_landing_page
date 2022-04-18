import React from "react";
import { Row, Col } from "antd";
import s from "./index.module.less";
import Section from "../Section";
import HeadingText from "../HeadingText";
import ServiceList from "../ServiceList";

const dataList = {
  serviceList: [
    {
      name: "Dip Powder",
      price: "$45",
      isNew: true,
      description: [
        "Our ONLY dip powder service doesn’t include cuticle treatment.",
      ],
    },
    {
      name: "Dip Powder manicure",
      price: "$55",
      isNew: true,
      description: [
        "Our dipping service includes the cuticle treatment with Vitamin Oil.",
        "Results are dramatically different, revealing healthier nails and softer skin.",
      ],
    },
    {
      name: "French dipping",
      isNew: true,
      price: "$52",
    },
    {
      name: "Ombre dip powder",
      isNew: true,
      price: "$60",
    },
    {
      name: "Dip powder remove only ",
      price: "$10",
    },
  ],
};

const DippingPowder = () => {
  return (
    <Section id="dippingPowder">
      <div className={s.spaServices}>
        <div className={s.viewTop}>
          <HeadingText
            title="Dipping Powder (SNS)"
            desc="The concept of dipping powders is simple. Our technicians apply an adhesive base which is dipped in fine colored powder. The nail is then sealed with a special topcoat. There are multiple aesthetic benefits of getting Dipping Powder. It is more durable yetmore flexible than traditional acrylics, and the powder provides more strength than many gels. Unlike Gel Polish, Dipping Powder doesn't require UV lights to bond it to the nail.You can maintain the nails for as long as you like, although we recommend redo every two to three weeks depending on your lifestyle and the care of your nails."
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

export default DippingPowder;
