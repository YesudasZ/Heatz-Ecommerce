import type React from "react"
import HeroBanner from "./HeroBanner"
import IconScrollBar from "./IconScrollBar"
import banner from '../../../assets/images/banners/banner.png'

const Hero: React.FC = () => {
  return (
    <section className="relative">
      <HeroBanner imagePath={banner} altText="HEATZ Banner" />
      <IconScrollBar />
    </section>
  )
}

export default Hero

