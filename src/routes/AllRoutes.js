import { Routes, Route } from "react-router-dom";
import { ConsultingHome, DetailSection, Home, TechnologyHome } from "../pages";

import bgTest from "../assets/bgtest.mp4"
import poster from "../assets/poster.jpg"
import { ContactHome } from "../pages/ContactHome";

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
            <Route path="/Contact" element={< ContactHome/>} />

            <Route path ="/WebDevelopment" element ={< DetailSection head="Web Application Development"/>} />
            <Route path ="/SoftwareTesting" element ={< DetailSection head="Software Testing"/>} />
            <Route path ="/SoftwareDevelopment" element ={< DetailSection head="Software Development Solutions"/>} />
            <Route path ="/SoftwareMaintenance" element ={< DetailSection head="Software Maintenance"/>} />
            <Route path ="/MobileApplicationDevelopment" element ={< DetailSection head="Mobile Application Development"/>} />
            <Route path ="/CustomSoftwareDevelopment" element ={< DetailSection head="Custom Software Development"/>} />
            <Route path ="/CloudComputing" element ={< DetailSection head="Cloud Computing Services"/>} />

        </Routes>
    </div>
  )
}
