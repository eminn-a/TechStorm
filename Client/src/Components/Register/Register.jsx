import { useContext, useEffect } from "react";
import AuthContext from "../../contexts/authContext";
import { useForm } from "../../hooks/useForm";
import { register } from "../../services/authSrvice";

const registerFormKeys = {
  Email: "email",
  Username: "username",
  Password: "password",
  RePassword: "repassword",
};

const Register = () => {
  const { registerSbmitHandler, errorMessage } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSbmitHandler, {
    [registerFormKeys.Username]: "",
    [registerFormKeys.Email]: "",
    [registerFormKeys.Password]: "",
    [registerFormKeys.RePassword]: "",
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
            {errorMessage && (
              <div className="alert alert-danger">
                <span>{errorMessage}</span>
              </div>
            )}

            <form id="contactform" onSubmit={onSubmit}>
              <div className="form">
                <input
                  type="text"
                  name={registerFormKeys.Username}
                  placeholder="Your Name *"
                  onChange={onChange}
                  value={values[registerFormKeys.Username]}
                />
                <input
                  type="email"
                  name={registerFormKeys.Email}
                  placeholder="Your E-mail Address *"
                  onChange={onChange}
                  value={values[registerFormKeys.Email]}
                />
                <input
                  type="password"
                  name={registerFormKeys.Password}
                  placeholder="Your Password *"
                  onChange={onChange}
                  value={values[registerFormKeys.Password]}
                />
                <input
                  type="password"
                  name={registerFormKeys.RePassword}
                  placeholder="Repeat your Password *"
                  onChange={onChange}
                  value={values[registerFormKeys.RePassword]}
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
