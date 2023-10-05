import "../styles/Home.css";

function HomeCards({ img, logo, text }) {
  return (
    <div className="card-aboutus">
      <img className="pic-card" src={img} alt="Photo du CEO de Pictarine" />
      <img className="logo-card" src={logo} alt="logo d'entreprises" />
      <p>{text}</p>
    </div>
  );
}

export default HomeCards;
