import { Link } from "react-router-dom";

export default function ShopItem({ cpu, gpu, brand, storage, imgUrl }) {
  return (
    <div className="col-md-4">
      <div className="productbox">
        <div className="fadeshop">
          <span className="maxproduct">
            <img src={imgUrl} alt="" />
          </span>
        </div>
        <div className="product-details">
          <Link to="/product">
            <h1>{brand}</h1>
          </Link>
          <div>
            <h6>{gpu}</h6>
            <h6>{cpu}</h6>
            <h6>{storage}</h6>
          </div>
          <Link to="/product/">
            <button className="detailsButton">Details</button>
          </Link>
          <button className="detailsButton">Buy</button>
        </div>
      </div>
    </div>
  );
}
