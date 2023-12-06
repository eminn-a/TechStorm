import { Route, Routes } from "react-router-dom";

import Path from "./paths.js";
import { AuthProvider } from "./contexts/authContext.jsx";

import HeaderTemplate from "./Components/Header/Header";
import FooterTemplate from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import Product from "./Components/Product/ProductDetails.jsx";
import Login from "./Components/Login/Login";
import AddProduct from "./Components/AddProduct/AddProduct";
import AddNews from "./Components/AddNews/AddNews";
import CheckOut from "./Components/CheckOut/CheckOut";
import Register from "./Components/Register/Register";
import Logout from "./Components/Logout/Logout.jsx";
import Page404 from "./Components/Page404/Page404.jsx";
import EditProduct from "./Components/EditProduct/EditProduct.jsx";
import ErrorBoundary from "./Components/ErrorBundary.jsx";
import AuthGuard from "./Components/Guards/AuthGard.jsx";
import AdminGuard from "./Components/Guards/AdminGuard.jsx";

function App() {
  return (
    <>
      <ErrorBoundary>
        <AuthProvider>
          <HeaderTemplate />
          <Routes>
            <Route path={Path.Home} element={<Home />} />
            <Route path={Path.Shop} element={<Shop />} />
            <Route path={Path.Details} element={<Product />} />
            <Route path={Path.Login} element={<Login />} />
            <Route path={Path.Register} element={<Register />} />
            <Route path="*" element={<Page404 />} />

            <Route element={<AuthGuard />}>
              <Route path={Path.Logout} element={<Logout />} />
              <Route path={Path.CheckOut} element={<CheckOut />} />
              <Route element={<AdminGuard />}>
                <Route path={Path.Edit} element={<EditProduct />} />
                <Route path={Path.AddProduct} element={<AddProduct />} />
                <Route path={Path.AddNews} element={<AddNews />} />
              </Route>
            </Route>
          </Routes>
          <FooterTemplate />
        </AuthProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
