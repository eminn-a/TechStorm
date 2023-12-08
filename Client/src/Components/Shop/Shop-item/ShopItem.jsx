import { Link, useNavigate } from "react-router-dom";
import Path from "../../../paths";
import { useContext } from "react";
import AuthContext from "../../../contexts/authContext";

import * as buyService from "../../../services/productBuyService.js";

export default function ShopItem({
  _id,
  cpu,
  gpu,
  ram,
  brand,
  imgUrl,
  price,
  succesHandler,
}) {
  const { userId } = useContext(AuthContext);
  const navigate = useNavigate();

  const data = {
    cpu,
    gpu,
    ram,
    brand,
    imgUrl,
    price,
    productId: _id,
  };

  const onBuyClick = async () => {
    if (!userId) {
      navigate(Path.Login);
      return;
    }
    try {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      succesHandler(`Succesfuly purchased ${brand}`);
      await buyService.productBuy(data);
    } catch (error) {
      console.log(error.message);
    }
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
