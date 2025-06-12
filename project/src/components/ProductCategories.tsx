import React from 'react';
import { UtensilsIcon, ShoppingBagIcon, SparklesIcon, BabyIcon, LeafIcon, PillIcon } from 'lucide-react';

const ProductCategories = () => {
  const categories = [
    {
      icon: <UtensilsIcon className="h-10 w-10" />,
      title: 'Food Products',
      description: 'Ensuring your food products are free from harmful heavy metals like lead, arsenic, and mercury.',
      examples: 'Rice, Baby Food, Protein Powders, Spices, Seafood, Fruit Juices'
    },
    {
      icon: <ShoppingBagIcon className="h-10 w-10" />,
      title: 'Consumer Goods',
      description: 'Testing everyday items for heavy metals that may leach into food or be absorbed through skin.',
      examples: 'Cookware, Dishware, Food Storage Containers, Utensils'
    },
    {
      icon: <SparklesIcon className="h-10 w-10" />,
      title: 'Cosmetics',
      description: 'Verifying makeup and skincare products are free from heavy metal contamination.',
      examples: 'Lipstick, Foundation, Eye Makeup, Skincare Products'
    },
    {
      icon: <BabyIcon className="h-10 w-10" />,
      title: 'Children\'s Products',
      description: 'Ensuring toys and child-focused products meet the strictest safety standards.',
      examples: 'Toys, Pacifiers, Teething Products, Art Supplies'
    },
    {
      icon: <LeafIcon className="h-10 w-10" />,
      title: 'Supplements',
      description: 'Testing vitamins and supplements for heavy metal contamination.',
      examples: 'Multivitamins, Herbal Supplements, Protein Powders, Minerals'
    },
    {
      icon: <PillIcon className="h-10 w-10" />,
      title: 'Pharmaceuticals',
      description: 'Verifying medications and pharmaceutical ingredients meet safety standards.',
      examples: 'APIs, Finished Medications, Raw Materials'
    }
  ];

  return (
    <div id="products" className="section bg-gray-50 py-24">
      <div className="text-center mb-16">
        <h2 className="gradient-text inline-block">Product Categories We Test</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Our comprehensive heavy metal testing services cover a wide range of products 
          across multiple industries, protecting consumers from harmful contaminants.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="card p-8 hover:translate-y-[-4px] transition-all group"
          >
            <div className="p-4 bg-blue-50 rounded-full inline-block mb-6 group-hover:bg-gradient-to-r group-hover:from-blue-900 group-hover:to-teal-600 transition-all duration-300">
              <div className="text-blue-900 group-hover:text-white transition-colors duration-300">
                {category.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">{category.title}</h3>
            <p className="text-gray-600 mb-4">{category.description}</p>
            <div>
              <h4 className="text-sm font-semibold text-blue-900 mb-2">Common Products:</h4>
              <p className="text-gray-500 text-sm">{category.examples}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a href="#contact" className="btn btn-outline">
          Inquire About Your Product Category
        </a>
      </div>
    </div>
  );
};

export default ProductCategories;