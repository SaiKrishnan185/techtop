import React from 'react'

export const ContactForm = () => {
  return (
    <div>
        <div className='w-full  h-screen  my-2 md:flex pt-12 justify-center items-center text-white '>
            <div className='md:wd-1/3'>
                <p className='md:text-4xl text-2xl mb-10 p-2 text-center font-semibold tracking-tight'>Connect With Us</p>
                <p className='text-md mb-10 p-2 text-center font-semibold tracking-tight'>Get in touch with Technonyms for software development inquiries, project inquiries, career opportunities and more!</p>
            </div>
            <div className="flex flex-col text-center justify-center w-full  sm:px-64">
                <form action="#" className="space-y-8">
                    <div>
                    <label for="subject" className="block mb-2 text-sm font-medium text-gray-100 ">Name</label>
                    <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Your Name" required />
                    </div>
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-100 ">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="name@gmail.com" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label for="message" className="block mb-2 text-sm font-medium text-gray-100 ">Your message</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave a message..."></textarea>
                    </div>
                    <button type="submit" className=" bg-white text-black py-3 px-5 text-sm font-medium text-center rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 ">Send message</button>
                </form>
            </div>
        </div>
    </div>
  )
}
