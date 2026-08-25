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
  ArrowUpDown,
  ShieldCheck,
  Award,
  Zap,
  HeartPulse,
  Activity,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Calculator,
  UserCheck,
  Clock,
  ExternalLink
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HGW_PRODUCTS, CATEGORIES_INFO, RAW_MATERIALS } from '../data/productsData';
import { HGW_COUNTRIES } from '../data/countriesData';
import { ProductCard } from '../components/ProductCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { updatePageSEO } from '../utils/seo';
import { SITE_CONFIG } from '../config/siteConfig';
import { getDriveUrl, HGW_DRIVE_ASSETS } from '../utils/driveImages';

const HEALTH_GOALS = [
  { id: 'all', label: 'Todos los Objetivos', query: '' },
  { id: 'antioxidant', label: '🫐 Antioxidante & Ojos', query: 'arándano' },
  { id: 'energy', label: '⚡ Energía & Café Funcional', query: 'café' },
  { id: 'tourmaline', label: '🧲 Alivio & Bioelectricidad', query: 'turmalina' },
  { id: 'immunity', label: '🍄 Inmunidad & Longevidad', query: 'ganoderma' },
  { id: 'beauty', label: '✨ Belleza, Piel & Colágeno', query: 'colágeno' },
  { id: 'hygiene', label: '🌿 Cuidado Íntimo & Higiene', query: 'toalla' }
];

const FAQS_PRODUCTS = [
  {
    q: '¿Cómo obtengo el precio de socio con hasta el 60% de descuento?',
    a: 'Para comprar con descuento de distribuidor (30% al 60%) solo debes registrar tu código de usuario gratuito en el sistema HGW bajo el patrocinio oficial. Al ingresar a tu oficina virtual o acudir a una sede autorizada con tu código, se aplica el precio mayorista.'
  },
  {
    q: '¿Qué significan los puntos BV de cada producto?',
    a: 'El BV (Business Volume) es el valor en puntos asignado a cada producto. Estos puntos se acumulan en tu cuenta para subir de rango de membresía (Pre-Junior 50 BV, Junior 100 BV, Senior 300 BV, Master 600 BV) y para liquidar comisiones y bonos de equipo semanales.'
  },
  {
    q: '¿Cuánto demoran los envíos de los productos?',
    a: 'Los envíos se entregan entre 3 a 6 días hábiles dependiendo del volumen de pedidos y la distancia geográfica. Los métodos de pago y despacho varían según cada uno de los 13 países autorizados.'
  },
  {
    q: '¿Puedo comprar directamente en las oficinas oficiales?',
    a: 'Sí, en las oficinas oficiales puedes realizar compras, facturación y retiro de pedidos presentando tu número de usuario. Recuerda que en las oficinas físicas NO se realizan registros nuevos; el registro debe gestionarse previamente online.'
  },
  {
    q: '¿Qué certificaciones internacionales avalan la calidad de los productos HGW?',
    a: 'Los productos HGW cuentan con registro FDA, certificación de Buenas Prácticas de Manufactura (GMP), ISO 9001, sistema de inocuidad HACCP, certificación Halal, sello agrícola Global G.A.P. y normativas sanitarias locales de cada país.'
  }
];

