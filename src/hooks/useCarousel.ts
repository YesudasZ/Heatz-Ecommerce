import { useState, useEffect, useRef, useCallback } from "react"

interface UseCarouselProps {
  itemsCount: number
  autoPlayInterval?: number
  initialIndex?: number
}

const useCarousel = ({ itemsCount, autoPlayInterval = 3000, initialIndex = 0 }: UseCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const carouselRef = useRef<HTMLDivElement>(null)

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % itemsCount)
  }, [itemsCount])

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? itemsCount - 1 : prev - 1))
  }, [itemsCount])

  const goToIndex = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  useEffect(() => {
    if (autoPlayInterval <= 0) return

    const interval = setInterval(() => {
      goToNext()
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlayInterval, goToNext])

  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = currentIndex * (carouselRef.current.offsetWidth / itemsCount)
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }, [currentIndex, itemsCount])

  return {
    currentIndex,
    carouselRef,
    goToNext,
    goToPrev,
    goToIndex,
  }
}

export default useCarousel

