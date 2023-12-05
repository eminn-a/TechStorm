import "./page404.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Path from "../../paths";

const Page404 = () => {
  useEffect(() => {
    //  scroll to top on page load
    window.scrollTo({ top: 450, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="notFound">
      <h1>404 - Not Found!</h1>
      <img
        className="image"
        src="https://st5.depositphotos.com/30046358/66598/v/450/depositphotos_665985108-stock-illustration-sad-expression-black-white-error.jpg"
      />

      <p>Oh no!!</p>
      <p>
        You’re either misspelling the URL or requesting a page that's no longer
        here.
      </p>

      <button className="button-74" role="button">
        <Link to={Path.Home}>Go Home</Link>
      </button>
    </div>
  );
};

export default Page404;
