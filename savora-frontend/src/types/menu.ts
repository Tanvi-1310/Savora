export interface Dish {
  id: number;
  image: string;
  name: string;
  category: string;
  price: number;
  available: boolean;
  description?: string;
}