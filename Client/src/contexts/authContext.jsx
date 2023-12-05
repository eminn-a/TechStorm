import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../services/authSrvice.js";
import Path from "../paths.js";

import usePersistedState from "../hooks/usePersistedState.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = usePersistedState("user", {});

  const navigate = useNavigate();

  const loginSubmitHandler = async (values) => {
    try {
      const result = await authService.login(values.email, values.password);
      setAuth(result);
      navigate(Path.Home);
    } catch (err) {
      console.log(err.message);
    }
  };

  const registerSbmitHandler = async (values) => {
    const result = await authService.register(
      values.email,
      values.username,
      values.password
    );
    setAuth(result);
    navigate(Path.Home);
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
    isAuthenticated: !!auth.email,
    isAdmin: auth._id === adminId,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthContext.displayName = "AuthContext";

export default AuthContext;
