import { useState } from "react";
import { Link , NavLink } from "react-router-dom"
import logo from "../assets/logo.png"

export const Header = () => {

  const activeClass = "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 ";
  const inActiveClass = "block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
  
  const [hidden, setHidden] = useState(true);

  return (
    <div>
      
<nav className="fixed w-full z-20 top-0 left-0 border-gray-200 bg-black/[0.8] text-white dark:bg-gray-800 dark:border-gray-700">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="/" className="flex items-center">
        <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap ">Technonyms</span>
    </Link>
    <button onClick={ () => setHidden(!hidden)} data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
    <div className={` ${hidden ? "hidden" : ""}  w-full md:block md:w-auto`} id="navbar-solid-bg">
      <ul className="flex flex-col font-medium mt-4 rounded-lg bg-black md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li>
          <NavLink to="/" className={({isActive}) => isActive ? activeClass : inActiveClass} >Home</NavLink>
        </li>
        <li>
          <NavLink to="/Consulting" className={({isActive}) => isActive ? activeClass : inActiveClass} >Consulting</NavLink>
        </li>
        <li>
          <NavLink to="/Technology" className={({isActive}) => isActive ? activeClass : inActiveClass} >Technology</NavLink>
        </li>
        <li>
          <NavLink to="/c" className={({isActive}) => isActive ? activeClass : inActiveClass} >About Us</NavLink>
        </li>
        <li>
          <NavLink to="/Contact" className={({isActive}) => isActive ? activeClass : inActiveClass} >Contact Us</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}
