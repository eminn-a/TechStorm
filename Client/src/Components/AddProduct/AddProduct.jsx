import { useEffect, useState } from "react";
import * as productService from "../../services/productService.js";
import { useForm } from "../../hooks/useForm.js";
import { useNavigate } from "react-router-dom";
import productValidation from "../../validation/productValidation.js";

const AddProduct = () => {
  const [addError, setAdderror] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 450, left: 0, behavior: "smooth" });
  }, []);

  const createAddProductHandler = async (productData) => {
    console.log(productData);
    try {
      productValidation(productData);
      await productService.create(productData);
      navigate("/shop");
    } catch (err) {
      console.log(err.message);
      window.scrollTo({ top: 450, left: 0, behavior: "smooth" });
      setAdderror(err.message);
      setTimeout(() => {
        setAdderror("");
      }, 5000);
    }
  };

  const { values, onChange, onSubmit } = useForm(
    {
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
    },
    createAddProductHandler
  );

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

            <form id="contactform" onSubmit={onSubmit}>
              <div className="form">
                <input
                  type="text"
                  onChange={onChange}
                  name="brand"
                  value={values.brand}
                  placeholder="Brand *"
                />
                <input
                  type="text"
                  onChange={onChange}
                  name="cpu"
                  value={values.cpu}
                  placeholder="CPU *"
                />
                <input
                  type="text"
                  onChange={onChange}
                  value={values.gpu}
                  name="gpu"
                  placeholder="GPU *"
                />
                <input
                  type="text"
                  onChange={onChange}
                  value={values.ram}
                  name="ram"
                  placeholder="RAM *"
                />
                <input
                  type="text"
                  onChange={onChange}
                  value={values.storage}
                  name="storage"
                  placeholder="Storage *"
                />
                <input
                  type="text"
                  onChange={onChange}
                  value={values.display}
                  name="display"
                  placeholder="Display *"
                />
                <input
                  type="text"
                  onChange={onChange}
                  value={values.os}
                  name="os"
                  placeholder="OS *"
                />
                <input
                  type="text"
                  onChange={onChange}
                  value={values.imgUrl}
                  name="imgUrl"
                  placeholder="ImgUrl *"
                />
                <input
                  type="number"
                  onChange={onChange}
                  value={values.price}
                  name="price"
                  placeholder="Price *"
                />
                <textarea
                  name="description"
                  rows="7"
                  placeholder="Description *"
                  onChange={onChange}
                  value={values.description}
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
