
export const TechnoCard = ({head,detail,card}) => {
  return (
    <div className=' rounded-2xl border-l border-r border-b md:border-t md:max-w-full w-full h-full md:mx-20  mb-2 md:flex bg-gray-900/[0.3] shadow-md shadow-gray-800 '>  
          <img className="rounded-t-2xl md:rounded-2xl  w-full md:w-1/3 h-72 bg-contain" src={card} alt="" />
          <div className="p-5 flex flex-col text-center items-center justify-center  rounded-b-2xl md:w-3/4">
              <h5 className="mb-2 md:h-8 text-2xl font-bold tracking-tight text-white">{head}</h5>
              <p className="mb-3 md:h-36  text-sm text-gray-400 tracking-tight md:flex md:justify-center md:items-center">{detail}</p>
          </div>
    </div>
  )
}
