import React from 'react'
import { CgWebsite } from 'react-icons/cg'
import { FaBeer, FaCoffee } from 'react-icons/fa'
import { FaComputer, FaDesktop, FaMobile, FaSackDollar } from 'react-icons/fa6'

function Services() {
    const services =[
        {
            icon:<FaDesktop className='text-5xl text-blue-400' aria-hidden='true'/>,
            title: "Full Capstone System",
            desc: 'Complete Package All in 1, Website + Mobile + Desktop Applications',
            link:'#capstone'
        },
        {
            icon:<FaMobile className='text-5xl text-blue-400' aria-hidden='true'/>,
            title: "Mobile Application",
            desc: 'A Service where we Develop the Mobile Application using React Native ',
            link:'#mobileapp'
        },
        {
            icon:<FaComputer className='text-5xl text-blue-400' aria-hidden='true'/>,
            title: "Desktop Application",
            desc: 'Package for only creating Desktop Application',
            link:'#desktopapp'
        },
        {
            icon:<CgWebsite className='text-5xl text-blue-400' aria-hidden='true'/>,
            title: "Website / Web Application",
            desc: 'Package for Website or Web Application',
            link:'#webapp'
        },
    ]
  return (
    <section
    id='services'
    className='py-20 overflow-hidden bg-gradient-to-r from-green-500 to-violet-800'
    aria-labelledby='services-heading'>
        <div className='container mx-auto px-4'>
            <header data-aos='fade-right' data-aos-delay='500' className='text-center mb-16'>
                <h2 id='services-heading' className='text-3xl md:text-4xl font-bold text-gray-700 mb-4'>
                    Our <span className='text-green-600'> Premium Services</span>
                </h2>
                <p className='text-lg text-green-900 max-w-2xl mx-auto'>
                Company offer to Help you out, to make you Hussle Free
                </p>
            </header>
            <ul data-aos="fade-up" data-aos-delay="500"
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {services.map((service,index)=>(
                    <li key={index}>
                        <article
                        className='bg-green-800 rounded-xl p-8 hover:shadow-lg transition-all duration-400
                        hover:translate-y-[-5px] h-full flex flex-col'>
                        <figure className='mb-6'>
                            {service.icon}
                        </figure>
                        <h3 className='text-xl font-bold text-gray-800 mb-3'>
                            {service.title}
                        </h3>
                        <p className='text-gray-800 m-6 flex-grow'>{service.desc}</p>
                        <a href={service.link}
                        className='text-green-400 font-medium hover:text-green-900 transition
                        flex items-center mt-auto'
                        aria-label={`learn more about ${service.title}`}>
                            Learn More
                            <svg className='w-4 h-4 ml-2' fill='none' stroke='currentColor' viewBox=' 0 0 24 24'
                            aria-hidden="true">
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7'></path>
                            </svg>
                        </a>
                        </article>
                    </li>
                ))}
            </ul>
            <footer data-aos="fade-up" data-aos-delay="600" className='mt-20 text-center'>
                <h3 className='text-2xl font-bold text-green-900 mb-6'>
                    Ready to make your First?
                </h3>
                <a href='#contactdevs'
                className='bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full
                inline-block transition shadow-lg focus:outline-none focus:ring-2 focus:ring-green-950
                focus:ring-offset-2'
                aria-label='Contact Developers'>
                   Contact Us Now!
                </a>
            </footer>
        </div>
    </section>
  )
}

export default Services