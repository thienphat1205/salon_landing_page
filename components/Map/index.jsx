import React from "react";
import s from "./index.module.less";

const Map = () => {
  return (
    <div className={s.map}>
      <div className={s.container}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3092.227122258779!2d-84.23741778464091!3d39.19228767952631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8840ffcf456c08b9%3A0xe2692a4e63f17c44!2sCT&#39;S%20Nail%20Spa!5e0!3m2!1svi!2s!4v1646620621564!5m2!1svi!2s"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
