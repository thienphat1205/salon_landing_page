import React from "react";
import { Row, Col } from "antd";
import s from "./index.module.less";
import Section from "../Section";
import HeadingText from "../HeadingText";
import ServiceList from "../ServiceList";

const Santitation = () => {
  return (
    <Section id="Santitation">
      <div className={s.spaServices}>
        <div className={s.viewTop}>
          <HeadingText
            title="SANTITATION AND STERILIZATION"
            desc="Your safety is our NUMBER 1 priority, therefore, we follow the highest industry standards. We use disposable liners for all pedicure, each client will receive a liner, nail file and buffer with our services. We also sanitize and sterilize all our tools and implements with a dry steam autoclave in individual pouches."
          />
        </div>
      </div>
    </Section>
  );
};

export default Santitation;
