import { useState } from "react";
import {Routes, Route} from "react-router-dom"
import Navbar from "./Components/Navbar";
import Assets from "./Pages/Assets";
function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path = "/assets" element = {<Assets />} />
    </Routes>
   </>
  );
}

export default App;
