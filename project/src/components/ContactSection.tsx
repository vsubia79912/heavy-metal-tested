import React, { useState } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, CheckCircleIcon } from 'lucide-react';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    productType: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', formState);
    setFormSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormState({
        name: '',
        email: '',
        company: '',
        phone: '',
        productType: '',
        message: ''
      });
    }, 5000);
  };

  return (
    <div id="contact" className="section py-24">
      <div className="text-center mb-16">
        <h2 className="gradient-text inline-block">Get Your Products Certified</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Ready to ensure your products are free from harmful heavy metals? Contact us to begin the certification process.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1 space-y-8">
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-blue-50 rounded-full mr-4">
                  <PhoneIcon className="h-5 w-5 text-blue-900" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">(800) 555-0123</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-blue-50 rounded-full mr-4">
                  <MailIcon className="h-5 w-5 text-blue-900" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">info@heavymetaltested.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-blue-50 rounded-full mr-4">
                  <MapPinIcon className="h-5 w-5 text-blue-900" />
                </div>
                <div>
                  <p className="font-medium">Headquarters</p>
                  <p className="text-gray-600">
                    123 Science Park Drive<br />
                    Boston, MA 02134
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-4">Laboratory Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Monday - Friday</span>
                <span className="font-medium">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Saturday</span>
                <span className="font-medium">10:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sunday</span>
                <span className="font-medium">Closed</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <div className="card p-8">
            <h3 className="text-xl font-bold mb-6">Request Certification Information</h3>
            
            {formSubmitted ? (
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <CheckCircleIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-green-800 mb-2">Thank You!</h4>
                <p className="text-green-700">
                  Your inquiry has been received. A member of our certification team will contact you within 1 business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="input"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="input"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="company">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="input"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="input"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="productType">
                    Product Type*
                  </label>
                  <select
                    id="productType"
                    name="productType"
                    value={formState.productType}
                    onChange={handleChange}
                    className="input"
                    required
                  >
                    <option value="">Select a product category</option>
                    <option value="Food Products">Food Products</option>
                    <option value="Consumer Goods">Consumer Goods</option>
                    <option value="Cosmetics">Cosmetics</option>
                    <option value="Children's Products">Children's Products</option>
                    <option value="Supplements">Supplements</option>
                    <option value="Pharmaceuticals">Pharmaceuticals</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="input"
                    placeholder="Please provide details about your product and testing needs..."
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button type="submit" className="btn btn-primary w-full">
                    Submit Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;