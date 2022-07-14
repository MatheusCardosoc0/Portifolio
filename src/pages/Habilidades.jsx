import { CardHability } from "../components/CardHability";
import { Header } from "../components/Header";
import React from "./componentes/img/React.png"
import Html from "./componentes/img/html.png"
import Css from "./componentes/img/css.png"
import Js from "./componentes/img/js.png"
import tail from "./componentes/img/tailwind.png"

export function Habilidades(){
  return(
    <div className=" bg-black flex-1 h-full w-full pb-10 pt-10 md:h-screen">
      <Header></Header>
      <div className="">
      <h1 className="mt-20 flex justify-center text-3xl lg:text-5xl text-teal-600 font-bold ">Minhas habilidades</h1>
      </div>
      <div className="flex justify-center mt-40 gap-9 flex-wrap ">
      <img className="w-40 h-40"
      src={Html}></img>
       <img className="w-40 h-40"
      src={Css}></img>
      <img className="w-40 h-40"
      src={React}></img>
        <img className="w-40 h-40"
      src={Js}></img>
       <img className="w-40 h-40"
      src={tail}></img>
      </div>
      
    </div>
  )
}