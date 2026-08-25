import React, { useEffect } from 'react';
import { 
  ShoppingBag, 
  UserCheck, 
  HelpCircle, 
  MessageCircle, 
  Truck, 
  ShieldCheck, 
  PlayCircle, 
  CheckCircle2, 
  ArrowRight,
  MapPin,
  Sparkles
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SITE_CONFIG } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { updatePageSEO } from '../utils/seo';

export const HowItWorksPage: React.FC = () => {
  const { navigate, openRegistrationModal, selectedCountry } = useApp();

  useEffect(() => {
    updatePageSEO({
      title: 'Cómo Funciona Nuestra Plataforma HGW | Sin Carrito de Compras',
      description: 'Descubre cómo comprar productos HGW como cliente con entrega directa o cómo registrarte como socio distribuidor con descuentos del 30% al 60%.',
      canonicalUrl: 'https://hgwlatam.com/como-funciona'
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10 pb-16">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: 'Cómo Funciona la Plataforma' }]} />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white rounded-3xl p-8 sm:p-10 shadow-md">
        <div className="max-w-3xl space-y-3">
          <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-300">
            Transparencia y Operación Directa
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            ¿Por Qué Nuestra Plataforma Funciona Sin Carrito de Compras?
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
            Operamos como un catálogo oficial consultivo e informativo para toda América Latina. Conectamos directamente a cada usuario con la sede oficial, paquetería express autorizada o el sistema de registro de socios en su país correspondiente.
          </p>
        </div>
      </div>

      {/* TWO DISTINCT PATHS (CLIENT VS PARTNER) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* PATH A: CLIENTE */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Ruta 1</span>
                <h2 className="text-xl font-bold text-slate-900">Comprar como Cliente</h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Ideal para personas que desean probar productos específicos de HGW (arándanos, café con ganoderma, fajas de turmalina, colágeno) al precio público oficial sin compromisos de afiliación.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                <div className="font-bold text-xs text-slate-900 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold inline-flex items-center justify-center text-[10px]">1</span>
                  Explora el catálogo y elige tus productos
                </div>
                <p className="text-[11px] text-slate-500 pl-7">
                  Revisa fotos, ingredientes, modo de uso y precio en moneda local para tu país.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                <div className="font-bold text-xs text-slate-900 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold inline-flex items-center justify-center text-[10px]">2</span>
                  Haz clic en "Quiero este producto" → Modalidad Cliente
                </div>
                <p className="text-[11px] text-slate-500 pl-7">
                  Se abrirá el canal directo de WhatsApp oficial con el mensaje prellenado del producto seleccionado.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                <div className="font-bold text-xs text-slate-900 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold inline-flex items-center justify-center text-[10px]">3</span>
                  Coordina envío o retiro en oficina autorizada
                </div>
                <p className="text-[11px] text-slate-500 pl-7">
                  Paga a través de transferencias bancarias locales (Yappy, Nequi, Yape, SPEI) o retira en sede física.
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate('/productos')}
            className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Explorar Productos para Comprar</span>
          </button>
        </div>

        {/* PATH B: SOCIO / DISTRIBUIDOR */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-md flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">Ruta 2</span>
                <h2 className="text-xl font-bold text-white">Registrarme como Socio HGW</h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Para emprendedores y consumidores recurrentes que desean adquirir productos con <strong>30% a 60% de descuento</strong>, acumular BV y generar ingresos a través del Plan de Ganancia Mutua.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-3.5 bg-slate-800 rounded-xl border border-slate-700 space-y-1">
                <div className="font-bold text-xs text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 font-bold inline-flex items-center justify-center text-[10px]">1</span>
                  Mira el Video Tutorial de Registro
                </div>
                <p className="text-[11px] text-slate-400 pl-7">
                  Aprende en 3 minutos cómo ingresar al portal oficial, seleccionar país e ingresar los datos del patrocinador.
                </p>
              </div>

              <div className="p-3.5 bg-slate-800 rounded-xl border border-slate-700 space-y-1">
                <div className="font-bold text-xs text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 font-bold inline-flex items-center justify-center text-[10px]">2</span>
                  Utiliza el Código Patrocinador: Yamilka507
                </div>
                <p className="text-[11px] text-slate-400 pl-7">
                  Para asegurar tu pertenencia a nuestro equipo con asesoría continua y acceso a la Academia HGW 24/7.
                </p>
              </div>

              <div className="p-3.5 bg-slate-800 rounded-xl border border-slate-700 space-y-1">
                <div className="font-bold text-xs text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 font-bold inline-flex items-center justify-center text-[10px]">3</span>
                  Activa tu Membresía (50 BV a 600 BV)
                </div>
                <p className="text-[11px] text-slate-400 pl-7">
                  Elige tus productos favoritos y recibe tu código internacional de distribuidor activo de por vida.
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => openRegistrationModal('how_it_works_partner_btn')}
            className="w-full py-3.5 px-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <PlayCircle className="w-4 h-4" />
            <span>Ver Tutorial y Registrarme como Socio</span>
          </button>
        </div>

      </div>

      {/* FREQUENT QUESTIONS ABOUT WORKFLOW */}
      <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 space-y-4">
        <h3 className="font-bold text-slate-900 text-base">Beneficios de este Modelo de Venta Consultiva:</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600">
          <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
            <h4 className="font-bold text-slate-900">1. Asesoría de Dosificación</h4>
            <p className="text-slate-500 text-[11px]">Recibes guía sobre la mejor forma de tomar o usar los productos para tu condición de bienestar específica.</p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
            <h4 className="font-bold text-slate-900">2. Verificación de Stock Local</h4>
            <p className="text-slate-500 text-[11px]">Te confirmamos de inmediato la disponibilidad en la sede de tu ciudad antes de cualquier pago.</p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
            <h4 className="font-bold text-slate-900">3. Acompañamiento en Registro</h4>
            <p className="text-slate-500 text-[11px]">Si decides hacerte socio, te guiamos en la elección de productos para maximizar tus BV y comisiones.</p>
          </div>
        </div>
      </div>

    </div>
  );
};
