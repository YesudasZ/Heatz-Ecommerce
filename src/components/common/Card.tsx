import React from 'react';
import { Product } from '../../types';
import { FiStar, FiShoppingCart } from 'react-icons/fi';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card group">
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-xl mb-4 h-48 flex items-center justify-center bg-heatz-dark p-4">
        <img 
          src={product.imageSrc}
          alt={product.name}
          className="max-h-full w-auto object-contain group-hover:scale-110 transition-transform duration-500"
        />
        
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-heatz-green text-black text-xs px-2 py-1 rounded-full">
            New
          </div>
        )}
        
        <button className="absolute bottom-2 right-2 bg-heatz-green p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FiShoppingCart size={16} className="text-black" />
        </button>
      </div>
      
      {/* Product Info */}
      <div className="space-y-2">
        <div className="flex items-center">
          {product.rating && (
            <div className="flex items-center text-yellow-400 mr-2">
              <FiStar className="fill-current" size={14} />
              <span className="text-xs ml-1">{product.rating}</span>
            </div>
          )}
          <div className="text-xs text-white/60">{product.category}</div>
        </div>
        
        <h3 className="font-medium">{product.name}</h3>
        
        <div className="flex items-center">
          <span className="font-bold">${product.price}</span>
          {product.originalPrice && (
            <span className="text-white/60 line-through text-sm ml-2">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;