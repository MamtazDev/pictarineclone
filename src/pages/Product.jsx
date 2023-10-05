import "../styles/Product.css";
import stars from "../assets/Img/yellow Star.png";
import ProductCards from "../components/ProductCards";
import productcards from "../utils/productcards.json";
import description from "../utils/description.json";
import Description from "../components/Description";
import { Link } from "react-router-dom";

function Product() {
  return (
    <>
      <div className="g-container-block-1">
        <div className="g-container-block-left">
          <h2 className="h2-block-1">
            Notre produit phare <span className="picta-app">the Picta App</span>
          </h2>
          <p>
            Notre main product ? Une application qui permet de modifier et
            d&apos;imprimer des photos en 3 clics, partout aux Etats-Unis.
            Ensuite, il suffit d&apos;aller les récupérer en magasin en moins
            d’une heure. It’s that easy!
          </p>
          <div className="g-container-comments-stars">
            <div className="stars">
              <p className="best-print-app">Best printing app!</p>
              <div className="g-container-stars">
                <img
                  className="stars-icon"
                  src={stars}
                  alt="image d'étoile jaune"
                />
                <img
                  className="stars-icon"
                  src={stars}
                  alt="image d'étoile jaune"
                />
                <img
                  className="stars-icon"
                  src={stars}
                  alt="image d'étoile jaune"
                />
                <img
                  className="stars-icon"
                  src={stars}
                  alt="image d'étoile jaune"
                />
                <img
                  className="stars-icon"
                  src={stars}
                  alt="image d'étoile jaune"
                />
              </div>
            </div>
            <p className="comment">
              Super quick, no hassle. No sign in required. I’ve use this app for
              a few years now and it’s always been great.
            </p>
            <p>Stephen J.</p>
          </div>
        </div>
        <img
          className="gif-smartphone"
          src="https://a.storyblok.com/f/189744/1013x1241/a81a551aab/demo-phone-web.gif"
          alt="Gif d'un smartphone"
        />
      </div>
      <div className="g-container-block-2">
        <div className="left-block-2">
          <h2 className="title-block-2">
            Mais qu&apos;est ce qu&apos;on fait chez Pictarine en fait ?
          </h2>
          <p>
            Et bien c&apos;est simple, on développe une application (iOS,
            Android et Web) pour imprimer des photos. Oui mais... :
          </p>
        </div>
        <div className="g-container-block-right">
          {productcards.map((data, id) => {
            return (
              <ProductCards
                key={id}
                img={data.img}
                title={data.title}
                text={data.text}
              />
            );
          })}
        </div>
      </div>
      <div className="g-container-text-btn-website">
        <div className="text-btn-website">
          <h2>Viens voir à quoi ça ressemble !</h2>
          <button className="button-picta">Notre site web</button>
        </div>
      </div>
      <div className="g-container-block-3">
        <h2 className="h2-block-3">
          Recherche & Développement
          <span className="span-block-3">nos explorations</span>
        </h2>
        <div className="g-container-leftRight-block-3">
          <div className="left-block-3">
            {description.slice(0, 2).map((data, id) => {
              return (
                <Description
                  key={id}
                  img={data.img}
                  title={data.title}
                  text={data.text}
                />
              );
            })}
          </div>
          <div className="right-block-3">
            <h2>Parce qu&apos;on ne cesse d&apos;innover !</h2>
            {description[2] && (
              <Description
                key={description[2].id}
                img={description[2].img}
                title={description[2].title}
                text={description[2].text}
              />
            )}
            <div className="techno">
              <h2 className="text-techno">
                On a aussi créé pleins d&apos;outils pour faciliter la vie de
                nos devs !
              </h2>
              <Link to={"/Tech"} className="button-picta-dark">
                Par ici les techos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
