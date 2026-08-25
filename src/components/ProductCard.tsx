import React from 'react';
import { 
  Sparkles, 
  Tag, 
  ArrowRight, 
  Layers, 
  Globe, 
  Award, 
  TrendingUp,
  CheckCircle2
} from 'lucide-react';
import { HGWProduct } from '../types';
import { useApp } from '../context/AppContext';

interface ProductCardProps {
  product: HGWProduct;
  showCategoryBadge?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  showCategoryBadge = true 
}) => {
  const { navigate, openProductModal, selectedCountry, formatCurrency } = useApp();

  const isAvailableInCountry = product.availableCountries.includes(selectedCountry.id);
  const savings = product.publicPrice - product.partnerPrice;
  const savingsPercent = Math.round((savings / product.publicPrice) * 100);

  return (
    <div 
      id={`product-card-${product.id}`}
      className="group bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden relative"
    >
      {/* Product Image Container */}
      <div 
        onClick={() => openProductModal(product, 'detalles')}
        className="relative h-52 sm:h-56 bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden cursor-pointer flex items-center justify-center p-4"
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.dataset.triedFallback && product.images[0].includes('lh3.googleusercontent.com/d/')) {
              target.dataset.triedFallback = 'true';
              const fileId = product.images[0].split('/d/')[1];
              target.src = `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`;
            }
          }}
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-1 pointer-events-none">
          {showCategoryBadge && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/95 text-emerald-800 shadow-xs backdrop-blur-xs border border-emerald-100 uppercase tracking-wider">
              {product.category}
            </span>
          )}

          <div className="flex items-center gap-1 ml-auto">
            {product.featured && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500 text-white shadow-xs">
                ★ Estrella
              </span>
            )}
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-900 text-emerald-200 shadow-xs">
              {product.bv.toFixed(2)} BV
            </span>
          </div>
        </div>

        {/* Country availability indicator */}
        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px]">
          <span className={`px-2 py-0.5 rounded-md font-medium ${
            isAvailableInCountry 
              ? 'bg-emerald-100/90 text-emerald-800' 
              : 'bg-amber-100/90 text-amber-900'
          }`}>
            {isAvailableInCountry ? `Disponible en ${selectedCountry.name}` : `Consultar en ${selectedCountry.name}`}
          </span>
          <span className="text-[10px] text-slate-500 bg-white/80 px-1.5 py-0.5 rounded">
            {product.presentation}
          </span>
        </div>
      </div>

      {/* Product Content Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Raw Material Subtitle */}
          <p className="text-[11px] font-medium text-emerald-700 line-clamp-1 mb-1">
            🌱 {product.rawMaterial}
          </p>

          {/* Product Title */}
          <h3 
            onClick={() => openProductModal(product, 'detalles')}
            className="text-sm sm:text-base font-bold text-slate-900 hover:text-emerald-700 transition-colors line-clamp-2 cursor-pointer leading-snug mb-2"
          >
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
            {product.shortDescription}
          </p>
        </div>

        {/* Pricing Box & BV Grid */}
        <div className="space-y-3 pt-3 border-t border-slate-100">
          <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500 text-[11px]">Precio Público:</span>
              <span className="font-bold text-slate-900">
                ${product.publicPrice.toFixed(2)} USD
              </span>
            </div>

            <div className="flex items-center justify-between text-xs mt-1 pt-1 border-t border-slate-200/60">
              <div className="flex items-center gap-1">
                <span className="font-bold text-emerald-700 text-xs">Precio Socio:</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1 rounded">
                  -{savingsPercent}%
                </span>
              </div>
              <span className="font-extrabold text-emerald-700 text-sm">
                ${product.partnerPrice.toFixed(2)} USD
              </span>
            </div>

            {/* Local Currency preview if not USD */}
            {selectedCountry.currencyCode !== 'USD' && (
              <div className="text-[10px] text-slate-500 text-right mt-1 font-mono">
                ≈ {formatCurrency(product.partnerPrice)} (Socio)
              </div>
            )}
          </div>

          {/* Action CTAs: "Quiero este producto" & "Ver Detalles" */}
          <div className="grid grid-cols-2 gap-2">
            <button
              id={`details-btn-${product.id}`}
              onClick={() => openProductModal(product, 'detalles')}
              className="w-full py-2 px-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors text-center cursor-pointer flex items-center justify-center gap-1"
            >
              <span>Ver Pop-up</span>
              <ArrowRight className="w-3 h-3 text-slate-400" />
            </button>

            <button
              id={`want-product-btn-${product.id}`}
              onClick={() => openProductModal(product, 'cliente')}
              className="w-full py-2 px-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs transition-all text-center cursor-pointer flex items-center justify-center gap-1"
            >
              <span>Quiero Este</span>
              <Sparkles className="w-3 h-3 text-emerald-200" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
