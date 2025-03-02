import { Product, Category, Banner } from '../types';

export const categories: Category[] = [
  { id: '1', name: 'Headphones', slug: 'headphones' },
  { id: '2', name: 'Earbuds', slug: 'earbuds' },
  { id: '3', name: 'Speakers', slug: 'speakers' },
  { id: '4', name: 'Smartwatches', slug: 'smartwatches' },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Heatz Z2000',
    category: 'Headphones',
    price: 249.99,
    imageSrc: '/src/assets/images/products/headphones1.png',
    rating: 4.8,
    isFeatured: true,
    colors: ['black', 'white', 'green'],
  },
  {
    id: '2',
    name: 'Heatz UltraEar Pro',
    category: 'Headphones',
    price: 199.99,
    imageSrc: '/src/assets/images/products/headphones2.png',
    rating: 4.7,
    isTrending: true,
  },
  {
    id: '3',
    name: 'Heatz AirBuds X',
    category: 'Earbuds',
    price: 129.99,
    originalPrice: 149.99,
    imageSrc: '/src/assets/images/products/earbuds1.png',
    isNew: true,
  },
  {
    id: '4',
    name: 'Heatz SoundBlast',
    category: 'Speakers',
    price: 179.99,
    imageSrc: '/src/assets/images/products/speaker1.png',
    isFeatured: true,
  },
  {
    id: '5',
    name: 'Heatz SmartWatch Pro',
    category: 'Smartwatches',
    price: 299.99,
    imageSrc: '/src/assets/images/products/smartwatch1.png',
    isNew: true,
    isTrending: true,
  },
  {
    id: '6',
    name: 'Heatz Queen Edition',
    category: 'Smartwatches',
    price: 349.99,
    imageSrc: '/src/assets/images/products/smartwatch2.png',
    isFeatured: true,
  },
];

export const banners: Banner[] = [
  {
    id: '1',
    title: 'Boost up your Gaming experience.',
    subtitle: 'Experience sound like never before with our premium gaming headphones.',
    imageSrc: '/src/assets/images/banners/gaming-banner.png',
    buttonText: 'Shop Now',
    buttonLink: '/products/category/gaming',
  },
  {
    id: '2',
    title: 'Boost up your Audio experience.',
    subtitle: 'Immerse yourself in crystal clear sound with our premium audio products.',
    imageSrc: '/src/assets/images/banners/audio-banner.png',
    buttonText: 'Explore',
    buttonLink: '/products/category/audio',
  },
  {
    id: '3',
    title: 'Queen\'s Edition Smartwatch',
    subtitle: 'Elegance meets technology in our limited edition smartwatch.',
    imageSrc: '/src/assets/images/banners/smartwatch-banner.png',
    buttonText: 'Discover',
    buttonLink: '/products/smartwatch-queen',
  },
];