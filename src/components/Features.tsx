import React from 'react';
import { ShieldCheckIcon, BeakerIcon, AwardIcon, ClipboardCheckIcon, LucideIcon } from 'lucide-react';
import { FeaturesSection } from '@/lib/types';

interface FeaturesProps {
  data?: FeaturesSection;
}

const iconMap: Record<string, LucideIcon> = {
  shield: ShieldCheckIcon,
  beaker: BeakerIcon,
  award: AwardIcon,
  clipboard: ClipboardCheckIcon,
};

const Features = ({ data }: FeaturesProps) => {
  // Use Sanity data if available, otherwise use default content
  const featuresData = data || {
    title: "Why Choose Our Certification",
    description: "Our rigorous testing methodology ensures your products are free from harmful heavy metal contamination, protecting your customers and enhancing your brand's reputation.",
    features: [
      {
        icon: 'shield',
        title: 'Scientific Accuracy',
        description: 'Industry-leading testing protocols with precision down to parts per billion for accurate detection of heavy metals.'
      },
      {
        icon: 'beaker',
        title: 'Comprehensive Testing',
        description: 'We test for lead, mercury, cadmium, arsenic and other harmful heavy metals across all product components.'
      },
      {
        icon: 'award',
        title: 'Trusted Certification',
        description: 'Our certification is recognized worldwide as the gold standard for heavy metal safety in consumer products.'
      },
      {
        icon: 'clipboard',
        title: 'Transparent Reporting',
        description: 'Detailed reports that clearly communicate testing results and provide actionable insights.'
      }
    ]
  };

  return (
    <div id="features" className="section">
      <div className="text-center mb-16">
        <h2 className="gradient-text inline-block">{featuresData.title}</h2>
        {featuresData.description && (
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            {featuresData.description}
          </p>
        )}
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuresData.features.map((feature, index) => {
          const IconComponent = feature.icon ? iconMap[feature.icon] || ShieldCheckIcon : ShieldCheckIcon;
          
          return (
            <div 
              key={index} 
              className="card p-6 flex flex-col items-center text-center hover:translate-y-[-4px] transition-all"
            >
              <div className="p-3 bg-blue-50 rounded-full mb-4">
                <IconComponent className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              {feature.description && (
                <p className="text-gray-600">{feature.description}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features; 