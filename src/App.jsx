import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Assets from "./Pages/Assets";
import ProductBakset from "./Pages/ProductBakset";
import Insurance from "./Pages/Insurance";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/assets" element={<Assets />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/product-basket" element={<ProductBakset />} />
      </Routes>
    </>
  );
}

export default App;
