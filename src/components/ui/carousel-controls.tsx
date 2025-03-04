import type React from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

interface CarouselControlsProps {
  onPrev: () => void
  onNext: () => void
  className?: string
}

const CarouselControls: React.FC<CarouselControlsProps> = ({ onPrev, onNext, className = "" }) => {
  return (
    <>
      <button
        onClick={onPrev}
        className={`absolute left-2 md:left-[-50px] top-1/2 transform -translate-y-1/2 z-10 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition ${className}`}
        aria-label="Previous"
      >
        <FiChevronLeft />
      </button>
      <button
        onClick={onNext}
        className={`absolute right-2 md:right-[-50px] top-1/2 transform -translate-y-1/2 z-10 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition ${className}`}
        aria-label="Next"
      >
        <FiChevronRight />
      </button>
    </>
  )
}

export default CarouselControls

