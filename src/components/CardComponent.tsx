
const CardComponent = ({src}:{src:string}) => {
  return (
    <img className='p-4 m-2 w-[500px] h-[500px] rounded object-cover' src={src}  loading="lazy"/>

  )
}

export default CardComponent
