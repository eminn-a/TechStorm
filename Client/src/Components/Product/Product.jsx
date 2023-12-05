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
      <SingleItem {...product} />
      <AlsoLike />
    </>
  );
};

export default Product;
