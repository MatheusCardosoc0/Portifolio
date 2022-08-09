import { CardsProject } from "../../../components/CardsProject";
import port from '../../../images/port.png'
import form2 from '../../../images/formulario2.0.png'
import cont from '../../../images/contador.png'
import calc from '../../../images/Calc.png'

export function List2(){
  return(
    <>
     <CardsProject
          titulo="Este site"
          nome=""
          descrição="Meu site portifolio contendo todos os meus projetos, experiências e habilidades adiquiridas por mim."
          data="08/07/2022"
          repositorio="https://github.com/MatheusCardosoc0/Documento/tree/master/Curriculum-vitae"
          tecnologias="Fisso utilizando reactjs | vite | tailwindcss"
          image={port}
        ></CardsProject>
        <CardsProject
          titulo="Formulário 2.0"
          nome="https://sprightly-lollipop-1825ec.netlify.app"
          descrição="Um modelo de formulário um pouco mais avançado, com validações e captura de dados."
          data="04/07/2022"
          repositorio="https://github.com/MatheusCardosoc0/Documento/tree/master/Formul%C3%A1rio%202.0"
          tecnologias="Fisso utilizando reactjs | vite | tailwindcss"
          image={form2}
        ></CardsProject>
        <CardsProject
          titulo="Contador"
          nome="https://contador-matheuscardosoc.netlify.app"
          descrição="Um Contador simples, realiza as operações basicas conforme configurado pelo usuario e possui uma função de timer."
          data="23/07/2022"
          repositorio="https://github.com/MatheusCardosoc0/Documento/tree/master/Contador"
          tecnologias="Fisso utilizando reactjs | vite | css | react-hooks"
          image={cont}
        ></CardsProject>
        <CardsProject
          titulo="Calculadora"
          nome="https://calculadora-matheuscardosoc.netlify.app"
          descrição="Uma calculadora que realiza as operações basicas "
          data="26/07/2022"
          repositorio="https://github.com/MatheusCardosoc0/Documento/tree/master/Calculadora"
          tecnologias="Fisso utilizando reactjs | vite | css | react-hooks"
          image={calc}
        ></CardsProject></>
  )
}