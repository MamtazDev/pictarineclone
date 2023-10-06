import Plogo from "../../assets/Img/Plogo.png";
import { Link } from "react-router-dom";
import insta from "../../assets/Img/instaLogo.svg";
import linkedin from "../../assets/Img/Linkedin icon.svg";
import wttj from "../../assets/Img/welcometothejungle logo.svg";
import "../../styles/Home.css";
import "../../styles/Footer.css";

function Footer({ isProductPage }) {
  const footerClasses = isProductPage
    ? "g-container-footer product-footer-bg-black"
    : "g-container-footer";
  return (
    <>
      <div className={footerClasses}>
        <div className="left-block-footer">
          <img src={Plogo} className="Logo" alt="logo de Pictarine" />
          <div className="g-container-infos">
            <p>Bat B, 3ème étage</p>
            <p>46 rue Marco Polo</p>
            <p>31670 Labège</p>
          </div>
          <div className="logo-social">
            <Link to={"https://www.instagram.com/pictarine/"}>
              <img src={insta} />
            </Link>
            <Link to={"https://www.linkedin.com/company/pictarine/"}>
              <img src={linkedin} alt="linkedin logo" />
            </Link>
            <Link
              to={"https://www.welcometothejungle.com/fr/companies/pictarine"}
            >
              <img className="wttj" src={wttj} alt="instagram logo" />
            </Link>
          </div>
        </div>
        <div className="right-block-footer">
          <div className="links-footer">
            <Link to={"/Home"}>Home</Link>
            <Link to={"/Product"}>Notre Produit</Link>
            <Link to={"/PictaLife"}>Picta life</Link>
            <Link to={"/Team"}>La Team</Link>
            <Link to={"/Tech"}>La Tech</Link>
            <Link to={"/Partnerships"}>Partnerships</Link>
            <Link to={"/RejoinsNous"}>Rejoins-nous</Link>
          </div>
          <div className="container-trad-footer">
            <img
              src="https://pictarine.com/menu/en.png"
              className="american-flag"
              alt="icone du drapeau américain"
            />
            <p>Passer en version anglais</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
