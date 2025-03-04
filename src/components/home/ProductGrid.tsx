import type React from "react"
import { useState } from "react"
import { FiChevronRight } from "react-icons/fi"
import ProductCard, { type Product } from "../ui/product-card"
import CategoryButton from "../ui/category-button"
import ProgressBar from "../ui/progress-bar"
import useCarousel from "../../hooks/useCarousel"
import useMediaQuery, { breakpoints } from "../../hooks/useMediaQuery"
import { defaultCategories,defaultProducts } from "../../data/products"

interface ProductGridProps {
  title?: string
  products?: Product[]
  categories?: string[]
  className?: string
}

const ProductGrid: React.FC<ProductGridProps> = ({
  title,
  products = defaultProducts,
  categories = defaultCategories,
  className = "",
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0])
  const isMobile = useMediaQuery(breakpoints.mobile)
  const isTablet = useMediaQuery(breakpoints.tablet)

  const { currentIndex, carouselRef} = useCarousel({
    itemsCount: products.length,
    autoPlayInterval: 2000,
  })
  return (
    <section className={`py-6 bg-black text-white ${className}`}>
      <div className="container mx-auto px-4 md:max-w-[85%] lg:max-w-[75%] xl:max-w-[65%]">
        {title && <h2 className="text-2xl md:text-3xl font-bold mb-8">{title}</h2>}

        <div className="flex flex-col md:flex-row justify-between items-center  mb-8 gap-4">
          <div className="flex bg-[#333333] rounded-full  overflow-x-auto md:overflow-visible w-full md:w-auto">
            {categories.map((category) => (
              <CategoryButton
                key={category}
                category={category}
                isActive={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              />
            ))}
          </div>

          <button className="flex items-center text-white text-[10px] hover:text-green-400 transition whitespace-nowrap">
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
                key={`${product.id}-${index}`}
                className={`flex-none px-1 snap-center ${isMobile ? "w-full" : isTablet ? "w-1/2" : "w-1/4"}`}
              >
                <ProductCard product={product} showIndicators={index === 0 || index === 3} />
              </div>
            ))}
          </div>
        </div>

        <ProgressBar currentIndex={currentIndex} totalItems={products.length} />
      </div>
    </section>
  )
}

export default ProductGrid


