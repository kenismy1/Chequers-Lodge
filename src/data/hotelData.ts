import { Room, ReviewItem, NearbyPlace } from '../types';

export const HOTEL_INFO = {
  name: 'Chequers Lodge',
  category: 'Hotel & Guest Lodge',
  rating: 3.8,
  reviewCount: 103,
  address: 'Mile 11, Greater Accra Region, Ghana',
  shortAddress: 'Mile 11',
  phone: '020 174 8706',
  intlPhone: '+233 20 174 8706',
  plusCode: 'GMVC+2R Mile 11',
  plusCodeFull: 'GMVC+2R Mile 11, Greater Accra, Ghana',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=GMVC%2B2R+Mile+11',
  checkInTime: '2:00 PM',
  checkOutTime: '12:00 PM',
  frontDeskHours: '24 Hours / 7 Days',
  summary: 'Chequers Lodge offers serene, comfortable, and affordable lodging in Mile 11. Designed for both quick transit stays and restful getaways near the Accra-Kasoa corridor, our lodge features air-conditioned en-suite rooms, 24/7 front desk assistance, a private bar lounge, and secure on-site parking.',
};

export const ROOMS_DATA: Room[] = [
  {
    id: 'standard',
    name: 'Standard Cozy Room',
    tagline: 'Ideal for solo travelers & transit stays',
    priceGHS: 250,
    priceUSD: 22,
    capacity: '1 - 2 Guests',
    bedType: '1 Comfortable Double Bed',
    size: '18 m²',
    description: 'A peaceful, budget-friendly retreat equipped with climate-controlled air conditioning, private en-suite bathroom with fresh towels, and multi-channel satellite television.',
    features: ['Air Conditioning', 'En-suite Bathroom', 'Flat-screen Satellite TV', 'Standby Power Backup', 'Daily Housekeeping', 'Free High-speed Wi-Fi'],
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80',
    badge: 'Popular Choice'
  },
  {
    id: 'deluxe',
    name: 'Deluxe Double Room',
    tagline: 'Extra space, work desk & relaxation',
    priceGHS: 350,
    priceUSD: 30,
    capacity: '2 Guests',
    bedType: '1 Plush Queen Bed',
    size: '24 m²',
    description: 'Thoughtfully designed with additional floor space, reading desk, mini refrigerator, and ambient lighting. Perfect for couples or guests on business in the Ga South & Kasoa districts.',
    features: ['Queen Size Bed', 'Mini Refrigerator', 'Work / Study Desk', 'En-suite Hot Water Shower', 'Telephone to Front Desk', 'Complimentary Bottled Water'],
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=80',
    badge: 'Most Booked'
  },
  {
    id: 'executive',
    name: 'Executive Suite',
    tagline: 'Spacious living area & premium comfort',
    priceGHS: 500,
    priceUSD: 44,
    capacity: '2 - 3 Guests',
    bedType: '1 King Bed + Lounge Seating',
    size: '35 m²',
    description: 'Our most spacious accommodation with a separate lounge seating area, enhanced bathroom amenities, refrigerator, and quiet garden-facing aspect for maximum tranquility.',
    features: ['King Size Bed', 'Lounge Sitting Area', '43" Smart TV', 'Mini Bar Refrigerator', 'Private Balcony Access', 'Premium Toiletries & Bathrobes', 'Priority Room Service'],
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
    badge: 'Executive Comfort'
  },
  {
    id: 'day-rest',
    name: 'Day-Rest / Transit Stay',
    tagline: 'Flexible daytime stay (3 to 6 hours)',
    priceGHS: 180,
    priceUSD: 16,
    capacity: '1 - 2 Guests',
    bedType: '1 Double Bed',
    size: '18 m²',
    description: 'Need a comfortable place to freshen up, rest between meetings, or escape the highway traffic? Available during daylight hours (9:00 AM - 6:00 PM).',
    features: ['Flexible 3-6 Hour Block', 'Air-Conditioned Room', 'Hot Shower & Fresh Linens', 'Secure Gated Parking', 'Quiet Atmosphere'],
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=900&q=80',
    badge: 'Flexible Hours'
  }
];

