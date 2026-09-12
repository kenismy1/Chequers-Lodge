export interface Room {
  id: string;
  name: string;
  tagline: string;
  priceGHS: number;
  priceUSD: number;
  capacity: string;
  bedType: string;
  size: string;
  description: string;
  features: string[];
  image: string;
  badge?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  avatarColor: string;
  rating: number;
  date: string;
  stayType: string;
  comment: string;
  helpfulCount: number;
  response?: {
    author: string;
    date: string;
    text: string;
  };
}

export interface NearbyPlace {
  id: string;
  name: string;
  category: 'Beach' | 'Shopping' | 'Nature' | 'Dining' | 'Transit';
  distance: string;
  driveTime: string;
  description: string;
  image: string;
}

export interface BookingDetails {
  roomType: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  fullName: string;
  phone: string;
  email: string;
  specialRequests: string;
}

export type ActiveTab = 'overview' | 'rooms' | 'reviews' | 'directions' | 'nearby';
