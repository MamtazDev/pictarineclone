import "../styles/Home.css";
import { Link } from "react-router-dom";
import img6 from "../assets/Img/img6.webp";
import img2 from "../assets/Img/img2.webp";
import img3 from "../assets/Img/img3.webp";
import img4 from "../assets/Img/img4.webp";
import img1 from "../assets/Img/img1.png";
import img5 from "../assets/Img/img5.webp";
import img7 from "../assets/Img/img7.webp";
import img12 from "../assets/Img/img12.jpg";
import img11 from "../assets/Img/img11.jpg";
import HomeCards from "../components/HomeCards";
import homecards from "../utils/homecards.json";
import businessinfos from "../utils/businessinfos.json";
import BusinessInfos from "../components/BusinessInfos";

function Home() {
  return (
    <>
      <div className="container-xplore">
        <div className="xplore">
          <h2 className="xplore-title">
            Explorateurs
            <span className="creatifs-title">créatifs</span>
          </h2>
          <p>
            Une team exceptionnelle, une pincée d&apos;international, on rajoute
            une bonne louche de débrouillardise... et on obtient une équipe
            prête à déplacer des montagnes ! Bienvenue chez Pictarine !
          </p>
        </div>
        <img
          className="pictarinesGroupe"
          src="https://a.storyblok.com/f/189744/3177x2116/854381f167/team-pictarine.jpg"
          alt="Photo de groupe de la société Pictarine"
        />
      </div>
      <div className="g-pictarinesvision">
        <div className="g-container-presentation">
          <div className="g-presentation-woman">
            <img
              className="presentation-woman"
              src={img6}
              alt="Photo d'une présentation orale de l'entreprise Pictarine"
            />
          </div>
          <div className="g-presentation-party">
            <img
              className="party-group"
              src={img4}
              alt="Photo d'une présentation orale de l'entreprise Pictarine"
            />

            <img
              className="presentation-guy"
              src={img2}
              alt="Photo d'une présentation orale de l'entreprise Pictarine"
            />
          </div>
        </div>
        <div className="text-pictarinesvision">
          <p className="h2-text-picarinesvision">
            La vision de Pictarine, avec des jumelles c&apos;est...
          </p>
          <p>
            ...une team bourrée de talents, qui est prête à relever tous les
            challenges ! Mais c&apos;est avant tout une équipe qui est toujours
            là les uns pour les autres et qui se sert les coudes. Proposer,
            tester, rater, ajuster... et, bien sûr, recommencer ! Car on a le
            droit à l&apos;erreur chez Pictarine, et surtout on est jamais
            seul.e pour se relever.
          </p>
          <Link to={"/pictalife"} className="button-picta">
            Découvre la Picta Life
          </Link>
        </div>
      </div>
      <div className="g-container-business">
        <div className="left-block-business">
          <h2 className="sobusiness">Et le business alors ?</h2>
          <p>
            Chez nous, un seul mot d&apos;ordre : créer et faire évoluer notre
            application mobile et web pour que nos utilisateurs puissent
            imprimer leurs meilleurs souvenirs ! Et pour cela, on ne cesse
            d’innover et d’explorer des nouvelles idées de produits.
          </p>
          <div className="container-number">
            {businessinfos.map((data, id) => {
              return (
                <BusinessInfos
                  key={id}
                  number={data.number}
                  title={data.title}
                  text={data.text}
                />
              );
            })}
          </div>
        </div>
        <img src={img1} className="img1" alt="Photo d'un smartphone" />
      </div>
      <div className="g-discover-app">
        <div className="discover-app">
          <h2>Découvre nos apps et nos projets d&apos;exploration</h2>
          <Link to={"/product"} className="button-picta">
            Let&apos;s Go !
          </Link>
        </div>
      </div>
      <div className="style_background_waves">
        <div className="styles_waveTop__6_Q3N"></div>
        <div className="g-container-meetup">
          <div className="left-block-meetup">
            <h2 className="h2-meetup">Meetup at Picta</h2>
            <p>
              On aime recevoir dans notre espace de meetup aménagé avec un amphi
              et un super grand écran pour les supers grandes présentations.
            </p>
            <img className="img11" src={img11} alt="photo de groupe" />
            <h2 className="design-systems">
              Il était une fois deux Design Systems
            </h2>
            <p className="date-meetup">Juin 2022 chez Pictarine</p>
            <p>
              C’est l’histoire de la conception de deux design systems. D’une
              part celle de Talan, et d’autre part celle de Pictarine, qui a pu
              commencer from scratch un design system lors de la refonte
              technique et design de leur plus grosse appli mobile.
            </p>
          </div>
          <div>
            <div className="right-block-meetup">
              <img className="img12" src={img12} alt="photo de groupe" />
              <h2 className="swift-meetup">Swift Meetup Toulouse #10</h2>
              <p className="date-meetup">Juin 2022 chez Pictarine</p>
              <p>
                Après 2 ans d’absence, on a hâte de vous retrouver lors d’un
                Swift Meetup Toulouse. On vous annonce les talks très bientôt et
                on pourra debriefer ensemble la semaine de WWDC. À très vite !
              </p>
            </div>
            <div className="form">
              <h2 className="stay-informed">
                Reste informé des prochains events par mail
              </h2>
              <input type="email" placeholder="Adresse email" id="email" />
              <button className="button-picta">S&apos;inscrire</button>
            </div>
          </div>
        </div>
        <div className="g-pictarinesvision">
          <div className="g-container-presentation">
            <div className="g-presentation-woman">
              <img
                className="presentation-woman"
                src={img3}
                alt="Photo d'une présentation orale de l'entreprise Pictarine"
              />
            </div>
            <div className="g-presentation-party">
              <img
                className="party-group"
                src={img5}
                alt="Photo d'une présentation orale de l'entreprise Pictarine"
              />

              <img
                className="presentation-guy"
                src={img7}
                alt="Photo d'une présentation orale de l'entreprise Pictarine"
              />
            </div>
          </div>
          <div className="text-pictarinesvision">
            <p className="h2-text-picarinesvision">
              Engagés pour les causes qui nous tiennent à coeur
            </p>
            <p>
              Une course est organisée pour la recherche contre le cancer ?
              C&apos;est parti, on lace nos baskets ! On trouve ça important de
              sensibiliser au dépistage du Cancer du Sein ? Tout le monde se
              mobilise, et pour un habit rose porté on reverse 5 euros de don à
              la Ligue contre le Cancer du Sein. Besoin de parrains pour le
              French Tech Tremplin ? On est ravis d&apos;aider des jeunes issus
              de quartiers difficiles, boursiers ou en situation de handicap, à
              accéder à l&apos;entreprenariat.
            </p>
          </div>
        </div>
        <div className="g-findus">
          <h2 className="findus">On parle de nous</h2>
          <div className="g-container-cards">
            {homecards.map((data, id) => {
              return (
                <HomeCards
                  key={id}
                  img={data.img}
                  logo={data.logo}
                  text={data.text}
                  link={data.link}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
