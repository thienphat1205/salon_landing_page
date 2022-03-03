import HeadHTML from "../../components/Head";
import Header from "../../components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <HeadHTML />
      <Header />
      {children}
    </>
  );
};

export default Layout;
