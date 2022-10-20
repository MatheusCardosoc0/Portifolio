import { CalendarBlank, Eye, GithubLogo } from "phosphor-react";
import { useState } from "react";

export function CardsProject(props){

  const [classes, setClasses] = useState('hidden')
  const [showLink, setShowLink] = useState(!props.show)


  return(
    <div className=" w-[20rem] lg:w-[30rem] bg-sky-400 p-2 flex flex-col font-bold text-yellow-500">
      <div className="items-center justify-center text-center">
        {classes == 'hidden'?<button onClick={e => setClasses('block')}
         className="bg-yellow-500 font-bold hover:bg-teal-600 items-center p-2  text-black hover:text-blue-700 rounded-t-3xl text-xl">
          Ver Descrição do projeto
        </button> :
        <button onClick={e => setClasses('hidden')}
        className="bg-red-600 font-bold hover:bg-indigo-900 items-center p-2  text-black hover:text-orange-700 rounded-t-3xl text-xl">
         Ocultar descrição
       </button>}
        
          <h2 className="flex justify-center text-xl lg:text-3xl bg-blue-900 text-yellow-500 pb-7 pt-3">{props.titulo}</h2>
      </div>
      <section>
        <img className="w-[20rem] lg:w-[30rem]" src={props.image}></img>
      </section>
     
      <section className={classes}>
      
      <p className="bg-blue-900 p-1 lg:text-xl"><b className="text-green-600 lg:text-xl">Descrição: </b>{props.descrição}</p>
      <p className=" bg-blue-900 p-1 py-5 lg:text-xl"><b className="text-green-600">Tecnologias: </b> {props.tecnologias}</p>
      <p className="flex gap-1 items-center justify-center bg-blue-900 p-1 pb-5 lg:text-xl"> <b className="text-green-600">Data da criação:</b> <CalendarBlank></CalendarBlank>{props.data}</p> 
      </section>

      <div className="flex gap-2 lg:text-xl">
      <a className="flex gap-1 items-center px-1 lg:p-1 text-md  justify-center text-green-600 animate-pulse rounded-full mx-auto mt-2 bg-black" target={"_blank"} href={props.repositorio}>
        <GithubLogo></GithubLogo> Codigo do projeto
      </a>
     
      {showLink && <a className="flex gap-1 items-center px-1  justify-center text-green-600 animate-pulse  rounded-full  mx-auto mt-2 bg-black" href={props.nome} target={"_blank"}><Eye></Eye>
      Visualizar
      </a>}
      </div>
    </div>
  )
}