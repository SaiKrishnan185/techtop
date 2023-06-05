import React from 'react'
import team from "../../assets/team.jpg"
import { ServiceCard } from './ServiceCard'

export const Service = () => {
  return (
    <div className='md:flex md:flex-row-reverse flex-col md:flex-wrap md:justify-between items-center pt-10 md:m-10 justify-center'>
        <div className='md:w-3/12'>
            <img src={team} alt="Team" />
        </div>
        <div className='md:flex md:flex-row flex-col w-full md:w-4/6 md:gap-3 md:flex-wrap justify-center '>
            <p className='md:w-full md:text-4xl text-2xl mb-10 p-2 text-center font-semibold tracking-tight '>Simplifying the Complex with Integrated
Cutting-edge Consulting Services</p>
            <ServiceCard serviceLink="/a" head="Domain independent AI consulting" detail="Explore new business dimensions to design and construct advanced AI driven solutions and products."/>
            <ServiceCard serviceLink="/b" head="Commerce" detail="Ecommerce retailers are growing to be more reliant on the current technologies to meet their present challenges" />
            <ServiceCard serviceLink="/c" head="Digital transformation consulting" detail="Own the future of cloud-native landscape by solving the problems native to the cloud." />
        </div>
    </div>
  )
}
