import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"

export const Footer = () => {
  return (
    
    <footer class="bg-gray-100 dark:bg-gray-900 my-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <Link to="/" class="flex items-center mb-4 sm:mb-0">
                    <img src={logo} class="h-8 mr-3" alt="Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Tech Noise</span>
                </Link>
                <div>
                    <h2>Get In Touch</h2>
                    <p className='text-xs'> Address</p>
                    <p className='text-xs'>Email</p>
                    <p className='text-xs'>Phone</p>
                </div>
                
                
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" class="hover:underline">NoName</Link>. All Rights Reserved.</span>
        </div>
    </footer>
  )
}
