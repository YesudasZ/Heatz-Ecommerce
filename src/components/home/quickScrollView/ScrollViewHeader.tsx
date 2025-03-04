import type React from "react"

const ScrollViewHeader: React.FC = () => {
  return (
    <div className="max-w-[65%] mx-auto px-4 md:px-8 pt-16">
      <div className="flex flex-col md:flex-row justify-between items-start">
        <h2 className="text-4xl md:text-4xl font-bold text-white mb-4 md:mb-0 md:w-1/2">
          Boost up your
          <br />
          Gaming experience.
        </h2>
        <p className="text-gray-300 md:w-1/2 text-[12px] mt-10 md:mt-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer
        </p>
      </div>
    </div>
  )
}

export default ScrollViewHeader

