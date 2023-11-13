import "../styles/Team.css";
import { Link } from "react-router-dom";
function Team() {
  return (
    <div className="max-width">
      <div className="first-block-team">
        <img
          className="img-picta-palma"
          src="https://a.storyblok.com/f/189744/2800x1078/10c9740197/team-complete-majorque.jpg"
          alt=""
        />
        <p className="xplore-title">
          La seule, la vraie,
          <span className="picta-app-italic">la Picta Team</span>
        </p>
      </div>
      <div className="btn-category">
        <button className="btn-category-active">Toute l&apos;équipe</button>
        <button>Product</button>
        <button>People</button>
        <button>Marketing</button>
        <button>Finance</button>
        <button>Engeneering</button>
        <button>Partnerships</button>
      </div>
      <div className="peoples-card">
        <p>ICI LE MAPPING DES CARDS</p>
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
  );
}

export default Team;
