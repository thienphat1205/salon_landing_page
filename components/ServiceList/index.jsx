import React from "react";
import s from "./index.module.less";

const ServiceList = ({ styles = {}, data = {}, showTitle = false }) => {
  const {
    title = "",
    subTitle = "",
    serviceList = [],
    description = "",
  } = data;
  return (
    <div className={s.root} style={{ ...styles }}>
      {showTitle && (
        <div className={s.viewTitle}>
          <p className={s.textSubTitle}>{subTitle}</p>
          <p className={s.textTitle}>{title}</p>
        </div>
      )}
      {description && (
        <div className={s.viewDesc}>
          <p className={s.text}>{description}</p>
        </div>
      )}
      {serviceList.map((item, idx) => {
        const { name, price, description = [] } = item;
        const isLastItem = idx === serviceList.length - 1;
        return (
          <div className={s.itemService}>
            <div className={s.viewTitleItemSercvice} key={idx}>
              <p>{name}</p>
              <p>{price}</p>
            </div>
            {description.length > 0 && (
              <div style={{ marginTop: "14px" }}>
                {description.map((item, idx) => (
                  <p className={s.textDesc} key={idx}>
                    {item}
                  </p>
                ))}
              </div>
            )}
            {!isLastItem && <div className={s.divider} />}
          </div>
        );
      })}
    </div>
  );
};

export default ServiceList;
