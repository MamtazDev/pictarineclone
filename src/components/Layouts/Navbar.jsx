import Plogo from "../../assets/Img/Plogo.png";
import "../../styles/Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar({ isTechPage }) {
  const navbarClasses = isTechPage
    ? "container-links container-links-bg-black"
    : "container-links";
  return (
    <div className={navbarClasses}>
      <img className="Logo" src={Plogo} alt="Logo de Pictarine" />
      <div className="links">
        <NavLink to={"/Home"} ClassName="active-link">
          Home
        </NavLink>
        <NavLink to={"/Product"} ClassName="active-link">
          Notre Produit
        </NavLink>
        <NavLink to={"/PictaLife"} ClassName="active-link">
          Picta life
        </NavLink>
        <NavLink to={"/Team"} ClassName="active-link">
          La Team
        </NavLink>
        <NavLink to={"/Tech"} ClassName="active-link">
          La Tech
        </NavLink>
        <NavLink to={"/Partnerships"} ClassName="active-link">
          Partnerships
        </NavLink>
        <NavLink to={"/RejoinsNous"} ClassName="active-link">
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
