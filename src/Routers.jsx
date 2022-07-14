import { Route, Routes } from "react-router-dom";
import { Experiencia } from "./pages/experiencia";
import { Habilidades } from "./pages/Habilidades";
import { Menu } from "./pages/Menu";
import { Projeto } from "./pages/projetos";
import { Sobre } from "./pages/Sobre";

export function Routers(){
  return(
    <Routes>
      <Route path="/" element={<Sobre></Sobre>}></Route>
      <Route path="/projeto" element={<Projeto></Projeto>}></Route>
      <Route path="/experiencia" element={<Experiencia></Experiencia>}></Route>
      <Route path="/habilidades" element={<Habilidades></Habilidades>}></Route>
      <Route path="/menu" element={<Menu></Menu>}></Route>
    </Routes>
  )
}