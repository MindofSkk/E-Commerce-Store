import React from "react";

import { Route, Routes } from "react-router-dom";
import { AddProduct } from "./AddProduct";
import { Home } from "./Home";
export const MainRoutes = () => {
  return (

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/AddProduct" element={<AddProduct />} />
  </Routes>
)};
