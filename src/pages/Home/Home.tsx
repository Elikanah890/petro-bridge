import { useTranslation } from 'react-i18next';
import { PageTransition } from '@/components/animations/PageTransition';
import { SEO } from '@/components/layout/SEO/SEO';
import { StructuredData } from '@/components/layout/SEO/StructuredData';
import { organizationData, localBusinessData } from '@/data/seoStructured';
import { seoData } from '@/data/seo';
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
      <SEO
        title={t('home.title', seoData.home.title)}
        description={t('home.metaDescription', seoData.home.description)}
        keywords={seoData.home.keywords}
        canonical="/"
      />
      <StructuredData type="Organization" data={organizationData} />
      <StructuredData type="LocalBusiness" data={localBusinessData} />
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
