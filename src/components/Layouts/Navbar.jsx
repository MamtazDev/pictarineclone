import Plogo from "../../assets/Img/Plogo.png";
import "../../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container-links" id="anchor">
      <img className="Logo" src={Plogo} alt="Logo de Pictarine" />
      <div className="links">
        <Link to={"/Home"}>Home</Link>
        <Link to={"/Product"}>Notre Produit</Link>
        <Link to={"/PictaLife"}>Picta life</Link>
        <Link to={"/Team"}>La Team</Link>
        <Link to={"/Tech"}>La Tech</Link>
        <Link to={"/Partnerships"}>Partnerships</Link>
        <Link to={"/RejoinsNous"}>Rejoins-nous</Link>
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
