import React from 'react';
import { ShieldCheckIcon, ArrowDownIcon } from 'lucide-react';
import { HeroSection } from '@/lib/types';

interface HeroProps {
  data?: HeroSection;
}

const Hero = ({ data }: HeroProps) => {
  // Use Sanity data if available, otherwise use default content
  const heroData = data || {
    badgeText: "Trusted by leading brands worldwide",
    headline: "Scientific Testing for",
    highlightText: "Heavy Metals",
    description: "Our comprehensive testing and certification program ensures your products are safe from harmful heavy metal contamination.",
    primaryButton: { text: "Get Certified", link: "#contact" },
    secondaryButton: { text: "Learn More", link: "#process" }
  };

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-r from-blue-900 to-blue-800 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -right-10 -top-10 w-72 h-72 bg-teal-400 rounded-full"></div>
        <div className="absolute left-32 top-1/4 w-48 h-48 bg-blue-400 rounded-full"></div>
        <div className="absolute right-1/4 bottom-20 w-64 h-64 bg-teal-500 rounded-full"></div>
        <div className="absolute -left-10 bottom-10 w-80 h-80 bg-blue-500 rounded-full"></div>
      </div>
      
      <div className="section relative z-10 text-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            {heroData.badgeText && (
              <div className="inline-block px-4 py-2 bg-blue-700 bg-opacity-50 rounded-lg mb-2">
                <p className="text-sm font-medium flex items-center">
                  <ShieldCheckIcon className="h-4 w-4 mr-2" />
                  {heroData.badgeText}
                </p>
              </div>
            )}
            
            <h1 className="text-white leading-tight">
              {heroData.headline} {heroData.highlightText && (
                <span className="text-teal-300">{heroData.highlightText}</span>
              )}
            </h1>
            
            {heroData.description && (
              <p className="text-blue-100 text-lg md:text-xl max-w-lg">
                {heroData.description}
              </p>
            )}
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              {heroData.primaryButton && (
                <a href={heroData.primaryButton.link} className="btn btn-secondary">
                  {heroData.primaryButton.text}
                </a>
              )}
              {heroData.secondaryButton && (
                <a href={heroData.secondaryButton.link} className="btn bg-white text-blue-900 hover:bg-blue-50">
                  {heroData.secondaryButton.text}
                </a>
              )}
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="relative mx-auto w-80 h-80">
              {/* Lab beaker/certification visual */}
              <div className="absolute inset-0 flex justify-center">
                <div className="w-40 h-64 rounded-b-3xl rounded-t-xl border-4 border-white relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 right-0 bg-teal-400 animate-fill"></div>
                </div>
              </div>
              
              {/* Elements */}
              <div className="absolute top-8 -left-4 w-20 h-20 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="font-bold text-xl">Hg</div>
                  <div className="text-xs">Mercury</div>
                </div>
              </div>
              
              <div className="absolute bottom-12 -right-4 w-20 h-20 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="font-bold text-xl">Pb</div>
                  <div className="text-xs">Lead</div>
                </div>
              </div>
              
              <div className="absolute top-1/2 -right-8 w-20 h-20 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="font-bold text-xl">Cd</div>
                  <div className="text-xs">Cadmium</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <a href="#features" className="flex flex-col items-center">
          <span className="text-sm mb-1">Discover More</span>
          <ArrowDownIcon className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

export default Hero; 