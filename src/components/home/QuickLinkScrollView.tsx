import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface ScrollViewItem {
  id: number;
  heading1: string;
  heading2: string;
  imagePath: string;
}

const QuickLinkScrollView: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollItems: ScrollViewItem[] = [
    {
      id: 1,
      heading1: "Boost up your",
      heading2: "Audio experience.",
      imagePath: "/src/assets/images/scroll/scrollimage1.png",
    },
    {
      id: 2,
      heading1: "Queen's Edition",
      heading2: "Smartwatch",
      imagePath: "/src/assets/images/scroll/scrollimage2.png",
    },
    {
      id: 1,
      heading1: "Boost up your",
      heading2: "Audio experience.",
      imagePath: "/src/assets/images/scroll/scrollimage1.png",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === scrollItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? scrollItems.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black">
      <div className="max-w-[65%] mx-auto px-4 md:px-8 pt-16">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <h2 className="text-4xl md:text-4xl font-bold text-white mb-4 md:mb-0 md:w-1/2">
            Boost up your
            <br />
            Gaming experience.
          </h2>
          <p className="text-gray-300 md:w-1/2 text-[12px] mt-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer
          </p>
        </div>
      </div>

      <div className="relative w-full mt-10">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {scrollItems.map((item, index) => (
              <div key={item.id} className="min-w-full">
                <div className="relative mx-auto max-w-[65%] px-4 md:px-8">
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      src={item.imagePath}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-[400px] md:h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                      <h3 className="text-2xl md:text-3xl font-bold text-center ">
                        {item.heading1}
                      </h3>
                      <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
                        {item.heading2}
                      </h3>
                      <button className="px-8 py-2.5 border border-white rounded-full hover:border-heatz-green hover:bg-heatz-green hover:text-black transition-all duration-300 text-sm md:text-base">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-80 top-1/2 transform -translate-y-1/2 rounded-full p-3 text-gray-500 transition-all"
          aria-label="Previous slide"
        >
          <IoIosArrowBack size={30} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-80 top-1/2 transform -translate-y-1/2 rounded-full p-3 text-gray-500 transition-all"
          aria-label="Next slide"
        >
          <IoIosArrowForward size={30} />
        </button>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {scrollItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-[2px] w-5 transition-all duration-300 ${
                index === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinkScrollView;
