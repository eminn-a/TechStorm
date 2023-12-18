import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as authService from "../Services/authSrvice.js";
import Path from "../paths.js";
import usePersistedState from "../Hooks/usePersistedState.js";
import registerValidation from "../Validation/registerValidation.js";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = usePersistedState("user", {});
  const [loginError, setLoginError] = useState("");
  const [registerError, setregisterError] = useState("");
  const navigate = useNavigate();

  const loginSubmitHandler = async (values) => {
    try {
      if (Object.values(values).some((x) => x == "")) {
        throw new Error("Fields are required!");
      }
      const result = await authService.login(values.email, values.password);
      setAuth(result);
      navigate(Path.Home);
    } catch (err) {
      setLoginError(err.message);
    }
    setTimeout(() => {
      setLoginError("");
    }, 3000);
  };

  const registerSbmitHandler = async (values) => {
    try {
      registerValidation(values);
      const result = await authService.register(
        values.email,
        values.username,
        values.password
      );
      setAuth(result);
      navigate(Path.Home);
    } catch (err) {
      setregisterError(err.message);
    }
    setTimeout(() => {
      setregisterError("");
    }, 3000);
  };

  const logoutHandler = () => {
    setAuth({});
    navigate(Path.Home);
  };
  //for admin panel!
  const adminId = "60f0cf0b-34b0-4abd-9769-8c42f830dffc";

  const values = {
    loginSubmitHandler,
    registerSbmitHandler,
    logoutHandler,
    username: auth.username || auth.email,
    emial: auth.email,
    userId: auth._id,
    isAuthenticated: !!auth.email,
    isAdmin: auth._id === adminId,
    loginError: loginError,
    registerError: registerError,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthContext.displayName = "AuthContext";

export default AuthContext;
