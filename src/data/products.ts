import {  Category } from '../types';
import { Product } from "../components/ui/product-card"
import product1 from '../assets/images/products/product1.png'
import product2 from '../assets/images/products/product2.png'
import product3 from '../assets/images/products/product3.png'
import product4 from '../assets/images/products/product4.png'

export const categories: Category[] = [
  { id: '1', name: 'Headphones', slug: 'headphones' },
  { id: '2', name: 'Earbuds', slug: 'earbuds' },
  { id: '3', name: 'Speakers', slug: 'speakers' },
  { id: '4', name: 'Smartwatches', slug: 'smartwatches' },
];


export const defaultCategories = ["Headset", "Mouse", "Keyboard", "10% Offers"]

 export const defaultProducts: Product[] = [
  {
    id: "1",
    name: "Product 1",
    price: 2599,
    description: "Lorem Ipsum is simply dummy text of the printing.",
    imageSrc: product1,
    label: "Best Buy",
  },
  {
    id: "2",
    name: "Product 2",
    price: 2599,
    description: "Lorem Ipsum is simply dummy text of the printing.",
    imageSrc: product2,
    label: "Best Buy",
  },
  {
    id: "3",
    name: "Product 3",
    price: 2599,
    description: "Lorem Ipsum is simply dummy text of the printing.",
    imageSrc: product3,
    label: "Best Buy",
  },
  {
    id: "4",
    name: "Product 4",
    price: 2599,
    description: "Lorem Ipsum is simply dummy text of the printing.",
    imageSrc: product4,
    label: "Trending",
  },
  {
    id: "5",
    name: "Product 5",
    price: 2599,
    description: "Lorem Ipsum is simply dummy text of the printing.",
    imageSrc: product1,
    label: "Best Buy",
  },
  {
    id: "6",
    name: "Product 6",
    price: 2599,
    description: "Lorem Ipsum is simply dummy text of the printing.",
    imageSrc: product2,
    label: "Best Buy",
  },
  {
    id: "7",
    name: "Product 7",
    price: 2599,
    description: "Lorem Ipsum is simply dummy text of the printing.",
    imageSrc: product3,
    label: "Best Buy",
  },
  {
    id: "8",
    name: "Product 8",
    price: 2599,
    description: "Lorem Ipsum is simply dummy text of the printing.",
    imageSrc: product4,
    label: "Trending",
  }
]