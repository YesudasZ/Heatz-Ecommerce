import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative">
      <div className="w-full h-screen min-h-[600px] relative overflow-hidden">
        <img
          src="/src/assets/images/banners/banner.png"
          alt="HEATZ Banner"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="absolute bottom-10 left-[15%] right-[15%]">
        <div className="container mx-auto">
          <div
            className="transition-all duration-300 rounded-3xl 
        bg-[linear-gradient(180deg,rgba(217,217,217,0.1)_0%,rgba(217,217,217,0.05)_100%)] 
        backdrop-blur-md mx-4 md:mx-8 mb-8 p-4 flex justify-between items-center overflow-x-auto"
          >
            {[...Array(12)].map((_, index) => (
              <div key={index} className="flex-shrink-0 mx-2">
                <img
                  src="/src/assets/images/products/headseticon.png"
                  alt="Headset"
                  className="h-8 w-8 md:h-10 md:w-10"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
