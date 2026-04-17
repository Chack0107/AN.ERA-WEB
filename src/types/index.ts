export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'anillos' | 'collares' | 'pulseras' | 'aretes';
  image: string;
  description: string;
  isBestseller?: boolean;
  isLimited?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  avatar?: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  slug: string;
}
