import React from "react";
import s from "./index.module.less";
import { Row, Col } from "antd";

function Footer() {
  return (
    <>
      <div className={s.footer} data-aos="fade-up">
        <div className={s.container}>
          <div className={s.viewTitle}>
            <p className={s.text1}>FEEL FREE TO</p>
            <p className={s.text2}>CONTACT US</p>
          </div>
          <div className={s.viewInformation}>
            <Row gutter={[20, 70]}>
              <Col md={8} xs={24}>
                <div className={s.itemInformation}>
                  <p className={s.title}>Hours of Operation</p>
                  <p className={s.textInfo}>
                    Monday - Saturday: 10:00AM-17:00PM
                  </p>
                  <p className={s.textInfo} style={{ margin: 0 }}>
                    Sunday: Closed
                  </p>
                </div>
              </Col>
              <Col md={8} xs={24}>
                <div className={s.itemInformation}>
                  <p className={s.title}>Phone, location</p>
                  <p className={s.textInfoPhone}>Phone: (513) 831-3461</p>
                  <p className={s.textInfoAddress} style={{ margin: 0 }}>
                    1085 OH-28 B, Milford, OH 45150
                  </p>
                </div>
              </Col>
              {/* <Col md={8} xs={24}>
                <div className={s.viewSocialMedia}>
                  <div className={s.viewList}>Social Media</div>
                </div>
              </Col> */}
            </Row>
          </div>
        </div>
      </div>
      <div className={s.copyright}>
        <p>Copyright © CT'S Nail Spa. All rights reserved</p>
      </div>
    </>
  );
}

export default Footer;
