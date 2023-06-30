import { TechnoCard } from "../components"

import softMain from "../assets/softMain.jpg"
import mobile from "../assets/mobile.jpg"
import custom from "../assets/custom.jpg"

export const TechnologyHome = () => {
  return (
    <div className='pt-20 text-white'>
        <p className='md:w-full md:text-4xl text-2xl mb-10 p-2 text-center  font-semibold tracking-tight '>Technology</p>
        <p className='md:px-20 p-8 text-center'>Driven by passion, ambition, and a commitment to excellence!</p>
        <div className='flex md:flex-row flex-col md:w-full px-10  sm:px-28 md:px-2 gap-3 md:flex-wrap justify-center'>
            <TechnoCard head = "Content Tag" detail ="Detailed Content" card={softMain}/>
            <TechnoCard head = "Content Tag" detail ="Detailed Content" card={mobile} />
            <TechnoCard head = "Content Tag" detail ="Detailed Content" card={custom} />
        </div>
    </div>
  )
}
