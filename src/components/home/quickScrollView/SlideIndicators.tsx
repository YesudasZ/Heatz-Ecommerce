import type React from "react"

interface SlideIndicatorsProps {
  itemCount: number
  currentIndex: number
  setCurrentIndex: (index: number) => void
}

const SlideIndicators: React.FC<SlideIndicatorsProps> = ({ itemCount, currentIndex, setCurrentIndex }) => {
  return (
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {[...Array(itemCount)].map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentIndex(index)}
          className={`h-[2px] w-5 transition-all duration-300 ${index === currentIndex ? "bg-white" : "bg-gray-500"}`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  )
}

export default SlideIndicators

