import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { ProductPurchaseModal } from './components/ProductPurchaseModal';
import { RegistrationModal } from './components/RegistrationModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ProductsCatalogPage } from './pages/ProductsCatalogPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { MembershipsPage } from './pages/MembershipsPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { TutorialRegistrationPage } from './pages/TutorialRegistrationPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { CountriesPage } from './pages/CountriesPage';
import { OfficesPage } from './pages/OfficesPage';
import { ShippingPage } from './pages/ShippingPage';
import { PaymentsPage } from './pages/PaymentsPage';
import { CustomerServicePage } from './pages/CustomerServicePage';
import { FAQPage } from './pages/FAQPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { BlogPage } from './pages/BlogPage';
import { LegalPage } from './pages/LegalPage';

const AppContent: React.FC = () => {
  const { currentPath } = useApp();

  // Robust path parsing and page resolution
  const renderCurrentPage = () => {
    let path = currentPath.split('?')[0].split('#')[0].toLowerCase().trim();
    if (path.length > 1 && path.endsWith('/')) {
      path = path.slice(0, -1);
    }

    // 1. Home
    if (path === '/' || path === '/inicio' || path === '') {
      return <HomePage />;
    }

    // 2. Product Detail or Catalog
    if (path.startsWith('/productos/')) {
      const slug = path.replace('/productos/', '').trim();
      if (slug) {
        return <ProductDetailPage slug={slug} productSlug={slug} />;
      }
      return <ProductsCatalogPage />;
    }
    if (path === '/productos') {
      return <ProductsCatalogPage />;
    }

    // 3. Categories
    if (path.startsWith('/categorias/')) {
      const slug = path.replace('/categorias/', '').trim();
      return <CategoriesPage categorySlug={slug} />;
    }
    if (path === '/categorias') {
      return <CategoriesPage />;
    }

    // 4. Memberships & Business Plan
    if (path === '/membresias') {
      return <MembershipsPage />;
    }

    // 5. How It Works
    if (path === '/como-funciona') {
      return <HowItWorksPage />;
    }

    // 6. Tutorial Video
    if (path === '/tutorial-registro') {
      return <TutorialRegistrationPage />;
    }

    // 7. Direct Registration Gateway
    if (path === '/registro') {
      return <RegistrationPage />;
    }

    // 8. Countries
    if (path.startsWith('/paises/')) {
      const slug = path.replace('/paises/', '').trim();
      return <CountriesPage countrySlug={slug} />;
    }
    if (path === '/paises') {
      return <CountriesPage />;
    }

    // 9. Offices Directory
    if (path === '/oficinas') {
      return <OfficesPage />;
    }

    // 10. Shipping Guide
    if (path === '/envios') {
      return <ShippingPage />;
    }

    // 11. Payment Methods
    if (path === '/pagos') {
      return <PaymentsPage />;
    }

    // 12. Customer Service & Contact
    if (path === '/servicio-al-cliente' || path === '/contacto') {
      return <CustomerServicePage />;
    }

    // 13. FAQ
    if (path === '/preguntas-frecuentes' || path === '/faq') {
      return <FAQPage />;
    }

    // 14. About Us
    if (path === '/nosotros') {
      return <AboutUsPage />;
    }

    // 15. Scientific Blog
    if (path.startsWith('/blog/')) {
      const slug = path.replace('/blog/', '').trim();
      return <BlogPage articleSlug={slug} />;
    }
    if (path === '/blog') {
      return <BlogPage />;
    }

    // 16. Legal & Privacy
    if (path === '/terminos') {
      return <LegalPage type="terminos" />;
    }
    if (path === '/privacidad') {
      return <LegalPage type="privacidad" />;
    }

    // Default Fallback
    return <HomePage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-emerald-200 selection:text-emerald-950">
      {/* Navigation Header */}
      <Header />

      {/* Main Content View */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <GlobalSearchModal />
      <ProductPurchaseModal />
      <RegistrationModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
