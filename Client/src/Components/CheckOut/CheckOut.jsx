import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Contexts/authContext.jsx";
import * as buyService from "../../Services/productBuyService.js";
import SingleBuyedItem from "./SingleBuyedItem/singleBuyedItem.jsx";

const CheckOut = () => {
  const { username } = useContext(AuthContext);
  const { userId } = useContext(AuthContext);
  const [buyedItems, setBuyedItems] = useState([]);

  useEffect(() => {
    buyService
      .getAllbuyed(userId)
      .then((result) => setBuyedItems(result))
      .catch((err) => alert(err.message));
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  async function onDellClick(id) {
    try {
      await buyService.deleteById(id);
      setBuyedItems(buyedItems.filter((x) => x._id !== id));
    } catch (error) {
      alert(error.message);
    }
  }

  console.log(buyedItems);
  return (
    <section className="item content">
      <div className="container toparea">
        <div className="underlined-title">
          <div className="editContent">
            <h1 className="text-center latestitems">{username}'s Cart</h1>
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
                <tbody></tbody>
                {buyedItems.map((buyedItems) => (
                  <SingleBuyedItem
                    key={buyedItems._id}
                    {...buyedItems}
                    onDellClick={onDellClick}
                  />
                ))}

                <tfoot>
                  <tr className="edd_cart_footer_row">
                    <th colSpan="5" className="edd_cart_total">
                      {/* <h2>Total:$1458</h2> */}
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
