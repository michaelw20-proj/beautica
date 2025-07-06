export interface ColorOption {
  name: string;
  value: string;
  image: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  images: string[];
  description: string;
  Keunggulan: string[];
  colors?: ColorOption[];
  isNew?: boolean;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
}

export interface ProductsData {
  [key: string]: Product;
} 