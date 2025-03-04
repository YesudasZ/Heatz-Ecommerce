import type React from "react"
import type { ScrollViewItem } from "./types"
interface SlideItemProps {
  item: ScrollViewItem
  index: number
}
const SlideItem: React.FC<SlideItemProps> = ({ item, index }) => {

  return (
    <div className="min-w-full">
      <div className="relative mx-auto max-w-[65%] px-4 md:px-8">
        <div className="relative rounded-lg overflow-hidden">
          <img
            src={item.imagePath || "/placeholder.svg"}
            alt={`Slide ${index + 1}`}
            className="w-full h-[400px] md:h-[400px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold text-center">{item.heading1}</h3>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">{item.heading2}</h3>
            <button className="px-8 py-2.5 border border-white rounded-full hover:border-heatz-green hover:bg-heatz-green hover:text-black transition-all duration-300 text-sm md:text-base">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlideItem

