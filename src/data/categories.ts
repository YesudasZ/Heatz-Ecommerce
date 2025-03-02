import { Category } from '../types';

export const categories: Category[] = [
  { 
    id: '1', 
    name: 'Headphones', 
    slug: 'headphones'
  },
  { 
    id: '2', 
    name: 'Earbuds', 
    slug: 'earbuds'
  },
  { 
    id: '3', 
    name: 'Speakers', 
    slug: 'speakers'
  },
  { 
    id: '4', 
    name: 'Smartwatches', 
    slug: 'smartwatches'
  },
  { 
    id: '5', 
    name: 'Gaming', 
    slug: 'gaming'
  },
  { 
    id: '6', 
    name: 'Accessories', 
    slug: 'accessories'
  }
];

export const featuredCategories = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'Premium sound quality with noise cancellation',
    imageSrc: '/src/assets/images/categories/headphones.png',
    slug: 'wireless-headphones',
  },
  {
    id: '2',
    name: 'True Wireless Earbuds',
    description: 'Compact design with powerful performance',
    imageSrc: '/src/assets/images/categories/earbuds.png',
    slug: 'wireless-earbuds',
  },
  {
    id: '3',
    name: 'Smart Watches',
    description: 'Stay connected with stylish wearables',
    imageSrc: '/src/assets/images/categories/smartwatches.png',
    slug: 'smartwatches',
  },
  {
    id: '4',
    name: 'Bluetooth Speakers',
    description: 'Immersive sound for any environment',
    imageSrc: '/src/assets/images/categories/speakers.png',
    slug: 'bluetooth-speakers',
  },
];