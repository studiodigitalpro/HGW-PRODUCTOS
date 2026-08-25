import React, { useEffect } from 'react';
import { 
  Truck, 
  Package, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  HelpCircle, 
  Phone,
  Globe,
  MessageCircle,
  Sparkles,
  Info
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HGW_COUNTRIES } from '../data/countriesData';
import { SITE_CONFIG } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { updatePageSEO } from '../utils/seo';

export const ShippingPage: React.FC = () => {
  const { selectedCountry, setSelectedCountry, navigate } = useApp();

  useEffect(() => {
    updatePageSEO({
      title: 'Políticas y Cobertura de Envíos HGW | Tiempos de Entrega',
      description: 'Guía de envíos de productos HGW para Latinoamérica e Hispanoamérica. Entregas entre 3 a 6 días hábiles según volumen y distancia.',
      canonicalUrl: 'https://hgwlatam.com/envios'
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10 pb-16">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: 'Guía y Políticas de Envíos' }]} />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-md">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800 text-emerald-200 text-xs font-bold uppercase tracking-wider">
            <Truck className="w-4 h-4 text-emerald-300" />
            Logística & Despachos Seguros
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            Políticas y Tiempos de Envío HGW
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
            Conoce los tiempos de entrega y cobertura para los 13 países oficiales HGW en Latinoamérica e Hispanoamérica.
          </p>
        </div>
      </div>

      {/* Main Notice Banner */}
      <div className="bg-emerald-50 border border-emerald-200/90 rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-xs">
            <Clock className="w-6 h-6" />
          </div>
          <div className="space-y-2 flex-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
              Tiempo Estándar de Despacho
            </span>
            <h2 className="text-xl font-bold text-slate-900">
              Entrega entre 3 a 6 días hábiles
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Los pedidos se procesan y entregan en un lapso estimado de <strong>3 a 6 días hábiles</strong>, dependiendo exclusivamente del <strong>volumen de pedidos y la distancia geográfica</strong> hasta el destino de entrega.
            </p>
            <p className="text-xs text-slate-600 font-medium">
              📌 <em>Nota importante: Los métodos de pagos y envíos varían según país.</em>
            </p>
          </div>
        </div>
      </div>

      {/* 3 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5 text-emerald-700" />
          </div>
          <h3 className="font-bold text-sm text-slate-900">Embalaje y Sellado de Fábrica</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Todos los productos son despachados en cajas selladas con precinto de seguridad que garantizan la autenticidad e inocuidad de cada fórmula.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <Clock className="w-5 h-5 text-emerald-700" />
          </div>
          <h3 className="font-bold text-sm text-slate-900">3 a 6 Días Hábiles</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Tiempo de entrega calculado en función de la distancia y el volumen de órdenes en curso al momento de confirmar el pago.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <MapPin className="w-5 h-5 text-emerald-700" />
          </div>
          <h3 className="font-bold text-sm text-slate-900">Cobertura Nacional en 13 Países</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Despachos a domicilio o retiro directo en las oficinas oficiales autorizadas de tu país.
          </p>
        </div>
      </div>

      {/* Country Breakdown Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Cobertura por País HGW Latinoamerica
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Países autorizados: Perú, México, Colombia, Bolivia, Ecuador, Chile, El Salvador, Panamá, España, Guatemala, Paraguay, República Dominicana y Costa Rica.
            </p>
          </div>
          <span className="px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full text-xs font-bold shrink-0">
            13 Países Oficiales
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-50 text-[11px] uppercase font-bold text-slate-500 tracking-wider">
              <tr>
                <th className="p-4">País</th>
                <th className="p-4">Tiempo Estimado</th>
                <th className="p-4">Retiro en Oficinas</th>
                <th className="p-4">Condición de Envío</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {HGW_COUNTRIES.map((country) => (
                <tr key={country.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-bold text-slate-900 flex items-center gap-2">
                    <span className="text-xl">{country.flag}</span>
                    <span>{country.name}</span>
                  </td>
                  <td className="p-4">
                    <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">
                      3 a 6 días hábiles
                    </span>
                  </td>
                  <td className="p-4">
                    {country.hasOfficialOffice ? (
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Disponible ({country.officesCount} {country.officesCount === 1 ? 'sede' : 'sedes'})
                      </span>
                    ) : (
                      <span className="text-slate-400">Despacho a domicilio</span>
                    )}
                  </td>
                  <td className="p-4 text-slate-600">
                    Sujeto a volumen de pedidos y distancia. Métodos y tarifas varían según país.
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Help Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-emerald-950 text-white rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <h3 className="text-xl font-bold text-white">
            ¿Tienes dudas sobre el envío de tu orden?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Escríbenos por WhatsApp indicando tu número de usuario o país de destino para brindarte asistencia personalizada sobre tu despacho.
          </p>
        </div>
        <a
          href={`https://wa.me/${SITE_CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, deseo consultar sobre el estado de envío de productos HGW en mi país.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-2 shrink-0 cursor-pointer"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Consultar por WhatsApp</span>
        </a>
      </div>

    </div>
  );
};
