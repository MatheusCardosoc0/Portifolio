
import { CardsProject } from "../components/CardsProject";
import { Header } from "../components/Header";

export function Projeto(){
  return(
    <div className="bg-blue-500 h-full w-full pb-10 justify-center overflow-x-hidden pt-10">
      <Header></Header>
      <h1 className="mt-24 flex justify-center text-2xl text-yellow-500 font-bold border-b-4 p-1 w-[15rem] mx-auto border-cyan-500 mb-24 lg:text-5xl lg:w-[30rem]">Meus projetos</h1>
      <div className="flex flex-wrap justify-center gap-10 max-w-[80rem] mx-auto">
        <CardsProject titulo="See you to" 
        nome="https://tubular-churros-577f3a.netlify.app" descrição="Esta é uma plataforma para hospedar e assistir videos, com o foco em aulas, marca ficticia criada por mim." tecnologias="Fisso utilizando: react typescript | graphql | graphcms | tailwindcss | apollo | vite."
        data="24/06/2022"
        repositorio="https://github.com/MatheusCardosoc0/Documento/tree/master/vite-project">
        </CardsProject>
        <CardsProject titulo="Formulário simples"
        nome="https://matheuscardosoc0.github.io/site-de-cadastramento/" descrição="Este é um formulario simples, com validações, e é responsivo." tecnologias="Fisso utilizando: javascript | html | css."
        data="01/06/2022"
        repositorio="https://github.com/MatheusCardosoc0/site-de-cadastramento"
        ></CardsProject>
        <CardsProject titulo="Chimpânia"
        nome=" https://matheuscardosoc0.github.io/site1/" descrição="Um site simples de apresentação empresarial, com uma empresa ficticia criada por mim." tecnologias="Fisso utilizando: javascript | html | css."
        data="28/05/2022"
        repositorio="https://github.com/MatheusCardosoc0/site1"></CardsProject>
       <CardsProject titulo="Site das mil cores"
        nome="https://clever-beignet-7dec86.netlify.app" descrição="Criei este site para praticar manipulção de cores com css e praticar animações simples." tecnologias="Fisso utilizando: javascript | html | css."
       data="31/05/2022"
       repositorio="https://github.com/MatheusCardosoc0/site-das-mil-cores"></CardsProject>
       <CardsProject titulo="Este site"
        nome="" descrição="Meu site portifolio contendo todos os meus projetos, experiências e habilidades adiquiridas por mim." data="08/07/2022" repositorio="https://github.com/MatheusCardosoc0/Documento/tree/master/Curriculum-vitae"
       tecnologias="Fisso utilizando reactjs | vite | tailwindcss"></CardsProject>
        <CardsProject titulo="Formulário 2.0"
        nome="https://sprightly-lollipop-1825ec.netlify.app" descrição="Um modelo de formulário um pouco mais avançado, com validações e captura de dados." data="04/07/2022" repositorio="https://github.com/MatheusCardosoc0/Documento/tree/master/Formul%C3%A1rio%202.0"
       tecnologias="Fisso utilizando reactjs | vite | tailwindcss"></CardsProject>
      </div>
      </div>

      
  )
}