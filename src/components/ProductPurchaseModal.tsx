import React, { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  UserCheck, 
  Sparkles, 
  CheckCircle2, 
  MessageCircle, 
  MapPin, 
  ArrowRight, 
  Copy, 
  Check, 
  PlayCircle,
  ExternalLink,
  ShieldCheck,
  Award
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SITE_CONFIG, getWhatsAppProductUrl } from '../config/siteConfig';
import { trackEvent } from '../utils/analytics';

export const ProductPurchaseModal: React.FC = () => {
  const { 
    productModalState, 
    closeProductModal, 
    selectedCountry, 
    formatCurrency, 
    openRegistrationModal,
    navigate 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'cliente' | 'socio'>(
    productModalState.initialTab || 'cliente'
  );
  const [copiedCode, setCopiedCode] = useState(false);

  if (!productModalState.isOpen || !productModalState.product) {
    return null;
  }

  const product = productModalState.product;
  const savings = product.publicPrice - product.partnerPrice;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(SITE_CONFIG.SPONSOR_CODE);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const handleClientPurchase = () => {
    trackEvent('click_client_purchase', {
      product_id: product.id,
      product_name: product.name,
      country: selectedCountry.name,
      price: product.publicPrice
    });
    const url = getWhatsAppProductUrl(product.name, selectedCountry.name, false);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handlePartnerRegistration = () => {
    trackEvent('click_partner_registration', {
      product_id: product.id,
      product_name: product.name,
      bv: product.bv,
      country: selectedCountry.name
    });
    window.open(SITE_CONFIG.REGISTRATION_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white p-5 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 p-1 flex items-center justify-center shrink-0">
              <img 
                src={product.images[0]} 
                alt={product.name} 
                className="max-h-full max-w-full object-contain drop-shadow" 
              />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-300">
                Selecciona tu modalidad de compra
              </span>
              <h2 className="text-base sm:text-lg font-bold text-white leading-tight">
                {product.name}
              </h2>
              <p className="text-xs text-emerald-200">
                País: <strong className="text-white">{selectedCountry.flag} {selectedCountry.name}</strong> • BV: <strong className="text-amber-300 font-mono">{product.bv.toFixed(2)}</strong>
              </p>
            </div>
          </div>

          <button
            onClick={closeProductModal}
            className="p-1.5 rounded-full text-emerald-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="grid grid-cols-2 p-2 bg-slate-100 border-b border-slate-200">
          <button
            onClick={() => setActiveTab('cliente')}
            className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'cliente'
                ? 'bg-white text-emerald-900 shadow-xs border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShoppingBag className="w-4 h-4 text-emerald-600" />
            <span>Comprar como Cliente</span>
          </button>

          <button
            onClick={() => setActiveTab('socio')}
            className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'socio'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <UserCheck className="w-4 h-4 text-amber-300" />
            <div className="flex items-center gap-1">
              <span>Registrarme como Socio</span>
              <span className="text-[9px] bg-amber-400 text-slate-900 px-1 rounded font-extrabold uppercase">
                Ahorra 30%-60%
              </span>
            </div>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          
          {activeTab === 'cliente' ? (
            /* TAB 1: CLIENTE */
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="bg-emerald-50/70 rounded-2xl p-4 border border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                    Precio Público Oficial
                  </span>
                  <div className="text-2xl font-black text-slate-900">
                    ${product.publicPrice.toFixed(2)} USD
                  </div>
                  {selectedCountry.currencyCode !== 'USD' && (
                    <div className="text-xs text-emerald-800 font-mono font-medium">
                      ≈ {formatCurrency(product.publicPrice)}
                    </div>
                  )}
                </div>

                <div className="text-right sm:text-right w-full sm:w-auto text-xs text-slate-600 space-y-1">
                  <div className="flex items-center gap-1.5 justify-end text-emerald-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Producto 100% Original Sellado</span>
                  </div>
                  <div className="flex items-center gap-1.5 justify-end text-slate-600">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span>Envío a domicilio o retiro en oficina</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="font-bold text-slate-900">¿Cómo se procesa tu compra?</p>
                <ol className="list-decimal list-inside space-y-1 text-slate-600">
                  <li>Haz clic en el botón de WhatsApp abajo para conectar con nuestro equipo de despacho oficial.</li>
                  <li>Indícanos tu ciudad y dirección o si prefieres retirar en oficina autorizada de {selectedCountry.name}.</li>
                  <li>Realiza tu pago seguro por los canales locales ({selectedCountry.paymentMethods.join(', ')}).</li>
                  <li>Recibe tu guía de rastreo y tu pedido en 24 a 48 horas.</li>
                </ol>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  id="modal-whatsapp-client-btn"
                  onClick={handleClientPurchase}
                  className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                  <span>Comprar por WhatsApp ({selectedCountry.name})</span>
                </button>

                <button
                  onClick={() => {
                    closeProductModal();
                    navigate('/oficinas');
                  }}
                  className="py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <span>Ver Oficinas Locales</span>
                </button>
              </div>
            </div>
          ) : (
            /* TAB 2: SOCIO / DISTRIBUIDOR */
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="bg-gradient-to-r from-amber-50 to-emerald-50 rounded-2xl p-4 border border-amber-200/70 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
                    Precio Exclusivo de Socio
                  </span>
                  <div className="text-2xl font-black text-emerald-800">
                    ${product.partnerPrice.toFixed(2)} USD
                  </div>
                  <div className="text-xs text-slate-600">
                    Ahorras: <strong className="text-emerald-700">${savings.toFixed(2)} USD</strong> por unidad
                  </div>
                </div>

                <div className="text-right w-full sm:w-auto bg-white/80 p-2.5 rounded-xl border border-amber-200 text-xs">
                  <div className="text-slate-500 text-[10px]">Puntos de Negocio:</div>
                  <div className="font-mono font-extrabold text-slate-900 text-base">
                    {product.bv.toFixed(2)} BV
                  </div>
                  <div className="text-[10px] text-emerald-700 font-medium">Acumulable para ascensos</div>
                </div>
              </div>

              {/* Sponsor Code Validation Box */}
              <div className="p-3.5 bg-slate-900 text-white rounded-xl flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wide block">
                    Código Oficial de Patrocinador HGW:
                  </span>
                  <span className="font-mono text-base font-bold text-amber-300">
                    {SITE_CONFIG.SPONSOR_CODE}
                  </span>
                  <span className="text-[11px] text-slate-300 ml-2">
                    ({SITE_CONFIG.SPONSOR_NAME})
                  </span>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                  <span>{copiedCode ? '¡Copiado!' : 'Copiar Código'}</span>
                </button>
              </div>

              {/* Steps to Register */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold inline-flex items-center justify-center text-[10px] mb-1.5">1</span>
                  <p className="font-bold text-slate-900">Ingresa al Portal</p>
                  <p className="text-slate-500 text-[11px]">Accede con el enlace de registro oficial del patrocinador.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold inline-flex items-center justify-center text-[10px] mb-1.5">2</span>
                  <p className="font-bold text-slate-900">Crea tu Usuario</p>
                  <p className="text-slate-500 text-[11px]">Llena tus datos personales y genera tu código de socio.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold inline-flex items-center justify-center text-[10px] mb-1.5">3</span>
                  <p className="font-bold text-slate-900">Elige tu Paquete</p>
                  <p className="text-slate-500 text-[11px]">Actívate desde 50 BV en tus productos preferidos.</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  id="modal-official-register-btn"
                  onClick={handlePartnerRegistration}
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm rounded-xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <UserCheck className="w-5 h-5 text-amber-300" />
                  <span>Ir al Registro Oficial HGW</span>
                  <ExternalLink className="w-4 h-4 text-emerald-200" />
                </button>

                <button
                  onClick={() => {
                    closeProductModal();
                    openRegistrationModal('product_intent_modal');
                  }}
                  className="py-3 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-bold text-xs rounded-xl border border-emerald-200 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <PlayCircle className="w-4 h-4 text-emerald-700" />
                  <span>Ver Video Tutorial</span>
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Footer Disclaimer */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 text-center text-[11px] text-slate-500">
          ¿Dudas sobre compras o membresías? Escríbenos directamente al WhatsApp oficial: <strong className="text-emerald-700 font-mono">{SITE_CONFIG.CONTACT_PHONE}</strong>
        </div>
      </div>
    </div>
  );
};
