import type { Service } from '@/types/service.types';

export const services: Service[] = [
  {
    id: 'carrier-qualification',
    title: 'Carrier Qualification & Onboarding',
    subtitle: 'Rigorous Vetting for Reliable Transport',
    description: 'We maintain a pre-qualified network of rigorously vetted transporters, ensuring every carrier meets the highest standards of safety, insurance, equipment quality, and regulatory compliance before they enter our network. Our multi-stage qualification process includes document verification, site inspections, and historical performance assessments.',
    icon: '/icons/services/qualification.svg',
    features: [
      'Multi-stage document verification and credential validation',
      'Physical site inspections of carrier facilities and equipment',
      'Safety record and historical performance assessments',
      'Insurance coverage verification and compliance checks',
      'Continuous monitoring and periodic re-qualification',
      'Real-time carrier performance scorecards',
    ],
    benefits: [
      'Eliminate risk of engaging unqualified transporters',
      'Access to a pre-vetted network of reliable carriers',
      'Reduced due diligence time for new engagements',
      'Transparent carrier performance data at your fingertips',
    ],
    image: '/service/Carrier_Qualification%20_Onboarding.jpeg',
    category: 'qualification',
  },
  {
    id: 'dispatch-coordination',
    title: 'Dispatch Coordination & Load Planning',
    subtitle: 'Smart Planning for On-Time Deliveries',
    description: 'Our logistics coordination center manages the complete dispatch lifecycle. From load planning and route optimization to carrier assignment and real-time tracking initiation, we ensure every shipment is dispatched with precision, efficiency, and complete visibility.',
    icon: '/icons/services/dispatch.svg',
    features: [
      'Automated load matching with optimal carrier selection',
      'Route optimization for safety, cost, and delivery time',
      'Real-time dispatch notification and confirmation workflows',
      'Load consolidation planning for multi-drop deliveries',
      'Emergency dispatch management for urgent requirements',
      'Digital dispatch documentation and e-POD readiness',
    ],
    benefits: [
      'Reduced planning time and faster dispatch cycles',
      'Optimized transport costs through smart load planning',
      'Complete visibility from dispatch to delivery confirmation',
      'Proactive issue resolution before they become delays',
    ],
    image: '/service/Dispatch%20_Coordination_Load_Planning.jpeg',
    category: 'dispatch',
  },
  {
    id: 'delivery-verification',
    title: 'Delivery Verification & Reconciliation',
    subtitle: 'Every Drop Accounted For',
    description: 'Our multi-point verification system ensures delivery accuracy from loading to offloading. Electronic Proof of Delivery (e-POD), volume reconciliation, temperature-adjusted quantity verification, and digital sign-off combine to eliminate disputes and losses.',
    icon: '/icons/services/verification.svg',
    features: [
      'Electronic Proof of Delivery with digital signatures',
      'Volume reconciliation at loading and delivery points',
      'Temperature-adjusted quantity calculations',
      'Photo evidence capture at delivery location',
      'Automated discrepancy detection and alerting',
      'Integrated billing and payment reconciliation',
    ],
    benefits: [
      'Eliminate delivery quantity disputes and losses',
      'Accurate and timely supplier billing',
      'Digital audit trail for every delivery',
      'Reduced administrative overhead and faster payments',
    ],
    image: '/service/Delivery%20_Verification_Reconciliation.jpeg',
    category: 'verification',
  },
  {
    id: 'analytics-reporting',
    title: 'Analytics, Insights & Reporting',
    subtitle: 'Data-Driven Decisions, Proven Results',
    description: 'Transform your logistics data into actionable intelligence. Our advanced analytics platform delivers custom dashboards, automated reports, trend analysis, and predictive insights that empower you to optimize costs, improve service levels, and make informed strategic decisions.',
    icon: '/icons/services/reporting.svg',
    features: [
      'Customizable executive dashboards and KPI tracking',
      'Automated daily, weekly, and monthly reports',
      'Cost analysis and optimization recommendations',
      'Carrier performance scorecards and benchmarking',
      'Demand forecasting and capacity planning',
      'Regulatory compliance reporting and documentation',
    ],
    benefits: [
      'Actionable insights for strategic decision-making',
      'Identified cost savings through data analysis',
      'Improved carrier and supplier performance management',
      'Streamlined compliance and regulatory reporting',
    ],
    image: '/service/Analytics_Insights%20_Reporting.jpeg',
    category: 'reporting',
  },
];

export const servicesByCategory = services.reduce(
  (acc, service) => {
    if (!acc[service.category]) acc[service.category] = [];
    acc[service.category].push(service);
    return acc;
  },
  {} as Record<string, Service[]>
);

export const getServiceById = (id: string): Service | undefined =>
  services.find((s) => s.id === id);
