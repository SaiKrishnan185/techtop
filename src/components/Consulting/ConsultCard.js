import logo from "../../assets/logo.png"

export const ConsultCard = ({head,detail}) => {
  return (
    <div>
        
        <div className="max-w-xl bg-black border border-gray-200 rounded-lg flex flex-col justify-items-center items-center  shadow-xl shadow-rose-50 mb-8">
            <a href="/">
                <img className="rounded-t-lg h-64" src={logo} alt=""/>
            </a>
            <div className="p-5 flex flex-col justify-center items-center text-center">
                <a href="/">
                    <h5 className="mb-2 text-2xl font-bold text-white">{head}</h5>
                </a>
                <p className="mb-3 font-normal text-white">{detail}</p>
                <a href="/" className="max-w-sm inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
            </div>
        </div>

    </div>
  )
}
