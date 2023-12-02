import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import * as service from "../../services/service.js";
import ShopItem from "./Shop-item/ShopItem.jsx";

const Shop = () => {
  const [products, setProducts] = useState([]);

  window.scrollTo({ top: 450, left: 0, behavior: "smooth" });

  useEffect(() => {
    service.getAll().then((result) => setProducts(Object.values(result)));
  }, []);

  return (
    <>
      <section className="item content">
        <div className="container toparea">
          <div className="underlined-title">
            <div className="editContent">
              <h1 className="text-center latestitems">OUR PRODUCTS</h1>
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
              <ShopItem key={products._id} {...products} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
