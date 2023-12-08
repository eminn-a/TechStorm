import { Link, useNavigate } from "react-router-dom";

const SingleLatestItem = ({ brand, price, imgUrl, _id }) => {
  return (
    <div className="col-md-4">
      <div className="productbox">
        <div className="fadeshop">
          <span className="maxproduct">
            <img src={imgUrl} alt={brand} />
          </span>
        </div>
        <div className="product-details">
          <Link to={`/products/${_id}`}>
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

export default SingleLatestItem;
