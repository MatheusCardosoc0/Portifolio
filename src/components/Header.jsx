import { ArrowArcRight, ArrowCircleUp } from "phosphor-react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

export function Header(){
  var Color = 'bg-indigo-700 rounded-2xl px-2 py-1 animate-pull'

  var returningHeader = "fixed mt-[50rem] m-auto ml-48 text-5xl animate-bounce "

  
  return(
    <div className="p-5 bg-slate-800 text-yellow-500 text-sm fixed w-screen top-0" id="header">
      <header className="flex justify-around">
        <div className="flex flex-col">
          <strong className="lg:text-3xl text-xl w-[10rem] lg:w-[30rem]">Site sempre atualizado</strong>
        </div>
        <div className="gap-5 items-center hidden lg:flex lg:text-xl ">
        <Link className={location.href == 'http://localhost:3000/'? Color : ''} to="/">Sobre</Link>
        <Link className={location.href.includes('projeto')? Color : ''}to="/projeto">Projetos</Link>
        <Link className={location.href.includes('experiencia')? Color : ''} to="/experiencia">Experiência</Link>
        <Link className={location.href.includes('habilidades')? Color : ''} to="/habilidades">Habilidades</Link>
        </div>
        <div className="lg:hidden hover:bg-purple-700 rounded-full hover:p-2 hover:animate-pull">
        <Link to="/menu" className="text-4xl hover:text-yellow-500 "><AiOutlineMenu></AiOutlineMenu></Link>
        </div>
      </header>
    </div>
  )
}