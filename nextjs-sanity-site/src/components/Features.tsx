import React from 'react';
import { ShieldCheckIcon, BeakerIcon, AwardIcon, ClipboardCheckIcon } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-blue-900" />,
      title: 'Scientific Accuracy',
      description: 'Industry-leading testing protocols with precision down to parts per billion for accurate detection of heavy metals.'
    },
    {
      icon: <BeakerIcon className="h-8 w-8 text-blue-900" />,
      title: 'Comprehensive Testing',
      description: 'We test for lead, mercury, cadmium, arsenic and other harmful heavy metals across all product components.'
    },
    {
      icon: <AwardIcon className="h-8 w-8 text-blue-900" />,
      title: 'Trusted Certification',
      description: 'Our certification is recognized worldwide as the gold standard for heavy metal safety in consumer products.'
    },
    {
      icon: <ClipboardCheckIcon className="h-8 w-8 text-blue-900" />,
      title: 'Transparent Reporting',
      description: 'Detailed reports that clearly communicate testing results and provide actionable insights.'
    }
  ];

  return (
    <div id="features" className="section">
      <div className="text-center mb-16">
        <h2 className="gradient-text inline-block">Why Choose Our Certification</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Our rigorous testing methodology ensures your products are free from harmful heavy metal contamination, 
          protecting your customers and enhancing your brand's reputation.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="card p-6 flex flex-col items-center text-center hover:translate-y-[-4px] transition-all"
          >
            <div className="p-3 bg-blue-50 rounded-full mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features; 