import { Link } from "react-router-dom";

const LatestItems = () => {
  return (
    <section className="item content">
      <div className="container">
        <div className="underlined-title">
          <div className="editContent">
            <h1 className="text-center latestitems">LATEST ITEMS</h1>
          </div>
          <div className="wow-hr type_short">
            <span className="wow-hr-h">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </span>
          </div>
        </div>

        <div className="col-md-4">
          <div className="productbox">
            <div className="fadeshop">
              <span className="maxproduct">
                <img src="images/GeForce_ADA_RTX4080_Back.jpg" alt="" />
              </span>
            </div>
            <div className="product-details">
              <Link to="/product">
                <h1>FastSell Theme</h1>
              </Link>
              <span className="price">
                <span className="edd_price">$49.00</span>
              </span>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="productbox">
            <div className="fadeshop">
              <span className="maxproduct">
                <img src="images/dark_Pro.jpg" alt="" />
              </span>
            </div>
            <div className="product-details">
              <Link to="/product">
                <h1>Dark Pro</h1>
              </Link>
              <span className="price">
                <span className="edd_price">$49.00</span>
              </span>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="productbox">
            <div className="fadeshop">
              <span className="maxproduct">
                <img src="images/thermal_armor.png" alt="" />
              </span>
            </div>
            <div className="product-details">
              <Link to="/product">
                <h1>Asus TUF</h1>
              </Link>
              <span className="price">
                <span className="edd_price">$49.00</span>
              </span>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="productbox">
            <div className="fadeshop">
              <span className="maxproduct">
                <img src="images/vengeance_ram.webp" alt="" />
              </span>
            </div>
            <div className="product-details">
              <a href="product.html">
                <h1>FastSell Theme</h1>
              </a>
              <span className="price">
                <span className="edd_price">$49.00</span>
              </span>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="productbox">
            <div className="fadeshop">
              <span className="maxproduct">
                <img src="images/asus motherboard.jpg" alt="" />
              </span>
            </div>
            <div className="product-details">
              <a href="#">
                <h1>Biscaya Theme</h1>
              </a>
              <span className="price">
                <span className="edd_price">$49.00</span>
              </span>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="productbox">
            <div className="fadeshop">
              <span className="maxproduct">
                <img
                  src="images/Intel-Core-14th-Gen-Desktop-Lineup.jpg"
                  alt=""
                />
              </span>
            </div>
            <div className="product-details">
              <a href="#">
                <h1>Biscaya Theme</h1>
              </a>
              <span className="price">
                <span className="edd_price">$49.00</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestItems;
