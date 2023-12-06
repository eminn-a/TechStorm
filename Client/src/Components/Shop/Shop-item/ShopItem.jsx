import { Link } from "react-router-dom";

export default function ShopItem({ _id, cpu, gpu, ram, brand, imgUrl, price }) {
  const onBuyClick = () => {
    console.log(`Buyned item ${brand}${_id}`);
  };

  return (
    <div className="col-md-4">
      <div className="productbox">
        <div className="fadeshop">
          <span className="maxproduct">
            <img src={imgUrl} alt="" />
          </span>
        </div>
        <div className="product-details">
          <Link to={`/products/${_id}`}>
            <h1>{brand}</h1>
          </Link>
          <div>
            <h6>{cpu}</h6>
            <h6>{gpu}</h6>
            <h6>RAM: {ram}</h6>
            <h4>Price: ${price}</h4>
          </div>
          <Link to={`/products/${_id}`}>
            <button className="detailsButton">Details</button>
          </Link>
          <button onClick={onBuyClick} className="detailsButton">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
