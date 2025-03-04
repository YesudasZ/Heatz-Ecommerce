import type React from "react"
import useMediaQuery, { breakpoints } from "../../../hooks/useMediaQuery"
import headset from '../../../assets/images/products/headseticon.png'
interface IconProps {
  src: string
  alt: string
}
const Icon: React.FC<IconProps> = ({ src, alt }) => (
  <div className="flex-shrink-0 mx-2">
    <img src={src || "/placeholder.svg"} alt={alt} className="h-8 w-8 md:h-10 md:w-10" />
  </div>
)
const IconScrollBar: React.FC = () => {
  const isMobile = useMediaQuery(breakpoints.mobile)
  const isTablet = useMediaQuery(breakpoints.tablet)

  const iconCount = isMobile ? 6 : isTablet ? 8 : 12

  return (
    <div className="absolute bottom-10 left-[15%] right-[15%]">
      <div className="container mx-auto">
        <div
          className="transition-all duration-300 rounded-3xl 
          bg-[linear-gradient(180deg,rgba(217,217,217,0.1)_0%,rgba(217,217,217,0.05)_100%)] 
          backdrop-blur-md mx-4 md:mx-8 mb-8 p-4 flex justify-between items-center overflow-x-auto"
        >
          {[...Array(iconCount)].map((_, index) => (
            <Icon key={index} src={headset} alt="Headset" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default IconScrollBar

