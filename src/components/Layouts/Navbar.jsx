import Plogo from "../../assets/Img/Plogo.png";
import "../../styles/Navbar.css";
import { NavLink, useLocation } from "react-router-dom";

function Navbar({ isTechPage }) {
  const location = useLocation();

  const navbarClasses = isTechPage
    ? "container-links container-links-bg-black"
    : "container-links";

  const isDefaultActive = (path) => {
    return (
      location.pathname === path ||
      (path === "/Home" && location.pathname === "/")
    );
  };
  return (
    <div className={navbarClasses}>
      <img className="Logo" src={Plogo} alt="Logo de Pictarine" />
      <div className="links">
        <NavLink
          to={"/Home"}
          className={isDefaultActive("/Home") ? "active-link" : ""}
        >
          Home
        </NavLink>
        <NavLink
          to={"/Product"}
          className={location.pathname === "/Product" ? "active-link" : ""}
        >
          Notre Produit
        </NavLink>
        <NavLink
          to={"/PictaLife"}
          className={location.pathname === "/PictaLife" ? "active-link" : ""}
        >
          Picta life
        </NavLink>
        <NavLink
          to={"/Team"}
          className={location.pathname === "/Team" ? "active-link" : ""}
        >
          La Team
        </NavLink>
        <NavLink
          to={"/Tech"}
          className={location.pathname === "/Tech" ? "active-link" : ""}
        >
          La Tech
        </NavLink>
        <NavLink
          to={"/Partnerships"}
          className={location.pathname === "/Partnerships" ? "active-link" : ""}
        >
          Partnerships
        </NavLink>
        <NavLink
          to={"/RejoinsNous"}
          className={location.pathname === "/RejoinsNous" ? "active-link" : ""}
        >
          Rejoins-nous
        </NavLink>
        <img
          className="french-flag"
          src="https://pictarine.com/menu/fr.png"
          alt="icone du drapeau de la France"
        />
      </div>
    </div>
  );
}

export default Navbar;
