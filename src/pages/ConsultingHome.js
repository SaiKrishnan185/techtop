import React from 'react'
import { ConsultCard } from '../components'

export const ConsultingHome = () => {
  return (
    <div className='pt-20 text-white'>
        <p className='md:w-full md:text-4xl text-2xl mb-10 p-2 text-center  font-semibold tracking-tight '>Consulting</p>
        <p className='md:px-20 p-8 text-left'>At Technonyms, we specialize in providing cutting-edge software development solutions that help businesses stay ahead of the competition. Our team of experienced professionals is dedicated to creating secure, reliable, and easy-to-use software for our customers. Whether you need an enterprise-grade application, a custom-made web application, or a mobile app, we can provide the right solution for your needs.</p>
        <div className='md:flex md:flex-row  md:gap-3 md:flex-wrap  justify-center md:mx-5 md:gap-x-20'>
            <ConsultCard head = "Content Tag" detail ="Detailed Content"/>
            <ConsultCard head = "Content Tag" detail ="Detailed Content"/>
            <ConsultCard head = "Content Tag" detail ="Detailed Content"/>
            <ConsultCard head = "Content Tag" detail ="Detailed Content"/>
        </div>
    </div>
  )
}
