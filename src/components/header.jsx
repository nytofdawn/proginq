import React, { useState } from 'react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const ToogleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        {href:'#home', label:'Home'},
        {href:'#services', label:'Services'},
        {href:'#about', label:'About Us'},
        {href:'#developer', label:'Developers'},
        {href:'#contact', label:'Contact'},
    ]
  return (
    <header className='bg-gradient-to-r from-green-500 to-transparent sticky top-0 z-50 p-1'>
        <div className='container mx-auto px-4 flex justify-between items-center'>
            <a href='/' className='flex items-center focus:outline-none focus:ring-2 focus:ring-green-200 rounded'>
                <h1 className='text-5xl font-bold text-blue-900'>D N L <small className='text-green-800'> G Experts</small></h1>
            </a>
            <nav aria-label='Primary Navigation'>
                <ul className='hidden md:flex space-x-8'>
                    {navLinks.map((link, index)=>(<li key={index}>
                        <a
                        href={link.href}
                        className='text-gray-800 font-bold hover:text-green-700 transition-colors duration-300
                        focus:outline-none focus:ring-green-200 focus:rounded'>
                            {link.label}
                        </a>
                    </li>))}
                </ul>
            </nav>
            <button className='md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-green-400 rounded'
            onClick={ToogleMenu}
            aria-label='Toogle Menu'
            aria-expanded={isMenuOpen}
            aria-controls='mobile-menu'>
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 30 30'>
                        {
                            isMenuOpen ? (
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 6l12 12M6 18l12-12'></path>
                            ):(
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16'></path>
                            )
                        }
                </svg>
            </button>
            {isMenuOpen && (
                <aside id='mobile-menu'
                className='md:hidden absolute top-16 left-0 right-0 bg-green-300 shadow-lg py-4 -px4'
                aria-label='Mobile Menu'
                >
                    <nav aria-label='Mobile navigation'>
                        <ul className='flex flex-col space-y-2'>
                            {navLinks.map((link,index)=>(
                                <li key={index}>
                                    <a
                                    href={link.href}
                                    className='block text-gray-700 hover:text-green-300 transition-colors 
                                    duration-300 py-2 px-2 focus:outline-none focus:ring-2 focus:ring-green-300 focus:rounded'
                                    onClick={ToogleMenu}
                                    >
                                    {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                </aside>
            )}
            <nav className='hidden md:block' aria-label = 'Contact Developers'>
            <a href="#contact"
            className='bg-green-400 hover:bg-red-400 text-white px-6 py-2 rounded-full
            transition-colors duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2'>
                Be our client
            </a>
            </nav>
        </div>
    </header>
  )
}

export default Header