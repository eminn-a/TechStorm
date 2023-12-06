import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import { Navigate, Outlet } from "react-router-dom";

import Path from "../../paths.js";

export default function AuthGuard(props) {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to={Path.Login} />;
  }

  return <Outlet />;
}
