import React, { useState, useMemo, useEffect } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Clock, 
  Search, 
  CheckCircle2, 
  ShieldCheck, 
  UserCheck, 
  ArrowRight, 
  Info, 
  Copy, 
  Check, 
  X, 
  Layers, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HGW_OFFICES, getAllOfficeCountries } from '../data/officesData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { updatePageSEO } from '../utils/seo';
import { HGWOffice } from '../types';
import { SITE_CONFIG } from '../config/siteConfig';

export const OfficesPage: React.FC = () => {
  const { openRegistrationModal } = useApp();
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedOfficeModal, setSelectedOfficeModal] = useState<HGWOffice | null>(null);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  useEffect(() => {
    updatePageSEO({
      title: 'Directorio de Oficinas y Sedes HGW | Direcciones Oficiales y Horarios',
      description: 'Encuentra las direcciones, horarios de atención, teléfonos y sedes de HGW en Panamá, Perú, Colombia, Bolivia, Ecuador, México, Guatemala, El Salvador, República Dominicana, Chile, Paraguay y España.',
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

  const handleCopyText = (text: string, type: 'phone' | 'address') => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      if (type === 'phone') {
        setCopiedPhone(text);
        setTimeout(() => setCopiedPhone(null), 2500);
      } else {
        setCopiedAddress(text);
        setTimeout(() => setCopiedAddress(null), 2500);
      }
    }
  };

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
            Directorio oficial de sedes habilitadas para <strong>atención al cliente registrado, facturación, compras, pedidos y despachos</strong>. En las oficinas físicas <strong>NO se realizan registros de nuevos socios</strong>; el registro debe gestionarse previamente en línea.
          </p>
        </div>
      </div>

      {/* Important Notice Card for In-Store Purchasing */}
      <div className="bg-gradient-to-r from-amber-50 via-emerald-50 to-teal-50 border border-amber-200/90 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold uppercase tracking-wider">
              <Info className="w-3.5 h-3.5 text-amber-700" />
              Requisito Indispensable para Atención en Oficinas
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              Al escribir o acudir a las Oficinas, tienes que dar tu número de usuario
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Las oficinas oficiales HGW atienden compras, facturación y retiros. <strong>Si ya tienes tu número de usuario</strong>, debes presentarlo en ventanilla o contactar a tu patrocinador para cualquier trámite.
            </p>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium bg-white/80 p-3 rounded-xl border border-amber-200">
              💡 <strong>¿Aún no tienes tu número de usuario?</strong> Puedes escribirme directamente por WhatsApp y con mucho gusto te enseño paso a paso cómo crearlo gratis en línea bajo el patrocinio oficial de <strong className="text-emerald-800">{SITE_CONFIG.SPONSOR_NAME} (Código: {SITE_CONFIG.SPONSOR_CODE})</strong>.
            </p>
            <div className="pt-1 flex flex-wrap gap-4 text-xs text-slate-600">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Los métodos de pagos y envíos varían según país.
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                Envíos entre 3 a 6 días hábiles según volumen y distancia.
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
            <a
              href={`https://wa.me/${SITE_CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, deseo obtener mi número de usuario de socio HGW para comprar en oficinas y online. ¿Me enseñas cómo crearlo?')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <UserCheck className="w-4 h-4" />
              <span>Escríbeme para Crear tu Usuario</span>
            </a>
            <button
              onClick={() => openRegistrationModal('offices_notice')}
              className="px-4 py-3 bg-white border border-slate-200 hover:border-emerald-300 text-slate-800 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Ver Tutorial de Registro</span>
            </button>
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
          const allPhones = (office.phones || [office.phone]).filter(Boolean) as string[];

          return (
            <div
              key={office.id}
              onClick={() => setSelectedOfficeModal(office)}
              className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
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
                    <h3 className="font-bold text-lg text-slate-900 mt-0.5 leading-snug group-hover:text-emerald-800 transition-colors">
                      {office.name}
                    </h3>
                  </div>

                  {/* Address */}
                  <div className="p-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-xs text-slate-700 flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium line-clamp-2">{office.address}</span>
                  </div>

                  {/* Contact Details & Hours */}
                  <div className="space-y-2.5 text-xs text-slate-600 pt-1">
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Horario de Atención:</span>
                        <span className="text-slate-800 leading-relaxed font-medium line-clamp-2">{office.openingHours}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 pt-1">
                      <Phone className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <span className="text-slate-400 block text-[10px] uppercase font-bold mb-1">Teléfonos de Contacto:</span>
                        <div className="flex flex-wrap gap-1.5" onClick={(e) => e.stopPropagation()}>
                          {allPhones.map((ph, idx) => {
                            const isCopied = copiedPhone === ph;
                            return (
                              <button
                                key={idx}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleCopyText(ph, 'phone');
                                }}
                                className={`px-2.5 py-1 text-xs font-mono font-bold rounded-lg border transition-all flex items-center gap-1.5 cursor-pointer ${
                                  isCopied 
                                    ? 'bg-emerald-600 text-white border-emerald-600' 
                                    : 'bg-slate-100 hover:bg-emerald-50 text-slate-800 hover:text-emerald-800 border-slate-200'
                                }`}
                                title="Copiar número al portapapeles"
                              >
                                {isCopied ? <Check className="w-3 h-3 text-white" /> : <Copy className="w-3 h-3 text-slate-500" />}
                                <span>{ph}</span>
                                <span className="text-[10px] font-normal opacity-80">{isCopied ? '¡Copiado!' : 'Copiar'}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedOfficeModal(office)}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Ver Servicios y Horarios</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openRegistrationModal('office_card');
                    }}
                    className="px-3.5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl shadow-2xs transition-colors flex items-center gap-1.5 cursor-pointer"
                    title="Crear cuenta online antes de acudir"
                  >
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Registro Online</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Office Detail Pop Up Modal */}
      {selectedOfficeModal && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedOfficeModal(null)}
        >
          <div 
            className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white p-5 sm:p-6 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/20 text-white uppercase tracking-wider">
                    {selectedOfficeModal.countryName}
                  </span>
                  {selectedOfficeModal.type && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-slate-950 uppercase tracking-wider">
                      {selectedOfficeModal.type}
                    </span>
                  )}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                  {selectedOfficeModal.name}
                </h2>
                <p className="text-xs text-emerald-200 mt-0.5">
                  Ciudad: <strong className="text-white">{selectedOfficeModal.city}</strong>
                </p>
              </div>

              <button
                onClick={() => setSelectedOfficeModal(null)}
                className="p-1.5 rounded-full text-emerald-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-6">
              
              {/* Photo Preview if available */}
              {selectedOfficeModal.image && (
                <div className="h-56 sm:h-64 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                  <img 
                    src={selectedOfficeModal.image} 
                    alt={selectedOfficeModal.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              )}

              {/* Address with Copy Button */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    Dirección Física Oficial
                  </span>
                  <button
                    onClick={() => handleCopyText(selectedOfficeModal.address, 'address')}
                    className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    {copiedAddress === selectedOfficeModal.address ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">¡Dirección Copiada!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-slate-400" />
                        <span>Copiar Dirección</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                  {selectedOfficeModal.address}
                </p>
              </div>

              {/* Horarios & Teléfonos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Horario */}
                <div className="p-4 bg-emerald-50/60 border border-emerald-100 rounded-2xl space-y-2">
                  <div className="flex items-center gap-1.5 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span>Horarios de Atención</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {selectedOfficeModal.openingHours}
                  </p>
                </div>

                {/* Teléfonos con Portapapeles */}
                <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                  <div className="flex items-center gap-1.5 text-slate-700 text-xs font-bold uppercase tracking-wider">
                    <Phone className="w-4 h-4 text-emerald-600" />
                    <span>Líneas Telefónicas</span>
                  </div>
                  <div className="space-y-1.5">
                    {(selectedOfficeModal.phones || [selectedOfficeModal.phone]).filter(Boolean).map((ph, idx) => {
                      const isCopied = copiedPhone === ph;
                      return (
                        <div key={idx} className="flex items-center justify-between bg-white p-2 rounded-xl border border-slate-200">
                          <span className="font-mono text-xs font-bold text-slate-800">{ph}</span>
                          <button
                            onClick={() => handleCopyText(ph!, 'phone')}
                            className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                              isCopied 
                                ? 'bg-emerald-600 text-white' 
                                : 'bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-emerald-800'
                            }`}
                          >
                            {isCopied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3 text-slate-400" />}
                            <span>{isCopied ? '¡Copiado!' : 'Copiar'}</span>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Servicios disponibles en Sede */}
              {selectedOfficeModal.services && selectedOfficeModal.services.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-emerald-600" />
                    Servicios Disponibles en Esta Sede:
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {selectedOfficeModal.services.map((svc, idx) => (
                      <div key={idx} className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="font-medium">{svc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Requirement reminder */}
              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 space-y-1.5">
                <p className="font-bold flex items-center gap-1.5 text-amber-900">
                  <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
                  Aviso: En las oficinas NO se registran nuevos socios
                </p>
                <p className="text-amber-800 leading-relaxed">
                  Las sedes físicas atienden exclusivamente a socios y clientes ya registrados para <strong>facturación, compras, pedidos y despachos</strong>. Al presentarte en caja, indica tu código de usuario registrado o el código de patrocinio oficial <strong className="font-mono bg-white px-1.5 py-0.5 rounded border border-amber-300">{SITE_CONFIG.SPONSOR_CODE}</strong> ({SITE_CONFIG.SPONSOR_NAME}).
                </p>
              </div>

            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => setSelectedOfficeModal(null)}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-slate-600 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors cursor-pointer"
              >
                Cerrar
              </button>

              <button
                onClick={() => {
                  setSelectedOfficeModal(null);
                  openRegistrationModal('office_modal_cta');
                }}
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <UserCheck className="w-4 h-4" />
                <span>Crear Cuenta Online Previa</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
