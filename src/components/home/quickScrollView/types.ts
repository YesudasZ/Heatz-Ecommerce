export interface ScrollViewItem {
    id: number
    heading1: string
    heading2: string
    imagePath: string
  }
  
  export interface ScrollViewSliderProps {
    scrollItems: ScrollViewItem[]
    currentIndex: number
    setCurrentIndex: (index: number) => void
    nextSlide: () => void
    prevSlide: () => void
  }
  
  