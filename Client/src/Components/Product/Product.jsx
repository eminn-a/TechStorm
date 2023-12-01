import AlsoLike from "./AlsoLike";
import SingleItem from "./SingleItem";

import { useEffect } from "react";

const Product = () => {
  useEffect(() => {
    //  scroll to top on page load
    window.scrollTo({ top: 450, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <SingleItem />
      <AlsoLike />
    </>
  );
};

export default Product;
