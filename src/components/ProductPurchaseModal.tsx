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
  Award,
  Info,
  Layers,
  Heart,
  Tag,
  AlertCircle
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

  const [activeTab, setActiveTab] = useState<'cliente' | 'socio' | 'detalles'>(
    productModalState.initialTab === 'socio' ? 'socio' : 'cliente'
  );
  const [selectedImageIdx, setSelectedImageIdx] = useState<number>(0);
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!productModalState.isOpen || !productModalState.product) {
    return null;
  }

  const product = productModalState.product;
  const savings = product.publicPrice - product.partnerPrice;
  const savingsPercent = Math.round((savings / product.publicPrice) * 100);

  const handleCopyCode = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(SITE_CONFIG.SPONSOR_CODE);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2500);
    }
  };

  const handleCopyProductLink = () => {
    if (navigator.clipboard) {
      const url = `${window.location.origin}/productos/${product.slug}`;
      navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
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
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={closeProductModal}
    >
      <div 
        className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Ribbon */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white p-4 sm:p-5 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 p-1 flex items-center justify-center shrink-0">
              <img 
                src={product.images[selectedImageIdx] || product.images[0]} 
                alt={product.name} 
                className="max-h-full max-w-full object-contain drop-shadow"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-[10px] uppercase font-bold tracking-widest bg-emerald-700/80 px-2 py-0.5 rounded text-emerald-200 border border-emerald-600/60">
                  {product.category}
                </span>
                <span className="text-[10px] uppercase font-bold text-amber-300 font-mono">
                  ★ {product.bv.toFixed(2)} BV
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white leading-tight">
                {product.name}
              </h2>
              <p className="text-xs text-emerald-200">
                Presentación: <strong className="text-white">{product.presentation}</strong> • Materia Prima: <strong className="text-emerald-100">{product.rawMaterial}</strong>
              </p>
            </div>
          </div>

          <button
            onClick={closeProductModal}
            className="p-1.5 rounded-full text-emerald-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Currency Observation Warning Banner */}
        <div className="bg-amber-50 border-b border-amber-200/80 px-4 py-2 flex items-center gap-2 text-xs text-amber-900">
          <Info className="w-4 h-4 text-amber-700 shrink-0" />
          <p className="leading-tight">
            <strong>Observación de Precios:</strong> Los precios están expresados en <strong>Dólares Americanos (USD)</strong> y pueden variar según cada país, aranceles y la tasa de cambio de la moneda local.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-3 p-1.5 bg-slate-100 border-b border-slate-200 text-xs font-bold">
          <button
            onClick={() => setActiveTab('cliente')}
            className={`py-2.5 px-2 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'cliente'
                ? 'bg-white text-emerald-900 shadow-xs border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5 text-emerald-600" />
            <span className="truncate">Comprar como Cliente</span>
          </button>

          <button
            onClick={() => setActiveTab('socio')}
            className={`py-2.5 px-2 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'socio'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5 text-amber-300" />
            <span className="truncate">Precio Socio (-{savingsPercent}%)</span>
          </button>

          <button
            onClick={() => setActiveTab('detalles')}
            className={`py-2.5 px-2 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'detalles'
                ? 'bg-white text-slate-900 shadow-xs border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-slate-500" />
            <span className="truncate">Ficha Técnica & Uso</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">

          {/* TAB 1: CLIENTE */}
          {activeTab === 'cliente' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              
              {/* Product Main Showcase Card */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 flex flex-col sm:flex-row items-center gap-5">
                <div className="w-32 h-32 bg-white rounded-xl border border-slate-200 p-2 flex items-center justify-center shrink-0">
                  <img 
                    src={product.images[selectedImageIdx] || product.images[0]} 
                    alt={product.name}
                    className="max-h-full max-w-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex-1 space-y-2 text-center sm:text-left">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                    Precio Venta al Público (PVP)
                  </span>
                  <div className="flex items-baseline justify-center sm:justify-start gap-2">
                    <span className="text-3xl font-black text-slate-900">
                      ${product.publicPrice.toFixed(2)} USD
                    </span>
                    {selectedCountry.currencyCode !== 'USD' && (
                      <span className="text-sm font-bold text-emerald-800 font-mono">
                        ≈ {formatCurrency(product.publicPrice)}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {product.shortDescription}
                  </p>
                </div>
              </div>

              {/* Benefits Snippet */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  Beneficios Principales:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {product.benefits.slice(0, 4).map((b, idx) => (
                    <div key={idx} className="p-2.5 bg-emerald-50/60 rounded-xl border border-emerald-100 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Purchase Flow Steps */}
              <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <p className="font-bold text-slate-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  ¿Cómo realizar tu compra directa en {selectedCountry.name}?
                </p>
                <ol className="list-decimal list-inside space-y-1 text-slate-600">
                  <li>Haz clic en el botón de WhatsApp oficial abajo para consultar disponibilidad inmediata.</li>
                  <li>Coordina la entrega a domicilio o el retiro personal en la oficina autorizada de tu ciudad.</li>
                  <li>Realiza tu pago seguro en moneda local ({selectedCountry.paymentMethods.join(', ')}).</li>
                </ol>
              </div>

              {/* Action Buttons */}
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
                  <span>Ver Oficinas de Retiro</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: SOCIO */}
          {activeTab === 'socio' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              
              {/* Partner Price Advantage */}
              <div className="bg-gradient-to-r from-amber-50 to-emerald-50 rounded-2xl p-4 border border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900">
                    Precio Exclusivo para Socios y Distribuidores
                  </span>
                  <div className="text-3xl font-black text-emerald-800">
                    ${product.partnerPrice.toFixed(2)} USD
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    Ahorras: <strong className="text-emerald-700 font-bold">${savings.toFixed(2)} USD (-{savingsPercent}%)</strong> por unidad
                  </div>
                  {selectedCountry.currencyCode !== 'USD' && (
                    <div className="text-[11px] font-mono text-emerald-700 mt-0.5">
                      ≈ {formatCurrency(product.partnerPrice)} (Precio Socio)
                    </div>
                  )}
                </div>

                <div className="text-right w-full sm:w-auto bg-white p-3 rounded-xl border border-amber-200 text-xs">
                  <div className="text-slate-500 text-[10px] uppercase font-bold">Puntos de Negocio:</div>
                  <div className="font-mono font-extrabold text-slate-900 text-lg">
                    {product.bv.toFixed(2)} BV
                  </div>
                  <div className="text-[10px] text-emerald-700 font-medium">Acumulable para ascensos y bonos</div>
                </div>
              </div>

              {/* Sponsor Code Validation Box */}
              <div className="p-4 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wide block">
                    Código Oficial de Patrocinador HGW:
                  </span>
                  <span className="font-mono text-lg font-black text-amber-300">
                    {SITE_CONFIG.SPONSOR_CODE}
                  </span>
                  <span className="text-xs text-slate-300 ml-2">
                    ({SITE_CONFIG.SPONSOR_NAME})
                  </span>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="w-full sm:w-auto px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                  <span>{copiedCode ? '¡Código Copiado!' : 'Copiar Código'}</span>
                </button>
              </div>

              {/* Steps to Register */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold inline-flex items-center justify-center text-[10px] mb-1.5">1</span>
                  <p className="font-bold text-slate-900">Ingresa al Portal</p>
                  <p className="text-slate-500 text-[11px]">Accede con el enlace oficial del patrocinador.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold inline-flex items-center justify-center text-[10px] mb-1.5">2</span>
                  <p className="font-bold text-slate-900">Crea tu Usuario</p>
                  <p className="text-slate-500 text-[11px]">Llena tus datos y genera tu código de socio.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold inline-flex items-center justify-center text-[10px] mb-1.5">3</span>
                  <p className="font-bold text-slate-900">Elige tu Paquete</p>
                  <p className="text-slate-500 text-[11px]">Actívate desde 50 BV en productos de tu preferencia.</p>
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

          {/* TAB 3: DETALLES & FICHA TÉCNICA */}
          {activeTab === 'detalles' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              
              {/* Image Gallery selector */}
              {product.images.length > 1 && (
                <div className="flex items-center gap-2 pb-2 overflow-x-auto">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIdx(idx)}
                      className={`w-16 h-16 rounded-xl border p-1 shrink-0 transition-all bg-white cursor-pointer ${
                        selectedImageIdx === idx ? 'border-emerald-600 ring-2 ring-emerald-600/30' : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                    </button>
                  ))}
                </div>
              )}

              {/* Full Description */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Descripción Detallada
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  {product.fullDescription}
                </p>
              </div>

              {/* Benefits Full List */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Propiedades y Beneficios Clave
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {product.benefits.map((b, idx) => (
                    <div key={idx} className="p-2.5 bg-emerald-50/60 rounded-xl border border-emerald-100 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ingredients & Usage Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                
                {/* Ingredients */}
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                  <h5 className="font-bold text-slate-900 uppercase text-[11px]">Ingredientes Activos:</h5>
                  <ul className="space-y-1 text-slate-600 list-disc list-inside">
                    {product.ingredients.map((ing, idx) => (
                      <li key={idx}>{ing}</li>
                    ))}
                  </ul>
                </div>

                {/* Usage Instructions */}
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                  <h5 className="font-bold text-slate-900 uppercase text-[11px]">Modo de Uso Sugerido:</h5>
                  <ul className="space-y-1 text-slate-600 list-disc list-inside">
                    {product.usageInstructions.map((ins, idx) => (
                      <li key={idx}>{ins}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Share and Action */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <button
                  onClick={handleCopyProductLink}
                  className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                  <span>{copiedLink ? '¡Enlace Copiado!' : 'Copiar Enlace'}</span>
                </button>

                <button
                  onClick={() => {
                    closeProductModal();
                    navigate(`/productos/${product.slug}`);
                  }}
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
                >
                  <span>Ver Página Completa</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 text-center text-[11px] text-slate-500 flex flex-wrap items-center justify-center gap-2">
          <span>Soporte Oficial HGW:</span>
          <strong className="text-emerald-700 font-mono">{SITE_CONFIG.CONTACT_PHONE}</strong>
          <span>•</span>
          <span>Patrocinador: <strong className="text-slate-800">{SITE_CONFIG.SPONSOR_CODE}</strong></span>
        </div>
      </div>
    </div>
  );
};
