import "../styles/ProductCards.css";

function ProductCards({ img, title, text }) {
  return (
    <div className="product-card">
      <h2>
        <span>
          <img src={img} alt="" />
        </span>
        {title}
      </h2>
      <p>{text}</p>
    </div>
  );
}

export default ProductCards;
