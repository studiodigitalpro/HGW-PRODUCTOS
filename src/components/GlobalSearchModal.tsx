import React, { useState, useMemo } from 'react';
import { 
  Search, 
  X, 
  Package, 
  Layers, 
  Globe, 
  Building2, 
  BookOpen, 
  HelpCircle, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HGW_PRODUCTS } from '../data/productsData';
import { CATEGORIES_INFO } from '../data/productsData';
import { HGW_COUNTRIES } from '../data/countriesData';
import { HGW_OFFICES } from '../data/officesData';
import { HGW_ARTICLES } from '../data/blogData';
import { HGW_FAQS } from '../data/faqData';
import { GlobalSearchResult } from '../types';

export const GlobalSearchModal: React.FC = () => {
  const { isSearchOpen, closeSearch, navigate } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');

  const results = useMemo<GlobalSearchResult[]>(() => {
    if (!searchTerm.trim()) return [];
    const term = searchTerm.toLowerCase().trim();
    const list: GlobalSearchResult[] = [];

    // 1. Products
    HGW_PRODUCTS.forEach(p => {
      if (
        p.name.toLowerCase().includes(term) ||
        p.rawMaterial.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term) ||
        p.shortDescription.toLowerCase().includes(term) ||
        p.tags.some(t => t.toLowerCase().includes(term))
      ) {
        list.push({
          id: `prod-${p.id}`,
          type: 'producto',
          title: p.name,
          subtitle: `${p.category} • ${p.rawMaterial} • $${p.publicPrice.toFixed(2)} USD (${p.bv.toFixed(2)} BV)`,
          url: `/productos/${p.slug}`,
          categoryBadge: p.category,
          extraInfo: `$${p.partnerPrice.toFixed(2)} Socio`
        });
      }
    });

    // 2. Categories
    CATEGORIES_INFO.forEach(cat => {
      if (cat.name.toLowerCase().includes(term) || cat.description.toLowerCase().includes(term)) {
        list.push({
          id: `cat-${cat.id}`,
          type: 'categoria',
          title: `Categoría: ${cat.title}`,
          subtitle: cat.description,
          url: `/categorias/${cat.slug}`,
          categoryBadge: 'Categoría'
        });
      }
    });

    // 3. Countries
    HGW_COUNTRIES.forEach(c => {
      if (c.name.toLowerCase().includes(term) || c.currencyName.toLowerCase().includes(term)) {
        list.push({
          id: `country-${c.id}`,
          type: 'pais',
          title: `${c.flag} HGW en ${c.name}`,
          subtitle: `Estado: ${c.status} • Moneda: ${c.currencyCode} • Envíos: ${c.shippingCourier}`,
          url: `/paises/${c.slug}`,
          categoryBadge: 'País'
        });
      }
    });

    // 4. Offices
    HGW_OFFICES.forEach(o => {
      if (
        o.city.toLowerCase().includes(term) ||
        o.countryName.toLowerCase().includes(term) ||
        o.name.toLowerCase().includes(term) ||
        o.address.toLowerCase().includes(term)
      ) {
        list.push({
          id: `office-${o.id}`,
          type: 'oficina',
          title: `Oficina: ${o.name} (${o.city}, ${o.countryName})`,
          subtitle: `${o.address} • Horario: ${o.openingHours}`,
          url: `/oficinas`,
          categoryBadge: 'Oficina'
        });
      }
    });

    // 5. Articles
    HGW_ARTICLES.forEach(a => {
      if (a.title.toLowerCase().includes(term) || a.excerpt.toLowerCase().includes(term) || a.tags.some(t => t.toLowerCase().includes(term))) {
        list.push({
          id: `art-${a.id}`,
          type: 'articulo',
          title: a.title,
          subtitle: a.excerpt,
          url: `/blog/${a.slug}`,
          categoryBadge: 'Artículo'
        });
      }
    });

    // 6. FAQs
    HGW_FAQS.forEach(f => {
      if (f.question.toLowerCase().includes(term) || f.answer.toLowerCase().includes(term)) {
        list.push({
          id: `faq-${f.id}`,
          type: 'faq',
          title: f.question,
          subtitle: f.answer,
          url: `/preguntas-frecuentes`,
          categoryBadge: `FAQ (${f.category})`
        });
      }
    });

    return list;
  }, [searchTerm]);

  const filteredResults = useMemo(() => {
    if (filterType === 'all') return results;
    return results.filter(r => r.type === filterType);
  }, [results, filterType]);

  if (!isSearchOpen) return null;

  const handleSelect = (url: string) => {
    closeSearch();
    navigate(url);
  };

  const getIconForType = (type: GlobalSearchResult['type']) => {
    switch (type) {
      case 'producto': return <Package className="w-4 h-4 text-emerald-600" />;
      case 'categoria': return <Layers className="w-4 h-4 text-blue-600" />;
      case 'pais': return <Globe className="w-4 h-4 text-indigo-600" />;
      case 'oficina': return <Building2 className="w-4 h-4 text-amber-600" />;
      case 'articulo': return <BookOpen className="w-4 h-4 text-purple-600" />;
      case 'faq': return <HelpCircle className="w-4 h-4 text-teal-600" />;
      default: return <Sparkles className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 p-4 animate-in fade-in duration-150">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            id="global-search-input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por producto, ingrediente, país, oficina, artículo..."
            className="w-full text-sm font-medium text-slate-900 placeholder-slate-400 bg-transparent border-none outline-none focus:ring-0"
            autoFocus
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={closeSearch}
            className="text-xs font-semibold px-2 py-1 bg-slate-200 hover:bg-slate-300 rounded text-slate-600"
          >
            ESC
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 px-4 py-2 bg-white border-b border-slate-100 overflow-x-auto text-xs">
          {[
            { id: 'all', label: 'Todo' },
            { id: 'producto', label: 'Productos' },
            { id: 'categoria', label: 'Categorías' },
            { id: 'pais', label: 'Países' },
            { id: 'oficina', label: 'Oficinas' },
            { id: 'articulo', label: 'Artículos' },
            { id: 'faq', label: 'Preguntas' }
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilterType(f.id)}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer ${
                filterType === f.id
                  ? 'bg-emerald-600 text-white font-bold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="p-3 overflow-y-auto space-y-1 divide-y divide-slate-100">
          {searchTerm.trim() === '' ? (
            <div className="py-12 text-center text-slate-400 text-xs">
              <Search className="w-8 h-8 mx-auto mb-2 text-slate-300" />
              <p className="font-medium text-slate-500">Comienza a escribir para buscar en toda la plataforma HGW</p>
              <p className="text-[11px] text-slate-400 mt-1">Prueba con: "Ganoderma", "Turmalina", "Panamá", "Arándano", "Membresía"...</p>
            </div>
          ) : filteredResults.length === 0 ? (
            <div className="py-12 text-center text-slate-400 text-xs">
              <p className="font-semibold text-slate-600">No se encontraron resultados para "{searchTerm}"</p>
              <p className="text-slate-400 mt-1">Verifica la ortografía o intenta buscar por una palabra clave más general.</p>
            </div>
          ) : (
            filteredResults.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelect(item.url)}
                className="p-3 rounded-xl hover:bg-emerald-50/70 transition-colors cursor-pointer flex items-start justify-between gap-3 group"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-white group-hover:shadow-xs transition-all shrink-0 mt-0.5">
                    {getIconForType(item.type)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                        {item.title}
                      </h4>
                      {item.categoryBadge && (
                        <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 uppercase">
                          {item.categoryBadge}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {item.extraInfo && (
                    <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {item.extraInfo}
                    </span>
                  )}
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 transition-colors" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="p-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 px-4">
          <span>{filteredResults.length} resultados encontrados</span>
          <span>Navega con ratón o teclado</span>
        </div>
      </div>
    </div>
  );
};
