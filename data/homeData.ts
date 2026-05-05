export interface NavLink {
  label: string;
  href: string;
}

export interface Room {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  image: string;
  mobileImage?: string;
}

export interface Amenity {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  imagePosition?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Transport {
  distance: string;
  unit: string;
  name: string;
  type: string;
  icon: string;
}

export const navLinks: NavLink[] = [
  { label: 'Our Story',      href: '#about' },
  { label: 'The Stay',       href: '#accommodation' },
  { label: 'Experiences',    href: '#experiences' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Connect',        href: '#faq' },
];

export const menuLinks: NavLink[] = [
  { label: 'Our Story',      href: '#about' },
  { label: 'The Stay',       href: '#the-stay' },
  { label: 'Experiences',    href: '#experiences' },
  { label: 'Amenities',      href: '#amenities' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Media Kit',      href: '#media' },
  { label: 'Rates',          href: '#rates' },
  { label: 'Events',         href: '#events' },
  { label: 'Contact',        href: '#faq' },
];

export const accommodationRooms: Room[] = [
  {
    id: 'calm-signature',
    name: 'The WildCalm Signature',
    description: 'A premium signature suite offering an unrivalled blend of luxury and serenity. Floor-to-ceiling views of the forest canopy, curated furnishings, and personalised butler service define the most exclusive stay at WildCalm.',
    image: '/design/Home Page/Section 3 - Accomodation/Stay_The  Wild Calm Signature-converted-from-jpg.webp',
  },
  {
    id: 'crown-pavillion',
    name: 'The Crown Pavillion',
    description: 'Expansive pavilion-style villas featuring private plunge pools and wraparound decks, surrounded by manicured lawns and the sounds of the wild.',
    image: '/design/Home Page/Section 3 - Accomodation/Stay_The Crown Pavillion-converted-from-jpg.webp',
  },
  {
    id: 'gathering-grove',
    name: 'The Gathering Grove',
    description: 'Designed for intimate gatherings, the Gathering Grove accommodates families or small groups within a connected yet private setting.',
    image: '/design/Home Page/Section 3 - Accomodation/Stay_The Gathering Groove.webp',
  },
  {
    id: 'wild-cub',
    name: 'Wild Cub & Calm Cub',
    description: 'Thoughtfully designed for families travelling with young ones, combining playful interiors with all the comfort and safety parents need.',
    image: '/design/Home Page/Section 3 - Accomodation/Stay_Wild Cub & Calm Cub-converted-from-jpg.webp',
  },
  {
    id: 'wild-nest',
    name: 'Wild Nest & Calm Nest',
    description: 'Elevated treetop nests offering panoramic forest vistas. Accessible via wooden walkways, these rooms bring guests closest to the canopy.',
    image: '/design/Home Page/Section 3 - Accomodation/Stay_Wild Nest & Calm Nest.webp',
  },
  {
    id: 'courtyard-rooms',
    name: 'Courtyard Rooms',
    description: "Classic courtyard-facing rooms with traditional yet refined interiors. Each opens onto a shared green courtyard, providing a sense of community within the resort's tranquil landscape.",
    image: '/design/Home Page/Section 3 - Accomodation/Stay_The Courtyard Rooms.webp',
  },
];

export const experiences: Experience[] = [
  {
    id: 'gir-safari',
    title: 'Gir Safari',
    description: 'Experience the thrill of a jeep safari through Gir National Park, where rare Asiatic lions and diverse wildlife bring the forest to life in an unforgettable encounter.',
    image: '/design/Home Page/Section 4 - Experiences/Desktop/Gir Safari-converted-from-jpg.webp',
    mobileImage: '/design/Home Page/Section 4 - Experiences/Mobile Vesion/Gir Safari.webp',
  },
  {
    id: 'nature-trails',
    title: 'Nature Trails',
    description: 'Immerse yourself in serene nature trails that wind through lush landscapes, offering quiet moments of discovery, fresh air, and a deeper connection with the surrounding wilderness.',
    image: '/design/Home Page/Section 4 - Experiences/Desktop/Nature Trails-converted-from-jpg.webp',
    mobileImage: '/design/Home Page/Section 4 - Experiences/Mobile Vesion/Nature Trails.webp',
  },
  {
    id: 'high-tea',
    title: 'Experiential High Tea',
    description: 'Indulge in an experiential high tea set amidst nature, where curated flavours, elegant presentation, and a serene outdoor setting come together for a truly refreshing and memorable pause.',
    image: '/design/Home Page/Section 4 - Experiences/Desktop/Experiential HighTea.webp',
    mobileImage: '/design/Home Page/Section 4 - Experiences/Mobile Vesion/Experiential Hight Tea.webp',
  },
  {
    id: 'bush-dinner',
    title: 'Bush Dinner',
    description: 'Enjoy an intimate bush dinner under the open sky, where flickering lights, curated cuisine, and the quiet beauty of nature create a truly enchanting dining experience.',
    image: '/design/Home Page/Section 4 - Experiences/Desktop/Bush Dinner.webp',
    mobileImage: '/design/Home Page/Section 4 - Experiences/Mobile Vesion/Bush Dinner-converted-from-jpg.webp',
  },
  {
    id: 'pottery',
    title: 'Pottery Sessions',
    description: 'Engage in a hands-on pottery session, where you can shape clay into art while connecting with local craftsmanship and the timeless rhythm of traditional techniques.',
    image: '/design/Home Page/Section 4 - Experiences/Desktop/Pottery Sessions.webp',
    mobileImage: '/design/Home Page/Section 4 - Experiences/Mobile Vesion/Pottery Sessions-converted-from-jpg.webp',
  },
  {
    id: 'yoga',
    title: 'Yoga and Meditation',
    description: 'Begin your day with a calming yoga session amidst nature, where gentle movement, fresh air, and mindful stillness create a perfect balance of body and mind.',
    image: '/design/Home Page/Section 4 - Experiences/Desktop/Yoga and Meditation.webp',
    mobileImage: '/design/Home Page/Section 4 - Experiences/Mobile Vesion/Yoga & Meditation-converted-from-jpg.webp',
  },
];

export const amenities: Amenity[] = [
  {
    id: 'pool',
    title: 'Swimming Pool',
    subtitle: 'Leisure & Recreation',
    desc: 'A serene, minimalist swimming pool designed for quiet reflection and refreshing stillness.',
    image: '/design/Home Page/Section 6 - Amenities/Swimming Pool.webp',
    imagePosition: '50% 52%',
  },
  {
    id: 'restaurant',
    title: 'Multi Cuisine Restaurant (CALM KITCHEN)',
    subtitle: 'Multi-Cuisine Restaurant',
    desc: 'Elevated dining and curated flavors amidst sophisticated wilderness.',
    image: '/design/Home Page/Section 6 - Amenities/Multi Cuisine Restaurant (CALM KITCHEN).webp',
    imagePosition: '58% 44%',
  },
  {
    id: 'clubhouse',
    title: 'Club House',
    subtitle: 'Recreation & Social',
    desc: 'An engaging social hub featuring sophisticated leisure and spirited recreation.',
    image: '/design/Home Page/Section 6 - Amenities/Club House.webp',
    imagePosition: '62% 50%',
  },
  {
    id: 'outdoor',
    title: 'Outdoor Activities',
    subtitle: 'Adventure & Nature',
    desc: 'Dynamic outdoor recreation including pickleball and box cricket in a premium setting.',
    image: '/design/Home Page/Section 6 - Amenities/Outdoor activities.webp',
    imagePosition: '42% 50%',
  },
  {
    id: 'forest',
    title: 'Miyawaki Forest',
    subtitle: 'Ecology & Sustainability',
    desc: 'An immersive private wilderness offering quiet exploration and raw natural beauty.',
    image: '/design/Home Page/Section 6 - Amenities/Miyawaki Forest.webp',
    imagePosition: '60% 50%',
  },
  {
    id: 'banquet',
    title: 'Banquet & Lawns',
    subtitle: 'Events & Celebrations',
    desc: 'A vast, verdant expanse perfect for seamless events and tranquil leisure.',
    image: '/design/Home Page/Section 6 - Amenities/Banquets and Lawns.webp',
    imagePosition: '52% 50%',
  },
];

export const faqs: FaqItem[] = [
  {
    id: 'difference',
    question: 'What makes WildCalm different from other resorts in Sasan Gir?',
    answer:
      'WildCalm stands apart with private pool villas, including the exclusive Calm Signature suite, and immersive, story-led experiences like botanical walks, campfire storytelling, and curated dining, all set within a sustainably designed natural retreat.',
  },
  {
    id: 'safari-distance',
    question: 'How far is WildCalm from the Gir Jungle Safari?',
    answer:
      'WildCalm is a year-round luxury experiential resort near the buffer zone of Gir National Park, just 6.5 km from the safari, blending refined luxury with immersive nature experiences.',
  },
  {
    id: 'transfer',
    question: 'Does WildCalm offer airport or railway transfers?',
    answer:
      'Yes. WildCalm offers airport and railway station transfers on a chargeable basis. Please share your travel details - arrival time, station or airport name, and number of guests - at least 48 hours prior to arrival. Reach us at +91 9918-01-9918 / +91 9213005439 or sasan.stay@wildcalm.in.',
  },
  {
    id: 'checkin',
    question: 'What are the check-in and check-out timings?',
    answer:
      'Check-in at WildCalm begins at 1:00 PM and check-out is by 10:30 AM. Early check-in and late check-out can be requested subject to availability. We are happy to store your luggage if you arrive ahead of your room being ready.',
  },
  {
    id: 'activities',
    question: 'What experiences and activities does WildCalm offer?',
    answer:
      "WildCalm offers a rich range of curated experiences:\nIncluded with Experiential Rooms:\n- Botanical Walk through the resort's native plant landscape\n- Storytelling as part of the meal experience\nAvailable at additional charge:\n- Gir Jungle Safari (guided)\n- Nature Trails in the buffer zone\n- Experiential High Tea\n- Bush Dinner under the open sky\n- Pottery Sessions\n- Yoga & Meditation\nAll experiences are designed to create an authentic connection with Gir's wilderness, culture, and landscape.",
  },
  {
    id: 'pets',
    question: 'Are pets allowed at WildCalm?',
    answer:
      'Pets are not permitted at WildCalm. This policy is in place to ensure the comfort and safety of all guests and to preserve the natural environment of our forest surroundings.',
  },
];

export const transport: Transport[] = [
  {
    distance: '50',
    unit: 'KM',
    name: 'Veraval Railway Station',
    type: 'train',
    icon: '/design/Home Page/Section 9 - Getting Here/Railway Station.svg',
  },
  {
    distance: '60',
    unit: 'KM',
    name: 'Junagadh Railway Station',
    type: 'train',
    icon: '/design/Home Page/Section 9 - Getting Here/Railway Station.svg',
  },
  {
    distance: '86',
    unit: 'KM',
    name: 'Diu Regional Airport',
    type: 'plane',
    icon: '/design/Home Page/Section 9 - Getting Here/Airport.svg',
  },
  {
    distance: '200',
    unit: 'KM',
    name: 'Rajkot International Airport',
    type: 'plane',
    icon: '/design/Home Page/Section 9 - Getting Here/Airport.svg',
  },
];
