import Navbar from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { useLocation } from "react-router";
import Header from "./Header";
const Layout = () => {
  const location = useLocation();
  const isProductPage = location.pathname === "/product";
  // const isTechPage = location.pathname === "/Tech";
  return (
    <>
      <Header />
      <Outlet />
      {/* isProductPage={isProductPage} isTechPage={isTechPage} */}
      <Footer isProductPage={isProductPage} />
    </>
  );
};

export default Layout;
