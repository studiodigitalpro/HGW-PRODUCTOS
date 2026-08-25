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
  Globe
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
      title: 'Políticas y Cobertura de Envíos HGW | Tiempos y Paqueterías',
      description: 'Guía de envíos nacionales e internacionales de productos HGW. Envíos express por Servientrega, Shalom, Olva, Coordinadora, Estafeta y DHL.',
      canonicalUrl: 'https://hgwlatam.com/envios'
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10 pb-16">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: 'Guía y Políticas de Envíos' }]} />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 to-teal-900 text-white rounded-3xl p-8 sm:p-10 shadow-md">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800 text-emerald-200 text-xs font-bold uppercase tracking-wider">
            <Truck className="w-4 h-4 text-emerald-300" />
            Logística & Entregas Seguras
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            Guía de Envíos y Cobertura Nacional e Internacional
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
            Conoce los tiempos de entrega, costos de despacho y empresas de paquetería aliadas en cada país de América Latina y Estados Unidos.
          </p>
        </div>
      </div>

      {/* 3 Guarantees */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5 text-emerald-700" />
          </div>
          <h3 className="font-bold text-sm text-slate-900">Embalaje y Sellado de Fábrica</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Todos los pedidos son despachados en cajas y sobres sellados con precinto de seguridad para garantizar la autenticidad e inocuidad del producto.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <Clock className="w-5 h-5 text-emerald-700" />
          </div>
          <h3 className="font-bold text-sm text-slate-900">Entregas de 24 a 72 Horas</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Envíos en ciudades principales se procesan el mismo día o al día siguiente hábil; para provincias o zonas rurales de 48 a 72 horas.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <MapPin className="w-5 h-5 text-emerald-700" />
          </div>
          <h3 className="font-bold text-sm text-slate-900">Número de Rastreo en Tiempo Real</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Al momento del despacho, nuestro equipo te comparte la foto de la guía con el número de seguimiento de la empresa de mensajería correspondiente.
          </p>
        </div>
      </div>

      {/* Country Breakdown Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h2 className="text-lg font-bold text-slate-900">
            Detalle Logístico por País
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Consulta los couriers oficiales y costos estándar para cada mercado:
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-50 text-[11px] uppercase font-bold text-slate-500 tracking-wider">
              <tr>
                <th className="p-4">País</th>
                <th className="p-4">Empresa de Envío</th>
                <th className="p-4">Costo Estimado</th>
                <th className="p-4">Tiempo de Entrega</th>
                <th className="p-4 text-right">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {HGW_COUNTRIES.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-bold text-slate-900 flex items-center gap-2">
                    <span className="text-lg">{c.flag}</span>
                    <span>{c.name}</span>
                  </td>
                  <td className="p-4 font-medium text-emerald-800">
                    {c.shippingCourier}
                  </td>
                  <td className="p-4 text-slate-600">
                    {c.shippingNotes}
                  </td>
                  <td className="p-4 text-slate-600">
                    {c.shippingTime}
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => navigate(`/paises/${c.slug}`)}
                      className="px-3 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                    >
                      Ver Detalles
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
