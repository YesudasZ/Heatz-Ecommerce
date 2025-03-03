import React, { useState, useEffect, useRef } from "react";
import { FiChevronRight } from "react-icons/fi";

interface ProductGridProps {
  title?: string;
}

type CategoryType = "Headset" | "Mouse" | "Keyboard" | "10% Offers";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageSrc: string;
  label: "Best Buy" | "Trending";
}

const ProductGrid: React.FC<ProductGridProps> = ({ title }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("Headset");
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const categories: CategoryType[] = [
    "Headset",
    "Mouse",
    "Keyboard",
    "10% Offers",
  ];

  const products: Product[] = [
    {
      id: "1",
      name: "Product 1",
      price: 2599,
      description: "Lorem Ipsum is simply dummy text of the printing.",
      imageSrc: "/src/assets/images/products/product1.png",
      label: "Best Buy",
    },
    {
      id: "2",
      name: "Product 2",
      price: 2599,
      description: "Lorem Ipsum is simply dummy text of the printing.",
      imageSrc: "/src/assets/images/products/product2.png",
      label: "Best Buy",
    },
    {
      id: "3",
      name: "Product 3",
      price: 2599,
      description: "Lorem Ipsum is simply dummy text of the printing.",
      imageSrc: "/src/assets/images/products/product3.png",
      label: "Best Buy",
    },
    {
      id: "4",
      name: "Product 4",
      price: 2599,
      description: "Lorem Ipsum is simply dummy text of the printing.",
      imageSrc: "/src/assets/images/products/product4.png",
      label: "Trending",
    },
    {
      id: "1",
      name: "Product 1",
      price: 2599,
      description: "Lorem Ipsum is simply dummy text of the printing.",
      imageSrc: "/src/assets/images/products/product1.png",
      label: "Best Buy",
    },
    {
      id: "2",
      name: "Product 2",
      price: 2599,
      description: "Lorem Ipsum is simply dummy text of the printing.",
      imageSrc: "/src/assets/images/products/product2.png",
      label: "Best Buy",
    },
    {
      id: "3",
      name: "Product 3",
      price: 2599,
      description: "Lorem Ipsum is simply dummy text of the printing.",
      imageSrc: "/src/assets/images/products/product3.png",
      label: "Best Buy",
    },
    {
      id: "4",
      name: "Product 4",
      price: 2599,
      description: "Lorem Ipsum is simply dummy text of the printing.",
      imageSrc: "/src/assets/images/products/product4.png",
      label: "Trending",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlide < products.length - 1) {
        setCurrentSlide((prev) => prev + 1);
      } else {
        setCurrentSlide(0);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [currentSlide, products.length]);

  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount =
        currentSlide * (carouselRef.current.offsetWidth / products.length);
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, [currentSlide]);

  return (
    <section className="py-12 bg-black text-white">
      <div className="container max-w-[65%] mx-auto px-4">
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold mb-8">{title}</h2>
        )}

        <div className="flex justify-between items-center mb-8">
          <div className="flex bg-[#333333] rounded-full p-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`py-3 px-6 rounded-full text-sm md:text-base transition-colors ${
                  activeCategory === category
                    ? "bg-green-500 text-black font-semibold"
                    : "text-[#666666]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <button className="flex items-center text-white hover:text-green-400 transition">
            <span className="mr-2">View All Products</span>
            <FiChevronRight />
          </button>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product, index) => (
              <div
                key={product.id}
                className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-1 snap-center"
              >
                <div className="bg-gray-100 rounded-lg overflow-hidden text-black">
                  <div className="relative aspect-square bg-white p-6 flex items-center justify-center">
                    <img
                      src={product.imageSrc}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain"
                    />

                    {index === 3 && (
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-black"></div>
                        <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                      </div>
                    )}
                    {index === 0 && (
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-black"></div>
                        <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                      </div>
                    )}
                  </div>
                  <div className="p-4 bg-white">
                    <div className="text-xs text-gray-500 mb-1">
                      {product.label}
                    </div>
                    <p className="text-sm mb-2">{product.description}</p>
                    <div className="">₹ {product.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <div className="w-full  h-0.5 bg-gray-800 rounded overflow-hidden">
            <div
              className="h-full bg-green-500 transition-all duration-500"
              style={{
                width: `${100 / products.length}%`,
                marginLeft: `${(currentSlide * 100) / products.length}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
