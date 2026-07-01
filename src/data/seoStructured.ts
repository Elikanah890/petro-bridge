export const organizationData = {
  name: 'Petro Bridge Solutions',
  description: 'Petroleum logistics coordination and delivery assurance company in Tanzania',
  url: 'https://petrobridgesolutions.co.tz',
  logo: 'https://petrobridgesolutions.co.tz/logos/logo-cropped.png',
  foundingDate: '2018',
  founder: {
    '@type': 'Person',
    name: 'Petro',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dar es Salaam',
    addressCountry: 'TZ',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+255123456789',
    contactType: 'sales',
    availableLanguage: ['English', 'Swahili'],
  },
};

export const localBusinessData = {
  name: 'Petro Bridge Solutions',
  description: 'Petroleum logistics coordination and delivery assurance company in Tanzania',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dar es Salaam',
    addressLocality: 'Dar es Salaam',
    addressCountry: 'TZ',
  },
  telephone: '+255123456789',
  email: 'info@petrobridgesolutions.co.tz',
  openingHours: 'Mo-Fr 08:00-18:00, Sa 08:00-13:00',
};

export const serviceData = {
  name: 'Petroleum Logistics Coordination',
  description: 'End-to-end logistics coordination for petroleum products in Tanzania and East Africa',
  provider: {
    '@type': 'Organization',
    name: 'Petro Bridge Solutions',
  },
  serviceType: 'Logistics Coordination',
  areaServed: {
    '@type': 'Country',
    name: 'Tanzania',
  },
};
