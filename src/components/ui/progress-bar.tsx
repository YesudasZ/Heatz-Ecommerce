import type React from "react"

interface ProgressBarProps {
  currentIndex: number
  totalItems: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentIndex, totalItems }) => {
  return (
    <div className="flex justify-center mt-6">
      <div className="w-full h-0.5 bg-gray-800 rounded overflow-hidden">
        <div
          className="h-full bg-green-500 transition-all duration-500"
          style={{
            width: `${100 / totalItems}%`,
            marginLeft: `${(currentIndex * 100) / totalItems}%`,
          }}
        ></div>
      </div>
    </div>
  )
}

export default ProgressBar

