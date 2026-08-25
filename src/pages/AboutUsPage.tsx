import React, { useEffect } from 'react';
import { 
  Building2, 
  Award, 
  Globe, 
  Sparkles, 
  Users, 
  ShieldCheck, 
  GraduationCap, 
  Leaf, 
  ArrowRight,
  HeartHandshake
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SITE_CONFIG } from '../config/siteConfig';
import { DIRECT_SELLING_ASSOCIATIONS } from '../data/membershipsData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { updatePageSEO } from '../utils/seo';

export const AboutUsPage: React.FC = () => {
  const { navigate, openRegistrationModal } = useApp();

  useEffect(() => {
    updatePageSEO({
      title: 'Acerca de HGW y Green World | 31 Años de Ciencia y Nutrición Global',
      description: 'Conoce la historia de Health Green World, fundada por la Dra. Deming Li. Más de 31 años de liderazgo científico, presencia en 69 países y plan de Ganancia Mutua.',
      canonicalUrl: 'https://hgwlatam.com/nosotros'
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-12 pb-16">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: 'Quiénes Somos & Historia HGW' }]} />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-teal-950 text-white rounded-3xl p-8 sm:p-12 shadow-lg relative overflow-hidden">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300 flex items-center gap-1.5">
            <Award className="w-4 h-4" /> Trayectoria Científica Internacional
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            31 Años Llevando Salud, Ciencia y Bienestar al Mundo
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Health Green World (HGW) es la división de mercadeo en red de <strong>Green World International</strong>, conglomerado transnacional con presencia en más de 69 países y centros de investigación biotecnológica propios.
          </p>
        </div>
      </div>

      {/* 4 Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
          <div className="text-3xl font-black text-emerald-700">31+</div>
          <h3 className="font-bold text-sm text-slate-900">Años de Historia</h3>
          <p className="text-xs text-slate-500">Fundada en 1994 en Michigan, EE.UU., con base de investigación global.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
          <div className="text-3xl font-black text-emerald-700">69+</div>
          <h3 className="font-bold text-sm text-slate-900">Países con Presencia</h3>
          <p className="text-xs text-slate-500">Distribución oficial en Asia, África, Europa y toda América.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
          <div className="text-3xl font-black text-emerald-700">6</div>
          <h3 className="font-bold text-sm text-slate-900">Bases de Producción</h3>
          <p className="text-xs text-slate-500">Instalaciones con certificación GMP, FDA, ISO9001 e ISO22000.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
          <div className="text-3xl font-black text-emerald-700">100%</div>
          <h3 className="font-bold text-sm text-slate-900">Ganancia Mutua</h3>
          <p className="text-xs text-slate-500">Plan de compensación de ganar-ganar patentado e innovador.</p>
        </div>
      </div>

      {/* Scientific Leadership: Dra. Deming Li */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 text-center space-y-3">
            <div className="w-36 h-36 mx-auto rounded-3xl bg-emerald-900 text-white flex items-center justify-center font-serif text-3xl font-bold shadow-md border-4 border-emerald-100">
              Dr. DL
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-900">Dra. Deming Li</h3>
              <p className="text-xs text-emerald-700 font-semibold">Fundadora & Presidenta del Grupo Green World</p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <h2 className="text-2xl font-bold text-slate-900">
              Liderazgo Científico de Clase Mundial
            </h2>
            <p>
              La <strong>Dra. Deming Li</strong> es Doctora en Biología por la prestigiosa Universidad Cornell y realizó estudios de postdoctorado en la Universidad de Wisconsin (EE.UU.). Es experta mundial en botánica, fitoquímica y antocianinas de arándano.
            </p>
            <p>
              Ocupa cargos de alta responsabilidad científica, entre ellos Presidenta de la <em>Asociación de Arándanos de Michigan</em> y Asesora de Nutrición Celular. Su visión ha permitido el desarrollo de más de 300 patentes de extracción botánica y fórmulas que hoy alimentan a millones de personas.
            </p>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-1">
              <strong className="text-slate-900 font-bold">Mr. Peter Li (CEO para América Latina):</strong>
              <p className="text-slate-600">
                Lidera la expansión continental de HGW en América Latina con oficinas centrales corporativas en Lima, Bogotá, Ciudad de Panamá, Ciudad de México y Santiago.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold">
            <Leaf className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-slate-900">Nuestra Misión</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Promover la salud integral y el bienestar preventivo a través de la nutrición natural y la biotecnología avanzada, brindando al mismo tiempo una oportunidad de negocio honesta y justa.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold">
            <Globe className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-slate-900">Nuestra Visión</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Ser la compañía líder mundial en nutrición botánica y tecnología bioeléctrica, transformando familias en consumidores conscientes y emprendedores independientes prósperos.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-slate-900">Ganancia Mutua</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Creemos en la cooperación sincera por encima de la competencia. Si a tu equipo le va bien, a ti te va bien; un modelo de beneficio compartido real y equitativo.
          </p>
        </div>
      </div>

      {/* Backing Associations */}
      <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
        <h3 className="font-bold text-slate-900 text-base">Miembros de Asociaciones de Venta Directa:</h3>
        <p className="text-xs text-slate-500">
          Green World y HGW operan en estricto cumplimiento con los códigos éticos de venta directa en cada nación:
        </p>
        <div className="flex flex-wrap gap-2.5 pt-2">
          {DIRECT_SELLING_ASSOCIATIONS.map((assoc, i) => (
            <span key={i} className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-xs text-slate-800">
              {assoc}
            </span>
          ))}
        </div>
      </section>

      {/* Join Callout */}
      <div className="bg-emerald-900 text-white rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-xl font-bold">¿Listo para formar parte de la familia HGW?</h3>
          <p className="text-xs text-emerald-200">Únete a nuestro equipo con el código de patrocinador Yamilka507.</p>
        </div>
        <button
          onClick={() => openRegistrationModal('about_us_bottom')}
          className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer whitespace-nowrap"
        >
          Comenzar Registro Oficial
        </button>
      </div>

    </div>
  );
};
