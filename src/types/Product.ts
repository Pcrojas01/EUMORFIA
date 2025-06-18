export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'gothic' | 'tribal' | 'urban';
  rating: number;
  isNew?: boolean;
  isPopular?: boolean;
  onSale?: boolean;
}