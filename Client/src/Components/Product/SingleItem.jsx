const SingleItem = () => {
  return (
    <>
      <section className="item content">
        <div className="container toparea">
          <div className="underlined-title">
            <div className="editContent">
              <h1 className="text-center latestitems">Awesome Product(name)</h1>
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
            <div className="col-md-8">
              <div className="productbox">
                <img
                  src="https://desktop.bg/system/images/330952/original/asus_dual_geforce_rtx_3060_v2_oc.png"
                  className="center"
                  alt=""
                />
                <div className="clearfix"></div>
                <br />
                <div className="product-details text-left">
                  <p>
                    Your description here. Serenity is a highly-professional &
                    modern website theme crafted with you, the user, in mind.
                    This light-weight theme is generous, built with custom types
                    and enough shortcodes to customize each page according to
                    your project. You will notice some examples of pages in
                    demo, but this theme can do much more.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              {/* <a href="#" className="btn btn-buynow">
                $49.00 - Purchase
              </a> */}
              <button
                onClick={() => console.log("buyed item!")}
                className="btn btn-buynow"
              >
                Purchase! - 88.88$
              </button>
              <div className="properties-box">
                <ul className="unstyle">
                  <li>
                    <b className="propertyname">Version:</b> 1.0
                  </li>
                  <li>
                    <b className="propertyname">Image Size:</b> 2340x1200
                  </li>
                  <li>
                    <b className="propertyname">Files Included:</b> mp3, audio,
                    jpeg, png
                  </li>
                  <li>
                    <b className="propertyname">Documentation:</b> Well
                    Documented
                  </li>
                  <li>
                    <b className="propertyname">License:</b> GNU
                  </li>
                  <li>
                    <b className="propertyname">Requires:</b> Easy Digital
                    Downloads
                  </li>
                  <li>
                    <b className="propertyname">Environment:</b> Wordpress
                  </li>
                  <li>
                    <b className="propertyname">Any Field Etc:</b> Any Detail
                  </li>
                  <li>
                    <b className="propertyname">Number:</b> Up to 20
                    specifications in this box
                  </li>
                  <li>
                    <b className="propertyname">Live Demo:</b>
                    <a target="_blank" href="http://www.wowthemes.net/">
                      http://www.wowthemes.net/
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleItem;
