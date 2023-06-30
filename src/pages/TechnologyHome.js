import { TechnoCard, TechnoCardTwo } from "../components"

import softMain from "../assets/softMain.jpg"
import mobile from "../assets/mobile.jpg"
import custom from "../assets/custom.jpg"

export const TechnologyHome = () => {
  return (
    <div className='pt-20 text-white'>
        <p className='md:w-full md:text-4xl text-2xl mb-10 p-2 text-center  font-semibold tracking-tight '>Technology</p>
        <p className='md:px-20 p-8 text-center'>Driven by passion, ambition, and a commitment to excellence!</p>
        <div className='flex md:flex-row flex-col md:w-full px-10  sm:px-28 md:px-2 gap-3 md:flex-wrap justify-center'>
            <TechnoCard head = "Python Flask" detail ="We specialize in delivering cutting-edge solutions through the utilization of Python Flask. Our team of experienced developers leverages the power and versatility of Flask to provide exceptional services to our clients. Whether it's building scalable web applications, designing robust APIs, or developing dynamic websites, our expertise in Python Flask enables us to create efficient and elegant solutions tailored to your specific needs. With Flask's simplicity and flexibility, combined with our proficiency, we deliver high-quality services that propel businesses forward in today's competitive digital landscape." card={softMain}/>
            <TechnoCardTwo head = "ReactJs" detail ="We specialize in providing top-notch services utilizing ReactJs, a powerful JavaScript library for building dynamic and interactive user interfaces. With our expertise in ReactJs, we create seamless and visually appealing web applications that deliver an exceptional user experience. Whether it's developing a brand new application from scratch or enhancing an existing one, our team leverages the full potential of ReactJs to deliver robust, scalable, and high-performance solutions that meet our clients' specific needs." card={mobile} />
            <TechnoCard head = "Python" detail ="We specialize in leveraging the power of Python to deliver exceptional solutions. With our expertise in Python programming, we offer a wide range of services tailored to meet your unique needs. From developing robust web applications and building data analysis pipelines to creating intelligent algorithms and implementing machine learning models, our team is well-versed in utilizing Python's versatility and efficiency. Whether you require custom software development, automation solutions, or data-driven insights, we are committed to delivering high-quality results through the exceptional capabilities of Python." card={custom} />
        </div>
    </div>
  )
}
