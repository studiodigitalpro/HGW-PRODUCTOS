import React, { useEffect } from 'react';
import { 
  Sparkles, 
  PlayCircle, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Globe, 
  Award, 
  TrendingUp, 
  Layers, 
  Package, 
  Users, 
  MessageCircle,
  Truck,
  CreditCard,
  Building2,
  BookOpen
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SITE_CONFIG } from '../config/siteConfig';
import { HGW_PRODUCTS, getFeaturedProducts, CATEGORIES_INFO } from '../data/productsData';
import { MEMBERSHIP_TIERS } from '../data/membershipsData';
import { HGW_COUNTRIES } from '../data/countriesData';
import { HGW_ARTICLES } from '../data/blogData';
import { ProductCard } from '../components/ProductCard';
import { updatePageSEO } from '../utils/seo';
import { getDriveUrl, HGW_DRIVE_ASSETS } from '../utils/driveImages';

export const HomePage: React.FC = () => {
  const { 
    navigate, 
    openRegistrationModal, 
    selectedCountry, 
    formatCurrency 
  } = useApp();

  useEffect(() => {
    updatePageSEO({
      title: 'Productos HGW Oficiales en Latinoamérica y USA | Catálogo y Membresías',
      description: 'Descubre el catálogo oficial de productos HGW (Health Green World). Arándanos, Ganoderma Lucidum, Turmalina, Colágeno y Membresías con 30% a 60% de descuento.',
      canonicalUrl: 'https://hgwlatam.com/inicio'
    });
  }, []);

  const featuredProducts = getFeaturedProducts();

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-slate-900 text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
        {/* Subtle Background Glow Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute -top-24 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-10 w-80 h-80 bg-teal-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-700/60 text-emerald-200 text-xs font-semibold backdrop-blur-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Distribuidor Independiente Autorizado • Patrocinador: <strong className="text-amber-300 font-mono">{SITE_CONFIG.SPONSOR_CODE}</strong></span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Salud, Bienestar y Biotecnología con <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-300">Productos HGW</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Descubre el poder de los <strong>Arándanos silvestres</strong>, el <strong>Ganoderma Lucidum</strong> y la <strong>Turmalina bioeléctrica</strong>. Compra como cliente con asesoría directa o activa tu código de socio para obtener de un <strong>30% a un 60% de descuento</strong>.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                <button
                  id="hero-explore-products-btn"
                  onClick={() => navigate('/productos')}
                  className="w-full sm:w-auto px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Package className="w-4 h-4" />
                  <span>Explorar Catálogo (48 Productos)</span>
                </button>

                <button
                  id="hero-watch-tutorial-btn"
                  onClick={() => openRegistrationModal('hero')}
                  className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl border border-white/20 backdrop-blur-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <PlayCircle className="w-4 h-4 text-amber-300" />
                  <span>Video Tutorial de Registro</span>
                </button>

                <button
                  id="hero-view-memberships-btn"
                  onClick={() => navigate('/membresias')}
                  className="w-full sm:w-auto px-5 py-3.5 text-xs font-semibold text-emerald-200 hover:text-white transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Ver Membresías</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Mini Stats Bar */}
              <div className="pt-6 border-t border-emerald-800/60 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">31+ Años</div>
                  <div className="text-[11px] text-emerald-300">Trayectoria Internacional</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-amber-300">30% - 60%</div>
                  <div className="text-[11px] text-emerald-300">Descuento a Socios</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-teal-300">69+ Países</div>
                  <div className="text-[11px] text-emerald-300">Presencia y Red Global</div>
                </div>
              </div>
            </div>

            {/* Right Card / Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-b from-white/15 to-white/5 border border-white/20 rounded-3xl p-6 backdrop-blur-md shadow-2xl space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1">
                    <Sparkles className="w-4 h-4" /> Producto Estrella Destacado
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500 text-slate-950 font-bold">
                    10.00 BV
                  </span>
                </div>

                <div className="h-52 bg-emerald-900/40 rounded-2xl p-4 flex items-center justify-center relative overflow-hidden group">
                  <img
                    src={getDriveUrl(HGW_DRIVE_ASSETS.blueberryCandyJpg)}
                    alt="Blueberry Candy Caramelos de Arándano HGW"
                    className="max-h-full max-w-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="font-bold text-lg text-white">
                    Blueberry Candy (Caramelos de Arándano)
                  </h3>
                  <p className="text-xs text-emerald-100/80 line-clamp-2">
                    Extracto concentrado de arándano silvestre rico en antocianinas. Protege la retina ocular, combate la fatiga visual y neutraliza radicales libres.
                  </p>
                </div>

                <div className="bg-emerald-950/70 rounded-xl p-3 border border-emerald-700/50 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-400 text-[11px]">Precio Público:</span>
                    <div className="font-bold text-white text-sm">$22.00 USD</div>
                  </div>
                  <div className="text-right">
                    <span className="text-emerald-300 font-bold text-[11px]">Precio Socio (-30%):</span>
                    <div className="font-extrabold text-amber-300 text-base">$15.40 USD</div>
                  </div>
                </div>

                <button
                  onClick={() => navigate('/productos/blueberry-candy-caramelos-de-arandano')}
                  className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Ver Información y Comprar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. HOW THIS PLATFORM WORKS (CLEAR MODEL - NO CART) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-700">
              Transparencia y Seguridad
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">
              ¿Cómo Funciona Nuestra Plataforma Sin Carrito de Compras?
            </h2>
            <p className="text-xs text-slate-600 mt-2">
              Facilitamos el acceso directo a los productos originales HGW en más de 20 países con despacho oficial garantizado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs">
            {/* Step 1 */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-base">
                1
              </div>
              <h3 className="font-bold text-sm text-slate-900">Explora y Elige</h3>
              <p className="text-slate-600 leading-relaxed">
                Revisa ingredientes, beneficios y precios públicos o de socio con sus respectivos puntos BV.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-base">
                2
              </div>
              <h3 className="font-bold text-sm text-slate-900">Elige tu Modalidad</h3>
              <p className="text-slate-600 leading-relaxed">
                Haz clic en "Quiero este producto" y decide si deseas comprar como cliente o registrarte como distribuidor.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-base">
                3
              </div>
              <h3 className="font-bold text-sm text-slate-900">Atención Personalizada</h3>
              <p className="text-slate-600 leading-relaxed">
                Conecta al WhatsApp oficial de {selectedCountry.name} para coordinar tu envío o retira en una oficina autorizada.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-base">
                4
              </div>
              <h3 className="font-bold text-sm text-slate-900">Recibe 100% Original</h3>
              <p className="text-slate-600 leading-relaxed">
                Paga de forma segura mediante métodos locales bancarios y recibe con paquetería express sellada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CATEGORIES HIGHLIGHT GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-700">
              Líneas de Bienestar
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Categorías de Productos HGW
            </h2>
          </div>
          <button
            onClick={() => navigate('/categorias')}
            className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
          >
            <span>Ver todas las categorías</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CATEGORIES_INFO.slice(0, 5).map((cat) => (
            <div
              key={cat.id}
              onClick={() => navigate(`/categorias/${cat.slug}`)}
              className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Package className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-emerald-800 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 line-clamp-2 mt-1">
                    {cat.description}
                  </p>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-emerald-700 font-semibold">
                <span>{cat.productCount} Productos</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS (ESTRELLAS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-700">
              Más Vendidos y Recomendados
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Productos Estrella HGW
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Mostrando disponibilidad y moneda para: <strong className="text-emerald-800">{selectedCountry.flag} {selectedCountry.name}</strong>
            </p>
          </div>

          <button
            onClick={() => navigate('/productos')}
            className="px-4 py-2 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 self-start sm:self-auto"
          >
            <span>Ver Catálogo Completo (48)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 5. MEMBERSHIP TIERS (PREJUNIOR, JUNIOR, SENIOR, MASTER) */}
      <section className="bg-gradient-to-b from-slate-900 to-emerald-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Plan de Compensación & Ganancia Mutua
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Conviértete en Socio HGW y Ahorra de un 30% a un 60%
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Elige tu paquete de membresía inicial en productos de tu libre elección. Sin cuotas de renovación anual forzosas y con un plan de 8 bonos de comisiones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MEMBERSHIP_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`bg-slate-800/80 rounded-3xl p-6 border flex flex-col justify-between transition-all duration-300 relative ${
                  tier.popular
                    ? 'border-amber-400 ring-2 ring-amber-400/30 shadow-xl lg:-translate-y-2'
                    : 'border-slate-700/80 hover:border-emerald-500/50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    ★ Más Recomendado
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">{tier.name}</h3>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-2xl font-black text-amber-300">{tier.bvRequirement} BV</span>
                      <span className="text-xs text-slate-400">{tier.approxUsdCost}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-700 text-xs">
                    <div className="flex items-center justify-between text-slate-300">
                      <span>Descuento Activación:</span>
                      <span className="font-bold text-white">{tier.retailDiscount}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span>Descuento Recompra:</span>
                      <span className="font-bold text-emerald-400">{tier.repurchaseDiscount}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span>Bono de Equipo:</span>
                      <span className="font-bold text-amber-300">{tier.teamBonusPercent}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span>Tope Diario:</span>
                      <span className="font-bold text-white">Hasta ${tier.dailyCapUsd} USD/día</span>
                    </div>
                  </div>

                  <ul className="space-y-2 pt-3 border-t border-slate-700/60 text-[11px] text-slate-300">
                    {tier.features.slice(0, 4).map((f, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-4">
                  <button
                    id={`membership-btn-${tier.id}`}
                    onClick={() => openRegistrationModal(`home_membership_${tier.id}`)}
                    className={`w-full py-3 px-4 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      tier.popular
                        ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md'
                        : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                    }`}
                  >
                    <span>Elegir Membresía</span>
                    <PlayCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/membresias')}
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-300 hover:text-white underline cursor-pointer"
            >
              <span>Ver análisis detallado del Plan de 8 Bonos y Rangos de Liderazgo HGW</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. COUNTRIES & GLOBAL PRESENCE BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-800">
                Red Internacional
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                Disponibilidad Oficial en Toda América
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Operamos formalmente con oficinas centrales, sedes autorizadas y alianzas con los principales operadores logísticos del continente.
              </p>
              <button
                onClick={() => navigate('/paises')}
                className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Globe className="w-4 h-4" />
                <span>Explorar Todos los Países (20)</span>
              </button>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                {HGW_COUNTRIES.slice(0, 8).map((c) => (
                  <div
                    key={c.id}
                    onClick={() => navigate(`/paises/${c.slug}`)}
                    className="p-3 bg-white rounded-xl border border-slate-200/80 hover:border-emerald-400 hover:shadow-xs transition-all cursor-pointer flex items-center gap-2.5"
                  >
                    <span className="text-xl">{c.flag}</span>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs">{c.name}</h4>
                      <p className="text-[10px] text-slate-500 font-mono">{c.currencyCode}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SCIENTIFIC BLOG PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-700">
              Ciencia & Bienestar
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Artículos y Guías Científicas HGW
            </h2>
          </div>
          <button
            onClick={() => navigate('/blog')}
            className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
          >
            <span>Ver todos los artículos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HGW_ARTICLES.map((art) => (
            <div
              key={art.id}
              onClick={() => navigate(`/blog/${art.slug}`)}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="h-44 overflow-hidden bg-slate-100">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    {art.category}
                  </span>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-emerald-800 transition-colors line-clamp-2 leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between text-[11px] text-slate-400">
                <span>{art.readTime}</span>
                <span className="font-bold text-emerald-700 flex items-center gap-1">
                  Leer Guía <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. QUICK FAQ & SUPPORT TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              ¿Tienes Preguntas sobre Productos o Membresías?
            </span>
            <h2 className="text-2xl font-bold text-white">
              Estamos Listos para Asesorarte Directamente
            </h2>
            <p className="text-xs text-slate-300 max-w-xl">
              Nuestro equipo de soporte y distribuidores autorizados te guiará en la elección de productos, opciones de entrega y el proceso de registro oficial.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={() => navigate('/preguntas-frecuentes')}
              className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 transition-colors cursor-pointer"
            >
              Preguntas Frecuentes
            </button>
            <a
              href={SITE_CONFIG.WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chatear por WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
