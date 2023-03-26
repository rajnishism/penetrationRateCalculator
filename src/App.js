import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Benaola from "./pages/Benaola";
import USBM from "./pages/USBM";
import Home from "./pages/Home";
import Baurer from "./pages/Baurer";
import Norway from "./pages/Norway";
import BauerAndCalder from "./pages/BauerAndCalder";
import CalderAndWorkman from "./pages/CalderAndWorkman";
import About from "./pages/About";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/usbm" element={<USBM />}></Route>
          <Route path="/benaola" element={<Benaola />}></Route>
          <Route path="/norway" element={<Norway />}></Route>
          <Route path="/baurer" element={<Baurer />}></Route>
          <Route path="/bauerandcalder" element={<BauerAndCalder />}></Route>
          <Route
            path="/calderandworkman"
            element={<CalderAndWorkman />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
