import React from 'react';
import { FlaskConicalIcon, ClipboardCheckIcon, AwardIcon, BeakerIcon } from 'lucide-react';

const CertificationProcess = () => {
  const steps = [
    {
      icon: <BeakerIcon className="h-8 w-8 text-white" />,
      title: 'Sample Collection',
      description: 'Products are sampled using scientifically valid methods to ensure representative testing.',
      details: 'Our trained technicians use ISO-certified collection methods to gather samples from multiple product batches, ensuring statistical validity.'
    },
    {
      icon: <FlaskConicalIcon className="h-8 w-8 text-white" />,
      title: 'Laboratory Analysis',
      description: 'Samples undergo rigorous testing using state-of-the-art ICP-MS technology.',
      details: 'We utilize Inductively Coupled Plasma Mass Spectrometry (ICP-MS) that can detect heavy metals at parts per billion (ppb) levels with exceptional accuracy.'
    },
    {
      icon: <ClipboardCheckIcon className="h-8 w-8 text-white" />,
      title: 'Results Verification',
      description: 'Test results are thoroughly reviewed by our team of toxicologists and chemists.',
      details: 'Multiple verification steps ensure testing accuracy, with all results cross-checked against established safety thresholds and regulatory limits.'
    },
    {
      icon: <AwardIcon className="h-8 w-8 text-white" />,
      title: 'Certification Issued',
      description: 'Products meeting our strict standards receive the Heavy Metal Tested certification.',
      details: 'Certified products can display our seal and are listed in our public database, providing transparency and assurance to consumers.'
    }
  ];

  return (
    <div id="process" className="section">
      <div className="text-center mb-16">
        <h2 className="gradient-text inline-block">Our Certification Process</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Our comprehensive testing methodology follows a rigorous scientific process 
          to ensure products are safe from harmful heavy metal contamination.
        </p>
      </div>
      
      <div className="relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-900 to-teal-600 transform -translate-x-1/2 z-0"></div>
        
        <div className="space-y-12 relative z-10">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className={`md:grid md:grid-cols-2 md:gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                {/* Circle in the middle for desktop */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="bg-gradient-to-r from-blue-900 to-teal-600 rounded-full p-4 shadow-lg">
                    <span className="flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </span>
                  </div>
                </div>
                
                <div className={`card p-6 md:p-8 ${index % 2 === 0 ? 'md:text-right md:mr-12' : 'md:ml-12'}`}>
                  <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <div className="bg-gradient-to-r from-blue-900 to-teal-600 rounded-full p-3 md:hidden mr-4">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  <p className="text-gray-500 text-sm">{step.details}</p>
                </div>
                
                <div className={`hidden md:block ${index % 2 === 0 ? 'md:order-first' : ''}`}>
                  <div className="relative rounded-lg overflow-hidden shadow-lg h-64 bg-blue-50">
                    <div className={`absolute inset-0 bg-gradient-to-br from-blue-900/90 to-teal-600/90 flex items-center justify-center p-8 text-white`}>
                      <div className="text-center">
                        <div className="rounded-full bg-white bg-opacity-20 p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                          {step.icon}
                        </div>
                        <p className="text-lg">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <a href="#contact" className="btn btn-primary">
          Start Your Certification Process
        </a>
      </div>
    </div>
  );
};

export default CertificationProcess;