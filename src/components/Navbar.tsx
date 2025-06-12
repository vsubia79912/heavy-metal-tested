'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BeakerIcon, MenuIcon, XIcon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Process', href: '#process' },
    { name: 'Products', href: '#products' },
    { name: 'Certification', href: '#certification' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '/blog' }
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <BeakerIcon className={`h-8 w-8 ${isScrolled ? 'text-blue-900' : 'text-white'}`} />
              <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-blue-900' : 'text-white'}`}>Heavy Metal Tested</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-900' 
                    : 'text-white hover:text-gray-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="#contact" className="btn btn-primary">
              Get Certified
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-900' 
                  : 'text-white hover:text-gray-200'
              }`}
            >
              {isOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-medium py-2 transition-colors ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-blue-900' 
                      : 'text-white hover:text-gray-200'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="#contact" 
                className="btn btn-primary w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Certified
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 