import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import AlsoLike from "./AlsoLike/AlsoLike.jsx";
import AuthContext from "../../contexts/authContext.jsx";
import Path from "../../paths.js";
import "./Style.css";
import * as productService from "../../services/productService.js";
import * as likeService from "../../services/productLikesService.js";
import * as buyService from "../../services/productBuyService.js";

const Product = () => {
  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);
  const { productId } = useParams();
  const [product, setPorduct] = useState({});
  const [likes, setLikes] = useState(0);
  const [alrdyLiked, setAlrdyLiked] = useState("");
  const [succesAlert, setSuccesAlert] = useState("");
  const [errAlert, setErrAlert] = useState("");

  const isOwner = userId === product._ownerId;

  useEffect(() => {
    productService
      .getById(productId)
      .then((result) => setPorduct(result))
      .catch(() => navigate("*"));
    likeService
      .getLikes(productId)
      .then((likes) => setLikes(likes))
      .catch((err) => {
        setErrAlert(err.message);
        setTimeout(() => {
          setSuccesAlert("");
        }, "5000");
      });
    likeService
      .getOwnLike(productId, userId)
      .then((liked) => setAlrdyLiked(liked))
      .catch((err) => alert(err.message));
    window.scrollTo({ top: 450, left: 0, behavior: "smooth" });
  }, [productId]);

  const onBuyClick = async () => {
    window.scrollTo({ top: 450, left: 0, behavior: "smooth" });

    if (!userId) {
      navigate(Path.Login);
      return;
    }
    try {
      product["productId"] = productId;
      await buyService.productBuy(product);
      setSuccesAlert("You purchased successfully. Thank you!");
      setTimeout(() => {
        setSuccesAlert("");
      }, "5000");
    } catch (error) {
      setErrAlert(error.message);
    }
  };

  const onAddStarClick = async () => {
    window.scrollTo({ top: 450, left: 0, behavior: "smooth" });

    if (!userId) {
      navigate("/login");
      return;
    }
    if (alrdyLiked) {
      setErrAlert("You already added star!");
      setTimeout(() => {
        setErrAlert("");
      }, "5000");
      return;
    }
    try {
      await likeService.productLike(productId);
      setLikes(likes + 1);
      setAlrdyLiked(1);
    } catch (error) {
      setErrAlert(error.message);
      setTimeout(() => {
        setErrAlert("");
      }, "5000");
    }
  };

  const onDeleteClick = () => {
    const check = confirm(`You want to delete this item: ${product.brand}`);
    if (check) {
      try {
        productService.deleteById(product._id);
        navigate(Path.Shop);
      } catch (error) {
        alert(err.message);
      }
    }
  };

  return (
    <>
      <section className="item content">
        <div className="container toparea">
          <div className="underlined-title">
            <div className="editContent">
              <h1 className="text-center latestitems">{product.brand}</h1>
            </div>
            <div className="wow-hr type_short">
              <span className="wow-hr-h">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
            </div>
          </div>
          <div className="done">
            {succesAlert && (
              <div className="alert alert-success">
                <button type="button" className="close" data-dismiss="alert">
                  ×
                </button>
                You purchased successfully. Thank you!
              </div>
            )}
            {errAlert && (
              <div className="alert alert-danger">
                <button type="button" className="close" data-dismiss="alert">
                  ×
                </button>
                {errAlert}
              </div>
            )}
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="productbox">
                <img src={product.imgUrl} alt="" />
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
                <p>Total stars:{likes}</p>
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
