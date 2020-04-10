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
  type: 'apartment' | 'room' | 'house' | 'hotel',
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

export interface OfferRaw {
  id: number,
  title: string,
  preview_image: string,
  price: number,
  rating: number,
  type: 'apartment' | 'room' | 'house' | 'hotel',
  bedrooms: number,
  max_adults: number,
  is_favorite: boolean,
  is_premium: boolean,
  location: Location,
  city: {
    name: string,
    location: Location,
  },
  description: string,
  goods: string[],
  host: {
    avatar_url: string,
    id: number,
    is_pro: boolean,
    name: string,
  },
  images: string[],
}

export interface Comment {
  commentId: number,
  text: string,
  date: string,
  rating: number,
  userAvatarUrl: string,
  userName: string,
}

export interface CommentRaw {
  id: number,
  comment: string,
  date: string,
  rating: number,
  user: {
    avatar_url: string,
    id: number,
    is_pro: boolean,
    name: string,
  },
}
