import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { PageTransition } from '@/components/animations/PageTransition';
import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { Services } from '@/components/sections/Services';
import { DashboardPreview } from '@/components/sections/DashboardPreview';
import { Industries } from '@/components/sections/Industries';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { ProcessPreview } from '@/components/sections/ProcessPreview';
import { FAQPreview } from '@/components/sections/FAQPreview';
import { Newsletter } from '@/components/sections/Newsletter';
import { ContactCTA } from '@/components/sections/ContactCTA';

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('home.title', 'Petro Bridge Solutions | Petroleum Logistics Coordination Tanzania')}</title>
        <meta name="description" content={t('home.metaDescription', 'Tanzania\'s premier petroleum logistics coordination and delivery assurance company. End-to-end fuel supply chain visibility, carrier management, and real-time shipment monitoring.')} />
      </Helmet>
      <PageTransition>
        <Hero />
        <TrustBar />
        <AboutPreview />
        <Services />
        <DashboardPreview />
        <Industries />
        <WhyChooseUs />
        <ProcessPreview />
        <FAQPreview />
        <Newsletter />
        <ContactCTA />
      </PageTransition>
    </>
  );
}

export default Home;
