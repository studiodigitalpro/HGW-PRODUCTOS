import React, { useEffect } from 'react';
import { 
  ShieldCheck, 
  FileText, 
  Lock, 
  Scale, 
  AlertTriangle, 
  CheckCircle2,
  Building
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { updatePageSEO } from '../utils/seo';

interface LegalPageProps {
  type: 'terminos' | 'privacidad';
}

export const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const isTerms = type === 'terminos';

  useEffect(() => {
    updatePageSEO({
      title: isTerms 
        ? 'Términos y Condiciones | Distribución Independiente HGW' 
        : 'Política de Privacidad y Tratamiento de Datos | HGW',
      description: isTerms
        ? 'Términos legales de uso del catálogo informativo y portal de distribución independiente HGW.'
        : 'Políticas de privacidad y protección de datos personales de usuarios y afiliados HGW.',
      canonicalUrl: isTerms ? 'https://hgwlatam.com/terminos' : 'https://hgwlatam.com/privacidad'
    });
  }, [isTerms]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 pb-16">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: isTerms ? 'Términos y Condiciones' : 'Política de Privacidad' }]} />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-md">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            {isTerms ? <Scale className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
            <span>Aviso Legal y Transparencia Corporativa</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            {isTerms ? 'Términos y Condiciones de Uso' : 'Política de Privacidad y Protección de Datos'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Última actualización: Enero 2025 • Health Green World Latinoamérica
          </p>
        </div>
      </div>

      {/* Prominent Health and Independent Distributor Disclaimer */}
      <div className="p-5 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-950 leading-relaxed space-y-2">
        <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
          <AlertTriangle className="w-4 h-4 shrink-0 text-amber-700" />
          <span>Declaración de Distribuidor Independiente y Descargo Nutricional</span>
        </div>
        <p>
          Este sitio web es una plataforma informativa y de prospección operada por <strong>{SITE_CONFIG.SPONSOR_NAME}</strong> (Distribuidor Independiente Autorizado, Código: <strong>{SITE_CONFIG.SPONSOR_CODE}</strong>). Las marcas, nombres comerciales y logotipos de Health Green World (HGW) son propiedad exclusiva de Green World International.
        </p>
        <p>
          Los productos comercializados son suplementos alimenticios, alimentos funcionales y artículos de bienestar general. <strong>No son medicamentos y no pretenden diagnosticar, tratar, curar o prevenir ninguna enfermedad.</strong>
        </p>
      </div>

      {/* Content Sections */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
        {isTerms ? (
          <>
            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">1. Objeto del Sitio Web</h2>
              <p>
                Este portal opera como un catálogo consultivo para facilitar la exploración de productos, consulta de precios oficiales al por menor y precios de socio, información sobre sedes físicas autorizadas y enlace con el sistema oficial de registro y compra corporativa de HGW.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">2. Naturaleza Sin Carrito de Compras</h2>
              <p>
                El usuario entiende que este sitio web no procesa pagos directos mediante pasarelas desatendidas tradicionales sin contacto. Las solicitudes de compra de clientes se coordinan mediante atención personalizada vía WhatsApp o retiro en oficinas autorizadas, mientras que los registros de socios se completan en los servidores oficiales de Health Green World.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">3. Precios y Puntos BV</h2>
              <p>
                Los precios mostrados en moneda local y los valores BV (Business Volume) son los estipulados en las listas oficiales de HGW en cada país. Los precios están sujetos a variaciones por políticas comerciales de la compañía o variaciones cambiarias oficiales.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">4. Plan de Compensación y Ganancias</h2>
              <p>
                Los ejemplos sobre el Plan de Ganancia Mutua, bonos y comisiones son netamente ilustrativos. Las ganancias individuales de cada distribuidor dependen exclusivamente de su esfuerzo personal, dedicación, habilidades comerciales y del volumen de ventas generado por su organización.
              </p>
            </section>
          </>
        ) : (
          <>
            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">1. Recopilación de Datos</h2>
              <p>
                Recopilamos únicamente la información que el usuario suministra voluntariamente a través del formulario de contacto o en el inicio de conversaciones por WhatsApp (nombre, correo electrónico, teléfono y país de residencia) con la finalidad exclusiva de brindar la asesoría solicitada.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">2. Uso de la Información</h2>
              <p>
                La información facilitada no se vende, no se alquila ni se comparte con terceros con fines comerciales ajenos a la asesoría de productos y afiliación a Health Green World.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">3. Cookies y Métricas Anónimas</h2>
              <p>
                Utilizamos herramientas de analítica estándar (Google Analytics 4 / Meta Pixel) para medir el tráfico agregado del catálogo, páginas más visitadas e interés por productos, sin almacenar datos sensibles ni vender perfiles individuales.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">4. Derechos ARCO</h2>
              <p>
                En cualquier momento, el usuario puede solicitar la actualización o eliminación de sus datos de contacto enviando un correo a <strong>{SITE_CONFIG.CONTACT_EMAIL}</strong>.
              </p>
            </section>
          </>
        )}
      </div>

    </div>
  );
};
