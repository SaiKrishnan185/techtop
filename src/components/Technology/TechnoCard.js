
export const TechnoCard = ({head,detail,card}) => {
  return (
    <div className=' rounded-2xl border-l border-r border-b md:max-w-md w-full h-full  mb-2 bg-gray-900/[0.3] shadow-md shadow-gray-800 ' >  
          <img className="rounded-t-2xl  w-full h-72 bg-contain" src={card} alt="" />
          <div className="p-5 flex flex-col text-center items-center justify-center  rounded-b-2xl">
              <h5 className="mb-2 md:h-8 text-2xl font-bold tracking-tight text-white">{head}</h5>
              <p className="mb-3 md:h-36  text-sm text-gray-500 tracking-tight">{detail}</p>
          </div>
    </div>
  )
}
