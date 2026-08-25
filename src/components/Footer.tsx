import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Mail, 
  Phone, 
  PlayCircle, 
  ExternalLink, 
  HeartHandshake, 
  Globe, 
  CheckCircle2, 
  Award,
  BookOpen
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SITE_CONFIG } from '../config/siteConfig';
import { DIRECT_SELLING_ASSOCIATIONS } from '../data/membershipsData';
import { HGW_COUNTRIES } from '../data/countriesData';

export const Footer: React.FC = () => {
  const { navigate, openRegistrationModal } = useApp();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Sponsor & Trust Banner */}
        <div className="bg-gradient-to-r from-emerald-900/80 to-slate-800 p-6 rounded-2xl border border-emerald-700/40 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-emerald-700 border-2 border-emerald-400 flex items-center justify-center text-white text-xl font-bold overflow-hidden shadow-inner shrink-0">
              YB
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-base">{SITE_CONFIG.SPONSOR_NAME}</span>
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                  Distribuidor Oficial
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Patrocinador Autorizado HGW • Código Internacional: <strong className="text-amber-400 font-mono text-sm">{SITE_CONFIG.SPONSOR_CODE}</strong>
              </p>
              <p className="text-[11px] text-slate-400">
                Atención y asesoría directa para Panamá, Sudamérica, Centroamérica, México y EE.UU.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => openRegistrationModal('footer_banner')}
              className="flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-sm transition-all cursor-pointer"
            >
              <PlayCircle className="w-4 h-4" />
              Ver Tutorial de Registro
            </button>
            <a
              href={SITE_CONFIG.WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 font-bold text-xs rounded-xl transition-all"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              WhatsApp Directo
            </a>
          </div>
        </div>

        {/* Multi-column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12 border-b border-slate-800 text-xs">
          
          {/* Col 1: Brand & Overview */}
          <div className="col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                H
              </div>
              <span className="text-base font-extrabold text-white tracking-tight">
                {SITE_CONFIG.SITE_NAME}
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed pr-4 text-[11px]">
              Plataforma informativa, educativa y de conexión comercial para los productos de 
              Health Green World (HGW) en todo el continente americano.
            </p>
            <div className="pt-2 text-[11px] text-slate-400 space-y-1">
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                {SITE_CONFIG.HEADQUARTERS.address}
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                {SITE_CONFIG.CONTACT_EMAIL}
              </p>
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                {SITE_CONFIG.CONTACT_PHONE}
              </p>
            </div>
          </div>

          {/* Col 2: Catálogo & Líneas */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Productos</h4>
            <ul className="space-y-1.5 text-slate-400">
              <li><button onClick={() => navigate('/productos')} className="hover:text-emerald-400 transition-colors">Todos los Productos (48)</button></li>
              <li><button onClick={() => navigate('/categorias/alimentos')} className="hover:text-emerald-400 transition-colors">Alimentos & Bebidas</button></li>
              <li><button onClick={() => navigate('/categorias/cuidado-personal')} className="hover:text-emerald-400 transition-colors">Cuidado Personal</button></li>
              <li><button onClick={() => navigate('/categorias/accesorios')} className="hover:text-emerald-400 transition-colors">Turmalina & Accesorios</button></li>
              <li><button onClick={() => navigate('/categorias/suplementos')} className="hover:text-emerald-400 transition-colors">Suplementos & Espirulina</button></li>
              <li><button onClick={() => navigate('/categorias/equipo')} className="hover:text-emerald-400 transition-colors">Termo Waterson & Equipos</button></li>
            </ul>
          </div>

          {/* Col 3: Clientes & Compras */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Para Clientes</h4>
            <ul className="space-y-1.5 text-slate-400">
              <li><button onClick={() => navigate('/como-funciona')} className="hover:text-emerald-400 transition-colors">Cómo Comprar (Sin Carrito)</button></li>
              <li><button onClick={() => navigate('/envios')} className="hover:text-emerald-400 transition-colors">Guía de Envíos</button></li>
              <li><button onClick={() => navigate('/pagos')} className="hover:text-emerald-400 transition-colors">Métodos de Pago</button></li>
              <li><button onClick={() => navigate('/oficinas')} className="hover:text-emerald-400 transition-colors">Puntos de Retiro en Oficina</button></li>
              <li><button onClick={() => navigate('/servicio-al-cliente')} className="hover:text-emerald-400 transition-colors">Servicio al Cliente</button></li>
              <li><button onClick={() => navigate('/preguntas-frecuentes')} className="hover:text-emerald-400 transition-colors">Preguntas Frecuentes</button></li>
            </ul>
          </div>

          {/* Col 4: Distribuidores & Negocio */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Para Socios</h4>
            <ul className="space-y-1.5 text-slate-400">
              <li><button onClick={() => navigate('/membresias')} className="hover:text-emerald-400 transition-colors font-medium text-emerald-300">Planes de Membresía</button></li>
              <li><button onClick={() => navigate('/tutorial-registro')} className="hover:text-emerald-400 transition-colors">Tutorial de Registro Oficial</button></li>
              <li><button onClick={() => navigate('/registro')} className="hover:text-emerald-400 transition-colors">Registrarme con Patrocinador</button></li>
              <li><button onClick={() => navigate('/membresias')} className="hover:text-emerald-400 transition-colors">Plan de Ganancia Mutua</button></li>
              <li>
                <a href={SITE_CONFIG.ACADEMIA_URL} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                  <span>Academia HGW 24/7</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-500" />
                </a>
              </li>
              <li><button onClick={() => navigate('/nosotros')} className="hover:text-emerald-400 transition-colors">Fundadores & Reseña</button></li>
            </ul>
          </div>

          {/* Col 5: Países & Legal */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Países & Legal</h4>
            <ul className="space-y-1.5 text-slate-400">
              <li><button onClick={() => navigate('/paises')} className="hover:text-emerald-400 transition-colors font-medium text-slate-200">Red de Países en América</button></li>
              <li><button onClick={() => navigate('/paises/panama')} className="hover:text-emerald-400 transition-colors">Panamá (🇵🇦)</button></li>
              <li><button onClick={() => navigate('/paises/peru')} className="hover:text-emerald-400 transition-colors">Perú (🇵🇪)</button></li>
              <li><button onClick={() => navigate('/paises/colombia')} className="hover:text-emerald-400 transition-colors">Colombia (🇨🇴)</button></li>
              <li><button onClick={() => navigate('/paises/mexico')} className="hover:text-emerald-400 transition-colors">México (🇲🇽)</button></li>
              <li><button onClick={() => navigate('/paises/bolivia')} className="hover:text-emerald-400 transition-colors">Bolivia (🇧🇴)</button></li>
              <li><button onClick={() => navigate('/terminos')} className="hover:text-emerald-400 transition-colors">Términos de Uso</button></li>
              <li><button onClick={() => navigate('/privacidad')} className="hover:text-emerald-400 transition-colors">Política de Privacidad</button></li>
            </ul>
          </div>
        </div>

        {/* Backing Direct Selling Associations */}
        <div className="py-6 border-b border-slate-800">
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-3 text-center md:text-left">
            Asociaciones Internacionales y Respaldo Gremial de Venta Directa:
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            {DIRECT_SELLING_ASSOCIATIONS.map((assoc, idx) => (
              <span 
                key={idx}
                className="px-2.5 py-1 rounded bg-slate-800 text-[10px] text-slate-300 border border-slate-700/60"
              >
                {assoc}
              </span>
            ))}
          </div>
        </div>

        {/* Mandatory Independent Affiliate Disclaimer */}
        <div className="py-6 text-[10px] text-slate-400 leading-relaxed border-b border-slate-800">
          <p className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/40">
            <strong className="text-slate-300">Aviso y Descargo de Responsabilidad: </strong> 
            {SITE_CONFIG.DISCLAIMER}
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} {SITE_CONFIG.SITE_NAME}. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/terminos')} className="hover:text-slate-300">Términos</button>
            <span>•</span>
            <button onClick={() => navigate('/privacidad')} className="hover:text-slate-300">Privacidad</button>
            <span>•</span>
            <button onClick={() => navigate('/servicio-al-cliente')} className="hover:text-slate-300">Soporte</button>
            <span>•</span>
            <span className="font-mono text-emerald-400">Patrocinador: {SITE_CONFIG.SPONSOR_CODE}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
