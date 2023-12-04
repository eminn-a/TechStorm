import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";

const LoginFormKeys = {
  email: "email",
  password: "password",
};

const Login = ({ loginSubmitHandler }) => {
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [LoginFormKeys.email]: "",
    [LoginFormKeys.password]: "",
  });

  useEffect(() => {
    //  scroll to top on page load
    window.scrollTo({ top: 450, left: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="item content">
      <div className="container toparea">
        <div className="underlined-title">
          <div className="editContent">
            <h1 className="text-center latestitems">Login</h1>
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
            {/* --------- */}
            <div className="done">
              <div className="alert alert-danger">
                <button type="button" className="close" data-dismiss="alert">
                  ×
                </button>
                Email or password doesn't match !
              </div>
            </div>
            {/* --------- */}
            <div className="done">
              <div className="alert alert-success">
                <button type="button" className="close" data-dismiss="alert">
                  ×
                </button>
                You registered successfuly. Thank you!
              </div>
            </div>
            {/* --------- */}

            <form id="contactform" onSubmit={onSubmit}>
              <div className="form">
                <input
                  type="text"
                  name={LoginFormKeys.email}
                  placeholder="Your E-mail Address *"
                  onChange={onChange}
                  value={values[LoginFormKeys.email]}
                />
                <input
                  type="password"
                  name={LoginFormKeys.password}
                  placeholder="Your Password *"
                  onChange={onChange}
                  value={values[LoginFormKeys.email]}
                />

                <input
                  type="submit"
                  id="submit"
                  className="clearfix btn"
                  value="Login"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
