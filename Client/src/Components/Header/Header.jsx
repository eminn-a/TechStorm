import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

const HeaderTemplate = () => {
  const { username, isAuthenticated, isAdmin } = useContext(AuthContext);

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
                Tech⚡Storm
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

                {isAuthenticated && (
                  <>
                    <span>
                      <i>{username}</i>
                    </span>
                    {isAdmin && (
                      <>
                        <li>
                          <Link to="/addProduct">Add product</Link>
                        </li>
                        {/* <li>
                          <Link to="/addNews">Add news</Link>
                        </li> */}
                      </>
                    )}
                    <li>
                      <Link to="/checkOut">My Cart</Link>
                    </li>
                    <li>
                      <Link to="/logout">Logout</Link>
                    </li>
                  </>
                )}
                {!isAuthenticated && (
                  <>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="text-homeimage">
                <div className="maintext-image">Tech Storm</div>
                <div className="subtext-image">The Laptop Store</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTemplate;
