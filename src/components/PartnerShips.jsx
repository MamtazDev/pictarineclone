import "../styles/PartnerShips.css";
function PartnerShips({ logo, title, text }) {
  return (
    <div className="g-container-partnerships-card">
      <div className="container-partnerships-card">
        <img src={logo} alt="" />
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default PartnerShips;
