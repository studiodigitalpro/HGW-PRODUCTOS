import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { HGWCountry, HGWProduct } from '../types';
import { HGW_COUNTRIES, getCountryById } from '../data/countriesData';
import { trackEvent } from '../utils/analytics';

interface ProductModalState {
  isOpen: boolean;
  product: HGWProduct | null;
  initialTab: 'cliente' | 'socio';
}

interface AppContextType {
  currentPath: string;
  navigate: (path: string) => void;
  selectedCountry: HGWCountry;
  setSelectedCountry: (country: HGWCountry) => void;
  formatCurrency: (usdAmount: number) => string;
  formatUSD: (usdAmount: number) => string;
  isRegistrationModalOpen: boolean;
  openRegistrationModal: (source?: string) => void;
  closeRegistrationModal: () => void;
  productModalState: ProductModalState;
  openProductModal: (product: HGWProduct, tab?: 'cliente' | 'socio') => void;
  closeProductModal: () => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  openSearch: () => void;
  closeSearch: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Safe initial path resolution
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const p = window.location.pathname;
      return p === '/' ? '/inicio' : p;
    }
    return '/inicio';
  });

  // Country selection (Default: Panama 'PA')
  const [selectedCountry, setSelectedCountryState] = useState<HGWCountry>(() => {
    return getCountryById('PA') || HGW_COUNTRIES[0];
  });

  // Modals
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [productModalState, setProductModalState] = useState<ProductModalState>({
    isOpen: false,
    product: null,
    initialTab: 'cliente'
  });
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Sync browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname === '/' ? '/inicio' : window.location.pathname;
      setCurrentPath(path);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Global Keyboard Shortcuts (Cmd+K / Ctrl+K for search, ESC to close modals)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsRegistrationModalOpen(false);
        setProductModalState(prev => ({ ...prev, isOpen: false }));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigate = (path: string) => {
    if (path === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const setSelectedCountry = (country: HGWCountry) => {
    setSelectedCountryState(country);
    trackEvent('country_selected', { country_id: country.id, country_name: country.name });
  };

  const formatCurrency = (usdAmount: number): string => {
    if (selectedCountry.currencyCode === 'USD') {
      return `$${usdAmount.toFixed(2)} USD`;
    }
    const localVal = usdAmount * selectedCountry.exchangeRateVsUSD;
    return `${selectedCountry.currencySymbol} ${localVal.toLocaleString('es-LA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${selectedCountry.currencyCode}`;
  };

  const formatUSD = (usdAmount: number): string => {
    return `$${usdAmount.toFixed(2)} USD`;
  };

  const openRegistrationModal = (source = 'direct') => {
    trackEvent('watch_registration_video', { source });
    setIsRegistrationModalOpen(true);
  };

  const closeRegistrationModal = () => {
    setIsRegistrationModalOpen(false);
  };

  const openProductModal = (product: HGWProduct, tab: 'cliente' | 'socio' = 'cliente') => {
    trackEvent('click_product', { product_id: product.id, product_name: product.name, tab });
    setProductModalState({
      isOpen: true,
      product,
      initialTab: tab
    });
  };

  const closeProductModal = () => {
    setProductModalState(prev => ({ ...prev, isOpen: false }));
  };

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  return (
    <AppContext.Provider
      value={{
        currentPath,
        navigate,
        selectedCountry,
        setSelectedCountry,
        formatCurrency,
        formatUSD,
        isRegistrationModalOpen,
        openRegistrationModal,
        closeRegistrationModal,
        productModalState,
        openProductModal,
        closeProductModal,
        isSearchOpen,
        setIsSearchOpen,
        openSearch,
        closeSearch
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
