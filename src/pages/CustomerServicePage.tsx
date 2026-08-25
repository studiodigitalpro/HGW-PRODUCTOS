import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Send, 
  CheckCircle2, 
  HelpCircle, 
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SITE_CONFIG } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { updatePageSEO } from '../utils/seo';
import { trackEvent } from '../utils/analytics';

export const CustomerServicePage: React.FC = () => {
  const { selectedCountry } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: selectedCountry.name,
    inquiryType: 'compra_cliente',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    updatePageSEO({
      title: 'Contacto y Servicio al Cliente HGW | Atención Personalizada',
      description: 'Comunícate con nuestro equipo de atención y distribución autorizada de HGW en América. Asesoría de productos, compras y afiliaciones.',
      canonicalUrl: 'https://hgwlatam.com/servicio-al-cliente'
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('contact_form_submit', {
      name: formData.name,
      country: formData.country,
      inquiry_type: formData.inquiryType
    });
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10 pb-16">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: 'Servicio al Cliente & Contacto' }]} />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-900 text-white rounded-3xl p-8 sm:p-10 shadow-md">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800 text-emerald-200 text-xs font-bold uppercase tracking-wider">
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            Canales de Atención Directa
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            Servicio al Cliente & Soporte HGW
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
            Estamos disponibles para asesorarte en la dosificación y uso de productos, cotizaciones de envíos locales y en tu proceso de registro y activación como socio distribuidor.
          </p>
        </div>
      </div>

      {/* Contact Grid (Form + Contact Cards) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Contact Info & Sponsor Card (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Official Sponsor Card */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center font-bold text-lg">
                YB
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                  Distribuidor Oficial HGW
                </span>
                <h3 className="font-bold text-base text-slate-900">
                  {SITE_CONFIG.SPONSOR_NAME}
                </h3>
                <p className="text-xs text-slate-500 font-mono">
                  Código: <strong className="text-emerald-700">{SITE_CONFIG.SPONSOR_CODE}</strong>
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Líder y distribuidor independiente con amplia experiencia en nutrición celular, productos bioeléctricos de turmalina y desarrollo de equipos en toda Latinoamérica.
            </p>

            <a
              href={SITE_CONFIG.WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chatear por WhatsApp Directo</span>
            </a>
          </div>

          {/* Contact Details */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4 text-xs text-slate-600">
            <h4 className="font-bold text-sm text-slate-900">Información de Contacto:</h4>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Teléfono / WhatsApp:</div>
                  <div className="font-mono text-slate-600">{SITE_CONFIG.CONTACT_PHONE}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Correo Electrónico:</div>
                  <div className="text-slate-600">{SITE_CONFIG.CONTACT_EMAIL}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Sede Principal en Panamá:</div>
                  <div className="text-slate-600">{SITE_CONFIG.HEADQUARTERS.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Horario de Atención:</div>
                  <div className="text-slate-600">{SITE_CONFIG.HEADQUARTERS.schedule}</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right: Interactive Contact Form (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-in fade-in duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">¡Mensaje Enviado con Éxito!</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Gracias, <strong>{formData.name}</strong>. Hemos recibido tu consulta y nuestro equipo te responderá por correo o WhatsApp a la brevedad posible.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-5 py-2.5 bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-xs hover:bg-emerald-700 transition-colors"
              >
                Enviar Otro Mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="font-bold text-lg text-slate-900">
                  Envíanos un Mensaje
                </h3>
                <p className="text-xs text-slate-500">
                  Completa el formulario y te contactaremos en minutos.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Nombre Completo *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Carlos Mendoza"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-900"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Correo Electrónico *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="correo@ejemplo.com"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">WhatsApp / Teléfono *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+507 6000-0000"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-900"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">País de Residencia *</label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-900"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Tipo de Consulta *</label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-900"
                >
                  <option value="compra_cliente">Comprar productos como Cliente</option>
                  <option value="registro_socio">Información para Afiliarme como Socio / Distribuidor</option>
                  <option value="envios_entregas">Consulta sobre Envíos o Retiro en Oficina</option>
                  <option value="dosis_beneficios">Asesoría de Ingredientes y Modo de Uso</option>
                  <option value="otro">Otra consulta</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Mensaje o Detalle *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Escribe aquí los productos de tu interés o tus dudas específicas..."
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-900"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Consulta Ahora</span>
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
};
