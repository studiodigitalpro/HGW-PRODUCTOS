import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Globe, 
  UserCheck, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  PlayCircle, 
  MapPin, 
  PhoneCall, 
  HelpCircle,
  Package,
  Layers,
  BookOpen,
  Award
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SITE_CONFIG } from '../config/siteConfig';
import { HGW_COUNTRIES } from '../data/countriesData';

export const Header: React.FC = () => {
  const { 
    currentPath, 
    navigate, 
    selectedCountry, 
    setSelectedCountry, 
    openRegistrationModal, 
    openSearch 
  } = useApp();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', path: '/inicio' },
    { label: 'Productos', path: '/productos' },
    { label: 'Categorías', path: '/categorias' },
    { label: 'Membresías', path: '/membresias' },
    { label: 'Cómo Funciona', path: '/como-funciona' },
    { label: 'Tutorial Registro', path: '/tutorial-registro' },
    { label: 'Países', path: '/paises' },
    { label: 'Oficinas', path: '/oficinas' },
    { label: 'Envíos', path: '/envios' },
    { label: 'Pagos', path: '/pagos' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contacto', path: '/contacto' }
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs">
      {/* Top Notification & Country Ribbon */}
      <div className="bg-emerald-900 text-emerald-50 text-xs px-4 py-2">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-700 text-emerald-100 tracking-wide uppercase">
              Latinoamérica & USA
            </span>
            <span className="hidden sm:inline text-emerald-200">
              Patrocinador Oficial: <strong className="text-white font-medium">{SITE_CONFIG.SPONSOR_NAME}</strong> (Código: <span className="text-amber-300 font-mono font-bold">{SITE_CONFIG.SPONSOR_CODE}</span>)
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            {/* Country Selector Dropdown */}
            <div className="relative">
              <button
                id="country-selector-button"
                onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                className="flex items-center gap-1.5 bg-emerald-800/80 hover:bg-emerald-800 px-2.5 py-1 rounded-md text-white transition-colors cursor-pointer"
                title="Cambiar país y moneda"
              >
                <span className="text-sm">{selectedCountry.flag}</span>
                <span className="font-medium text-xs">{selectedCountry.name}</span>
                <span className="text-[10px] text-emerald-300 font-mono">({selectedCountry.currencyCode})</span>
                <ChevronDown className="w-3 h-3 text-emerald-300" />
              </button>

              {isCountryDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40"
                    onClick={() => setIsCountryDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-64 max-h-80 overflow-y-auto bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 text-slate-800">
                    <div className="px-3 py-1.5 border-b border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Selecciona tu País
                    </div>
                    {HGW_COUNTRIES.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => {
                          setSelectedCountry(c);
                          setIsCountryDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 text-left text-xs hover:bg-emerald-50 transition-colors cursor-pointer ${
                          selectedCountry.id === c.id ? 'bg-emerald-50 text-emerald-800 font-bold' : 'text-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-base">{c.flag}</span>
                          <span>{c.name}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono">{c.currencyCode}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <a
              href={SITE_CONFIG.WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-200 hover:text-emerald-100 transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-emerald-400" />
              <span className="hidden md:inline font-mono">{SITE_CONFIG.CONTACT_PHONE}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('/inicio')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-700 to-teal-500 flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
              H
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {SITE_CONFIG.LOGO_TEXT}
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold uppercase tracking-wider">
                  Latam
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium tracking-wide">
                {SITE_CONFIG.LOGO_SUBTEXT}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.slice(0, 8).map((link) => {
              const isActive = currentPath === link.path || (link.path !== '/inicio' && currentPath.startsWith(link.path));
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                    isActive
                      ? 'bg-emerald-100 text-emerald-900 shadow-xs'
                      : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center gap-2">
            {/* Global Search Button */}
            <button
              id="header-search-btn"
              onClick={openSearch}
              className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-500 bg-slate-100 hover:bg-slate-200/80 rounded-lg border border-slate-200/80 transition-colors cursor-pointer"
              title="Buscar productos, oficinas, países..."
            >
              <Search className="w-3.5 h-3.5 text-slate-600" />
              <span className="hidden md:inline">Buscar...</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[9px] font-mono bg-white border border-slate-200 rounded text-slate-400">
                ⌘K
              </kbd>
            </button>

            {/* Watch Tutorial Button */}
            <button
              id="watch-tutorial-header-btn"
              onClick={() => openRegistrationModal('header')}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-colors cursor-pointer"
            >
              <PlayCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Ver Tutorial</span>
            </button>

            {/* Become Partner CTA Button */}
            <button
              id="become-partner-header-btn"
              onClick={() => handleNavClick('/membresias')}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <Award className="w-3.5 h-3.5 text-amber-300" />
              <span>Ser Socio HGW</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 text-slate-600 hover:text-emerald-700 rounded-lg hover:bg-slate-100"
              aria-label="Abrir Menú"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="p-3 bg-emerald-50/80 rounded-xl border border-emerald-100 mb-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-900">País Actual:</span>
              <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                {selectedCountry.flag} {selectedCountry.name} ({selectedCountry.currencyCode})
              </span>
            </div>
            <button
              onClick={() => {
                handleNavClick('/paises');
                setIsMobileMenuOpen(false);
              }}
              className="mt-2 w-full py-1.5 text-[11px] font-bold text-emerald-800 bg-white rounded border border-emerald-200 text-center"
            >
              Cambiar País / Ver Disponibilidad
            </button>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`px-3 py-2 rounded-lg text-left text-xs font-medium transition-colors ${
                  currentPath === link.path ? 'bg-emerald-600 text-white font-bold' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                openRegistrationModal('mobile_menu');
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-emerald-100 text-emerald-900 font-bold rounded-lg text-xs"
            >
              <PlayCircle className="w-4 h-4 text-emerald-700" />
              Ver Video Tutorial de Registro
            </button>

            <button
              onClick={() => {
                handleNavClick('/tutorial-registro');
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-lg text-xs shadow-sm"
            >
              <UserCheck className="w-4 h-4" />
              Registrarme Oficialmente en HGW
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
