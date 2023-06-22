import { Link } from "react-router-dom"
import tech from "../../assets/tech.jpg"

export const TechPage = () => {
  return (
    <div style={{ backgroundImage: `url(${tech})` }} className="h-screen bg-cover bg-no-repeat  md:pl-5 p-1 flex items-center justify-center">
        <div>
            <p className='md:text-4xl text-2xl md:w-4/12 mb-10 p-2 md:text-left font-semibold tracking-tight text-white'>Technology</p>
            <p className="mb-3 font-normal md:text-left md:w-4/12 text-white">At Technonyms, we specialize in providing cutting-edge software development solutions that help businesses stay ahead of the competition. Our team of experienced professionals is dedicated to creating secure, reliable, and easy-to-use software for our customers. Whether you need an enterprise-grade application, a custom-made web application, or a mobile app, we can provide the right solution for your needs. Our comprehensive software development process combines agile methodology, rigorous testing, and industry-leading technologies to ensure that your product is delivered on time and within budget. We understand the importance of quality assurance and work to ensure that your software meets all the requirements. We are dedicated to providing our clients with the highest quality software development services. If you’re looking for a reliable and experienced software development partner, contact us today and let us help you achieve your goals.</p>
            <Link to="/a" className="text-blue-800">Learn More..</Link>
        </div>
        
    </div>
  )
}