export const AMENITIES_LIST = [
  {
    icon: 'ShieldCheck',
    title: '24/7 Security & Gated Compound',
    desc: 'Walled perimeter with dedicated security personnel and night surveillance.'
  },
  {
    icon: 'Zap',
    title: 'Automatic Standby Generator',
    desc: 'Reliable power plant ensuring uninterrupted air conditioning and lighting at all times.'
  },
  {
    icon: 'Wifi',
    title: 'High-Speed Wi-Fi',
    desc: 'Complimentary wireless internet available in guest rooms and reception lounge.'
  },
  {
    icon: 'GlassWater',
    title: 'On-Site Bar & Refreshments',
    desc: 'Cold drinks, local cocktails, and snacks served in a relaxed open-air setting.'
  },
  {
    icon: 'Car',
    title: 'Free On-Premises Parking',
    desc: 'Spacious, secure parking lot for cars and commercial vehicles at no extra charge.'
  },
  {
    icon: 'Clock',
    title: '24-Hour Front Desk',
    desc: 'Friendly staff ready to assist with late check-ins, early departures, and local taxis.'
  },
  {
    icon: 'Tv',
    title: 'Satellite Cable TV',
    desc: 'Digital television in every room featuring news, sports, and entertainment channels.'
  },
  {
    icon: 'Sparkles',
    title: 'Daily Housekeeping & Laundry',
    desc: 'Impeccable cleanliness with fresh linen changes and laundry services on request.'
  }
];

export const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Kofi Mensah',
    avatarColor: 'bg-emerald-600',
    rating: 4,
    date: '3 weeks ago',
    stayType: 'Business stay',
    comment: 'Good place for a quiet night in Mile 11. The air conditioning worked very well and there was automatic generator power when lights went off. Staff were polite and helpful.',
    helpfulCount: 14,
    response: {
      author: 'Chequers Lodge Management',
      date: '3 weeks ago',
      text: 'Thank you Kofi! We strive to make sure our backup power and cooling systems keep you comfortable always.'
    }
  },
  {
    id: 'rev-2',
    author: 'Sarah Osei-Bonsu',
    avatarColor: 'bg-amber-600',
    rating: 5,
    date: '1 month ago',
    stayType: 'Weekend getaway',
    comment: 'Very strategic location near Mile 11 barrier. It is quite close to Kokrobite and West Hills Mall without the heavy traffic. Clean bedsheets, functional hot water, and calm vibes at night.',
    helpfulCount: 9
  },
  {
    id: 'rev-3',
    author: 'Emmanuel Tetteh',
    avatarColor: 'bg-blue-600',
    rating: 4,
    date: '2 months ago',
    stayType: 'Transit stay',
    comment: 'Stopped by for the day-rest option while awaiting a late meeting in Kasoa. Reasonable pricing, secure gated parking, and cold drinks from the bar. Overall pleasant experience.',
    helpfulCount: 7
  },
  {
    id: 'rev-4',
    author: 'Akosua Darko',
    avatarColor: 'bg-purple-600',
    rating: 3,
    date: '3 months ago',
    stayType: 'Solo traveler',
    comment: 'The room was tidy and the receptionist was very welcoming. Wi-Fi was slightly slow during evening peak hours, but overall a decent value for money hotel in this area.',
    helpfulCount: 5,
    response: {
      author: 'Chequers Lodge Management',
      date: '3 months ago',
      text: 'Thank you for your feedback Akosua. We have since upgraded our Wi-Fi routers across the room wings to ensure seamless connection.'
    }
  },
  {
    id: 'rev-5',
    author: 'David Kwakye',
    avatarColor: 'bg-teal-600',
    rating: 4,
    date: '4 months ago',
    stayType: 'Couple stay',
    comment: 'Great privacy and security. The phone number provided (020 174 8706) answered right away when we needed directions at night. Good value for what you pay in Ga South.',
    helpfulCount: 8
  },
  {
    id: 'rev-6',
    author: 'Priscilla Addo',
    avatarColor: 'bg-rose-600',
    rating: 3,
    date: '5 months ago',
    stayType: 'Family visit',
    comment: 'Quiet location tucked away from the main road dust. Check-in was fast. Would appreciate more breakfast selections in the morning, but the team took good care of us.',
    helpfulCount: 4
  }
];

