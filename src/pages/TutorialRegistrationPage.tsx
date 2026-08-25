import React, { useState, useEffect } from 'react';
import { 
  Play, 
  UserCheck, 
  ExternalLink, 
  ShieldCheck, 
  Copy, 
  Check, 
  Sparkles, 
  MessageCircle, 
  BookOpen, 
  HelpCircle,
  Award,
  Clock,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SITE_CONFIG } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { updatePageSEO } from '../utils/seo';
import { trackEvent } from '../utils/analytics';

export const TutorialRegistrationPage: React.FC = () => {
  const { navigate } = useApp();
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    updatePageSEO({
      title: 'Video Tutorial de Registro Oficial HGW | Cómo Afiliarse Paso a Paso',
      description: 'Aprende a registrarte como socio distribuidor de HGW con el video tutorial oficial. Código de patrocinador Yamilka507, selección de país y activación.',
      canonicalUrl: 'https://hgwlatam.com/tutorial-registro'
    });
    trackEvent('watch_registration_video', { source: 'tutorial_page' });
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(SITE_CONFIG.SPONSOR_CODE);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const handleGoToRegistration = () => {
    trackEvent('click_registration', { source: 'tutorial_page_cta' });
    window.open(SITE_CONFIG.REGISTRATION_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10 pb-16">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: 'Tutorial de Registro Oficial' }]} />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-md">
        <div className="max-w-3xl space-y-3">
          <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-1.5">
            <Award className="w-4 h-4" /> Capacitación & Onboarding Oficial
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            Video Tutorial: Cómo Registrarte en HGW Paso a Paso
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
            Sigue este tutorial guiado para crear tu cuenta en la plataforma corporativa internacional de Health Green World, validar tu patrocinador y seleccionar tus productos de activación.
          </p>
        </div>
      </div>

      {/* Main Video Showcase & Sponsor Validation Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Video Player (8 Cols) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-950 shadow-xl border border-slate-800">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={SITE_CONFIG.REGISTRATION_VIDEO_EMBED}
              title="Video Tutorial de Registro Oficial HGW"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 px-2 gap-2">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              Duración: Video Oficial Guiado
            </span>
            <span>Canal Oficial de Entrenamiento HGW</span>
          </div>
        </div>

        {/* Right: Sponsor Card & Fast CTA (4 Cols) */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-6">
          
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">
              Paso Clave para tu Registro
            </span>
            <h3 className="font-bold text-lg text-slate-900 leading-snug">
              Datos de tu Patrocinador Autorizado
            </h3>
            <p className="text-xs text-slate-600">
              Al llenar el formulario en la web de HGW, asegúrate de que estos datos coincidan para recibir todo el soporte de nuestro equipo:
            </p>
          </div>

          {/* Sponsor Box */}
          <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200/80 space-y-3">
            <div>
              <span className="text-[10px] font-bold text-slate-500 uppercase">
                Nombre del Patrocinador:
              </span>
              <div className="font-bold text-slate-900 text-sm">
                {SITE_CONFIG.SPONSOR_NAME}
              </div>
            </div>

            <div className="pt-2 border-t border-emerald-200/60 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase">
                  Código de Usuario:
                </span>
                <div className="font-mono font-black text-emerald-800 text-base">
                  {SITE_CONFIG.SPONSOR_CODE}
                </div>
              </div>

              <button
                onClick={handleCopyCode}
                className="px-3 py-1.5 bg-white hover:bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-lg border border-emerald-200 shadow-2xs flex items-center gap-1 transition-colors cursor-pointer"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5 text-emerald-700" />}
                <span>{copiedCode ? '¡Copiado!' : 'Copiar'}</span>
              </button>
            </div>
          </div>

          {/* Direct CTA */}
          <div className="space-y-2">
            <button
              id="tutorial-page-register-btn"
              onClick={handleGoToRegistration}
              className="w-full py-4 px-4 bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-extrabold text-sm rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <UserCheck className="w-5 h-5 text-amber-300" />
              <span>Ir al Registro Oficial HGW</span>
              <ExternalLink className="w-4 h-4 text-emerald-200" />
            </button>
            <p className="text-[10px] text-center text-slate-400">
              Se abrirá el portal oficial de Health Green World en una nueva pestaña.
            </p>
          </div>

          {/* WhatsApp Support */}
          <div className="pt-4 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-500 mb-2">¿Tienes alguna duda durante el llenado?</p>
            <a
              href={SITE_CONFIG.WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:underline"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chatear con Yamilka Batista ({SITE_CONFIG.CONTACT_PHONE})</span>
            </a>
          </div>

        </div>

      </div>

      {/* 4-STEP DETAILED TEXT GUIDE */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 space-y-6">
        <h2 className="text-xl font-bold text-slate-900">
          Guía Resumida en 4 Pasos para Completar tu Afiliación:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">
              1
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Acceso al Enlace</h3>
            <p className="text-slate-600 leading-relaxed">
              Haz clic en "Ir al Registro Oficial". El sistema cargará automáticamente a <strong>{SITE_CONFIG.SPONSOR_CODE}</strong> como tu invitador.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">
              2
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Selecciona tu País</h3>
            <p className="text-slate-600 leading-relaxed">
              Elige tu país de residencia para que el sistema asigne la moneda, precios y oficinas locales correspondientes.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">
              3
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Crea tu Usuario</h3>
            <p className="text-slate-600 leading-relaxed">
              Ingresa tus nombres completos, número de documento de identidad, correo electrónico y crea tu contraseña segura.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">
              4
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Elige tu Paquete</h3>
            <p className="text-slate-600 leading-relaxed">
              Selecciona tu paquete de membresía (PreJunior 50 BV, Junior, Senior o Master) y realiza el pago local.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
