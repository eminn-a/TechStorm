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

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState();

  const loginSubmitHandler = async (values) => {
    try {
      const result = await authService.login(values.email, values.password);
      setAuth(result);
      navigate(Path.Home);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <AuthContext.Provider value={{ loginSubmitHandler }}>
        <HeaderTemplate />
        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path={Path.Shop} element={<Shop />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path={Path.Login} element={<Login />} />
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
