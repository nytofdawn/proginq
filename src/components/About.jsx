import React from 'react'
import { FaCalendar, FaDesktop, FaFolder, FaUser } from 'react-icons/fa'
import aboutimage from '../assets/about.png'
import { FaUserGroup } from 'react-icons/fa6';

const About = () => {
    const stats= [
        {value:"3", label: "Active Developers", icon: <FaUser className='text-gray-700' aria-hidden='true'/>},
        {value:"12", label: "Completed Projects", icon:<FaDesktop className='text-gray-700' aria-hidden='true'/>},
        {value:"2", label: "On Queue Projects", icon: <FaFolder className='text-gray-700' aria-hidden='true'/>},
        {value:"12+", label:"Total Years of Developers Experience", icon: <FaCalendar className='text-gray-700' aria-hidden='true'/>},
    ];

    const approachItems=[   
        {
            icon: <FaUser className='text-gray-500' aria-hidden='true'/>,
            text:"Many Developers",
        },
        {
            icon: <FaDesktop className='text-gray-500' aria-hidden='true'/>,
            text:"Projects Completed",
        },
        {
            icon: <FaFolder className='text-gray-500' aria-hidden='true'/>,
            text:"Projects on Queue",
        },
        {
            icon: <FaCalendar className='text-gray-500' aria-hidden='true'/>,
            text:"Total Years of Developers Experience",
        },
    ]
  return (
    <section id="about" className='py-14 overflow-hidden bg-gradient-to-r from-green-300 to-violet-800'>
        <div className='container mx-auto px-4'>
            <article data-aos='fade-up' data-aos-delay='400' className='flex flex-col lg:flex-row items-center gap-12'>
                <figure className='lg:w-5/12 relative'>
                    <div className='relative z-10 rounded-2xl overflow-hidden shadow-2xl w-full max-w-md mx-auto'>
                    <img src={aboutimage}
                    className='w-full h-auto object-cover aspect-[4/5]'
                    loading='lazy'/>
                        <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent'
                        aria-hidden='true'>
                        </div>
                    </div>
                    <span className='hidden lg:block absolute -bottom-8 -left-8 w-32 h-32 rounded-full
                    bg-green-700 opacity-20 z-0' aria-hidden="true">
                    </span>
                    <span className='hidden lg:block absolute -top-8 -right-8 w-40 h-40 rounded-full
                    bg-green-700 opacity-20 z-0' aria-hidden="true">
                    </span>
                    <aside className='absolute bottom-1 -right-5 bg-white p-3 rounded-xl shadow-lg z-20'>
                        <strong className='text-2xl font-bold text-orange-500'>1 month</strong>
                        <small className='block text-xs font-medium text-gray-600'>Founded</small>
                    </aside>
                </figure>

                <div data-aos="fade-up" data-aos-delay="500" className='lg:w-7/12'>
                    <header>
                        <h2 className='text-3xl md:text-3xl font-bold text-green-800 mb-6'>
                            About <span className='text-green-950'> DNL experts</span>
                        </h2>
                        <p className='text-lg text-gray-600 mb-6'>
                            This is Officially Company Website
                        </p>
                    </header>
                    <section className='m-8'>
                        <h3 className='text-xl font-semibold text-gray-800 mb-4'>Why it should be us?</h3>
                        <ul className='space-y-3'>
                            {approachItems.map((item,index)=>(
                                <li key={index} className='flex items-start '>
                                    <figure className='bg-green-100 rounded-full mr-3'>
                                        {item.icon}
                                    </figure>
                                    <p className='text-gray-800'>{item.text}</p>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section className='grid grid-cols-2 gap-4 mb-8'>
                            {stats.map((item,index) =>(
                                <article key={index} className='bg-white p-4 rounded-lg shadow-sm flex items-center'>
                                    <figure className='m-3'>
                                        {item.icon}
                                    </figure>
                                    <div>
                                        <strong className='text-xl font-bold text-green-600'>{item.value}</strong>
                                        <p className='font-semibold text-green-500'>{item.label}</p>
                                    </div>
                                </article>
                            ))}
                    </section>
                    <nav>
                        <a href='#developer'
                        className='inline-block bg-green-600 hover:bg-green-900 text-green-950 px-6 py-2 rounded-full
                        transition shadow-md focus:outline-none focus:ring-1 focus:ring-green-800 focus:ring-offset-2'>
                            Check Active Developers
                        </a>
                    </nav>
                </div>
            </article>
            <aside className='mt-20 bg-white rounded-2xl p-8 md:p-8 shadow-lg relative overflow-hidden'>
                <span className='absolute -top-20 -right-20 w-64 h-64 rounded-full bg-green-700 opacity-40'
                aria-hidden='true'>check</span>
                <div className='relative z-10'>
                        <h3 className='text-2xl font-bold text-gray-700 mb-6'>Our Mission</h3>
                        <blockquote className='text-lg text-green-800 font-sans mb-6'>
                            Our mission is to empower individuals, businesses, and students by delivering high-quality digital solutions—ranging from Capstone projects and mobile applications to responsive websites, web applications, and desktop software.
                            We aim to bridge innovation and functionality through tailored development services that are user-focused, scalable, and aligned with modern technology standards.
                            Whether you're building your final year project or launching your next big idea, we're committed to helping you succeed through
                            technical expertise, creative problem-solving, and collaborative partnership.
                        </blockquote>
                        <figure className='flex items-center'>
                            <div className='w-20 h-20 rounded-full bg-green-200 flex items-center justify-center mr-4'>
                                <FaUser className='text-green-800' aria-hidden='true' />
                            </div>
                            <figcaption>
                                <cite className='font-semibold text-1xl text-green-500 not-italic'>Daniel Salazar De Guzman</cite>
                                <p className='font-black'> LEAD DEVELOPER</p>
                            </figcaption>
                        </figure>
                </div>
            </aside>
        </div>
    </section>
  )
}

export default About