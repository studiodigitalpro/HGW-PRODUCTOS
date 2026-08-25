import React, { useEffect } from 'react';
import { 
  BookOpen, 
  Clock, 
  User, 
  ArrowRight, 
  Tag, 
  Share2, 
  Sparkles,
  ShoppingBag,
  ArrowLeft
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HGW_BLOG_ARTICLES, getArticleBySlug } from '../data/blogData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { updatePageSEO } from '../utils/seo';

interface BlogPageProps {
  articleSlug?: string;
}

export const BlogPage: React.FC<BlogPageProps> = ({ articleSlug }) => {
  const { navigate, openProductPurchaseModal } = useApp();

  const activeArticle = articleSlug ? getArticleBySlug(articleSlug) : undefined;

  useEffect(() => {
    if (activeArticle) {
      updatePageSEO({
        title: `${activeArticle.title} | Blog HGW Científico`,
        description: activeArticle.excerpt,
        canonicalUrl: `https://hgwlatam.com/blog/${activeArticle.slug}`
      });
    } else {
      updatePageSEO({
        title: 'Blog de Salud, Nutrición y Bienestar HGW | Artículos Científicos',
        description: 'Aprende sobre las propiedades del arándano, la turmalina bioeléctrica, el Ganoderma Lucidum y protocolos de nutrición celular.',
        canonicalUrl: 'https://hgwlatam.com/blog'
      });
    }
  }, [activeArticle]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10 pb-16">
      
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={
          activeArticle
            ? [{ name: 'Blog Científico', url: '/blog' }, { name: activeArticle.title }]
            : [{ name: 'Blog de Nutrición y Bienestar' }]
        }
      />

      {/* SINGLE ARTICLE DETAIL VIEW */}
      {activeArticle ? (
        <div className="max-w-4xl mx-auto space-y-8">
          
          <button
            onClick={() => navigate('/blog')}
            className="text-xs font-bold text-slate-600 hover:text-emerald-700 flex items-center gap-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a todos los artículos</span>
          </button>

          {/* Article Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                {activeArticle.category}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {activeArticle.readTime}
              </span>
              <span className="text-xs text-slate-400">
                {activeArticle.publishedDate}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              {activeArticle.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              {activeArticle.excerpt}
            </p>
          </div>

          {/* Article Banner Image */}
          <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-md bg-slate-100">
            <img
              src={activeArticle.image}
              alt={activeArticle.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Article Full Markdown-Like Body */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base whitespace-pre-line font-sans">
            {activeArticle.content}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {activeArticle.tags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium">
                #{tag}
              </span>
            ))}
          </div>

          {/* Related CTA */}
          <div className="bg-emerald-900 text-white rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold">¿Deseas probar los productos mencionados en este artículo?</h3>
              <p className="text-xs text-emerald-200 mt-1">Explora nuestro catálogo con precios y beneficios oficiales.</p>
            </div>
            <button
              onClick={() => navigate('/productos')}
              className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer whitespace-nowrap"
            >
              Ver Catálogo de Productos
            </button>
          </div>

        </div>
      ) : (
        /* ALL ARTICLES GRID VIEW */
        <div className="space-y-8">
          
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-900 text-white rounded-3xl p-8 sm:p-10 shadow-md">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800 text-emerald-200 text-xs font-bold uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-emerald-300" />
                Divulgación Científica & Bienestar
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                Artículos, Fitoquímica & Salud Integral
              </h1>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                Descubre los respaldos científicos y aplicaciones nutricionales de las antocianinas, la turmalina bioeléctrica, los adaptógenos y el cuidado celular.
              </p>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {HGW_BLOG_ARTICLES.map((art) => (
              <div
                key={art.id}
                onClick={() => navigate(`/blog/${art.slug}`)}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-video w-full overflow-hidden bg-slate-100">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="font-bold text-emerald-700 uppercase text-[10px] tracking-wider bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                        {art.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {art.readTime}
                      </span>
                    </div>

                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug">
                      {art.title}
                    </h2>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between text-xs font-bold text-emerald-700">
                  <span>Leer Artículo Completo</span>
                  <div className="w-8 h-8 rounded-full bg-emerald-50 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

    </div>
  );
};
