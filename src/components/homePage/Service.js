import team from "../../assets/team.jpg"
import web from "../../assets/web.jpg"
import test from "../../assets/test.jpg"
import softDev from "../../assets/softDev.jpg"
import softMain from "../../assets/softMain.jpg"
import mobile from "../../assets/mobile.jpg"
import custom from "../../assets/custom.jpg"
import cloud from "../../assets/cloud.jpg"

import { ServiceCard } from './ServiceCard'

export const Service = () => {
  return (
    <div className='md:flex md:flex-row md:flex-wrap md:justify-between items-center pt-10 md:py-10 justify-center bg-black text-white'>
        <div className='flex md:flex-row flex-col md:w-full px-10  sm:px-28 md:px-2 gap-3 md:flex-wrap justify-center'>
            <p className='md:w-full md:text-4xl text-2xl mb-10 p-2 text-center font-semibold tracking-tight '>Business domains we operate in</p>
            <ServiceCard serviceLink="/a" card={web} head="Web Application Development" detail="We create web-based applications that leverage the latest technologies and help your users interact with your business."/>
            <ServiceCard serviceLink="/a" card={test} head="Software Testing" detail="Our testing service ensures that your software performs reliably,meeting industry standards."/>
            <ServiceCard serviceLink="/a" card={softDev} head="Software Development Solutions" detail="We are a software development business dedicated to creating innovative and unique software solutions for our clients. Our experienced team of developers will work closely with you to create custom software applications tailored to your specific needs. From concept to completion, our team will provide quality software applications to help you meet your business objectives."/>
            <ServiceCard serviceLink="/a" card={softMain} head="Software Maintenance" detail="We provide support and maintenance service to ensure that your software runs smoothly."/>
            <ServiceCard serviceLink="/a" card={mobile} head="Mobile Application Development" detail="We help you to create a mobile application that enhance engagement with your customers and increase brand loyalty."/>
            <ServiceCard serviceLink="/a" card={custom} head="Custom Software Development" detail="Software Development business provides innovative, custom software solutions tailored to meet the specific needs of each client. Our team of experienced developers is dedicated to creating high-quality, reliable software that is efficient, secure, and easy to maintain. We provide a full range of software development services, from design and development to deployment and maintenance."/>
            <ServiceCard serviceLink="/a" card={cloud} head="Cloud Computing Services" detail="Our cloud computing services help you to optimize your business processes to improve data security and reduce IT costs."/>
        </div>
    </div>
  )
}
