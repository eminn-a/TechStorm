import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import * as productService from "../../services/productService.js";
import ShopItem from "./Shop-item/ShopItem.jsx";

const Shop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  const [succesAlert, setSuccesAlert] = useState("");
  const [errAlert, setErrAlert] = useState("");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    productService
      .getAll()
      .then((result) => setProducts(Object.values(result)))
      .catch((err) => alert(err.message));
  }, []);

  const succesHandler = (message) => {
    setSuccesAlert(message);
    setTimeout(() => {
      setSuccesAlert("");
    }, 3000);
  };

  return (
    <>
      <section className="item content">
        <div className="container toparea">
          <div className="underlined-title">
            <div className="editContent">
              <h1 className="text-center latestitems">OUR PRODUCTS</h1>
            </div>
            <div className="done">
              {succesAlert && (
                <div className="alert alert-success">
                  <button type="button" className="close" data-dismiss="alert">
                    ×
                  </button>
                  {/* You purchased successfully. Thank you! */}
                  {succesAlert}
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
            <div className="wow-hr type_short">
              <span className="wow-hr-h">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
            </div>
          </div>
          <div className="row">
            {products.map((products) => (
              <ShopItem
                key={products._id}
                {...products}
                succesHandler={succesHandler}
              />
            ))}

            {products.length === 0 && (
              <>
                <h1 className="text-center">There is no products</h1>
                <br />
                <br />
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
