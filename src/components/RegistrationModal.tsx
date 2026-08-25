import React, { useState } from 'react';
import { 
  X, 
  Play, 
  UserCheck, 
  ExternalLink, 
  Copy, 
  Check, 
  ShieldCheck, 
  Sparkles,
  HelpCircle,
  Award
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SITE_CONFIG } from '../config/siteConfig';
import { trackEvent } from '../utils/analytics';

export const RegistrationModal: React.FC = () => {
  const { isRegistrationModalOpen, closeRegistrationModal } = useApp();
  const [copiedCode, setCopiedCode] = useState(false);

  if (!isRegistrationModalOpen) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(SITE_CONFIG.SPONSOR_CODE);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const handleGoToRegistration = () => {
    trackEvent('click_registration', { source: 'registration_modal' });
    window.open(SITE_CONFIG.REGISTRATION_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-300/30 flex items-center justify-center text-amber-300">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-300">
                Paso a Paso Oficial HGW
              </span>
              <h2 className="text-base sm:text-lg font-bold text-white leading-tight">
                Video Tutorial: Cómo Registrarse y Crear tu Código de Socio
              </h2>
            </div>
          </div>

          <button
            onClick={closeRegistrationModal}
            className="p-1.5 rounded-full text-emerald-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Cerrar ventana emergente"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          
          {/* Responsive Embedded Video Player */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 shadow-lg border border-slate-800">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={SITE_CONFIG.REGISTRATION_VIDEO_EMBED}
              title="Video Tutorial de Registro Oficial HGW"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          {/* Sponsor Verification Callout */}
          <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span className="text-xs font-bold text-emerald-950">
                  Patrocinador Oficial Autorizado
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                Al registrarte, asegúrate de que aparezca el usuario <strong className="text-emerald-800">{SITE_CONFIG.SPONSOR_CODE}</strong> ({SITE_CONFIG.SPONSOR_NAME}) para recibir soporte directo y acceso a la Academia Digital.
              </p>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start bg-white px-3 py-2 rounded-xl border border-emerald-200 shadow-xs">
              <span className="font-mono font-bold text-emerald-800 text-sm">
                {SITE_CONFIG.SPONSOR_CODE}
              </span>
              <button
                onClick={handleCopyCode}
                className="px-2.5 py-1 text-xs font-semibold bg-emerald-100 hover:bg-emerald-200 text-emerald-900 rounded-lg flex items-center gap-1 transition-colors cursor-pointer"
              >
                {copiedCode ? <Check className="w-3 h-3 text-emerald-700" /> : <Copy className="w-3 h-3 text-emerald-700" />}
                <span>{copiedCode ? '¡Copiado!' : 'Copiar'}</span>
              </button>
            </div>
          </div>

          {/* Step-by-Step Instructions */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="font-bold text-emerald-800 mb-1">Paso 1: Abrir Portal</div>
              <p className="text-slate-500 text-[11px]">Haz clic en el botón inferior "Crear mi Usuario / Código".</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="font-bold text-emerald-800 mb-1">Paso 2: Datos Personales</div>
              <p className="text-slate-500 text-[11px]">Selecciona tu país e ingresa tu nombre, documento y correo.</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="font-bold text-emerald-800 mb-1">Paso 3: Elige Paquete</div>
              <p className="text-slate-500 text-[11px]">Selecciona PreJunior (50 BV), Junior, Senior o Master.</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="font-bold text-emerald-800 mb-1">Paso 4: ¡Actívate!</div>
              <p className="text-slate-500 text-[11px]">Realiza tu pago local y recibe tus productos y oficina virtual.</p>
            </div>
          </div>

          {/* Primary Action Button: "Registrarse" */}
          <div className="pt-2">
            <button
              id="registration-modal-cta-btn"
              onClick={handleGoToRegistration}
              className="w-full py-4 px-6 bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-lg hover:shadow-xl flex items-center justify-center gap-3 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <UserCheck className="w-5 h-5 text-amber-300" />
              <span>Crear mi Usuario / Código Oficial en HGW</span>
              <ExternalLink className="w-4 h-4 text-emerald-200" />
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="p-3.5 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
          <span>¿Necesitas ayuda durante el registro?</span>
          <a
            href={SITE_CONFIG.WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 font-bold hover:underline flex items-center gap-1"
          >
            Asistencia inmediata por WhatsApp: {SITE_CONFIG.CONTACT_PHONE}
          </a>
        </div>
      </div>
    </div>
  );
};
