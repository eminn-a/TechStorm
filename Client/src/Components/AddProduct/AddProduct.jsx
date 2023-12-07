import { useState } from "react";
import * as productService from "../../services/productService.js";

import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  window.scrollTo({ top: 450, left: 0, behavior: "smooth" });

  const [addError, setAdderror] = useState("");
  const navigate = useNavigate();

  const createAddProductHandler = async (e) => {
    e.preventDefault();
    const productData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      if (Object.values(productData).some((x) => x == "")) {
        throw new Error("Fields are required!");
      }
      if (productData.price <= 0) {
        throw new Error("Price must be positive!");
      }
      await productService.create(productData);
      setAdderror("");
      navigate("/shop");
    } catch (err) {
      console.log(err.message);
      setAdderror(err.message);
    }
  };

  return (
    <section className="item content">
      <div className="container toparea">
        <div className="underlined-title">
          <div className="editContent">
            <h1 className="text-center latestitems">Add your Product</h1>
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
          <div className="col-lg-8 col-lg-offset-2">
            {/* ---------- */}
            {addError && (
              <div className="alert alert-danger">
                <span>{addError}</span>
              </div>
            )}

            <form id="contactform" onSubmit={createAddProductHandler}>
              <div className="form">
                <input type="text" name="brand" placeholder="Brand *" />
                <input type="text" name="cpu" placeholder="CPU *" />
                <input type="text" name="gpu" placeholder="GPU *" />
                <input type="text" name="ram" placeholder="RAM *" />
                <input type="text" name="storage" placeholder="Storage *" />
                <input type="text" name="display" placeholder="Display *" />
                <input type="text" name="os" placeholder="OS *" />
                <input type="text" name="imgUrl" placeholder="ImgUrl *" />
                <input type="number" name="price" placeholder="Price *" />
                <textarea
                  name="description"
                  rows="7"
                  placeholder="Description *"
                ></textarea>
                <input
                  type="submit"
                  id="submit"
                  className="clearfix btn"
                  value="Add Product"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
