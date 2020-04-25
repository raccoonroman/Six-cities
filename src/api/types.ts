import { OfferCategory, Location } from '@/types';

export interface AuthInfoRaw {
  avatar_url: string;
  email: string;
  id: number;
  is_pro: boolean;
  name: string;
}

export interface User {
  email: string;
  password: string;
}

export interface OfferRaw {
  id: number;
  title: string;
  preview_image: string;
  price: number;
  rating: number;
  type: OfferCategory;
  bedrooms: number;
  max_adults: number;
  is_favorite: boolean;
  is_premium: boolean;
  location: Location;
  city: {
    name: string;
    location: Location;
  };
  description: string;
  goods: string[];
  host: {
    avatar_url: string;
    id: number;
    is_pro: boolean;
    name: string;
  };
  images: string[];
}

export interface CommentRaw {
  id: number;
  comment: string;
  date: string;
  rating: number;
  user: {
    avatar_url: string;
    id: number;
    is_pro: boolean;
    name: string;
  };
}

export interface CommentPost {
  comment: string;
  rating: number;
}
