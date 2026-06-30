import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronDown } from 'lucide-react';
import { mainNavigation } from '@/data';
import { cn } from '@/lib/helpers';
import { Container } from '@/components/shared/Container/Container';
import { Logo } from '@/components/shared/Logo/Logo';
import { Button } from '@/components/ui/Button/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle/ThemeToggle';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher/LanguageSwitcher';

export function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const solid = scrolled;

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-[100] h-16 sm:h-18 lg:h-22 transition-all duration-300',
          solid
            ? 'border-b border-navy-100/80 bg-white/95 shadow-nav backdrop-blur-md dark:border-navy-800 dark:bg-navy-900/95'
            : 'bg-transparent'
        )}
      >
        <Container className="h-full">
          <div className="flex h-full items-center justify-between">
            {/* Logo */}
            <Logo size="md" onDark={!solid} />

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 lg:flex">
              {mainNavigation.map((item) => {
                const hasKids = !!item.children?.length;
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => hasKids && setOpenDropdown(item.href)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      to={item.href}
                      className={cn(
                        'group relative inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                        solid
                          ? 'text-navy-700 hover:text-navy-900 dark:text-navy-100 dark:hover:text-white'
                          : 'text-white/85 hover:text-white'
                      )}
                    >
                      {t(item.label)}
                      {hasKids && (
                        <ChevronDown className={cn('h-3.5 w-3.5 transition-transform', openDropdown === item.href && 'rotate-180')} />
                      )}
                      <span
                        className={cn(
                          'absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gold-500 transition-transform group-hover:scale-x-100',
                          location.pathname === item.href && 'scale-x-100'
                        )}
                      />
                    </Link>

                    {hasKids && openDropdown === item.href && (
                      <div className="absolute left-0 top-full z-50 w-56 overflow-hidden rounded-xl border border-navy-100 bg-white p-2 shadow-card-hover dark:border-navy-700 dark:bg-navy-800">
                        {item.children!.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-50 hover:text-gold-600 dark:text-navy-100 dark:hover:bg-navy-700 dark:hover:text-gold-400"
                          >
                            {t(child.label)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Desktop right */}
            <div className="hidden items-center gap-2 lg:flex">
              <LanguageSwitcher className={cn(!solid && 'text-white/90 hover:bg-white/10 hover:text-white')} />
              <ThemeToggle className={cn(!solid && 'text-white/90 hover:bg-white/10 hover:text-white')} />
              <Button href="/contact" variant="gold" size="md">
                {t('nav.getStarted')}
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className={cn(
                'inline-flex h-11 w-11 items-center justify-center rounded-xl transition-all lg:hidden',
                solid
                  ? 'bg-navy-50 text-navy-800 dark:bg-navy-800 dark:text-white'
                  : 'bg-white/25 text-white backdrop-blur-sm'
              )}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          'fixed inset-0 z-[99999] transition-opacity duration-300 lg:hidden',
          mobileOpen ? 'visible opacity-100' : 'invisible opacity-0'
        )}
      >
        <div className="absolute inset-0 bg-black/70" onClick={() => setMobileOpen(false)} />
        <div
          className={cn(
            'absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 dark:bg-navy-900',
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex items-center justify-between border-b border-navy-100 p-4 dark:border-navy-700">
            <Logo size="sm" />
            <button
              onClick={() => setMobileOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-navy-700 dark:bg-navy-800 dark:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="h-full overflow-y-auto p-3 pb-32">
            {mainNavigation.map((item) => {
              const active = location.pathname === item.href.split('#')[0];
              const hasKids = !!item.children?.length;

              return (
                <div key={item.href}>
                  <Link
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'flex items-center gap-3 rounded-xl px-4 py-3 text-base font-semibold transition-colors',
                      active
                        ? 'bg-gold-500/10 text-gold-600 dark:text-gold-400'
                        : 'text-navy-800 hover:bg-navy-50 dark:text-navy-100 dark:hover:bg-navy-800'
                    )}
                  >
                    {t(item.label)}
                    {hasKids && <ChevronDown className="ml-auto h-4 w-4 text-navy-400" />}
                  </Link>

                  {hasKids && (
                    <div className="ml-4 border-l-2 border-navy-100 pb-1 pl-3 dark:border-navy-700">
                      {item.children!.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-xl px-4 py-2.5 text-sm font-medium text-navy-600 transition-colors hover:bg-navy-50 hover:text-gold-600 dark:text-navy-300 dark:hover:bg-navy-800 dark:hover:text-gold-400"
                        >
                          {t(child.label)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="my-4 border-t border-navy-100 dark:border-navy-700" />

            <div className="space-y-2 px-1">
              <Link to="/faq" onClick={() => setMobileOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-navy-600 hover:bg-navy-50 dark:text-navy-300 dark:hover:bg-navy-800">
                {t('nav.sub_resources_faq')}
              </Link>
              <Link to="/getting-started" onClick={() => setMobileOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-navy-600 hover:bg-navy-50 dark:text-navy-300 dark:hover:bg-navy-800">
                {t('footer.link_started')}
              </Link>
              <Link to="/privacy-policy" onClick={() => setMobileOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-navy-600 hover:bg-navy-50 dark:text-navy-300 dark:hover:bg-navy-800">
                {t('footer.link_privacy')}
              </Link>
              <Link to="/terms-conditions" onClick={() => setMobileOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-navy-600 hover:bg-navy-50 dark:text-navy-300 dark:hover:bg-navy-800">
                {t('footer.link_terms')}
              </Link>
            </div>
          </nav>

          <div className="absolute inset-x-0 bottom-0 border-t border-navy-100 bg-navy-50 p-4 dark:border-navy-700 dark:bg-navy-800">
            <Button href="/contact" variant="gold" fullWidth onClick={() => setMobileOpen(false)} size="md">
              {t('nav.getStarted')}
            </Button>
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="text-xs font-medium text-navy-500 hover:text-gold-500 dark:text-navy-400">
                {t('contact.title')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
