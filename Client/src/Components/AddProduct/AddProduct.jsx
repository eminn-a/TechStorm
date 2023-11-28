const AddProduct = () => {
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
            <div className="done">
              <div className="alert alert-success">
                <button type="button" className="close" data-dismiss="alert">
                  ×
                </button>
                You successfuly registered product!
              </div>
            </div>
            <form method="post" action="contact.php" id="contactform">
              <div className="form">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Product Name *"
                />
                <input
                  type="text"
                  name="model"
                  placeholder="Your Product Model *"
                />
                <input
                  type="text"
                  name="password"
                  placeholder="Your Product Price *"
                />
                <input
                  type="text"
                  name="re-password"
                  placeholder="Your Product Type *"
                />
                <textarea
                  name="comment"
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
