import { Link } from "react-router-dom"
import tech from "../../assets/tech.jpg"

export const TechPage = () => {
  return (
    <div style={{ backgroundImage: `url(${tech})` }} className="h-screen bg-cover bg-no-repeat  md:pl-5 p-1 flex items-center justify-center">
        <div>
            <p className='md:text-4xl text-2xl md:w-4/12 mb-10 p-2 md:text-left font-semibold tracking-tight text-white'>Technology</p>
            <p className="mb-3 font-normal md:text-left md:w-4/12 text-white">Embracing the ever-evolving technology landscape, the NoName stack is meticulously designed on the fluidity of enterprise foundations for digital transformations. Our core focus is to empower established businesses by leveraging these transformative technologies, enabling them to seamlessly adapt to and embrace digital innovation.</p>
            <Link to="/a" className="text-blue-800">Learn More..</Link>
        </div>
        
    </div>
  )
}
