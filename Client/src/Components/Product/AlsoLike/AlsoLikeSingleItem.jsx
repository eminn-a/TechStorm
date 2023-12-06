import { Link, useNavigate } from "react-router-dom";

const AlsoLikeSingleItem = ({ brand, price, imgUrl, _id }) => {
  const navigate = useNavigate();
  return (
    <div className="col-md-4">
      <div className="productbox">
        <div className="fadeshop">
          <span className="maxproduct">
            <img src={imgUrl} alt={brand} />
          </span>
        </div>
        <div className="product-details">
          <Link to={"/shop"}>
            <h1>{brand}</h1>
          </Link>
          <span className="price">
            <span className="edd_price">${price}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AlsoLikeSingleItem;
