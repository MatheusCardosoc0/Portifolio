import { CardHability } from '../components/CardHability'
import { Header } from '../components/Header'
import React from './assets/img/React.png'
import Html from './assets/img/html.png'
import Css from './assets/img/css.png'
import Js from './assets/img/js.png'
import { useState } from 'react'

export function Habilidades() {
  const [descrip, setDescrip] = useState('')

  return (
    <div className=" bg-black flex-1 h-full w-full pb-10 pt-10 lg:h-screen">
      <Header></Header>
      <div className="flex flex-col text-center gap-10">
        <h1 className="mt-20 text-3xl lg:text-5xl text-teal-600 font-bold ">
          Minhas habilidades
        </h1>
        <h3 className='text-teal-500 text-md lg:text-3xl' >
          Clique em algum icone para ver a descrição minha para tal tecnologia aprendida.</h3>
      </div>
      <section className='mt-40 lg:flex lg:justify-between'>
        <div className="grid grid-cols-2 w-[15rem] lg:w-[25rem] m-auto">
          <CardHability click={setDescrip} text="Comecei a estudar javascript em março de 2022, desde lá aprendi a criar funções, arrow functions, logica da programação orientada a objetos, manipulação do DOM." image={Js}></CardHability>
          <CardHability click={setDescrip} text="Comecei a estudar o react em maio de 2022, desde lá aprendi alguns hooks, a usar jsx, componentização a criar rotas e estados." image={React}></CardHability>
          <CardHability
          click={setDescrip} text="Comecei a estudar html em janeiro de 2022, aprendi a usar as tags da tecnologia, a função da maioria delas, por fim venho melhorando cada vez mais em sua semântica."
           image={Html}></CardHability>
          <CardHability click={setDescrip} text="Comecei a estudar o css em janeiro de 2022, aprendi a utiliza-lo, a criar variaveis, a maioria das estilizações basicas, e algumas animações."
           image={Css}></CardHability>
        </div>
        <div className='text-yellow-500 m-auto text-center mt-20 w-[15rem] bg-slate-900 p-2 lg:p-3 lg:text-xl lg:w-[22rem]'>
          {descrip}</div>
      </section>
    </div>
  )
}
