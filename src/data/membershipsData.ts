import { HGWMembershipTier } from '../types';

export const MEMBERSHIP_TIERS: HGWMembershipTier[] = [
  {
    id: 'prejunior',
    name: 'Membresía PreJunior',
    bvRequirement: 50,
    approxUsdCost: '$90 - $100 USD (aprox)',
    retailDiscount: '30%',
    repurchaseDiscount: '30%',
    teamBonusPercent: '5%',
    dailyCapUsd: 50,
    eliteBonusLevels: 'No aplica',
    developmentBonus: '$0.20 USD por BV',
    fastStartBonus: '20%',
    color: 'from-slate-600 to-slate-800',
    description: 'Punto de entrada accesible para consumidores frecuentes y personas que desean iniciar su negocio independiente con mínima inversión en productos de su elección.',
    features: [
      'Activación con 50 BV en productos a libre elección',
      '30% de descuento en activación y compras recurrentes',
      '20% de Bono de Inicio Rápido',
      'Bono de Desarrollo de $0.20 USD',
      '5% en Bono de Equipo (tope diario de hasta $50 USD)',
      'Acceso 24/7 a la Academia Digital HGW (academiahgw.online)',
      'Código internacional de distribuidor válido en toda América'
    ]
  },
  {
    id: 'junior',
    name: 'Membresía Junior',
    bvRequirement: 100,
    approxUsdCost: '$180 - $200 USD (aprox)',
    retailDiscount: '30%',
    repurchaseDiscount: '30%',
    teamBonusPercent: '7%',
    dailyCapUsd: 120,
    eliteBonusLevels: 'No aplica',
    developmentBonus: '$0.50 USD por BV',
    fastStartBonus: '20%',
    color: 'from-blue-600 to-indigo-800',
    description: 'Nivel ideal para emprendedores que desean construir equipo comercial y duplicar ganancias rápidamente con mayor tope de comisiones diarias.',
    features: [
      'Activación con 100 BV en productos seleccionados',
      '30% de descuento en activación y recompras',
      '20% de Bono de Inicio Rápido',
      'Bono de Desarrollo de $0.50 USD',
      '7% en Bono de Equipo (tope diario ampliado a $120 USD)',
      'Participación en el Bono de Ganancia Mutua',
      'Acceso a capacitaciones y herramientas de liderazgo'
    ]
  },
  {
    id: 'senior',
    name: 'Membresía Senior',
    bvRequirement: 300,
    approxUsdCost: '$540 - $600 USD (aprox)',
    retailDiscount: '30%',
    repurchaseDiscount: '30%',
    teamBonusPercent: '8%',
    dailyCapUsd: 360,
    eliteBonusLevels: 'Hasta 3ra Generación (4%)',
    developmentBonus: '$1.50 USD por BV',
    fastStartBonus: '20%',
    color: 'from-teal-600 to-emerald-800',
    description: 'Para constructores de redes con visión de crecimiento acelerado. Desbloquea el Bono Elite hasta la tercera generación y un tope de hasta $360 diarios.',
    features: [
      'Activación con 300 BV en productos de libre elección',
      '30% de descuento en activación y recompras',
      '20% de Bono de Inicio Rápido',
      'Bono de Desarrollo de $1.50 USD',
      '8% en Bono de Equipo (tope diario de $360 USD)',
      'Bono Elite del 4% hasta 3 generaciones de profundidad',
      'Reconocimiento y calificación para rangos ejecutivos'
    ]
  },
  {
    id: 'master',
    name: 'Membresía Master (Recomendada)',
    bvRequirement: 600,
    approxUsdCost: '$980 - $1,100 USD (aprox)',
    retailDiscount: '30% en activación',
    repurchaseDiscount: '60% en recompra',
    teamBonusPercent: '10%',
    dailyCapUsd: 720,
    eliteBonusLevels: 'Hasta 6ta Generación (4%)',
    developmentBonus: '$3.00 USD por BV',
    fastStartBonus: '20%',
    color: 'from-amber-500 to-yellow-700',
    popular: true,
    description: 'El máximo nivel de socio en HGW. Ofrece el 60% de descuento en recompras, 10% en Bono de Equipo con tope máximo de $720 USD diarios y 6 generaciones de Bono Elite.',
    features: [
      'Activación con 600 BV en productos de su preferencia',
      '60% de DESCUENTO en todas las compras de recompra',
      'Mínimo de reconsumo mensual reducido a solo 10 BV (~$20 USD)',
      'Bono de Desarrollo máximo de $3.00 USD por cada BV',
      '10% en Bono de Equipo (Tope máximo diario de $720 USD)',
      'Bono Elite del 4% hasta 6 generaciones de profundidad',
      'Ganancia Mutua 50% de lo que genere cada una de tus líneas a niveles infinitos',
      'Acceso prioritario a viajes internacionales y convenciones mundiales'
    ]
  }
];

