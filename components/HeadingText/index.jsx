import React from "react";
import Aos from "aos";
import s from "./index.module.less";

function HeadingText({ title = "", desc = "" }) {
  React.useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className={s.root}>
      <p className={s.textTitle} data-aos="flip-left">
        {title}
      </p>
      {desc && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className={s.textDesc} data-aos="fade-up">
            {desc}
          </p>
        </div>
      )}
    </div>
  );
}

export default HeadingText;
