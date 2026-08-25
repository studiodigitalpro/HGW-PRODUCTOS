import React, { useEffect } from 'react';
import { 
  CreditCard, 
  ShieldCheck, 
  CheckCircle2, 
  Building, 
  Smartphone, 
  Coins, 
  Lock,
  MessageCircle,
  ArrowRight,
  Info,
  Clock
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HGW_COUNTRIES } from '../data/countriesData';
import { SITE_CONFIG } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { updatePageSEO } from '../utils/seo';

export const PaymentsPage: React.FC = () => {
  const { navigate } = useApp();

  useEffect(() => {
    updatePageSEO({
      title: 'Métodos de Pago Oficiales HGW | Por País y Modalidad',
      description: 'Conoce los medios de pago aceptados para compras y activaciones HGW en Latinoamérica y España. Los métodos de pago y envíos varían según cada país.',
      canonicalUrl: 'https://hgwlatam.com/pagos'
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10 pb-16">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: 'Métodos de Pago Aceptados' }]} />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-teal-950 text-white rounded-3xl p-8 sm:p-10 shadow-md">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800 text-emerald-200 text-xs font-bold uppercase tracking-wider">
            <CreditCard className="w-4 h-4 text-emerald-300" />
            Transacciones Seguras y Verificadas
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            Métodos de Pago Oficiales HGW
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Opciones de pago seguras disponibles en los 13 países oficiales HGW Latinoamérica e Hispanoamérica.
          </p>
        </div>
      </div>

      {/* Key Notice */}
      <div className="bg-amber-50 border border-amber-200/90 rounded-3xl p-6 sm:p-8 space-y-2">
        <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
          <Info className="w-5 h-5 text-amber-700 shrink-0" />
          <span>Información Importante sobre Pagos y Despachos</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          <strong>Los métodos de pagos y envíos varían según país.</strong> Cada sede u oficina oficial procesa las transacciones mediante las pasarelas bancarias y billeteras móviles locales autorizadas.
        </p>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Recuerda que los envíos se entregan entre <strong>3 a 6 días hábiles</strong> dependiendo del volumen de pedidos y la distancia.
        </p>
      </div>

      {/* Payment Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Smartphone className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-base text-slate-900">Billeteras Móviles & Pagos Rápidos</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Pagos rápidos locales: <strong>Yappy</strong> (Panamá), <strong>Yape y Plin</strong> (Perú), <strong>Nequi y Daviplata</strong> (Colombia), <strong>SINPE Móvil</strong> (Costa Rica), <strong>QR Simple</strong> (Bolivia), <strong>Bizum</strong> (España).
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Building className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-base text-slate-900">Transferencias Bancarias Locales</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Cuentas corporativas bancarias para transferencias directas ACH, SPEI (México), PSE (Colombia) y depósitos en bancos autorizados de cada país.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <CreditCard className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-base text-slate-900">Tarjetas de Crédito & Débito</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Aceptación de tarjetas Visa, Mastercard y pagos directos en el portal corporativo HGW o en la caja física de las oficinas oficiales.
          </p>
        </div>
      </div>

      {/* Country Specific Payment Directory */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Medios de Pago por País (13 Países Oficiales)
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Consulta las opciones bancarias y digitales según tu país de residencia:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {HGW_COUNTRIES.map((c) => (
            <div key={c.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{c.flag}</span>
                <div>
                  <h3 className="font-bold text-xs text-slate-900">{c.name}</h3>
                  <span className="text-[10px] text-slate-500 font-mono font-medium">{c.currencyName} ({c.currencyCode})</span>
                </div>
              </div>

              <div className="space-y-1.5 pt-1 border-t border-slate-200/60">
                {c.paymentMethods.map((m, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="font-medium text-[11px]">{m}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[10px] text-slate-500">
                <span>⏱️ Entregas: 3 a 6 días hábiles</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Help Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-emerald-950 text-white rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <h3 className="text-xl font-bold text-white">
            ¿Necesitas ayuda con los datos bancarios de tu país?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Escríbenos por WhatsApp y te compartimos de inmediato las cuentas bancarias autorizadas o el enlace seguro de pago de HGW.
          </p>
        </div>
        <a
          href={`https://wa.me/${SITE_CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, deseo conocer los datos y números de cuenta autorizados para pagar mis productos HGW.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-2 shrink-0 cursor-pointer"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Solicitar Cuentas por WhatsApp</span>
        </a>
      </div>

    </div>
  );
};
