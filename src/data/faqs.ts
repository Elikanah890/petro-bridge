import type { FAQItem } from '@/types/form.types';

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What exactly does Petro Bridge Solutions do?',
    answer: 'Petro Bridge Solutions is a petroleum logistics coordination and delivery assurance company. We bridge the gap between fuel suppliers, transporters, and end-users by providing a single integrated platform for managing the entire downstream fuel supply chain. We do not own trucks or fuel — we coordinate, monitor, verify, and optimize the logistics process end-to-end, ensuring fuel is delivered safely, on time, and with complete accountability.',
    category: 'general',
  },
  {
    id: 'faq-2',
    question: 'How is Petro Bridge different from a transport company?',
    answer: 'Unlike a transport company that owns and operates trucks, Petro Bridge Solutions is a logistics coordinator. We maintain a pre-qualified network of independent transporters and provide the technology, processes, and expertise to manage the entire logistics lifecycle — from carrier selection and dispatch planning to real-time tracking, delivery verification, and performance analytics. We are your single point of accountability for all fuel logistics, without being limited to a single fleet.',
    category: 'general',
  },
  {
    id: 'faq-3',
    question: 'What types of petroleum products do you coordinate?',
    answer: 'We coordinate logistics for the full range of petroleum products including Premium Motor Spirit (PMS/petrol), Automotive Gas Oil (AGO/diesel), Jet A-1 (aviation fuel), Illuminating Kerosene (IK), Heavy Fuel Oil (HFO), and Liquefied Petroleum Gas (LPG). Our platform and processes are adaptable to any petroleum product with appropriate carrier and safety requirements.',
    category: 'services',
  },
  {
    id: 'faq-4',
    question: 'Where do you operate in Tanzania?',
    answer: 'We provide nationwide coverage across mainland Tanzania and Zanzibar. Our carrier network spans all major transport corridors including the Central Corridor (Dar es Salaam to the Lake Zone and neighboring countries), the Northern Corridor, the Southern Highlands routes, and remote mining regions. Whether your operations are in Dar es Salaam, Mwanza, Arusha, Mbeya, Dodoma, or remote sites in Geita or Shinyanga, we have you covered.',
    category: 'operations',
  },
  {
    id: 'faq-5',
    question: 'How does the carrier qualification process work?',
    answer: 'Our carrier qualification process is multi-stage: (1) Document submission and verification — licenses, insurance, tax compliance, EWURA registration; (2) Equipment inspection — vehicle condition, safety equipment, GPS functionality; (3) Safety audit — driver qualifications, safety records, incident history; (4) Reference checks — past client performance verification; (5) Trial period — monitored initial assignments. Carriers are re-qualified periodically and continuously monitored through our performance scorecard system.',
    category: 'services',
  },
  {
    id: 'faq-6',
    question: 'Can I track my shipments in real time?',
    answer: 'Yes. Our platform provides real-time GPS tracking for every active shipment. You can view the live location of your fuel on an interactive map, see estimated arrival times, receive automated notifications at key milestones (loading, departure, geofence entry/exit, arrival), and get instant alerts on any route deviations or delays. Both web dashboard and mobile app access are available.',
    category: 'technology',
  },
  {
    id: 'faq-7',
    question: 'What happens when there is a delivery delay or incident?',
    answer: 'Our 24/7 operations team is immediately alerted to any deviation from plan. Our exception management protocol includes: instant stakeholder notification (SMS, email, app), root cause assessment, resolution action plan with timeline, continuous status updates until resolution, and post-incident analysis with corrective actions. We maintain backup carrier availability for critical situations requiring load transfer or emergency delivery.',
    category: 'operations',
  },
  {
    id: 'faq-8',
    question: 'How does your pricing work?',
    answer: 'Our pricing is based on a transparent coordination fee model, typically structured as a per-cubic-meter or per-trip coordination fee depending on service scope and volume. This fee covers all platform access, 24/7 monitoring, carrier management, delivery verification, reporting, and support. There are no hidden fees. We can also offer customized pricing models for large-volume or long-term contracts. Contact our team for a tailored proposal.',
    category: 'pricing',
  },
  {
    id: 'faq-9',
    question: 'How quickly can you onboard a new client?',
    answer: 'Standard client onboarding typically takes 5-10 business days, depending on the complexity of your operations and integration requirements. This includes needs assessment, carrier network setup, platform configuration, user training, and go-live support. For urgent requirements, we offer an accelerated onboarding track that can reduce this to as little as 2-3 business days.',
    category: 'general',
  },
  {
    id: 'faq-10',
    question: 'Do you offer services outside Tanzania?',
    answer: 'Our primary focus is the Tanzanian market, where we have deep local expertise and an established carrier network. However, we can coordinate cross-border fuel logistics to neighboring countries (Kenya, Uganda, Rwanda, Burundi, DRC, Zambia, Malawi) through our network of partners on the major transit corridors. Contact us to discuss your specific cross-border requirements.',
    category: 'operations',
  },
  {
    id: 'faq-11',
    question: 'Is the platform available in Swahili?',
    answer: 'Yes. Our platform and all communications are available in both English and Swahili. Users can switch languages instantly from their profile settings. All reports, documentation, and support are provided in the client\'s preferred language.',
    category: 'technology',
  },
  {
    id: 'faq-12',
    question: 'How do you ensure fuel quality and quantity during transport?',
    answer: 'Our delivery verification system includes multiple checkpoints: pre-loading inspection and dip measurement, GPS-tracked transit with geofencing, post-delivery dip measurement with temperature correction, photo evidence capture, and digital sign-off by the receiving party. Any discrepancy is immediately flagged for investigation. We also support integration with automated tank gauging systems for continuous wet stock reconciliation.',
    category: 'services',
  },
];
