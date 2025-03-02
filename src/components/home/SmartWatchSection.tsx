import React from 'react';
import Button from '../common/Button';

const SmartWatchSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-heatz-gray">
      <div className="container mx-auto">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[url('/src/assets/images/banners/smartwatch-bg.png')] bg-cover bg-center opacity-30" />
          
          <div className="relative p-8 md:p-16">
            <div className="max-w-lg">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">Queen's Edition <br />Smartwatch</h2>
              <p className="text-white/70 mb-8">
                Elegance meets cutting-edge technology in our limited edition smartwatch.
                Designed for those who appreciate both style and functionality.
              </p>
              <Button size="lg">Discover Now</Button>
            </div>
          </div>
          
          <div className="absolute bottom-8 right-8 md:right-16 w-32 h-32 md:w-48 md:h-48">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-heatz-green rounded-full opacity-20 animate-pulse-slow" />
              <div className="absolute inset-2 bg-heatz-green rounded-full opacity-10 animate-pulse-slow" />
              <img 
                src="/src/assets/images/products/smartwatch-floating.png" 
                alt="Queen's Edition Smartwatch" 
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartWatchSection;