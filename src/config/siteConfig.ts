/**
 * Configuración Central de la Plataforma HGW Latinoamérica e Hispanoamérica
 * Todas las URLs, contactos, videos y datos de patrocinador son configurables desde aquí.
 */

export const SITE_CONFIG = {
  SITE_NAME: "HGW Productos Latinoamérica",
  SITE_TAGLINE: "Salud, Bienestar y Oportunidad con Health Green World en América Latina",
  SITE_DESCRIPTION: "Catálogo internacional de productos HGW para Latinoamérica e Hispanoamérica. Información científica, precios públicos, precios socio con descuento, BV, tutoriales de registro oficial y directorio de oficinas autorizadas.",
  SITE_DOMAIN: "https://hgw-america.org",
  LOGO_TEXT: "HGW",
  LOGO_SUBTEXT: "Health Green World",
  
  // Enlaces oficiales de Registro y Tutorial (Exactos según instrucciones)
  REGISTRATION_URL: "https://www.healthgreenworld.com/?userName=Yamilka507",
  REGISTRATION_VIDEO_URL: "https://www.youtube.com/watch?v=cR-aHkU9N4A&t=5s",
  REGISTRATION_VIDEO_ID: "cR-aHkU9N4A",
  REGISTRATION_VIDEO_EMBED: "https://www.youtube.com/embed/cR-aHkU9N4A",
  
  // Plataforma de Capacitación y Academia
  ACADEMIA_URL: "https://academiahgw.online",
  
  // Patrocinador y Afiliado Independiente
  SPONSOR_NAME: "Yamilka Batista",
  SPONSOR_TITLE: "Distribuidor Independiente & Networker Digital",
  SPONSOR_CODE: "Yamilka507",
  SPONSOR_COUNTRY: "Panamá",
  SPONSOR_AVATAR: "https://hgwpanama.com/wp-content/uploads/Foto-de-perfil-Yamilka-Batista-HGW.png",
  
  // Canales de Contacto Directo
  CONTACT_EMAIL: "info@negociohgw.com",
  CONTACT_PHONE: "+507 6778-8375",
  CONTACT_WHATSAPP: "+50767788375",
  WHATSAPP_NUMBER_RAW: "50767788375",
  WHATSAPP_URL: "https://wa.me/50767788375",
  
  // Redes Sociales y Enlaces
  SOCIAL_LINKS: {
    whatsapp: "https://wa.me/50767788375",
    youtube: "https://www.youtube.com/watch?v=cR-aHkU9N4A&t=5s",
    facebook: "https://facebook.com/hgwpanamaoficial",
    instagram: "https://instagram.com/hgwpanama",
    telegram: "https://t.me/hgwlatinoamerica",
  },
  
  // Dirección de Contacto / Oficina Principal Referencial
  HEADQUARTERS: {
    city: "Ciudad de Panamá",
    country: "Panamá",
    address: "Vía España, Edificio Galerías Bolívar, Piso 3, Oficina 302, Ciudad de Panamá",
    schedule: "Lunes a Viernes: 9:00 AM - 6:00 PM | Sábados: 9:00 AM - 2:00 PM",
  },
  
  // Moneda Base y Reglas
  DEFAULT_CURRENCY: "USD",
  DEFAULT_CURRENCY_SYMBOL: "$",
  
  // Descargo de Responsabilidad Legal Obligatorio
  DISCLAIMER: "Aviso importante: Este portal es gestionado y promovido por un Distribuidor y Afiliado Independiente de HGW (Health Green World). No constituye el sitio corporativo oficial de la empresa matriz, sino un canal informativo, comercial y educativo para clientes y nuevos socios. Los productos HGW son suplementos nutricionales y artículos de bienestar que no tienen como fin diagnosticar, tratar, curar ni prevenir ninguna enfermedad. Los testimonios y resultados económicos del plan de compensación dependen del esfuerzo, constancia y habilidades individuales de cada afiliado.",
  
  // Analítica Configurable
  ANALYTICS: {
    GA_TRACKING_ID: "", // Google Analytics 4 Measurement ID
    GTM_ID: "",         // Google Tag Manager ID
    META_PIXEL_ID: "",  // Meta Pixel ID
    ENABLE_DEBUG_LOGS: true,
  }
};

/**
 * Generador de enlaces de WhatsApp personalizados con mensaje prellenado
 */
export function getWhatsAppProductUrl(productName: string, countryName?: string, isPartnerInquiry = false): string {
  let message = "";
  if (isPartnerInquiry) {
    message = `¡Hola Yamilka! Me interesa registrarme como Socio / Distribuidor en HGW para obtener precios con descuento y emprender. Me comunico desde ${countryName || "mi país"}. Código patrocinador: ${SITE_CONFIG.SPONSOR_CODE}. ¿Podrías orientarme?`;
  } else {
    message = `¡Hola Yamilka! Deseo información y comprar el producto "${productName}" de HGW en ${countryName || "mi país"}. ¿Podrías indicarme disponibilidad, precios y entrega?`;
  }
  return `https://wa.me/${SITE_CONFIG.WHATSAPP_NUMBER_RAW}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppGeneralUrl(countryName?: string): string {
  const message = `¡Hola! Vengo desde el portal HGW Productos Latinoamérica (${countryName || "general"}). Quisiera información sobre cómo adquirir productos y cómo registrarme como socio.`;
  return `https://wa.me/${SITE_CONFIG.WHATSAPP_NUMBER_RAW}?text=${encodeURIComponent(message)}`;
}
