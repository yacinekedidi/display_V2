import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ProductProfile from "./components/Products/ProductProfile";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Favorites from "./components/Profile/Favorites";
import Requests from "./components/Profile/Requests";
import ProductsList from "./components/Products/ProductsList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<Home />} />
        <Route path=":username" element={<Profile />} />
        <Route path=":username/favorites" element={<Favorites />} />
        <Route path=":username/requests" element={<Requests />} />
        <Route path="products" element={<ProductsList />} />
        <Route path="products/:productId" element={<ProductProfile />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
