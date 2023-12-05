import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import * as productService from "../../services/productService.js";
import ShopItem from "./Shop-item/ShopItem.jsx";

const Shop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  scrollToTop();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    productService
      .getAll()
      .then((result) => setProducts(Object.values(result)));
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
