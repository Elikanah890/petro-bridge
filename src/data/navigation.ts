import type { NavItem, FooterLinkGroup, SocialLink } from '@/types/navigation.types';

export const mainNavigation: NavItem[] = [
  { label: 'nav.home', href: '/' },
  {
    label: 'nav.about',
    href: '/about',
    children: [
      { label: 'nav.sub_about_story', href: '/about#story' },
      { label: 'nav.sub_about_mission', href: '/about#mission' },
      { label: 'nav.sub_about_values', href: '/about#values' },
      { label: 'nav.sub_about_founder', href: '/about#founder' },
    ],
  },
  {
    label: 'nav.services',
    href: '/services',
    children: [
      { label: 'nav.sub_services_qualification', href: '/services#qualification' },
      { label: 'nav.sub_services_dispatch', href: '/services#dispatch' },
      { label: 'nav.sub_services_depot', href: '/services#depot' },
      { label: 'nav.sub_services_monitoring', href: '/services#monitoring' },
      { label: 'nav.sub_services_exception', href: '/services#exception' },
      { label: 'nav.sub_services_verification', href: '/services#verification' },
      { label: 'nav.sub_services_reporting', href: '/services#reporting' },
    ],
  },
  {
    label: 'nav.howWeWork',
    href: '/how-we-work',
  },
  {
    label: 'nav.whyChooseUs',
    href: '/why-choose-us',
  },
  { label: 'nav.contact', href: '/contact' },
];

export const footerLinks: FooterLinkGroup[] = [
  {
    title: 'footer.section_services',
    links: [
      { label: 'footer.link_carrier', href: '/services#qualification' },
      { label: 'footer.link_dispatch', href: '/services#dispatch' },
      { label: 'footer.link_monitoring', href: '/services#monitoring' },
      { label: 'footer.link_verification', href: '/services#verification' },
      { label: 'footer.link_reporting', href: '/services#reporting' },
    ],
  },
  {
    title: 'footer.section_company',
    links: [
      { label: 'footer.link_about', href: '/about' },
      { label: 'footer.link_how', href: '/how-we-work' },
      { label: 'footer.link_why', href: '/why-choose-us' },
      { label: 'footer.link_clients', href: '/clients' },
    ],
  },
  {
    title: 'footer.section_resources',
    links: [
      { label: 'footer.link_faq', href: '/faq' },
      { label: 'footer.link_started', href: '/getting-started' },
      { label: 'footer.link_contact', href: '/contact' },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { platform: 'facebook', href: 'https://facebook.com/petrobridge', label: 'Facebook' },
  { platform: 'instagram', href: 'https://instagram.com/petrobridge', label: 'Instagram' },
  { platform: 'whatsapp', href: 'https://wa.me/255123456789', label: 'WhatsApp' },
];
