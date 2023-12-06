import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Style.css";

import AuthContext from "../../../contexts/authContext";
import Path from "../../../paths.js";
import * as productService from "../../../services/productService.js";

const SingleItem = ({
  brand,
  cpu,
  display,
  gpu,
  os,
  price,
  ram,
  storage,
  imgUrl,
  description,
  _ownerId,
  _id,
}) => {
  const { userId } = useContext(AuthContext);
  const isOwner = userId === _ownerId;
  const navigate = useNavigate();

  const onBuyClick = () => {
    if (!userId) {
      navigate(Path.Login);
      return;
    }
    return console.log("buyed item");
  };

  const onAddStarClick = () => {
    if (!userId) {
      navigate("/login");
      return;
    }
    return console.log("added star");
  };

  const onDeleteClick = () => {
    const check = confirm(`You want to delete this item: ${brand}`);

    if (check) {
      productService.deleteById(_id);
      navigate(Path.Shop);
    }
  };

  useEffect(() => {
    //  scroll to top on page load
    window.scrollTo({ top: 450, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="editContent">
        <h1 className="text-center latestitems">{brand}</h1>
      </div>
      <div className="col-md-8">
        <div className="productbox">
          <img src={imgUrl} className="center" alt="" />
          <div className="clearfix"></div>
          <br />
          <div className="product-details text-left">
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <button onClick={onBuyClick} className="btn btn-buynow">
          Purchase - {price}$
        </button>

        {isOwner && (
          <>
            <Link to={`/products/${_id}/edit`}>
              <button className="edittBtn">edit</button>
            </Link>

            <button onClick={onDeleteClick} className="dellBtn">
              delete
            </button>
          </>
        )}

        <div className="properties-box">
          <button onClick={onAddStarClick} className="button-47">
            <span className="fa fa-star-o fa-2x"> Add star</span>
          </button>

          <br />
          <p>Total stars:0</p>
          <ul className="unstyle">
            <li>
              <b className="propertyname">Brand:</b> {brand}
            </li>
            <li>
              <b className="propertyname">CPU:</b> {cpu}
            </li>
            <li>
              <b className="propertyname">GPU:</b> {gpu}
            </li>
            <li>
              <b className="propertyname">RAM:</b> {ram}
            </li>
            <li>
              <b className="propertyname">Storage:</b> {storage}
            </li>
            <li>
              <b className="propertyname">Display:</b> {display}
            </li>
            <li>
              <b className="propertyname">OS:</b> {os}
            </li>
            <li>
              <b className="propertyname">Warranty:</b> 24 months
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SingleItem;
