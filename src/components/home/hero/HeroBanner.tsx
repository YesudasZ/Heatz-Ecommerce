import type React from "react"

interface HeroBannerProps {
  imagePath: string
  altText: string
}

const HeroBanner: React.FC<HeroBannerProps> = ({ imagePath, altText }) => {

  return (
    <div className="w-full h-screen min-h-[600px] relative overflow-hidden">
      <img src={imagePath || "/placeholder.svg"} alt={altText} className="w-full h-full object-cover object-center" />
    </div>
  )
}

export default HeroBanner

