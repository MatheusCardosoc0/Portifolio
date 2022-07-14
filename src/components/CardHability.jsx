export function CardHability(props){
  return(
    <div className="flex items-center mt-40">
      <p className="bg-violet-700 rounded-full p-1 border-4 border-yellow-500 font-bold text-yellow-500 text-2xl">{props.name}</p>
      <p className="font-bold text-yellow-500 text-3xl">:</p>
      <p className="bg-purple-400 p-1 text-xl rounded-md text-purple-900 border-2 border-violet-800 max-w-[40rem]">{props.descrição}</p>
    </div>
  )
}