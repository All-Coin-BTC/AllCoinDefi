import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Assets from "./Pages/Assets";
import ProductBakset from "./Pages/ProductBakset";
import Insurance from "./Pages/Insurance";
import Operations from "./Pages/Operations";
import MarketFixedAssets from "./Pages/MarketFixedAssets";
import MarketInsurancePools from "./Pages/MarketInsurancePools";
import MarketStableCoins from "./Pages/MarketStableCoin";
import MarketAllCoin from "./Pages/MarketAllCoin";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/assets" element={<Assets />} />
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
