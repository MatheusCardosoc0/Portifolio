export function CardHability(props){
  return(
    <div>
      <button className=" hover:bg-gradient-to-t rounded from-purple-600 to-orange-500 p-2"
       onClick={e => props.click(props.text)}>
        <img className="w-[6rem] lg:w-[8rem]"
         src={props.image}></img>
      </button>
    </div>
  )
}