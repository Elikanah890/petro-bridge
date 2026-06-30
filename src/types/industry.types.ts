export interface Industry {
  id: string;
  title: string;
  description: string;
  icon: string;
  challenges: string[];
  solutions: string[];
  image?: string;
}

export interface Client {
  id: string;
  name: string;
  logo: string;
  industry: string;
  testimonial?: string;
  author?: string;
  position?: string;
}
