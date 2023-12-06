import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import "./SingleItem.css";
import AuthContext from "../../../contexts/authContext";

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
  useEffect(() => {
    //  scroll to top on page load
    window.scrollTo({ top: 450, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <section className="item content">
        <div className="container toparea">
          <div className="underlined-title">
            <div className="editContent">
              <h1 className="text-center latestitems">{brand}</h1>
            </div>
            <div className="wow-hr type_short">
              <span className="wow-hr-h">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
            </div>
          </div>
          <div className="row">
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
              <button
                onClick={() => console.log("buyed item!")}
                className="btn btn-buynow"
              >
                Purchase! - {price}$
              </button>
              {isOwner && (
                <>
                  <Link to={`/products/${_id}/edit`}>
                    <button className="edittBtn">edit</button>
                  </Link>
                  <Link>
                    <button className="dellBtn">delete</button>
                  </Link>
                </>
              )}

              <div className="properties-box">
                <button className="button-47">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleItem;
