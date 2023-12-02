import { useEffect } from "react";

const SingleItem = () => {
  useEffect(() => {
    //  scroll to top on page load
    window.scrollTo({ top: 450, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <section className="item content">
        <div className="container toparea">
          <div className="underlined-title">
            <div className="editContent">
              <h1 className="text-center latestitems">ASUS TUF Gaming F15</h1>
            </div>
            <div className="wow-hr type_short">
              <span className="wow-hr-h">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="productbox">
                <img
                  src="https://ardes.bg/uploads/p/asus-g713-rog-strix-g17-2023-463387.jpg"
                  className="center"
                  alt=""
                />
                <div className="clearfix"></div>
                <br />
                <div className="product-details text-left">
                  <p>
                    The Asus TUF F15 is equipped with an Intel Core i7
                    processor, providing reliable performance and efficient
                    multitasking capabilities for smooth gameplay and everyday
                    computing tasks
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <button
                onClick={() => console.log("buyed item!")}
                className="btn btn-buynow"
              >
                Purchase! - 1699.99$
              </button>
              <div className="properties-box">
                <ul className="unstyle">
                  <li>
                    <b className="propertyname">Brand:</b> Asus
                  </li>
                  <li>
                    <b className="propertyname">CPU:</b> Intel Core i7-12700H
                    (1.7/4.7GHz, 24M)
                  </li>
                  <li>
                    <b className="propertyname">GPU:</b> NVIDIA RTX 4060 8GB
                    GDDR6 DLSS 3
                  </li>
                  <li>
                    <b className="propertyname">RAM:</b> 16 GB DDR4 3200 MHz
                  </li>
                  <li>
                    <b className="propertyname">Storage:</b> 1TB M.2 NVMe SSD
                  </li>
                  <li>
                    <b className="propertyname">Display:</b> 15.6" WQHD IPS
                  </li>
                  <li>
                    <b className="propertyname">OS:</b> Windows 10
                  </li>
                  <li>
                    <b className="propertyname">Warranty:</b> 24 months
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleItem;
