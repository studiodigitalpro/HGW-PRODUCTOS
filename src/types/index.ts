export type ProductCategory = 
  | 'Alimentos'
  | 'Suplementos'
  | 'Cuidado personal'
  | 'Accesorios'
  | 'Equipo'
  | 'Licores'
  | 'Belleza'
  | 'Cuidado facial';

export type ProductStatus = 
  | 'Disponible'
  | 'Stock Limitado'
  | 'Bajo Pedido'
  | 'Información Pendiente'
  | 'Próximamente';

export interface HGWProduct {
  id: number;
  name: string;
  slug: string;
  category: ProductCategory;
  rawMaterial: string;
  presentation: string;
  publicPrice: number; // USD
  partnerPrice: number; // USD
  bv: number;
  currency: string;
  availableCountries: string[]; // e.g. ['PA', 'PE', 'CO', 'BO', 'EC', 'MX', 'CL', 'GT', 'SV', 'CR', 'US']
  status: ProductStatus;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  ingredients: string[];
  usageInstructions: string[];
  images: string[];
  videoUrl?: string;
  tags: string[];
  featured?: boolean;
  bestSeller?: boolean;
  faq?: { question: string; answer: string }[];
}

export interface HGWCategoryInfo {
  id: string;
  slug: string;
  name: ProductCategory;
  title: string;
  description: string;
  iconName: string;
  image: string;
  color: string;
  productCount?: number;
}

export type CountryStatus = 
  | 'Disponible / Oficial'
  | 'Disponible para Clientes'
  | 'Disponible para Socios'
  | 'Información Pendiente'
  | 'Consultar Disponibilidad'
  | 'No Disponible';

export interface HGWCountry {
  id: string; // ISO code, e.g., 'PA', 'PE', 'MX', 'CO'
  slug: string;
  name: string;
  flag: string;
  region: 'Centroamérica' | 'Sudamérica' | 'Norteamérica' | 'Caribe' | 'Europa / Internacional';
  status: CountryStatus;
  isOfficial: boolean;
  currencyName: string;
  currencyCode: string;
  currencySymbol: string;
  exchangeRateVsUSD: number; // 1 USD = X local currency
  hasOfficialOffice: boolean;
  officesCount: number;
  shippingCourier: string;
  shippingTime: string;
  shippingNotes: string;
  paymentMethods: string[];
  customerCarePhone?: string;
  customerCareWhatsapp?: string;
  customerCareEmail?: string;
  availableProductsCount?: number;
  description: string;
}

export interface HGWOffice {
  id: string;
  countryCode: string;
  countryName: string;
  city: string;
  name: string;
  address: string;
  phone?: string;
  phones?: string[];
  whatsapp?: string;
  email?: string;
  openingHours: string;
  googleMapsUrl?: string;
  image?: string;
  type?: string;
  isOfficial: boolean;
  status: 'Operativa' | 'Información Pendiente' | 'Punto Autorizado';
  services: Array<
    | 'Servicio al Cliente Registrado'
    | 'Facturación'
    | 'Compras'
    | 'Recepción de Pedidos'
    | 'Despachos y Entregas'
    | 'Envíos Nacionales'
    | string
  >;
  notes?: string;
}

export interface HGWMembershipTier {
  id: string;
  name: string;
  bvRequirement: number;
  approxUsdCost: string;
  retailDiscount: string; // e.g. "30%"
  repurchaseDiscount: string; // e.g. "30%" or "60%"
  teamBonusPercent: string;
  dailyCapUsd: number;
  eliteBonusLevels: string;
  developmentBonus: string;
  fastStartBonus: string;
  color: string;
  popular?: boolean;
  description: string;
  features: string[];
}

export interface HGWArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: string;
  excerpt: string;
  content: string;
  image: string;
  tags: string[];
  relatedProductSlugs?: string[];
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Productos' | 'Compras' | 'Membresías y Negocio' | 'Envíos y Pagos';
  question: string;
  answer: string;
}

export interface GlobalSearchResult {
  id: string;
  type: 'producto' | 'categoria' | 'pais' | 'oficina' | 'tutorial' | 'articulo' | 'faq';
  title: string;
  subtitle: string;
  url: string;
  categoryBadge?: string;
  extraInfo?: string;
}
