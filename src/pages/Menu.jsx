import { Link } from "react-router-dom";

export function Menu(){
  return(
     <div className="bg-slate-800 h-screen w-full flex  flex-col text-center gap-8 items-center text-3xl text-yellow-500 font-bold overflow-x-hidden">
     <Link className='mt-40' to="/">Sobre</Link>
     <Link className='' to="/projeto">Projetos</Link>
     <Link className='' to="/habilidades">Habilidades</Link>   
  </div>)
}