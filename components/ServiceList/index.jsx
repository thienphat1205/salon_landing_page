import React from "react";
import s from "./index.module.less";

const ServiceList = ({ styles = {}, data = {}, showTitle = false }) => {
  const {
    title = "",
    subTitle = "",
    serviceList = [],
    description = "",
    isNew,
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
        const { name, price, description = [], isNew } = item;
        const isLastItem = idx === serviceList.length - 1;
        return (
          <div className={s.itemService} key={idx}>
            <div className={s.viewTitleItemSercvice} key={idx}>
              <p>
                {name}{" "}
                {isNew && <span style={{ color: "#51a67f" }}>(NEW)</span>}
              </p>
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
