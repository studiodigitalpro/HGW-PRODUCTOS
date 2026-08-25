import { HGWProduct, HGWCategoryInfo } from '../types';
import { getDriveUrl, HGW_DRIVE_ASSETS } from '../utils/driveImages';

export const CATEGORIES_INFO: HGWCategoryInfo[] = [
  {
    id: 'alimentos',
    slug: 'alimentos',
    name: 'Alimentos',
    title: 'Alimentos y Bebidas Funcionales',
    description: 'Bebidas herbales, cafés terapéuticos enriquecidos con Ganoderma, Cordyceps, Arándano y caramelos funcionales bioactivos.',
    iconName: 'Coffee',
    image: getDriveUrl(HGW_DRIVE_ASSETS.blueberryCoffeeJpg),
    color: 'from-amber-600 to-amber-800',
    productCount: 22
  },
  {
    id: 'suplementos',
    slug: 'suplementos',
    name: 'Suplementos',
    title: 'Nutracéuticos y Suplementos',
    description: 'Fórmulas concentradas de alta asimilación con Spirulina Platensis, micronutrientes esenciales y extractos botánicos.',
    iconName: 'Sparkles',
    image: getDriveUrl(HGW_DRIVE_ASSETS.spirulinaCapsulas),
    color: 'from-emerald-600 to-teal-800',
    productCount: 1
  },
  {
    id: 'cuidado-personal',
    slug: 'cuidado-personal',
    name: 'Cuidado personal',
    title: 'Cuidado Personal e Higiene Íntima',
    description: 'Pastas dentales bioactivas con turmalina y probióticos, toallas higiénicas y protectores con iones negativos.',
    iconName: 'Smile',
    image: getDriveUrl(HGW_DRIVE_ASSETS.pastaTurmalinaBlancaOng),
    color: 'from-cyan-600 to-blue-800',
    productCount: 6
  },
  {
    id: 'accesorios',
    slug: 'accesorios',
    name: 'Accesorios',
    title: 'Accesorios Bio-Energéticos y Turmalina',
    description: 'Collares, pulseras, plantillas y protectores autocalentables que emiten infrarrojo lejano e iones negativos.',
    iconName: 'Shield',
    image: getDriveUrl(HGW_DRIVE_ASSETS.protectorRodillaNoBg),
    color: 'from-purple-600 to-indigo-800',
    productCount: 9
  },
  {
    id: 'equipo',
    slug: 'equipo',
    name: 'Equipo',
    title: 'Equipos y Artículos para el Hogar',
    description: 'Termo alcalinizador de agua Waterson, almohadas magnéticas ergonómicas, tazas térmicas y hervidores de acero inoxidable.',
    iconName: 'Zap',
    image: getDriveUrl(HGW_DRIVE_ASSETS.thermoTurmalinaJpg),
    color: 'from-sky-600 to-slate-800',
    productCount: 6
  },
  {
    id: 'licores',
    slug: 'licores',
    name: 'Licores',
    title: 'Vinos y Licores Especiales',
    description: 'Vino artesanal premium a base de extractos concentrados de arándanos azules de Canadá.',
    iconName: 'Wine',
    image: getDriveUrl(HGW_DRIVE_ASSETS.vinoArandanosJpg),
    color: 'from-rose-700 to-red-950',
    productCount: 1
  },
  {
    id: 'belleza',
    slug: 'belleza',
    name: 'Belleza',
    title: 'Belleza y Cuidado Estético',
    description: 'Uñas acrílicas postizas Press On Nails y accesorios de diseño elegante elaborados con componentes no tóxicos.',
    iconName: 'HeartHandshake',
    image: getDriveUrl(HGW_DRIVE_ASSETS.pressOnNailsPng),
    color: 'from-pink-500 to-rose-700',
    productCount: 1
  },
  {
    id: 'cuidado-facial',
    slug: 'cuidado-facial',
    name: 'Cuidado facial',
    title: 'Cuidado Facial y Piel',
    description: 'Línea dermocosmética antienvejecimiento con antioxidantes de arándano y minerales energéticos.',
    iconName: 'SunMedium',
    image: getDriveUrl(HGW_DRIVE_ASSETS.colagenoP500),
    color: 'from-emerald-500 to-teal-700',
    productCount: 2
  }
];

