import { CardsProject } from "../../../components/CardsProject";

import form2 from '../../../images/formulario2.0.png'
import chimp from '../../../images/chimp.png'
import cor from '../../../images/cor.png'
import vid from '../../../images/vid.png'
import fsimp from '../../../images/fsimp.png'

export function List1(){
  return(
    <>
      <CardsProject
          titulo="See you to"
          nome="https://tubular-churros-577f3a.netlify.app"
          descrição="Esta é uma versão modificada da aplicação criada no ignite lab, da Rocketseat, que acompanhei no youtube e modifiquei, se trata de uma plataforma para hospedar e assistir videos, com o foco em aulas, marca ficticia criada por mim."
          tecnologias="Fisso utilizando: react typescript | graphql | graphcms | tailwindcss | apollo | vite."
          data="24/06/2022"
          repositorio="https://github.com/MatheusCardosoc0/Documento/tree/master/vite-project"
          image={vid}
        ></CardsProject>
        <CardsProject
          titulo="Formulário simples"
          nome="https://matheuscardosoc0.github.io/site-de-cadastramento/"
          descrição="Este é um formulario simples, com validações, e é responsivo."
          tecnologias="Fisso utilizando: javascript | html | css."
          data="01/06/2022"
          repositorio="https://github.com/MatheusCardosoc0/site-de-cadastramento"
          image={fsimp}
        ></CardsProject>
        <CardsProject
          titulo="Chimpânia"
          nome=" https://matheuscardosoc0.github.io/site1/"
          descrição="Um site simples de apresentação empresarial, com uma empresa ficticia criada por mim."
          tecnologias="Fisso utilizando: javascript | html | css."
          data="28/05/2022"
          repositorio="https://github.com/MatheusCardosoc0/site1"
          image={chimp}
        ></CardsProject>
        <CardsProject
          titulo="Site das mil cores"
          nome="https://clever-beignet-7dec86.netlify.app"
          descrição="Criei este site para praticar manipulção de cores com css e também praticar animações simples."
          tecnologias="Fisso utilizando: javascript | html | css."
          data="31/05/2022"
          repositorio="https://github.com/MatheusCardosoc0/site-das-mil-cores"
          image={cor}
        ></CardsProject>
    </>
  )
}