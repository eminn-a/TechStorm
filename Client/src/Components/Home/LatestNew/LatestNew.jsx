import { useEffect, useState } from "react";
import { latestNews } from "../../../Services/latesNewsApi.js";
import SingleNew from "./SingleNew.jsx";

const LatestNewsTemp = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    latestNews(3)
      .then((result) => setNewsData(result))
      .catch((err) => alert(err.message));
  }, []);
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

          {newsData ? (
            newsData.map((x) => <SingleNew key={x.url} {...x} />)
          ) : (
            <h1 className="text-center">No news at the moment</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestNewsTemp;
