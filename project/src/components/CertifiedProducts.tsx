import React, { useState } from 'react';
import { CheckCircleIcon, SearchIcon } from 'lucide-react';

const CertifiedProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample certified products data
  const products = [
    {
      id: 1,
      name: "Pure Earth Baby Food",
      company: "Nature's Nurture",
      category: "Baby Food",
      certificationDate: "March 15, 2025",
      image: "https://images.pexels.com/photos/10007318/pexels-photo-10007318.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      name: "OceanFresh Omega Supplements",
      company: "VitalLife",
      category: "Supplements",
      certificationDate: "February 8, 2025",
      image: "https://images.pexels.com/photos/6941884/pexels-photo-6941884.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      name: "CleanSkin Facial Serum",
      company: "PureBeauty",
      category: "Cosmetics",
      certificationDate: "January 22, 2025",
      image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 4,
      name: "SafePlay Building Blocks",
      company: "KidFirst Toys",
      category: "Children's Products",
      certificationDate: "March 1, 2025",
      image: "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 5,
      name: "GrainPure Organic Rice",
      company: "Earth Harvest",
      category: "Food Products",
      certificationDate: "February 17, 2025",
      image: "https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 6,
      name: "SafeCook Stainless Cookware",
      company: "KitchenPro",
      category: "Consumer Goods",
      certificationDate: "January 5, 2025",
      image: "https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  // Filter products based on search term
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="certification" className="section">
      <div className="text-center mb-16">
        <h2 className="gradient-text inline-block">Certified Products</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Browse our database of products that have earned the Heavy Metal Tested certification,
          demonstrating their commitment to consumer safety.
        </p>
      </div>

      {/* Search bar */}
      <div className="max-w-md mx-auto mb-12">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="input pl-10"
            placeholder="Search by product, company or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      {/* Products grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card overflow-hidden group">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-2 right-2 bg-teal-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                <CheckCircleIcon className="h-3 w-3 mr-1" />
                Certified
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">{product.name}</h3>
              <p className="text-gray-600 mb-3">{product.company}</p>
              <div className="flex justify-between items-center">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {product.category}
                </span>
                <span className="text-gray-500 text-sm">
                  Certified: {product.certificationDate}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">
          Don't see your product? Get it certified today.
        </p>
        <a href="#contact" className="btn btn-secondary">
          Apply for Certification
        </a>
      </div>
    </div>
  );
};

export default CertifiedProducts;