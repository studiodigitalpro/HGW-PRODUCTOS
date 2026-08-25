import React, { useState, useMemo, useEffect } from 'react';
import { 
  Filter, 
  Search, 
  Layers, 
  Sparkles, 
  SlidersHorizontal, 
  X, 
  Globe, 
  Package,
  ArrowUpDown
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HGW_PRODUCTS, CATEGORIES_INFO, RAW_MATERIALS } from '../data/productsData';
import { HGW_COUNTRIES } from '../data/countriesData';
import { ProductCard } from '../components/ProductCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { updatePageSEO } from '../utils/seo';

export const ProductsCatalogPage: React.FC = () => {
  const { selectedCountry, setSelectedCountry } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRawMaterial, setSelectedRawMaterial] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [onlyAvailableInSelectedCountry, setOnlyAvailableInSelectedCountry] = useState<boolean>(false);

  useEffect(() => {
    updatePageSEO({
      title: 'Catálogo de Productos HGW | Precios, BV y Descuentos para Socios',
      description: 'Explora los 48 productos de HGW: Suplementos de Arándanos, Ganoderma Lucidum, Turmalina y Cuidado Personal. Consulta precios de venta y precios de socio.',
      canonicalUrl: 'https://hgwlatam.com/productos'
    });
  }, []);

  const filteredProducts = useMemo(() => {
    return HGW_PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Raw Material filter
      if (selectedRawMaterial !== 'all' && product.rawMaterial !== selectedRawMaterial) {
        return false;
      }
      // Country availability filter
      if (onlyAvailableInSelectedCountry && !product.availableCountries.includes(selectedCountry.id)) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesDesc = product.shortDescription.toLowerCase().includes(q);
        const matchesRaw = product.rawMaterial.toLowerCase().includes(q);
        const matchesTag = product.tags.some(t => t.toLowerCase().includes(q));
        if (!matchesName && !matchesDesc && !matchesRaw && !matchesTag) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'featured') {
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
      if (sortBy === 'price-low') {
        return a.publicPrice - b.publicPrice;
      }
      if (sortBy === 'price-high') {
        return b.publicPrice - a.publicPrice;
      }
      if (sortBy === 'bv-high') {
        return b.bv - a.bv;
      }
      if (sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  }, [selectedCategory, selectedRawMaterial, searchQuery, sortBy, onlyAvailableInSelectedCountry, selectedCountry]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedRawMaterial('all');
    setSearchQuery('');
    setSortBy('featured');
    setOnlyAvailableInSelectedCountry(false);
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedRawMaterial !== 'all' || searchQuery !== '' || onlyAvailableInSelectedCountry;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: 'Catálogo de Productos HGW' }]} />

      {/* Page Header Banner */}
      <div className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white rounded-3xl p-6 sm:p-8 shadow-md">
        <div className="max-w-3xl space-y-2">
          <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-300">
            Catálogo Oficial de Productos HGW
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Nutrición Celular, Salud y Bienestar Bioeléctrico
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
            Revisa la ficha técnica, beneficios, valor en puntos BV y precios públicos o de socio con hasta el <strong>60% de descuento</strong>. Consulta disponibilidad en tu país.
          </p>
        </div>
      </div>

      {/* Controls & Filter Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-4">
        
        {/* Search & Sort Row */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por nombre, ingrediente..."
              className="w-full pl-9 pr-8 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-slate-900 placeholder-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-between sm:justify-end text-xs">
            {/* Country toggle */}
            <button
              onClick={() => setOnlyAvailableInSelectedCountry(!onlyAvailableInSelectedCountry)}
              className={`px-3 py-2 rounded-xl font-medium border flex items-center gap-1.5 transition-colors cursor-pointer ${
                onlyAvailableInSelectedCountry
                  ? 'bg-emerald-100 border-emerald-300 text-emerald-900 font-bold'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              <span>{selectedCountry.flag}</span>
              <span>Solo en {selectedCountry.name}</span>
            </button>

            {/* Sort selector */}
            <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1 text-slate-700">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Ordenar productos por"
                className="bg-transparent border-none text-xs font-semibold focus:ring-0 outline-none cursor-pointer"
              >
                <option value="featured">Destacados</option>
                <option value="bv-high">Mayor BV (Puntos)</option>
                <option value="price-low">Precio: Menor a Mayor</option>
                <option value="price-high">Precio: Mayor a Menor</option>
                <option value="name-asc">Nombre: A - Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Categories Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-colors whitespace-nowrap cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-emerald-700 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Todas ({HGW_PRODUCTS.length})
          </button>
          {CATEGORIES_INFO.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-3 py-1.5 rounded-xl font-bold transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.name
                  ? 'bg-emerald-700 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Raw Material Sub-Filters */}
        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-[11px] font-bold text-slate-400 uppercase">
            Materia Prima:
          </span>
          <button
            onClick={() => setSelectedRawMaterial('all')}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors cursor-pointer ${
              selectedRawMaterial === 'all'
                ? 'bg-slate-800 text-white font-bold'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Todos
          </button>
          {RAW_MATERIALS.slice(0, 7).map((mat) => (
            <button
              key={mat}
              onClick={() => setSelectedRawMaterial(mat)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors cursor-pointer ${
                selectedRawMaterial === mat
                  ? 'bg-slate-800 text-white font-bold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {mat}
            </button>
          ))}

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="ml-auto text-[11px] font-bold text-rose-600 hover:text-rose-700 underline flex items-center gap-1 cursor-pointer"
            >
              <X className="w-3 h-3" />
              Limpiar Filtros
            </button>
          )}
        </div>

      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>Mostrando <strong>{filteredProducts.length}</strong> de {HGW_PRODUCTS.length} productos</span>
        <span>Moneda y precios calculados en USD</span>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
          <Package className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">No se encontraron productos con los filtros seleccionados</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Intenta cambiar los términos de búsqueda o restablecer la categoría o materia prima seleccionada.
          </p>
          <button
            onClick={clearFilters}
            className="px-4 py-2 bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-xs hover:bg-emerald-700 transition-colors cursor-pointer"
          >
            Restablecer todos los filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

    </div>
  );
};
