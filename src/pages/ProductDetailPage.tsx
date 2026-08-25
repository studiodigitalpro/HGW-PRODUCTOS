import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Tag, 
  CheckCircle2, 
  ShoppingBag, 
  UserCheck, 
  MessageCircle, 
  Share2, 
  ShieldCheck, 
  Globe, 
  MapPin, 
  ArrowLeft, 
  ChevronRight, 
  Check, 
  Copy, 
  Info,
  ExternalLink,
  Layers,
  Heart
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getProductBySlug, HGW_PRODUCTS } from '../data/productsData';
import { SITE_CONFIG, getWhatsAppProductUrl } from '../config/siteConfig';
import { HGW_COUNTRIES } from '../data/countriesData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ProductCard } from '../components/ProductCard';
import { updatePageSEO, generateProductSchema } from '../utils/seo';
import { trackEvent } from '../utils/analytics';

interface ProductDetailPageProps {
  slug: string;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ slug }) => {
  const { 
    navigate, 
    selectedCountry, 
    formatCurrency, 
    openProductModal, 
    openRegistrationModal 
  } = useApp();

  const product = getProductBySlug(slug);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'beneficios' | 'ingredientes' | 'uso' | 'paises'>('beneficios');
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    if (product) {
      const url = `https://hgwlatam.com/productos/${product.slug}`;
      updatePageSEO({
        title: `${product.name} | Beneficios, Precio y BV | HGW`,
        description: `${product.shortDescription} Conoce beneficios, ingredientes, modo de uso y compra al mejor precio o con descuento de socio HGW.`,
        canonicalUrl: url,
        ogType: 'product',
        ogImage: product.images[0],
        jsonLd: generateProductSchema(product, url)
      });
      trackEvent('view_product', {
        product_id: product.id,
        product_name: product.name,
        category: product.category,
        price: product.publicPrice
      });
    }
  }, [product]);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <h1 className="text-2xl font-bold text-slate-800">Producto No Encontrado</h1>
        <p className="text-xs text-slate-500">
          El producto que buscas no existe o ha sido modificado.
        </p>
        <button
          onClick={() => navigate('/productos')}
          className="px-5 py-2.5 bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-xs hover:bg-emerald-700 transition-colors cursor-pointer"
        >
          Volver al Catálogo de Productos
        </button>
      </div>
    );
  }

  const savings = product.publicPrice - product.partnerPrice;
  const savingsPercent = Math.round((savings / product.publicPrice) * 100);
  const isAvailableInSelected = product.availableCountries.includes(selectedCountry.id);

  // Related products
  const relatedProducts = HGW_PRODUCTS
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.shortDescription,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleDirectWhatsAppClient = () => {
    trackEvent('click_client_purchase', {
      product_id: product.id,
      product_name: product.name,
      country: selectedCountry.name,
      price: product.publicPrice
    });
    const url = getWhatsAppProductUrl(product.name, selectedCountry.name, false);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      
      {/* Breadcrumbs Navigation */}
      <Breadcrumbs
        items={[
          { name: 'Productos', url: '/productos' },
          { name: product.category, url: `/categorias` },
          { name: product.name }
        ]}
      />

      {/* Main Product Presentation Grid */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-square max-h-[460px] bg-gradient-to-b from-slate-50 to-slate-100 rounded-2xl border border-slate-100 p-6 flex items-center justify-center overflow-hidden">
              <img
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={product.name}
                className="max-h-full max-w-full object-contain drop-shadow-md transition-all duration-300"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  const currentSrc = product.images[selectedImageIndex] || product.images[0];
                  if (!target.dataset.triedFallback && currentSrc.includes('lh3.googleusercontent.com/d/')) {
                    target.dataset.triedFallback = 'true';
                    const fileId = currentSrc.split('/d/')[1];
                    target.src = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
                  }
                }}
              />

              {/* Badges on image */}
              <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-emerald-800 shadow-xs backdrop-blur-xs border border-emerald-100 uppercase tracking-wider">
                  {product.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-emerald-900 text-emerald-100">
                  🌱 {product.rawMaterial}
                </span>
              </div>

              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-400 text-slate-950 shadow-xs">
                  {product.bv.toFixed(2)} BV
                </span>
              </div>
            </div>

            {/* Thumbnail selector (if multiple images) */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`w-16 h-16 rounded-xl border p-1 bg-slate-50 transition-all cursor-pointer ${
                      selectedImageIndex === idx
                        ? 'border-emerald-600 ring-2 ring-emerald-500/20'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-contain" referrerPolicy="no-referrer" loading="lazy" />
                  </button>
                ))}
              </div>
            )}

            {/* Quality Seals */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between text-xs text-slate-600">
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Certificación GMP & ISO 9001</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% Original Sellado</span>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Pricing & Dual-Action Flow */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              
              {/* Country Availability Bar */}
              <div className="flex items-center justify-between text-xs">
                <span className={`px-2.5 py-1 rounded-lg font-medium flex items-center gap-1.5 ${
                  isAvailableInSelected 
                    ? 'bg-emerald-100 text-emerald-800' 
                    : 'bg-amber-100 text-amber-900'
                }`}>
                  <span>{selectedCountry.flag}</span>
                  <span>{isAvailableInSelected ? `Disponible en ${selectedCountry.name}` : `Consultar stock en ${selectedCountry.name}`}</span>
                </span>

                <button
                  onClick={handleShare}
                  className="flex items-center gap-1 text-slate-500 hover:text-slate-800 transition-colors text-xs cursor-pointer"
                  title="Compartir producto"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? '¡Enlace Copiado!' : 'Compartir'}</span>
                </button>
              </div>

              {/* Title & Presentation */}
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {product.name}
                </h1>
                <p className="text-xs text-slate-500 mt-1 font-medium">
                  Presentación: <strong className="text-slate-700">{product.presentation}</strong> • Materia Prima: <strong className="text-emerald-700">{product.rawMaterial}</strong>
                </p>
              </div>

              {/* Short Description */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Pricing Breakdown Box */}
              <div className="bg-gradient-to-br from-slate-50 to-emerald-50/40 rounded-2xl p-5 border border-emerald-100 space-y-4">
                
                <div className="grid grid-cols-2 gap-4">
                  {/* Public Price */}
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Precio Público Oficial:
                    </span>
                    <div className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
                      ${product.publicPrice.toFixed(2)} USD
                    </div>
                    {selectedCountry.currencyCode !== 'USD' && (
                      <div className="text-[11px] text-slate-500 font-mono">
                        ≈ {formatCurrency(product.publicPrice)}
                      </div>
                    )}
                  </div>

                  {/* Partner Price */}
                  <div className="border-l border-emerald-200/80 pl-4">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                        Precio Socio:
                      </span>
                      <span className="text-[9px] bg-emerald-600 text-white font-extrabold px-1 rounded uppercase">
                        -{savingsPercent}%
                      </span>
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-emerald-800 mt-0.5">
                      ${product.partnerPrice.toFixed(2)} USD
                    </div>
                    <div className="text-[11px] text-emerald-700 font-medium">
                      Ahorras ${savings.toFixed(2)} USD
                    </div>
                  </div>
                </div>

                {/* BV Box */}
                <div className="pt-3 border-t border-emerald-100 flex items-center justify-between text-xs">
                  <span className="text-slate-600">
                    Puntos de Negocio (Business Volume):
                  </span>
                  <span className="font-mono font-extrabold text-slate-900 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                    {product.bv.toFixed(2)} BV
                  </span>
                </div>

                {/* Price USD Note */}
                <div className="pt-2 border-t border-emerald-100/60 flex items-start gap-1.5 text-[11px] text-amber-900 bg-amber-50/70 p-2 rounded-xl">
                  <Info className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                  <p>
                    <strong>Nota:</strong> Precios en Dólares Americanos (USD) de referencia. Pueden variar según el país de compra y tasa cambiaria local.
                  </p>
                </div>
              </div>

              {/* DUAL ACTION CTAS (CORE REQUIREMENT) */}
              <div className="space-y-3 pt-2">
                
                {/* Option 1: Buy as Customer */}
                <button
                  id="product-detail-buy-client-btn"
                  onClick={() => openProductModal(product, 'cliente')}
                  className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Comprar como Cliente (${product.publicPrice.toFixed(2)} USD)</span>
                </button>

                {/* Option 2: Register as Partner */}
                <button
                  id="product-detail-register-partner-btn"
                  onClick={() => openProductModal(product, 'socio')}
                  className="w-full py-3.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer border border-slate-700"
                >
                  <UserCheck className="w-4 h-4 text-amber-300" />
                  <span>Registrarme como Socio HGW (${product.partnerPrice.toFixed(2)} USD)</span>
                </button>

              </div>

              {/* Sponsor & Support Callout */}
              <div className="text-[11px] text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center justify-between">
                <span>Patrocinador Autorizado: <strong className="text-slate-700">{SITE_CONFIG.SPONSOR_NAME} ({SITE_CONFIG.SPONSOR_CODE})</strong></span>
                <a
                  href={SITE_CONFIG.WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 font-bold hover:underline"
                >
                  Asistencia WhatsApp
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Structured Technical & Scientific Information Tabs */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-6">
        {/* Tab Headers */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-3 overflow-x-auto text-xs sm:text-sm font-bold">
          {[
            { id: 'beneficios', label: 'Beneficios Principales' },
            { id: 'ingredientes', label: 'Ingredientes & Composición' },
            { id: 'uso', label: 'Modo de Uso e Instrucciones' },
            { id: 'paises', label: 'Disponibilidad en Países' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-2 px-4 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Panels */}
        <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          
          {/* TAB 1: BENEFICIOS */}
          {activeTab === 'beneficios' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h3 className="font-bold text-base text-slate-900">
                Beneficios Fisiológicos y Nutracéuticos de {product.name}
              </h3>
              <p className="text-slate-600">
                {product.fullDescription || product.shortDescription}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                {product.benefits.map((benefit, idx) => (
                  <div key={idx} className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-800 text-xs font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: INGREDIENTES */}
          {activeTab === 'ingredientes' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h3 className="font-bold text-base text-slate-900">
                Ingredientes Activos y Formulación Botánica
              </h3>
              <p className="text-slate-600">
                Elaborado bajo estrictos estándares de extracción biotecnológica para preservar la bioactividad de sus componentes naturales.
              </p>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                <div className="font-bold text-xs text-slate-900">Composición Declarada:</div>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ing, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-white text-emerald-900 font-medium text-xs rounded-lg border border-slate-200">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: MODO DE USO */}
          {activeTab === 'uso' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h3 className="font-bold text-base text-slate-900">
                Recomendaciones de Uso y Dosificación
              </h3>
              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200/80 space-y-3">
                <div className="font-bold text-xs text-amber-950 flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-amber-700" />
                  <span>Instrucciones Oficiales de Consumo / Aplicación:</span>
                </div>
                <p className="text-slate-800 text-xs sm:text-sm">
                  {product.usageInstructions}
                </p>
              </div>
              <p className="text-xs text-slate-500 italic">
                * Nota: Mantener en un lugar fresco y seco, fuera del alcance de la luz solar directa. Los suplementos no deben utilizarse como sustitutos de una dieta balanceada.
              </p>
            </div>
          )}

          {/* TAB 4: PAÍSES Y DISPONIBILIDAD */}
          {activeTab === 'paises' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h3 className="font-bold text-base text-slate-900">
                Mercados Donde Puedes Adquirir este Producto
              </h3>
              <p className="text-xs text-slate-600">
                Disponible a través de la red oficial de oficinas y paqueterías autorizadas en los siguientes países:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {product.availableCountries.map((code) => {
                  const country = HGW_COUNTRIES.find(c => c.id === code);
                  if (!country) return null;
                  return (
                    <div
                      key={code}
                      onClick={() => navigate(`/paises/${country.slug}`)}
                      className="p-3 bg-slate-50 hover:bg-emerald-50 rounded-xl border border-slate-200 hover:border-emerald-300 transition-colors cursor-pointer flex items-center gap-2"
                    >
                      <span className="text-lg">{country.flag}</span>
                      <div>
                        <div className="font-bold text-xs text-slate-800">{country.name}</div>
                        <div className="text-[10px] text-slate-500 font-mono">{country.currencyCode}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              Productos Relacionados en {product.category}
            </h2>
            <button
              onClick={() => navigate('/productos')}
              className="text-xs font-bold text-emerald-700 hover:underline"
            >
              Ver todos
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
