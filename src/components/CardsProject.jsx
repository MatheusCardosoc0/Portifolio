import { CalendarBlank, Eye, GithubLogo } from "phosphor-react";

export function CardsProject(props){
  return(
    <div className=" w-[20rem] lg:w-[35rem] bg-sky-400 p-2 flex flex-col font-bold text-yellow-500">
     
      
      <h2 className="flex justify-center text-xl lg:text-3xl bg-blue-900 text-yellow-500 pb-7 pt-3">{props.titulo}</h2>
      <p className="bg-blue-900 p-1 lg:text-xl"><b className="text-green-600 lg:text-xl">Descrição: </b>{props.descrição}</p>
      <p className=" bg-blue-900 p-1 py-5 lg:text-xl"><b className="text-green-600">Tecnologias: </b> {props.tecnologias}</p>
      <p className="flex gap-1 items-center justify-center bg-blue-900 p-1 pb-5 lg:text-xl"> <b className="text-green-600">Data da criação:</b> <CalendarBlank></CalendarBlank>{props.data}</p>
      <div className="flex gap-2 lg:text-xl">
      <a className="flex gap-1 items-center px-1 lg:p-1 text-md  justify-center text-green-600 animate-pulse rounded-full mx-auto mt-2 bg-black" target={"_blank"} href={props.repositorio}><GithubLogo></GithubLogo> Codigo do projeto</a>
      <a className="flex gap-1 items-center px-1  justify-center text-green-600 animate-pulse  rounded-full  mx-auto mt-2 bg-black" href={props.nome} target={"_blank"}><Eye></Eye>Link do projeto</a>
      </div>
    </div>
  )
}