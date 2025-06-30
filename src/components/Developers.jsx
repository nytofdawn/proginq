import React from 'react'
import dev1 from '../assets/dev1.jpg'
import { FaQuoteLeft, FaRegStar, FaStar, FaUser } from 'react-icons/fa';

const Developers = () => {
    const developers = [
        {
            id:1, 
            name:'Daniel De Guzman', 
            role:'Full stack Developer', 
            image:dev1,
            bio:'4 years Of Expercience as FullStack.',
            rating: 5,
            languages:['React','RESTFUL APIs','NodeJS','TailwindCss','HTML','React Native','ExpressJS','Bootstrap']
        },
        {
            id:2, 
            name:'Lorence Pinzon', 
            role:'Full stack Developer', 
            image: <FaUser />,
            bio:'4 years Of Expercience as FullStack.',
            rating: 5,
            languages:['ElectronJS','React','Vite']
        },
        {
            id:3, 
            name:'Nathaniel Dimagiba', 
            role:'Full stack Developer', 
            image: <FaUser />,
            bio:'4 years Of Expercience as FullStack.',
            rating: 5,
            languages:['React','NodeJS','Express']
        },
    ];
    const renderStars=(rating) => {
        return [...Array(5)].map((_,i) =>(
            i < rating ?
            <FaStar key={i} className='text-yellow-500 inline' aria-hidden='true'/> :
            <FaRegStar key={i} className='text-yellow-500 inline' aria-hidden='true'/>
        ))
    }
  return (
    <section id="developer" className='py-20 overflow-hidden bg-gradient-to-r from-green-500 to-violet-800'>
        <div className='container mx-auto px-4'>
            <header data-aos='Fade-up' data-aos-delay='700' className='text-center mb-16 relative'>
                <span className=' absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20
                rounded-full bg-green-300 opacity-30 z-0' aria-hidden='true'></span>
                <h2 className='text-3xl md:text-4xl font-bold text-green-800 mb-4 relative z-10'>
                Meet Our <span className='text-gray-800 font-bold'> Expert team </span>
                </h2>
                <p className='text-lg text-gray-800 max-w-2xl mx-auto relative z-10 font-medium'>
                    This Developers are known for their skills in fast and efficiently building Systems
                </p>
                <span className='absolute -bottom-6 right-1/4 w-16 h-16 rounded-full bg-green-400 opacity-40 z-20' aria-hidden='true'></span>
            </header>
            <ul data-aos='fade-up' data-aos-delay='700' className='grid grid-cols-1 md:grid-cols-2
            lg:grid-cols-3 gap-8 mb-16'>
                {
                    developers.map((dev)=>(
                        <li key={dev.id} className='group relative'>
                            <article className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl
                            transition-all duration-300 h-full'>
                                <figure className='relative h-80 overflow-hidden'>
                                    <img
                                    src={dev.image}
                                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                                    loading='lazy'
                                    />
                                    <span className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'
                                    aria-hidden='true'></span>
                                    <aside className='absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full flex items-center shadow-sm'
                                    aria-label={`Rating: ${dev.rating} Stars`}>
                                        {renderStars(dev.rating)}
                                    </aside>
                                    <span className='ml-1 text-sm font-medium'>{dev.rating}</span>
                                </figure>
                                    <div className='p-6 relative mt-10'>
                                        <div className='bg-green-200 rounded-lg shadow-md p-6'>
                                            <header>
                                                <h3 className='text-xl font-bold text-green-800 mb-1'>{dev.name}</h3>
                                                <p className='text-green-600 font-medium mb-3'>{dev.role}</p>
                                            </header>
                                            <p className='text-gray-500 mb-4'>{dev.bio}</p>
                                            <ul className='flex flex-wrap gap-2 mb-4'>
                                                {dev.languages.map((spec, i)=>(
                                                    <li key={i}>
                                                        <span className='bg-pink-50 text-black-600 text-xs font-medium px-3 py-1 rounded-full'>
                                                            {spec}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <figure
                                            className='absolute -top-6 left-6 bg-green-800 text-black p-3 rounded-full shadow-lg'
                                            aria-hidden='true'>
                                                <FaQuoteLeft className='text-lg' />
                                            </figure>
                                        </div>
                                    </div>                              
                            </article>
                        </li>
                    ))
                }
            </ul>
        <aside data-aos='fade-up' data-aos-delay='600' className='bg-gradient-to-r from-green-300 to-purple-500 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden'>
                <span className='absolute -top-20 -left-20 w-40 h-40 rounded-full bg-green-800 opacity-20 animate-ping' aria-hidden='true'></span>
                <span className='absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-green-800 opacity-20 animate-ping' aria-hidden='true'></span>
                <div className='relative z-10'>
                    <h3 className='text-2xl md:text-3xl font-bold text-gray-800 mb-6'> Ready to make your System with Our Team?</h3>
                    <p className='text-green-800 text-lg font-bold mb-8 max-w-2xl mx-auto'>
                        Lets Make Your <br/> Dream Come True
                    </p>
                    <nav className='flex flex-col sm:flex-row justify-center gap-4'>
                        <a
                        href='#'
                        className='bg-green-500 hover:bg-green-800 text-black px-8 py-3 rounded-full transition shadow-lg
                        focus:outline-none focus:ring-2 focus:ring-green-950 focus:ring-offset-2'
                        aria-label='Contact Developers'> Contact Developers</a>
                    </nav>
                </div>
        </aside>
        </div>
    </section>
  )
}

export default Developers