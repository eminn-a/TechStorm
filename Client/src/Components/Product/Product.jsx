import AlsoLike from "./AlsoLike";
import SingleItem from "./SingleItem";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as service from "../../services/service.js";

const Product = () => {
  const [product, setPorduct] = useState();
  const { productId } = useParams();
  console.log(productId);

  useEffect(() => {
    service.getById(productId).then((result) => setPorduct(result));
  }, []);
  console.log(product);

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
