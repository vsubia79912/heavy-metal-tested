import React from 'react';

const ProductCategories = () => {
  return (
    <div id="products" className="section bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="gradient-text inline-block">Product Categories</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          We test a wide range of consumer products for heavy metal contamination.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {['Electronics', 'Cosmetics', 'Food Products', 'Children\'s Toys'].map((category, index) => (
          <div key={index} className="card p-6 text-center">
            <h3 className="text-lg font-bold mb-2">{category}</h3>
            <p className="text-gray-600">Comprehensive testing for safety compliance</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories; 