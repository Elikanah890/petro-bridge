import { cn } from '@/lib/helpers';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress/ScrollProgress';
import { BackToTop } from '@/components/ui/BackToTop/BackToTop';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton/WhatsAppButton';
import type { LayoutProps } from './Layout.types';

export function Layout({
  children,
  className,
  hideFooter = false,
}: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-navy-900">
      <ScrollProgress />
      <Navbar />

      <main className={cn('flex-1 pt-18', className)}>
        {children ?? <Outlet />}
      </main>

      {!hideFooter && <Footer />}

      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}

export default Layout;
