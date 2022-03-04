import React from "react";
import { Row, Col } from "antd";
import s from "./index.module.less";
import Section from "../Section";
import HeadingText from "../HeadingText";
import ServiceList from "../../components/ServiceList";

const dataList = {
  title: "Peppermint Spa",
  serviceList: [
    {
      name: "Manicure",
      price: "$30",
      description: [
        "Peppermint manicure + Peppermint scrub exfoliation, Peppermint cream massage, warm towel, shoulder massage.",
      ],
    },
    {
      name: "Pedicure",
      price: "$45",
      description: [
        "Peppermint pedicure + soak with salt, callus treatment, Peppermint scrub exfoliation, butter cream massage (10mins),warm towel.",
      ],
    },
  ],
};

const dataOrganicList = {
  title: "Peppermint Spa",
  subTitle:
    "Scent of your choice: Lemon – Green Tea – Chocolate -White Tea – Coconut Jasmine.",
  serviceList: [
    {
      name: "Manicure",
      price: "$30",
      description: [
        "Organic manicure + Organic scrub exfoliation, Organic cream massage, moisture mask treatment, warm towels, shoulder massage (5mins).",
      ],
    },
    {
      name: "Pedicure",
      price: "$45",
      description: [
        "Organic pedicure + soak in orange salt, callus treatment, Organic scrub exfoliation, moisture mask treatment, Organic cream massage (12mins), warm towels.",
      ],
    },
  ],
};

const dataDetoxList = {
  title: "Charcoal - Detox Treatment",
  serviceList: [
    {
      name: "Manicure",
      price: "$30",
      description: [
        "Detox manicure + Charcoal scrub exfoliation, Charcoal butter massage (5mins), MUD mask wraps, warm towels, ice cooling gel, shoulder massage (5mins).",
      ],
    },
    {
      name: "Pedicure",
      price: "$45",
      description: [
        "Detox pedicure + soak with Charcoal salt, Charcoal scrub exfoliation, MUD mask wraps, Charcoal butter massage + ice cooling gel (15mins), warm towels.",
      ],
    },
  ],
};

const dataMilkAndHoneyList = {
  title: "Milk & Honey Spa",
  serviceList: [
    {
      name: "Manicure",
      price: "$30",
      description: [
        "Milk & Honey manicure + Milk&Honey scrub exfoliation, Milk&Honey cream massage (5mins), moisture mask treatment, warm towels, shoulder massage (5mins).",
      ],
    },
    {
      name: "Pedicure",
      price: "$45",
      description: [
        "Milk & Honey pedicure + soak feet with orange salt, Milk&Honey scrub exfoliation, moisture mask treatment, Milk&Honey cream massage (17mins), warm towels.",
      ],
    },
  ],
};

const dataAntiAging = {
  title: "Anti-Aging & Collagen by VOESH New York",
  serviceList: [
    {
      name: "Manicure",
      price: "$30",
      description: [
        "Collagen manicure + Anti-Aging scrub exfoliation, moisture mask treatment, Collagen hand gloves, warm towels, Anti-Aging cream massage (5mins), shoulder massage (5mins).",
      ],
    },
    {
      name: "Pedicure",
      price: "$45",
      description: [
        "Collagen pedicure + soak feet with orange salt, callus treatment, Anti-Aging scrub exfoliation, moisture mask treatment, Collagen feet gloves, Anti-Aging cream massage (20mins). Shoulder massage (5 mins), Warm towels.",
      ],
    },
  ],
};

const dataAloe = {
  title: "Aloe Vera Treatment",
  serviceList: [
    {
      name: "Manicure",
      price: "$30",
      description: [
        "Aloe Vera manicure + Aloe Vera scrub exfoliation, moisture mask treatment with Fresh Aloe Vera, warm towels, butter cream massage (5mins), hot stones shoulder massage (7mins).",
      ],
    },
    {
      name: "Pedicure",
      price: "$45",
      description: [
        "Aloe Vera pedicure + soak with Aloe Vera Sea salt, callus treatment, Aloe Vera scrub exfoliation, moisture mask treatment with Fresh Aloe Vera, hot stones (5mins), Aloe Vera cream massage (10mins), shoulder massage (10mins), warm towels.",
      ],
    },
  ],
};

const dataHotTone = {
  title: "Hot Stone Treatment",
  serviceList: [
    {
      name: "Manicure",
      price: "$30",
      description: [
        "Hot Stone manicure + scrub exfoliation, butter cream massage, moisture mask treatment, warm towels, shoulder massage with hot stones (5mins).",
      ],
    },
    {
      name: "Pedicure",
      price: "$45",
      description: [
        "Hot Stone pedicure + soak feet with orange salt, scrub exfoliation, moisture mask treatment, hot stones (5mins), butter cream massage (10mins), warm towels.",
      ],
    },
  ],
};

const dataFresh = {
  title: "Fresh Orange Treatment",
  serviceList: [
    {
      name: "Manicure",
      price: "$30",
      description: [
        "Orange manicure + soaking with Orange salt, Orange scrub exfoliation, moisture mask treatment with Fresh Orange, warm towels, Orange cream massage (5mins), shoulder massage (5mins).",
      ],
    },
    {
      name: "Pedicure",
      price: "$45",
      description: [
        "Orange pedicure + soak feet with Orange salt, callus treatment, Orange scrub exfoliation, moisture mask with Fresh Orange, Orange cream massage (15mins), shoulder massage(5mins),warm towels.",
      ],
    },
  ],
};

