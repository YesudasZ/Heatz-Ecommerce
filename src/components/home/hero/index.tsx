import type React from "react"
import HeroBanner from "./HeroBanner"
import IconScrollBar from "./IconScrollBar"

const Hero: React.FC = () => {
  return (
    <section className="relative">
      <HeroBanner imagePath="/src/assets/images/banners/banner.png" altText="HEATZ Banner" />
      <IconScrollBar />
    </section>
  )
}

export default Hero

