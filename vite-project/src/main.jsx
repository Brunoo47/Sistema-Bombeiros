import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./global.css";
import Entrar from "./pages/Entrar";
import Informacoes from "./pages/Informações";
import Conta from "./pages/Conta";
import MetodoOcorrencias from "./pages/MetodoOcorrencias";
import Menu from "./pages/Menu";
import Registrar from "./pages/Registrar";
import MetodoOcorrencias2 from "./pages/MetodoOcorrencia2";
import MetodoOcorrencias3 from "./pages/MetodoOcorrencia3";

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
      <Route path="/metodoOcorrencias2" element={<MetodoOcorrencias2 />} />
      <Route path="/metodoOcorrencias3" element={<MetodoOcorrencias3 />} />
    </Routes>
  </BrowserRouter>
);
