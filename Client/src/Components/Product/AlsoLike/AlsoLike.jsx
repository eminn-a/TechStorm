import { Link } from "react-router-dom";
import AlsoLikeSingleItem from "./AlsoLikeSingleItem";
import { useEffect, useState } from "react";
import * as productService from "../../../services/productService.js";

const AlsoLike = () => {
  const [latestProduct, setlatestProduct] = useState([]);

  useEffect(() => {
    productService.getLatest3().then((result) => setlatestProduct(result));
  }, []);
  console.log(latestProduct);
  return (
    <section className="item content">
      <div className="container">
        <div className="underlined-title">
          <div className="editContent">
            <h1 className="text-center latestitems">
              CHECK OUT OUR LATES lAPTOPS
            </h1>
          </div>
          <div className="wow-hr type_short">
            <span className="wow-hr-h">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </span>
          </div>
        </div>

        {latestProduct.map((x) => (
          <AlsoLikeSingleItem key={x._id} {...x} />
        ))}
      </div>
    </section>
  );
};

export default AlsoLike;
