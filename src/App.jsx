import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Insurance from "./Pages/Insurance";

import Warehousing from "./Pages/Warehousing";
import Logistics from "./Pages/Logistics";
import Homepage from "./Pages/Homepage";
import WorkingCapitalPool from "./Pages/WorkingCapitalPool";
import LoadScreen from "./Components/LoadScreen";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);
  return (
    <>
      {loading ? (
        <LoadScreen loading={loading} />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/warehousing" element={<Warehousing />} />
            <Route path="/logistics" element={<Logistics />} />

            <Route
              path="/working-capital-pools"
              element={<WorkingCapitalPool />}
            />
            <Route path="/insurance-pools" element={<Insurance />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
