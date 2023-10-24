import "../styles/RejoinsNous.css";
import SliderRecrutment from "../components/SliderRecrutment";
import sliderrecrutment from "../utils/sliderrecrutment.json";
import { Link } from "react-router-dom";
import SimpleSlider from "../components/CarouselMeetTeam";
function RejoinsNous() {
  return (
    <div className="g-container-padding">
      <div className="g-first-block-partnerships">
        <div className="first-block-partnerships">
          <h2 className="h2-block-1">
            We need you<br></br>
            <span className="picta-app-italic">Rejoins-Nous</span>
          </h2>
          <p>
            On n’a pas fini de grandir ! On recherche des profils bourrés de
            talent et d’envie, bilingues avec une forte appétence pour
            l’étranger. Des “problem solvers” ingénieux, à l’esprit d’équipe qui
            ne se reposent jamais sur leurs acquis… bref, nos prochains
            coéquipiers n’auront pas peur de se retrousser les manches !
          </p>
        </div>
        <img
          src="https://a.storyblok.com/f/189744/2488x2028/4583732b06/groupe-jeep.jpg"
          alt=""
        />
      </div>
      <h2 className="sobusiness">Nos postes ouverts</h2>
      <div className="container-btn-category">
        <div className="container-btn-category-spacebetween">
          <div className="btn-category-rejoinsnous btn-category-active">
            <button>All</button>
            <button>Engineering</button>
            <button>Finance</button>
            <button>People</button>
            <button>Produit</button>
          </div>
          <div className="img-btn-category">
            <img
              src="https://www.svgrepo.com/show/437258/square-grid-3x2.svg"
              alt=""
            />
            <img
              src="https://www.svgrepo.com/show/437046/list-bullet.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container-cards-rejoinsnous">
        <p>ICI LE FUTUR MAPPING DES CARDS</p>
      </div>
      <div className="container-dreamworks">
        <div className="left-block-dreamworks">
          <h2 className="last-seminar">
            Ton job de rêve n’est pas dans la liste ?
          </h2>
          <p>
            N’hésite pas à nous envoyer ta candidature spontanée, on prendra
            toujours le temps de l’étudier en détail !
          </p>
        </div>
        <div className="form">
          <form>
            <div className="small-input-form">
              <input
                type="text"
                placeholder=" "
                name="firstName"
                className=""
                id="firstName"
              ></input>
              <label htmlFor="firstName">Prénom</label>
            </div>
            <div className="small-input-form">
              <input
                type="text"
                placeholder=" "
                name="firstName"
                className=""
                id="firstName"
              ></input>
              <label htmlFor="firstName">Nom</label>
            </div>
            <div className="small-input-form">
              <input
                type="text"
                placeholder=" "
                name="firstName"
                className=""
                id="firstName"
              ></input>
              <label htmlFor="firstName">Email</label>
            </div>
            <div className="small-input-form">
              <input
                type="text"
                placeholder=" "
                name="firstName"
                className=""
                id="firstName"
              ></input>
              <label htmlFor="firstName">Téléphone</label>
            </div>
            <div className="text">
              <div className="small-input-form">
                <input
                  type="textarea"
                  placeholder=" "
                  name="text"
                  className=""
                  id="text"
                ></input>
                <label htmlFor="textarea">
                  Dis-nous en plus sur toi et ce qui t&apos;anime !
                </label>
              </div>
            </div>
          </form>
          <div className="container-upload">
            <div className="left-upload">
              <p>
                Dépose un fichier, surprend-nous avec une vidéo, une
                illustration... Bref, montre-nous qui tu es !
              </p>
              <p className="format-upload">Mp3, mp4, jpg, pdf, gif</p>
            </div>
            <button className="button-picta-upload">Upload</button>
          </div>
          <div className="button-send-form">
            <button className="button-picta">Envoyer !</button>
          </div>
        </div>
      </div>
      <div className="g-container-slides-rejoinsnous">
        <div className="left-block-slides-rejoinsnous">
          <h2 className="title-block-2">Le process de recrutement</h2>
          <p>
            On veut mieux te connaitre ! Et pour cela, rien de tel qu&apos;un
            process de recrutement transparent. Ce sera l&apos;occasion pour toi
            de découvrir un peu plus Pictarine et de pouvoir mieux te projeter
            dans ta future équipe.
          </p>
        </div>
        <div className="container-slides-recrutment">
          <div className="process-recrutment-slides">
            {sliderrecrutment.map((card, id) => {
              const dataDayArray = [1, 7, 14, 18, 19];
              const dataDayValue = dataDayArray[id];
              return (
                <SliderRecrutment
                  key={id}
                  img={card.img}
                  number={card.number}
                  title={card.title}
                  time={card.time}
                  text={card.text}
                  dataDay={dataDayValue}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="g-discover-rejoinsnous">
        <div className="discover-rejoinsnous">
          <h2>
            Découvre ce qui t&apos;attend au quotidien chez Pictarine par ici !
          </h2>
          <Link to={"/Pictalife"} className="button-picta">
            La Picta Life
          </Link>
        </div>
      </div>
      <div className="g-carousel-meetteam">
        <h2 className="title-block-2">
          En attendant, rencontre l&apos;équipe !
        </h2>
      </div>
      <SimpleSlider />
    </div>
  );
}

export default RejoinsNous;