const dataParaffin = {
  title: "Paraffin Treatment",
  serviceList: [
    {
      name: "Manicure",
      price: "$30",
      description: [
        "Paraffin manicure + sugar scrub exfoliation, moisture mask treatment, paraffin treatment, warm towels, butter cream massage (5mins), shoulder massage (5mins).",
      ],
    },
    {
      name: "Pedicure",
      price: "$45",
      description: [
        "Paraffin pedicure + soak feet with orange salt, callus treatment, sugar scrub exfoliation, moisture mask treatment, paraffin treatment, hot stones (5mins), cream massage (10mins). Shoulder massage (10 mins), Warm towels.",
      ],
    },
  ],
};

const dataCucumber = {
  title: "Cucumber by O.P.I Spa",
  serviceList: [
    {
      name: "Manicure",
      price: "$30",
      description: [
        "Cucumber manicure + O.P.I Cucumber scrub exfoliation, moisture mask treatment with O.P.I Cucumber, Perfect Sense paraffin treatment, warm towels, butter cream massage (5mins), hot stones shoulder massage (5mins).",
      ],
    },
    {
      name: "Pedicure",
      price: "$45",
      description: [
        "Cucumber pedicure + soak feet with sea salt, callus treatment, Cucumber scrub exfoliation, O.P.I Cucumber moisture mask, Perfect Sense paraffin treatment, hot stones massage (5mins), O.P.I Cucumber cream massage (15mins), warm towels. Shoulder massage (10 mins).",
      ],
    },
  ],
};

const dataChampagne = {
  title: "Champagne & Roses by Keyano Aromatic",
  description:
    "Mask of your choice: Collagen facial mask, Anti-wrinkles eyes mask, hands mask",
  serviceList: [
    {
      name: "Manicure",
      price: "$30",
      description: [
        "Champagne & Roses manicure + soaking with Champagne&Roses, Champagne & Roses scrub exfoliation, cream mask hydration, paraffin foot mask treatment, extra choices in 1 (Eyes mask, Facial mask, collegen hand mask), warm towels, butter cream massage (5mins), shoulder massage (10mins).",
      ],
    },
    {
      name: "Pedicure",
      price: "$45",
      description: [
        "Champagne & Roses pedicure + soak feet with sea salt, callus treatment, Champagne&Roses scrub exfoliation, cream mask hydration, paraffin foot mask treatment, extra choices in 1 (Eyes mask, Facial mask, collegen hand mask), hot stones massage (5mins), butter cream massage (20mins), warm towels. Shoulder massage (10 mins).",
      ],
    },
  ],
};

const DeluxeSpaServices = () => {
  return (
    <Section id="spaServices">
      <div className={s.spaServices}>
        <div className={s.viewTop}>
          <HeadingText
            title="Deluxe Spa Services"
            desc="Pamper yourself with our well-known services."
          />
        </div>
        <Row gutter={[30, 8]}>
          <Col md={6} xs={24}>
            <div className={s.viewImage}></div>
          </Col>
          <Col md={18} xs={24}>
            <div data-aos="fade-down-left">
              <ServiceList data={dataList} showTitle />
              <ServiceList
                data={dataOrganicList}
                showTitle
                styles={{ marginTop: "34px" }}
              />
            </div>
          </Col>
        </Row>
        <div className={s.viewList} data-aos="fade-up">
          <Row gutter={[30, 8]}>
            <Col md={12} xs={24}>
              <ServiceList
                data={dataDetoxList}
                showTitle
                styles={{ marginTop: "34px" }}
              />
            </Col>
            <Col md={12} xs={24}>
              <ServiceList
                data={dataMilkAndHoneyList}
                showTitle
                styles={{ marginTop: "34px" }}
              />
            </Col>
            <Col md={12} xs={24}>
              <ServiceList
                data={dataAntiAging}
                showTitle
                styles={{ marginTop: "34px" }}
              />
            </Col>
            <Col md={12} xs={24}>
              <ServiceList
                data={dataAloe}
                showTitle
                styles={{ marginTop: "34px" }}
              />
            </Col>
            <Col md={12} xs={24}>
              <ServiceList
                data={dataHotTone}
                showTitle
                styles={{ marginTop: "34px" }}
              />
            </Col>
            <Col md={12} xs={24}>
              <ServiceList
                data={dataParaffin}
                showTitle
                styles={{ marginTop: "34px" }}
              />
            </Col>
            <Col md={12} xs={24}>
              <ServiceList
                data={dataFresh}
                showTitle
                styles={{ marginTop: "34px" }}
              />
            </Col>
            <Col md={12} xs={24}>
              <ServiceList
                data={dataCucumber}
                showTitle
                styles={{ marginTop: "34px" }}
              />
            </Col>
            <Col md={{ span: 12, offset: 12 }} xs={24}>
              <ServiceList
                data={dataChampagne}
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
