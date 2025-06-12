import React from 'react';
import { BeakerIcon, FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <BeakerIcon className="h-8 w-8 text-teal-300" />
                <span className="ml-2 text-xl font-bold text-white">Heavy Metal Tested</span>
              </div>
              <p className="text-blue-100 mb-6">
                Setting the global standard for heavy metal safety testing in consumer products.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-100 hover:text-teal-300 transition-colors">
                  <FacebookIcon className="h-5 w-5" />
                </a>
                <a href="#" className="text-blue-100 hover:text-teal-300 transition-colors">
                  <TwitterIcon className="h-5 w-5" />
                </a>
                <a href="#" className="text-blue-100 hover:text-teal-300 transition-colors">
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a href="#" className="text-blue-100 hover:text-teal-300 transition-colors">
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/" className="text-blue-100 hover:text-teal-300 transition-colors">Home</a>
                </li>
                <li>
                  <a href="#process" className="text-blue-100 hover:text-teal-300 transition-colors">Certification Process</a>
                </li>
                <li>
                  <a href="#products" className="text-blue-100 hover:text-teal-300 transition-colors">Product Categories</a>
                </li>
                <li>
                  <a href="#certification" className="text-blue-100 hover:text-teal-300 transition-colors">Certified Products</a>
                </li>
                <li>
                  <a href="#faq" className="text-blue-100 hover:text-teal-300 transition-colors">FAQ</a>
                </li>
                <li>
                  <a href="/blog" className="text-blue-100 hover:text-teal-300 transition-colors">Blog</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-100 hover:text-teal-300 transition-colors">Heavy Metals Guide</a>
                </li>
                <li>
                  <a href="#" className="text-blue-100 hover:text-teal-300 transition-colors">Testing Methodology</a>
                </li>
                <li>
                  <a href="#" className="text-blue-100 hover:text-teal-300 transition-colors">Regulatory Standards</a>
                </li>
                <li>
                  <a href="#" className="text-blue-100 hover:text-teal-300 transition-colors">Research Papers</a>
                </li>
                <li>
                  <a href="#" className="text-blue-100 hover:text-teal-300 transition-colors">Case Studies</a>
                </li>
                <li>
                  <a href="/blog" className="text-blue-100 hover:text-teal-300 transition-colors">Blog</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Newsletter</h3>
              <p className="text-blue-100 mb-4">
                Subscribe to our newsletter for the latest updates on heavy metal safety and regulations.
              </p>
              <form className="space-y-3">
                <div>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="input bg-blue-800 text-white border-blue-700 placeholder-blue-300 focus:border-teal-400 w-full"
                  />
                </div>
                <button
                  type="submit"
                  className="btn bg-teal-600 text-white hover:bg-teal-700 w-full"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100 text-sm">
              &copy; {currentYear} Heavy Metal Tested. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li>
                  <a href="#" className="text-blue-100 hover:text-teal-300 transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-blue-100 hover:text-teal-300 transition-colors">Terms of Service</a>
                </li>
                <li>
                  <a href="#" className="text-blue-100 hover:text-teal-300 transition-colors">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 