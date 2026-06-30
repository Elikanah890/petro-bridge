import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Loader } from '@/components/ui/Loader';

const Home = lazy(() => import('@/pages/Home/Home'));
const About = lazy(() => import('@/pages/About/About'));
const Services = lazy(() => import('@/pages/Services/Services'));
const HowWeWork = lazy(() => import('@/pages/HowWeWork/HowWeWork'));
const Industries = lazy(() => import('@/pages/Industries/Industries'));
const WhyChooseUs = lazy(() => import('@/pages/WhyChooseUs/WhyChooseUs'));
const FAQ = lazy(() => import('@/pages/FAQ/FAQ'));
const Contact = lazy(() => import('@/pages/Contact/Contact'));
const Resources = lazy(() => import('@/pages/Resources/Resources'));
const Clients = lazy(() => import('@/pages/Clients/Clients'));
const GettingStarted = lazy(() => import('@/pages/GettingStarted/GettingStarted'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy/PrivacyPolicy'));
const TermsConditions = lazy(() => import('@/pages/TermsConditions/TermsConditions'));
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'));

function SuspenseFallback() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-navy-900">
      <Loader />
    </div>
  );
}

export function AppRoutes() {
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="how-we-work" element={<HowWeWork />} />
          <Route path="industries" element={<Industries />} />
          <Route path="why-choose-us" element={<WhyChooseUs />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resources" element={<Resources />} />
          <Route path="clients" element={<Clients />} />
          <Route path="getting-started" element={<GettingStarted />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-conditions" element={<TermsConditions />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
