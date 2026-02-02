import React from "react";

//Importe Dos Componentes
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Inicio from "../Inicio/Inicio";
import AcoesDaConnect from "../AcoesDaConnect/AcoesDaConnect";
import QuemSomos from "../QuemSomos/QuemSomos";
import Perfil from "../Perfil/Perfil";

//Importar Imagens
import Logo from "../../assets/logo.png";
import ImgPerfil from "../../assets/perfil.jpg";

function NavBar() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/acoesDaConnect">Ações da Connect</Link>
          </li>
          <li>
            <Link to="/quemSomos">Quem Somos</Link>
          </li>
        </ul>
        <Link to="/perfil">
          <img src={ImgPerfil} alt="" />
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acoesDaConnect" element={<AcoesDaConnect />} />
        <Route path="/quemSomos" element={<QuemSomos />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
}
export default NavBar;
