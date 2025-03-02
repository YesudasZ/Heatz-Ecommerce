import React from 'react';
import { categories } from '../../data/products';

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
  return (
    <nav className={`space-x-8 ${className}`}>
      <a href="/" className="nav-link">Home</a>
      {categories.map((category) => (
        <a 
          key={category.id} 
          href={`/category/${category.slug}`} 
          className="nav-link"
        >
          {category.name}
        </a>
      ))}
      <a href="/deals" className="nav-link">Deals</a>
      <a href="/about" className="nav-link">About</a>
    </nav>
  );
};

export default Navigation;