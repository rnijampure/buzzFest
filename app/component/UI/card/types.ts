// Using an interface for better TypeScript support
export interface BakerProps {
  id: string;
  name: string;
  images: string[];
  specialty: string;
  experience: string;
  location: string;
  description: string;
  rating: number;
}

export interface DoughnutCardProps {
  id: string;
  name: string;
  stock: number | string;
  images: string[];
  starRating: number;
  creatorSlug: string;
  price: number;
  category?: string[];
  lastOrdered?: string;
  rating?: number;
}
