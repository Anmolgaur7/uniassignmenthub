import React, { useEffect, useState } from 'react';
import { FaRegArrowAltCircleUp, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.pageYOffset > 300) { // Adjust this value as needed
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="bg-gray-900 text-white py-16 relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <div className="md:col-span-2 lg:col-span-2">
                        <div className="bg-gray-800 p-8 rounded-lg text-center">
                            <img src="/logo.svg" alt="Logo" className="h-12 w-12 mb-4" />
                            <p className="text-base mb-4">Subscribe to our newsletter for the latest updates!</p>
                            <div className="flex justify-center">
                                <input type="email" placeholder="Your email" className="px-4 py-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                <button className="ml-2 px-6 py-2 bg-sky-500 text-white rounded-lg hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-blue-500">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-sky-500">Quick Links</h3>
                        <ul className="list-none">
                            <li className="mb-4"><Link to="/" className="hover:text-orange-400 transition-colors duration-300 text-lg">Home</Link></li>
                            <li className="mb-4"><Link to="/about" className="hover:text-orange-400 transition-colors duration-300 text-lg">Services</Link></li>
                            <li className="mb-4"><Link to="/contact" className="hover:text-orange-400 transition-colors duration-300 text-lg">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-sky-500">Contact Us</h3>
                        <ul className="list-none">
                            <li className="mb-4">123 Street Name, City, Country</li>
                            <li className="mb-4">info@example.com</li>
                            <li className="mb-4">+123 456 7890</li>
                        </ul>
                    </div>
                </div>
            </div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-10 right-10 p-3 mb-8 bg-sky-500 text-white rounded-full shadow-md hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <FaRegArrowAltCircleUp className='w-8 h-8' />
                </button>
            )}
            <div className="fixed bottom-0 right-10 mb-2">
                <a href="https://api.whatsapp.com/send?phone=1234567890" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-4 py-4 rounded-full flex items-center transition duration-300 ease-in-out">
                    <FaWhatsapp className="text-3xl" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
