import { ConnectPage, Industry, Intro, Service, TechPage } from "../components"

import bgTest from "../assets/bgtest.mp4"

export const Home = ({serviceList}) => {
  return (
    <div className="">
        <video autoPlay muted loop className="background-video h-screen">
        <source src={bgTest} type="video/mp4" />
        </video>
        <Intro />
        <Service/>
        <Industry />
        <TechPage/>
        <ConnectPage/>
    </div>
  )
}
