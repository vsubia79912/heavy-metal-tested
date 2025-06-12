import React from 'react';

const CertifiedProducts = () => {
  return (
    <div id="certification" className="section">
      <div className="text-center mb-16">
        <h2 className="gradient-text inline-block">Certified Products</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Products that have passed our rigorous heavy metal testing standards.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item, index) => (
          <div key={index} className="card p-6">
            <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
            <h3 className="text-lg font-bold mb-2">Certified Product {item}</h3>
            <p className="text-gray-600">Heavy metal tested and certified safe for consumer use.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertifiedProducts; 