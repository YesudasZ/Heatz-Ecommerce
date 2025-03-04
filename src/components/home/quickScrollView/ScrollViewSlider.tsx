import type React from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import useMediaQuery, { breakpoints } from "../../../hooks/useMediaQuery"
import type { ScrollViewSliderProps } from "./types"
import SlideItem from "./SlideItem"
import SlideIndicators from "./SlideIndicators"

const ScrollViewSlider: React.FC<ScrollViewSliderProps> = ({
  scrollItems,
  currentIndex,
  setCurrentIndex,
  nextSlide,
  prevSlide,
}) => {
  const isMobile = useMediaQuery(breakpoints.mobile)


  // Adjust button positioning based on screen size
  const buttonLeftClass = isMobile ? "left-4" : "left-80"
  const buttonRightClass = isMobile ? "right-4" : "right-80"

  return (
    <div className="relative w-full mt-10">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {scrollItems.map((item, index) => (
            <SlideItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className={`absolute ${buttonLeftClass} top-1/2 transform -translate-y-1/2 rounded-full p-3 text-gray-500 transition-all`}
        aria-label="Previous slide"
      >
        <IoIosArrowBack size={30} />
      </button>
      <button
        onClick={nextSlide}
        className={`absolute ${buttonRightClass} top-1/2 transform -translate-y-1/2 rounded-full p-3 text-gray-500 transition-all`}
        aria-label="Next slide"
      >
        <IoIosArrowForward size={30} />
      </button>

      <SlideIndicators itemCount={scrollItems.length} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    </div>
  )
}

export default ScrollViewSlider

