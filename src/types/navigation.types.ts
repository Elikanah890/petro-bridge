export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface FooterLinkGroup {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

export interface SocialLink {
  platform: 'linkedin' | 'twitter' | 'facebook' | 'instagram' | 'whatsapp';
  href: string;
  label: string;
}
