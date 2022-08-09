import { Navigate, Route, Routes } from "react-router-dom";
import { Habilidades } from "./pages/Habilidades";
import { Menu } from "./pages/Menu";
import { Projeto } from "./pages/projetos";
import { Sobre } from "./pages/Sobre";

export function Routers(){
  return(
    <Routes>
      <Route path="/sobre" element={<Sobre></Sobre>}></Route>
      <Route path="/projeto" element={<Projeto></Projeto>}></Route>
      <Route path="/habilidades" element={<Habilidades></Habilidades>}></Route>
      <Route path="/menu" element={<Menu></Menu>}></Route>
      <Route path="*" element={<Navigate to="/sobre"></Navigate>}></Route>
    </Routes>
  )
}