export const HGW_BONUSES = [
  {
    number: '01',
    name: 'Bono de Venta Directa',
    percentage: '30% a 60%',
    description: 'Margen de comercialización directa al vender productos al precio público recomendado. Los socios Master disfrutan del 60% de margen en recompras.'
  },
  {
    number: '02',
    name: 'Bono de Inicio Rápido',
    percentage: '10% a 20%',
    description: 'Comisión directa pagada al patrocinar a nuevos distribuidores que se activan con cualquier paquete de membresía hasta 2 niveles.'
  },
  {
    number: '03',
    name: 'Bono de Desarrollo',
    percentage: '$0.20 a $3.00 USD por BV',
    description: 'Incentivo por cada socio nuevo que ingresa en tu organización según tu rango de membresía (PreJunior: $0.20 | Junior: $0.50 | Senior: $1.50 | Master: $3.00).'
  },
  {
    number: '04',
    name: 'Bono de Equipo (Binario Híbrido)',
    percentage: '5% a 10%',
    description: 'Se calcula diariamente en base al volumen de BV del equipo menor y se liquida semanalmente, con un tope de hasta $720 USD al día en membresía Master. Cada BV equivale a $1.00 USD y se reparte 50% para ti y 50% para tu patrocinador.'
  },
  {
    number: '05',
    name: 'Bono de Recompra (Ganancia Mutua)',
    percentage: '5% hasta 10 niveles',
    description: 'Ganas el 5% sobre el BV de reconsumo de todos tus afiliados hasta 10 niveles, y recibes el 2.5% de la red de tu patrocinador colocada después de ti. Requiere mantener solo 10 BV mensuales.'
  },
  {
    number: '06',
    name: 'Bono Elite',
    percentage: '4% adicional',
    description: 'Generado a partir del bono de equipo de tus líderes directos e indirectos: hasta 3 niveles en socios Senior y hasta 6 niveles en socios Master.'
  },
  {
    number: '07',
    name: 'Bono de Mérito Personal',
    percentage: 'Plus por liderazgo',
    description: 'Reconocimiento especial cuando tu BV acumulado en bono de equipo supera al de tu línea ascendente directa.'
  },
  {
    number: '08',
    name: 'Plan de Ganancia Mutua (Exclusivo HGW)',
    percentage: '50% compartido',
    description: 'Concepto revolucionario en el Network Marketing mundial: ganas el 50% de lo que genere cada una de tus líneas en niveles infinitos, eliminando la competencia interna y fomentando el trabajo en equipo.'
  }
];

export const HGW_RANKS = [
  { name: 'Rango Plata', req: '500 USD Acumulados', badge: '🥈', color: 'text-slate-400' },
  { name: 'Rango Oro', req: '1,500 USD Acumulados', badge: '🥇', color: 'text-amber-500' },
  { name: 'Rango Platino', req: '3,000 USD Acumulados', badge: '💎', color: 'text-cyan-400' },
  { name: 'Rango Diamante', req: '5,000 USD Acumulados', badge: '👑', color: 'text-purple-400' },
  { name: 'Diamante 1 Estrella', req: '1 Patrocinado directo alcanza Diamante', badge: '⭐', color: 'text-amber-400' },
  { name: 'Diamante 2 Estrellas', req: '2 Patrocinados directos alcanzan Diamante', badge: '⭐⭐', color: 'text-amber-400' },
  { name: 'Diamante 3 Estrellas', req: '3 Patrocinados directos alcanzan Diamante', badge: '⭐⭐⭐', color: 'text-amber-400' },
  { name: 'Diamante 4 Estrellas', req: '4 Patrocinados directos alcanzan Diamante', badge: '⭐⭐⭐⭐', color: 'text-amber-400' },
  { name: 'Diamante 5 Estrellas', req: '5 Patrocinados directos alcanzan Diamante', badge: '⭐⭐⭐⭐⭐', color: 'text-amber-400' },
  { name: 'Diamante 6 Estrellas', req: '6 Patrocinados directos alcanzan Diamante', badge: '🌟🌟🌟🌟🌟🌟', color: 'text-amber-400' },
  { name: 'Diamante 7 Estrellas', req: '7 Patrocinados directos alcanzan Diamante', badge: '👑 7 Estrellas', color: 'text-amber-400' }
];

export const HGW_FOUNDERS = [
  {
    name: 'Dra. Deming Li',
    title: 'Presidente de Green World International Group',
    bio: 'Científica investigadora con Doctorado en Biología en Cornell University y Postdoctorado en la Universidad de Wisconsin, EE.UU. Ex-investigadora del Instituto de Michigan, miembro distinguido de la North American Blueberry Association y Vicepresidente del Consejo de la Asociación de Salud de Tianjin. Líder visionaria con más de tres décadas dedicada a la biotecnología aplicada a la salud humana.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80'
  },
  {
    name: 'Mr. Peter Li',
    title: 'Vicepresidente Global & CEO Región Latinoamérica',
    bio: 'Egresado de la prestigiosa Universidad en Ciencias Políticas y Derecho con más de 18 años de experiencia en la industria del mercadeo relacional y desarrollo corporativo internacional. Artífice de la apertura, consolidación y expansión masiva de HGW en más de 15 países de América Latina.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80'
  }
];

export const DIRECT_SELLING_ASSOCIATIONS = [
  'Asociación Panameña de Venta Directa',
  'Asociación Colombiana de Venta Directa (ACOVEDI)',
  'Asociación Boliviana de Venta Directa (ASOBOD)',
  'Asociación Ecuatoriana de Venta Directa (AEVD)',
  'Asociación Guatemalteca de Venta Directa (AGEVD)',
  'World Federation of Direct Selling Associations (WFDSA Standards)'
];
