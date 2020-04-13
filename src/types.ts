export type OfferCategory = 'apartment' | 'room' | 'house' | 'hotel';

export interface Location {
  latitude: number,
  longitude: number,
  zoom: number,
}

export interface Offer {
  id: number,
  title: string,
  previewImage: string,
  price: number,
  rating: number,
  type: OfferCategory,
  bedrooms: number,
  maxAdults: number,
  isFavorite: boolean,
  isPremium: boolean,
  location: Location,
  city: {
    name: string,
    location: Location,
  },
  description?: string,
  goods?: string[],
  hostAvatarUrl?: string,
  hostId?: number,
  hostIsPro?: boolean,
  hostName?: string,
  images?: string[],
}

export interface Comment {
  commentId: number,
  text: string,
  date: string,
  rating: number,
  userAvatarUrl: string,
  userName: string,
}
