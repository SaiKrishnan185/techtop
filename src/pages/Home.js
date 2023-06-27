import { ConnectPage, Industry, Intro, Service, TechPage } from "../components"



export const Home = ({serviceList}) => {
  return (
    <div className="">
        
        <Intro />
        <Service/>
        <Industry />
        <TechPage/>
        <ConnectPage/>
    </div>
  )
}