export const ProductsCatalogPage: React.FC = () => {
  const { selectedCountry, setSelectedCountry, openRegistrationModal } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRawMaterial, setSelectedRawMaterial] = useState<string>('all');
  const [selectedGoal, setSelectedGoal] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [onlyAvailableInSelectedCountry, setOnlyAvailableInSelectedCountry] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // BV Calculator State
  const [calcCombo, setCalcCombo] = useState<number>(600); // 50, 100, 300, 600

  useEffect(() => {
    updatePageSEO({
      title: 'Catálogo de Productos HGW | Precios, BV y Descuentos para Socios',
      description: 'Explora los 48 productos de HGW: Suplementos de Arándanos, Ganoderma Lucidum, Turmalina y Cuidado Personal. Consulta precios de venta y precios de socio con hasta el 60% de descuento.',
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
      // Goal Filter
      if (selectedGoal !== 'all') {
        const goalObj = HEALTH_GOALS.find(g => g.id === selectedGoal);
        if (goalObj && goalObj.query) {
          const q = goalObj.query.toLowerCase();
          const matchesName = product.name.toLowerCase().includes(q);
          const matchesDesc = product.shortDescription.toLowerCase().includes(q);
          const matchesRaw = product.rawMaterial.toLowerCase().includes(q);
          const matchesTag = product.tags.some(t => t.toLowerCase().includes(q));
          if (!matchesName && !matchesDesc && !matchesRaw && !matchesTag) {
            return false;
          }
        }
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
  }, [selectedCategory, selectedRawMaterial, selectedGoal, searchQuery, sortBy, onlyAvailableInSelectedCountry, selectedCountry]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedRawMaterial('all');
    setSelectedGoal('all');
    setSearchQuery('');
    setSortBy('featured');
    setOnlyAvailableInSelectedCountry(false);
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedRawMaterial !== 'all' || selectedGoal !== 'all' || searchQuery !== '' || onlyAvailableInSelectedCountry;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10 pb-16">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: 'Catálogo de Productos HGW' }]} />

      {/* Page Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-md">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800 text-emerald-200 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
            Catálogo Oficial de 48 Productos HGW
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            Nutrición Celular, Salud Funcional y Bienestar Bioeléctrico
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
            Fórmulas bioactivas de <strong>Arándano azul, Ganoderma Lucidum, Turmalina y Cordyceps</strong>. Consulta el valor en puntos BV y accede al precio mayorista de socio con hasta el <strong>60% de descuento</strong>.
          </p>
        </div>
      </div>

      {/* Price & Delivery Notice Banner */}
      <div className="bg-gradient-to-r from-amber-50 via-emerald-50 to-teal-50 border border-amber-200/90 rounded-2xl p-4 sm:p-5 text-xs text-amber-950 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-200/80 flex items-center justify-center shrink-0 text-amber-900 font-bold text-base">
            $
          </div>
          <div className="space-y-0.5">
            <p className="font-bold text-amber-950">
              Observación de Precios y Tiempos de Entrega
            </p>
            <p className="text-slate-700 text-[11px] leading-relaxed">
              Los precios de lista están en <strong>USD</strong> como referencia base internacional. Al registrarte como socio obtienes <strong>del 30% al 60% de descuento</strong>. Envíos entre <strong>3 a 6 días hábiles</strong> según volumen y distancia. Los métodos de pago y envío varían según país.
            </p>
          </div>
        </div>

        <button
          onClick={() => openRegistrationModal('catalog_top_bar')}
          className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-xs shrink-0 cursor-pointer transition-colors"
        >
          Obtener Descuento de Socio
        </button>
      </div>

      {/* Quick Goal Selector */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Explorar por Objetivo de Salud & Estilo de Vida:
          </span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          {HEALTH_GOALS.map((goal) => (
            <button
              key={goal.id}
              onClick={() => {
                setSelectedGoal(goal.id);
                if (goal.id !== 'all') {
                  setSelectedCategory('all');
                  setSelectedRawMaterial('all');
                }
              }}
              className={`px-3 py-2 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedGoal === goal.id
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
              }`}
            >
              {goal.label}
            </button>
          ))}
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
              placeholder="Buscar por nombre, ingrediente o beneficio..."
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
                <option value="featured">Destacados HGW</option>
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
            onClick={() => { setSelectedCategory('all'); setSelectedGoal('all'); }}
            className={`px-3 py-1.5 rounded-xl font-bold transition-colors whitespace-nowrap cursor-pointer ${
              selectedCategory === 'all' && selectedGoal === 'all'
                ? 'bg-emerald-700 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Todas las Líneas ({HGW_PRODUCTS.length})
          </button>
          {CATEGORIES_INFO.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setSelectedCategory(cat.name); setSelectedGoal('all'); }}
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
            Ingrediente Clave:
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
              onClick={() => { setSelectedRawMaterial(mat); setSelectedGoal('all'); }}
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
        <span>Valores en USD (Precio Público vs. Precio Socio con Descuento)</span>
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

      {/* BV Points & Rank Savings Interactive Calculator */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 uppercase tracking-wider">
              <Calculator className="w-4 h-4" />
              Calculadora de Membresías & Puntos BV
            </div>
            <h2 className="text-xl font-bold text-slate-900">
              ¿Cómo maximizar tu ahorro y ganancias con los Puntos BV?
            </h2>
            <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
              Cada compra acumula puntos BV que te permiten calificar a un Rango de Membresía de por vida, sin recompra obligatoria mensual para mantener el estatus.
            </p>
          </div>

          {/* Combo Selector Buttons */}
          <div className="flex flex-wrap gap-2">
            {[
              { bv: 50, label: 'Pre-Junior (50 BV)', desc: '30% Desc.' },
              { bv: 100, label: 'Junior (100 BV)', desc: '30% Desc.' },
              { bv: 300, label: 'Senior (300 BV)', desc: '40% Desc.' },
              { bv: 600, label: 'Master (600 BV)', desc: '50%-60% Desc.' }
            ].map((combo) => (
              <button
                key={combo.bv}
                onClick={() => setCalcCombo(combo.bv)}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer text-left ${
                  calcCombo === combo.bv
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <div>{combo.label}</div>
                <div className="text-[10px] font-normal opacity-90">{combo.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Calculated Result Card */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl">
          <div className="space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase">Rango Alcanzado</span>
            <div className="text-lg font-extrabold text-emerald-950">
              {calcCombo === 50 && 'Pre-Junior'}
              {calcCombo === 100 && 'Junior'}
              {calcCombo === 300 && 'Senior'}
              {calcCombo === 600 && 'Master (Máximo Nivel)'}
            </div>
            <p className="text-[11px] text-slate-600">Membresía vitalicia</p>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase">Descuento de Socio</span>
            <div className="text-lg font-extrabold text-emerald-700">
              {calcCombo === 50 && '30% de Descuento'}
              {calcCombo === 100 && '30% de Descuento'}
              {calcCombo === 300 && '40% de Descuento'}
              {calcCombo === 600 && 'Hasta 60% de Descuento'}
            </div>
            <p className="text-[11px] text-slate-600">En todas tus recompras futuras</p>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase">Inversión Aprox.</span>
            <div className="text-lg font-extrabold text-slate-900">
              {calcCombo === 50 && '~$90 - $110 USD'}
              {calcCombo === 100 && '~$180 - $210 USD'}
              {calcCombo === 300 && '~$540 - $600 USD'}
              {calcCombo === 600 && '~$1,050 - $1,180 USD'}
            </div>
            <p className="text-[11px] text-slate-600">100% en productos a elección</p>
          </div>

          <div className="flex items-center">
            <button
              onClick={() => openRegistrationModal('calculator_cta')}
              className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <UserCheck className="w-4 h-4" />
              <span>Registrarme con {calcCombo} BV</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bioactive Ingredients Guide */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-md space-y-6">
        <div className="space-y-2 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            Ciencia & Fitoterapia Milenaria
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Pilares Bioactivos de los Productos HGW
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            HGW combina la biotecnología moderna con materias primas de la más alta pureza botánica y mineral para lograr nutrición celular profunda y equilibrio electromagnético.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 space-y-2">
            <div className="text-2xl">🫐</div>
            <h3 className="font-bold text-sm text-white">Arándano Azul Orgánico</h3>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Rico en antocianinas y flavonoides. Protege la retina ocular, combate radicales libres y fortalece los capilares vasculares.
            </p>
          </div>

          <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 space-y-2">
            <div className="text-2xl">🍄</div>
            <h3 className="font-bold text-sm text-white">Ganoderma Lucidum</h3>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              El hongo de la longevidad. Contiene polisacáridos y triterpenos adaptógenos que modulan el sistema inmunológico y el estrés.
            </p>
          </div>

          <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 space-y-2">
            <div className="text-2xl">🧲</div>
            <h3 className="font-bold text-sm text-white">Turmalina Bioeléctrica</h3>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Cristal piezoeléctrico que emite iones negativos e infrarrojo lejano para reactivar la microcirculación y disipar tensiones.
            </p>
          </div>

          <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 space-y-2">
            <div className="text-2xl">🌿</div>
            <h3 className="font-bold text-sm text-white">Smilax & Hierbas Orientales</h3>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Infusiones botánicas para cuidado íntimo femenino y digestivo, preservando el pH fisiológico y la flora protectora.
            </p>
          </div>
        </div>
      </div>

      {/* Quality Seals & Certifications */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Garantía de Calidad e Inocuidad
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Certificaciones Internacionales Oficiales
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Cada lote de producto es elaborado bajo los estándares farmacéuticos y alimentarios más exigentes del mundo.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-center">
          {[
            { title: 'FDA U.S.', desc: 'Registro en Estados Unidos', icon: '🏛️' },
            { title: 'ISO 9001', desc: 'Gestión de Calidad Global', icon: '📋' },
            { title: 'GMP', desc: 'Buenas Prácticas Manufactura', icon: '🏭' },
            { title: 'HACCP', desc: 'Seguridad Alimentaria', icon: '🛡️' },
            { title: 'HALAL', desc: 'Certificado de Pureza', icon: '🌙' },
            { title: 'GLOBAL G.A.P.', desc: 'Cultivo Orgánico', icon: '🌱' },
            { title: 'BPA FREE', desc: 'Empaques Libres de Tóxicos', icon: '♻️' }
          ].map((cert, idx) => (
            <div key={idx} className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-1">
              <div className="text-2xl">{cert.icon}</div>
              <div className="font-extrabold text-xs text-slate-900">{cert.title}</div>
              <div className="text-[10px] text-slate-500">{cert.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Product FAQs Accordion */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            Preguntas Frecuentes
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Dudas Comunes sobre Productos HGW y Compras
          </h2>
        </div>

        <div className="divide-y divide-slate-100">
          {FAQS_PRODUCTS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div key={index} className="py-3.5">
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left gap-4 font-bold text-xs sm:text-sm text-slate-800 hover:text-emerald-700 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-emerald-600 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                </button>
                {isOpen && (
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed pr-4">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* WhatsApp Help Banner */}
      <div className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <h3 className="text-xl font-bold text-white">
            ¿Deseas asesoría para elegir los productos ideales para ti?
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
            Escríbenos por WhatsApp y te orientamos sobre cómo combinar los productos según tu necesidad de salud y cómo comprarlos con precio de socio.
          </p>
        </div>
        <a
          href={`https://wa.me/${SITE_CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, deseo asesoría sobre los productos del catálogo HGW y cómo comprarlos con descuento de socio.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white text-emerald-950 hover:bg-emerald-50 font-extrabold text-xs rounded-xl shadow-xs transition-all flex items-center gap-2 shrink-0 cursor-pointer"
        >
          <span>Consultar por WhatsApp</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

    </div>
  );
};
