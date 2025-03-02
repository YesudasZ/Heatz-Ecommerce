import React from 'react';
import ProductCard from '../common/Card';
import { products } from '../../data/products';
import Button from '../common/Button';
import { FiChevronRight } from 'react-icons/fi';

interface ProductGridProps {
  title: string;
  subtitle?: string;
  filter?: (product: typeof products[0]) => boolean;
  limit?: number;
  showViewAll?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  title,
  subtitle,
  filter = () => true,
  limit = 4,
  showViewAll = true,
}) => {
  const filteredProducts = products.filter(filter).slice(0, limit);
  
  return (
    <section className="py-12">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
            {subtitle && <p className="text-white/70">{subtitle}</p>}
          </div>
          
          {showViewAll && (
            <Button variant="outline" className="mt-4 md:mt-0">
              View All <FiChevronRight className="ml-2" />
            </Button>
          )}
        </div>
        
        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;