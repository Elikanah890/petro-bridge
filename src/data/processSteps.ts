import type { ProcessStep } from '@/types/service.types';

export const processSteps: ProcessStep[] = [
  {
    id: 'step-1',
    step: 1,
    title: 'Client Onboarding & Needs Assessment',
    description: 'We begin by understanding your unique fuel logistics requirements, supply chain structure, depot locations, consumption patterns, and operational challenges.',
    icon: '/icons/services/qualification.svg',
    details: [
      'Comprehensive logistics needs analysis',
      'Current supply chain mapping and assessment',
      'Identification of optimization opportunities',
      'Custom solution design and scope definition',
      'Service level agreement development',
    ],
  },
  {
    id: 'step-2',
    step: 2,
    title: 'Carrier Network Setup & Integration',
    description: 'We configure your customized carrier network from our pre-qualified transporter pool, integrating their systems with our coordination platform for seamless operations.',
    icon: '/icons/services/dispatch.svg',
    details: [
      'Carrier selection tailored to your routes and volumes',
      'Technology integration and onboarding',
      'Training and standard operating procedure alignment',
      'GPS and telematics system provisioning',
      'Performance baseline establishment',
    ],
  },
  {
    id: 'step-3',
    step: 3,
    title: 'Platform Deployment & Configuration',
    description: 'Our logistics coordination platform is configured to your specific workflows, reporting requirements, user roles, and integration needs.',
    icon: '/icons/services/depot.svg',
    details: [
      'Dashboard and reporting customization',
      'User account and role-based access setup',
      'Alert and notification rule configuration',
      'Integration with existing systems (ERP, accounting)',
      'Data migration from legacy systems',
    ],
  },
  {
    id: 'step-4',
    step: 4,
    title: 'Live Operations & Real-Time Monitoring',
    description: 'Go live with your fully coordinated logistics operations. Our team provides continuous support, real-time monitoring, and proactive issue resolution.',
    icon: '/icons/services/monitoring.svg',
    details: [
      '24/7 logistics coordination center support',
      'Real-time shipment tracking and visibility',
      'Proactive exception detection and resolution',
      'Performance monitoring and SLA compliance',
      'Continuous communication and status updates',
    ],
  },
  {
    id: 'step-5',
    step: 5,
    title: 'Reporting, Analytics & Continuous Improvement',
    description: 'Receive comprehensive performance insights, actionable analytics, and continuous optimization recommendations to drive ongoing efficiency gains.',
    icon: '/icons/services/reporting.svg',
    details: [
      'Automated operational and financial reporting',
      'KPI tracking and trend analysis',
      'Carrier performance scorecards and reviews',
      'Cost optimization recommendations',
      'Quarterly business review meetings',
    ],
  },
];
