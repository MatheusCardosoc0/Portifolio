import { Header } from "../components/Header";

export function Experiencia(){

  

  return(
    <div className="bg-gradient-to-tr from-emerald-400 to-teal-500 flex-1 h-screen w-full pt-20 ">
      <Header></Header>
      <div className="">
      <h1 className="mt-16 flex justify-center font-bold text-4xl text-teal-900 drop-shadow-[3px_1px_0px_rgba(212,175,55,30.35)]">Minha Experiência</h1>
      </div>
      <div className="text-center mt-40">
        <h2 className="text-6xl">Não possuo experiência profissional ainda...</h2>
        
      </div>
    </div>
  )
}