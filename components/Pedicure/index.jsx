import React from "react";
import { Row, Col } from "antd";
import s from "./index.module.less";
import Section from "../Section";
import HeadingText from "../HeadingText";
import ServiceList from "../ServiceList";

const dataList = {
  serviceList: [
    {
      name: "Botanical Pedicure",
      isNew: true,
      price: "$47",
      description: [
        "Includes fizzing tablet soak, nail trim, shape & buff, cuticle groom & callus smoother, heating sensation exfoliant with a rich blend of conditioners and essential oils that help replenish dull dry skin, hot towels with mud masque made from botanical extracts and natural ingredients with cooling sensation, silky smooth lotion legs & feet massage, finish with regular polish color.",
      ],
    },
    {
      name: "Signature Botanical Pedicure",
      price: "$60",
      isNew: true,
      description: [
        "Includes fizzing tablet soak, nail trim, shape & buff, cuticle groom & callus smoother, heating sensation exfoliant with a rich blend of conditioners and essential oils that help replenish dull dry skin, hot stone massage ,hot towels with mud masque made from botanical extracts and natural ingredients with cooling sensation, silky smooth lotion legs & feet massage, finish with regular polish color.",
      ],
    },
  ],
};

const data1 = {
  serviceList: [
    {
      name: "Royal Botanical Pedicure",
      isNew: true,
      price: "$72",
      description: [
        "Includes fizzing tablet soak, nail trim, shape & buff, cuticle groom & callus smoother, heating sensation exfoliant with a rich blend of conditioners and essential oils that help replenish dull dry skin,hot stone massage,hot towels with mud masque made from botanical extracts and natural ingredients with cooling sensationcombining hot paraffin treatment, silky smooth lotion legs & feet massage, finish with regular polish color.",
      ],
    },
    {
      name: "Spa Pedicure",
      price: "$35",
      description: [
        "Our basic pedicure includes nail trimming and shaping, buffing, cuticle grooming, lotion massage, hot towel and regular polish color of your choice.",
      ],
    },
    {
      name: "GEL Pedicure",
      price: "$55",
      description: ["Spapedicure + gel polish color of your choice"],
    },
    {
      name: "Sugar Scrub Pedicure",
      price: "$40",
      description: ["Our Spa pedicure plus sugar scrub exfoliation"],
    },
  ],
};

const data2 = {
  serviceList: [
    {
      name: "Deluxe Pedicure",
      isNew: true,
      price: "$47",
      description: [
        "Deluxe pedicure includes nail trimming and shaping, buffing, cuticle grooming, callus treatment, sugar scrub exfoliation, hot stone massage, lotion massage, hot towel wrap and regular polish color of your choice.",
      ],
    },
    {
      name: "Express Pedicure",
      price: "$25",
      description: [
        "Our Express pedicure includes nail trimming and shaping, buffing, cuticle grooming and regular polish color of your choice",
      ],
    },
    {
      name: "PedicureAdd-ons:",
      description: [
        "Add $20for Gel Polish",
        "Add $5 for French Polish",
        "Add $5+ for Nail Design",
        "Add $10 for Paraffin",
        "Add $12 for 10 Min Massage",
        "Add $2/ea. for 3 or More Colors",
      ],
    },
  ],
};

const DeluxeSpaServices = () => {
  return (
    <Section id="spaServices">
      <div className={s.spaServices}>
        <div className={s.viewTop}>
          <HeadingText title="Pedicure" />
        </div>
        <Row gutter={[30, 8]}>
          <Col md={12} xs={24}>
            <div className={s.viewImage} data-aos="zoom-in-left"></div>
          </Col>
          <Col md={12} xs={24}>
            <div data-aos="fade-down-left">
              <ServiceList data={dataList} showTitle />
            </div>
          </Col>
        </Row>
        <div className={s.viewList} data-aos="fade-up">
          <Row gutter={[30, 8]}>
            <Col md={12} xs={24}>
              <ServiceList
                data={data1}
                showTitle
                styles={{ marginTop: "34px" }}
              />
            </Col>
            <Col md={12} xs={24}>
              <ServiceList
                data={data2}
                showTitle
                styles={{ marginTop: "34px" }}
              />
            </Col>
          </Row>
        </div>
      </div>
    </Section>
  );
};

export default DeluxeSpaServices;
