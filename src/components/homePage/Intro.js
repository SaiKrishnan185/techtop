import frontpage from "../../assets/frontpage.jpg"
import { Link } from 'react-router-dom'

export const Intro = () => {
  return (
    <div style={{ backgroundImage: `url(${frontpage})` }} className="h-screen bg-cover bg-no-repeat flex justify-center items-center">
      
      <div className="md:w-3/4 min-w-fit md:h-2/4 h-fit p-6 bg-black/[0.8]  border-white/[0.1] border-2 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center content-center">
          <h5 className="text-4xl mb-10 p-2 text-center font-semibold tracking-tight text-white dark:text-white">Leverage the data to <br></br>performance & strategic<br></br> advantage with AI</h5>
          <p className="text-1xl mb-3 text-center font-normal text-white dark:text-gray-400">Integrated organisational strategy and tested AI use case solutions to help<br></br> you quickly pilot and develop your AI initiatives</p>
          <Link to="/"><button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Explore More</button></Link>
      </div>

    </div>
  )
}
