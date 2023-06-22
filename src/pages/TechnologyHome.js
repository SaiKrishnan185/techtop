import { TechnoCard } from "../components"

export const TechnologyHome = () => {
  return (
    <div className='pt-20 text-white'>
        <p className='md:w-full md:text-4xl text-2xl mb-10 p-2 text-center  font-semibold tracking-tight '>Technology</p>
        <p className='md:px-20 p-8 text-center'>Driven by passion, ambition, and a commitment to excellence!</p>
        <div className='md:flex md:flex-row  md:gap-3 md:flex-wrap  justify-center md:mx-5 md:gap-x-20'>
            <TechnoCard head = "Noteworthy technology acquisitions 2019" detail ="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."/>
            <TechnoCard head = "Noteworthy technology acquisitions 2020" detail ="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." />
            <TechnoCard head = "Noteworthy technology acquisitions 2021" detail ="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." />
            <TechnoCard head = "Noteworthy technology acquisitions 2022" detail ="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." />
            <TechnoCard head = "Noteworthy technology acquisitions 2023" detail ="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." />
        </div>
    </div>
  )
}
