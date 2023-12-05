import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";

import * as authService from "./services/authSrvice.js";
import AuthContext from "./contexts/authContext";
import Path from "./paths.js";

import HeaderTemplate from "./Components/Header/Header";
import FooterTemplate from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import Product from "./Components/Product/Product";
import Login from "./Components/Login/Login";
import AddProduct from "./Components/AddProduct/AddProduct";
import AddNews from "./Components/AddNews/AddNews";
import CheckOut from "./Components/CheckOut/CheckOut";
import Register from "./Components/Register/Register";
import Logout from "./Components/Logout/Logout.jsx";

function App() {
  const [auth, setAuth] = useState({});
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

  const values = {
    loginSubmitHandler,
    registerSbmitHandler,
    logoutHandler,
    username: auth.username || auth.email,
    emial: auth.email,
    isAuthenticated: !!auth.email,
  };

  return (
    <>
      <AuthContext.Provider value={values}>
        <HeaderTemplate />
        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path={Path.Shop} element={<Shop />} />
          <Route path={Path.Details} element={<Product />} />
          <Route path={Path.Login} element={<Login />} />
          <Route path={Path.Logout} element={<Logout />} />
          <Route path={Path.Register} element={<Register />} />
          <Route path={Path.AddProduct} element={<AddProduct />} />
          <Route path={Path.AddNews} element={<AddNews />} />
          <Route path="/checkOut" element={<CheckOut />} />
        </Routes>
        <FooterTemplate />
      </AuthContext.Provider>
    </>
  );
}

export default App;
