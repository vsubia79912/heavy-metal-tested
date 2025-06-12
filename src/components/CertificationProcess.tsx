import React from 'react';

const CertificationProcess = () => {
  return (
    <div id="process" className="section">
      <div className="text-center mb-16">
        <h2 className="gradient-text inline-block">Certification Process</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Our rigorous certification process ensures your products meet the highest safety standards.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="card p-6 text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-blue-900 font-bold">1</span>
          </div>
          <h3 className="text-xl font-bold mb-2">Submit Sample</h3>
          <p className="text-gray-600">Send us your product samples for comprehensive testing</p>
        </div>
        
        <div className="card p-6 text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-blue-900 font-bold">2</span>
          </div>
          <h3 className="text-xl font-bold mb-2">Laboratory Testing</h3>
          <p className="text-gray-600">Advanced testing for heavy metals using precision equipment</p>
        </div>
        
        <div className="card p-6 text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-blue-900 font-bold">3</span>
          </div>
          <h3 className="text-xl font-bold mb-2">Certification</h3>
          <p className="text-gray-600">Receive your certification and safety documentation</p>
        </div>
      </div>
    </div>
  );
};

export default CertificationProcess; 