import { CardsProject } from "../../../components/CardsProject";

import ecommerce from '../../../images/e-commerceMerge.png'
import filmCache from '../../../images/merge.png'
import annuthingsComplete from '../../../images/annuthingsComplete.png'
import MergeImage from '../../../images/MergeImage.png'

export function List3(){
  return(
    <>
      <CardsProject
          titulo="E-commerce simples"
          nome="https://ecommerce-eta-coral.vercel.app/"
          descrição="Uma estrutura de loja virtual simples com amostra de produtos e sistema de carrinho inteligente"
          tecnologias="Fisso utilizando: next-js| sanity | context-api"
          data="13/10/2022"
          repositorio="https://github.com/MatheusCardosoc0/ecommerce"
          image={ecommerce}
        ></CardsProject>
         <CardsProject
          titulo="FilmCache"
          nome="https://filmcache.netlify.app/"
          descrição="Uma amostra dos 20 filmes em lançamento no momento, com a capacidade de armazena los em localStorage para salvar seus nomes dentro do site"
          tecnologias="Fisso utilizando: react-typescript | conexão com the movie db | tailwindcss"
          data="27/09/2022"
          repositorio="https://github.com/MatheusCardosoc0/FilmCache/tree/main/filmCacheWeb"
          image={filmCache}
        ></CardsProject>
         <CardsProject
          titulo="annouThings"
          nome="não consegui fazer deploy do back-end"
          show={true}
          descrição="Estrutura de postagem e visualização de anúncios"
          tecnologias="Fisso utilizando: react-typescript | prisma com sqlite | tailwindcss | node js"
          data="23/09/2022"
          repositorio="https://github.com/MatheusCardosoc0/annuthings"
          image={annuthingsComplete}
        ></CardsProject>
        <CardsProject
          titulo="annouThings"
          nome="não consegui fazer deploy do back-end"
          show={true}
          descrição="Projeto ensinado na ignite lab da roquecktseat que se trata de um projeto com o objetivo de encontrar duplas para jogos online com a versão web criando os anúncios e a versão mobile servindo para vizualiza los"
          tecnologias="Fisso utilizando: react-typescript | prisma com sqlite | tailwindcss | react native | node js"
          data="18/09/2022"
          repositorio="https://github.com/MatheusCardosoc0/projectESPORTS"
          image={MergeImage}
        ></CardsProject>
    </>
  )
}