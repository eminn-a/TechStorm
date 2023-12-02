import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import * as service from "../../services/service.js";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //  scroll to top on page load
    window.scrollTo({ top: 450, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    service.getAll().then((result) => setProducts(result));
  }, []);

  console.log(products);
  return (
    <>
      <section className="item content">
        <div className="container toparea">
          <div className="underlined-title">
            <div className="editContent">
              <h1 className="text-center latestitems">OUR PRODUCTS</h1>
            </div>
            <div className="text-center latestitems">
              <input type="here" />
              <button>Search</button>
            </div>
            <div className="wow-hr type_short">
              <span className="wow-hr-h">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
            </div>
            <div className="text-center latestitems">
              <button>MotherBoard</button>
              <button>VCard</button>
              <button>RAM</button>
              <button>Cooler</button>
              <button>GPU</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="productbox">
                <div className="fadeshop">
                  <span className="maxproduct">
                    <img
                      src="https://ardes.bg/uploads/p/msi-thin-gf63-12v-12u-472959.jpg"
                      alt=""
                    />
                  </span>
                </div>
                <div className="product-details">
                  <Link to="/product">
                    <h1>MSI Thin GF63 12VF</h1>
                  </Link>
                  <div>
                    <h6>NVIDIA RTX 4060 8GB GDDR6 DLSS 3</h6>
                    <h6>Intel Core i7-12650H (1.7/4.7GHz, 24M)</h6>
                    <h6>512GB M.2 NVMe SSD</h6>
                  </div>
                  <Link to="/product">
                    <button className="detailsButton">Details</button>
                  </Link>
                  <button className="detailsButton">Buy</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="productbox">
                <div className="fadeshop">
                  <span className="maxproduct">
                    <img
                      src="https://ardes.bg/uploads/p/asus-g713-rog-strix-g17-2023-463389.jpg"
                      alt=""
                    />
                  </span>
                </div>
                <div className="product-details">
                  <Link to="/product">
                    <h1>ASUS ROG Strix G17</h1>
                  </Link>
                  <div>
                    <div>
                      <h6>NVIDIA RTX 4070 8GB GDDR6 DLSS 3</h6>
                      <h6>AMD Ryzen 9 7845HX (3.0/5.2GHz, 12M)</h6>
                      <h6>512GB M.2 NVMe SSD</h6>
                    </div>
                  </div>
                  <Link to="/product">
                    <button className="detailsButton">Details</button>
                  </Link>
                  <button className="detailsButton">Buy</button>
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
                  <div>
                    <h6>NVIDIA RTX 4070 8GB GDDR6 DLSS 3</h6>
                    <h6>Intel Core i9-13900HX (1.6/5.4GHz, 36M)</h6>
                    <h6>1TB M.2 NVMe SSD</h6>
                  </div>
                  <Link to="/product">
                    <button className="detailsButton">Details</button>
                  </Link>
                  <button className="detailsButton">Buy</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="productbox">
                <div className="fadeshop">
                  <span className="maxproduct">
                    <img
                      src="https://ardes.bg/uploads/p/msi-thin-gf63-12v-12u-472959.jpg"
                      alt=""
                    />
                  </span>
                </div>
                <div className="product-details">
                  <Link to="/product">
                    <h1>MSI Thin GF63 12VF</h1>
                  </Link>
                  <div>
                    <h6>NVIDIA RTX 4060 8GB GDDR6 DLSS 3</h6>
                    <h6>Intel Core i7-12650H (1.7/4.7GHz, 24M)</h6>
                    <h6>512GB M.2 NVMe SSD</h6>
                  </div>
                  <Link to="/product">
                    <button className="detailsButton">Details</button>
                  </Link>
                  <button className="detailsButton">Buy</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="productbox">
                <div className="fadeshop">
                  <span className="maxproduct">
                    <img
                      src="https://ardes.bg/uploads/p/asus-g713-rog-strix-g17-2023-463389.jpg"
                      alt=""
                    />
                  </span>
                </div>
                <div className="product-details">
                  <Link to="/product">
                    <h1>ASUS ROG Strix G17</h1>
                  </Link>
                  <div>
                    <div>
                      <h6>NVIDIA RTX 4070 8GB GDDR6 DLSS 3</h6>
                      <h6>AMD Ryzen 9 7845HX (3.0/5.2GHz, 12M)</h6>
                      <h6>512GB M.2 NVMe SSD</h6>
                    </div>
                  </div>
                  <Link to="/product">
                    <button className="detailsButton">Details</button>
                  </Link>
                  <button className="detailsButton">Buy</button>
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
                  <div>
                    <h6>NVIDIA RTX 4070 8GB GDDR6 DLSS 3</h6>
                    <h6>Intel Core i9-13900HX (1.6/5.4GHz, 36M)</h6>
                    <h6>1TB M.2 NVMe SSD</h6>
                  </div>
                  <Link to="/product">
                    <button className="detailsButton">Details</button>
                  </Link>
                  <button className="detailsButton">Buy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
