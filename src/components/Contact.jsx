import React, { useState } from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from 'react-icons/fa'
import contactimg from '../assets/contact.png'


const Contact = () => {
    const [formData, setFormData] = useState({
        name:'',
        phone:'',
        email:'',
        service:'',
        message:'',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitMessage('');
  setMessageType('');
  setShowAlert(false);

  try {
    const response = await fetch('https://companybackend-2zy8.onrender.com/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      setSubmitMessage("✅ Message Sent Successfully! We'll get back to you soon.");
      setMessageType('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: '',
      });
    } else {
      setSubmitMessage(`❌ Error: ${result.message}`);
      setMessageType('error');
    }

    setShowAlert(true);

  } catch (error) {
    setSubmitMessage('❌ Network Error. Please try again later.');
    setMessageType('error');
    setShowAlert(true);
  } finally {
    setIsSubmitting(false);
  }
};


    const contactItems = [
        {
            icon:<FaMapMarkedAlt className='text-purple-800 text-xl' />,
            title:"Our Location",
            content:(
                <p className='text-green-950'> Southville 8B Rodriguez, Rizal</p>
            )
        },
        {
            icon:<FaPhoneAlt className='text-purple-800 text-xl' />,
            title:"Whats App",
            content:(
                <p className='text-green-950'>
                    <a  target="_blank" href="https://wa.me/639935599604" className='hover:text-green-800'> +63 993 559 9604</a>
                </p>
            )
        },
        {
            icon:<FaEnvelope className='text-purple-800 text-xl' />,
            title:"Email",
            content:(
                <p className='text-green-950'>
                    <a target='_blank' href="mailto:Dnl@expertsdev.com" className='hover:text-green-800'>Dnl@expertsdev.com</a>
                </p>
            )
        },
    ];
    
    const services = [
        {value:"Capstone", label:"Full Project Capstone"},
        {value:"Mobile App", label:"Mobile Application Development"},
        {value:"Desktop App", label:"Desktop Application Development"},
        {value:"Website App", label:"Website Development"},
    ]
  return (
    <article id="contact" className='py-20 overflow-hidden bg-gradient-to-r from-green-300 to bg-violet-800'>
        <div className='container mx-auto px-4'>
            <header data-aos="fade-up" data-aos-delay="700" className='text-center mb-16 relative'>
                <div className='absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full
                bg-green-300 opacity-40 z-0'>
                </div>
            </header>
            <main className='flex flex-col lg:flex-row gap-12'>
                <aside data-aos="fade up" data-aos-delay="700" className='lg:w-2/5'>
                    <section className="bg-gradient-to-br from-blue-800 via-white to-red-600 rounded-2xl shadow-xl p-8 h-full border-4 border-yellow-400">
                        <h2 className='text-2xl font-bold text-green-950'>Get In Touch</h2>
                        <address className='space-y-6'>
                            {
                                contactItems.map((item,index)=>(
                                    <article key={index} className='flex items-start'>
                                        <figure className='bg-green-300 p-3 rounded-full mr-4 flex-shrink-0'>
                                            {item.icon}
                                        </figure>
                                        <div>
                                            <h3 className='font-medium text-green-900 mb-1'>{item.title}</h3>
                                            {item.content}
                                        </div>
                                    </article>
                                ))
                            }
                        </address>
                        <figure className='mt-8 rounded-xl overflow-hidden shadow-md'>
                            <img src={contactimg}
                            className='w-full h-70 object-cover hover:scale-105 transition-transform duration-1000'
                            width="400"
                            height="200"
                            loading='lazy'
                            />
                        </figure>
                    </section>
                </aside>
                <section data-aos="fade-up" data-aos-delay="700" className='lg:w-3/5'>
                    <div className='bg-white rounded-2xl shadow-xl p-8 h-full'>
                        <h2 className='text-2xl font-bold text-gray-800 mb-6'>Send Us a Message</h2>

                                            {showAlert && (
                                            <div className="fixed inset-0 flex items-center justify-center z-50">
                                                <div className={`relative px-6 py-4 rounded-lg shadow-lg text-white text-center text-lg w-[90%] max-w-md
                                                ${messageType === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>

                                                <button
                                                    className="absolute top-2 right-3 text-white text-xl font-bold hover:text-gray-200"
                                                    onClick={() => setShowAlert(false)}
                                                >
                                                    ×
                                                </button>

                                                {submitMessage}
                                                </div>
                                            </div>
                                            )}


                            
                        <form className='space-y-6' onSubmit={handleSubmit}>
                            <fieldset className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div>
                                    <label className='block text-gray-700 font-medium mb-2'>Full Name</label>
                                    <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent'
                                    placeholder='Your Name'
                                    required/>
                                </div>
                                <div>
                                    <label className='block text-gray-700 font-medium mb-2'>Phone Number</label>
                                    <input
                                    type='tel'
                                    id='phone'
                                    name='phone'
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent'
                                    placeholder='+63 xx xxxx xxxx'
                                    required/>
                                </div>
                            </fieldset>
                                <div>
                                    <label className='block text-gray-700 font-medium mb-2'>Enter your Email</label>
                                    <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent'
                                    placeholder='example@email.com'
                                    required/>
                                </div>
                                <div>
                                    <label className='block text-gray-700 font-medium mb-2'>Package Interested In</label>
                                    <select
                                        id='service'
                                        name='service'
                                        value={formData.service}
                                        onChange={handleInputChange}
                                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent'
                                        required>
                                        <option value="">Select a Package</option>
                                        {services.map((service)=>(
                                            <option key={service.value} value={service.value}>
                                                {service.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            <div>
                                    <label className='block text-gray-700 font-medium mb-2'>Message to us</label>
                                    <textarea
                                    id='message'
                                    name='message'
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows='5'
                                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent'
                                    placeholder='Note your Concern and Questions'
                                    required/>
                            </div>
                            <div>
                                <button
                                    type='submit'
                                    disabled={isSubmitting}
                                    className='bg-green-600 hover:bg-green-800 text-black px-8 py-3 rounded-full transition shadow-lg w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed'
                                    aria-label='Submit contact Form'>
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
            <figure data-aos="fade-up" data-aos-delay="700"
            className='mt-16 bg-white rounded-2xl shadow-xl overflow-hidden'>
                <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=121.1481%2C14.7512%2C121.1492%2C14.7522&marker=14.7517%2C121.1486"
                width="100%"
                height="350"
                style={{border:1}}
                allowFullScreen=""
                loading='lazy'
                title='DNL HQ Map'
                className='rounded-3xl'
                aria-label='Map Showing Hq'></iframe>
                <div className="absolute bottom-4 left-4 bg-white text-blue-800 text-sm px-3 py-1 rounded-full shadow">
                    📍 DNL HQ
                </div>
            </figure>
        </div>
    </article>
  )
}

export default Contact