export const HGW_PRODUCTS: HGWProduct[] = [
  {
    id: 1,
    name: "Blueberry Candy (Caramelos de Arándano)",
    slug: "blueberry-candy-caramelos-de-arandano",
    category: "Alimentos",
    rawMaterial: "Arándanos Azules de Canadá (Vaccinium myrtillus)",
    presentation: "Frasco con 60 caramelos bioactivos",
    publicPrice: 5.80,
    partnerPrice: 4.00,
    bv: 2.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES"],
    status: "Disponible",
    featured: true,
    bestSeller: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.blueberryCandyJpg),
      getDriveUrl(HGW_DRIVE_ASSETS.blueberryCandyP500),
      getDriveUrl(HGW_DRIVE_ASSETS.blueberryCandyWebp)
    ],
    shortDescription: "Deliciosos caramelos antioxidantes ricos en antocianinas puras para proteger la visión, retardar el envejecimiento celular y mejorar la microcirculación.",
    fullDescription: "Formulados con extracto liofilizado de arándano silvestre canadiense, estos caramelos son el snack funcional predilecto para adultos y niños. Su alto contenido en antocianinas y polifenoles protege las células oculares contra la luz azul de pantallas y fortalece el sistema inmunológico frente al estrés oxidativo diario.",
    benefits: [
      "Protege la retina ocular y disminuye la fatiga visual frente a pantallas",
      "Poderoso efecto antioxidante contra radicales libres y envejecimiento prematuro",
      "Mejora la elasticidad de los capilares sanguíneos y la microcirculación",
      "Apto para toda la familia y práctico para llevar en el bolsillo"
    ],
    ingredients: [
      "Extracto concentrado de Arándano Azul canadiense (Vaccinium myrtillus)",
      "Isomaltitol natural",
      "Vitamina C (Ácido ascórbico)",
      "Polifenoles botánicos activos"
    ],
    usageInstructions: [
      "Consumir de 1 a 2 caramelos al día, preferiblemente entre comidas.",
      "Dejar disolver lentamente en la boca para maximizar la absorción sublingual de flavonoides."
    ],
    tags: ["arándano", "visión", "antioxidante", "caramelos", "salud ocular"]
  },
  {
    id: 2,
    name: "Blueberry Fruit Tea (Té de Frutas con Arándano)",
    slug: "blueberry-fruit-tea-te-de-frutas-con-arandano",
    category: "Alimentos",
    rawMaterial: "Arándano Liofilizado & Hierbas Antioxidantes",
    presentation: "Caja con 20 sobres de infusión frutal",
    publicPrice: 19.50,
    partnerPrice: 13.50,
    bv: 6.75,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.mermeladaArandano)
    ],
    shortDescription: "Infusión aromática rejuvenecedora que combina el poder antioxidante del arándano silvestre con notas frutales reconfortantes.",
    fullDescription: "Una experiencia sensorial refrescante y terapéutica. Elaborado con trozos deshidratados de arándano, hibisco y escaramujo, este té brinda una recarga inmediata de vitamina C y bioflavonoides que combaten la inflamación celular y promueven una digestión ligera.",
    benefits: [
      "Favorece la hidratación celular con sabor naturalmente afrutado",
      "Aporte generoso de vitamina C y antioxidantes solubles",
      "Ayuda a regular la acidez digestiva y promueve la saciedad",
      "Sin cafeína agregada, ideal para tomar a cualquier hora del día o noche"
    ],
    ingredients: [
      "Arándano silvestre deshidratado",
      "Flores de Hibisco (Jamaica)",
      "Fruto de Escaramujo",
      "Manzana silvestre deshidratada"
    ],
    usageInstructions: [
      "Colocar 1 sobre en una taza con agua caliente (85°C - 90°C).",
      "Dejar reposar de 3 a 5 minutos antes de consumir.",
      "Se puede disfrutar caliente o frío agregando hielo."
    ],
    tags: ["té", "infusión", "arándano", "antioxidante", "digestión"]
  },
  {
    id: 3,
    name: "Blueberry Collagen Peptide (Péptido de Colágeno con Arándano)",
    slug: "blueberry-collagen-peptide-peptido-de-colageno-con-arandano",
    category: "Alimentos",
    rawMaterial: "Péptidos Bioactivos de Colágeno Hidrolizado & Arándano",
    presentation: "Caja con 20 sobres individuales solubles",
    publicPrice: 32.00,
    partnerPrice: 22.00,
    bv: 11.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.colagenoP500)
    ],
    shortDescription: "Micro-péptidos de colágeno de máxima absorción celular potenciados con antocianinas de arándano para devolver firmeza a la piel y articulaciones.",
    fullDescription: "Gracias a su tecnología de hidrólisis enzimática avanzada, los péptidos de colágeno HGW poseen un peso molecular inferior a 1000 Daltons, garantizando una biodisponibilidad superior al 95%. La adición de arándano estimula la síntesis endógena de colágeno y previene la degradación por radicales libres.",
    benefits: [
      "Restaura la elasticidad, firmeza e hidratación dérmica profunda",
      "Fortalece folículos capilares, uñas quebradizas y cartílagos articulares",
      "Atenúa líneas de expresión y previene la flacidez cutánea",
      "Rápida disolución instantánea con delicioso sabor a frutos rojos"
    ],
    ingredients: [
      "Péptidos bioactivos de colágeno hidrolizado tipo I y III",
      "Polvo de arándano concentrado",
      "Vitamina C (cofactor de síntesis de colágeno)",
      "Ácido Hialurónico vegetal"
    ],
    usageInstructions: [
      "Disolver 1 sobre en un vaso con 150-200 ml de agua a temperatura ambiente.",
      "Tomar en ayunas o antes de dormir para una asimilación óptima."
    ],
    tags: ["colágeno", "piel", "articulaciones", "antienvejecimiento", "arándano"]
  },
  {
    id: 4,
    name: "Fresh Drink Chang JingJing (Bebida Limpiadora Intestinal)",
    slug: "fresh-drink-chang-jing-jing-limpiador-intestinal",
    category: "Alimentos",
    rawMaterial: "Fibras solubles, Arándano & Extractos Botánicos Depurativos",
    presentation: "Caja con 15 sobres de 10g",
    publicPrice: 28.00,
    partnerPrice: 19.50,
    bv: 9.75,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    bestSeller: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.freshDrinkColon),
      getDriveUrl(HGW_DRIVE_ASSETS.freshDrinkChangJingJing),
      getDriveUrl(HGW_DRIVE_ASSETS.freshDrinkP500)
    ],
    shortDescription: "Bebida detox inteligente diseñada para desintoxicar el colon, eliminar toxinas acumuladas y restaurar el tránsito intestinal suave.",
    fullDescription: "Fresh Drink Chang JingJing es la fórmula insignia de HGW para la limpieza intestinal profunda sin provocar cólicos ni irritación. Sus fibras prebióticas atrapan desechos metabólicos e incrustaciones fecales antiguas, favoreciendo un microbioma intestinal equilibrado y un vientre más desinflamado.",
    benefits: [
      "Estimula una evacuación intestinal regular y sin molestias",
      "Ayuda a desintoxicar el hígado y tracto digestivo de residuos acumulados",
      "Reduce la sensación de pesadez y distensión abdominal",
      "Promueve un cutis limpio al descongestionar el canal de excreción primario"
    ],
    ingredients: [
      "Fibras dietéticas solubles e insolubles",
      "Extracto de Arándano rojo y azul",
      "Polvo de semillas de lino liofilizadas",
      "Fructooligosacáridos (prebióticos FOS)"
    ],
    usageInstructions: [
      "Disolver 1 sobre en un vaso de agua tibia o a temperatura ambiente.",
      "Beber inmediatamente y acompañar con otro vaso de agua pura.",
      "Consumir preferentemente por la noche antes de acostarse."
    ],
    tags: ["detox", "colon", "digestión", "fibra", "limpieza intestinal"]
  },
  {
    id: 5,
    name: "Pro Shaping Tea (Té Moldeador Pro)",
    slug: "pro-shaping-tea-te-moldeador-profesional",
    category: "Alimentos",
    rawMaterial: "Té Verde, Hoja de Loto, Cassia & Arándano",
    presentation: "Caja con 20 sobres filtrantes",
    publicPrice: 24.00,
    partnerPrice: 16.80,
    bv: 8.40,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    bestSeller: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.proshapingP500),
      getDriveUrl(HGW_DRIVE_ASSETS.teQuemadorGrasa)
    ],
    shortDescription: "Té termogénico y lipolítico tradicional oriental formulado para acelerar el metabolismo, quemar grasas y modelar la silueta corporal.",
    fullDescription: "Combinación magistral de la medicina herbolaria ancestral con extractos estandarizados. Sus componentes activos incrementan el gasto calórico en reposo, reducen la absorción de grasas en las comidas y facilitan la eliminación de líquidos retenidos sin provocar efecto rebote.",
    benefits: [
      "Activa el metabolismo termogénico y quema calórica",
      "Facilita la reducción de grasa localizada en abdomen y cintura",
      "Acción drenante natural que combate la retención de líquidos",
      "Controla los antojos por azúcares y alimentos hipercalóricos"
    ],
    ingredients: [
      "Hojas selectas de Té Verde",
      "Extracto de Hoja de Loto (Nelumbo nucifera)",
      "Semillas de Cassia tora purificadas",
      "Polvo de Arándano silvestre"
    ],
    usageInstructions: [
      "Infundir 1 sobre en agua hirviendo durante 5-7 minutos.",
      "Tomar 1 taza 30 minutos después del almuerzo o cena principal."
    ],
    tags: ["té", "control de peso", "termogénico", "quemagrasa", "adelgazar"]
  },
  {
    id: 6,
    name: "Berry Juice HIGH VC (Jugo de Arándano Alto en Vitamina C)",
    slug: "berry-juice-high-vc-jugo-de-arandano",
    category: "Alimentos",
    rawMaterial: "Concentrado Puro de Arándano & Acerola",
    presentation: "Caja con 15 sobres de polvo para bebida",
    publicPrice: 22.50,
    partnerPrice: 15.75,
    bv: 7.80,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.berryJuiceHighVc)
    ],
    shortDescription: "Bebida bio-inmune concentrada con megadosis de Vitamina C natural y flavonoides para blindar el sistema respiratorio y celular.",
    fullDescription: "Cada sobre equivale a comer más de medio kilo de bayas silvestres frescas. Proporciona una defensa antioxidante formidable contra gripes, infecciones respiratorias y estrés oxidativo ambiental, con un sabor cítrico refrescante.",
    benefits: [
      "Potente escudo inmunológico frente a resfriados y virus estacionales",
      "Estimula la síntesis de colágeno natural y elastina",
      "Aporta energía vital y combate el cansancio crónico",
      "100% natural, sin colorantes ni saborizantes artificiales"
    ],
    ingredients: [
      "Concentrado de Arándano Azul y Rojo",
      "Extracto de Acerola salvaje (fuente natural de Vitamina C)",
      "Bioflavonoides cítricos"
    ],
    usageInstructions: [
      "Disolver 1 sobre en 200 ml de agua fresca.",
      "Tomar en el desayuno o como merienda hidratante."
    ],
    tags: ["vitamina c", "arándano", "inmunidad", "antioxidante", "jugo"]
  },
  {
    id: 7,
    name: "Blueberry Wine (Vino Artesanal de Arándanos)",
    slug: "blueberry-wine-vino-de-arandanos",
    category: "Licores",
    rawMaterial: "Arándanos Azules seleccionados de cosecha tardía",
    presentation: "Botella de vidrio de lujo de 750 ml",
    publicPrice: 38.00,
    partnerPrice: 26.50,
    bv: 10.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR"],
    status: "Disponible",
    featured: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.vinoArandanosJpg)
    ],
    shortDescription: "Exquisito vino botánico elaborado por fermentación lenta de arándanos puros. Un brindis lleno de polifenoles y elegancia.",
    fullDescription: "Producido mediante procesos de vinificación tradicionales a bajas temperaturas que preservan intactas las antocianinas y el resveratrol natural de los arándanos canadienses. Un bouquet afrutado, balanceado y aterciopelado en el paladar.",
    benefits: [
      "Alto contenido de resveratrol y polifenoles cardioprotectores",
      "Favorece la salud vascular y la circulación coronaria con moderación",
      "Maridaje ideal para carnes magras, quesos maduros y ocasiones especiales",
      "Elaborado 100% a partir de jugo de arándano fermentado"
    ],
    ingredients: [
      "Jugo puro fermentado de Arándano silvestre",
      "Antioxidantes naturales de uva de guarda"
    ],
    usageInstructions: [
      "Servir a temperatura entre 14°C y 16°C.",
      "Disfrutar con moderación como acompañamiento gastronómico."
    ],
    tags: ["vino", "arándano", "licor", "resveratrol", "gourmet"]
  },
  {
    id: 8,
    name: "Café Trébol (Salud Femenina y Hormonal)",
    slug: "cafe-trebol-salud-femenina-hormonal",
    category: "Alimentos",
    rawMaterial: "Café Arábica Colombiano & Trébol Rojo (Isoflavonas)",
    presentation: "Caja con 12 sobres de café gourmet funcional",
    publicPrice: 21.00,
    partnerPrice: 14.50,
    bv: 7.25,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    bestSeller: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.cafeTrebolJpg),
      getDriveUrl(HGW_DRIVE_ASSETS.cafeTrebolPng)
    ],
    shortDescription: "Café funcional enriquecido con trébol rojo para equilibrar las hormonas femeninas, mitigar síntomas del climaterio y realzar el brillo natural.",
    fullDescription: "Especialmente diseñado para la mujer moderna. El extracto de trébol rojo aporta fitoestrógenos naturales que regulan los desbalances hormonales durante la perimenopausia y menopausia, reduciendo sofocos nocturnos, cambios de humor y pérdida de densidad ósea.",
    benefits: [
      "Alivia eficazmente los sofocos y sudores nocturnos de la menopausia",
      "Equilibra el estado anímico y favorece un sueño reparador",
      "Contribuye a la fijación de calcio en los huesos de las mujeres",
      "Sabor suave y aromático a café arábica premium con crema vegetal"
    ],
    ingredients: [
      "Café soluble premium",
      "Extracto estandarizado de Trébol Rojo (Trifolium pratense)",
      "Crema no láctea de origen vegetal",
      "Polvo de Arándano"
    ],
    usageInstructions: [
      "Disolver 1 sobre en 150 ml de agua caliente.",
      "Consumir 1 a 2 tazas al día, idealmente por la mañana o media tarde."
    ],
    tags: ["café", "mujer", "trébol rojo", "menopausia", "hormonas"]
  },
  {
    id: 9,
    name: "Cordyceps Coffee Cream (Café con Cordyceps y Crema)",
    slug: "cordyceps-coffee-cream-cafe-con-cordyceps",
    category: "Alimentos",
    rawMaterial: "Café Gourmet, Cordyceps Sinensis & Crema No Láctea",
    presentation: "Caja con 12 sobres individuales",
    publicPrice: 22.00,
    partnerPrice: 15.40,
    bv: 7.70,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.cafeCordycepsJpg),
      getDriveUrl(HGW_DRIVE_ASSETS.cordycepsCoffeePng)
    ],
    shortDescription: "Café cremoso energizante formulado con el 'Hongo Milenario Tibetano' para potenciar la resistencia física, función pulmonar y renal.",
    fullDescription: "El hongo Cordyceps Sinensis es venerado en la medicina tradicional asiática como el tónico bioenergético por excelencia. Aumenta la producción celular de ATP, mejorando la captación de oxígeno en los pulmones y la vitalidad sexual tanto en hombres como en mujeres.",
    benefits: [
      "Incrementa la energía celular (ATP) y la resistencia a la fatiga",
      "Fortalece la capacidad pulmonar y las vías respiratorias",
      "Estimula la vitalidad y el rendimiento físico/deportivo",
      "Nutre y protege el funcionamiento de los riñones"
    ],
    ingredients: [
      "Café gourmet soluble",
      "Extracto concentrado de micelio de Cordyceps Sinensis",
      "Crema vegetal no láctea baja en grasas saturadas"
    ],
    usageInstructions: [
      "Disolver 1 sobre en 150-180 ml de agua caliente.",
      "Tomar por la mañana para iniciar la jornada con energía duradera."
    ],
    tags: ["cordyceps", "café", "energía", "pulmones", "rendimiento"]
  },
  {
    id: 10,
    name: "BlackTea Coffee (Café con Té Negro)",
    slug: "blacktea-coffee-cafe-con-te-negro",
    category: "Alimentos",
    rawMaterial: "Café Negro Fino & Té Negro de Ceilán fermentado",
    presentation: "Caja con 12 sobres",
    publicPrice: 20.00,
    partnerPrice: 14.00,
    bv: 7.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.blackTeaCoffeeJpg),
      getDriveUrl(HGW_DRIVE_ASSETS.blackTeaCoffeeP500)
    ],
    shortDescription: "Fusión magistral de café oscuro tostado y té negro selecto para un enfoque mental sostenido sin provocar taquicardia ni picos de ansiedad.",
    fullDescription: "La combinación de teofilina y L-teanina del té negro con los polifenoles del café produce un estado de alerta tranquila y concentración prolongada, ideal para jornadas de estudio intenso o trabajo de alto rendimiento.",
    benefits: [
      "Mejora la agudeza mental, la memoria de trabajo y la concentración",
      "Aporte continuo de antioxidantes teoflavinas y ácido clorogénico",
      "Ayuda a regular los niveles de colesterol en sangre",
      "Sabor tostado profundo con sutiles matices amaderados"
    ],
    ingredients: [
      "Granos de café tostado fino soluble",
      "Extracto liofilizado de Té Negro fermentado de alta pureza",
      "Polvo de arándano"
    ],
    usageInstructions: [
      "Disolver 1 sobre en una taza con agua caliente a gusto.",
      "Disfrutar durante las mañanas o previo a sesiones de trabajo intenso."
    ],
    tags: ["café", "té negro", "enfoque", "concentración", "antioxidante"]
  },
  {
    id: 11,
    name: "Coffee Ceps (Café Cordyceps Sin Azúcar)",
    slug: "coffee-ceps-cafe-cordyceps-sin-azucar",
    category: "Alimentos",
    rawMaterial: "Café Negro Puro & Extracto de Micelio de Cordyceps",
    presentation: "Caja con 15 sobres de café negro",
    publicPrice: 23.00,
    partnerPrice: 16.00,
    bv: 8.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.cafeCordycepsCeps),
      getDriveUrl(HGW_DRIVE_ASSETS.cafeCordycepsP500)
    ],
    shortDescription: "Versión purista de café negro sin azúcar añadida ni crema, enriquecido con cordyceps de grado terapéutico para máxima absorción bioenergética.",
    fullDescription: "El preferido por personas con régimen cetogénico (Keto), diabéticos y amantes del café negro intenso. Proporciona todas las propiedades adaptógenas del Cordyceps en un formato cero carbohidratos netos.",
    benefits: [
      "Apto para dietas Keto, personas con glucosa elevada o diabéticos",
      "Máximo estímulo a la resistencia muscular y oxigenación celular",
      "Refuerza el sistema inmunológico frente a bacterias y virus",
      "Cero azúcares añadidos ni rellenos artificiales"
    ],
    ingredients: [
      "100% Café Negro liofilizado de origen Arábica",
      "Extracto estandarizado de Cordyceps Sinensis (polímeros activos)"
    ],
    usageInstructions: [
      "Disolver 1 sobre en 150-200 ml de agua caliente.",
      "Endulzar al gusto con estevia o beber solo."
    ],
    tags: ["café negro", "cordyceps", "sin azúcar", "keto", "energía"]
  },
  {
    id: 12,
    name: "Blueberry Coffee (Café con Arándanos)",
    slug: "blueberry-coffee-cafe-con-arandanos",
    category: "Alimentos",
    rawMaterial: "Café Arábica & Polvo de Arándano Liofilizado Canadiense",
    presentation: "Caja con 12 sobres",
    publicPrice: 21.50,
    partnerPrice: 15.00,
    bv: 7.50,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    bestSeller: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.blueberryCoffeeJpg),
      getDriveUrl(HGW_DRIVE_ASSETS.blueberryCoffeeP500)
    ],
    shortDescription: "El icónico café funcional antioxidante de HGW. Combina la pasión del café aromático con el escudo protector de los arándanos.",
    fullDescription: "Una combinación única y patentada que neutraliza la acidez gástrica usual del café común mientras brinda una carga masiva de antocianinas protectoras para la visión, circulación y piel en cada sorbo.",
    benefits: [
      "No produce acidez ni reflujo estomacal gracias al pH balanceado del arándano",
      "Protección ocular frente al brillo de pantallas y luz artificial",
      "Promueve la microcirculación cerebral y el rejuvenecimiento cutáneo",
      "Sabor suave y aterciopelado altamente adictivo"
    ],
    ingredients: [
      "Café Arábica soluble de alta montaña",
      "Extracto concentrado de Arándano Azul",
      "Crema no láctea de palma sostenible",
      "Azúcar de caña no refinada en dosis mínima"
    ],
    usageInstructions: [
      "Mezclar 1 sobre en una taza con agua caliente.",
      "Revolver bien y disfrutar en cualquier momento del día."
    ],
    tags: ["café con arándano", "arándano", "antioxidante", "suave", "visión"]
  },
  {
    id: 13,
    name: "Lactiberry (Té Negro Cremoso con Arándanos y Probióticos)",
    slug: "lactiberry-te-cremoso-arandano-probioticos",
    category: "Alimentos",
    rawMaterial: "Té Negro, Extracto de Arándano & Cultivos Probióticos",
    presentation: "Caja con 12 sobres",
    publicPrice: 22.00,
    partnerPrice: 15.40,
    bv: 7.70,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.lactiberryP500)
    ],
    shortDescription: "Deliciosa bebida cremosa tipo Milk Tea con arándanos y billones de probióticos liofilizados para regenerar la flora intestinal.",
    fullDescription: "Una bebida reconfortante que fusiona la tradición británica del té con leche con la biotecnología probiótica. Ayuda a poblar el intestino de bacterias benéficas, reduciendo la inflamación estomacal y mejorando la digestión.",
    benefits: [
      "Regenera la microbiota y fortalece la barrera intestinal",
      "Alivia gases, digestiones pesadas y acidez",
      "Textura suave y cremosa con toque sutil de arándano",
      "Ideal para sustituir postres o meriendas azucaradas"
    ],
    ingredients: [
      "Extracto de Té Negro soluble",
      "Polvo de Arándano silvestre",
      "Probióticos microencapsulados (Lactobacillus acidophilus)",
      "Crema vegetal no láctea"
    ],
    usageInstructions: [
      "Disolver 1 sobre en agua caliente a 80°C (evitar agua hirviendo para no dañar los probióticos).",
      "Tomar después de las comidas principales o por la tarde."
    ],
    tags: ["lactiberry", "té con leche", "probióticos", "flora intestinal", "arándano"]
  },
  {
    id: 14,
    name: "Ashwagandha Coffee (Café con Ashwagandha)",
    slug: "ashwagandha-coffee-cafe-con-ashwagandha",
    category: "Alimentos",
    rawMaterial: "Café Gourmet & Raíz de Ashwagandha Orgánica (Withania somnifera)",
    presentation: "Caja con 12 sobres",
    publicPrice: 23.50,
    partnerPrice: 16.50,
    bv: 8.25,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.ashwagandhaCoffeeJpg),
      getDriveUrl(HGW_DRIVE_ASSETS.ashwagandhaCoffeePng)
    ],
    shortDescription: "El café adaptógeno definitivo para reducir el cortisol, regular el estrés diario, mejorar el descanso nocturno y elevar la libido.",
    fullDescription: "La Ashwagandha es la hierba reina del Ayurveda indio. Este café equilibra el sistema nervioso suprarrenal, ayudándote a mantener la calma bajo presión durante el día y facilitando un descanso profundo y reparador al llegar la noche.",
    benefits: [
      "Disminuye significativamente los niveles de cortisol (hormona del estrés)",
      "Calma la ansiedad y mejora el estado de serenidad mental",
      "Promueve un balance hormonal óptimo y vigor masculino/femenino",
      "No causa somnolencia diurna: modula la energía adaptativa"
    ],
    ingredients: [
      "Café arábica premium soluble",
      "Extracto estandarizado de Ashwagandha KSM-66",
      "Crema vegetal no láctea",
      "Extracto de frutos rojos"
    ],
    usageInstructions: [
      "Disolver 1 sobre en 150 ml de agua caliente.",
      "Tomar a media mañana o por la tarde para descongestionar el estrés."
    ],
    tags: ["ashwagandha", "estrés", "cortisol", "adaptógeno", "ansiedad"]
  },
  {
    id: 15,
    name: "Ganoderma Soluble Coffee (Café con Ganoderma Lucidum)",
    slug: "ganoderma-soluble-coffee-cafe-con-ganoderma",
    category: "Alimentos",
    rawMaterial: "Café Arábica & Extracto de Hongo Reishi Rojo (Ganoderma)",
    presentation: "Caja con 12 sobres",
    publicPrice: 22.00,
    partnerPrice: 15.40,
    bv: 7.70,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    bestSeller: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.cafeGanodermaJpg),
      getDriveUrl(HGW_DRIVE_ASSETS.cafeGanodermaP500)
    ],
    shortDescription: "Café enriquecido con el hongo milenario Reishi (Ganoderma), el más poderoso inmunomodulador y desintoxicante hepático de la naturaleza.",
    fullDescription: "El Ganoderma Lucidum contiene más de 200 fitoquímicos bioactivos y 150 antioxidantes, incluidos betaglucanos y triterpenos. Ayuda a regular la presión arterial, desintoxica el hígado graso y modula el sistema inmune contra células anormales.",
    benefits: [
      "Potente acción inmunomoduladora y antitumoral preventiva",
      "Desintoxica y regenera las células del hígado",
      "Regula los niveles de presión arterial y glucosa en sangre",
      "Neutraliza el estrés oxidativo y retrasa el envejecimiento"
    ],
    ingredients: [
      "Café arábica descafeinado o regular gourmet",
      "Extracto concentrado de cuerpo fructífero de Ganoderma Lucidum rojo",
      "Crema vegetal de coco/palma no transgénica"
    ],
    usageInstructions: [
      "Verter el contenido de 1 sobre en una taza con agua caliente.",
      "Consumir 1 a 2 veces al día para mantener una óptima defensa celular."
    ],
    tags: ["ganoderma", "reishi", "café", "inmunidad", "hígado", "antioxidante"]
  },
  {
    id: 16,
    name: "Blueberry Soy Protein Powder (Proteína de Soja con Arándanos)",
    slug: "blueberry-soy-protein-powder-proteina-de-soja",
    category: "Alimentos",
    rawMaterial: "Aislado de Proteína de Soja No Transgénica & Arándano",
    presentation: "Bote de 500g con cuchara dosificadora",
    publicPrice: 42.00,
    partnerPrice: 29.50,
    bv: 14.75,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.proteinaSoyaP500),
      getDriveUrl(HGW_DRIVE_ASSETS.proteinaSoyaEs1),
      getDriveUrl(HGW_DRIVE_ASSETS.proteinaSoyaPolvo),
      getDriveUrl(HGW_DRIVE_ASSETS.proteinaSoyaNoBg)
    ],
    shortDescription: "Proteína vegetal aislada de altísimo valor biológico (90% pureza) combinada con antioxidantes de arándano para masa muscular y saciedad.",
    fullDescription: "Fórmula hiperproteica vegetal de fácil digestión, libre de lactosa y colesterol. Ideal para deportistas, personas en control de peso, adultos mayores que buscan preservar su masa magra o personas en recuperación nutricional.",
    benefits: [
      "Aporta 18 aminoácidos esenciales para la construcción y tono muscular",
      "Brinda saciedad prolongada ayudando al control calórico",
      "0% lactosa y 0% colesterol: no causa pesadez digestiva",
      "Favorece la regeneración tisular y la producción de anticuerpos"
    ],
    ingredients: [
      "Aislado de proteína de soya no modificada genéticamente (Non-GMO)",
      "Polvo concentrado de Arándano silvestre",
      "Lecitina vegetal de soya",
      "Vitaminas del complejo B"
    ],
    usageInstructions: [
      "Mezclar 1 a 2 medidas (scoops) en 250 ml de agua, leche vegetal o batido frutal.",
      "Tomar después del entrenamiento o como desayuno nutritivo."
    ],
    tags: ["proteína", "soya", "arándano", "músculo", "vegano", "fitness"]
  },
  {
    id: 17,
    name: "Ganoderma Candy (Caramelos de Ganoderma)",
    slug: "ganoderma-candy-caramelos-de-ganoderma",
    category: "Alimentos",
    rawMaterial: "Extracto de Ganoderma Lucidum & Polifenoles",
    presentation: "Frasco con 60 caramelos funcionales",
    publicPrice: 6.00,
    partnerPrice: 4.20,
    bv: 2.10,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.ganubiCandyPng),
      getDriveUrl(HGW_DRIVE_ASSETS.berryGanoP500)
    ],
    shortDescription: "Caramelos bioactivos con extracto de Ganoderma Lucidum para refrescar la garganta y fortalecer el sistema inmune en cualquier lugar.",
    fullDescription: "Una manera deliciosa y práctica de consumir los polisacáridos del hongo Reishi a diario. Ideales para aliviar la garganta irritada, combatir el mal aliento bacteriano y mantener las defensas biológicas altas.",
    benefits: [
      "Alivia la carraspera y la resequedad en la garganta",
      "Aporte constante de betaglucanos inmunoestimulantes",
      "Refresca el aliento y protege la mucosa orofaríngea",
      "Cómodos para llevar al trabajo, viajes o escuela"
    ],
    ingredients: [
      "Extracto purificado de Ganoderma Lucidum",
      "Isomaltitol de bajo índice glucémico",
      "Mentol botánico natural",
      "Extracto de frutos del bosque"
    ],
    usageInstructions: [
      "Disolver lentamente 1 caramelo en la boca de 2 a 3 veces al día."
    ],
    tags: ["caramelos", "ganoderma", "garganta", "inmunidad", "defensas"]
  },
  {
    id: 18,
    name: "Coffee Candy (Caramelos de Café)",
    slug: "coffee-candy-caramelos-de-cafe",
    category: "Alimentos",
    rawMaterial: "Extracto Puro de Café Arábica & Antioxidantes",
    presentation: "Frasco con 60 caramelos",
    publicPrice: 5.80,
    partnerPrice: 4.00,
    bv: 2.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    bestSeller: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.coffeeCandyJpg),
      getDriveUrl(HGW_DRIVE_ASSETS.coffeeCandyPng),
      getDriveUrl(HGW_DRIVE_ASSETS.coffeeCandyHgwPng)
    ],
    shortDescription: "Caramelos masticables de café intenso que brindan un disparo de energía, concentración y lucidez instantánea sin necesidad de una taza.",
    fullDescription: "El auténtico sabor del café tostado encapsulado en un caramelo duro bioactivo. Perfecto para conductores, estudiantes y oficinistas que necesitan vencer el cansancio diurno y mantenerse alertas.",
    benefits: [
      "Despierta los sentidos y combate la somnolencia al instante",
      "Sabor a café espresso gourmet auténtico y duradero",
      "Bajo aporte calórico y libre de grasas hidrogenadas",
      "Práctico para llevar en el auto o maletín"
    ],
    ingredients: [
      "Extracto de granos de café Arábica",
      "Isomaltosa natural",
      "Leche desnatada en polvo",
      "Polifenoles de café"
    ],
    usageInstructions: [
      "Consumir cuando se requiera concentración o recarga de energía."
    ],
    tags: ["caramelos de café", "café", "energía", "alerta", "concentración"]
  },
  {
    id: 19,
    name: "Biolacti Candy (Caramelos con Probióticos)",
    slug: "biolacti-candy-caramelos-con-probioticos",
    category: "Alimentos",
    rawMaterial: "Cultivos Liofilizados de Lactobacillus & Prebióticos",
    presentation: "Frasco con 60 tabletas masticables",
    publicPrice: 6.50,
    partnerPrice: 4.50,
    bv: 2.25,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.biolactiCandyPng),
      getDriveUrl(HGW_DRIVE_ASSETS.biolactiCandyHgw)
    ],
    shortDescription: "Caramelos masticables de agradable sabor a yogur que aportan probióticos vivos para equilibrar la digestión y frenar infecciones estomacales.",
    fullDescription: "Especialmente recomendados para niños y adultos con digestiones pesadas, estreñimiento recurrente o tras tratamientos con antibióticos. Cada tableta aporta millones de cepas benéficas que colonizan el tracto digestivo.",
    benefits: [
      "Restablece el equilibrio de la flora intestinal benéfica",
      "Reduce la proliferación de bacterias patógenas y flatulencias",
      "Mejora la absorción de nutrientes en el intestino delgado",
      "Delicioso sabor lácteo a yogur natural que encanta a los niños"
    ],
    ingredients: [
      "Lactobacillus rhamnosus y Lactobacillus acidophilus vivos liofilizados",
      "Inulina de achicoria (prebiótico)",
      "Polvo de yogur natural desgrasado"
    ],
    usageInstructions: [
      "Masticar 1 o 2 caramelos al día, preferentemente después de las comidas."
    ],
    tags: ["probióticos", "caramelos", "digestión", "niños", "flora intestinal"]
  },
  {
    id: 20,
    name: "Gestifruit Candy (Caramelos Gestifruta)",
    slug: "gestifruit-candy-caramelos-gestifruta",
    category: "Alimentos",
    rawMaterial: "Extractos de Espino Blanco (Hawthorn), Ciruela & Frutas Enzimáticas",
    presentation: "Frasco con 60 caramelos masticables",
    publicPrice: 6.00,
    partnerPrice: 4.20,
    bv: 2.10,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.gestifruitCandyJpg),
      getDriveUrl(HGW_DRIVE_ASSETS.gestifruitCandyPng),
      getDriveUrl(HGW_DRIVE_ASSETS.gestifruitCandyJfif)
    ],
    shortDescription: "Caramelos digestivos a base de espino blanco chino y enzimas frutales para aliviar empachos, acidez estomacal y digestiones lentas.",
    fullDescription: "Inspirados en la milenaria receta tradicional de Shanzha (Espino Blanco). Estimulan la secreción de jugos gástricos y biliares para descomponer grasas y carnes pesadas rápidamente, eliminando la sensación de pesadez tras comidas copiosas.",
    benefits: [
      "Alivia la pesadez estomacal y el empacho casi de inmediato",
      "Estimula la digestión de comidas grasas y proteínas pesadas",
      "Sabor agridulce natural muy refrescante",
      "Ayuda a regular los niveles de lípidos en sangre"
    ],
    ingredients: [
      "Extracto concentrado de Fruto de Espino Blanco (Crataegus pinnatifida)",
      "Polvo de ciruela china (Umeboshi)",
      "Enzimas vegetales de papaya y piña",
      "Ácido cítrico natural"
    ],
    usageInstructions: [
      "Masticar 1 o 2 caramelos inmediatamente después de comidas pesadas."
    ],
    tags: ["digestión", "espino blanco", "caramelos", "empacho", "enzimas"]
  },
  {
    id: 21,
    name: "Peptipro Candy (Caramelos de Péptido de Colágeno)",
    slug: "peptipro-candy-caramelos-peptido-colageno",
    category: "Alimentos",
    rawMaterial: "Micro-péptidos de Colágeno Marino & Frutos Rojos",
    presentation: "Frasco con 60 caramelos bioactivos",
    publicPrice: 7.50,
    partnerPrice: 5.25,
    bv: 2.60,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.peptiproCandyPng)
    ],
    shortDescription: "Bocaditos de colágeno masticables de alta asimilación para nutrir la piel, uñas y cabello sobre la marcha sin necesidad de mezclar.",
    fullDescription: "Tu dosis diaria de belleza portátil. Con péptidos bioactivos de bajo peso molecular que se absorben a través de la mucosa oral para estimular a los fibroblastos dérmicos a generar nuevo colágeno y elastina.",
    benefits: [
      "Aporta firmeza y luminosidad a la piel del rostro y cuerpo",
      "Reduce la fragilidad de las uñas y estimula el crecimiento capilar",
      "Cómodo de tomar en cualquier lugar sin necesidad de agua",
      "Sabor delicioso a fresas silvestres y bayas"
    ],
    ingredients: [
      "Péptidos bioactivos de colágeno purificado",
      "Extracto de Arándano y Frambuesa",
      "Vitamina C y Biotina",
      "Xilitol amigable con los dientes"
    ],
    usageInstructions: [
      "Consumir 2 caramelos al día en cualquier momento."
    ],
    tags: ["colágeno", "belleza", "caramelos", "piel", "uñas", "biotina"]
  },
  {
    id: 22,
    name: "Herbal Fresh Candy (Caramelos Frescos de Hierbas)",
    slug: "herbal-fresh-candy-caramelos-frescos-hierbas",
    category: "Alimentos",
    rawMaterial: "Madreselva, Menta Silvestre, Eucalipto & Regaliz",
    presentation: "Frasco con 60 caramelos balsámicos",
    publicPrice: 5.50,
    partnerPrice: 3.85,
    bv: 1.90,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    bestSeller: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.herbalFreshCandyPng),
      getDriveUrl(HGW_DRIVE_ASSETS.herbalFreshCandyJpg),
      getDriveUrl(HGW_DRIVE_ASSETS.herbalFreshCandyJfif)
    ],
    shortDescription: "Caramelos balsámicos herbales de acción inmediata para despejar las vías respiratorias, aliviar la tos y proporcionar un aliento fresco polar.",
    fullDescription: "Fórmula tradicional botánica que descongestiona la nariz tapada, alivia la irritación por fumar o aire acondicionado y desinflama las cuerdas vocales en profesores, conferencistas y cantantes.",
    benefits: [
      "Abre y despeja las fosas nasales y vías respiratorias",
      "Calma la tos seca y el picor en la garganta",
      "Elimina bacterias bucales causantes del mal aliento",
      "Efecto refrescante prolongado y revitalizante"
    ],
    ingredients: [
      "Extracto de flor de Madreselva (Lonicera japonica)",
      "Aceite esencial de Menta Piperita y Eucalipto",
      "Extracto de raíz de Regaliz (Glycyrrhiza glabra)",
      "Isomaltitol vegetal"
    ],
    usageInstructions: [
      "Disolver 1 caramelo en la boca siempre que sienta congestión o resequedad."
    ],
    tags: ["menta", "hierbas", "respiración", "tos", "garganta", "caramelos"]
  },
  {
    id: 23,
    name: "Moruva Candy (Dulces Moruva)",
    slug: "moruva-candy-dulces-moruva",
    category: "Alimentos",
    rawMaterial: "Extracto de Mora Negra (Mulberry) & Semilla de Uva (Resveratrol)",
    presentation: "Frasco con 60 caramelos masticables",
    publicPrice: 6.20,
    partnerPrice: 4.35,
    bv: 2.15,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.moruvaCandyPng)
    ],
    shortDescription: "Golosina funcional rica en resveratrol y proantocianidinas de mora y uva para cuidar la salud cardiovascular y capilar.",
    fullDescription: "La combinación de hojas y frutos de morera negra con extracto de semilla de uva proporciona potentes flavonoides que ayudan a regular los picos de glucosa posprandial y protegen las paredes arteriales.",
    benefits: [
      "Ayuda a estabilizar la absorción de carbohidratos y glucosa",
      "Refuerza la microcirculación en extremidades inferiores (piernas pesadas)",
      "Poderosa acción antioxidante frente al daño solar y ambiental",
      "Sabor a uvas negras y moras maduras"
    ],
    ingredients: [
      "Extracto de Mora de Morera (Morus alba)",
      "Extracto concentrado de Semilla de Uva (95% OPC)",
      "Polifenoles de arándano",
      "Isomaltitol purificado"
    ],
    usageInstructions: [
      "Consumir 1 a 2 caramelos antes o después de comidas ricas en carbohidratos."
    ],
    tags: ["moruva", "morera", "uva", "resveratrol", "circulación", "glucosa"]
  },
  {
    id: 24,
    name: "Choco Blue (Chocolate con Arándanos)",
    slug: "choco-blue-chocolate-con-arandanos",
    category: "Alimentos",
    rawMaterial: "Cacao Puro Fino de Aroma & Extracto de Arándano Silvestre",
    presentation: "Caja con tabletas gourmet individuales",
    publicPrice: 18.00,
    partnerPrice: 12.50,
    bv: 6.25,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.chocoBluePng),
      getDriveUrl(HGW_DRIVE_ASSETS.chocoBlueWebp),
      getDriveUrl(HGW_DRIVE_ASSETS.chocoBlueNoBg)
    ],
    shortDescription: "Chocolates finos funcionales elaborados con cacao puro antioxidante y trozos de arándano liofilizado. Placer saludable sin culpa.",
    fullDescription: "Combina los teobrominas y flavonoles estimulantes del cacao con las antocianinas del arándano. Eleva los niveles de serotonina y dopamina en el cerebro, mejorando el estado anímico y protegiendo el sistema cardiovascular.",
    benefits: [
      "Mejora el estado de ánimo, reduce la ansiedad y promueve la felicidad",
      "Rico en polifenoles que protegen el corazón y las arterias",
      "Elaborado con manteca de cacao pura sin grasas trans",
      "Experiencia gourmet inigualable para regalar o consentirse"
    ],
    ingredients: [
      "Pasta de cacao fino de aroma (70%)",
      "Manteca de cacao prensada en frío",
      "Arándanos silvestres canadienses liofilizados",
      "Azúcar de caña orgánica en baja proporción"
    ],
    usageInstructions: [
      "Disfrutar de 1 o 2 porciones al día como snack saludable de media tarde."
    ],
    tags: ["chocolate", "cacao", "arándano", "antioxidante", "ánimo", "gourmet"]
  },
  {
    id: 25,
    name: "Choco Gano (Chocolate con Ganoderma Lucidum)",
    slug: "choco-gano-chocolate-con-ganoderma",
    category: "Alimentos",
    rawMaterial: "Cacao Oscuro Seleccionado & Extracto de Ganoderma Rojo",
    presentation: "Caja con tabletas gourmet individuales",
    publicPrice: 19.00,
    partnerPrice: 13.30,
    bv: 6.65,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.chocoGanoNoBg),
      getDriveUrl(HGW_DRIVE_ASSETS.chocoGanoPng),
      getDriveUrl(HGW_DRIVE_ASSETS.chocoGanoWebp)
    ],
    shortDescription: "Fusión irresistible de chocolate oscuro de alta pureza con los beneficios inmunológicos y adaptógenos del hongo Ganoderma Lucidum.",
    fullDescription: "La combinación perfecta entre el placer del chocolate fino y la longevidad del Reishi. Ayuda a neutralizar el estrés del día a día, refuerza las defensas naturales y revitaliza la energía física.",
    benefits: [
      "Estimula el sistema inmune mientras deleita el paladar",
      "Excelente fuente de antioxidantes flavonoides y polisacáridos",
      "Apoya la salud cerebral y la claridad mental",
      "Sin conservadores artificiales ni grasas hidrogenadas"
    ],
    ingredients: [
      "Masa de cacao orgánico de alta pureza",
      "Extracto soluble de hongo Ganoderma Lucidum",
      "Manteca de cacao natural",
      "Vainilla botánica pura"
    ],
    usageInstructions: [
      "Consumir 1 tableta al día como indulgencia nutritiva."
    ],
    tags: ["chocolate", "ganoderma", "reishi", "inmunidad", "longevidad"]
  },
  {
    id: 26,
    name: "Spirulina Plus Capsule (Espirulina en Cápsulas)",
    slug: "spirulina-plus-capsule-espirulina-en-capsulas",
    category: "Suplementos",
    rawMaterial: "Microalga Spirulina Platensis Pura & Extracto de Ginseng",
    presentation: "Frasco con 60 cápsulas vegetales",
    publicPrice: 35.00,
    partnerPrice: 24.50,
    bv: 12.25,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    bestSeller: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.spirulinaCapsulas)
    ],
    shortDescription: "El superalimento más completo del planeta en cápsulas. Aporta más de 100 nutrientes esenciales, proteínas, hierro y clorofila depurativa.",
    fullDescription: "Cultivada en aguas alcalinas de máxima pureza. La Spirulina HGW está enriquecida con ficocianina y oligoelementos que combaten la anemia ferropénica, desintoxican metales pesados del cuerpo y nutren a nivel celular profundamente.",
    benefits: [
      "Combate la anemia, la fatiga crónica y la desnutrición",
      "Excelente aporte proteico (65% proteína vegetal de fácil absorción)",
      "Poderoso desintoxicante de la sangre y oxigenador celular",
      "Refuerza el sistema inmunológico e incrementa la vitalidad"
    ],
    ingredients: [
      "Polvo puro de Spirulina Platensis orgánica",
      "Extracto de Ginseng Rojo",
      "Cápsula de celulosa vegetal 100% vegetariana"
    ],
    usageInstructions: [
      "Tomar 2 cápsulas al día con abundante agua, 30 minutos antes de las comidas."
    ],
    tags: ["espirulina", "suplemento", "superalimento", "hierro", "anemia", "energía"]
  },
  {
    id: 27,
    name: "Tourmaline Healthcare Insoles (Plantillas de Turmalina)",
    slug: "tourmaline-healthcare-insoles-plantillas-de-turmalina",
    category: "Accesorios",
    rawMaterial: "Puntos de Turmalina Bioeléctrica & Iones Negativos",
    presentation: "1 par de plantillas recortables (Tallas 36 a 44)",
    publicPrice: 25.00,
    partnerPrice: 17.50,
    bv: 8.75,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.plantillasTurmalinaWebp),
      getDriveUrl(HGW_DRIVE_ASSETS.plantillasTurmalinaPng)
    ],
    shortDescription: "Plantillas terapéuticas con puntos de presión y turmalina activa para estimular los puntos reflexológicos de los pies y activar el retorno venoso.",
    fullDescription: "Basadas en la reflexología podal y la tecnología de iones negativos. Al caminar, la fricción y el calor corporal activan los microcristales de turmalina, emitiendo rayos infrarrojos lejanos que mejoran la circulación sanguínea de las piernas y alivian el cansancio.",
    benefits: [
      "Estimula los puntos de acupuntura podal correspondientes a los órganos vitales",
      "Alivia la pesadez en las piernas, hinchazón de tobillos y várices",
      "Efecto desodorizante y antibacteriano natural para el calzado",
      "Material transpirable, ergonómico y recortable a cualquier talla"
    ],
    ingredients: [
      "Tejido transpirable de alta resistencia",
      "Micro-nódulos de polvo de turmalina bioactiva",
      "Capa amortiguadora de EVA de alto impacto"
    ],
    usageInstructions: [
      "Recortar según la línea de la talla de su calzado habitual.",
      "Colocar dentro de los zapatos con los nódulos de turmalina hacia arriba."
    ],
    tags: ["plantillas", "turmalina", "pies", "circulación", "reflexología"]
  },
  {
    id: 28,
    name: "Tourmaline Self-Heating Knee Protector (Rodillera Térmica de Turmalina)",
    slug: "tourmaline-self-heating-knee-protector-rodillera-termica",
    category: "Accesorios",
    rawMaterial: "Matriz de Turmalina Autocalentable & Imanes Terapéuticos",
    presentation: "1 par de rodilleras ajustables con velcro",
    publicPrice: 48.00,
    partnerPrice: 33.60,
    bv: 16.80,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    bestSeller: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.protectorRodillaNoBg),
      getDriveUrl(HGW_DRIVE_ASSETS.protectorRodillaJpg),
      getDriveUrl(HGW_DRIVE_ASSETS.protectorRodillaPiedras)
    ],
    shortDescription: "Rodilleras autocalentables con turmalina y magnetoterapia para aliviar dolor articular, artrosis, inflamación y rigidez en minutos sin químicos.",
    fullDescription: "Al contacto con la humedad natural de la piel, la matriz de turmalina genera una agradable sensación térmica profunda que dilata los capilares, relaja los ligamentos y acelera la regeneración del cartílago articular de la rodilla.",
    benefits: [
      "Genera calor terapéutico profundo de forma 100% natural y autónoma",
      "Alivia dolores agudos y crónicos por artritis, artrosis o lesiones deportivas",
      "Reduce la inflamación y rigidez articular al caminar o subir escaleras",
      "Ajuste ergonómico firme mediante correas de velcro elásticas"
    ],
    ingredients: [
      "Tejido elástico de neopreno transpirable",
      "Matriz de nanopartículas de turmalina autocalentable",
      "Imanes permanentes de neodimio de uso médico"
    ],
    usageInstructions: [
      "Humedecer ligeramente la zona central con agua para acelerar el efecto térmico.",
      "Ajustar en la rodilla durante 20 a 40 minutos según tolerancia.",
      "Usar 1 a 2 veces al día."
    ],
    tags: ["rodillera", "turmalina", "artrosis", "dolor de rodilla", "calor terapéutico"]
  },
  {
    id: 29,
    name: "Tourmaline Waist Protector (Faja Térmica Lumbar de Turmalina)",
    slug: "tourmaline-waist-protector-faja-termica-lumbar",
    category: "Accesorios",
    rawMaterial: "Turmalina Bio-Térmica & Soporte Lumbar con Imanes",
    presentation: "1 faja lumbar ergonómica ajustable",
    publicPrice: 65.00,
    partnerPrice: 45.50,
    bv: 22.75,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    bestSeller: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.protectorCinturaPiedras),
      getDriveUrl(HGW_DRIVE_ASSETS.protectorCinturaJpg),
      getDriveUrl(HGW_DRIVE_ASSETS.protectorCinturaNoBg)
    ],
    shortDescription: "Faja lumbar autocalentable que combina magnetoterapia y turmalina para desinflamar la zona lumbar, aliviar el nervio ciático y corregir postura.",
    fullDescription: "La solución número uno para quienes sufren de lumbalgias, hernias discales, ciática o dolores por pasar muchas horas sentados. Su calor profundo descontractura los músculos espinales y desinflama los nervios lumbares.",
    benefits: [
      "Alivia dolores lumbares intensos, ciática y espasmos musculares",
      "Brinda soporte ortopédico firme a la columna vertebral",
      "El calor por infrarrojo lejano mejora la circulación en la zona renal",
      "Fácil de poner y ajustar debajo de la ropa diaria"
    ],
    ingredients: [
      "Estructura elástica reforzada con varillas de soporte",
      "Placa de turmalina bioenergética autocalentable",
      "Imanes terapéuticos de ferrita"
    ],
    usageInstructions: [
      "Colocar en la zona lumbar ajustando los velcros laterales.",
      "Dejar actuar entre 20 y 45 minutos hasta sentir el calor reconfortante."
    ],
    tags: ["faja lumbar", "turmalina", "ciática", "dolor de espalda", "lumbalgia"]
  },
  {
    id: 30,
    name: "Tourmaline Self-Heating Neck Protector (Cuellera Térmica de Turmalina)",
    slug: "tourmaline-self-heating-neck-protector-cuellera-termica",
    category: "Accesorios",
    rawMaterial: "Puntos de Turmalina Térmica & Imanes Cervicales",
    presentation: "1 unidad de protector cervical ajustable",
    publicPrice: 28.00,
    partnerPrice: 19.60,
    bv: 9.80,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.protectorCuelloNoBg),
      getDriveUrl(HGW_DRIVE_ASSETS.protectorCuelloJpg),
      getDriveUrl(HGW_DRIVE_ASSETS.protectorCuelloAlt)
    ],
    shortDescription: "Protector cervical autocalentable para aliviar tortícolis, tensión en hombros, dolores de cabeza tensionales y contracturas por estrés.",
    fullDescription: "Diseñado para personas que trabajan frente a ordenadores o conducen durante largas horas. Libera la tensión acumulada en las vértebras cervicales, mejorando el flujo sanguíneo hacia el cerebro y aliviando mareos y cefaleas.",
    benefits: [
      "Descontractura los músculos del cuello y hombros rápidamente",
      "Alivia cefaleas tensionales y mareos de origen cervical",
      "Genera calor relajante y emite iones negativos terapéuticos",
      "Ligero, portátil y muy fácil de usar en casa o la oficina"
    ],
    ingredients: [
      "Tejido de neopreno suave al tacto",
      "Puntos de turmalina bioactiva emisores de infrarrojo lejano",
      "Micro-imanes para magnetoterapia localizada"
    ],
    usageInstructions: [
      "Humedecer ligeramente con agua la cara interna para activar el calor rápido.",
      "Ajustar en el cuello con el velcro durante 15 a 30 minutos."
    ],
    tags: ["cuellera", "cervical", "turmalina", "tortícolis", "estrés"]
  },
  {
    id: 31,
    name: "Toalla Sanitaria con Turmalina Uso Noche",
    slug: "toalla-sanitaria-con-turmalina-uso-noche",
    category: "Cuidado personal",
    rawMaterial: "Tira de Turmalina Aniónica, Algodón Puro & Polímero Superabsorbente",
    presentation: "Paquete con 8 toallas extra largas con alas",
    publicPrice: 5.50,
    partnerPrice: 3.85,
    bv: 1.90,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    bestSeller: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.toallaSanitariaNoche)
    ],
    shortDescription: "Toallas higiénicas nocturnas ultra absorbentes con cinta de turmalina y aniones para un descanso seguro, sin fugas, olores ni cólicos.",
    fullDescription: "Revolución en la higiene íntima femenina. Su chip central verde de turmalina emite más de 6.000 iones negativos por cm³, neutralizando el 99.9% de bacterias anaeróbicas causantes del mal olor e infecciones ginecológicas, mientras previene cólicos menstruales intensos.",
    benefits: [
      "Chip de turmalina con emisión continua de aniones antibacterianos",
      "Alivia eficazmente cólicos e inflamaciones menstruales",
      "Superficie de algodón 100% hipoalergénico que previene irritaciones y hongos",
      "Polímero japonés de absorción rápida que bloquea la humedad al instante"
    ],
    ingredients: [
      "Capa superficial de algodón suave no tejido",
      "Tira bioeléctrica aniónica de turmalina",
      "Polímero absorbente de origen natural",
      "Capa base microperforada transpirable"
    ],
    usageInstructions: [
      "Usar durante la noche para una protección de hasta 10 horas continuas."
    ],
    tags: ["toalla sanitaria", "turmalina", "aniones", "higiene íntima", "noche", "mujer"]
  },
  {
    id: 32,
    name: "Protector Íntimo Diario con Turmalina",
    slug: "protector-intimo-diario-con-turmalina",
    category: "Cuidado personal",
    rawMaterial: "Cinta de Aniones de Turmalina & Algodón Orgánico Transpirable",
    presentation: "Paquete con 30 protectores diarios ultra delgados",
    publicPrice: 6.00,
    partnerPrice: 4.20,
    bv: 2.10,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    bestSeller: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.protectoresIntimos)
    ],
    shortDescription: "Protectores diarios ultraligeros con turmalina aniónica para mantener la zona íntima fresca, libre de humedad, hongos e infecciones.",
    fullDescription: "Ideal para el uso diario fuera del periodo menstrual. Regula el pH vaginal, combate el flujo anormal, previene la candidiasis y aporta frescura y confort durante toda la jornada laboral o de entrenamiento físico.",
    benefits: [
      "Previene infecciones urinarias y ginecológicas recurrentes",
      "Neutraliza olores de forma biológica sin fragancias químicas",
      "Ultra delgado y flexible: no se mueve ni se nota",
      "Permite la transpiración natural de la piel evitando la humedad excesiva"
    ],
    ingredients: [
      "Cubierta de algodón puro hipoalergénico",
      "Cinta verde de turmalina bioenergética",
      "Adhesivo de grado alimenticio seguro"
    ],
    usageInstructions: [
      "Utilizar 1 protector al día para una frescura y protección continua."
    ],
    tags: ["protectores diarios", "turmalina", "aniones", "higiene femenina", "salud íntima"]
  },
  {
    id: 33,
    name: "Toalla Sanitaria con Turmalina Uso Día",
    slug: "toalla-sanitaria-con-turmalina-uso-dia",
    category: "Cuidado personal",
    rawMaterial: "Cinta de Turmalina Aniónica, Algodón Puro & Núcleo Superabsorbente",
    presentation: "Paquete con 10 toallas regulares con alas",
    publicPrice: 5.50,
    partnerPrice: 3.85,
    bv: 1.90,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    bestSeller: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.toallaSanitariaDia)
    ],
    shortDescription: "Toallas higiénicas diurnas con chip de aniones de turmalina para máxima libertad de movimiento, alivio del dolor y cero humedad.",
    fullDescription: "Diseñadas para acompañar a la mujer activa durante sus actividades cotidianas. Su capacidad de absorción supera 3 veces a las toallas convencionales, manteniendo la piel completamente seca y protegida contra irritaciones.",
    benefits: [
      "Absorción inmediata que mantiene la superficie 100% seca",
      "Disminuye notablemente la hinchazón y molestias del ciclo menstrual",
      "Cero plásticos tóxicos, blanqueadores con cloro o perfumes químicos",
      "Empaque hermético individual que garantiza esterilidad absoluta"
    ],
    ingredients: [
      "Algodón virgen esterilizado",
      "Chip bioeléctrico de turmalina",
      "Gel de absorción de polímero natural no tóxico"
    ],
    usageInstructions: [
      "Cambiar según necesidad durante el flujo diurno."
    ],
    tags: ["toallas higiénicas", "turmalina", "día", "aniones", "mujer"]
  },
  {
    id: 34,
    name: "Press On Nails (Uñas Acrílicas Postizas)",
    slug: "press-on-nails-unas-acrilicas-postizas",
    category: "Belleza",
    rawMaterial: "Acrílico Eco-Friendly de Alta Resistencia & Adhesivo Hipoalergénico",
    presentation: "Kit completo con 24 uñas de diferentes tamaños y accesorios de aplicación",
    publicPrice: 15.00,
    partnerPrice: 10.50,
    bv: 5.25,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.pressOnNailsPng),
      getDriveUrl(HGW_DRIVE_ASSETS.pressOnNailsHgw),
      getDriveUrl(HGW_DRIVE_ASSETS.pressOnNailsPostizas)
    ],
    shortDescription: "Uñas postizas de calidad de salón con diseños en tendencia. Aplicación en 5 minutos sin dañar la uña natural ni necesidad de lámpara UV.",
    fullDescription: "Manicura perfecta al instante desde la comodidad de casa. Fabricadas con materiales biocompatibles no tóxicos que no debilitan el lecho ungueal y ofrecen una durabilidad de hasta 2 a 3 semanas con acabado brillante profesional.",
    benefits: [
      "Aplicación rápida y sencilla en menos de 5 minutos",
      "Reutilizables y resistentes a golpes y tareas cotidianas",
      "No maltratan ni adelgazan la uña natural",
      "Variedad de tamaños para un ajuste perfecto en cada dedo"
    ],
    ingredients: [
      "Polímero acrílico flexible de grado cosmético",
      "Pestañas adhesivas de silicona hipoalergénica",
      "Lima y palillo de madera incluidos"
    ],
    usageInstructions: [
      "Limpiar la uña natural con alcohol, elegir el tamaño adecuado, aplicar la lámina adhesiva y presionar la uña durante 20 segundos."
    ],
    tags: ["press on nails", "uñas postizas", "belleza", "manicura", "estética"]
  },
  {
    id: 35,
    name: "Pulsera de Turmalina Versión Limitada (Cód. 51-57)",
    slug: "pulsera-de-turmalina-version-limitada-51-57",
    category: "Accesorios",
    rawMaterial: "Cuentas pulidas de Turmalina Negra y Policroma Natural",
    presentation: "1 unidad en estuche de terciopelo de lujo",
    publicPrice: 35.00,
    partnerPrice: 24.50,
    bv: 12.25,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.pulseraTurmalina34),
      getDriveUrl(HGW_DRIVE_ASSETS.pulseras1024)
    ],
    shortDescription: "Pulsera bioenergética de gemas de turmalina seleccionadas. Emite iones negativos para neutralizar la radiación electromagnética de celulares.",
    fullDescription: "Joyería terapéutica de alta gama. La turmalina es la única piedra mineral que genera un campo bioeléctrico natural de 0.06 mA, similar a la corriente celular humana, ayudando a equilibrar el sistema nervioso y mejorar la circulación periférica.",
    benefits: [
      "Protección contra la contaminación electromagnética (Wi-Fi, teléfonos 5G)",
      "Mejora la microcirculación en manos, muñecas y brazos",
      "Armoniza los campos energéticos y reduce el estrés bioeléctrico",
      "Diseño elegante unisex adaptable a cualquier atuendo"
    ],
    ingredients: [
      "Cuentas esféricas de turmalina mineral 100% auténtica",
      "Hilo elástico de silicona de alta tenacidad"
    ],
    usageInstructions: [
      "Llevar en la muñeva izquierda para receptividad energética o derecha para protección diaria."
    ],
    tags: ["pulsera", "turmalina", "energía", "iones negativos", "joyería"]
  },
  {
    id: 36,
    name: "Colgante Piedra Energética de Turmalina",
    slug: "colgante-piedra-energetica-turmalina",
    category: "Accesorios",
    rawMaterial: "Turmalina de alta pureza mineral",
    presentation: "1 unidad con cordón ajustable",
    publicPrice: 50.00,
    partnerPrice: 35.00,
    bv: 21.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.colgantePiedraEnergetica)
    ],
    shortDescription: "Colgante de cristal de turmalina bioactiva para protección áurica, armonización de chakras del corazón y garganta y neutralización de campos EMF.",
    fullDescription: "Piedra receptiva y protectora de alto calibre. Su proximidad al timo y al chakra cardíaco favorece la sensación de serenidad, enfoque mental y escudo bio-magnético.",
    benefits: [
      "Potente emisión de iones negativos y rayos infrarrojos lejanos",
      "Protege contra ondas electromagnéticas dañinas en el entorno laboral",
      "Armoniza los centros de energía (Chakras cardíaco y de garganta)",
      "Aporta serenidad, perspectiva y equilibrio emocional"
    ],
    ingredients: [
      "Cristal pulido de turmalina natural",
      "Engaste hipoalergénico"
    ],
    usageInstructions: [
      "Colgar en el pecho a la altura del esternón. Recargar al sol matutino 1 hora semanalmente."
    ],
    tags: ["colgante", "turmalina", "chakras", "protección emf", "energía"]
  },
  {
    id: 37,
    name: "Collar de Turmalina Versión Limitada (Cód. 51-57)",
    slug: "collar-de-turmalina-version-limitada-51-57",
    category: "Accesorios",
    rawMaterial: "Cuentas de Turmalina multicolor pulida",
    presentation: "1 unidad collar de lujo",
    publicPrice: 43.00,
    partnerPrice: 30.00,
    bv: 18.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.collarTurmalina38),
      getDriveUrl(HGW_DRIVE_ASSETS.collarTurmalina39),
      getDriveUrl(HGW_DRIVE_ASSETS.collarTurmalina41)
    ],
    shortDescription: "Collar de piedras de turmalina seleccionadas. Estimula la circulación en la zona cervical, garganta y glándula tiroides.",
    fullDescription: "Gemas mixtas naturales ensartadas con precisión artesanal. Ideal para quienes buscan unir la belleza de la joyería fina con los beneficios holísticos de la litoterapia.",
    benefits: [
      "Mejora la microcirculación cervical y linfática",
      "Favorece el balance en la zona de la garganta y tiroides",
      "Equilibra el campo bioeléctrico corporal",
      "Pieza exclusiva de edición limitada"
    ],
    ingredients: [
      "Cuentas esféricas de turmalina natural",
      "Broche de seguridad de acero inoxidable"
    ],
    usageInstructions: [
      "Usar como accesorio diario sobre la piel o prenda."
    ],
    tags: ["collar", "turmalina", "tiroides", "joyas", "infrarrojo"]
  },
  {
    id: 38,
    name: "Collar de Turmalina Clásico",
    slug: "collar-de-turmalina-clasico",
    category: "Accesorios",
    rawMaterial: "Piedra de Turmalina Negra y policroma",
    presentation: "1 unidad collar terapéutico",
    publicPrice: 40.00,
    partnerPrice: 28.00,
    bv: 16.80,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.collarTurmalina37),
      getDriveUrl(HGW_DRIVE_ASSETS.collarTurmalina42)
    ],
    shortDescription: "Collar continuo de turmalina para promover la vitalidad, disipar cargas electromagnéticas y elevar el chi personal.",
    fullDescription: "El collar clásico de HGW ayuda a personas con fatiga crónica, dolores de cabeza recurrentes o sobreexposición a computadores a reencontrar su centro y vitalidad.",
    benefits: [
      "Emisión constante de iones negativos terapéuticos",
      "Alivia la tensión muscular en el cuello y hombros",
      "Protección contra campos electromagnéticos",
      "Resistente y duradero para uso continuo"
    ],
    ingredients: [
      "Turmalina mineral natural",
      "Alma de hilo reforzado"
    ],
    usageInstructions: [
      "Llevar en el cuello durante la jornada diurna."
    ],
    tags: ["collar", "turmalina clasico", "energía", "antirradiacion"]
  },
  {
    id: 39,
    name: "Pulsera de Turmalina Clásica",
    slug: "pulsera-de-turmalina-clasica",
    category: "Accesorios",
    rawMaterial: "Cuentas pulidas de Turmalina",
    presentation: "1 unidad pulsera elástica",
    publicPrice: 20.00,
    partnerPrice: 14.00,
    bv: 8.40,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.pulseraTurmalina33),
      getDriveUrl(HGW_DRIVE_ASSETS.pulseras1024)
    ],
    shortDescription: "Pulsera terapéutica elástica con cuentas de turmalina para mejorar la circulación de la mano, muñeca y canalizar energía positiva.",
    fullDescription: "Ideal para trabajadores de oficina, diseñadores o personas con síndrome de túnel carpiano que requieren estimular el flujo sanguíneo en la muñeca.",
    benefits: [
      "Mejora la microcirculación periférica en muñeca y dedos",
      "Disminuye la rigidez articular en manos",
      "Emisión de rayos infrarrojos lejanos bioactivos",
      "Práctica, cómoda y adaptable a cualquier muñeca"
    ],
    ingredients: [
      "Cuentas esféricas de turmalina",
      "Elástico de alta resistencia"
    ],
    usageInstructions: [
      "Usar en la muñeca de forma continuada."
    ],
    tags: ["pulsera", "turmalina", "muñeca", "túnel carpiano", "circulación"]
  },
  {
    id: 40,
    name: "Tourmaline Thermo WATERSON (Termo Alcalinizador)",
    slug: "tourmaline-thermo-waterson-termo-alcalinizador",
    category: "Equipo",
    rawMaterial: "Filtro de Turmalina mineral, Maifanita y Acero Inoxidable 304",
    presentation: "1 unidad termo con filtro de 500 ml",
    publicPrice: 95.00,
    partnerPrice: 65.00,
    bv: 32.50,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    bestSeller: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.thermoTurmalinaJpg),
      getDriveUrl(HGW_DRIVE_ASSETS.thermoTurmalinaNoBg)
    ],
    shortDescription: "Termo ionizador que transforma el agua común ácida en agua alcalina ionizada (pH 8.5+), rica en hidrógeno y microestructurada en minutos.",
    fullDescription: "El termo WATERSON de HGW es una obra maestra de la tecnología hídrica. Su núcleo mineral con esferas de turmalina, piedra maifan y minerales alcalinos eleva el pH del agua, reduce el potencial de óxido-reducción (ORP negativo) y genera racimos moleculares más pequeños que hidratan a nivel celular profundamente.",
    benefits: [
      "Convierte el agua ácida en agua alcalina ionizada rica en minerales",
      "Poderoso efecto antioxidante al reducir el ORP del agua",
      "Microestructura el agua para una hidratación celular 3 veces más rápida",
      "Elimina impurezas residuales y mejora el sabor del agua",
      "Fabricado en acero inoxidable de grado alimenticio ultra durable"
    ],
    ingredients: [
      "Cuerpo de Acero Inoxidable doble pared al vacío",
      "Filtro cerámico con esferas de turmalina activa y minerales traza"
    ],
    usageInstructions: [
      "Llenar con agua potable, agitar suavemente durante 30 segundos y dejar reposar de 5 a 10 minutos.",
      "Beber el agua alcalinizada fresca durante todo el día."
    ],
    tags: ["termo", "agua alcalina", "waterson", "turmalina", "antioxidante", "equipo"]
  },
  {
    id: 41,
    name: "Coffee Cup (Taza Térmica para Café)",
    slug: "coffee-cup-taza-termica-cafe",
    category: "Equipo",
    rawMaterial: "Acero inoxidable aislante",
    presentation: "1 unidad taza térmica ergonómica",
    publicPrice: 26.00,
    partnerPrice: 18.00,
    bv: 7.20,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.coffeeCupNoBg),
      getDriveUrl(HGW_DRIVE_ASSETS.coffeeCupJpg)
    ],
    shortDescription: "Taza térmica elegante con tapa hermética de acero inoxidable para mantener tus cafés HGW calientes durante horas.",
    fullDescription: "Diseñada para disfrutar tus bebidas HGW donde vayas. Conserva la temperatura óptima evitando la pérdida de aroma y sabor de tus cafés funcionales.",
    benefits: [
      "Mantiene bebidas calientes o frías por tiempo prolongado",
      "Acero inoxidable de grado alimentario libre de BPA",
      "Tapa antiderrame para auto o escritorio"
    ],
    ingredients: [
      "Acero inoxidable 304",
      "Silicona de sellado hermético"
    ],
    usageInstructions: [
      "Lavar antes del primer uso. Ideal para preparar sobres individuales de café HGW."
    ],
    tags: ["taza", "termo", "café", "equipo", "acero"]
  },
  {
    id: 42,
    name: "Hervidor Eléctrico de Acero Inoxidable (1.8 Litros)",
    slug: "hervidor-electrico-acero-inoxidable-1-8l",
    category: "Equipo",
    rawMaterial: "Acero Inoxidable grado quirúrgico & Termostato de precisión",
    presentation: "1 unidad hervidor eléctrico capacidad 1.8 Litros",
    publicPrice: 60.00,
    partnerPrice: 42.00,
    bv: 8.40,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.hervidorElectricoNoBg),
      getDriveUrl(HGW_DRIVE_ASSETS.hervidorElectricoPng)
    ],
    shortDescription: "Hervidor rápido de alta capacidad con apagado automático y cuerpo completo de acero inoxidable para preparar todas tus infusiones.",
    fullDescription: "Calienta el agua en segundos de manera segura y eficiente. Su interior 100% en acero inoxidable garantiza que tus bebidas no tengan contacto con plásticos a altas temperaturas.",
    benefits: [
      "Calienta agua de forma inmediata con tecnología de ebullición rápida",
      "Apagado automático de seguridad al alcanzar los 100°C",
      "Cuerpo de acero inoxidable higiénico y fácil de limpiar",
      "Capacidad generosa de 1.8 litros para toda la familia"
    ],
    ingredients: [
      "Estructura de Acero Inoxidable",
      "Base giratoria 360°",
      "Elemento calefactor oculto"
    ],
    usageInstructions: [
      "Llenar con agua potable hasta la marca deseada, conectar a la base y accionar el interruptor."
    ],
    tags: ["hervidor", "tetera", "equipo", "café", "infusiones"]
  },
  {
    id: 43,
    name: "Vaso Térmico de Acero Inoxidable",
    slug: "vaso-termico-acero-inoxidable",
    category: "Equipo",
    rawMaterial: "Acero Inoxidable doble pared",
    presentation: "1 unidad vaso térmico",
    publicPrice: 31.50,
    partnerPrice: 22.00,
    bv: 8.80,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.vasoTermicoNoBg),
      getDriveUrl(HGW_DRIVE_ASSETS.vasoTermicoJpg)
    ],
    shortDescription: "Vaso térmico premium para llevar café, té o bebidas frías con máximo aislamiento de temperatura y diseño contemporáneo.",
    fullDescription: "Aislamiento al vacío que no transpira ni calienta el exterior al tacto. Perfecto para tu día a día.",
    benefits: [
      "Conserva bebidas calientes hasta 6 horas y frías hasta 12 horas",
      "Agarre ergonómico y superficie antideslizante",
      "Material higiénico que no retiene olores ni sabores"
    ],
    ingredients: [
      "Acero inoxidable 304",
      "Tapa con boquilla abatible"
    ],
    usageInstructions: [
      "Apto para bebidas frías o calientes."
    ],
    tags: ["vaso térmico", "equipo", "bebidas", "hogar"]
  },
  {
    id: 44,
    name: "Tourmaline Magnet Pillow (Almohada Magnética de Turmalina)",
    slug: "tourmaline-magnet-pillow-almohada-magnetica-turmalina",
    category: "Equipo",
    rawMaterial: "Espuma viscoelástica con memoria, microimanes & Turmalina",
    presentation: "1 unidad almohada ergonómica con funda lavable",
    publicPrice: 89.00,
    partnerPrice: 62.00,
    bv: 18.60,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.almohadaTurmalinaNoBg)
    ],
    shortDescription: "Almohada ergonómica con turmalina y terapia magnética. Induce sueño profundo, alinea la columna cervical y elimina tensiones.",
    fullDescription: "Combina soporte ortopédico cervical con la emisión continua de iones negativos y campos magnéticos suaves que mejoran la oxigenación cerebral durante el sueño, reduciendo ronquidos, contracturas y fatiga al despertar.",
    benefits: [
      "Mejora notablemente la calidad y profundidad del sueño",
      "Alivia tensiones acumuladas en cuello y hombros mientras duermes",
      "Emisión continua de iones negativos y rayos infrarrojos lejanos",
      "Diseño contorneado que alinea de forma natural las vértebras cervicales"
    ],
    ingredients: [
      "Núcleo de memoria viscoelástica ortopédica",
      "Pastillas de turmalina bioenergética",
      "Microimanes terapéuticos",
      "Funda de fibra de bambú transpirable"
    ],
    usageInstructions: [
      "Usar como almohada principal para dormir todas las noches."
    ],
    tags: ["almohada", "sueño", "turmalina", "magnetoterapia", "insomnio", "cervical"]
  },
  {
    id: 45,
    name: "Bolígrafo Punta Gel HGW",
    slug: "boligrafo-punta-gel-hgw",
    category: "Equipo",
    rawMaterial: "Cuerpo metálico y tinta de gel suave",
    presentation: "1 unidad bolígrafo ejecutivo",
    publicPrice: 1.43,
    partnerPrice: 1.00,
    bv: 0.30,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.penGelJpg)
    ],
    shortDescription: "Bolígrafo fino de gel para registrar tus metas, planes de trabajo y momentos importantes con escritura fluida y elegante.",
    fullDescription: "Accesorio oficial corporativo para socios y distribuidores. Tinta de secado rápido y trazo impecable.",
    benefits: [
      "Aspecto fino, ligero y elegante para presentaciones de negocio",
      "Trazo suave y continuo sin manchas",
      "Herramienta de trabajo profesional para el networker"
    ],
    ingredients: [
      "Aleación ligera",
      "Tinta gel negra"
    ],
    usageInstructions: [
      "Uso en papelería de oficina."
    ],
    tags: ["boligrafo", "útiles", "oficina", "hgw"]
  },
  {
    id: 46,
    name: "Pasta Dental con Turmalina Blanca",
    slug: "pasta-dental-con-turmalina-blanca",
    category: "Cuidado personal",
    rawMaterial: "Extracto de Turmalina Blanca purificada & Minerales blanqueadores",
    presentation: "Tubo de pasta dental bioactiva (1 unidad)",
    publicPrice: 8.00,
    partnerPrice: 5.00,
    bv: 3.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    bestSeller: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.pastaTurmalinaBlancaOng),
      getDriveUrl(HGW_DRIVE_ASSETS.pastaTurmalinaBlancaPng)
    ],
    shortDescription: "Dentífrico blanqueador natural con microcristales de turmalina blanca. Elimina manchas de café/té, combate el mal aliento y protege el esmalte.",
    fullDescription: "Fórmula sin flúor abrasivo que utiliza las propiedades bioeléctricas de la turmalina blanca para disolver la placa bacteriana y restaurar la blancura natural de las piezas dentales sin desgastar el esmalte.",
    benefits: [
      "Ayuda al blanqueamiento progresivo de los dientes sin dañar el esmalte",
      "Combate el mal aliento por tiempo prolongado",
      "Deja una sensación de boca mucho más limpia, fresca y saludable",
      "Libre de ingredientes agresivos y flúor perjudicial"
    ],
    ingredients: [
      "Polvo ultrafino de turmalina blanca",
      "Extractos de menta botánica",
      "Carbonato de calcio purificado",
      "Xilitol protector"
    ],
    usageInstructions: [
      "Cepillar los dientes durante 2 a 3 minutos después de cada comida, al menos 3 veces al día."
    ],
    tags: ["pasta dental", "turmalina blanca", "blanqueamiento", "mal aliento", "higiene bucal"]
  },
  {
    id: 47,
    name: "Pasta Dental con Turmalina Negra",
    slug: "pasta-dental-con-turmalina-negra",
    category: "Cuidado personal",
    rawMaterial: "Turmalina Negra & Extractos antiinflamatorios botánicos",
    presentation: "Tubo de pasta dental bioactiva (1 unidad)",
    publicPrice: 8.00,
    partnerPrice: 5.00,
    bv: 3.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    bestSeller: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.pastaTurmalinaNegraPng),
      getDriveUrl(HGW_DRIVE_ASSETS.pastaTurmalinaNegraNoBg)
    ],
    shortDescription: "Pasta dental antiinflamatoria con turmalina negra. Combate encías sangrantes, gingivitis, inflamaciones bucales y mal aliento persistente.",
    fullDescription: "Especialmente recomendada para personas con sensibilidad gingival, sangrado al cepillarse o periodontitis leve. La turmalina negra estimula la regeneración capilar en las encías y neutraliza bacterias bucales anaeróbicas.",
    benefits: [
      "Combate inflamaciones dentales, encías retraídas y sangrado",
      "Acción antibacteriana profunda contra la placa y sarro",
      "Boca fresca, desinfectada y limpia por más tiempo",
      "Alivia la sensibilidad dental al frío o calor"
    ],
    ingredients: [
      "Polvo mineral de turmalina negra",
      "Extractos antiinflamatorios de hierbas chinas",
      "Menta silvestre",
      "Bicarbonato biocompatible"
    ],
    usageInstructions: [
      "Cepillar suavemente encías y dientes durante 3 minutos después de comer."
    ],
    tags: ["pasta dental", "turmalina negra", "gingivitis", "sangrado", "encías"]
  },
  {
    id: 48,
    name: "Pasta Dental con Probióticos HGW",
    slug: "pasta-dental-con-probioticos-hgw",
    category: "Cuidado personal",
    rawMaterial: "Probióticos orales activos & Extractos naturales",
    presentation: "Tubo de pasta dental bioactiva (1 unidad)",
    publicPrice: 8.00,
    partnerPrice: 5.00,
    bv: 2.50,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.pastaProbioticosJpg),
      getDriveUrl(HGW_DRIVE_ASSETS.pastaProbioticosPng)
    ],
    shortDescription: "Dentífrico de avanzada que aporta bacterias benéficas para equilibrar la microbiota oral, frenar microbios nocivos y prevenir caries.",
    fullDescription: "Revolución en la odontología biológica. En lugar de matar todas las bacterias con químicos fuertes, introduce probióticos específicos que compiten contra los microbios que causan sarro, caries y mal aliento, protegiendo tus encías de forma natural.",
    benefits: [
      "Equilibra la flora bacteriana saludable de la cavidad bucal",
      "Aporta bacterias buenas que frenan microbios patógenos",
      "Reduce la formación de placa bacteriana y frena la gingivitis",
      "Disminuye el mal aliento crónico y protege la salud de las encías"
    ],
    ingredients: [
      "Lactobacillus paracasei orales liofilizados",
      "Minerales remineralizantes",
      "Menta suave natural"
    ],
    usageInstructions: [
      "Cepillar diariamente después de cada comida."
    ],
    tags: ["pasta probiótica", "probióticos", "microbiota oral", "caries", "dientes"]
  }
];

