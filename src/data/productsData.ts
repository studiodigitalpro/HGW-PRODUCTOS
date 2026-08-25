import { HGWProduct, HGWCategoryInfo } from '../types';
import { getDriveUrl, HGW_DRIVE_ASSETS } from '../utils/driveImages';

export const CATEGORIES_INFO: HGWCategoryInfo[] = [
  {
    id: 'alimentos',
    slug: 'alimentos',
    name: 'Alimentos',
    title: 'Alimentos y Bebidas Funcionales',
    description: 'Bebidas herbales, cafés terapéuticos enriquecidos con Ganoderma, Cordyceps, Arándano y caramelos bioactivos.',
    iconName: 'Coffee',
    image: getDriveUrl(HGW_DRIVE_ASSETS.blueberryCoffeeJpg),
    color: 'from-amber-600 to-amber-800',
    productCount: 23
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
    description: 'Termo alcalinizador Waterson, almohadas magnéticas ergonómicas, tazas térmicas y hervidores de acero inoxidable.',
    iconName: 'Zap',
    image: getDriveUrl(HGW_DRIVE_ASSETS.thermoTurmalinaJpg),
    color: 'from-sky-600 to-slate-800',
    productCount: 6
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
  }
];

export const HGW_PRODUCTS: HGWProduct[] = [
  {
    id: 1,
    name: "Blueberry Candy (Caramelos de Arándano)",
    slug: "blueberry-candy",
    category: "Alimentos",
    rawMaterial: "Arandanos",
    presentation: "60 caramelos por frasco",
    publicPrice: 5.80,
    partnerPrice: 4.00,
    bv: 2.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    featured: true,
    bestSeller: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.blueberryCandyJpg),
      getDriveUrl(HGW_DRIVE_ASSETS.blueberryCandyP500),
      getDriveUrl(HGW_DRIVE_ASSETS.blueberryCandyWebp)
    ],
    shortDescription: "Deliciosos caramelos antioxidantes ricos en antocianinas puras para proteger la visión, retardar el envejecimiento celular y mejorar la microcirculación.",
    fullDescription: "Formulados con extracto liofilizado de arándano silvestre canadiense, estos caramelos son el snack funcional predilecto. Su alto contenido en antocianinas y polifenoles protege las células oculares contra la luz azul de pantallas y fortalece el sistema inmunológico.",
    benefits: [
      "Protege la retina ocular y disminuye la fatiga visual frente a pantallas",
      "Poderoso efecto antioxidante contra radicales libres",
      "Mejora la elasticidad de los capilares sanguíneos",
      "Apto para toda la familia y práctico para llevar en el bolsillo"
    ],
    ingredients: [
      "Extracto concentrado de Arándano Azul (Vaccinium myrtillus)",
      "Isomaltitol natural",
      "Vitamina C",
      "Polifenoles botánicos activos"
    ],
    usageInstructions: [
      "Consumir de 1 a 2 caramelos al día, preferiblemente entre comidas.",
      "Dejar disolver lentamente en la boca."
    ],
    tags: ["arándano", "visión", "antioxidante", "caramelos", "salud ocular"]
  },
  {
    id: 2,
    name: "Blueberry Fruit Tea (Jam) (Mermelada de Arándanos)",
    slug: "blueberry-fruit-tea-jam",
    category: "Alimentos",
    rawMaterial: "Arandanos",
    presentation: "200 gramos",
    publicPrice: 12.00,
    partnerPrice: 8.00,
    bv: 4.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.mermeladaArandano)
    ],
    shortDescription: "Concentrado y mermelada frutal de arándanos bioactivos para infusiones calientes, frías o untar saludablemente.",
    fullDescription: "Elaborado con arándanos silvestres enteros seleccionados. Rico en antioxidantes solubles, polifenoles y vitamina C para una nutrición celular completa.",
    benefits: [
      "Excelente fuente de bioflavonoides y vitamina C",
      "Favorece la digestión y la saciedad natural",
      "Delicioso sabor natural sin colorantes artificiales",
      "Versátil para preparar como infusión aromática o degustar directamente"
    ],
    ingredients: [
      "Arándano silvestre concentrado (200g)",
      "Fructosa natural",
      "Pectina cítrica",
      "Ácido cítrico natural"
    ],
    usageInstructions: [
      "Disolver 1 a 2 cucharadas en una taza con agua caliente o fría, o untar al gusto."
    ],
    tags: ["mermelada", "té frutal", "arándano", "antioxidante"]
  },
  {
    id: 3,
    name: "Blueberry Collagen Peptide (Péptido de Colágeno de Arándano)",
    slug: "blueberry-collagen-peptide",
    category: "Alimentos",
    rawMaterial: "Arandanos",
    presentation: "12 sobres de 25 gramos c/u",
    publicPrice: 29.00,
    partnerPrice: 20.00,
    bv: 12.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    featured: true,
    bestSeller: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.colagenoP500)
    ],
    shortDescription: "Micro-péptidos bioactivos de colágeno de máxima absorción potenciados con arándano para piel, articulaciones y cabello.",
    fullDescription: "Péptidos bioactivos de bajo peso molecular (<1000 Daltons) que estimulan la síntesis de colágeno tipo I y III, otorgando firmeza dérmica y flexibilidad articular.",
    benefits: [
      "Restaura la elasticidad y firmeza de la piel",
      "Fortalece articulaciones, ligamentos, cabello y uñas",
      "Atenúa líneas de expresión y flacidez",
      "Excelente asimilación con sabor a frutos rojos"
    ],
    ingredients: [
      "Péptidos de colágeno hidrolizado bioactivo",
      "Extracto de arándano en polvo",
      "Vitamina C",
      "Ácido hialurónico vegetal"
    ],
    usageInstructions: [
      "Disolver 1 sobre en 150-200 ml de agua en ayunas o antes de dormir."
    ],
    tags: ["colágeno", "piel", "articulaciones", "antienvejecimiento", "arándano"]
  },
  {
    id: 4,
    name: "Fresh Drink Chang JingJing (Bebida Fresca Chang JingJing)",
    slug: "fresh-drink-chang-jingjing",
    category: "Alimentos",
    rawMaterial: "Mix herbales",
    presentation: "6 sobres de 3.5 gramos c/u",
    publicPrice: 13.00,
    partnerPrice: 9.00,
    bv: 5.40,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    featured: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.freshDrinkChangJingJing),
      getDriveUrl(HGW_DRIVE_ASSETS.freshDrinkColon),
      getDriveUrl(HGW_DRIVE_ASSETS.freshDrinkP500)
    ],
    shortDescription: "Bebida botánica refrescante y depurativa diseñada para aliviar la pesadez estomacal y promover la limpieza intestinal.",
    fullDescription: "Fórmula a base de un mix botánico selecto que ayuda a desinflamar el tracto digestivo, promoviendo ligereza y equilibrio de la microbiota.",
    benefits: [
      "Descongestiona el sistema digestivo de forma suave",
      "Alivia la pesadez abdominal después de comidas copiosas",
      "Aporta antioxidantes botánicos purificadores",
      "Fácil de preparar en cualquier momento del día"
    ],
    ingredients: [
      "Mix herbal bioactivo",
      "Fibras solubles naturales",
      "Extractos botánicos purificantes"
    ],
    usageInstructions: [
      "Disolver 1 sobre en un vaso de agua tibia o fría después de una comida principal."
    ],
    tags: ["digestión", "detox", "herbal", "limpieza"]
  },
  {
    id: 5,
    name: "Pro Shaping Tea (Té Moldeador Profesional)",
    slug: "pro-shaping-tea",
    category: "Alimentos",
    rawMaterial: "Mix herbales",
    presentation: "24 sobres de 3 gramos c/u",
    publicPrice: 23.00,
    partnerPrice: 16.00,
    bv: 9.60,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    featured: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.teQuemadorGrasa),
      getDriveUrl(HGW_DRIVE_ASSETS.proshapingP500)
    ],
    shortDescription: "Té herbal termogénico y desintoxicante formulado para acelerar el metabolismo y quemar grasa acumulada.",
    fullDescription: "Combinación de hierbas medicinales de la medicina tradicional oriental que promueve la lipólisis natural, el drenaje de líquidos retenidos y el control de apetito.",
    benefits: [
      "Acelera el metabolismo basal de forma natural",
      "Favorece la eliminación de líquidos retenidos",
      "Ayuda en el control del apetito y antojos dulces",
      "Brinda energía sostenida sin alterar los nervios"
    ],
    ingredients: [
      "Té verde orgánico",
      "Hojas de loto",
      "Semillas de Cassia",
      "Hierbas termogénicas orientales"
    ],
    usageInstructions: [
      "Infundir 1 sobre en agua caliente durante 5 minutos. Tomar 1 a 2 veces al día."
    ],
    tags: ["control de peso", "té moldeador", "metabolismo", "quema grasa"]
  },
  {
    id: 6,
    name: "Berry Juice HIGH VC (Jugo de Arándanos en Polvo Rico en Vitamina C)",
    slug: "berry-juice-high-vc",
    category: "Alimentos",
    rawMaterial: "Arandanos",
    presentation: "30 sobres de 6 gramos c/u",
    publicPrice: 25.00,
    partnerPrice: 17.00,
    bv: 8.50,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    featured: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.berryJuiceHighVc)
    ],
    shortDescription: "Potente concentrado de arándano silvestre con mega dosis de vitamina C bioasimilable para blindar el sistema inmune.",
    fullDescription: "Bebida antioxidante de alta biodisponibilidad que fortalece las defensas del organismo, combate el daño oxidativo y mejora la vitalidad diaria.",
    benefits: [
      "Mega dosis de vitamina C y bioflavonoides activos",
      "Fortalece el sistema inmunológico contra infecciones",
      "Estimula la producción natural de colágeno dérmico",
      "Refrescante sabor a arándanos sin azúcar añadida"
    ],
    ingredients: [
      "Extracto liofilizado de Arándano silvestre",
      "Ácido L-ascórbico bioactivo (Vitamina C)",
      "Bioflavonoides cítricos",
      "Estevia natural"
    ],
    usageInstructions: [
      "Disolver 1 sobre en 200 ml de agua fresca por la mañana o con el almuerzo."
    ],
    tags: ["vitamina C", "arándano", "inmunidad", "antioxidante"]
  },
  {
    id: 7,
    name: "Blueberry Wine (Vino de Arándanos)",
    slug: "blueberry-wine",
    category: "Licores",
    rawMaterial: "Arandanos",
    presentation: "Botella de 750 ML",
    publicPrice: 36.00,
    partnerPrice: 26.00,
    bv: 5.20,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.vinoArandanosJpg)
    ],
    shortDescription: "Vino artesanal gourmet elaborado 100% con arándanos silvestres canadienses de alta graduación antioxidante.",
    fullDescription: "Bebida alcohólica fina y aromática fruto de la fermentación natural de bayas de arándano silvestre. Conserva polifenoles protectores de la salud cardiovascular.",
    benefits: [
      "Alto contenido de resveratrol y antocianinas protectoras",
      "Favorece la salud cardiovascular y circulación",
      "Exquisito bouquet aromático frutal y aterciopelado",
      "Ideal para celebraciones y brindis saludables"
    ],
    ingredients: [
      "Mosto fermentado de Arándano silvestre (Vaccinium myrtillus)",
      "Levaduras enológicas seleccionadas"
    ],
    usageInstructions: [
      "Servir frío (12°C - 15°C) como aperitivo o digestivo."
    ],
    tags: ["vino", "arándano", "resveratrol", "licor funcional"]
  },
  {
    id: 8,
    name: "Trébol Coffee (Café Trébol)",
    slug: "trebol-coffee",
    category: "Alimentos",
    rawMaterial: "Plantas medicinales",
    presentation: "12 sobres de 15 gramos c/u",
    publicPrice: 23.00,
    partnerPrice: 16.00,
    bv: 8.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.cafeTrebolJpg),
      getDriveUrl(HGW_DRIVE_ASSETS.cafeTrebolPng)
    ],
    shortDescription: "Café gourmet enriquecido con trébol y hierbas medicinales orientales para la vitalidad, microcirculación y calma mental.",
    fullDescription: "Mezcla de café arábica premium con extractos bioactivos de plantas adaptógenas y trébol que mejoran la respuesta al estrés y estimulan la vitalidad.",
    benefits: [
      "Energía sostenida sin taquicardia ni acidez",
      "Mejora la claridad mental y el estado de ánimo",
      "Propiedades adaptógenas reguladoras",
      "Sabor profundo y cremosa textura"
    ],
    ingredients: [
      "Café arábica soluble premium",
      "Extracto de Trébol y plantas medicinales",
      "Crema vegetal no láctea"
    ],
    usageInstructions: [
      "Disolver 1 sobre en 150 ml de agua caliente a 85°C."
    ],
    tags: ["café", "trébol", "plantas medicinales", "energía"]
  },
  {
    id: 9,
    name: "Cordyceps Coffee Cream (Café Cordyceps con Crema)",
    slug: "cordyceps-coffee-cream",
    category: "Alimentos",
    rawMaterial: "Cordyceps Sinensis",
    presentation: "12 sobres de 15 gramos c/u",
    publicPrice: 23.00,
    partnerPrice: 16.00,
    bv: 9.60,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    featured: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.cafeCordycepsJpg),
      getDriveUrl(HGW_DRIVE_ASSETS.cordycepsCoffeePng)
    ],
    shortDescription: "Café suave y cremoso con hongo Cordyceps Sinensis para potencia física, capacidad pulmonar y vigor celular.",
    fullDescription: "El hongo tibetano Cordyceps Sinensis optimiza la oxigenación celular (producción de ATP), aumentando el rendimiento físico y la resistencia inmune.",
    benefits: [
      "Incrementa la energía vital y oxigenación celular",
      "Protege los riñones y vías respiratorias",
      "Mejora el rendimiento atlético y reduce la fatiga",
      "Textura suave, dulce y reconfortante"
    ],
    ingredients: [
      "Café Arábica seleccionado",
      "Extracto de Cordyceps Sinensis liofilizado",
      "Crema vegetal suave",
      "Azúcar de caña reducida"
    ],
    usageInstructions: [
      "Disolver 1 sobre en una taza de agua caliente."
    ],
    tags: ["cordyceps", "café con crema", "energía", "pulmones", "resistencia"]
  },
  {
    id: 10,
    name: "BlackTea Coffee (Café Té Negro)",
    slug: "blacktea-coffee",
    category: "Alimentos",
    rawMaterial: "Plantas medicinales",
    presentation: "12 sobres de 3.5 gramos c/u",
    publicPrice: 20.00,
    partnerPrice: 14.00,
    bv: 7.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.blackTeaCoffeeJpg),
      getDriveUrl(HGW_DRIVE_ASSETS.blackTeaCoffeeP500)
    ],
    shortDescription: "Fusión magistral de café oscuro y té negro fermentado rico en teanina y antioxidantes para un enfoque mental lúcido.",
    fullDescription: "Café puro mezclado con extracto de hojas de té negro añejado. Brinda cafeína equilibrada con L-teanina para una concentración serena y sin nerviosismo.",
    benefits: [
      "Enfoque mental prolongado y memoria activa",
      "Favorece la termogénesis y digestión ligera",
      "Bajo en calorías y sin azúcares añadidos",
      "Aroma tostado y sabor con carácter"
    ],
    ingredients: [
      "Café soluble puro",
      "Extracto concentrado de Té Negro fermentado"
    ],
    usageInstructions: [
      "Disolver 1 sobre en agua caliente al gusto."
    ],
    tags: ["café negro", "té negro", "enfoque", "concentración"]
  },
  {
    id: 11,
    name: "Coffee Ceps (Café Cordyceps Sin Azúcar)",
    slug: "coffee-ceps",
    category: "Alimentos",
    rawMaterial: "Cordyceps Sinensis",
    presentation: "12 sobres de 3.5 gramos c/u",
    publicPrice: 20.00,
    partnerPrice: 14.00,
    bv: 7.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    featured: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.cafeCordycepsCeps),
      getDriveUrl(HGW_DRIVE_ASSETS.cafeCordycepsP500)
    ],
    shortDescription: "Café negro puro 100% sin azúcar potenciado con Cordyceps Sinensis para deportistas y personas con control de glucosa.",
    fullDescription: "La versión pura y sin endulzantes del famoso café con Cordyceps. Ideal para dietas keto, personas con diabetes y amantes del café negro intenso.",
    benefits: [
      "0% azúcar, 0% grasas añadidas",
      "Apto para dietas cetogénicas y diabéticos",
      "Aumenta la oxigenación celular y fuerza muscular",
      "Sabor a café negro puro y vigorizante"
    ],
    ingredients: [
      "Café arábica puro liofilizado",
      "Extracto concentrado de Cordyceps Sinensis"
    ],
    usageInstructions: [
      "Disolver 1 sobre en 150 ml de agua caliente."
    ],
    tags: ["coffee ceps", "sin azúcar", "cordyceps", "keto", "diabetes"]
  },
  {
    id: 12,
    name: "Blueberry Coffee (Café de Arándanos)",
    slug: "blueberry-coffee",
    category: "Alimentos",
    rawMaterial: "Arandanos",
    presentation: "12 sobres de 15 gramos c/u",
    publicPrice: 23.00,
    partnerPrice: 16.00,
    bv: 9.60,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    featured: true,
    bestSeller: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.blueberryCoffeeJpg),
      getDriveUrl(HGW_DRIVE_ASSETS.blueberryCoffeeP500)
    ],
    shortDescription: "El café antioxidante número uno de HGW: granos selectos combinados con arándano canadiense para vista y vitalidad.",
    fullDescription: "Café gourmet enriquecido con antocianinas de arándano silvestre. Protege los vasos sanguíneos oculares, reduce la fatiga mental y brinda un aroma incomparable.",
    benefits: [
      "Protección ocular y antioxidante frente a pantallas",
      "Energía limpia y revitalizante para el día a día",
      "Sabor balanceado con crema suave",
      "Uno de los productos favoritos y más vendidos de HGW"
    ],
    ingredients: [
      "Café arábica premium",
      "Polvo de Arándano silvestre canadiense",
      "Crema vegetal no láctea",
      "Polifenoles bioactivos"
    ],
    usageInstructions: [
      "Disolver 1 sobre en 150 ml de agua caliente."
    ],
    tags: ["café de arándano", "antioxidante", "visión", "bestseller"]
  },
  {
    id: 13,
    name: "Lactiberry (Té Negro Cremoso con Arándanos)",
    slug: "lactiberry",
    category: "Alimentos",
    rawMaterial: "Arandanos",
    presentation: "10 sobres de 30 gramos c/u",
    publicPrice: 26.00,
    partnerPrice: 18.00,
    bv: 9.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.lactiberryP500)
    ],
    shortDescription: "Bebida cremosa tipo milk-tea a base de té negro selecto y arándano azul para consentir tu paladar y nutrir tus células.",
    fullDescription: "Deliciosa bebida que une las notas aromáticas del té negro con la frescura frutal del arándano y una suave crema láctea vegetal reconstituyente.",
    benefits: [
      "Exquisito sabor a té con leche estilo gourmet",
      "Rico en polifenoles antioxidantes y antocianinas",
      "Sensación reconfortante y saciante",
      "Excelente para la merienda o desayuno"
    ],
    ingredients: [
      "Extracto de Té Negro",
      "Arándano azul liofilizado",
      "Crema vegetal premium",
      "Minerales esenciales"
    ],
    usageInstructions: [
      "Disolver 1 sobre en 180-200 ml de agua caliente o con hielo."
    ],
    tags: ["lactiberry", "té con leche", "arándano", "gourmet"]
  },
  {
    id: 14,
    name: "Ashwaganda Coffee (Café de Ashwagandha)",
    slug: "ashwaganda-coffee",
    category: "Alimentos",
    rawMaterial: "Ashwaganda",
    presentation: "12 sobres de 15 gramos c/u",
    publicPrice: 23.00,
    partnerPrice: 16.00,
    bv: 8.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    featured: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.ashwagandhaCoffeeJpg),
      getDriveUrl(HGW_DRIVE_ASSETS.ashwagandhaCoffeePng)
    ],
    shortDescription: "Café adaptógeno con raíz de Withania Somnifera (Ashwagandha) para modular el cortisol, calmar la ansiedad y revitalizar.",
    fullDescription: "La raíz de Ashwagandha es la reina de las hierbas adaptógenas ayurvédicas. En combinación con café gourmet, combate el agotamiento suprarrenal, reduce el estrés y fomenta un descanso reparador.",
    benefits: [
      "Regula los niveles de cortisol y estrés crónico",
      "Alivia la fatiga física y mental sin producir somnolencia",
      "Mejora el estado anímico y la resistencia inmunológica",
      "Sabor suave y aromático"
    ],
    ingredients: [
      "Café arábica de altura",
      "Extracto estandarizado de raíz de Ashwagandha (Withania somnifera)",
      "Crema vegetal suave"
    ],
    usageInstructions: [
      "Tomar 1 taza en la mañana o media tarde para un equilibrio antiestrés."
    ],
    tags: ["ashwagandha", "antiestrés", "adaptógeno", "cortisol", "café"]
  },
  {
    id: 15,
    name: "Ganoderma Soluble Coffee (Café Soluble de Ganoderma)",
    slug: "ganoderma-soluble-coffee",
    category: "Alimentos",
    rawMaterial: "Ganoderma Lucidum",
    presentation: "12 sobres de 15 gramos c/u",
    publicPrice: 23.00,
    partnerPrice: 16.00,
    bv: 9.60,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    featured: true,
    bestSeller: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.cafeGanodermaJpg),
      getDriveUrl(HGW_DRIVE_ASSETS.cafeGanodermaP500),
      getDriveUrl(HGW_DRIVE_ASSETS.berryGanoP500)
    ],
    shortDescription: "El legendario café con Ganoderma Lucidum (Reishi) rojo para desintoxicar el hígado, elevar defensas y regular la tensión.",
    fullDescription: "Contiene extracto puro del hongo Ganoderma Lucidum, hongo venerado por milenios por sus polisacáridos inmunomoduladores y triterpenos protectores del sistema hepático y cardiovascular.",
    benefits: [
      "Fortalece el sistema inmunitario de manera integral",
      "Favorece la desintoxicación hepática y celular",
      "Regula la presión arterial y colesterol sanguíneo",
      "Aporta vitalidad y longevidad celular"
    ],
    ingredients: [
      "Café soluble arábica",
      "Extracto concentrado de Ganoderma Lucidum rojo",
      "Crema vegetal no láctea"
    ],
    usageInstructions: [
      "Disolver 1 sobre en 150 ml de agua caliente por la mañana o tarde."
    ],
    tags: ["ganoderma", "reishi", "café de ganoderma", "inmunidad", "hígado"]
  },
  {
    id: 16,
    name: "Blueberry Soy Protein Powder (Proteína de Soja con Arándanos en Polvo)",
    slug: "blueberry-soy-protein-powder",
    category: "Alimentos",
    rawMaterial: "Arandanos",
    presentation: "10 sobres de 30 gramos c/u",
    publicPrice: 36.00,
    partnerPrice: 25.00,
    bv: 15.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    featured: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.proteinaSoyaP500),
      getDriveUrl(HGW_DRIVE_ASSETS.proteinaSoyaEs1),
      getDriveUrl(HGW_DRIVE_ASSETS.proteinaSoyaPolvo),
      getDriveUrl(HGW_DRIVE_ASSETS.proteinaSoyaNoBg)
    ],
    shortDescription: "Aislado proteico vegetal de soya no-OGM enriquecido con arándano y aminoácidos esenciales para masa muscular y saciedad.",
    fullDescription: "Nutrición celular completa de alta digestibilidad. Proporciona proteína vegetal pura, isoflavonas y antioxidantes para mantener la masa muscular, apoyar la nutrición de adultos mayores y atletas.",
    benefits: [
      "Aporte proteico vegetal de alto valor biológico",
      "Mantiene y tonifica la masa muscular magra",
      "Control de saciedad en planes de control de peso",
      "0% colesterol, libre de lactosa y fácil digestión"
    ],
    ingredients: [
      "Aislado de proteína de soja no-OGM",
      "Extracto liofilizado de Arándano silvestre",
      "Vitaminas del complejo B",
      "Minerales esenciales (Calcio, Magnesio, Zinc)"
    ],
    usageInstructions: [
      "Mezclar 1 sobre en 250 ml de agua, leche vegetal o batidos de frutas."
    ],
    tags: ["proteína", "soya", "arándano", "músculo", "nutrición"]
  },
  {
    id: 17,
    name: "Ganoderma Candy (Caramelos de Ganoderma)",
    slug: "ganoderma-candy",
    category: "Alimentos",
    rawMaterial: "Ganoderma Lucidum",
    presentation: "60 caramelos por frasco",
    publicPrice: 8.30,
    partnerPrice: 5.80,
    bv: 2.90,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.ganubiCandyPng)
    ],
    shortDescription: "Caramelos bioactivos con Ganoderma Lucidum para garganta, defensas y protección frente a cambios de clima.",
    fullDescription: "Prácticos caramelos que liberan triterpenos y betaglucanos directamente en la mucosa bucofaríngea, aliviando la carraspera y respaldando las defensas.",
    benefits: [
      "Protege y suaviza la garganta irritada",
      "Refuerzo inmune práctico y delicioso",
      "Aporta antioxidantes de Ganoderma en cualquier lugar"
    ],
    ingredients: [
      "Extracto de Ganoderma Lucidum",
      "Isomaltitol",
      "Extractos herbales suavizantes"
    ],
    usageInstructions: [
      "Disolver 1 caramelo lentamente en la boca 2 a 3 veces al día."
    ],
    tags: ["ganoderma", "caramelos", "garganta", "inmunidad"]
  },
  {
    id: 18,
    name: "Coffee Candy (Caramelo De Café)",
    slug: "coffee-candy",
    category: "Alimentos",
    rawMaterial: "Café Arabiga",
    presentation: "60 caramelos por frasco",
    publicPrice: 5.80,
    partnerPrice: 4.00,
    bv: 2.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.coffeeCandyJpg),
      getDriveUrl(HGW_DRIVE_ASSETS.coffeeCandyPng),
      getDriveUrl(HGW_DRIVE_ASSETS.coffeeCandyHgwPng)
    ],
    shortDescription: "Caramelos de café arábica tostado natural para mantenerse despierto, enfocado y con aliento fresco.",
    fullDescription: "Elaborados con café arábica de primera selección. Ideales para conductores, estudiantes y jornadas intensas de trabajo.",
    benefits: [
      "Alerta mental y activación inmediata",
      "Sabor auténtico a espresso gourmet",
      "Práctico frasco para viaje o escritorio"
    ],
    ingredients: [
      "Extracto de café arábica puro",
      "Isomaltitol",
      "Aroma natural de café"
    ],
    usageInstructions: [
      "Disfrutar 1 caramelo cuando se requiera concentración o recarga de energía."
    ],
    tags: ["caramelos", "café", "energía", "enfoque"]
  },
  {
    id: 19,
    name: "Biolacti Candy (Caramelo Biolacti)",
    slug: "biolacti-candy",
    category: "Alimentos",
    rawMaterial: "Probioticos",
    presentation: "60 caramelos por frasco",
    publicPrice: 5.80,
    partnerPrice: 4.00,
    bv: 2.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.biolactiCandyPng),
      getDriveUrl(HGW_DRIVE_ASSETS.biolactiCandyHgw)
    ],
    shortDescription: "Caramelos con probióticos activos y prebióticos para la salud de la microbiota oral y digestiva.",
    fullDescription: "Microorganismos benéficos en formato de caramelo bioactivo que colonizan la cavidad bucal protegiendo encías y promoviendo una digestión equilibrada.",
    benefits: [
      "Favorece el equilibrio de la flora bucal y digestiva",
      "Agradable sabor a yogur lácteo suave",
      "Ideal para niños y adultos"
    ],
    ingredients: [
      "Cultivos probióticos liofilizados",
      "Fibras prebióticas",
      "Isomaltitol"
    ],
    usageInstructions: [
      "Disolver 1 a 2 caramelos al día."
    ],
    tags: ["probióticos", "biolacti", "microbiota", "caramelos"]
  },
  {
    id: 20,
    name: "Gestifruit Candy (Caramelo Gestifruta)",
    slug: "gestifruit-candy",
    category: "Alimentos",
    rawMaterial: "Mix herbales",
    presentation: "60 caramelos por frasco",
    publicPrice: 5.80,
    partnerPrice: 4.00,
    bv: 2.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.gestifruitCandyJpg),
      getDriveUrl(HGW_DRIVE_ASSETS.gestifruitCandyPng),
      getDriveUrl(HGW_DRIVE_ASSETS.gestifruitCandyJfif)
    ],
    shortDescription: "Caramelos digestivos a base de frutas y enzimas botánicas para una digestión ágil y vientre plano.",
    fullDescription: "Combinación de extractos frutales ricos en enzimas digestivas naturales como papaína y bromelina para evitar pesadez post-comida.",
    benefits: [
      "Ayuda a procesar comidas pesadas o grasas",
      "Sabor frutal cítrico refrescante",
      "Previene gases y distensión estomacal"
    ],
    ingredients: [
      "Extractos frutales bioenzimáticos",
      "Mix botánico digestivo",
      "Isomaltitol"
    ],
    usageInstructions: [
      "Consumir 1 caramelo después del almuerzo o cena."
    ],
    tags: ["digestión", "enzimas", "frutas", "caramelos"]
  },
  {
    id: 21,
    name: "Peptipro Candy (Caramelo Peptipro)",
    slug: "peptipro-candy",
    category: "Alimentos",
    rawMaterial: "Peptido de colageno",
    presentation: "60 caramelos por frasco",
    publicPrice: 5.80,
    partnerPrice: 4.00,
    bv: 2.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.peptiproCandyPng)
    ],
    shortDescription: "Caramelos con péptidos de colágeno bioasimilables para hidratar y revitalizar la piel durante el día.",
    fullDescription: "Péptidos bioactivos de colágeno en formato snack para nutrir el tejido conectivo, cabello y articulaciones de manera práctica.",
    benefits: [
      "Nutrición de colágeno al alcance de tu mano",
      "Protege contra el fotoenvejecimiento",
      "Delicioso sabor a bayas"
    ],
    ingredients: [
      "Péptidos bioactivos de colágeno",
      "Vitamina C",
      "Isomaltitol"
    ],
    usageInstructions: [
      "Consumir 1 a 2 caramelos al día."
    ],
    tags: ["colágeno", "peptipro", "piel", "caramelos"]
  },
  {
    id: 22,
    name: "Herbal Fresh Candy (Caramelo Fresco a Base de Hierbas)",
    slug: "herbal-fresh-candy",
    category: "Alimentos",
    rawMaterial: "Mix herbales",
    presentation: "60 caramelos por frasco",
    publicPrice: 5.80,
    partnerPrice: 4.00,
    bv: 2.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.herbalFreshCandyPng),
      getDriveUrl(HGW_DRIVE_ASSETS.herbalFreshCandyJpg),
      getDriveUrl(HGW_DRIVE_ASSETS.herbalFreshCandyJfif)
    ],
    shortDescription: "Caramelos refrescantes de menta, eucalipto e hierbas medicinales para despejar vías respiratorias y refrescar el aliento.",
    fullDescription: "Fórmula herbal descongestiva que refresca la garganta, despeja fosas nasales y neutraliza olores bucales de forma prolongada.",
    benefits: [
      "Aliento fresco y desinfección bucal",
      "Despeja la respiración y alivia la resequedad de garganta",
      "Sin azúcar que dañe los dientes"
    ],
    ingredients: [
      "Aceite esencial de menta piperita",
      "Extracto de eucalipto",
      "Hierbas aromáticas purificantes",
      "Isomaltitol"
    ],
    usageInstructions: [
      "Dejar disolver en la boca cuando se requiera frescura o alivio respiratorio."
    ],
    tags: ["menta", "frescura", "respiración", "caramelos"]
  },
  {
    id: 23,
    name: "Moruva Candy (Dulces Moruva)",
    slug: "moruva-candy",
    category: "Alimentos",
    rawMaterial: "Plantas medicinales",
    presentation: "60 caramelos por frasco",
    publicPrice: 5.80,
    partnerPrice: 4.00,
    bv: 2.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.moruvaCandyPng)
    ],
    shortDescription: "Caramelos botánicos a base de hojas de morera y uva silvestre para control de carbohidratos y antioxidación.",
    fullDescription: "La hoja de morera blanca (Morus alba) contiene DNJ natural que ayuda a regular la absorción de azúcares, complementada con los polifenoles de uva.",
    benefits: [
      "Ayuda a modular picos de glucosa tras las comidas",
      "Rico en proantocianidinas de semilla de uva",
      "Sabor agridulce agradable y natural"
    ],
    ingredients: [
      "Extracto de hoja de morera (Morus alba)",
      "Extracto de uva silvestre",
      "Isomaltitol"
    ],
    usageInstructions: [
      "Tomar 1 caramelo 15 minutos antes de alimentos con almidón o azúcar."
    ],
    tags: ["morera", "uva", "glucosa", "antioxidante", "caramelos"]
  },
  {
    id: 24,
    name: "Choco Blue (Chocolate con Arándanos)",
    slug: "choco-blue",
    category: "Alimentos",
    rawMaterial: "Arandanos",
    presentation: "20 sobres de 33 gramos c/u",
    publicPrice: 40.00,
    partnerPrice: 28.00,
    bv: 11.20,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    featured: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.chocoBluePng),
      getDriveUrl(HGW_DRIVE_ASSETS.chocoBlueWebp),
      getDriveUrl(HGW_DRIVE_ASSETS.chocoBlueNoBg)
    ],
    shortDescription: "Bebida chocolatada gourmet con cacao puro y arándanos silvestres para deleite, energía y nutrición cerebral.",
    fullDescription: "Combinación de cacao fino de aroma rico en teobromina y flavonoides con extracto de arándano antioxidante. Una bebida deliciosa que nutre cuerpo y mente.",
    benefits: [
      "Estimula el bienestar emocional y la concentración",
      "Potente dosis de flavonoides del cacao y arándano",
      "Rico y cremoso para disfrutar caliente o frío",
      "Favorito para toda la familia"
    ],
    ingredients: [
      "Cacao puro desgrasado",
      "Extracto de Arándano silvestre",
      "Crema vegetal",
      "Endulzante natural"
    ],
    usageInstructions: [
      "Disolver 1 sobre en una taza de agua o leche caliente (200 ml)."
    ],
    tags: ["chocolate", "arándano", "cacao", "antioxidante"]
  },
  {
    id: 25,
    name: "Choco Gano (Chocolate con Ganoderma)",
    slug: "choco-gano",
    category: "Alimentos",
    rawMaterial: "Ganoderma Lucidum",
    presentation: "20 sobres de 33 gramos c/u",
    publicPrice: 40.00,
    partnerPrice: 28.00,
    bv: 11.20,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    featured: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.chocoGanoPng),
      getDriveUrl(HGW_DRIVE_ASSETS.chocoGanoWebp),
      getDriveUrl(HGW_DRIVE_ASSETS.chocoGanoNoBg)
    ],
    shortDescription: "Exquisito chocolate bioactivo enriquecido con Ganoderma Lucidum para defensas, vitalidad y calma reconfortante.",
    fullDescription: "La mejor forma de consumir Ganoderma para quienes prefieren el chocolate sobre el café. Une el placer del chocolate caliente con las propiedades inmunoestimulantes del hongo Reishi.",
    benefits: [
      "Favorece el sistema inmunológico y el descanso",
      "Delicioso sabor achocolatado aterciopelado",
      "Ideal para niños en etapa escolar y adultos",
      "Ayuda a reducir el estrés y reconforta el cuerpo"
    ],
    ingredients: [
      "Cacao seleccionado premium",
      "Extracto concentrado de Ganoderma Lucidum",
      "Crema vegetal",
      "Azúcar de caña reducida"
    ],
    usageInstructions: [
      "Disolver 1 sobre en 200 ml de agua o leche caliente."
    ],
    tags: ["chocolate", "ganoderma", "inmunidad", "reishi"]
  },
  {
    id: 26,
    name: "Spirulina Plus Capsule (Spirulina en Cápsula)",
    slug: "spirulina-plus-capsule",
    category: "Suplementos",
    rawMaterial: "Spirulina Platensis",
    presentation: "60 capsulas de 500 mg c/u",
    publicPrice: 25.00,
    partnerPrice: 17.00,
    bv: 8.50,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    featured: true,
    bestSeller: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.spirulinaCapsulas)
    ],
    shortDescription: "Superalimento milenario rico en ficocianina, hierro bioasimilable y proteínas completas para combatir anemia y fatiga.",
    fullDescription: "Microalga Spirulina Platensis cultivada en aguas puras de manantial. Contiene más del 65% de proteína de alto valor biológico, clorofila desintoxicante y complejo B completo.",
    benefits: [
      "Combate eficazmente la anemia y eleva los niveles de hemoglobina",
      "Aumenta la energía celular y la resistencia física",
      "Excelente desintoxicante de metales pesados y toxinas",
      "Fortalece uñas, piel, cabello y sistema inmunológico"
    ],
    ingredients: [
      "Polvo 100% puro de Spirulina Platensis orgánica (500mg por cápsula)",
      "Cápsula de celulosa vegetal"
    ],
    usageInstructions: [
      "Tomar 2 cápsulas al día con abundante agua, preferiblemente antes de las comidas."
    ],
    tags: ["espirulina", "anemia", "hierro", "superalimento", "proteína"]
  },
  {
    id: 27,
    name: "Tourmaline Healthcare Insoles (Plantillas de Turmalina)",
    slug: "tourmaline-healthcare-insoles",
    category: "Accesorios",
    rawMaterial: "Turmalina",
    presentation: "1 par",
    publicPrice: 9.00,
    partnerPrice: 6.00,
    bv: 3.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    featured: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.plantillasTurmalinaWebp),
      getDriveUrl(HGW_DRIVE_ASSETS.plantillasTurmalinaPng)
    ],
    shortDescription: "Plantillas bioeléctricas con microcristales de turmalina para estimular zonas reflexológicas, desinflamar pies y activar circulación.",
    fullDescription: "Diseñadas con nódulos de acupresión y partículas de turmalina negra que emiten iones negativos e infrarrojo lejano con el calor corporal, aliviando el cansancio en piernas.",
    benefits: [
      "Estimula los puntos de acupuntura en la planta del pie",
      "Mejora el retorno venoso y reduce la hinchazón de piernas",
      "Acción antibacteriana y desodorante contra el sudor",
      "Recortables a cualquier talla de calzado"
    ],
    ingredients: [
      "Matriz de polímero ergonómico flexible",
      "Micro-gránulos de Turmalina piezoeléctrica",
      "Tejido transpirable hipoalergénico"
    ],
    usageInstructions: [
      "Recortar a la talla adecuada y colocar dentro del calzado de uso diario."
    ],
    tags: ["turmalina", "plantillas", "reflexología", "circulación", "pies"]
  },
  {
    id: 28,
    name: "Tourmaline Self-Heating Knee Protector (Protector de Rodilla Autocalentable de Turmalina)",
    slug: "tourmaline-self-heating-knee-protector",
    category: "Accesorios",
    rawMaterial: "Turmalina",
    presentation: "1 unidad",
    publicPrice: 55.00,
    partnerPrice: 39.00,
    bv: 15.60,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    featured: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.protectorRodillaNoBg),
      getDriveUrl(HGW_DRIVE_ASSETS.protectorRodillaJpg),
      getDriveUrl(HGW_DRIVE_ASSETS.protectorRodillaPiedras)
    ],
    shortDescription: "Rodillera terapéutica que genera calor profundo natural para aliviar dolor articular, artritis, meniscos y rigidez.",
    fullDescription: "Al entrar en contacto con la piel, los puntos de turmalina reaccionan con la humedad corporal emitiendo calor infrarrojo profundo que dilata los capilares y alivia dolores articulares.",
    benefits: [
      "Alivia dolores articulares crónicos, artrosis y reumatismo",
      "Aumenta el flujo sanguíneo y relaja tendones rígidos",
      "Tecnología térmica autónoma sin pilas ni cables",
      "Ajuste ergonómico con velcro resistente"
    ],
    ingredients: [
      "Neopreno transpirable de alta compresión",
      "Matriz de puntos de turmalina autocalentable",
      "Imanes magnéticos de neodimio"
    ],
    usageInstructions: [
      "Humedecer ligeramente con agua tibia la zona de puntos y ajustar sobre la rodilla durante 15 a 30 minutos."
    ],
    tags: ["rodillera", "turmalina", "artritis", "dolor de rodilla", "calor terapéutico"]
  },
  {
    id: 29,
    name: "Tourmaline Waist Protector (Protector de Cintura de Turmalina)",
    slug: "tourmaline-waist-protector",
    category: "Accesorios",
    rawMaterial: "Turmalina",
    presentation: "1 unidad",
    publicPrice: 69.00,
    partnerPrice: 48.00,
    bv: 19.20,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    featured: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.protectorCinturaNoBg),
      getDriveUrl(HGW_DRIVE_ASSETS.protectorCinturaJpg),
      getDriveUrl(HGW_DRIVE_ASSETS.protectorCinturaPiedras)
    ],
    shortDescription: "Faja lumbar térmica con turmalina e imanes para alivio de lumbalgia, ciática, cólicos y soporte de columna.",
    fullDescription: "Proporciona soporte postural lumbar mientras su matriz de turmalina genera termoterapia profunda, desinflamando nervios lumbares y músculos paravertebrales.",
    benefits: [
      "Alivia lumbalgias, ciática y contracturas musculares",
      "Brinda soporte firme a la zona lumbar y columna",
      "Alivia cólicos menstruales y molestias renales leves",
      "Ajuste elástico doble de alta firmeza"
    ],
    ingredients: [
      "Tejido elástico de alta resistencia",
      "Matriz dorsal de turmalina térmica",
      "Barras estabilizadoras ergonómicas",
      "Imanes terapéuticos integrados"
    ],
    usageInstructions: [
      "Colocar alrededor de la cintura ajustando las bandas elásticas laterales por 20 a 40 minutos al día."
    ],
    tags: ["faja lumbar", "cintura", "turmalina", "ciática", "columna"]
  },
  {
    id: 30,
    name: "Tourmaline Self-Heating Neck Protector (Protector de Cuello Autocalentable de Turmalina)",
    slug: "tourmaline-self-heating-neck-protector",
    category: "Accesorios",
    rawMaterial: "Turmalina",
    presentation: "1 unidad",
    publicPrice: 16.00,
    partnerPrice: 11.00,
    bv: 4.40,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.protectorCuelloNoBg),
      getDriveUrl(HGW_DRIVE_ASSETS.protectorCuelloJpg),
      getDriveUrl(HGW_DRIVE_ASSETS.protectorCuelloAlt)
    ],
    shortDescription: "Cuellera térmica con turmalina para aliviar cervicalgia, tortícolis, tensión por pantallas y estrés de hombros.",
    fullDescription: "Diseñada para la zona cervical. La emisión térmica y de iones negativos afloja nudos musculares en trapecio y cuello causados por malas posturas y tensión diaria.",
    benefits: [
      "Alivia la rigidez cervical y mareos posturales",
      "Desinflama el cuello tras largas jornadas frente al computador",
      "Rápida acción térmica autocalentable",
      "Práctico y liviano para usar en casa o la oficina"
    ],
    ingredients: [
      "Tejido suave hipoalergénico",
      "Puntos de turmalina autocalentables",
      "Imanes biomagnéticos"
    ],
    usageInstructions: [
      "Ajustar suavemente en el cuello durante 15 a 20 minutos hasta sentir el calor reconfortante."
    ],
    tags: ["cuello", "cervical", "turmalina", "estrés", "tortícolis"]
  },
  {
    id: 31,
    name: "Toalla Sanitaria Noche (Toalla Sanitaria con Turmalina Uso Noche)",
    slug: "toalla-sanitaria-noche",
    category: "Cuidado personal",
    rawMaterial: "Turmalina",
    presentation: "8 unidades",
    publicPrice: 4.00,
    partnerPrice: 3.20,
    bv: 1.60,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.toallaSanitariaNoche)
    ],
    shortDescription: "Toallas higiénicas nocturnas extra largas con banda bioeléctrica de turmalina, aniones y máxima absorción.",
    fullDescription: "Protección nocturna superior contra derrames. Su chip de turmalina y aniones neutraliza bacterias anaerobias, elimina olores y alivia cólicos menstruales nocturnos.",
    benefits: [
      "Chip de aniones y turmalina antibacteriano",
      "Extra larga (330 mm) para dormir con total tranquilidad",
      "Algodón 100% orgánico transpirable que evita rozaduras",
      "Neutraliza olores de forma natural sin fragancias químicas"
    ],
    ingredients: [
      "Capa superficial de algodón orgánico puro",
      "Banda aniónica con micro-turmalina",
      "Polímero superabsorbente japonés",
      "Lámina inferior micro-perforada transpirable"
    ],
    usageInstructions: [
      "Uso nocturno durante el ciclo menstrual."
    ],
    tags: ["toalla sanitaria", "noche", "aniones", "turmalina", "higiene íntima"]
  },
  {
    id: 32,
    name: "Protector Diario (Protector Íntimo Diario con Turmalina)",
    slug: "protector-diario",
    category: "Cuidado personal",
    rawMaterial: "Turmalina",
    presentation: "30 unidades",
    publicPrice: 5.00,
    partnerPrice: 3.50,
    bv: 1.70,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    featured: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.protectoresIntimos)
    ],
    shortDescription: "Protectores íntimos diarios ultra delgados con banda verde de aniones y turmalina para frescura y prevención de infecciones.",
    fullDescription: "Ideales para el uso diario. Mantienen la zona íntima seca, oxigenada y libre de bacterias causantes de flujos e infecciones recurrentes.",
    benefits: [
      "Previene infecciones vaginales, hongos y bacterias",
      "Ultra delgado y cómodo para todo el día",
      "Transpirable y libre de cloros o blanqueadores tóxicos",
      "Brinda frescura y seguridad continua"
    ],
    ingredients: [
      "Algodón suave hipoalergénico",
      "Banda verde de aniones y turmalina",
      "Capa adhesiva no tóxica"
    ],
    usageInstructions: [
      "Cambiar el protector diario cada 4 a 6 horas según necesidad."
    ],
    tags: ["protector diario", "turmalina", "aniones", "frescura íntima"]
  },
  {
    id: 33,
    name: "Toalla Sanitaria Día (Toalla Sanitaria con Turmalina Uso Día)",
    slug: "toalla-sanitaria-dia",
    category: "Cuidado personal",
    rawMaterial: "Turmalina",
    presentation: "10 unidades",
    publicPrice: 5.00,
    partnerPrice: 3.50,
    bv: 1.70,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.toallaSanitariaDia)
    ],
    shortDescription: "Toallas higiénicas de día con 8 capas de protección, banda de turmalina bioeléctrica y gel absorbente instantáneo.",
    fullDescription: "Protección diurna de alta seguridad. Su banda de turmalina emite aniones que regulan el pH íntimo, previenen inflamaciones y garantizan cero humedad.",
    benefits: [
      "Absorbe 3 veces más que las toallas comerciales",
      "Alivia cólicos e incomodidades menstruales",
      "Cero humedad en contacto con la piel",
      "Alas protectoras con fijación perfecta"
    ],
    ingredients: [
      "Algodón natural estéril",
      "Chip biofuncional de aniones y turmalina",
      "Gel de absorción ultrarrápida"
    ],
    usageInstructions: [
      "Uso durante el día en el periodo menstrual."
    ],
    tags: ["toalla de día", "turmalina", "aniones", "comodidad"]
  },
  {
    id: 34,
    name: "Press On Nails (Uñas Acrílicas Postizas)",
    slug: "press-on-nails",
    category: "Belleza",
    rawMaterial: "Accesorios de belleza",
    presentation: "24 unidades",
    publicPrice: 8.58,
    partnerPrice: 6.00,
    bv: 1.20,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.pressOnNailsPng),
      getDriveUrl(HGW_DRIVE_ASSETS.pressOnNailsHgw),
      getDriveUrl(HGW_DRIVE_ASSETS.pressOnNailsPostizas)
    ],
    shortDescription: "Set de uñas acrílicas reutilizables de alta calidad con acabado profesional de salón en minutos y sin dañar la uña natural.",
    fullDescription: "Uñas postizas de fácil colocación con diseños elegantes y duraderos. Incluyen adhesivo de alta adherencia para lucir manos impecables sin químicos agresivos.",
    benefits: [
      "Manicure impecable en menos de 5 minutos",
      "No daña la uña natural ni requiere lámpara UV",
      "Material resistente y reutilizable",
      "24 tamaños adaptables a cualquier forma de uña"
    ],
    ingredients: [
      "Acrílico ABS de grado estético no tóxico",
      "Pestañas adhesivas de fijación ultra fuerte"
    ],
    usageInstructions: [
      "Limpiar la uña con alcohol, elegir el tamaño adecuado, aplicar la lámina adhesiva y presionar firmemente por 20 segundos."
    ],
    tags: ["uñas postizas", "press on nails", "belleza", "manicura"]
  },
  {
    id: 35,
    name: "Pulsera de Tourmalina Versión Limitada (Código del 51 al 57)",
    slug: "pulsera-tourmalina-version-limitada",
    category: "Accesorios",
    rawMaterial: "Turmalina",
    presentation: "1 unidad",
    publicPrice: 22.00,
    partnerPrice: 15.00,
    bv: 9.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.pulseraTurmalina34),
      getDriveUrl(HGW_DRIVE_ASSETS.pulseraTurmalina33),
      getDriveUrl(HGW_DRIVE_ASSETS.pulseras1024)
    ],
    shortDescription: "Pulsera bioenergética de colección elaborada con gemas de turmalina natural para equilibrar el campo electromagnético.",
    fullDescription: "Joya bioactiva que combina elegancia y protección. La turmalina emite frecuencias que neutralizan la radiación de celulares, Wi-Fi y reducen la fatiga en muñeca y brazo.",
    benefits: [
      "Protege contra la radiación electromagnética de dispositivos móviles",
      "Alivia la tensión muscular en muñeca y túnel carpiano",
      "Equilibra la bioenergía corporal y disminuye la pesadez",
      "Diseño unisex refinado y ajustable"
    ],
    ingredients: [
      "Cuentas pulidas de Turmalina negra mineral natural",
      "Cordón elástico de alta resistencia"
    ],
    usageInstructions: [
      "Usar diariamente en la muñeca izquierda o derecha."
    ],
    tags: ["pulsera", "turmalina", "edición limitada", "radiación", "energía"]
  },
  {
    id: 36,
    name: "Colgante Piedra Energética de Turmalina",
    slug: "colgante-piedra-energetica",
    category: "Accesorios",
    rawMaterial: "Turmalina",
    presentation: "1 unidad",
    publicPrice: 50.00,
    partnerPrice: 35.00,
    bv: 21.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    featured: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.colgantePiedraEnergetica)
    ],
    shortDescription: "Colgante con disco volcánico de turmalina y minerales cuánticos para blindaje áurico, vitalidad y equilibrio emocional.",
    fullDescription: "Genera un campo continuo de aniones y frecuencias cuánticas que fortalecen el biocampo humano, aumentando la fuerza muscular y la resistencia al cansancio.",
    benefits: [
      "Escudo contra el smog electromagnético y estrés ambiental",
      "Aumenta la vitalidad y la resistencia física",
      "Favorece la calma mental y la concentración",
      "Diseño elegante con cordón ajustable"
    ],
    ingredients: [
      "Mineral de turmalina cuántica de alta pureza",
      "Minerales volcánicos bioactivos",
      "Cordón hipoalergénico"
    ],
    usageInstructions: [
      "Llevar colgado al pecho a la altura del timo o plexo solar."
    ],
    tags: ["colgante", "piedra cuántica", "turmalina", "biocampo", "protección"]
  },
  {
    id: 37,
    name: "Collar de Tourmalina Versión Limitada (Código del 51 al 57)",
    slug: "collar-tourmalina-version-limitada",
    category: "Accesorios",
    rawMaterial: "Turmalina",
    presentation: "1 unidad",
    publicPrice: 43.00,
    partnerPrice: 30.00,
    bv: 18.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.collarTurmalina39),
      getDriveUrl(HGW_DRIVE_ASSETS.collarTurmalina41),
      getDriveUrl(HGW_DRIVE_ASSETS.collarTurmalina37)
    ],
    shortDescription: "Collar artesanal de esferas de turmalina seleccionadas para regular la circulación del cuello, hombros y pecho.",
    fullDescription: "Edición especial de cuentas pulidas de turmalina mineral que estimulan la microcirculación de la zona cervical y tiroidea, atenuando el cansancio y la pesadez.",
    benefits: [
      "Estimula la oxigenación en cuello y hombros",
      "Armoniza las frecuencias energéticas del cuerpo",
      "Acabado de joyería fina de alta durabilidad"
    ],
    ingredients: [
      "Gemas esféricas de turmalina natural pulida",
      "Cierre de seguridad hipoalergénico"
    ],
    usageInstructions: [
      "Llevar alrededor del cuello diariamente."
    ],
    tags: ["collar", "turmalina", "edición limitada", "joyería cuántica"]
  },
  {
    id: 38,
    name: "Collar de Tourmalina Clásico",
    slug: "collar-de-tourmalina",
    category: "Accesorios",
    rawMaterial: "Turmalina",
    presentation: "1 unidad",
    publicPrice: 40.00,
    partnerPrice: 28.00,
    bv: 16.80,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    featured: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.collarTurmalina38),
      getDriveUrl(HGW_DRIVE_ASSETS.collarTurmalina42)
    ],
    shortDescription: "Collar bioeléctrico de turmalina para mejorar el retorno sanguíneo cerebral, aliviar dolores de cabeza y tensión cervical.",
    fullDescription: "Collar terapéutico de uso continuo que emite iones negativos e infrarrojo lejano, mejorando la circulación hacia la cabeza y aliviando mareos y tensión por estrés.",
    benefits: [
      "Disminuye dolores de cabeza tensionales y rigidez en hombros",
      "Favorece un sueño más profundo y reparador",
      "Protección constante contra la radiación electromagnética"
    ],
    ingredients: [
      "Turmalina negra natural",
      "Broche de acero inoxidable quirúrgico"
    ],
    usageInstructions: [
      "Usar de día o de noche según necesidad."
    ],
    tags: ["collar", "turmalina", "cervical", "migraña", "circulación"]
  },
  {
    id: 39,
    name: "Pulsera de Tourmalina Clásica",
    slug: "pulsera-de-tourmalina",
    category: "Accesorios",
    rawMaterial: "Turmalina",
    presentation: "1 unidad",
    publicPrice: 20.00,
    partnerPrice: 14.00,
    bv: 8.40,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.pulseraTurmalina34),
      getDriveUrl(HGW_DRIVE_ASSETS.pulseraTurmalina33)
    ],
    shortDescription: "Pulsera bioactiva con esferas de turmalina para vitalidad en brazos, fuerza de agarre y protección electromagnética.",
    fullDescription: "Accesorio indispensable para quienes pasan horas frente a pantallas de computadoras o teléfonos. La turmalina neutraliza la estática y alivia la pesadez en el brazo.",
    benefits: [
      "Previene molestias por uso prolongado de mouse y teclado",
      "Estimula los puntos de pulso radial",
      "Resistente al agua y al uso diario"
    ],
    ingredients: [
      "Esferas de turmalina de alta densidad mineral",
      "Banda elástica de triple filamento"
    ],
    usageInstructions: [
      "Colocar en la muñeca diariamente."
    ],
    tags: ["pulsera", "turmalina", "ergonomía", "muñeca"]
  },
  {
    id: 40,
    name: "Tourmaline Thermo (WATERSON) (Termo Alcalinizador de Turmalina)",
    slug: "tourmaline-thermo-waterson",
    category: "Equipo",
    rawMaterial: "Turmalina",
    presentation: "Capacidad 500 ml",
    publicPrice: 95.00,
    partnerPrice: 65.00,
    bv: 32.50,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    featured: true,
    bestSeller: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.thermoTurmalinaJpg),
      getDriveUrl(HGW_DRIVE_ASSETS.thermoTurmalinaNoBg)
    ],
    shortDescription: "Termo de acero quirúrgico 304 que transforma agua común en agua alcalina ionizada (pH 8.5 - 9.5) con microclusters y potencial redox negativo.",
    fullDescription: "El termo Waterson de HGW cuenta con un cartucho mineral multicapa con turmalina, zinc, plata coloidal y cerámicas infrarrojas. En solo 10 minutos, reduce el tamaño de los cúmulos moleculares de agua, elevando el pH y otorgando propiedades antioxidantes (ORP negativo) que combaten la acidez celular.",
    benefits: [
      "Eleva el pH del agua a un nivel alcalino saludable (8.5 - 9.5)",
      "Genera agua microestructurada para hidratación intracelular 3x superior",
      "Aporte de minerales esenciales (Calcio, Magnesio, Zinc)",
      "Cuerpo de acero inoxidable 304 térmico de doble pared al vacío"
    ],
    ingredients: [
      "Acero inoxidable quirúrgico grado alimenticio 304",
      "Filtro con bolas de Turmalina mineral ionizadora",
      "Cerámicas bioactivas y carbón activado bacteriostático"
    ],
    usageInstructions: [
      "Llenar con agua potable, agitar suavemente durante 30 segundos y dejar reposar 10 minutos antes de beber."
    ],
    tags: ["termo waterson", "agua alcalina", "turmalina", "antioxidante", "equipo"]
  },
  {
    id: 41,
    name: "Coffee Cup (Taza Térmica para Café)",
    slug: "coffee-cup",
    category: "Equipo",
    rawMaterial: "Articulos de hogar",
    presentation: "1 unidad",
    publicPrice: 26.00,
    partnerPrice: 18.00,
    bv: 7.20,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.coffeeCupJpg),
      getDriveUrl(HGW_DRIVE_ASSETS.coffeeCupNoBg)
    ],
    shortDescription: "Taza térmica ergonómica con recubrimiento cerámico para mantener tus bebidas calientes o frías con sabor inalterable.",
    fullDescription: "Diseñada para disfrutar tus cafés funcionales HGW en cualquier lugar. Conserva la temperatura por horas con tapa antifugas hermética.",
    benefits: [
      "Mantiene café caliente hasta por 6 horas",
      "Interior no tóxico que no altera aromas ni sabores",
      "Apertura cómoda de un solo toque y base antideslizante"
    ],
    ingredients: [
      "Acero inoxidable de doble capa",
      "Recubrimiento cerámico interior",
      "Tapa de tritán libre de BPA"
    ],
    usageInstructions: [
      "Ideal para preparar y transportar tu café de Ganoderma, Cordyceps o Arándano."
    ],
    tags: ["taza térmica", "café", "termo", "hogar"]
  },
  {
    id: 42,
    name: "Hervidor Eléctrico de Acero Inoxidable HGW",
    slug: "hervidor-electrico",
    category: "Equipo",
    rawMaterial: "Articulos de hogar",
    presentation: "Capacidad 1.8 Litros",
    publicPrice: 60.00,
    partnerPrice: 42.00,
    bv: 8.40,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    featured: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.hervidorElectricoPng),
      getDriveUrl(HGW_DRIVE_ASSETS.hervidorElectricoNoBg)
    ],
    shortDescription: "Hervidor rápido de alta eficiencia con cuerpo de acero inoxidable y apagado automático para infusiones y cafés perfectos.",
    fullDescription: "Calienta agua en menos de 4 minutos con bajo consumo energético. Cuenta con protección contra sobrecalentamiento y filtro antisarro.",
    benefits: [
      "Hervido ultrarrápido en minutos",
      "Capacidad generosa de 1.8 Litros",
      "Apagado automático de seguridad al hervir",
      "Acero inoxidable de grado alimentario duradero"
    ],
    ingredients: [
      "Cuerpo de acero inoxidable 304",
      "Base eléctrica con giro de 360°",
      "Control de termostato de precisión"
    ],
    usageInstructions: [
      "Conectar a la corriente eléctrica, llenar con agua y presionar el interruptor de encendido."
    ],
    tags: ["hervidor", "tetera eléctrica", "café", "té", "hogar"]
  },
  {
    id: 43,
    name: "Vaso Térmico Portátil HGW",
    slug: "vaso-termico",
    category: "Equipo",
    rawMaterial: "Articulos de hogar",
    presentation: "1 unidad",
    publicPrice: 31.50,
    partnerPrice: 22.00,
    bv: 8.80,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.vasoTermicoJpg),
      getDriveUrl(HGW_DRIVE_ASSETS.vasoTermicoNoBg)
    ],
    shortDescription: "Vaso térmico premium con aislamiento al vacío para transportar bebidas calientes o frías con estilo y cero fugas.",
    fullDescription: "Compacto y elegante, cabe perfectamente en portavasos de vehículos. Excelente para llevar colágeno, tés o agua alcalina a cualquier lugar.",
    benefits: [
      "Doble pared aislante al vacío contra condensación",
      "Tapa hermética con boquilla ergonómica",
      "Fácil de lavar y altamente duradero"
    ],
    ingredients: [
      "Acero inoxidable 304",
      "Sellos de silicona grado médico",
      "Plásticos libres de BPA"
    ],
    usageInstructions: [
      "Lavar con agua tibia y jabón suave antes del primer uso."
    ],
    tags: ["vaso térmico", "portátil", "viaje", "hogar"]
  },
  {
    id: 44,
    name: "Tourmaline Magnet Pillow (Almohada Magnética de Turmalina)",
    slug: "tourmaline-magnet-pillow",
    category: "Equipo",
    rawMaterial: "Turmalina",
    presentation: "1 unidad",
    publicPrice: 89.00,
    partnerPrice: 62.00,
    bv: 18.60,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    featured: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.almohadaTurmalinaNoBg)
    ],
    shortDescription: "Almohada cervical ergonómica de memory foam con matriz de turmalina e imanes biomagnéticos para sueño profundo y alivio del cuello.",
    fullDescription: "Diseñada conforme a la curvatura anatómica cervical. La combinación de espuma viscoelástica, aniones de turmalina e imanes promueve la microcirculación cerebral, combatiendo insomnio, ronquidos y tensión matutina.",
    benefits: [
      "Alineación perfecta de la columna cervical durante el sueño",
      "Combate el insomnio crónico y favorece el sueño profundo REM",
      "Reduce la tensión en cuello, hombros y dolores de cabeza al despertar",
      "Funda transpirable, antiácaros e hipoalergénica"
    ],
    ingredients: [
      "Espuma viscoelástica de memoria de alta resiliencia",
      "Malla interna con micro-turmalina y aniones",
      "Imanes biomagnéticos colocados estratégicamente",
      "Funda de tela de bambú transpirable"
    ],
    usageInstructions: [
      "Colocar bajo la cabeza para dormir bocarriba o de lado con soporte ergonómico."
    ],
    tags: ["almohada", "turmalina", "magnetoterapia", "insomnio", "cervical"]
  },
  {
    id: 45,
    name: "Pen Gel HGW (Bolígrafo Punta Gel)",
    slug: "pen-gel",
    category: "Equipo",
    rawMaterial: "Utiles",
    presentation: "1 unidad",
    publicPrice: 1.43,
    partnerPrice: 1.00,
    bv: 0.30,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.penGelJpg)
    ],
    shortDescription: "Bolígrafo de tinta gel suave y secado rápido oficial HGW para presentaciones, firmas y anotaciones de socios.",
    fullDescription: "Bolígrafo corporativo elegante con trazo suave y uniforme. Ideal para prospección, eventos y trabajo diario de distribuidores.",
    benefits: [
      "Escritura ultrasuave sin manchas",
      "Diseño corporativo con logo HGW",
      "Económico y de larga duración"
    ],
    ingredients: [
      "Cuerpo de polímero liviano",
      "Tinta gel pigmentada indeleble"
    ],
    usageInstructions: [
      "Uso de oficina, estudio y presentaciones de negocio."
    ],
    tags: ["bolígrafo", "lapicero", "útiles", "oficina"]
  },
  {
    id: 46,
    name: "Pasta Dental con Turmalina Negra HGW",
    slug: "pasta-dental-con-turmalina-negra",
    category: "Cuidado personal",
    rawMaterial: "Turmalina",
    presentation: "1 unidad",
    publicPrice: 8.00,
    partnerPrice: 5.00,
    bv: 3.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    featured: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.pastaTurmalinaNegraPng),
      getDriveUrl(HGW_DRIVE_ASSETS.pastaTurmalinaNegraNoBg)
    ],
    shortDescription: "Pasta dental con micro-partículas de turmalina negra para desinflamar encías, combatir sangrado gingival y purificar la boca.",
    fullDescription: "Fórmula bioeléctrica que emite aniones en la cavidad oral. Ayuda a sellar túbulos dentinarios expuestos, detiene el sangrado de encías y frena el sarro bacteriano.",
    benefits: [
      "Combate gingivitis, encías retraídas y sangrado al cepillar",
      "Acción antibacteriana profunda contra la placa bacteriana",
      "Alivia la sensibilidad dental al frío y calor",
      "Sensación de limpieza duradera y aliento puro"
    ],
    ingredients: [
      "Polvo mineral purificado de Turmalina negra",
      "Extractos botánicos antiinflamatorios",
      "Menta natural refrescante",
      "Silicato limpiador no abrasivo"
    ],
    usageInstructions: [
      "Cepillar dientes y encías durante 3 minutos después de cada comida."
    ],
    tags: ["pasta dental", "turmalina negra", "gingivitis", "sangrado", "encías"]
  },
  {
    id: 47,
    name: "Pasta Dental con Turmalina Blanca HGW",
    slug: "pasta-dental-con-turmalina-blanca",
    category: "Cuidado personal",
    rawMaterial: "Turmalina",
    presentation: "1 unidad",
    publicPrice: 8.00,
    partnerPrice: 5.00,
    bv: 3.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    featured: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.pastaTurmalinaBlancaOng),
      getDriveUrl(HGW_DRIVE_ASSETS.pastaTurmalinaBlancaPng)
    ],
    shortDescription: "Dentífrico blanqueador natural con turmalina blanca para eliminar manchas de café, té o tabaco sin dañar el esmalte.",
    fullDescription: "Blanqueamiento enzimático y mineral sin peróxidos agresivos. Remueve manchas superficiales devolviendo el brillo natural a tus dientes mientras protege tus encías.",
    benefits: [
      "Elimina manchas de café, té y sarro de forma no abrasiva",
      "Devuelve el tono blanco natural del esmalte dental",
      "Protege contra la formación de caries y sarro",
      "Sabor a menta fresca energizante"
    ],
    ingredients: [
      "Polvo microfino de Turmalina blanca purificada",
      "Sílice hidratada abrillantadora no abrasiva",
      "Aceite esencial de menta",
      "Fluoruro bioactivo protector"
    ],
    usageInstructions: [
      "Cepillar 3 veces al día para un blanqueamiento progresivo y seguro."
    ],
    tags: ["pasta dental", "blanqueadora", "turmalina blanca", "esmalte", "dientes blancos"]
  },
  {
    id: 48,
    name: "Pasta Dental con Probiótico HGW",
    slug: "pasta-dental-con-probiotico",
    category: "Cuidado personal",
    rawMaterial: "Probioticos",
    presentation: "1 unidad",
    publicPrice: 8.00,
    partnerPrice: 5.00,
    bv: 2.50,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES", "PY", "DO"],
    status: "Disponible",
    featured: true,
    bestSeller: true,
    images: [
      getDriveUrl(HGW_DRIVE_ASSETS.pastaProbioticosJpg),
      getDriveUrl(HGW_DRIVE_ASSETS.pastaProbioticosPng)
    ],
    shortDescription: "Revolucionaria pasta con bacterias probióticas benéficas (Lactobacillus) para equilibrar la microbiota oral y frenar el mal aliento.",
    fullDescription: "Innovación en salud bucal. En lugar de barrer toda la flora bacteriana con químicos agresivos, aporta probióticos orales vivos que desplazan microbios causantes de caries, sarro y halitosis.",
    benefits: [
      "Equilibra y regenera la microbiota oral benéfica",
      "Frena las bacterias causantes de caries y placa",
      "Combate el mal aliento (halitosis) de raíz",
      "Protege encías sensibles de forma biocompatible"
    ],
    ingredients: [
      "Cultivos probióticos orales liofilizados (Lactobacillus paracasei)",
      "Minerales remineralizantes biocompatibles",
      "Menta suave natural"
    ],
    usageInstructions: [
      "Cepillar dientes y encías diariamente después de comer."
    ],
    tags: ["pasta probiótica", "probióticos", "microbiota oral", "caries", "dientes"]
  }
];

export const RAW_MATERIALS = [
  { id: 'arandanos', name: 'Arándanos', count: 10 },
  { id: 'turmalina', name: 'Turmalina', count: 14 },
  { id: 'ganoderma', name: 'Ganoderma Lucidum', count: 4 },
  { id: 'cordyceps', name: 'Cordyceps Sinensis', count: 2 },
  { id: 'probioticos', name: 'Probióticos', count: 2 },
  { id: 'herbales', name: 'Mix Herbales & Plantas', count: 6 },
  { id: 'hogar', name: 'Artículos de Hogar & Equipo', count: 4 },
  { id: 'espirulina', name: 'Spirulina Platensis', count: 1 }
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
