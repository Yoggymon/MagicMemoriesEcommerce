export interface Product {
  id: string;
  name: string;
  shortName?: string;
  tagline?: string;
  badge?: string;
  badgeColor?: string;
  discount?: string;
  image: string;
  alt?: string;
  description: string;
  price: string;
  numericPrice: number;
  regularPrice: string;
  savings?: string;
  features?: string[];
}
