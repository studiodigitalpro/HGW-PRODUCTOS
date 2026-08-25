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
  Navigation
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HGW_OFFICES, getAllOfficeCountries } from '../data/officesData';
import { HGW_COUNTRIES } from '../data/countriesData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { updatePageSEO } from '../utils/seo';

export const OfficesPage: React.FC = () => {
  const { selectedCountry, setSelectedCountry } = useApp();
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    updatePageSEO({
      title: 'Oficinas y Sedes Autorizadas HGW en América | Direcciones y Teléfonos',
      description: 'Encuentra las oficinas oficiales y centros de retiro de HGW en Panamá, Perú, Colombia, México, Ecuador, Bolivia, Guatemala y USA.',
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
      <Breadcrumbs items={[{ name: 'Directorio de Oficinas y Sedes' }]} />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white rounded-3xl p-8 sm:p-10 shadow-md">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800 text-emerald-200 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-emerald-300" />
            Red de Atención Presencial
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Oficinas Corporativas y Puntos de Retiro HGW
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
            Localiza las sedes oficiales para retiro inmediato de pedidos, capacitaciones presenciales y trámites de membresía en las principales ciudades de América.
          </p>
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
              placeholder="Buscar por ciudad, dirección o nombre..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-900 placeholder-slate-400"
            />
          </div>

          <span className="text-xs text-slate-500 font-medium">
            {filteredOffices.length} sedes encontradas
          </span>
        </div>

        {/* Country Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <button
            onClick={() => setSelectedCountryCode('all')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-colors whitespace-nowrap cursor-pointer ${
              selectedCountryCode === 'all'
                ? 'bg-emerald-700 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Todos los Países ({HGW_OFFICES.length})
          </button>
          {countriesWithOffices.map((c) => (
            <button
              key={c.code}
              onClick={() => setSelectedCountryCode(c.code)}
              className={`px-3 py-1.5 rounded-xl font-bold transition-colors whitespace-nowrap cursor-pointer ${
                selectedCountryCode === c.code
                  ? 'bg-emerald-700 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* Offices Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOffices.map((office) => (
          <div
            key={office.id}
            className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    {office.countryName} • {office.city}
                  </span>
                  <h3 className="font-bold text-base text-slate-900 mt-0.5 leading-snug">
                    {office.name}
                  </h3>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-100 uppercase shrink-0">
                  {office.type}
                </span>
              </div>

              {/* Address */}
              <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-700 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{office.address}</span>
              </div>

              {/* Contact Details */}
              <div className="space-y-2 text-xs text-slate-600 pt-1">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Horario: <strong className="text-slate-800">{office.openingHours}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Teléfono: <strong className="text-slate-800 font-mono">{office.phone}</strong></span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
              <a
                href={office.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1"
              >
                <Navigation className="w-3.5 h-3.5 text-emerald-600" />
                <span>Ver en Mapa</span>
              </a>

              <a
                href={`https://wa.me/${office.phone.replace(/[^0-9]/g, '')}?text=Hola,%20deseo%20consultar%20retiro%20en%20la%20oficina%20de%20${encodeURIComponent(office.city)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-2xs transition-colors flex items-center gap-1"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Contactar</span>
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
