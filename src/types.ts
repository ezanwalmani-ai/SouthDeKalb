export interface BusinessInfo {
  legalName: string;
  dba: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    fullAddress: string;
  };
  phone: string;
  phoneRaw: string;
  mapDirectionsUrl: string;
  geo: {
    lat: number;
    lng: number;
  };
}

export type DayOfWeek = 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';

export interface DayHours {
  day: DayOfWeek;
  dayShort: string;
  isOpen: boolean;
  openTime?: string;
  closeTime?: string;
  openHour24?: number;
  closeHour24?: number;
  formatted: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  imageUrl: string;
  imageAlt: string;
  featured?: boolean;
}

export interface CustomerReview {
  id: string;
  author: string;
  location?: string;
  rating: number;
  date?: string;
  content: string;
  isVerifiedRealCustomer: boolean;
  label: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ServiceAreaCity {
  name: string;
  county: string;
  distanceApprox: string;
  note: string;
}

export interface TowRequestSubmission {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  pickupLocation: string;
  destination: string;
  vehicleType: string;
  vehicleMakeModel: string;
  serviceNeeded: string;
  preferredDate: string;
  preferredTime: string;
  additionalDetails?: string;
  submittedAt: string;
  status: 'Received' | 'Pending Review';
}

export type PageId = 
  | 'home'
  | 'services'
  | 'storage'
  | 'about'
  | 'reviews'
  | 'service-area'
  | 'faq'
  | 'request-tow'
  | 'contact';
