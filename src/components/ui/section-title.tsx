import type React from "react"

interface SectionTitleProps {
  title: string
  description?: string
  className?: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, description, className = "" }) => {
  return (
    <div
      className={`flex flex-col md:flex-row justify-between items-start text-center md:text-left mb-12 ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold w-full">{title}</h2>
      {description && (
        <div className="w-full md:w-2/3 mt-4 md:mt-0 text-sm md:text-base text-gray-300">
          <p>{description}</p>
        </div>
      )}
    </div>
  )
}

export default SectionTitle

