
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-primary-dark font-bold" : "text-secondary"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-primary-dark lg:p-0`;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-serif text-primary-dark font-bold">
          Activate Change Today
        </Link>
        <div className="hidden lg:flex items-center space-x-8">
          <NavLink to="/" className={navLinkClasses}>Home</NavLink>
          <NavLink to="/about" className={navLinkClasses}>About</NavLink>
          <NavLink to="/services" className={navLinkClasses}>Services</NavLink>
          <NavLink to="/faq" className={navLinkClasses}>FAQ</NavLink>
        </div>
        <a href="#contact" className="hidden lg:inline-block bg-accent text-white font-bold py-2 px-6 rounded-full hover:bg-amber-600 transition-colors duration-300">
          Book a Session
        </a>
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-primary-dark focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-white">
          <div className="pt-2 pb-3 space-y-1 sm:px-3 px-2">
            <NavLink to="/" className={navLinkClasses} onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/about" className={navLinkClasses} onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to="/services" className={navLinkClasses} onClick={() => setIsOpen(false)}>Services</NavLink>
            <NavLink to="/faq" className={navLinkClasses} onClick={() => setIsOpen(false)}>FAQ</NavLink>
             <a href="#contact" className="block w-full text-left bg-accent text-white font-bold mt-2 py-2 px-3 rounded-md hover:bg-amber-600 transition-colors duration-300" onClick={() => setIsOpen(false)}>
              Book a Session
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;