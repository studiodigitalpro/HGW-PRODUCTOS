import React, { useState, useEffect } from 'react';
import { 
  UserCheck, 
  ExternalLink, 
  ShieldCheck, 
  Copy, 
  Check, 
  Sparkles, 
  MessageCircle, 
  PlayCircle, 
  Globe, 
  Award,
  CheckCircle2
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SITE_CONFIG } from '../config/siteConfig';
import { HGW_COUNTRIES } from '../data/countriesData';
import { MEMBERSHIP_TIERS } from '../data/membershipsData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { updatePageSEO } from '../utils/seo';
import { trackEvent } from '../utils/analytics';

export const RegistrationPage: React.FC = () => {
  const { selectedCountry, setSelectedCountry, openRegistrationModal } = useApp();
  const [selectedTier, setSelectedTier] = useState<string>('master');
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    updatePageSEO({
      title: 'Registro de Socios y Distribuidores HGW | Código Patrocinador Oficial',
      description: 'Regístrate oficialmente como socio de HGW en América Latina. Valida tu código de patrocinador Yamilka507 y accede a descuentos de hasta 60%.',
      canonicalUrl: 'https://hgwlatam.com/registro'
    });
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(SITE_CONFIG.SPONSOR_CODE);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const handleDirectRegistration = () => {
    trackEvent('click_registration', { source: 'registration_gateway_page', tier: selectedTier, country: selectedCountry.name });
    window.open(SITE_CONFIG.REGISTRATION_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10 pb-16">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: 'Portal de Registro Oficial' }]} />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-900 text-white rounded-3xl p-8 sm:p-10 shadow-md">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800 text-emerald-200 text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-amber-300" />
            Acceso Directo al Sistema Corporativo HGW
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            Crea tu Código Internacional de Socio HGW
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
            Completa tu afiliación con el respaldo de <strong>{SITE_CONFIG.SPONSOR_NAME}</strong> (Código: <strong className="text-amber-300 font-mono">{SITE_CONFIG.SPONSOR_CODE}</strong>) para recibir soporte personalizado, capacitaciones y acceso directo a la Academia HGW.
          </p>
        </div>
      </div>

      {/* Registration Wizard Setup */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Step Configurator (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Step 1: Confirm Country */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center text-xs">
                1
              </span>
              <h2 className="text-base font-bold text-slate-900">
                Confirma tu País de Residencia
              </h2>
            </div>
            <p className="text-xs text-slate-500">
              Selecciona el país desde donde realizarás tu registro para recibir tus productos con envíos locales y pagar en moneda local:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {HGW_COUNTRIES.slice(0, 8).map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCountry(c)}
                  className={`p-3 rounded-xl border text-left text-xs transition-all flex items-center gap-2 cursor-pointer ${
                    selectedCountry.id === c.id
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-500/20'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50'
                  }`}
                >
                  <span className="text-lg">{c.flag}</span>
                  <div className="truncate">
                    <div>{c.name}</div>
                    <div className="text-[10px] text-slate-400 font-mono">{c.currencyCode}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Choose Intended Tier */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center text-xs">
                2
              </span>
              <h2 className="text-base font-bold text-slate-900">
                Selecciona tu Nivel de Membresía Sugerido
              </h2>
            </div>
            <p className="text-xs text-slate-500">
              Recuerda que dentro del portal de HGW podrás elegir libremente los productos específicos que compondrán tu paquete:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {MEMBERSHIP_TIERS.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setSelectedTier(tier.id)}
                  className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                    selectedTier === tier.id
                      ? 'border-emerald-600 bg-emerald-50/60 ring-2 ring-emerald-500/20 shadow-xs'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-slate-900">{tier.name}</span>
                      <span className="font-mono font-bold text-xs text-emerald-800">{tier.bvRequirement} BV</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">{tier.description}</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Recompra:</span>
                    <span className="font-bold text-emerald-700">{tier.repurchaseDiscount}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Fast Registration Verification Box */}
          <div className="bg-emerald-950 text-white rounded-3xl p-6 space-y-4 shadow-md">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-amber-400 text-slate-950 font-bold flex items-center justify-center text-xs">
                3
              </span>
              <h2 className="text-base font-bold text-white">
                Verifica tu Patrocinador y Accede al Portal
              </h2>
            </div>

            <div className="bg-white/10 rounded-2xl p-4 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] text-emerald-300 uppercase font-bold tracking-wider">
                  Patrocinador Autorizado HGW:
                </span>
                <div className="text-lg font-bold text-white">
                  {SITE_CONFIG.SPONSOR_NAME}
                </div>
                <div className="text-xs text-emerald-200 font-mono">
                  Código: <strong className="text-amber-300 font-bold">{SITE_CONFIG.SPONSOR_CODE}</strong>
                </div>
              </div>

              <button
                onClick={handleCopyCode}
                className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-xs font-semibold rounded-xl border border-white/20 flex items-center gap-2 transition-colors cursor-pointer"
              >
                {copiedCode ? <Check className="w-4 h-4 text-amber-300" /> : <Copy className="w-4 h-4 text-emerald-300" />}
                <span>{copiedCode ? '¡Código Copiado!' : 'Copiar Código'}</span>
              </button>
            </div>

            <button
              onClick={handleDirectRegistration}
              className="w-full py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-sm sm:text-base rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <UserCheck className="w-5 h-5" />
              <span>Continuar al Registro Oficial de HGW</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Right: Benefits & Video Teaser (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
            <h3 className="font-bold text-sm text-slate-900">
              ¿Por qué Afiliarte en Nuestro Equipo?
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Asesoría personalizada directa con Yamilka Batista.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Acceso 24/7 a la Academia Digital (academiahgw.online).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Estrategias de comercialización y prospección en redes sociales.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Material gráfico oficial y fichas técnicas de productos.</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 space-y-4 text-center">
            <PlayCircle className="w-10 h-10 text-emerald-600 mx-auto" />
            <h3 className="font-bold text-sm text-slate-900">¿Primera vez registrándote?</h3>
            <p className="text-xs text-slate-500">
              Te recomendamos ver el video tutorial de 3 minutos antes de comenzar para evitar errores en tus datos.
            </p>
            <button
              onClick={() => openRegistrationModal('registration_page_sidebar')}
              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              Ver Video Tutorial
            </button>
          </div>

          <div className="text-center p-4 bg-white rounded-2xl border border-slate-200 text-xs text-slate-600">
            <p className="font-semibold text-slate-900 mb-1">¿Dudas o soporte de afiliación?</p>
            <a
              href={SITE_CONFIG.WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 font-bold hover:underline flex items-center justify-center gap-1"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Directo ({SITE_CONFIG.CONTACT_PHONE})
            </a>
          </div>

        </div>

      </div>

    </div>
  );
};
