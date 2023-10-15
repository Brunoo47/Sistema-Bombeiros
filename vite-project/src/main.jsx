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
import MetodoHistorico1 from "./pages/MetodoHistorico1";
import MetodoHistorico2 from "./pages/MetodoHistorico2";
import MetodoHistorico3 from "./pages/MetodoHistorico3";
import MetodoHistorico4 from "./pages/MetodoHistorico4";
import MetodoHistorico5 from "./pages/MetodoHistorico5";

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
      <Route path="/metodoHistorico1" element={<MetodoHistorico1 />} />
      <Route path="/metodoHistorico2" element={<MetodoHistorico2 />} />
      <Route path="/metodoHistorico3" element={<MetodoHistorico3 />} />
      <Route path="/metodoHistorico5" element={<MetodoHistorico5 />} />
    </Routes>
  </BrowserRouter>
);
