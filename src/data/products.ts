import {  Category } from '../types';
import { Product } from "../components/ui/product-card"

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
    imageSrc: "/src/assets/images/products/product1.png",
    label: "Best Buy",
  },
  {
    id: "2",
    name: "Product 2",
    price: 2599,
    description: "Lorem Ipsum is simply dummy text of the printing.",
    imageSrc: "/src/assets/images/products/product2.png",
    label: "Best Buy",
  },
  {
    id: "3",
    name: "Product 3",
    price: 2599,
    description: "Lorem Ipsum is simply dummy text of the printing.",
    imageSrc: "/src/assets/images/products/product3.png",
    label: "Best Buy",
  },
  {
    id: "4",
    name: "Product 4",
    price: 2599,
    description: "Lorem Ipsum is simply dummy text of the printing.",
    imageSrc: "/src/assets/images/products/product4.png",
    label: "Trending",
  },
  {
    id: "5",
    name: "Product 5",
    price: 2599,
    description: "Lorem Ipsum is simply dummy text of the printing.",
    imageSrc: "/src/assets/images/products/product1.png",
    label: "Best Buy",
  },
  {
    id: "6",
    name: "Product 6",
    price: 2599,
    description: "Lorem Ipsum is simply dummy text of the printing.",
    imageSrc: "/src/assets/images/products/product2.png",
    label: "Best Buy",
  },
  {
    id: "7",
    name: "Product 7",
    price: 2599,
    description: "Lorem Ipsum is simply dummy text of the printing.",
    imageSrc: "/src/assets/images/products/product3.png",
    label: "Best Buy",
  },
  {
    id: "8",
    name: "Product 8",
    price: 2599,
    description: "Lorem Ipsum is simply dummy text of the printing.",
    imageSrc: "/src/assets/images/products/product4.png",
    label: "Trending",
  },
]