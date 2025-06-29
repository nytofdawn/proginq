import React from 'react'
import { FaComputerMouse, FaEnvelope, FaFacebookF, FaLinkedin, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa6'
import { MdLocationOn, MdPhone } from 'react-icons/md';
import { href } from 'react-router-dom';

const Footer = () => {
    const SocialLinks =[
        {icon: <FaFacebookF className='text-lg'/>, label:"Facebook", href:"https://www.netlify.com/"},
        {icon: <FaTiktok className='text-lg'/>, label:"Tiktok", href:"https://www.netlify.com/"},
        {icon: <FaLinkedin className='text-lg'/>, label:"LinkedIn", href:"https://www.netlify.com/"},
        {icon: <FaYoutube className='text-lg'/>, label:"Youtube", href:"https://www.netlify.com/"},
        {icon: <FaEnvelope className='text-lg'/>, label:"Email",href:"mailto:Dnl@expertsdev.com"},
        {icon: <FaWhatsapp className='text-lg'/>, label:"Whatsapp",href:"https://wa.me/639935599604"},
    ];
    const quicklinks =[
        {text:"Home", href:"#"},
        {text:"About Us", href:"#about"},
        {text:"Package and Services", href:"#services"},
        {text:"Active Developers", href:"#developer"},
        {text:"Contact Us", href:"#contact"},
    ];
    const contactinfo = [
        {
            icon: <MdLocationOn className='text-green-500 text-xl mt-1 mr-4 flex-shrink-0'/>,
            content: <a className='text-gray-500 hover:text-gray-800 transition'>8B San Isidro Rodriguez Rizal</a>
        },
        {
            icon: <MdPhone className='text-green-500 text-xl mt-1 mr-4 flex-shrink-0'/>,
            content: <a className='text-gray-500 hover:text-gray-800 transition'>+63993 559 9604</a>
        },
    ];
    const legalinks =[
        {text:"Privacy Policy",href:"#"},
        {text:"Terms of Service",href:"#"},
        {text:"Sitemap",href:"#"},
    ]
  return (
    <footer className='bg-gray-900 text-white pt-16 pb-8'>
        <div className='container mx-auto px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>
                <section className='lg:cols-span-2'>
                    <header className='flex items-center mb-6'>
                        <FaComputerMouse className='text-4xl text-green-600 mr-3' aria-hidden="true" />
                        <h2 className='text-2xl font-bold'>DNL G Experts</h2>
                    </header>
                    <p>
                    Your go-to team of freelance web developers delivering fast, 
                    flexible, and future-ready digital solutions.
                    </p>
                    <nav aria-label='Social Media Links'>
                        <ul className='flex space-x-4'>
                            {SocialLinks.map((item,index)=>(
                                <li key={index}>
                                    <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={item.href}
                                    className='bg-gray-800 hover:bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center transition'
                                    aria-label={item.label}>
                                        {item.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </section>
                <section>
                    <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0
                    after:bottom-0 after:w-12 after:h-1 after:bg-green-600">
                        Quick Links
                    </h3>
                    <nav aria-label="Quick Links">
                        <ul className='space-y-3'>
                            {quicklinks.map((link, index)=>(
                                <li key={index}>
                                    <a href={link.href} className="text-gray-400 hover:text-green-500 transition">
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </section>
                <address>
                    <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute
                    after:left-0 after-bottom-0 after:w-12 after:h-1 after:bg-green-500">
                        Contact Us
                    </h3>
                    <ul className='space-y-4'>
                        {contactinfo.map((info,index)=>(
                            <li key={index} className='flex items-start'>
                                {info.icon}
                                {info.content}
                            </li>
                        ))}
                    </ul>
                </address>
            </div>
            <section className='bg-gray-800 rounded-xl p-8 mb-12' aria-labelledby='newsletter-heading'>
                <div className='flex flex-col lg:flex-row items-center justify-between'>
                    <div className='mb-6 lg:mb-0 lg:mr-8'>
                        <h3 id='newsletter-heading' className='text-xl font-bold'>Follow Us for more</h3>
                        <p className='text-gray-400'>Get updates on your work and discounts offers</p>
                    </div>
                    <form className='flex flex-col sm:flex-row w-full lg:w-auto' aria-label='Newsletter sub form'>
                        <label className='sr-only'>Your Email address</label>
                        <input
                            type='email'
                            placeholder='Your Email Address'
                            className='px-6 py-3 rounded-full bg-gray-700 text-white focus:outline:none
                            focus:ring-2 focus:ring-green-800 mb-3 sm:mb-0 sm:mr-4 w-full'
                            required/>
                        <button
                            type='submit'
                            className='bg-green-800 hover:bg-green-950 text-white px-8 py-3 rounded-full transition shadow-lg whitespace-nowrap'>
                            submit
                        </button>    
                    </form>
                </div>
            </section>
            <footer className='pt-8 border-t border-gray-500 flex flex-col md:flex-row justify-between items-center'>
                <p className='text-gray-300 text-sm mb-4 md:mb-0'>
                    &copy;{new Date().getFullYear()} DNL Gexperts. All rights reserved.
                </p>
                <nav aria-label='Legal link'>
                    <ul className='flex space-x-6'>
                       {legalinks.map((legal,index)=>(
                        <li key={index}>
                        <a href={legal.href} className='text-gray-500 hover:text-green-950 text-sm transition'>
                            {legal.text}
                        </a>
                        </li>
                       ))} 
                    </ul>
                </nav>
            </footer>
        </div>
    </footer>
  )
}

export default Footer