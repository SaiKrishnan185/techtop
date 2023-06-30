import { Link } from "react-router-dom"

export const ConsultCard = ({serviceLink,head,detail,card}) => {
  return (
    <div className=' rounded-2xl border-l border-r border-b md:border-t md:max-w-full w-full h-full md:mx-20  mb-2 md:flex bg-gray-900/[0.3] shadow-md shadow-gray-800 '>  
          <img className="rounded-t-2xl md:rounded-2xl  w-full md:w-1/3 h-72 bg-contain" src={card} alt="" />
          <div className="p-5 flex flex-col text-center items-center justify-center  rounded-b-2xl md:w-3/4">
              <h5 className="mb-2 md:h-8 text-2xl font-bold tracking-tight text-white">{head}</h5>
              <p className="mb-3 md:h-36  text-sm text-gray-400 tracking-tight md:flex md:justify-center md:items-center">{detail}</p>
              <Link to={serviceLink} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </Link>
          </div>
    </div>
  )
}
