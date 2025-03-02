import React from 'react';
import Button from '../common/Button';

const FeaturedSection: React.FC = () => {
  return (
    <section className="py-12 bg-heatz-gray">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ZK2G! Section */}
          <div className="relative rounded-2xl overflow-hidden h-80 bg-gradient-to-br from-purple-800 to-indigo-900 group">
            <div className="absolute inset-0 bg-[url('/src/assets/images/banners/zk2g-bg.png')] bg-cover bg-center mix-blend-overlay opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative h-full flex flex-col justify-center items-center text-center p-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">ZK2G!</h2>
              <p className="text-white/80 mb-6">Experience the next generation of gaming audio.</p>
              <Button>Learn More</Button>
            </div>
          </div>
          
          {/* LED Section */}
          <div className="relative rounded-2xl overflow-hidden h-80 bg-gradient-to-br from-amber-500 to-orange-600 group">
            <div className="absolute inset-0 bg-[url('/src/assets/images/banners/led-bg.png')] bg-cover bg-center mix-blend-overlay opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative h-full flex flex-col justify-center items-center text-center p-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">LED FX</h2>
              <p className="text-white/80 mb-6">Illuminate your audio experience with dynamic effects.</p>
              <Button>Discover</Button>
            </div>
          </div>
        </div>
      </div>
    </section>)}

    export default FeaturedSection