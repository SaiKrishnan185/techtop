// import frontpage from "../../assets/frontpage.jpg"

// import { Link } from 'react-router-dom'

export const Intro = () => {
  return (
    // <div style={{ backgroundImage: `url(${frontpage})` }} className="h-screen bg-cover bg-no-repeat bg-center flex justify-center items-center">
    <div className="h-screen flex justify-center items-center">
      <div className="md:w-3/4 md:mx-20 min-w-fit md:h-2/4 h-fit p-6  mb-8    flex flex-col justify-around items-center">
          <h5 className="text-5xl mb-10 p-2 text-center font-semibold tracking-tight text-white  bg-transparent">The Future of Software Development:<br></br> Technonyms</h5>
          <p className=" mb-3 md:text-left font-normal text-white bg-transparent">Technonyms is a software development business that specializes in creating cutting-edge software solutions for the future. Our team of experts is dedicated to staying up-to-date on the latest trends in software development so that our clients can stay ahead of their competition and capitalize on the newest technologies. We offer comprehensive services ranging from website creation to software application development to help you create the innovative solutions your business needs to succeed.</p>
          {/* <Link to="/"><button type="button" className="text-white bg-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Explore More</button></Link> */}
      </div>

    </div>
  )
}
