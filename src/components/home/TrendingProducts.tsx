import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { products } from '../../data/products';

const TrendingProducts: React.FC = () => {
  const trendingProducts = products.filter(product => product.isTrending);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? trendingProducts.length - 1 : prev - 1));
  };
  
  const goToNext = () => {
    setCurrentIndex((prev) => (prev === trendingProducts.length - 1 ? 0 : prev + 1));
  };
  
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Trending Products.</h2>
            <p className="text-white/70 mt-2">Explore what's hot right now</p>
          </div>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <button 
              onClick={goToPrevious}
              className="p-2 bg-heatz-gray rounded-full hover:bg-heatz-green hover:text-black transition-colors duration-300"
            >
              <FiChevronLeft size={20} />
            </button>
            <button 
              onClick={goToNext}
              className="p-2 bg-heatz-gray rounded-full hover:bg-heatz-green hover:text-black transition-colors duration-300"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {trendingProducts.map((product) => (
              <div key={product.id} className="min-w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-heatz-gray rounded-xl p-8 flex items-center justify-center">
                    <img 
                      src={product.imageSrc} 
                      alt={product.name} 
                      className="max-h-80 object-contain hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-heatz-green mb-2">{product.category}</span>
                    <h3 className="text-3xl font-bold mb-4">{product.name}</h3>
                    <p className="text-white/70 mb-6">
                      Experience unparalleled sound quality with the latest {product.name}.
                      Designed for audiophiles who demand nothing but the best.
                    </p>
                    <div className="mb-8">
                      <span className="text-2xl font-bold">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-white/60 line-through ml-3">${product.originalPrice}</span>
                      )}
                    </div>
                    <button className="bg-heatz-green text-black font-medium py-3 px-8 rounded-full hover:bg-opacity-80 transition-all duration-300 w-fit">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {trendingProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-heatz-green w-4' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;