export const NEARBY_PLACES: NearbyPlace[] = [
  {
    id: 'kokrobite',
    name: 'Kokrobite Beach & Surf Coast',
    category: 'Beach',
    distance: '7.5 km',
    driveTime: '15 mins drive',
    description: 'Famous coastal stretch with reggae nights, beachside seafood joints, surfboard rentals, and sunset ocean walks.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'west-hills',
    name: 'West Hills Mall (Weija)',
    category: 'Shopping',
    distance: '5.2 km',
    driveTime: '10 mins drive',
    description: 'One of West Africa’s largest shopping centers featuring cinemas, supermarket, international fashion brands, and diverse dining court.',
    image: 'https://images.unsplash.com/photo-1567449303078-57ad995bd301?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'bojo-beach',
    name: 'Bojo Beach & Densu Estuary',
    category: 'Beach',
    distance: '9.0 km',
    driveTime: '18 mins drive',
    description: 'A serene island beach accessible by canoe ride across the Densu River delta. Relaxing white sand and peaceful seaside breeze.',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'weija-dam',
    name: 'Weija Lake & Waterworks',
    category: 'Nature',
    distance: '6.0 km',
    driveTime: '12 mins drive',
    description: 'Scenic freshwater reservoir feeding Accra, featuring peaceful greenery, boat rides, and hillside vantage points.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'kasoa-hub',
    name: 'Kasoa Commercial Hub & Market',
    category: 'Transit',
    distance: '4.8 km',
    driveTime: '10 mins drive',
    description: 'Vibrant trade district, local banking centers, transport terminals, and bustling evening food markets.',
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=600&q=80'
  }
];

export const DIRECTION_ROUTES = [
  {
    from: 'From Mallam Junction / Central Accra',
    mode: 'Driving / Taxi / Trotro',
    duration: '25 - 35 mins',
    instructions: [
      'Take the N1 Highway Westbound towards Kasoa / Cape Coast.',
      'Pass the Weija Toll/Barrier junction and continue past West Hills Mall.',
      'At the Mile 11 landmark junction, turn into the designated access road.',
      'Follow the signs for Chequers Lodge (Plus Code: GMVC+2R Mile 11). Call 020 174 8706 if assistance is needed.'
    ]
  },
  {
    from: 'From Kasoa Old Barrier / Winneba Road',
    mode: 'Driving / Ride-Hailing',
    duration: '10 - 15 mins',
    instructions: [
      'Head eastbound on the Accra-Kasoa Highway towards Weija.',
      'After crossing the Ga South boundary, approach the Mile 11 turn-off.',
      'Branch into the peaceful residential neighborhood corridor towards Chequers Lodge.'
    ]
  },
  {
    from: 'From Kotoka International Airport (ACC)',
    mode: 'Uber / Bolt / Yango / Private Car',
    duration: '45 - 60 mins',
    instructions: [
      'Exit airport onto Liberation Road / George Walker Bush Motorway (N1 Highway).',
      'Follow N1 straight through Lapaz, Kwashieman, and Mallam interchanges.',
      'Continue straight on the Kasoa expressway down to Mile 11.',
      'Input "Chequers Lodge" or Plus Code "GMVC+2R Mile 11" into navigation.'
    ]
  }
];
