import { Link } from "react-router-dom";

const ShopButtonTemp = () => {
  return (
    <>
      <div className="item content">
        <div className="container text-center">
          <Link to="/shop" className="homebrowseitems">
            Browse All Products
            <div className="homebrowseitemsicon">
              <i className="fa fa-star fa-spin"></i>
            </div>
          </Link>
        </div>
      </div>
      <br />
    </>
  );
};

export default ShopButtonTemp;
