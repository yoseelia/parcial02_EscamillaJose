import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../componentes/contenedor/Inicio";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

import { ConciertoCrear } from "../../componentes/conciertos/ConciertoCrear";


export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/concre" element={<ConciertoCrear />} />

      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
};