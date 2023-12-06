import AlsoLike from "./AlsoLike/AlsoLike.jsx";

import "./Style.css";

import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext.jsx";
import Path from "../../paths.js";

import * as productService from "../../services/productService.js";

const Product = () => {
  const navigate = useNavigate();
  const [product, setPorduct] = useState({});
  const { productId } = useParams();
  const { userId } = useContext(AuthContext);

  const isOwner = userId === product._ownerId;

  useEffect(() => {
    productService.getById(productId).then((result) => setPorduct(result));
  }, []);

  useEffect(() => {
    //  scroll to top on page load
    window.scrollTo({ top: 450, left: 0, behavior: "smooth" });
  }, []);

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
    const check = confirm(`You want to delete this item: ${product.brand}`);

    if (check) {
      productService.deleteById(product._id);
      navigate(Path.Shop);
    }
  };

  return (
    <>
      <section className="item content">
        <div className="container toparea">
          <div className="underlined-title">
            <div className="wow-hr type_short">
              <span className="wow-hr-h">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
            </div>
          </div>

          <div className="done">
            <div className="alert alert-success">
              <button type="button" className="close" data-dismiss="alert">
                ×
              </button>
              You purchased successfully. Thank you!
            </div>
          </div>

          <div className="row">
            <div className="editContent">
              <h1 className="text-center latestitems">text</h1>
            </div>
            <div className="col-md-8">
              <div className="productbox">
                <img src={product.imgUrl} className="center" alt="" />
                <div className="clearfix"></div>
                <br />
                <div className="product-details text-left">
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <button onClick={onBuyClick} className="btn btn-buynow">
                Purchase - {product.price}$
              </button>

              {isOwner && (
                <>
                  <Link to={`/products/${product._id}/edit`}>
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
                    <b className="propertyname">Brand:</b> {product.brand}
                  </li>
                  <li>
                    <b className="propertyname">CPU:</b> {product.cpu}
                  </li>
                  <li>
                    <b className="propertyname">GPU:</b> {product.gpu}
                  </li>
                  <li>
                    <b className="propertyname">RAM:</b> {product.ram}
                  </li>
                  <li>
                    <b className="propertyname">Storage:</b> {product.storage}
                  </li>
                  <li>
                    <b className="propertyname">Display:</b> {product.display}
                  </li>
                  <li>
                    <b className="propertyname">OS:</b> {product.os}
                  </li>
                  <li>
                    <b className="propertyname">Warranty:</b> 24 months
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <AlsoLike />
        </div>
      </section>
    </>
  );
};

export default Product;
