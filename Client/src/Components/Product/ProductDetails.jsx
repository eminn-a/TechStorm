import AlsoLike from "./AlsoLike/AlsoLike.jsx";
import SingleItem from "./SingleItem/SingleItem.jsx";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as productService from "../../services/productService.js";

const Product = () => {
  const [product, setPorduct] = useState();
  const { productId } = useParams();

  useEffect(() => {
    productService.getById(productId).then((result) => setPorduct(result));
  }, []);
  useEffect(() => {
    //  scroll to top on page load
    window.scrollTo({ top: 450, left: 0, behavior: "smooth" });
  }, []);
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
            <SingleItem {...product} />
          </div>
          <AlsoLike />
        </div>
      </section>
    </>
  );
};

export default Product;
