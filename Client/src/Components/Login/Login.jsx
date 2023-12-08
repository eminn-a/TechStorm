import { useContext, useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";

const LoginFormKeys = {
  email: "email",
  password: "password",
};

const Login = () => {
  const { loginSubmitHandler, loginError } = useContext(AuthContext);
  useEffect(() => {
    //  scroll to top on page load
    window.scrollTo({ top: 450, left: 0, behavior: "smooth" });
  }, []);

  const { values, onChange, onSubmit } = useForm(
    {
      [LoginFormKeys.email]: "",
      [LoginFormKeys.password]: "",
    },
    loginSubmitHandler
  );

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
            {loginError && (
              <div className="alert alert-danger">
                <span>{loginError}</span>
              </div>
            )}
            <form id="contactform" onSubmit={onSubmit}>
              <div className="form">
                <input
                  type="email"
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
                  value={values[LoginFormKeys.password]}
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
