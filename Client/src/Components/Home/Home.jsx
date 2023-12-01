import FeedBackTemp from "./Feedback";
import LatestItems from "./LatestItems";
import LatestNewsTemp from "./LatestNew";
import ShopButtonTemp from "./ShopButton";
import StepsTemp from "./StepsTemp";

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
      <FeedBackTemp />
    </>
  );
};

export default Home;
