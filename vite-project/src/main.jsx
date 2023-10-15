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
import MetodoOcorrencias4 from "./pages/MetodoOcorrencia4";
import MetodoOcorrencias5 from "./pages/MetodoOcorrencia5";
import MetodoOcorrencias6 from "./pages/MetodoOcorrencia6";
import MetodoOcorrencias7 from "./pages/MetodoOcorrencia7";
import MetodoOcorrencias8 from "./pages/MetodoOcorrencia8";
import MetodoOcorrencias9 from "./pages/MetodoOcorrencia9";

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
      <Route path="/metodoOcorrencias4" element={<MetodoOcorrencias4 />} />
      <Route path="/metodoOcorrencias5" element={<MetodoOcorrencias5 />} />
      <Route path="/metodoOcorrencias6" element={<MetodoOcorrencias6 />} />
      <Route path="/metodoOcorrencias7" element={<MetodoOcorrencias7 />} />
      <Route path="/metodoOcorrencias8" element={<MetodoOcorrencias8 />} />
      <Route path="/metodoOcorrencias9" element={<MetodoOcorrencias9 />} />
    </Routes>
  </BrowserRouter>
);
