import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ProductBakset from "./Pages/ProductBakset";
import Insurance from "./Pages/Insurance";
import Operations from "./Pages/Operations";
import MarketFixedAssets from "./Pages/MarketFixedAssets";
import MarketInsurancePools from "./Pages/MarketInsurancePools";
import MarketStableCoins from "./Pages/MarketStableCoin";
import MarketAllCoin from "./Pages/MarketAllCoin";
import Warehousing from "./Pages/Warehousing";
import Logistics from "./Pages/Logistics";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/warehousing" element={<Warehousing />} />
        <Route path="/logistics" element={<Logistics />} />

        <Route path="/logistics-pools" />
        <Route path="/warehouse-pools" />
        <Route path="/working-capital-pools" />
        <Route path="/insurance-pools" element={<Insurance />} />
      </Routes>
    </>
  );
}

export default App;
