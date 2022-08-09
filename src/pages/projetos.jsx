
import { ArrowBendUpLeft, CaretLeft, CaretRight, FileArrowDown } from 'phosphor-react'
import { useState } from 'react'
import { Header } from '../components/Header'
import { List1 } from './assets/Route/List1'
import { List2 } from './assets/Route/List2'

export function Projeto() {

  const [pageNumber, setPageNumber] = useState(1)

  return (
    <div className="bg-blue-500 h-full w-full pb-10 justify-center overflow-x-hidden pt-10">
      <Header></Header>
      <h1 className="mt-24 flex justify-center text-2xl text-yellow-500 font-bold border-b-4 p-1 w-[15rem] mx-auto border-cyan-500 mb-24 lg:text-5xl lg:w-[30rem]">
        Meus projetos
      </h1>
      <div className="content">
        <span className={pageNumber == 1? 'appeared' : 'disappeared'}> <List1></List1></span>
        <span className={pageNumber == 2? 'appeared' : 'disappeared'}> <List2></List2></span>
      </div>
      <footer className='mt-10 text-center '>
        <button className='btn rounded-l-2xl'
        onClick={pageNumber != 1 ?e => setPageNumber(pageNumber - 1): e => setPageNumber(1)}
        ><CaretLeft></CaretLeft></button>
        <span className='text-4xl text-purple-600 bg-black px-2 py-3 rounded-t-2xl rounded-b-2xl border-2 border-yellow-500'>
          {pageNumber}</span>
        <button className='btn rounded-r-2xl'
        onClick={e => setPageNumber(pageNumber + 1)}
        ><CaretRight></CaretRight></button>
      </footer>
    </div>
  )
}
