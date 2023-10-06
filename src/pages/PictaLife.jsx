import "../styles/PictaLife.css";
import { Link } from "react-router-dom";
import insta from "../assets/Img/instaLogo.svg";
import linkedin from "../assets/Img/Linkedin icon.svg";
import wttj from "../assets/Img/welcometothejungle logo.svg";

function PictaLife() {
  return (
    <>
      <div className="container-block-1-pictalife">
        <h2>
          C&apos;est ça, la<br></br>
          <span className="picta-app">Picta Life</span>
        </h2>
        <img
          src="https://a.storyblok.com/f/189744/2900x2252/849d1be231/detente-rooftop.jpg"
          alt="Photo de groupe de la société Pictarine"
        />
      </div>
      <div className="container-block-2-pictalife">
        <div className="left-block-2-pictalife">
          <h2 className="b-memories">Nos plus beaux souvenirs</h2>
          <iframe
            width="100%"
            height="550"
            src="https://www.youtube.com/embed/NOILceT9-5c"
            allowfullscreen
          ></iframe>
          <h2 className="last-seminar">Notre dernier séminaire</h2>
          <p>
            Que Calor ! C&apos;est sous le soleil de Palma de Majorque que nous
            sommes partis en séminaire en 2022. Montgolfière, catamaran,
            buggy... mais on en a aussi profité pour réfléchir à nos valeurs et
            à ce qui fait notre ADN ! Bref, on est rentrés avec des étoiles
            pleins les yeux, et des souvenirs pleins les coeurs.
          </p>
        </div>
        <img
          className="right-img-block-2-pictalife"
          src="	https://a.storyblok.com/f/189744/1744x1340/9bbdd8aa3d/jeep-seminaire.jpg/m/1200x0"
          alt="Photo de groupe"
        />
      </div>
      <div className="carousel"></div>
      <div className="g-container-ls-block-2">
        <p>+ sur nos réseaux</p>
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
      <div className="block-3-pictalife">
        <h2 className="b-memories">Les valeurs Picta</h2>
        <p>
          On a profité de notre séminaire 2022 à Palma de Majorque, pour définir
          tous ensemble nos valeurs ! Et oui, pour que ça ne soit pas que des
          mots et que ça nous ressemble vraiment.
        </p>
      </div>
      <div className="block-4-pictalife">
        <img
          className="post-it-fire"
          src="https://a.storyblok.com/f/189744/999x1068/5a536fe3e7/ignite-anim.gif/m/1200x0"
          alt=""
        />
        <div className="middle-block-4-pictalife">
          <h2 className="last-seminar">Ignite your spark</h2>
          <p>
            On sait reconnaitre chacun pour sa singularité et on réalise un
            accompagnement personnalisé pour que tout le monde s&pos;épanouisse
            dans son travail. Ce qui permet d&apos;évoluer facilement chez nous
            ! Le record ? 1,2,3,4...5 métiers différents chez Pictarine ! Qui
            dit mieux ?
          </p>
        </div>
        <img
          className="post-it-teams-gif"
          src="https://a.storyblok.com/f/189744/800x836/b0a6e1d3a1/evolution-team.gif/m/1200x0"
          alt=""
        />
      </div>
      <div className="block-5-pictalife">
        <img
          src="https://a.storyblok.com/f/189744/934x1137/0cb0dca4ac/exercice-groupe-seminaire.png/m/1200x0"
          alt=""
        />
        <img
          src="	https://a.storyblok.com/f/189744/934x1137/4879eee38d/teambuilding-escapegame.png/m/1200x0"
          alt=""
        />
        <img
          src="https://a.storyblok.com/f/189744/930x987/04f9b61530/teaming-up-anim.gif/m/1200x0"
          alt=""
        />
        <div className="teaming-up">
          <h2 className="last-seminar">Teaming up for the adventure</h2>
          <p>
            Chez Pictarine, on prône l&apos;entraide et l&apos;esprit
            d&apos;équipe, mais aussi le partage et la transmission. Et
            c&apos;est d&apos;autant plus utile quand on se challenge
            continuellement pour explorer en dehors de notre zone de confort.
            Seul on va plus vite, mais ensemble on va plus loin !
          </p>
        </div>
      </div>
    </>
  );
}

export default PictaLife;
