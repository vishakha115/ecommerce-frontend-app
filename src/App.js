import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import ShopCategory from "./Pages/ShopCategory";
import women_banner from "./Components/Assets/banner_women.png";
import men_banner from "./Components/Assets/banner_mens.png";
import kid_banner from "./Components/Assets/banner_kids.png";
import LoginSignup from "./Pages/LoginSignup";
import AdminDashboard from "./admin-ui/index";
import AddProduct from "./admin-ui/Components/AddProduct/AddProduct";
import ListProduct from "./admin-ui/Components/ListProduct/ListProduct";

export const backend_url = "https://ecommerce-backend-app-sigma.vercel.app";
export const currency = "₹";

function App() {
  const location = useLocation();
  return (
    <div>
      {/* Conditionally render Navbar only if the current path is not '/admin' or its child routes */}
      {location.pathname.startsWith("/admin") ? null : <Navbar />}
      <Routes>
        <Route path="/" element={<Shop gender="all" />} />
        <Route
          path="/mens"
          element={<ShopCategory banner={men_banner} category="men" />}
        />
        <Route
          path="/womens"
          element={<ShopCategory banner={women_banner} category="women" />}
        />
        <Route
          path="/kids"
          element={<ShopCategory banner={kid_banner} category="kid" />}
        />
        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="listproduct" element={<ListProduct />} />
        </Route>
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>

      {location.pathname.startsWith("/admin") ? null : <Footer />}
    </div>
  );
}

export default App;
