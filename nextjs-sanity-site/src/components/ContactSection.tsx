import React from 'react';

const ContactSection = () => {
  return (
    <div id="contact" className="section bg-blue-900 text-white">
      <div className="text-center mb-16">
        <h2 className="text-white">Get Started Today</h2>
        <p className="max-w-3xl mx-auto text-blue-100 text-lg">
          Ready to certify your products? Contact us to begin the testing process.
        </p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="input bg-blue-800 text-white border-blue-700 placeholder-blue-300"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="input bg-blue-800 text-white border-blue-700 placeholder-blue-300"
            />
          </div>
          <input
            type="text"
            placeholder="Company Name"
            className="input bg-blue-800 text-white border-blue-700 placeholder-blue-300"
          />
          <textarea
            rows={4}
            placeholder="Tell us about your testing needs..."
            className="input bg-blue-800 text-white border-blue-700 placeholder-blue-300"
          ></textarea>
          <div className="text-center">
            <button type="submit" className="btn btn-secondary">
              Get Quote
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSection; 