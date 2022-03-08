import HeadHTML from "../../components/Head";
import Header from "../../components/Header";
import { BackTop } from "antd";
import s from "./index.module.less";
import { FaArrowUp } from "react-icons/fa";

const style = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#1088e9",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
};

const Layout = ({ children }) => {
  return (
    <>
      <HeadHTML />
      <Header />
      <BackTop visibilityHeight={1500}>
        <div className={s.backtop}>
          <div className={s.content}>
            <FaArrowUp style={{ fontSize: "20px", marginBottom: "5px" }} />
            <p>TOP</p>
          </div>
        </div>
      </BackTop>
      {children}
    </>
  );
};

export default Layout;
