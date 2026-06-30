import type { Industry, Client } from '@/types/industry.types';

export const industries: Industry[] = [
  {
    id: 'petroleum',
    title: 'Petroleum Marketing Companies',
    description: 'We provide end-to-end logistics coordination for Oil Marketing Companies (OMCs), managing the entire downstream supply chain from import terminals and refineries to retail stations and commercial customers across Tanzania.',
    icon: '/icons/industries/petroleum.svg',
    challenges: [
      'Fragmented transporter networks with inconsistent quality',
      'Lack of real-time visibility into product movements',
      'Delivery delays and stockouts at retail stations',
      'Complex reconciliation and billing processes',
      'Regulatory compliance across multiple authorities',
    ],
    solutions: [
      'Single integrated logistics coordination platform',
      'End-to-end shipment visibility with real-time tracking',
      'Automated delivery verification and reconciliation',
      'Performance-optimized carrier network management',
      'Comprehensive compliance and regulatory reporting',
    ],
    image: '/industries/Petroleum_Marketing_Companies.jpeg',
  },
  {
    id: 'mining',
    title: 'Mining & Resource Extraction',
    description: 'Tanzania\'s mining sector demands reliable fuel supply for heavy machinery, generators, and vehicle fleets in remote locations. We coordinate complex logistics to ensure uninterrupted fuel delivery to mine sites across the country.',
    icon: '/icons/industries/mining.svg',
    challenges: [
      'Remote mine site locations with difficult access',
      'High-volume fuel consumption requiring reliable supply',
      'Harsh operating environments and terrain challenges',
      'Critical uptime requirements for mining operations',
      'Inventory management across multiple site tanks',
    ],
    solutions: [
      'Route-optimized delivery planning for remote locations',
      'Automated inventory monitoring and replenishment',
      'Emergency fuel supply coordination',
      'Specialized off-road transport coordination',
      'Real-time consumption tracking and forecasting',
    ],
    image: '/industries/Mining_Resource_Extraction.jpeg',
  },
  {
    id: 'government',
    title: 'Government & Public Sector',
    description: 'We support government agencies, public institutions, and state-owned enterprises with secure, transparent, and compliant fuel logistics coordination for their vehicle fleets, power generation, and operational requirements.',
    icon: '/icons/industries/government.svg',
    challenges: [
      'Strict procurement and compliance requirements',
      'Budget constraints requiring cost optimization',
      'Distributed operations across multiple regions',
      'Transparency and audit trail requirements',
      'Emergency and disaster response fuel needs',
    ],
    solutions: [
      'Fully auditable digital logistics records',
      'Cost-optimized transport planning and consolidation',
      'Multi-location coordination and centralized visibility',
      'Compliant procurement and payment processes',
      'Rapid emergency response mobilization',
    ],
    image: '/industries/Government_Public%20_Sector.jpeg',
  },
  {
    id: 'construction',
    title: 'Construction & Infrastructure',
    description: 'From road construction to major infrastructure projects, we ensure construction companies have the fuel they need, when and where they need it, to keep heavy machinery operating and projects on schedule.',
    icon: '/icons/industries/construction.svg',
    challenges: [
      'Dynamic project locations changing fuel demand patterns',
      'Multiple equipment types with varying consumption rates',
      'On-site storage management and safety compliance',
      'Just-in-time delivery requirements to avoid downtime',
      'Cost control in competitive construction markets',
    ],
    solutions: [
      'Flexible delivery scheduling adapted to project phases',
      'On-site fuel inventory monitoring and management',
      'Safety-compliant delivery coordination',
      'Consolidated billing and cost reporting by project',
      'Equipment-specific consumption tracking and analysis',
    ],
    image: '/industries/Construction_Infrastructure.jpeg',
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing & Industrial',
    description: 'Manufacturing facilities depend on consistent fuel supply for production processes, backup power, and logistics operations. We provide reliable coordination that keeps your production lines running without interruption.',
    icon: '/icons/industries/manufacturing.svg',
    challenges: [
      'Continuous production requiring uninterrupted fuel supply',
      'Multiple fuel types for different applications',
      'Storage capacity optimization and turnover management',
      'Production-critical delivery scheduling',
      'Quality specifications for industrial processes',
    ],
    solutions: [
      'Guaranteed delivery schedules aligned to production needs',
      'Multi-product logistics coordination',
      'Tank monitoring and automated replenishment',
      'Priority emergency delivery service',
      'Quality assurance and product specification compliance',
    ],
    image: '/industries/Manufacturing%20_Industrial.jpeg',
  },
  {
    id: 'fuel-stations',
    title: 'Fuel Retail Stations',
    description: 'We coordinate deliveries to retail fuel stations across Tanzania, ensuring forecourts stay stocked, customers stay served, and station operators can focus on their business rather than logistics management.',
    icon: '/icons/industries/fuel-stations.svg',
    challenges: [
      'Multiple station locations with varying demand patterns',
      'Stockout risks during peak demand periods',
      'Wet stock management and reconciliation',
      'Multiple supplier coordination requirements',
      'Competitive pricing pressure requiring efficiency',
    ],
    solutions: [
      'Demand-driven automated replenishment scheduling',
      'Real-time tank level monitoring integration',
      'Automated reconciliation and wet stock management',
      'Multi-supplier logistics coordination',
      'Route optimization for multi-stop station deliveries',
    ],
    image: '/industries/Fuel_Retail_Stations.jpeg',
  },
];

export const clients: Client[] = [
  {
    id: 'client-1',
    name: 'Tanzania Petroleum Development Corporation',
    logo: '/images/clients/client-1.png',
    industry: 'government',
  },
  {
    id: 'client-2',
    name: 'Lake Oil Limited',
    logo: '/images/clients/client-2.png',
    industry: 'petroleum',
  },
  {
    id: 'client-3',
    name: 'Geita Gold Mine',
    logo: '/images/clients/client-3.png',
    industry: 'mining',
  },
];

export const getIndustryById = (id: string): Industry | undefined =>
  industries.find((i) => i.id === id);
