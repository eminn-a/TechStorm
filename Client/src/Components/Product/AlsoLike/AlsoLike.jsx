import { Link } from "react-router-dom";

const AlsoLike = () => {
  return (
    <section className="item content">
      <div className="container">
        <div className="underlined-title">
          <div className="editContent">
            <h1 className="text-center latestitems">YOU MAY ALSO LIKE </h1>
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
                <img
                  src="https://ardes.bg/uploads/p/asus-g713-rog-strix-g17-2023-463387.jpg"
                  alt=""
                />
              </span>
            </div>
            <div className="product-details">
              <Link to="/product">
                <h1>ASUS ROG Strix G17</h1>
              </Link>
              <span className="price">
                <span className="edd_price">$1649.00</span>
              </span>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="productbox">
            <div className="fadeshop">
              <span className="maxproduct">
                <img
                  src="https://ardes.bg/uploads/p/acer-predator-ph18-71-helios-18-433650.jpg"
                  alt=""
                />
              </span>
            </div>
            <div className="product-details">
              <Link to="/product">
                <h1>Acer Predator Helios 18</h1>
              </Link>
              <span className="price">
                <span className="edd_price">$1599.00</span>
              </span>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="productbox">
            <div className="fadeshop">
              <span className="maxproduct">
                <img
                  src="https://ardes.bg/uploads/p/hp-probook-450-g8-300583.jpg"
                  alt=""
                />
              </span>
            </div>
            <div className="product-details">
              <Link to="/product">
                <h1>HP ProBook 450 G9</h1>
              </Link>
              <span className="price">
                <span className="edd_price">$649.00</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlsoLike;
