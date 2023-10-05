import "../styles/Home.css";

function BusinessInfos({ number, title, text }) {
  return (
    <div className="card-number-business">
      <p className="number-business">{number}</p>
      <div className="sentences-on-number">
        <p className="title-business">{title}</p>
        <p className="sentence-business">{text}</p>
      </div>
    </div>
  );
}

export default BusinessInfos;
