import { Link } from "react-router-dom"
import connect from "../../assets/connect.jpg"

export const ConnectPage = () => {
  return (
    <div style={{ backgroundImage: `url(${connect})` }} className="mt-10 h-96 bg-cover bg-center  md:pl-5 p-1 flex items-center justify-center">

      
      <div className="w-full md:w-2/5 p-4 text-center bg-white/[0.1] border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-3xl font-bold text-white dark:text-white">Connect With Us</h5>
          <p className="mb-5 text-base text-white sm:text-lg dark:text-gray-400">Lets share our ideas.</p>
          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <Link to="/" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                  <div className="text-left">
                      <div className="-mt-1 font-sans text-sm font-semibold">Contact Us</div>
                  </div>
              </Link>
          </div>
      </div>

    </div>
  )
}
