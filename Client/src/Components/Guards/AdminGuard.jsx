import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import { Navigate, Outlet } from "react-router-dom";

import Path from "../../paths.js";

export default function AdminGuard(props) {
  const { isAdmin } = useContext(AuthContext);

  if (!isAdmin) {
    return <Navigate to={Path.Home} />;
  }

  return <Outlet />;
}
