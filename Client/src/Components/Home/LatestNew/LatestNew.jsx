import { useEffect, useState } from "react";
import { latestNews } from "../../../services/LatesNewsApi.js";
import SingleNew from "./SingleNew.jsx";

const LatestNewsTemp = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    latestNews()
      .then((result) => setNewsData(result))
      .catch((err) => alert(err.message));
  }, []);
  console.log(newsData);
  return (
    <div className="item content">
      <div className="container">
        <div className="row">
          <h1 className="text-center latestitems">Latest News</h1>
          <div className="wow-hr type_short">
            <span className="wow-hr-h">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </span>
          </div>

          {newsData.map((x) => (
            <SingleNew key={x.url} {...x} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNewsTemp;
