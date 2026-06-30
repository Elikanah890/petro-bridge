export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
  metric?: string;
}

export const benefits: Benefit[] = [
  {
    id: 'expertise',
    title: 'Industry Expertise & Deep Local Knowledge',
    description: 'Our team combines decades of petroleum logistics experience with intimate knowledge of the Tanzanian market, regulatory landscape, and operating environment. We understand the unique challenges of fuel logistics in East Africa and bring proven solutions that work in our context.',
    icon: '/icons/services/qualification.svg',
  },
  {
    id: 'technology',
    title: 'Advanced Technology Platform',
    description: 'Purpose-built logistics coordination technology provides real-time visibility, automated workflows, and data-driven insights. Our platform integrates GPS tracking, IoT sensors, automated alerts, and advanced analytics into a single, easy-to-use interface.',
    icon: '/icons/services/monitoring.svg',
  },
  {
    id: 'network',
    title: 'Pre-Qualified Carrier Network',
    description: 'Access our rigorously vetted network of Tanzania\'s most reliable petroleum transporters. Every carrier undergoes comprehensive qualification including safety audits, insurance verification, equipment inspection, and performance history review.',
    icon: '/icons/services/dispatch.svg',
  },
  {
    id: 'cost',
    title: 'Cost Optimization & Transparency',
    description: 'Our coordination model and consolidated volume leverage deliver measurable cost savings. Transparent pricing, automated reconciliation, and data-driven optimization ensure you get the best value for your logistics spend.',
    icon: '/icons/services/reporting.svg',
    metric: '15-25%',
  },
  {
    id: 'reliability',
    title: 'Operational Reliability & Uptime',
    description: 'With 24/7 monitoring, proactive exception management, and a network of backup carriers, we ensure your fuel supply chain remains operational even when challenges arise. Our clients experience dramatically reduced stockouts and delivery delays.',
    icon: '/icons/services/exception.svg',
    metric: '99.5%',
  },
  {
    id: 'compliance',
    title: 'Regulatory Compliance Assurance',
    description: 'Navigate Tanzania\'s complex petroleum regulatory environment with confidence. We ensure all operations comply with EWURA, OSHA, NEMC, and other regulatory requirements, maintaining complete documentation for audits and inspections.',
    icon: '/icons/services/verification.svg',
  },
  {
    id: 'visibility',
    title: 'End-to-End Supply Chain Visibility',
    description: 'From refinery gate to retail station tank, gain complete visibility into your fuel supply chain. Track every shipment, monitor inventory levels in real time, and receive instant alerts on any deviation from plan.',
    icon: '/icons/services/depot.svg',
  },
  {
    id: 'partnership',
    title: 'True Partnership Approach',
    description: 'We are not just a service provider — we are your logistics partner. Our team works collaboratively with your operations, procurement, and finance teams to continuously improve your fuel supply chain performance and drive business results.',
    icon: '/icons/services/reporting.svg',
  },
];
