import AboutUs from "./AboutUs/AboutUs";
import LatestItems from "./LatestItems/LatestItems";
import LatestNewsTemp from "./LatestNew/LatestNew";
import ShopButtonTemp from "./ShopBtn/ShopButton";
import StepsTemp from "./StepsTemp/StepsTemp";

import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    //  scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <StepsTemp />
      <LatestItems />
      <ShopButtonTemp />
      <LatestNewsTemp />
      <AboutUs />
    </>
  );
};

export default Home;
