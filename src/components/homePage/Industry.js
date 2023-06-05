import React from 'react'
import { IndustryCard } from './IndustryCard'

export const Industry = () => {
  return (
    <div className='bg-black pt-8 pb-20 text-white'>
        <p className='md:text-4xl text-2xl mb-10 p-2 text-center font-semibold tracking-tight '>Industries We Work With</p>
        <div className='md:flex md:flex-row  md:gap-3 md:flex-wrap justify-center md:mx-5 text-center'>
            <IndustryCard head="Commerce" detail="Reimagining commerce through future-proof solutions that meet the shifting consumption patterns driven by consumer craving for digital and contactless ways of shopping."/>
            <IndustryCard head="BFSI" detail="ROI-driven digital solutions for building agile models to deter fraud, automate transaction-based processes, and reimagine how manual tasks are completed in terms of security and scalability."/>
            <IndustryCard head="Education" detail="One-stop destination crafted to function in tandem with the latest institutional practices optimising the use and implementation of the education curriculum."/>
            <IndustryCard head="Payments" detail="Robust payment solutions leveraging next generation technology for rapid business development, higher operational efficiencies, and improved service innovations."/>
        </div>
    </div>
  )
}
