import IsotopeFilter from "../components/isotopeFilter/IsotopeFilter";
import "../styles/Team.css";
import { Link } from "react-router-dom";
function Team() {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  return (
    <>
      <div className="la_team">
        <div className="la_team_cover section-padding pb-0">
          <div className="container">
            <div className="la_team_img">
              <img
                className="img-picta-palma img-fluid mb-5"
                src="https://a.storyblok.com/f/189744/2800x1078/10c9740197/team-complete-majorque.jpg"
                alt=""
              />
              <p className="xplore-title">
                La seule, la vraie,
                <span className="picta-app-italic">la Picta Team</span>
              </p>
            </div>
          </div>
        </div>

        <div className="masonaary-items">
          <div className="container">
            <IsotopeFilter items={items} />
      
          </div>
        </div>


        <div className="block-7-pictalife text-center">
          <h2 className="mb-5 fs_60">
            Ça donne envie ?<br></br>
            <span className="picta-app">Rejoins-nous!</span>
          </h2>
          <Link className="button-picta" to={"/rejoinsnous"}>
            Nos postes ouverts
          </Link>
        </div>

      </div>
    </>
  );
}

export default Team;
