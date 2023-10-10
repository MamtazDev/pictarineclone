import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { useLocation } from "react-router";
const Layout = () => {
  const location = useLocation();
  const isProductPage = location.pathname === "/Product";
  const isTechPage = location.pathname === "/Tech";
  return (
    <>
      <Navbar isTechPage={isTechPage} />
      <Outlet />
      <Footer isProductPage={isProductPage} isTechPage={isTechPage} />
    </>
  );
};

export default Layout;
