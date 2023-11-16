import FeedBackTemp from "./Feedback";
import LatestItems from "./LatestItems";
import LatestNewsTemp from "./LatestNew";
import ShopButtonTemp from "./ShopButton";
import StepsTemp from "./StepsTemp";

const Home = () => {
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
