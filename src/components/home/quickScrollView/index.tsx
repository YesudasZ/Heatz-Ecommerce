import type React from "react"
import { useState, useEffect, useCallback } from "react"
import ScrollViewHeader from "./ScrollViewHeader"
import ScrollViewSlider from "./ScrollViewSlider"
import type { ScrollViewItem } from "./types"
import image1 from '../../../assets/images/scroll/scrollimage1.png';
import image2 from '../../../assets/images/scroll/scrollimage2.png';

const QuickLinkScrollView: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const scrollItems: ScrollViewItem[] = [
    {
      id: 1,
      heading1: "Boost up your",
      heading2: "Audio experience.",
      imagePath: image1,
    },
    {
      id: 2,
      heading1: "Queen's Edition",
      heading2: "Smartwatch",
      imagePath: image2,
    },
    {
      id: 3,
      heading1: "Boost up your",
      heading2: "Audio experience.",
      imagePath: image1,
    }, 
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === scrollItems.length - 1 ? 0 : prevIndex + 1))
  }, [scrollItems.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? scrollItems.length - 1 : prevIndex - 1))
  }, [scrollItems.length])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="w-full bg-black">
      <ScrollViewHeader />
      <ScrollViewSlider
        scrollItems={scrollItems}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
    </div>
  )
}

export default QuickLinkScrollView

