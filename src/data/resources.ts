export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'document' | 'article' | 'video' | 'case-study';
  downloadUrl?: string;
  image?: string;
  date: string;
  category: string;
}

export const resources: Resource[] = [
  {
    id: 'res-1',
    title: 'The Future of Petroleum Logistics in East Africa',
    description: 'An in-depth analysis of emerging trends in petroleum logistics, including digital transformation, sustainability initiatives, and regional infrastructure developments shaping the East African market.',
    type: 'article',
    date: '2025-06-15',
    category: 'Industry Insights',
  },
  {
    id: 'res-2',
    title: 'Reducing Fuel Supply Chain Losses: A Practical Guide',
    description: 'A comprehensive guide to identifying and eliminating common sources of product loss in the petroleum downstream supply chain, with actionable strategies and real-world case studies.',
    type: 'document',
    downloadUrl: '/downloads/service-catalog.pdf',
    date: '2025-05-20',
    category: 'Best Practices',
  },
  {
    id: 'res-3',
    title: 'Case Study: Optimizing Fuel Logistics for Gold Mining Operations',
    description: 'How Petro Bridge Solutions helped a major gold mining company reduce fuel logistics costs by 22% while improving delivery reliability to remote mine sites in Tanzania.',
    type: 'case-study',
    date: '2025-04-10',
    category: 'Case Studies',
  },
  {
    id: 'res-4',
    title: 'Understanding EWURA Petroleum Logistics Regulations (2025 Update)',
    description: 'A comprehensive overview of the latest regulatory requirements from Tanzania\'s Energy and Water Utilities Regulatory Authority affecting petroleum transportation and logistics.',
    type: 'article',
    date: '2025-03-05',
    category: 'Compliance',
  },
  {
    id: 'res-5',
    title: 'Technology Solutions for Petroleum Supply Chain Visibility',
    description: 'Exploring how GPS tracking, IoT sensors, and advanced analytics platforms are revolutionizing fuel logistics management across Africa.',
    type: 'article',
    date: '2025-02-18',
    category: 'Technology',
  },
  {
    id: 'res-6',
    title: 'How to Select and Manage Petroleum Transporters Effectively',
    description: 'A step-by-step guide to building and maintaining a high-performance petroleum carrier network, including qualification criteria, performance metrics, and relationship management.',
    type: 'document',
    downloadUrl: '/downloads/company-profile.pdf',
    date: '2025-01-22',
    category: 'Best Practices',
  },
];
