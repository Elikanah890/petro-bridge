export const SITE_CONFIG = {
  name: 'Petro Bridge Solutions',
  tagline: 'Connecting Fuel. Building Trust.',
  description: "Tanzania's premier petroleum logistics coordination and delivery assurance company. Bridging the gap between fuel suppliers, transporters, and customers.",
  url: 'https://petrobridgesolutions.co.tz',
  email: 'info@petrobridgesolutions.co.tz',
  phone: '+255 668 746 110',
  whatsapp: '+255 668 746 110',
  address: 'Dar es Salaam, Tanzania',
  founded: 2018,
  social: {
    linkedin: 'https://linkedin.com/company/petro-bridge',
    twitter: 'https://twitter.com/petrobridge',
    facebook: 'https://www.facebook.com/profile.php?id=61591640129345',
    instagram: 'https://www.instagram.com/petrobridge_solutions/',
  },
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export const API_ENDPOINTS = {
  contact: '/api/contact',
  newsletter: '/api/newsletter',
} as const;

export const NAV_HEIGHT = 72;
export const NAV_HEIGHT_MOBILE = 64;
