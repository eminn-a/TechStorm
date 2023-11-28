import { Link } from "react-router-dom";

const HeaderTemplate = () => {
  return (
    <header className="item header margin-top-0">
      <div className="wrapper">
        <nav
          role="navigation"
          className="navbar navbar-white navbar-embossed navbar-lg navbar-fixed-top"
        >
          <div className="container">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand brand">
                {" "}
                Tech⚡Storm{" "}
              </Link>
            </div>
            <div id="navbar-collapse-02" className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                {/* <li>
                  <Link to="/product">Product</Link>
                </li> */}
                <li>
                  <Link to="/addProduct">Add product</Link>
                </li>
                <li>
                  <Link to="/checkout">Add news</Link>
                </li>
                <li>
                  <Link to="/login">LogIn</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="text-homeimage">
                <div className="maintext-image">Tech Storm</div>
                <div className="subtext-image">The PC store</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTemplate;
