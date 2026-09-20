import { BusinessInfo, DayHours, ServiceItem, CustomerReview, FaqItem, ServiceAreaCity } from '../types';

export const BUSINESS_INFO: BusinessInfo = {
  legalName: 'South DeKalb Towing & Transport, Inc.',
  dba: 'South DeKalb Transport & Storage',
  address: {
    street: '7043 Rogers Lake Rd',
    city: 'Lithonia',
    state: 'GA',
    zip: '30058',
    country: 'United States',
    fullAddress: '7043 Rogers Lake Rd, Lithonia, GA 30058',
  },
  phone: '(404) 508-0246',
  phoneRaw: '+14045080246',
  mapDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=7043+Rogers+Lake+Rd+Lithonia+GA+30058',
  geo: {
    lat: 33.7258,
    lng: -84.0935,
  },
};

/**
 * Posted Business Hours:
 * Monday through Sunday: 9:00 AM – 6:00 PM every day.
 * Tuesday is OPEN.
 */
export const BUSINESS_HOURS: DayHours[] = [
  {
    day: 'Monday',
    dayShort: 'MON',
    isOpen: true,
    openTime: '9:00 AM',
    closeTime: '6:00 PM',
    openHour24: 9,
    closeHour24: 18,
    formatted: '9:00 AM — 6:00 PM',
  },
  {
    day: 'Tuesday',
    dayShort: 'TUE',
    isOpen: true,
    openTime: '9:00 AM',
    closeTime: '6:00 PM',
    openHour24: 9,
    closeHour24: 18,
    formatted: '9:00 AM — 6:00 PM',
  },
  {
    day: 'Wednesday',
    dayShort: 'WED',
    isOpen: true,
    openTime: '9:00 AM',
    closeTime: '6:00 PM',
    openHour24: 9,
    closeHour24: 18,
    formatted: '9:00 AM — 6:00 PM',
  },
  {
    day: 'Thursday',
    dayShort: 'THU',
    isOpen: true,
    openTime: '9:00 AM',
    closeTime: '6:00 PM',
    openHour24: 9,
    closeHour24: 18,
    formatted: '9:00 AM — 6:00 PM',
  },
  {
    day: 'Friday',
    dayShort: 'FRI',
    isOpen: true,
    openTime: '9:00 AM',
    closeTime: '6:00 PM',
    openHour24: 9,
    closeHour24: 18,
    formatted: '9:00 AM — 6:00 PM',
  },
  {
    day: 'Saturday',
    dayShort: 'SAT',
    isOpen: true,
    openTime: '9:00 AM',
    closeTime: '6:00 PM',
    openHour24: 9,
    closeHour24: 18,
    formatted: '9:00 AM — 6:00 PM',
  },
  {
    day: 'Sunday',
    dayShort: 'SUN',
    isOpen: true,
    openTime: '9:00 AM',
    closeTime: '6:00 PM',
    openHour24: 9,
    closeHour24: 18,
    formatted: '9:00 AM — 6:00 PM',
  },
];

/**
 * Typical Busy Times:
 * Illustrative activity pattern for demo purposes.
 * Hours: 9 AM to 6 PM across Monday through Sunday.
 */
