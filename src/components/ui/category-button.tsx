import type React from "react"

interface CategoryButtonProps {
  category: string
  isActive: boolean
  onClick: () => void
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ category, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`py-3 px-4 md:px-4 rounded-full text-[11px] md:text-[11px]  transition-colors ${
        isActive ? "bg-green-500 text-black font-semibold" : "text-[#666666]"
      }`}
    >
      {category}
    </button>
  )
}

export default CategoryButton

