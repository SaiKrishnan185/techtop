import { ConnectPage, Industry, Intro, Service, TechPage } from "../components"

export const Home = ({serviceList}) => {
  return (
    <div>
        <Intro />
        <Service/>
        <Industry />
        <TechPage/>
        <ConnectPage/>
    </div>
  )
}