export const BUSY_TIMES_DATA: Record<string, { hour: string; percentage: number; label: string }[]> = {
  Monday: [
    { hour: '9 AM', percentage: 40, label: 'Opening rush' },
    { hour: '10 AM', percentage: 60, label: 'Steady' },
    { hour: '11 AM', percentage: 75, label: 'Busy' },
    { hour: '12 PM', percentage: 80, label: 'Peak volume' },
    { hour: '1 PM', percentage: 75, label: 'Busy' },
    { hour: '2 PM', percentage: 70, label: 'Steady' },
    { hour: '3 PM', percentage: 85, label: 'Peak volume' },
    { hour: '4 PM', percentage: 80, label: 'Busy' },
    { hour: '5 PM', percentage: 65, label: 'Steady' },
    { hour: '6 PM', percentage: 35, label: 'Closing down' },
  ],
  Tuesday: [
    { hour: '9 AM', percentage: 35, label: 'Opening' },
    { hour: '10 AM', percentage: 55, label: 'Steady' },
    { hour: '11 AM', percentage: 70, label: 'Busy' },
    { hour: '12 PM', percentage: 75, label: 'Busy' },
    { hour: '1 PM', percentage: 70, label: 'Steady' },
    { hour: '2 PM', percentage: 65, label: 'Steady' },
    { hour: '3 PM', percentage: 80, label: 'Peak volume' },
    { hour: '4 PM', percentage: 75, label: 'Busy' },
    { hour: '5 PM', percentage: 60, label: 'Moderate' },
    { hour: '6 PM', percentage: 30, label: 'Closing down' },
  ],
  Wednesday: [
    { hour: '9 AM', percentage: 40, label: 'Opening' },
    { hour: '10 AM', percentage: 60, label: 'Steady' },
    { hour: '11 AM', percentage: 70, label: 'Busy' },
    { hour: '12 PM', percentage: 75, label: 'Busy' },
    { hour: '1 PM', percentage: 70, label: 'Steady' },
    { hour: '2 PM', percentage: 65, label: 'Steady' },
    { hour: '3 PM', percentage: 80, label: 'Peak volume' },
    { hour: '4 PM', percentage: 85, label: 'Peak volume' },
    { hour: '5 PM', percentage: 65, label: 'Steady' },
    { hour: '6 PM', percentage: 35, label: 'Closing down' },
  ],
  Thursday: [
    { hour: '9 AM', percentage: 45, label: 'Opening' },
    { hour: '10 AM', percentage: 65, label: 'Steady' },
    { hour: '11 AM', percentage: 75, label: 'Busy' },
    { hour: '12 PM', percentage: 80, label: 'Peak volume' },
    { hour: '1 PM', percentage: 75, label: 'Busy' },
    { hour: '2 PM', percentage: 70, label: 'Steady' },
    { hour: '3 PM', percentage: 85, label: 'Peak volume' },
    { hour: '4 PM', percentage: 85, label: 'Peak volume' },
    { hour: '5 PM', percentage: 70, label: 'Busy' },
    { hour: '6 PM', percentage: 40, label: 'Closing down' },
  ],
  Friday: [
    { hour: '9 AM', percentage: 50, label: 'Opening' },
    { hour: '10 AM', percentage: 75, label: 'Busy' },
    { hour: '11 AM', percentage: 85, label: 'Peak volume' },
    { hour: '12 PM', percentage: 90, label: 'High volume' },
    { hour: '1 PM', percentage: 85, label: 'Busy' },
    { hour: '2 PM', percentage: 80, label: 'Busy' },
    { hour: '3 PM', percentage: 95, label: 'Highest activity' },
    { hour: '4 PM', percentage: 95, label: 'Highest activity' },
    { hour: '5 PM', percentage: 80, label: 'Busy' },
    { hour: '6 PM', percentage: 45, label: 'Closing down' },
  ],
  Saturday: [
    { hour: '9 AM', percentage: 35, label: 'Opening' },
    { hour: '10 AM', percentage: 60, label: 'Steady' },
    { hour: '11 AM', percentage: 80, label: 'Peak weekend' },
    { hour: '12 PM', percentage: 85, label: 'Peak weekend' },
    { hour: '1 PM', percentage: 80, label: 'Busy' },
    { hour: '2 PM', percentage: 75, label: 'Busy' },
    { hour: '3 PM', percentage: 70, label: 'Steady' },
    { hour: '4 PM', percentage: 65, label: 'Steady' },
    { hour: '5 PM', percentage: 55, label: 'Moderate' },
    { hour: '6 PM', percentage: 30, label: 'Closing down' },
  ],
  Sunday: [
    { hour: '9 AM', percentage: 30, label: 'Opening' },
    { hour: '10 AM', percentage: 50, label: 'Steady' },
    { hour: '11 AM', percentage: 70, label: 'Busy' },
    { hour: '12 PM', percentage: 75, label: 'Busy' },
    { hour: '1 PM', percentage: 70, label: 'Steady' },
    { hour: '2 PM', percentage: 65, label: 'Steady' },
    { hour: '3 PM', percentage: 60, label: 'Moderate' },
    { hour: '4 PM', percentage: 55, label: 'Moderate' },
    { hour: '5 PM', percentage: 50, label: 'Moderate' },
    { hour: '6 PM', percentage: 25, label: 'Closing down' },
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'local-towing',
    title: 'Local Towing',
    tagline: 'Featured Capability',
    description: 'Reliable vehicle towing for cars, SUVs, trucks, and other vehicles throughout Lithonia and South DeKalb.',
    features: [
      'Standard passenger cars, light trucks, and full-size SUVs',
      'Local transport from point of breakdown to repair facility or residence',
      'Experienced recovery handling with secure wheel-lift and flatbed capability',
      'Clear, upfront dispatch communication without runarounds',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=85&w=1200',
    imageAlt: 'Real commercial flatbed rollback tow truck beside a vehicle on American roadway',
    featured: true,
  },
  {
    id: 'vehicle-transport',
    title: 'Vehicle Transport',
    tagline: 'Point-to-Point Logistics',
    description: 'Transportation services for vehicles that need to be moved from one location to another.',
    features: [
      'Dealership, auction, or repair shop transfers',
      'Non-running vehicle transport and safe winching',
      'Commercial fleet or individual private transport arrangements',
      'Protected transit with strict tie-down safety procedures',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=85&w=1200',
    imageAlt: 'Professional vehicle being loaded and secured for transport',
  },
  {
    id: 'vehicle-storage',
    title: 'Vehicle Storage',
    tagline: 'Lithonia Facility',
    description: 'Vehicle storage for customers who need a location while arranging pickup, repair, release, or transport.',
    features: [
      'Designated staging and vehicle holding bays at 7043 Rogers Lake Rd',
      'Perimeter security fencing and controlled gate access',
      'Straightforward documentation check for owners, insurance, and adjusters',
      'Transparent release procedures during regular business hours',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&q=85&w=1200',
    imageAlt: 'Realistic secure vehicle storage environment in Lithonia, Georgia',
  },
  {
    id: 'accident-recovery',
    title: 'Accident Recovery',
    tagline: 'Scene Clearance',
    description: 'Professional vehicle recovery following accidents and roadside incidents.',
    features: [
      'Coordinated scene clearance following law enforcement directives',
      'Debris mitigation and safe vehicle extraction',
      'Direct coordination with collision centers or our storage lot',
      'Careful handling of damaged steering and locked wheels',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=85&w=1200',
    imageAlt: 'Professional recovery scene with heavy-duty towing equipment',
  },
  {
    id: 'impound-services',
    title: 'Impound Services',
    tagline: 'Lot Holding & Release',
    description: 'Vehicle storage and impound-related services handled with clear guidelines and professional respect.',
    features: [
      'Authorized municipal, law enforcement, and private property storage holding',
      'Simple, verified property release verification process',
      'Itemized fee documentation in compliance with Georgia regulations',
      'Polite and straightforward customer service at our front desk',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=85&w=1200',
    imageAlt: 'Rows of realistically stored vehicles in a professional lot',
  },
  {
    id: 'roadside-assistance',
    title: 'Roadside Assistance',
    tagline: 'Roadside Dispatch',
    description: 'Contact us to confirm current roadside assistance availability.',
    features: [
      'Jump-starts and battery boost services',
      'Spare tire changeovers for road-worthy spares',
      'Winch-out services for vehicles stuck in ditch, mud, or gravel',
      'Immediate tow conversion if vehicle cannot safely proceed',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=85&w=1200',
    imageAlt: 'Tow operator assisting a vehicle on an American roadside',
  },
];

export const REVIEWS: CustomerReview[] = [
  {
    id: 'ryan-hicks',
    author: 'Ryan Hicks',
    rating: 5,
    content: "Even though my car got towed there, I was so glad I got told here. Best place around. If your car gets towed you better pray it gets towed here. Easy in and out process, it's not hard, they make it very easy. They're very nice and polite.",
    isVerifiedRealCustomer: true,
    label: 'Customer Feedback',
  },
  {
    id: 'demo-review-1',
    author: 'Verified Customer Submission',
    rating: 5,
    content: 'Demo testimonial — replace with verified customer feedback.',
    isVerifiedRealCustomer: false,
    label: 'DEMO TESTIMONIAL — REPLACE WITH VERIFIED CUSTOMER REVIEW',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How do I request a tow?',
    answer: 'You can call our office directly at (404) 508-0246 for immediate dispatch or submit an online request through our Request a Tow form. For roadside emergencies, calling directly is the fastest method.',
  },
  {
    id: 'faq-2',
    question: 'What information should I provide?',
    answer: 'Please provide the exact location of the vehicle (address, cross streets, or highway mile marker), vehicle make/model/color, what mechanical or collision issue occurred, and your destination.',
  },
  {
    id: 'faq-3',
    question: 'What types of vehicles can you tow?',
    answer: 'We handle standard passenger cars, light trucks, pickup trucks, SUVs, vans, motorcycles, and select commercial vehicles. If you have an oversized or specialty vehicle, please call our office first to confirm equipment availability.',
  },
  {
    id: 'faq-4',
    question: 'Do you provide vehicle storage?',
    answer: 'Yes. We provide vehicle storage at 7043 Rogers Lake Rd in Lithonia, GA for vehicles awaiting owner pickup, repair, insurance assessment, release, or ongoing transport.',
  },
  {
    id: 'faq-5',
    question: 'Where are you located?',
    answer: 'We are located at 7043 Rogers Lake Rd, Lithonia, GA 30058, conveniently situated in South DeKalb with rapid access to the I-20 corridor.',
  },
  {
    id: 'faq-6',
    question: 'What are your business hours?',
    answer: 'Our posted business hours are Monday through Sunday, 9:00 AM to 6:00 PM every day, including Tuesdays.',
  },
  {
    id: 'faq-7',
    question: 'How can I contact you?',
    answer: 'You can reach us by telephone at (404) 508-0246 during our posted business hours, visit our facility at 7043 Rogers Lake Rd in Lithonia, or submit an inquiry through our online contact form.',
  },
  {
    id: 'faq-8',
    question: 'Can I confirm service availability?',
    answer: 'Yes. Contact us at (404) 508-0246 to confirm current service availability, active truck positioning, and estimated arrival windows.',
  },
];

export const SERVICE_AREAS: ServiceAreaCity[] = [
  {
    name: 'Lithonia',
    county: 'DeKalb County',
    distanceApprox: 'Primary Hub (Office & Storage)',
    note: 'Immediate dispatch area and facility location at 7043 Rogers Lake Rd.',
  },
  {
    name: 'South DeKalb',
    county: 'DeKalb County',
    distanceApprox: 'Primary Service Corridor',
    note: 'Covers key arterial roadways, commercial corridors, and neighborhood routes.',
  },
  {
    name: 'Stonecrest',
    county: 'DeKalb County',
    distanceApprox: 'Nearby Core Area',
    note: 'Convenient access via the I-20 corridor, Evans Mill, and Mall Parkway.',
  },
  {
    name: 'Decatur',
    county: 'DeKalb County',
    distanceApprox: 'Service Area Example',
    note: 'Available for scheduled transports, breakdowns, and repair transfers.',
  },
  {
    name: 'Conyers',
    county: 'Rockdale County',
    distanceApprox: 'Service Area Example',
    note: 'Bordering service corridor along I-20 and Highway 138.',
  },
  {
    name: 'Redan',
    county: 'DeKalb County',
    distanceApprox: 'Service Area Example',
    note: 'Local coverage across Panola Rd, Redan Rd, and Covington Hwy.',
  },
  {
    name: 'Snellville',
    county: 'Gwinnett County',
    distanceApprox: 'Service Area Example',
    note: 'Available for transport and point-to-point towing requests.',
  },
  {
    name: 'Greater Atlanta Metro',
    county: 'Regional Corridor',
    distanceApprox: 'Regional Transport',
    note: 'Call our office at (404) 508-0246 to confirm availability and scheduling.',
  },
];
