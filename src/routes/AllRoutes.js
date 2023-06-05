import { Routes, Route } from "react-router-dom";
import { ConsultingHome, Home } from "../pages";

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={ <Home/>} />
            <Route path="/Consulting" element={< ConsultingHome/>} />
        </Routes>
    </div>
  )
}
