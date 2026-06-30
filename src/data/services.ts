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
    id: 'depot-management',
    title: 'Depot & Inventory Management',
    subtitle: 'End-to-End Stock Visibility and Control',
    description: 'Gain complete control over your petroleum product inventory across all depots. Our platform provides real-time stock level monitoring, automated replenishment alerts, and seamless coordination between depot operations and transportation logistics, ensuring you never run dry.',
    icon: '/icons/services/depot.svg',
    features: [
      'Real-time inventory tracking across multiple depot locations',
      'Automated low-stock alerts and replenishment triggers',
      'Receipt and dispatch reconciliation at depot level',
      'Tank calibration and measurement data integration',
      'Product temperature and density monitoring',
      'Customizable inventory reports and analytics',
    ],
    benefits: [
      'Prevent costly stockouts and service interruptions',
      'Optimize working capital with smarter inventory planning',
      'Eliminate manual reconciliation errors and losses',
      'Full audit trail of all depot stock movements',
    ],
    image: '/service/Depot_Inventory_%20Management.jpeg',
    category: 'depot',
  },
  {
    id: 'shipment-monitoring',
    title: 'Real-Time Shipment Monitoring',
    subtitle: 'Complete Visibility, Every Kilometer',
    description: 'Track every liter of fuel, every kilometer of the journey, in real time. Our advanced GPS and IoT-enabled monitoring platform provides live location tracking, geofencing alerts, temperature monitoring, and deviation notifications, giving you complete confidence in your supply chain.',
    icon: '/icons/services/monitoring.svg',
    features: [
      'Live GPS tracking with map-based visualization',
      'Geofence zones for depot, route, and delivery points',
      'Real-time temperature and condition monitoring',
      'Automated deviation alerts and exception notifications',
      'Historical route playback and performance analytics',
      'Mobile app access for on-the-go tracking',
    ],
    benefits: [
      'Complete supply chain transparency and accountability',
      'Immediate detection and response to route deviations',
      'Proof of delivery validation and dispute resolution',
      'Data-driven insights for continuous improvement',
    ],
    image: '/service/Real_Time_Shipment_Monitoring.jpeg',
    category: 'monitoring',
  },
  {
    id: 'exception-management',
    title: 'Exception & Incident Management',
    subtitle: 'Rapid Response When It Matters Most',
    description: 'When things go wrong, our exception management system springs into action. From delays and diversions to product quality issues and accidents, our dedicated response team coordinates rapid resolution, keeping all stakeholders informed and minimizing operational impact.',
    icon: '/icons/services/exception.svg',
    features: [
      '24/7 incident detection and alert escalation',
      'Automated stakeholder notification workflows',
      'Root cause analysis and corrective action tracking',
      'Insurance claim coordination and documentation support',
      'Real-time status updates for all affected parties',
      'Historical incident analysis for pattern detection',
    ],
    benefits: [
      'Dramatically reduced response time to incidents',
      'Minimized operational and financial impact',
      'Complete incident documentation for compliance',
      'Continuous improvement through lessons learned',
    ],
    image: '/service/Exception_Incident_Management.jpeg',
    category: 'exception',
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
