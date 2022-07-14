import { GitCommit, GithubLogo, GitlabLogoSimple, LinkedinLogo } from "phosphor-react";
import { Header } from "../components/Header";
import { AiFillGithub} from "react-icons/ai"

export function Sobre(){
  return(
    <main className="bg-gradient-to-tr from-yellow-400 to-orange-400 flex-1 h-screen w-full lg:justify-around overflow-x-hidden pb-40 pt-20">
      <Header></Header>
      <div className="flex flex-col lg:flex-row items-center text-yellow-900 lg:justify-around">
      <section className="text-center items-center">
          <h1 className="mt-32 text-2xl mb-5 font-bold lg:text-4xl" >
            Matheus Cardoso</h1>
            <img className="rounded-full w-40 lg:w-64 mx-auto border-4 border-sky-500"
          src="https://avatars.githubusercontent.com/u/105732008?v=4"></img>
          <div className="flex justify-around font-bold text-xl lg:text-2xl mt-5">
          <a className="flex gap-1"
           href="https://www.linkedin.com/in/matheus-cardoso-026488244/"
          target={"_blank"}>
            <p className="bg-blue-400 text-white text-xl lg:text-2xl h-5 lg:h-6"><LinkedinLogo></LinkedinLogo></p><b className="text-sm lg:text-2xl">Linkedin</b></a>
          <a className="flex gap-1"
          href="https://github.com/MatheusCardosoc0"
          target={"_blank"}><p className="text-xl bg-black text-white h-5 lg:h-6 lg:text-2xl">
            <AiFillGithub></AiFillGithub>
            </p><b className="text-sm lg:text-2xl">Github</b></a>
          </div>
      </section>
      <section className="text-center">
      <h1 className="mt-24 text-2xl mb-8 lg:text-3xl font-bold">Sobre Mim</h1>
      <div className="w-[20rem] lg:w-[24rem] text-left flex flex-col gap-4 text-lg p-2 lg:text-2xl ">
        <p >
          Estudo sobre rogramação desde 2021, atualmente estou focado nas tecnlogias javascript para desenvolvimento front-end e futuramente full-stack, estou focado em me aprimorar principalmente no react-js.
        </p>
        <p>
          Me considero alguém com um bom auto controle, otimista, e dedicado, me forço a cada dia me melhorar cada vez mais.
        </p>
        <p>
          Procuro por uma vaga de estagio para desenvolvedor front-end.
        </p>
      </div>
      </section></div>
    </main>
  )
}