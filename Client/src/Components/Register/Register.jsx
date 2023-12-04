import { useEffect } from "react";

const Register = () => {
  useEffect(() => {
    //  scroll to top on page load
    window.scrollTo({ top: 450, left: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="item content">
      <div className="container toparea">
        <div className="underlined-title">
          <div className="editContent">
            <h1 className="text-center latestitems">Register</h1>
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
              <div className="alert alert-danger">
                <button type="button" className="close" data-dismiss="alert">
                  ×
                </button>
                Email or password doesn't match !
              </div>
            </div>
            <div className="done">
              <div className="alert alert-success">
                <button type="button" className="close" data-dismiss="alert">
                  ×
                </button>
                You registered successfuly. Thank you!
              </div>
            </div>
            <form method="post" id="contactform">
              <div className="form">
                <input type="text" name="name" placeholder="Your Name *" />
                <input
                  type="text"
                  name="email"
                  placeholder="Your E-mail Address *"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Your Password *"
                />
                <input
                  type="password"
                  name="re-password"
                  placeholder="Repeat your Password *"
                />
                <input
                  type="submit"
                  id="submit"
                  className="clearfix btn"
                  value="Register"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
