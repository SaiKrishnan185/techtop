import { Routes, Route } from "react-router-dom";
import { ConsultingHome, Home, TechnologyHome } from "../pages";

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={ <Home/>} />
            <Route path="/Consulting" element={< ConsultingHome/>} />
            <Route path="/Technology" element={< TechnologyHome/>} />
        </Routes>
    </div>
  )
}
