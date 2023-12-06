import * as productService from "../../services/productService.js";

import { useNavigate } from "react-router-dom";

const EditProduct = () => {
  window.scrollTo({ top: 450, left: 0, behavior: "smooth" });
  const navigate = useNavigate();

  return (
    <section className="item content">
      <div className="container toparea">
        <div className="underlined-title">
          <div className="editContent">
            <h1 className="text-center latestitems">Edit Product</h1>
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
            <div className="done">
              <div className="alert alert-success">
                <button type="button" className="close" data-dismiss="alert">
                  ×
                </button>
                You successfuly registered product!
              </div>
            </div>

            <form id="contactform">
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
                  value="Edit Product"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditProduct;