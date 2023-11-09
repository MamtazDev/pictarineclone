import "../styles/Tech.css";
import BusinessInfos from "../components/BusinessInfos";
import businessinfos from "../utils/businessinfos.json";
import { useLocation } from "react-router";
import stackinfos from "../utils/stackinfos.json";
import StackCard from "../components/StackCard";
import Description from "../components/Description";
import description from "../utils/description.json";
import problemsolvers from "../utils/problemsolvers.json";
import ProblemSolvers from "../components/ProblemSolvers";
import { Link } from "react-router-dom";

function Tech() {
  const LastDataCard = problemsolvers[6];
  const location = useLocation();
  const isTechPage = location.pathname === "/Tech";
  const tentaculaire = "/* --------------- Un exemple --------------- */";
  const tentaculaireBis = " //et oui, c'était tentaculaire";
  const cardNumberClasses = isTechPage
    ? "container-number container-number-tech"
    : "container-number";
  return (
    <div className="g-container-tech">
      <div className="g-content">
        <div className="first-block-tech">
          <div className="left-block-first-block">
            <h2>
              Bonjour la<br></br>
              <span className="picta-app-tech">Tech team</span>
            </h2>
            <p>
              Chez Pictarine, la Tech n&apos;est pas seulement le coeur de notre
              produit, c&apos;est l&apos;essence même de notre ADN. Une seule
              chose est obligatoire dans la Tech Team : proposer de nouvelles
              choses ! Les idées peuvent (et doivent !) venir de tout le monde,
              que ce soit de nouvelles technos ou des idées produit/business.
            </p>
          </div>
          <img
            src="https://a.storyblok.com/f/189744/2900x2252/e160b820a2/team-tech.jpg"
            alt=""
          />
        </div>
        <div className="second-block-tech">
          <img
            src="	https://a.storyblok.com/f/189744/1540x1960/3c6bb0a52e/prez-cto.jpg/m/1200x0"
            alt=""
          />
          <div className="right-block-second-block-tech">
            <h2 className="h2-tech">Notre vision tech</h2>
            <div className="middle-block-right-block-second-block-tech">
              <div className="block-middle-icons">
                <img
                  className="eyes-cartoon"
                  src="https://img.icons8.com/ios/50/eyes-cartoon.png"
                  alt=""
                />
                <p>Une veille technique régulière</p>
              </div>
              <div className="block-middle-icons">
                <img
                  src="https://img.icons8.com/ios-glyphs/30/so-so.png"
                  alt=""
                />
                <p>Du code de qualité et maintenable</p>
              </div>
              <div className="block-middle-icons">
                <img
                  src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/external-database-web-hosting-flatart-icons-outline-flatarticons-16.png"
                  alt=""
                />
                <p>Une stack simple et moderne</p>
              </div>
              <div className="block-middle-icons">
                <img
                  src="https://img.icons8.com/carbon-copy/100/test-tube.png"
                  alt=""
                />
                <p>Notre devise : Build and Learn !</p>
              </div>
            </div>
            <p>
              <span className="matrix">{tentaculaire}</span>
              <br></br>
              Notre plus grande fierté ? Le projet Calamar !{" "}
              <span className="matrix">{tentaculaireBis}</span>
              <br></br>Il s&apos;agit de la refacto from scratch de toutes nos
              apps. Finie en 2022, on a dit adieu aux vieilles technos et aux
              problèmes de dépendances !
            </p>
          </div>
        </div>
        <div className={cardNumberClasses}>
          {businessinfos.slice(4, 7).map((data, id) => {
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
        <h2 className="h2-tech">Notre Stack</h2>
        <div className="container-stacks">
          {stackinfos.map((data, id) => {
            return (
              <StackCard
                key={id}
                logo={data.logo}
                title={data.title}
                tags={data.tags}
                stacklogo={data.stacklogo}
              />
            );
          })}
        </div>
        <div className="g-container-description-tech">
          <h2 className="sobusiness">La vie de nos devs</h2>
          <div className="g-container-leftRight-block-3-tech">
            <div className="left-block-3">
              {description.slice(3, 5).map((data, id) => {
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
            <div className="right-block-3-tech">
              <h2 className="four-words-tech">Harder, Better, Faster, Coder</h2>
              {description[5] && (
                <Description
                  key={description[5].id}
                  img={description[5].img}
                  title={description[5].title}
                  text={description[5].text}
                />
              )}
              <div className="techno">
                <h2 className="text-techno">
                  Aussi, parfois on s’amuse. Découvre la Picta Life, et plein de
                  belles photos
                </h2>
                <Link to={"/Pictalife"} className="button-picta">
                  La Picta quoi ?
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="g-container-carousel-video-tech">
          <h2 className="sobusiness">En attendant, rencontre l’équipe !</h2>
          <p>ICI LE FUTUR CAROUSEL</p>
        </div>
        <div className="g-container-problemsolvers">
          <h2 className="sobusiness">We are problem solvers!</h2>
          <div className="g-container-cards-problemsolvers">
            <div className="first-card-problemsolvers">
              <h3>Notre lab</h3>
              <p>
                Chez Pictarine on adore le challenge de créer nos propres outils
                qui répondent exactement à nos besoins. L’avantage de créer
                plutôt qu’utiliser une solution existante ? Le challenge et la
                praticité ! Overview de nos outils handmade et parfaitement
                tailored pour nos besoins.
              </p>
            </div>
            {problemsolvers.slice(0, 6).map((data, id) => {
              return (
                <ProblemSolvers
                  key={id}
                  logo={data.logo}
                  title={data.title}
                  text={data.text}
                />
              );
            })}
            <div></div>
            <ProblemSolvers
              logo={LastDataCard.logo}
              title={LastDataCard.title}
              text={LastDataCard.text}
            />
            <div className="container-problemsolvers-p">
              <p>
                Et toi, quelle app rêves-tu de développer ? Le Lab Picta t’est
                ouvert !
              </p>
            </div>
            <div className="last-block-problemsolvers">
              <p className="text-techno">
                Découvre en détail notre App et nos explos Produits
              </p>
              <Link to={"/Product"} className="button-picta">
                Nos produits
              </Link>
            </div>
          </div>
          <div className="block-7-pictalife">
            <h2>
              Ça donne envie ?<br></br>
              <span className="picta-app">Rejoins-nous!</span>
            </h2>
            <Link className="button-picta" to={"/rejoinsnous"}>
              Nos postes ouverts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tech;
