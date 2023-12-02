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
                <input type="text" name="Brand" placeholder="Brand *" />
                <input type="text" name="CPU" placeholder="CPU *" />
                <input type="text" name="GPU" placeholder="GPU *" />
                <input type="text" name="RAM" placeholder="RAM *" />
                <input type="text" name="Storage" placeholder="Storage *" />
                <input type="text" name="Display" placeholder="Display *" />
                <input type="text" name="OS" placeholder="OS *" />
                <input type="text" name="Warranty" placeholder="Warranty *" />
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
