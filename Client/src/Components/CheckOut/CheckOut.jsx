import { Link } from "react-router-dom";
import { useEffect } from "react";

const CheckOut = () => {
  useEffect(() => {
    //  scroll to top on page load
    window.scrollTo({ top: 450, left: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="item content">
      <div className="container toparea">
        <div className="underlined-title">
          <div className="editContent">
            <h1 className="text-center latestitems">Emin's Cart</h1>
          </div>
          <div className="wow-hr type_short">
            <span className="wow-hr-h">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </span>
          </div>
          <div id="edd_checkout_cart_form" method="post">
            <div id="edd_checkout_cart_wrap">
              <table id="edd_checkout_cart" className="ajaxed">
                <thead>
                  <tr className="edd_cart_header_row">
                    <th className="edd_cart_item_name">Item Name</th>
                    <th className="edd_cart_item_price">Item Price</th>
                    <th className="edd_cart_actions">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* a singel item */}
                  <tr
                    className="edd_cart_item"
                    id="edd_cart_item_0_25"
                    data-download-id="25"
                  >
                    <td className="edd_cart_item_name">
                      <div className="edd_cart_item_image">
                        <Link to="/product">
                          <h4>ASUS TUF Gaming F15</h4>
                          <img
                            src="https://ardes.bg/uploads/p/asus-fx507-tuf-gaming-f15-2023-439875.jpg"
                            alt="id"
                          />
                        </Link>
                      </div>
                    </td>

                    <td className="edd_cart_item_price">$1458</td>
                    <td className="edd_cart_actions">
                      <button
                        className="detailsButton"
                        onClick={() => console.log("removed!")}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                  {/* ------- */}
                  {/* a singel item */}
                  <tr
                    className="edd_cart_item"
                    id="edd_cart_item_0_25"
                    data-download-id="25"
                  >
                    <td className="edd_cart_item_name">
                      <div className="edd_cart_item_image">
                        <Link to="/product">
                          <h4>ASUS TUF Gaming F15</h4>
                          <img
                            src="https://ardes.bg/uploads/p/asus-fx507-tuf-gaming-f15-2023-439875.jpg"
                            alt="id"
                          />
                        </Link>
                      </div>
                    </td>

                    <td className="edd_cart_item_price">$1458</td>
                    <td className="edd_cart_actions">
                      <button
                        className="detailsButton"
                        onClick={() => console.log("removed!")}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                  {/* ------- */}
                </tbody>
                <tfoot>
                  <tr className="edd_cart_footer_row">
                    <th colSpan="5" className="edd_cart_total">
                      <h2>Total:$1458</h2>
                    </th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
