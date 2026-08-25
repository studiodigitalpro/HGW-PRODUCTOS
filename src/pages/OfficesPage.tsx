import React, { useState, useMemo, useEffect } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Clock, 
  Search, 
  Globe, 
  CheckCircle2, 
  MessageCircle, 
  ExternalLink,
  Navigation,
  ShieldCheck,
  UserCheck,
  ArrowRight,
  Info
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HGW_OFFICES, getAllOfficeCountries } from '../data/officesData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { updatePageSEO } from '../utils/seo';

export const OfficesPage: React.FC = () => {
  const { openRegistrationModal } = useApp();
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    updatePageSEO({
      title: 'Directorio de Oficinas y Sedes HGW | Direcciones Oficiales y Horarios',
      description: 'Encuentra las direcciones, horarios de atención, teléfonos y fotos de las oficinas oficiales de HGW en Panamá, Perú, Colombia, Bolivia, Ecuador, México, Guatemala, El Salvador, República Dominicana, Chile, Paraguay y España.',
      canonicalUrl: 'https://hgwlatam.com/oficinas'
    });
  }, []);

  const countriesWithOffices = getAllOfficeCountries();

  const filteredOffices = useMemo(() => {
    return HGW_OFFICES.filter((office) => {
      if (selectedCountryCode !== 'all' && office.countryCode !== selectedCountryCode) {
        return false;
      }
      if (searchTerm.trim() !== '') {
        const q = searchTerm.toLowerCase().trim();
        const matchesName = office.name.toLowerCase().includes(q);
        const matchesCity = office.city.toLowerCase().includes(q);
        const matchesAddr = office.address.toLowerCase().includes(q);
        const matchesCountry = office.countryName.toLowerCase().includes(q);
        if (!matchesName && !matchesCity && !matchesAddr && !matchesCountry) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCountryCode, searchTerm]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 pb-16">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: 'Directorio de Oficinas Oficiales HGW' }]} />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-10 shadow-md relative overflow-hidden">
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-emerald-300" />
            Directorio Oficial Hispanoamérica & España
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Oficinas y Centros de Distribución HGW
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
            Localiza las sedes autorizadas para retiro inmediato de productos, activaciones de socios y atención personalizada en América Latina y Europa.
          </p>
        </div>
      </div>

      {/* Important Notice Card for In-Store Purchasing */}
      <div className="bg-gradient-to-r from-amber-50 to-emerald-50 border border-amber-200/80 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold uppercase tracking-wider">
              <Info className="w-3.5 h-3.5 text-amber-700" />
              Requisito Indispensable de Compra en Sede
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              ¿Vas a comprar o retirar en una oficina oficial HGW?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Para realizar compras o retirar pedidos en cualquier sede oficial de HGW es requisito contar con un <strong className="text-slate-900">Código de Usuario Activo</strong>. Si aún no estás registrado, puedes crear tu cuenta gratis ahora mismo con el patrocinio oficial de <strong className="text-emerald-800">Yamilka Batista (Código: Yamilka507)</strong>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={openRegistrationModal}
              className="px-5 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <UserCheck className="w-4 h-4" />
              <span>Crear Cuenta de Usuario</span>
            </button>
            <a
              href="https://www.healthgreenworld.com/?userName=Yamilka507"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 bg-white border border-slate-200 hover:border-emerald-300 text-slate-800 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5"
            >
              <span>Registro Directo HGW</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          
          {/* Search */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por ciudad, dirección o país..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-900 placeholder-slate-400"
            />
          </div>

          <span className="text-xs text-slate-500 font-medium">
            Mostrando <strong className="text-slate-800 font-bold">{filteredOffices.length}</strong> sedes oficiales
          </span>
        </div>

        {/* Country Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs scrollbar-thin">
          <button
            onClick={() => setSelectedCountryCode('all')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-colors whitespace-nowrap cursor-pointer ${
              selectedCountryCode === 'all'
                ? 'bg-emerald-700 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Todos ({HGW_OFFICES.length})
          </button>
          {countriesWithOffices.map((c) => {
            const count = HGW_OFFICES.filter(o => o.countryCode === c.code).length;
            return (
              <button
                key={c.code}
                onClick={() => setSelectedCountryCode(c.code)}
                className={`px-3 py-1.5 rounded-xl font-bold transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCountryCode === c.code
                    ? 'bg-emerald-700 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {c.name} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Offices Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOffices.map((office) => {
          const primaryPhone = office.phones?.[0] || office.phone || '';
          const cleanPhone = primaryPhone.replace(/[^0-9]/g, '');

          return (
            <div
              key={office.id}
              className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Office Photo Header */}
                {office.image && (
                  <div className="h-48 bg-slate-100 overflow-hidden relative border-b border-slate-100 flex items-center justify-center">
                    <img 
                      src={office.image} 
                      alt={office.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {office.countryName}
                    </div>
                    {office.type && (
                      <div className="absolute top-3 right-3 bg-emerald-700/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {office.type}
                      </div>
                    )}
                  </div>
                )}

                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                      {office.city}
                    </span>
                    <h3 className="font-bold text-lg text-slate-900 mt-0.5 leading-snug">
                      {office.name}
                    </h3>
                  </div>

                  {/* Address */}
                  <div className="p-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-xs text-slate-700 flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium">{office.address}</span>
                  </div>

                  {/* Contact Details & Hours */}
                  <div className="space-y-2.5 text-xs text-slate-600 pt-1">
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Horario de Atención:</span>
                        <span className="text-slate-800 leading-relaxed font-medium">{office.openingHours}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 pt-1">
                      <Phone className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Líneas de Contacto:</span>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {(office.phones || [office.phone]).filter(Boolean).map((ph, idx) => (
                            <a
                              key={idx}
                              href={`tel:${ph?.replace(/[^0-9+]/g, '')}`}
                              className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono text-[11px] font-bold rounded-md transition-colors"
                            >
                              {ph}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${office.name} ${office.address}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-slate-600 hover:text-emerald-700 flex items-center gap-1.5 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Ver en Google Maps</span>
                  </a>

                  {cleanPhone ? (
                    <a
                      href={`https://wa.me/${cleanPhone}?text=Hola,%20deseo%20consultar%20informaci%C3%B3n%20y%20compras%20en%20la%20oficina%20HGW%20de%20${encodeURIComponent(office.city)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl shadow-2xs transition-colors flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  ) : (
                    <button
                      onClick={openRegistrationModal}
                      className="px-3.5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl shadow-2xs transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <UserCheck className="w-3.5 h-3.5" />
                      <span>Registrarse</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
