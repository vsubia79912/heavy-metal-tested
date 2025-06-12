import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "What heavy metals do you test for?",
      answer: "We test for the most common and harmful heavy metals including lead, mercury, arsenic, cadmium, chromium, and aluminum. Our comprehensive panel can also include additional metals like nickel, antimony, and tin upon request, based on your specific product requirements and regulatory needs."
    },
    {
      question: "How accurate is your testing methodology?",
      answer: "Our laboratory utilizes state-of-the-art Inductively Coupled Plasma Mass Spectrometry (ICP-MS) technology that can detect heavy metals at the parts per billion (ppb) level. This precision allows us to meet or exceed all international regulatory standards for heavy metal testing with an accuracy rate of 99.9%."
    },
    {
      question: "How long does the certification process take?",
      answer: "The standard certification timeline is 2-3 weeks from sample submission to final certification. Expedited testing is available for time-sensitive projects, with results possible in as little as 5 business days for an additional fee. The exact timeline depends on the complexity of the product and the specific metals being tested."
    },
    {
      question: "How often should products be recertified?",
      answer: "We recommend annual recertification for most products to ensure ongoing compliance with safety standards. Products with changing ingredients or sourcing may require more frequent testing. Our certification is valid for one year, after which a simplified renewal process is available."
    },
    {
      question: "What is the difference between your certification and regulatory compliance testing?",
      answer: "Regulatory compliance testing focuses solely on meeting minimum government standards. Our certification goes beyond these minimums, applying more stringent thresholds based on the latest scientific research. Our certification not only ensures you meet regulatory requirements but also provides a recognized mark of quality that consumers trust."
    },
    {
      question: "Do you test international products?",
      answer: "Yes, we provide testing services for products from around the world. Our laboratory can accommodate international shipping of samples, and our certification is recognized globally. We're familiar with international regulations and can help ensure your products meet standards in your target markets."
    },
    {
      question: "What does your certification logo look like and how can it be used?",
      answer: "Our certification logo features a distinctive shield with a laboratory beaker symbol, conveying both protection and scientific testing. Certified companies receive comprehensive brand guidelines on how to use the logo on packaging, marketing materials, and websites. The logo can be used for the duration of your certification validity."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="section bg-gray-50 py-24">
      <div className="text-center mb-16">
        <h2 className="gradient-text inline-block">Frequently Asked Questions</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Get answers to common questions about our heavy metal testing and certification process.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`card overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'ring-2 ring-blue-300' : ''
              }`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUpIcon className="h-5 w-5 text-blue-900 flex-shrink-0" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-blue-900 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'pb-6 max-h-96' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Have a question that's not covered here?
          </p>
          <a href="#contact" className="btn btn-outline">
            Contact Our Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;