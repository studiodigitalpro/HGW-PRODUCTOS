import React, { useState, useEffect, useMemo } from 'react';
import { 
  Globe, 
  Search, 
  MapPin, 
  Truck, 
  CreditCard, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  ShoppingBag, 
  UserCheck, 
  Sparkles,
  Phone,
  Clock
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HGW_COUNTRIES, getCountryBySlug } from '../data/countriesData';
import { getOfficesByCountry } from '../data/officesData';
import { getProductsForCountry } from '../data/productsData';
import { ProductCard } from '../components/ProductCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { updatePageSEO } from '../utils/seo';

interface CountriesPageProps {
  countrySlug?: string;
}

export const CountriesPage: React.FC<CountriesPageProps> = ({ countrySlug }) => {
  const { navigate, setSelectedCountry, openRegistrationModal } = useApp();
  const [searchTerm, setSearchTerm] = useState('');

  const activeCountry = countrySlug ? getCountryBySlug(countrySlug) : undefined;

  useEffect(() => {
    if (activeCountry) {
      updatePageSEO({
        title: `HGW en ${activeCountry.name} (${activeCountry.flag}) | Oficinas, Envíos y Productos`,
        description: `Conoce la disponibilidad de productos HGW en ${activeCountry.name}. Oficinas autorizadas, envíos por ${activeCountry.shippingCourier} y pagos por ${activeCountry.paymentMethods.join(', ')}.`,
        canonicalUrl: `https://hgwlatam.com/paises/${activeCountry.slug}`
      });
      setSelectedCountry(activeCountry);
    } else {
      updatePageSEO({
        title: 'Red de Países HGW en América | Disponibilidad, Oficinas y Envíos',
        description: 'Consulta los países donde HGW opera oficialmente: Panamá, Perú, Colombia, México, Bolivia, Ecuador, Guatemala, USA y más.',
        canonicalUrl: 'https://hgwlatam.com/paises'
      });
    }
  }, [activeCountry]);

  const filteredCountries = useMemo(() => {
    if (!searchTerm.trim()) return HGW_COUNTRIES;
    const q = searchTerm.toLowerCase().trim();
    return HGW_COUNTRIES.filter(c => 
      c.name.toLowerCase().includes(q) || 
      c.currencyCode.toLowerCase().includes(q) ||
      c.shippingCourier.toLowerCase().includes(q)
    );
  }, [searchTerm]);

  // If viewing a single country:
  const countryOffices = activeCountry ? getOfficesByCountry(activeCountry.id) : [];
  const countryProducts = activeCountry ? getProductsForCountry(activeCountry.id) : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 pb-16">
      
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={
          activeCountry
            ? [{ name: 'Países', url: '/paises' }, { name: activeCountry.name }]
            : [{ name: 'Red de Países en América' }]
        }
      />

      {/* SINGLE COUNTRY VIEW */}
      {activeCountry ? (
        <div className="space-y-10">
          
          {/* Country Hero Banner */}
          <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-teal-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-bold uppercase tracking-wider">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>Mercado HGW Oficial</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="text-4xl sm:text-5xl">{activeCountry.flag}</span>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
                  HGW en {activeCountry.name}
                </h1>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                {activeCountry.description}
              </p>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-2xl p-5 backdrop-blur-xs text-xs space-y-2 w-full md:w-72 shrink-0">
              <div className="flex items-center justify-between text-slate-300">
                <span>Estado:</span>
                <span className="font-bold text-emerald-300">{activeCountry.status}</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>Moneda Local:</span>
                <span className="font-bold text-white font-mono">{activeCountry.currencyName} ({activeCountry.currencyCode})</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>Paquetería:</span>
                <span className="font-bold text-white">{activeCountry.shippingCourier}</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>Tiempo de Entrega:</span>
                <span className="font-bold text-white">{activeCountry.shippingTime}</span>
              </div>
            </div>
          </div>

          {/* Quick Action CTAs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => navigate('/productos')}
              className="p-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl shadow-sm transition-all flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6" />
                <div className="text-left">
                  <div className="font-bold text-sm">Comprar Productos en {activeCountry.name}</div>
                  <div className="text-xs text-emerald-100">{countryProducts.length} productos verificados disponibles</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => openRegistrationModal(`country_page_${activeCountry.id}`)}
              className="p-5 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl border border-slate-700 transition-all flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <UserCheck className="w-6 h-6 text-amber-300" />
                <div className="text-left">
                  <div className="font-bold text-sm">Registrarme como Socio en {activeCountry.name}</div>
                  <div className="text-xs text-slate-400">Descuento de hasta 60% y plan de 8 bonos</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Logistics & Payment Summary for Country */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Logistics */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <Truck className="w-5 h-5 text-emerald-600" />
                <span>Envíos y Despachos en {activeCountry.name}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Operamos mediante alianzas con <strong>{activeCountry.shippingCourier}</strong> para entregas directas a domicilio. Tiempo estimado habitual: <strong>{activeCountry.shippingTime}</strong> ({activeCountry.shippingNotes}).
              </p>
            </div>

            {/* Payments */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <CreditCard className="w-5 h-5 text-emerald-600" />
                <span>Métodos de Pago Aceptados</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {activeCountry.paymentMethods.map((pm, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800">
                    {pm}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Offices in this Country */}
          {countryOffices.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-emerald-700" />
                  <span>Oficinas y Centros de Atención en {activeCountry.name}</span>
                </h2>
                <button
                  onClick={() => navigate('/oficinas')}
                  className="text-xs font-bold text-emerald-700 hover:underline"
                >
                  Ver directorio completo
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {countryOffices.map((office) => (
                  <div key={office.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs space-y-3 flex flex-col justify-between">
                    <div>
                      {office.image && (
                        <div className="h-36 bg-slate-100 overflow-hidden relative border-b border-slate-100">
                          <img 
                            src={office.image} 
                            alt={office.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                            loading="lazy"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                          />
                        </div>
                      )}
                      <div className="p-5 pb-0 space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-sm text-slate-900">{office.name}</h3>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 uppercase">
                            {office.type || (office.isOfficial ? 'Sede Oficial' : 'Punto Autorizado')}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 flex items-start gap-1.5">
                          <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{office.address}</span>
                        </p>
                      </div>
                    </div>
                    <div className="p-5 pt-0">
                      <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
                        <span className="flex items-center gap-1 text-[11px]">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {office.openingHours}
                        </span>
                        <span className="font-mono text-emerald-700 font-bold text-[11px]">{office.phones?.[0] || office.phone}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Available Products in this Country */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">
              Productos Disponibles para Entrega en {activeCountry.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {countryProducts.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

        </div>
      ) : (
        /* ALL COUNTRIES LIST VIEW */
        <div className="space-y-8">
          
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white rounded-3xl p-8 sm:p-10 shadow-md">
            <div className="max-w-3xl space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-300">
                Cobertura Continental HGW
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                Presencia y Distribución Oficial en América
              </h1>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                Selecciona tu país para consultar oficinas autorizadas, métodos de pago bancarios locales, couriers de despacho y la lista de productos disponibles.
              </p>
            </div>
          </div>

          {/* Search Box */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
            <Search className="w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar país por nombre, moneda o courier..."
              className="w-full text-xs font-medium text-slate-900 placeholder-slate-400 outline-none"
            />
          </div>

          {/* Countries Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCountries.map((country) => (
              <div
                key={country.id}
                onClick={() => navigate(`/paises/${country.slug}`)}
                className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-md hover:border-emerald-400 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{country.flag}</span>
                      <div>
                        <h3 className="font-bold text-base text-slate-900 group-hover:text-emerald-800 transition-colors">
                          {country.name}
                        </h3>
                        <span className="text-[10px] font-mono text-slate-400 font-semibold">
                          {country.currencyName} ({country.currencyCode})
                        </span>
                      </div>
                    </div>

                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-100">
                      {country.status}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {country.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Envíos por:</span>
                      <span className="font-bold text-slate-800">{country.shippingCourier}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Tiempo de Entrega:</span>
                      <span className="font-semibold text-slate-700">{country.shippingTime}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                  <span>Ver Oficinas y Productos</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

    </div>
  );
};
