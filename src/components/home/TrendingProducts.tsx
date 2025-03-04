import React, { useEffect, useState } from "react";

const TrendingProducts: React.FC = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const productImages = [
    "src/assets/images/trendingproducts/tproduct1.png",
    "src/assets/images/trendingproducts/tproduct2.png",
    "src/assets/images/trendingproducts/tproduct3.png",
  ];

  const allProducts = Array(4).fill(productImages).flat(); 
  const productWidth = 256; 

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollIndex((prevIndex) => (prevIndex + 1) % allProducts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [allProducts.length]);

  const handlePrev = () => {
    setScrollIndex((prevIndex) =>
      prevIndex === 0 ? allProducts.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setScrollIndex((prevIndex) => (prevIndex + 1) % allProducts.length);
  };

  return (
    <section className="bg-black text-white py-16 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="max-w-[75%] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start text-center md:text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-bold w-full">
              Trending Products
            </h2>
            <div className="w-full md:w-2/3 mt-4 md:mt-0 text-sm md:text-[10px] text-gray-300">
              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
                <br />
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.
                when an unknown printer
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex items-center">
          <button
            onClick={handlePrev}
            className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 z-10 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
          >
            &lt;
          </button>

          <div className="flex overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${scrollIndex * productWidth}px)` }}
            >
              {allProducts.map((src, index) => (
                <div key={index} className="flex-shrink-0 px-2 w-64">
                  <img
                    src={src}
                    alt={`Trending Product ${index + 1}`}
                    className="w-full h-90 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handleNext}
            className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 z-10 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;


