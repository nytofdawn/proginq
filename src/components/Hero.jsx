import React from 'react'
import hero from '../assets/Hero.png'

const Hero = () => {
    const stats = [
        {value:"3", label: "Active Developers"},
        {value:"12", label: "Completed Projects"},
        {value:"5", label: "Queueing Projects"},
        {value:"1 year", label:"Company Year"},
    ];
  return (
    <section id='home' className='relative overflow-hidden bg-gradient-to-r from-green-300 to bg-violet-800'>
        <article className='container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center'>
            <div className='md:w-1/2 mb-10 md:mb-0'>
                <hgroup data-aos="fade-up" data-aos-delay="500">
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4'>
                        Create your first <mark className='text-green-800 bg-transparent'>Website, Capstone, Mobile Application</mark> with Us!
                    </h1>
                    <p className='text-lg text-gray-700 mb-8 max-w-lg'>
                        Make your Life Hussle Free from stressful Academics Requirements,<br/>
                        Let us Create your System with student friendly budget
                    </p>
                </hgroup>
                <nav data-aos="flip-down" data-aos-delay="600" className='flex flex-col sm:flex-row gap-4 mb-12'>
                    <a
                    href="#contact"
                    className='bg-green-400 hover:bg-red-400 text-white px-6 py-2 rounded-full
                    transition-colors duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2'
                    aria-label='Book a Project'>
                        Make your Queue now!
                    </a>
                    <a href="#services"
                    className='border border-green-400 text-green-700 hover:bg-purple-200 px-8 py-3 rounded-full text-center transition'
                    aria-label="Explore More">
                        Explore More
                    </a>
                </nav>
                <aside data-aos="fade-right" data-aos-delay="800" className='py-4'>
                    <ul className='flex flex-wrap justify-center gap-4 md:gap-8 text-center'>
                        {stats.map((stat, index)=>(
                            <li key={index} className='px-2'>
                                <strong className='text-2xl font-bold text-red-500'>{stat.value}</strong>
                                <small className='block text-sm text-gray-600'>{stat.label}</small>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
            <figure data-aos="flip-down" data-aos-delay="700" className='md:w-1/2 flex justify-center'>
                <div className='relative w-full max-w-md'>
                    <span className='bg-green-800 rounded-full w-80 h-80 absolute -top-10 -left-10 opacity-20 animate-pulse'
                    aria-hidden='true'>
                    </span>
                    <span className='bg-green-800 w-64 h-64 absolute animate-pulse rounded-full -bottom-10 -right-10 opacity-40'
                    aria-hidden='true'>
                    </span>
                    <img src={hero}
                    alt='eldergrammer'
                    className='relative z-10 rounded-full shadow-2xl w-full max-w-sx md:max-w-sm object-cover animate-bounce'
                    width='600'
                    height='600'
                    loading='eager'
                    />
                </div>
            </figure>
        </article>

    </section>
  )
}

export default Hero