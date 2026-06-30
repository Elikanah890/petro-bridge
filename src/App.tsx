import { ThemeProvider, LanguageProvider, AppProvider } from '@/context';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import '@/i18n';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <AppProvider>
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </AppProvider>
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
