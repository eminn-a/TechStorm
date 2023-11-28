import { Route, Routes } from "react-router-dom";

import HeaderTemplate from "./Components/Header/Header";
import FooterTemplate from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import Product from "./Components/Product/Product";
import Login from "./Components/Login/Login";
import AddProduct from "./Components/AddProduct/AddProduct";

function App() {
  return (
    <>
      <HeaderTemplate />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Product />} />
        <Route path="/addProduct" element={<AddProduct />} />
      </Routes>

      <FooterTemplate />
    </>
  );
}

export default App;
