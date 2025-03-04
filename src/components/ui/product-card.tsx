import type React from "react"

export interface Product {
  id: string
  name: string
  price: number
  description: string
  imageSrc: string
  label?: "Best Buy" | "Trending" | string
}

interface ProductCardProps {
  product: Product
  showIndicators?: boolean
}

const ProductCard: React.FC<ProductCardProps> = ({ product, showIndicators = false }) => {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden text-black h-full">
      <div className="relative aspect-square bg-white p-6 flex items-center justify-center">
        <img
          src={product.imageSrc || "/placeholder.svg"}
          alt={product.name}
          className="max-h-full max-w-full object-contain"
        />

        {showIndicators && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-black"></div>
            <div className="w-3 h-3 rounded-full bg-gray-500"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          </div>
        )}
      </div>
      <div className="p-4 bg-white">
        <div className="text-xs text-gray-500 mb-1">{product.label || ""}</div>
        <p className="text-sm mb-2">{product.description}</p>
        <div className="">₹ {product.price}</div>
      </div>
    </div>
  )
}

export default ProductCard

