import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./global.css";
import Entrar from "./pages/Entrar";
import Informacoes from "./pages/Informações";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Entrar />} />
      <Route path="/infos" element={<Informacoes />} />
    </Routes>
  </BrowserRouter>
);
