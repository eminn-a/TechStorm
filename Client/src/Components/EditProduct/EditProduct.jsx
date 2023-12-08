import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as productService from "../../services/productService.js";
import Path from "../../paths.js";

const EditProduct = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [editError, setEditError] = useState("");
  const [product, setProduct] = useState({
    brand: "",
    cpu: "",
    gpu: "",
    ram: "",
    storage: "",
    display: "",
    os: "",
    imgUrl: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    productService.getById(productId).then((result) => {
      setProduct(result);
    });
    window.scrollTo({ top: 450, left: 0, behavior: "smooth" });
  }, [productId]);

  const editProductSubmitHandler = async (e) => {
    e.preventDefault();
    const newData = Object.fromEntries(new FormData(e.currentTarget));
    try {
      if (Object.values(newData).some((x) => x == "")) {
        window.scrollTo({ top: 450, left: 0, behavior: "smooth" });
        throw new Error("Fields are required!");
      }
      if (newData.price <= 0) {
        window.scrollTo({ top: 450, left: 0, behavior: "smooth" });
        throw new Error("Price must be positive!");
      }
      await productService.update(productId, newData);
      navigate(Path.Shop);
    } catch (error) {
      setEditError(error.message);
    }
  };

  const onChange = (e) => {
    setProduct((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

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
            {editError && (
              <div className="alert alert-danger">
                <span>{editError}</span>
              </div>
            )}

            <form id="contactform" onSubmit={editProductSubmitHandler}>
              <div className="form">
                <input
                  type="text"
                  name="brand"
                  value={product.brand}
                  placeholder="Brand *"
                  onChange={onChange}
                />
                <input
                  type="text"
                  name="cpu"
                  value={product.cpu}
                  placeholder="CPU *"
                  onChange={onChange}
                />
                <input
                  type="text"
                  name="gpu"
                  value={product.gpu}
                  placeholder="GPU *"
                  onChange={onChange}
                />
                <input
                  type="text"
                  name="ram"
                  value={product.ram}
                  placeholder="RAM *"
                  onChange={onChange}
                />
                <input
                  type="text"
                  name="storage"
                  value={product.storage}
                  placeholder="Storage *"
                  onChange={onChange}
                />
                <input
                  type="text"
                  name="display"
                  value={product.display}
                  placeholder="Display *"
                  onChange={onChange}
                />
                <input
                  type="text"
                  name="os"
                  value={product.os}
                  placeholder="OS *"
                  onChange={onChange}
                />
                <input
                  type="text"
                  name="imgUrl"
                  value={product.imgUrl}
                  placeholder="ImgUrl *"
                  onChange={onChange}
                />
                <input
                  type="number"
                  name="price"
                  value={product.price}
                  placeholder="Price *"
                  onChange={onChange}
                />
                <textarea
                  name="description"
                  rows="7"
                  value={product.description}
                  placeholder="Description *"
                  onChange={onChange}
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
