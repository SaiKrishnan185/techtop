import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"

export const Footer = () => {
  return (
    
    <footer className="bg-black text-white my-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <Link to="/" className="flex items-center mb-4 sm:mb-0">
                    <img src={logo} className="h-8 mr-3" alt="Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Technonyms</span>
                </Link>
                <div>
                    <h2>Get In Touch</h2>
                    <p className='text-xs'>Email</p>
                    <p className='text-xs'>Phone : 7034501233</p>
                </div>
                
                
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Technonyms</Link>. All Rights Reserved.</span>
        </div>
    </footer>
  )
}
