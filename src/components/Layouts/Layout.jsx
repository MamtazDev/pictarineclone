import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { useLocation } from "react-router";
const Layout = () => {
  const location = useLocation();
  const isProductPage = location.pathname === "/Product";
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer isProductPage={isProductPage} />
    </>
  );
};

export default Layout;
