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
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/product-basket" element={<ProductBakset />} />
        <Route path="/operations" element={<Operations />} />
        <Route path="/markets-fixed-assets" element={<MarketFixedAssets />} />
        <Route
          path="/markets-insurance-pools"
          element={<MarketInsurancePools />}
        />
        <Route path="/markets-stable-coins" element={<MarketStableCoins />} />
        <Route path="/markets-allcoin" element={<MarketAllCoin />} />
      </Routes>
    </>
  );
}

export default App;
