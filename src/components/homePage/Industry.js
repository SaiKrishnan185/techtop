import React from 'react'
import { IndustryCard } from './IndustryCard'
// import demoFile from "../../assets/finonyms.mp4"

export const Industry = () => {
  return (
    <div className='bg-gray-800/[0.2]  pb-12 text-white h-screen flex flex-col justify-around items-center' >
        <p className='md:text-4xl text-2xl mb-10 p-2 text-center font-semibold tracking-tight '>Paying attention</p>

        {/* <video className=' md:w-screen md:h-full' autoPlay loop muted>
          <source src={demoFile} type='video/mp4' />
        </video> */}

        <div className='md:flex md:flex-row  md:gap-3 md:flex-wrap justify-between md:mx-5 text-center'>
            <IndustryCard head="Powerful Technology Solutions" detail="Technonyms provides powerful technology solutions for software development, offering cutting-edge solutions to help companies build and manage their software applications. Our experienced and knowledgeable team of developers are experts in developing custom software solutions tailored to each customer's unique needs, leveraging the latest technologies and industry-leading standards. Whether you are looking for a simple website or a complex, large-scale application, Technonyms provides powerful technology solutions to help your organization succeed."/>
            <IndustryCard head="Technonyms Software Development" detail="Technonyms Software Development is a software development business that specializes in providing custom software solutions for businesses. Our team of experienced developers provide high quality, cost-effective solutions while ensuring customer satisfaction. We strive to produce innovative and reliable software applications that are tailored to your business's specific needs. Our services include custom software development, software integration, cloud-based solutions, maintenance, and more."/>
            <IndustryCard head="Tech Solutions by Technonyms" detail="Technonyms' Tech Solutions by Technonyms is a software development service that provides innovative technology solutions tailored to meet the diverse needs of businesses. From custom software applications and web development to mobile development and cloud infrastructure, Technonyms' professional team of software developers and engineers will work with you to develop custom solutions for your business. With a focus on quality, scalability, and efficiency, Technonyms' Tech Solutions will help you achieve higher levels of success."/>
        </div>
    </div>
  )
}
