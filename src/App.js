import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skill from "./pages/Skill/Skill";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skill />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
