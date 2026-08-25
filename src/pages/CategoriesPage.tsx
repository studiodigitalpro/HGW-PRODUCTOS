import React, { useEffect, useState } from 'react';
import { 
  Layers, 
  Package, 
  ArrowRight, 
  Sparkles, 
  Search, 
  ChevronRight,
  Filter
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CATEGORIES_INFO, getCategoryBySlug, getProductsByCategory, HGW_PRODUCTS } from '../data/productsData';
import { ProductCard } from '../components/ProductCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { updatePageSEO } from '../utils/seo';

interface CategoriesPageProps {
  categorySlug?: string;
}

export const CategoriesPage: React.FC<CategoriesPageProps> = ({ categorySlug }) => {
  const { navigate } = useApp();
  const [searchTerm, setSearchTerm] = useState('');

  const activeCategory = categorySlug ? getCategoryBySlug(categorySlug) : undefined;

  useEffect(() => {
    if (activeCategory) {
      updatePageSEO({
        title: `${activeCategory.title} HGW | Catálogo Oficial y Precios`,
        description: `Conoce la línea de ${activeCategory.title} de HGW. ${activeCategory.description} Precios al público y descuentos de socio.`,
        canonicalUrl: `https://hgwlatam.com/categorias/${activeCategory.slug}`
      });
    } else {
      updatePageSEO({
        title: 'Categorías de Productos HGW | Alimentos, Cuidado, Turmalina y Suplementos',
        description: 'Explora todas las líneas de productos Health Green World (HGW): Alimentos Funcionales, Cuidado Personal, Accesorios de Turmalina, Suplementos y Equipos.',
        canonicalUrl: 'https://hgwlatam.com/categorias'
      });
    }
  }, [activeCategory]);

  const displayedProducts = activeCategory
    ? getProductsByCategory(activeCategory.name).filter(p => {
        if (!searchTerm.trim()) return true;
        const q = searchTerm.toLowerCase().trim();
        return p.name.toLowerCase().includes(q) || p.rawMaterial.toLowerCase().includes(q) || p.shortDescription.toLowerCase().includes(q);
      })
    : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={
          activeCategory
            ? [{ name: 'Categorías', url: '/categorias' }, { name: activeCategory.title }]
            : [{ name: 'Categorías de Productos' }]
        }
      />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white rounded-3xl p-6 sm:p-8 shadow-md">
        <div className="max-w-3xl space-y-2">
          <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-300">
            {activeCategory ? 'Línea de Especialidad HGW' : 'Líneas y Especialidades'}
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            {activeCategory ? activeCategory.title : 'Categorías de Productos HGW'}
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
            {activeCategory
              ? activeCategory.description
              : 'Descubre cada una de las líneas nutracéuticas, cosméticas y tecnológicas formuladas por Green World International.'}
          </p>
        </div>
      </div>

      {/* VIEW 1: SINGLE CATEGORY DETAIL VIEW */}
      {activeCategory ? (
        <div className="space-y-6">
          
          {/* Controls Bar for Category */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-2">
              <button
                onClick={() => navigate('/categorias')}
                className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer flex items-center gap-1"
              >
                ← Ver todas las categorías
              </button>
              <span className="text-xs text-slate-500 font-medium">
                ({displayedProducts.length} productos en esta categoría)
              </span>
            </div>

            <div className="w-full sm:w-64">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Filtrar en esta categoría..."
                className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-900"
              />
            </div>
          </div>

          {/* Products Grid */}
          {displayedProducts.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-xs text-slate-500">
              No se encontraron productos en esta categoría con el término "{searchTerm}".
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      ) : (
        /* VIEW 2: ALL CATEGORIES GRID VIEW */
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES_INFO.map((cat) => (
              <div
                key={cat.id}
                onClick={() => navigate(`/categorias/${cat.slug}`)}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md hover:border-emerald-400 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  {/* Category Image Header */}
                  <div className="h-40 bg-gradient-to-b from-slate-50 to-slate-100 p-4 flex items-center justify-center relative overflow-hidden border-b border-slate-100">
                    <img 
                      src={cat.image} 
                      alt={cat.name} 
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="font-bold text-base text-slate-900 group-hover:text-emerald-800 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                    <span>{cat.productCount} Productos</span>
                    <div className="w-7 h-7 rounded-full bg-emerald-50 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick All Products Shortcut */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-slate-900 text-sm">¿Deseas ver el catálogo general sin agrupar?</h4>
              <p className="text-xs text-slate-500">Accede a la lista completa de los 48 productos con buscador avanzado.</p>
            </div>
            <button
              onClick={() => navigate('/productos')}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer whitespace-nowrap"
            >
              Ver Catálogo Completo
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
