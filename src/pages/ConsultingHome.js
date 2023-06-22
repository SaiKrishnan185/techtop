import React from 'react'
import { ConsultCard } from '../components'

export const ConsultingHome = () => {
  return (
    <div className='pt-20 text-white'>
        <p className='md:w-full md:text-4xl text-2xl mb-10 p-2 text-center  font-semibold tracking-tight '>Consulting</p>
        <p className='md:px-20 p-8 text-left'>Driven by passion, ambition, and a commitment to excellence! Our team of IT service professionals thrives on delivering exceptional solutions in automation and web development. We understand that embracing technology is a continuous journey, where sharing knowledge and experiences plays a crucial role in achieving success. In this ever-changing digital landscape, businesses are constantly evolving, and we exist to help you capitalize on data-driven opportunities. Tech Noise is dedicated to staying at the forefront of IT services, working closely with the market to understand how technology impacts businesses. Let us share our wealth of knowledge and experience with you, helping you design and build future-proof products, streamline processes through automation, and enhance your digital capabilities. With our proven track record, industry insights, and execution power, we are here to ensure your success in this dynamic IT landscape!</p>
        <div className='md:flex md:flex-row  md:gap-3 md:flex-wrap justify-center md:mx-5 '>
            <ConsultCard />
            <ConsultCard />
            <ConsultCard />
            <ConsultCard />
        </div>
    </div>
  )
}
