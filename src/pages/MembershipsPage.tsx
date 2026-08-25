import React, { useEffect } from 'react';
import { 
  Award, 
  Sparkles, 
  CheckCircle2, 
  PlayCircle, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  DollarSign, 
  Gift, 
  Zap, 
  ArrowRight,
  HelpCircle,
  Check
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SITE_CONFIG } from '../config/siteConfig';
import { MEMBERSHIP_TIERS, HGW_BONUSES, HGW_RANKS, DIRECT_SELLING_ASSOCIATIONS } from '../data/membershipsData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { updatePageSEO } from '../utils/seo';

export const MembershipsPage: React.FC = () => {
  const { openRegistrationModal, navigate } = useApp();

  useEffect(() => {
    updatePageSEO({
      title: 'Membresías HGW y Plan de Compensación | Ganancia Mutua y 8 Bonos',
      description: 'Conoce los 4 paquetes de membresía HGW: PreJunior (50 BV), Junior (100 BV), Senior (300 BV) y Master (600 BV). Descuentos de hasta el 60% y plan de 8 bonos.',
      canonicalUrl: 'https://hgwlatam.com/membresias'
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-12 pb-16">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: 'Membresías y Negocio HGW' }]} />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-teal-950 text-white rounded-3xl p-8 sm:p-12 shadow-lg relative overflow-hidden">
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4" />
            Plan de Compensación Mundial HGW
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Membresías Oficiales & Plan de Ganancia Mutua
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Actívate con productos de tu preferencia, accede al <strong>30% a 60% de descuento</strong> en recompras continuas y participa en el sistema de bonificación más justo de la industria del Network Marketing internacional.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => openRegistrationModal('memberships_header')}
              className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <PlayCircle className="w-4 h-4" />
              <span>Ver Tutorial de Registro en Video</span>
            </button>
            <button
              onClick={() => navigate('/tutorial-registro')}
              className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/20 transition-colors cursor-pointer"
            >
              Guía Paso a Paso de Registro
            </button>
          </div>
        </div>
      </div>

      {/* 1. THE 4 MEMBERSHIP TIERS */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-700">
            Niveles de Activación
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Elige el Paquete de Membresía Ideal para Ti
          </h2>
          <p className="text-xs text-slate-500">
            Todos los paquetes te permiten elegir libremente los productos HGW que deseas para tu consumo o venta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEMBERSHIP_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`bg-white rounded-3xl p-6 border shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative ${
                tier.popular
                  ? 'border-amber-400 ring-2 ring-amber-400/40 lg:-translate-y-2'
                  : 'border-slate-200'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-[10px] uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                  ★ Paquete Recomendado
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Membresía Oficial
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">{tier.name}</h3>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-3xl font-black text-emerald-800">{tier.bvRequirement} BV</span>
                    <span className="text-xs font-semibold text-slate-500">{tier.approxUsdCost}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {tier.description}
                </p>

                <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Descuento Activación:</span>
                    <span className="font-bold text-slate-900">{tier.retailDiscount}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Descuento Recompra:</span>
                    <span className="font-extrabold text-emerald-700">{tier.repurchaseDiscount}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Bono de Equipo:</span>
                    <span className="font-bold text-amber-600">{tier.teamBonusPercent}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Tope Diario:</span>
                    <span className="font-bold text-slate-900">${tier.dailyCapUsd} USD/día</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Bono Elite:</span>
                    <span className="font-semibold text-slate-700">{tier.eliteBonusLevels}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-slate-700">Incluye:</div>
                  <ul className="space-y-1.5 text-[11px] text-slate-600">
                    {tier.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-4">
                <button
                  id={`choose-tier-btn-${tier.id}`}
                  onClick={() => openRegistrationModal(`membership_page_${tier.id}`)}
                  className={`w-full py-3.5 px-4 font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    tier.popular
                      ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-amber-400/20'
                      : 'bg-emerald-700 hover:bg-emerald-800 text-white'
                  }`}
                >
                  <Award className="w-4 h-4" />
                  <span>Elegir {tier.name}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. THE 8 OFFICIAL BONUSES */}
      <section className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200/80 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-700">
            Estructura de Comisiones
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Los 8 Bonos del Plan de Compensación HGW
          </h2>
          <p className="text-xs text-slate-500">
            Un modelo híbrido revolucionario diseñado para recompensar la fidelidad del consumidor, la venta minorista y el liderazgo en red.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HGW_BONUSES.map((b) => (
            <div key={b.number} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono font-extrabold text-sm text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
                  Bono {b.number}
                </span>
                <span className="font-bold text-xs text-amber-600 font-mono">
                  {b.percentage}
                </span>
              </div>
              <h3 className="font-bold text-sm text-slate-900 leading-snug">
                {b.name}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MUTUAL PROFIT (GANANCIA MUTUA) EXPLAINER */}
      <section className="bg-gradient-to-r from-emerald-900 to-teal-950 text-white rounded-3xl p-8 sm:p-10 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Innovación Exclusiva HGW
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              ¿Qué es el Plan de Ganancia Mutua?
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              En los sistemas multinivel tradicionales, los distribuidores compiten entre sí o solo ganan de quienes están debajo de ellos en su red descendente.
            </p>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              En HGW, gracias al <strong>Plan de Ganancia Mutua</strong>:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
              <div className="p-3 bg-white/10 rounded-xl border border-white/10 space-y-1">
                <div className="font-bold text-amber-300">50% Compartido en Bono de Equipo:</div>
                <p className="text-emerald-100/80 text-[11px]">
                  Cada dólar generado en Bono de Equipo se reparte 50% para el afiliado y 50% para su patrocinador ascendente directo.
                </p>
              </div>
              <div className="p-3 bg-white/10 rounded-xl border border-white/10 space-y-1">
                <div className="font-bold text-amber-300">Derrame de Recompras (2.5%):</div>
                <p className="text-emerald-100/80 text-[11px]">
                  Recibes el 2.5% de las recompras de la red colocada por tu patrocinador después de ti, fomentando la cooperación real.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white/10 border border-white/20 rounded-2xl p-6 text-center space-y-4 backdrop-blur-xs">
            <div className="w-14 h-14 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-2xl mx-auto shadow-md">
              50%
            </div>
            <h3 className="font-bold text-base text-white">
              Ganas con tu Equipo y con tu Línea Ascendente
            </h3>
            <p className="text-xs text-slate-300">
              Un modelo justo y sostenible certificado por asociaciones de venta directa en América.
            </p>
            <button
              onClick={() => openRegistrationModal('mutual_profit_explainer')}
              className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition-colors cursor-pointer"
            >
              Registrarme con este Plan
            </button>
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP CAREER PATH (RANGOS) */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-700">
            Crecimiento y Liderazgo
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Escalera de Rangos y Reconocimiento
          </h2>
          <p className="text-xs text-slate-500">
            Acumula ganancias y apoya a tus socios directos para alcanzar los más altos honores internacionales de Green World.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {HGW_RANKS.map((r, idx) => (
            <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
              <div className="text-2xl shrink-0">{r.badge}</div>
              <div>
                <h4 className="font-bold text-xs text-slate-900">{r.name}</h4>
                <p className="text-[10px] text-slate-500">{r.req}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. BACKING ASSOCIATIONS & DISCLAIMER */}
      <section className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 space-y-6 text-xs text-slate-600">
        <div>
          <h3 className="font-bold text-slate-900 text-sm mb-2">Respaldo Gremial e Institucional:</h3>
          <div className="flex flex-wrap gap-2">
            {DIRECT_SELLING_ASSOCIATIONS.map((assoc, i) => (
              <span key={i} className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 font-medium text-slate-700">
                {assoc}
              </span>
            ))}
          </div>
        </div>

        <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200/80 text-[11px] text-amber-950 leading-relaxed">
          <strong className="font-bold">Aviso Legal y Descargo sobre Ingresos: </strong>
          {SITE_CONFIG.DISCLAIMER}
        </div>
      </section>

    </div>
  );
};
