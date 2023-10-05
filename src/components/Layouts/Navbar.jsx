import Plogo from "../../assets/Img/Plogo.png";
import "../../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container-links">
      <img className="Logo" src={Plogo} alt="Logo de Pictarine" />
      <div className="links">
        <Link to={"/Home"}>Home</Link>
        <Link to={"/Product"}>Notre Produit</Link>
        <Link to={"/PictaLife"}>Picta life</Link>
        <Link to={"/Team"}>La Team</Link>
        <Link to={"/Tech"}>La Tech</Link>
        <Link to={"/Partnerships"}>Partnerships</Link>
        <Link to={"/RejoinsNous"}>Rejoins-nous</Link>
      </div>
    </div>
  );
}

export default Navbar;