export const RAW_MATERIALS = [
  { id: 'arandano', name: 'Arándano (Blueberry)', count: 9 },
  { id: 'turmalina', name: 'Turmalina Bioeléctrica', count: 11 },
  { id: 'ganoderma', name: 'Ganoderma Lucidum', count: 6 },
  { id: 'colageno', name: 'Colágeno Hidrolizado & Péptidos', count: 4 },
  { id: 'probioticos', name: 'Probióticos & Fibras', count: 4 },
  { id: 'hierbas', name: 'Extractos Botánicos & Frutas', count: 8 },
  { id: 'equipos', name: 'Tecnología & Filtración', count: 6 }
];

export function getProductBySlug(slug: string): HGWProduct | undefined {
  return HGW_PRODUCTS.find(p => p.slug === slug || p.slug.toLowerCase() === slug.toLowerCase());
}

export function getCategoryBySlug(slug: string) {
  return CATEGORIES_INFO.find(c => c.slug === slug || c.slug.toLowerCase() === slug.toLowerCase());
}

export function getProductsByCategory(categoryName: string): HGWProduct[] {
  return HGW_PRODUCTS.filter(p => p.category.toLowerCase() === categoryName.toLowerCase() || p.slug.includes(categoryName));
}

export function getProductsForCountry(countryCode: string): HGWProduct[] {
  return HGW_PRODUCTS.filter(p => p.availableCountries.includes(countryCode) || p.availableCountries.includes('ALL'));
}

export function getFeaturedProducts(): HGWProduct[] {
  return HGW_PRODUCTS.filter(p => p.featured);
}

export function getBestSellerProducts(): HGWProduct[] {
  return HGW_PRODUCTS.filter(p => p.bestSeller);
}
