export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    originalPrice?: number;
    imageSrc: string;
    rating?: number;
    isNew?: boolean;
    isFeatured?: boolean;
    isTrending?: boolean;
    colors?: string[];
  }
  
  export interface Category {
    id: string;
    name: string;
    slug: string;
  }
  
  export interface Banner {
    id: string;
    title: string;
    subtitle: string;
    imageSrc: string;
    buttonText: string;
    buttonLink: string;
  }