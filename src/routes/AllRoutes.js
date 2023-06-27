import { Routes, Route } from "react-router-dom";
import { ConsultingHome, Home, TechnologyHome } from "../pages";

import bgTest from "../assets/bgtest.mp4"
import poster from "../assets/poster.jpg"

export const AllRoutes = () => {
  return (
    <div>
        <video playsinline autobuffer  autoPlay muted loop  className="background-video h-screen" poster={poster}>
        <source src={bgTest} type="video/mp4" />
        </video>
        <Routes>
            <Route path="/" element={ <Home/>} />
            <Route path="/Consulting" element={< ConsultingHome/>} />
            <Route path="/Technology" element={< TechnologyHome/>} />
        </Routes>
    </div>
  )
}
