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
  ArrowRight
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
      title: 'Métodos de Pago Oficiales HGW | Transferencias Locales y Tarjetas',
      description: 'Conoce los medios de pago aceptados para compras y activaciones HGW: Yappy, Nequi, PSE, Yape, Plin, SPEI, SINPE Móvil y tarjetas de crédito.',
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
            Métodos de Pago Oficiales por País
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Facilitamos tu compra o afiliación mediante las plataformas bancarias, billeteras digitales y pasarelas de pago más seguras y populares de cada país.
          </p>
        </div>
      </div>

      {/* Payment Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Smartphone className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-base text-slate-900">Billeteras Móviles & Pagos Rápidos</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Pagos instantáneos sin comisiones bancarias: <strong>Yappy</strong> (Panamá), <strong>Yape y Plin</strong> (Perú), <strong>Nequi y Daviplata</strong> (Colombia), <strong>SINPE Móvil</strong> (Costa Rica).
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Building className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-base text-slate-900">Transferencias Bancarias Locales</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Cuentas corporativas y autorizadas para transferencias directas ACH, SPEI (México), PSE (Colombia) y depósitos en ventanilla en bancos autorizados.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <CreditCard className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-base text-slate-900">Tarjetas de Crédito & Débito</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Aceptación de tarjetas Visa, Mastercard, American Express y pagos con links seguros de pasarelas locales o directamente en el portal corporativo HGW.
          </p>
        </div>
      </div>

      {/* Country Specific Payment Directory */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-slate-900">
          Medios de Pago por País
        </h2>

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

              <div className="flex flex-wrap gap-1.5 pt-1">
                {c.paymentMethods.map((pm, idx) => (
                  <span key={idx} className="px-2 py-1 bg-white rounded-md text-[11px] font-semibold text-slate-700 border border-slate-200">
                    {pm}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security Callout */}
      <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Lock className="w-8 h-8 text-emerald-700 shrink-0" />
          <div>
            <h4 className="font-bold text-sm text-emerald-950">Validación y Comprobantes Seguros</h4>
            <p className="text-xs text-slate-600">
              Siempre enviamos el comprobante oficial de compra y el código de seguimiento de paquetería inmediatamente tras confirmar tu abono.
            </p>
          </div>
        </div>

        <a
          href={SITE_CONFIG.WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors whitespace-nowrap"
        >
          Consultar Cuentas por WhatsApp
        </a>
      </div>

    </div>
  );
};
