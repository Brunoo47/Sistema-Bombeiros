import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./global.css";
import Entrar from "./pages/Entrar";
import Informacoes from "./pages/Informações";
import Conta from "./pages/Conta";
import MetodoOcorrencias from "./pages/MetodoOcorrencias";
import Menu from "./pages/Menu";
import layoutPadrao from "./layouts/layoutPadrao";
import Registrar from "./pages/Registrar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Entrar />} />
      <Route path="/infos" element={<Informacoes />} />
      <Route path="/conta" element={<Conta />} />
      <Route path="/registrar" element={<Registrar />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/metodoOcorrencias" element={<MetodoOcorrencias />} />
    </Routes>
  </BrowserRouter>
);
