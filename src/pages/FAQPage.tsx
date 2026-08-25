import React, { useState, useEffect, useMemo } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  MessageCircle, 
  Package, 
  UserCheck, 
  Truck, 
  CreditCard,
  Sparkles
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HGW_FAQS } from '../data/faqData';
import { SITE_CONFIG } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { updatePageSEO } from '../utils/seo';

export const FAQPage: React.FC = () => {
  const { navigate } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [openFaqIds, setOpenFaqIds] = useState<Record<string, boolean>>({
    'faq-01': true,
    'faq-02': true,
    'faq-03': true
  });

  useEffect(() => {
    updatePageSEO({
      title: 'Preguntas Frecuentes HGW | Productos, Compras, Membresías y Envíos',
      description: 'Respuestas a todas tus dudas sobre cómo comprar productos HGW sin carrito, cómo afiliarte como socio, qué es el BV y cómo operan los envíos.',
      canonicalUrl: 'https://hgwlatam.com/preguntas-frecuentes'
    });
  }, []);

  const toggleFaq = (id: string) => {
    setOpenFaqIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const categories = ['all', 'General', 'Compras', 'Productos', 'Membresías y Negocio', 'Envíos y Pagos'];

  const filteredFaqs = useMemo(() => {
    return HGW_FAQS.filter((faq) => {
      if (selectedCategory !== 'all' && faq.category !== selectedCategory) {
        return false;
      }
      if (searchTerm.trim() !== '') {
        const q = searchTerm.toLowerCase().trim();
        return faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
      }
      return true;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10 pb-16">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: 'Preguntas Frecuentes' }]} />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-900 text-white rounded-3xl p-8 sm:p-10 shadow-md">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800 text-emerald-200 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-emerald-300" />
            Centro de Ayuda HGW
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            Preguntas Frecuentes & Respuestas Claras
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
            Todo lo que necesitas saber sobre el catálogo, el sistema de atención sin carrito, los puntos BV, los 8 bonos de membresía y los envíos en tu país.
          </p>
        </div>
      </div>

      {/* Search & Filter Pills */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-4">
        <div className="relative w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por palabra clave: 'BV', 'Membresía', 'Envíos', 'Arándanos'..."
            className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-900"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl font-bold transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-emerald-700 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat === 'all' ? 'Todas las Preguntas' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion FAQ List */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="p-12 bg-white rounded-2xl border border-slate-200 text-center text-xs text-slate-500">
            No se encontraron preguntas con el criterio "{searchTerm}".
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = !!openFaqIds[faq.id];
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-100 shrink-0">
                      {faq.category}
                    </span>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="p-1 rounded-full text-slate-400">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-emerald-700" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Still Have Questions? */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white">¿No encontraste lo que buscabas?</h3>
          <p className="text-xs text-slate-400 mt-1">Escríbenos directamente y resolveremos tus dudas en minutos.</p>
        </div>
        <a
          href={SITE_CONFIG.WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-colors flex items-center gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Consultar por WhatsApp</span>
        </a>
      </div>

    </div>
  );
};
