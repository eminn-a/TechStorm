import { Link } from "react-router-dom";

const SingleBuyedItem = ({
  brand,
  imgUrl,
  price,
  productId,
  onDellClick,
  _id,
}) => {
  function onDellClickHandler() {
    onDellClick(_id);
  }
  return (
    <tbody>
      <tr
        className="edd_cart_item"
        id="edd_cart_item_0_25"
        data-download-id="25"
      >
        <td className="edd_cart_item_name">
          <div className="edd_cart_item_image">
            <Link to={`/products/${productId}`}>
              <h4>{brand}</h4>
              <img src={imgUrl} alt={brand} />
            </Link>
          </div>
        </td>

        <td className="edd_cart_item_price">{price}$</td>
        <td className="edd_cart_actions">
          <button className="detailsButton" onClick={onDellClickHandler}>
            Remove
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default SingleBuyedItem;
