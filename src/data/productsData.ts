import { HGWProduct, HGWCategoryInfo } from '../types';

export const CATEGORIES_INFO: HGWCategoryInfo[] = [
  {
    id: 'alimentos',
    slug: 'alimentos',
    name: 'Alimentos',
    title: 'Alimentos y Bebidas Funcionales',
    description: 'Bebidas herbales, cafés terapéuticos enriquecidos con Ganoderma, Cordyceps, Arándano y caramelos funcionales bioactivos.',
    iconName: 'Coffee',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop&q=80',
    color: 'from-amber-600 to-amber-800',
  },
  {
    id: 'suplementos',
    slug: 'suplementos',
    name: 'Suplementos',
    title: 'Nutracéuticos y Suplementos',
    description: 'Fórmulas concentradas de alta asimilación con Spirulina Platensis, micronutrientes esenciales y extractos botánicos.',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80',
    color: 'from-emerald-600 to-teal-800',
  },
  {
    id: 'cuidado-personal',
    slug: 'cuidado-personal',
    name: 'Cuidado personal',
    title: 'Cuidado Personal e Higiene Íntima',
    description: 'Pastas dentales bioactivas con turmalina y probióticos, toallas higiénicas y protectores con iones negativos.',
    iconName: 'Smile',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80',
    color: 'from-cyan-600 to-blue-800',
  },
  {
    id: 'accesorios',
    slug: 'accesorios',
    name: 'Accesorios',
    title: 'Accesorios Bio-Energéticos y Turmalina',
    description: 'Collares, pulseras, plantillas y protectores autocalentables que emiten infrarrojo lejano e iones negativos.',
    iconName: 'Shield',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop&q=80',
    color: 'from-purple-600 to-indigo-800',
  },
  {
    id: 'equipo',
    slug: 'equipo',
    name: 'Equipo',
    title: 'Equipos y Artículos para el Hogar',
    description: 'Termo alcalinizador de agua Waterson, almohadas magnéticas ergonómicas, tazas térmicas y hervidores de acero inoxidable.',
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=800&auto=format&fit=crop&q=80',
    color: 'from-sky-600 to-slate-800',
  },
  {
    id: 'licores',
    slug: 'licores',
    name: 'Licores',
    title: 'Vinos y Licores Especiales',
    description: 'Vino artesanal premium a base de extractos concentrados de arándanos azules de Canadá.',
    iconName: 'Wine',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&auto=format&fit=crop&q=80',
    color: 'from-rose-700 to-red-950',
  },
  {
    id: 'belleza',
    slug: 'belleza',
    name: 'Belleza',
    title: 'Belleza y Cuidado Estético',
    description: 'Uñas acrílicas postizas Press On Nails y accesorios de diseño elegante elaborados con componentes no tóxicos.',
    iconName: 'HeartHandshake',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&auto=format&fit=crop&q=80',
    color: 'from-pink-500 to-rose-700',
  },
  {
    id: 'cuidado-facial',
    slug: 'cuidado-facial',
    name: 'Cuidado facial',
    title: 'Cuidado Facial y Piel',
    description: 'Línea dermocosmética antienvejecimiento con antioxidantes de arándano y minerales energéticos.',
    iconName: 'SunMedium',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=80',
    color: 'from-emerald-500 to-teal-700',
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
      "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Deliciosos caramelos antioxidantes ricos en antocianinas que mejoran la microcirculación de la retina y combaten la fatiga visual.",
    fullDescription: "Los caramelos Blueberry Candy de HGW están formulados con extracto concentrado de arándanos silvestres canadienses. Ricos en fitoquímicos y antocianinas biodisponibles, son un complemento ideal para personas expuestas a pantallas digitales, conductores y cualquier persona que desee proteger su agudeza visual y sistema inmunitario de forma agradable.",
    benefits: [
      "Mejora la microcirculación en los capilares de la retina",
      "Reduce sensiblemente la fatiga visual provocada por pantallas",
      "Aporte continuo de antioxidantes naturales y vitamina C",
      "Protege contra el estrés oxidativo celular en ojos y piel",
      "Sabor natural agradable sin colorantes agresivos"
    ],
    ingredients: [
      "Extracto estandarizado de Arándanos Azules (Vaccinium myrtillus)",
      "Vitamina C (Ácido ascórbico)",
      "Glucosa natural purificada",
      "Saborizante botánico natural de arándano"
    ],
    usageInstructions: [
      "Consumir de 1 a 2 caramelos al día, preferiblemente entre comidas o durante jornadas intensas de trabajo visual.",
      "Dejar disolver lentamente en la boca para una óptima absorción."
    ],
    tags: ["arándano", "visión", "antioxidante", "caramelos", "retina"],
    faq: [
      { question: "¿Pueden consumirlo niños y adultos mayores?", answer: "Sí, es un alimento natural y seguro apto para toda la familia." },
      { question: "¿Cuántos caramelos contiene el envase?", answer: "Cada frasco contiene 60 caramelos duros bioactivos." }
    ]
  },
  {
    id: 2,
    name: "Blueberry Fruit Tea / Mermelada de Arándanos",
    slug: "blueberry-fruit-tea-mermelada-arandanos",
    category: "Alimentos",
    rawMaterial: "Arándanos Azules seleccionados",
    presentation: "Frasco de 200 gramos",
    publicPrice: 12.00,
    partnerPrice: 8.00,
    bv: 4.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR"],
    status: "Disponible",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Exquisita pulpa y té de arándanos para preparar bebidas antioxidantes o untar, aportando alta concentración de vitamina C.",
    fullDescription: "Preparado versátil a base de fruta entera de arándano azul de alta pureza. Se puede disfrutar como infusión caliente tipo té frutal, bebida refrescante fría o acompañamiento gastronómico saludable, aportando polifenoles y protección antioxidante.",
    benefits: [
      "Reduce la fatiga ocular y promueve la salud vascular",
      "Aporta antioxidantes de alta absorción y vitamina C",
      "Delicioso sabor frutal para infusiones o consumo directo",
      "Fomenta la digestión ligera y el equilibrio de la flora"
    ],
    ingredients: ["Arándanos azules seleccionados (fruta natural)", "Fructosa vegetal", "Pectina cítrica", "Vitamina C"],
    usageInstructions: ["Mezclar 1 cucharada en una taza con agua caliente o tibia para infusión frutal, o disfrutar untado en panes integrales."],
    tags: ["mermelada", "té de arándano", "antioxidante", "vitamina C"]
  },
  {
    id: 3,
    name: "Blueberry Collagen Peptide (Péptido de Colágeno)",
    slug: "blueberry-collagen-peptide-peptido-colageno",
    category: "Alimentos",
    rawMaterial: "Péptidos bioactivos de colágeno hidrolizado y Arándanos",
    presentation: "Caja con 12 sobres de 25 gramos c/u",
    publicPrice: 29.00,
    partnerPrice: 20.00,
    bv: 12.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    bestSeller: true,
    images: [
      "https://images.unsplash.com/photo-1556760544-74068565f05c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Fórmula de colágeno de bajo peso molecular enriquecida con arándano para articulaciones, elasticidad cutánea, huesos y cabello fuerte.",
    fullDescription: "Los péptidos bioactivos de colágeno hidrolizado HGW poseen una biodisponibilidad superior gracias a su tecnología de microfiltración. En sinergia con el poder antioxidante del arándano azul canadiense, estimula la síntesis de colágeno endógeno, previene el envejecimiento prematuro y fortalece articulaciones, ligamentos y cartílagos.",
    benefits: [
      "Mejora la flexibilidad y movilidad de las articulaciones",
      "Fortalece la densidad ósea y previene el desgaste cartilaginoso",
      "Aumenta la firmeza, hidratación y elasticidad de la piel",
      "Estimula el crecimiento y brillo de uñas y cabello",
      "Acción antioxidante celular contra el envejecimiento prematuro"
    ],
    ingredients: [
      "Péptidos de Colágeno Hidrolizado Bioactivo",
      "Extracto concentrado de Arándano Azul",
      "Vitamina C fijadora de colágeno",
      "Oligoelementos esenciales"
    ],
    usageInstructions: [
      "Disolver 1 sobre (25g) en 200 ml de agua tibia o a temperatura ambiente.",
      "Tomar una vez al día, preferiblemente en ayunas o antes de dormir."
    ],
    tags: ["colágeno", "articulaciones", "piel", "antienvejecimiento", "huesos"]
  },
  {
    id: 4,
    name: "Fresh Drink Chang JingJing (Limpieza de Colon)",
    slug: "fresh-drink-chang-jingjing-limpiador-colon",
    category: "Alimentos",
    rawMaterial: "Mix botánico: Cebada en polvo, Bayas de Goji, Gan Cao, Diente de León, Crisantemo",
    presentation: "Caja con 6 sobres de 3.5 gramos c/u (Protocolo 6 Días)",
    publicPrice: 13.00,
    partnerPrice: 9.00,
    bv: 5.40,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    bestSeller: true,
    images: [
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Bebida detox instantánea para el protocolo de limpieza profunda de colon en 6 días. Alivia el estreñimiento, hinchazón y regula el tránsito intestinal.",
    fullDescription: "Fresh Drink Chang JingJing combina extractos vegetales ancestrales (Cebada verde, Bayas de Goji, Raíz de Gan Cao/Regaliz, Diente de León y Flor de Crisantemo) con alta concentración de clorofila y fibras solubles. Diseñado para desintoxicar suavemente el tracto gastrointestinal, eliminar toxinas acumuladas, reducir el abdomen inflamado y revitalizar la energía corporal.",
    benefits: [
      "Desintoxicación y limpieza suave del colon en protocolo de 6 días",
      "Alivia eficazmente el estreñimiento crónico y la pesadez estomacal",
      "Reduce la hinchazón abdominal y los gases intestinales",
      "Combate el mal aliento de origen digestivo y saliva espesa",
      "Nutre la microbiota intestinal y mejora la absorción de nutrientes",
      "Aporta antioxidantes botánicos y favorece la salud de la piel"
    ],
    ingredients: [
      "Cebada en polvo (Hordeum vulgare)",
      "Bayas de Goji (Fruto de Lycium barbarum)",
      "Gan Cao / Raíz de Regaliz (Glycyrrhiza uralensis)",
      "Diente de León (Taraxacum officinale - flor y hojas)",
      "Crisantemo (Chrysanthemum morifolium)",
      "Clorofila natural sabor a hierba verde"
    ],
    usageInstructions: [
      "Tomar de 1/2 a 1 sobre al día durante 6 días consecutivos.",
      "Consumir 15 minutos antes del desayuno.",
      "Añadir el contenido del sobre en 150 ml de agua caliente o tibia (70-80°C) y revolver bien hasta disolver.",
      "Acompañar con abundante hidratación durante todo el día (mínimo 2 litros de agua)."
    ],
    tags: ["detox", "colon", "digestión", "estreñimiento", "diente de leon", "goji"],
    faq: [
      { question: "¿Causa dolor o cólicos intensos?", answer: "No, su acción es botánica suave y fisiológica, promoviendo evacuaciones naturales sin irritar la mucosa." },
      { question: "¿Cómo se toma para el protocolo de 6 días?", answer: "1 sobre cada mañana en 150ml de agua caliente 15 minutos antes de desayunar por 6 días." }
    ]
  },
  {
    id: 5,
    name: "Pro Shaping Tea (Té Moldeador Profesional)",
    slug: "pro-shaping-tea-te-moldeador-profesional",
    category: "Alimentos",
    rawMaterial: "Mix herbal moldeador y termogénico",
    presentation: "Caja con 24 sobres de 3 gramos c/u",
    publicPrice: 23.00,
    partnerPrice: 16.00,
    bv: 9.60,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR"],
    status: "Disponible",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Té herbal termogénico diseñado para acelerar el metabolismo, quemar grasa acumulada, apoyar el control de peso y regular colesterol.",
    fullDescription: "Mezcla botánica depurativa de hierbas medicinales seleccionadas que favorecen la lipólisis natural, reducen la retención de líquidos, apoyan el tránsito intestinal y ayudan a balancear los niveles de glucosa y lípidos en sangre.",
    benefits: [
      "Estimula la quema de grasa y aceleración metabólica",
      "Mejora el tránsito intestinal combatiendo el estreñimiento",
      "Ayuda a regular niveles de colesterol y glucosa",
      "Efecto diurético suave que disminuye la retención de líquidos",
      "Sensación de ligereza y vitalidad diaria"
    ],
    ingredients: ["Té verde fermentado", "Hierbas desintoxicantes orientales", "Hojas de loto", "Extractos termogénicos naturales"],
    usageInstructions: ["Tomar 1 sobre en 200-250 ml de agua caliente después del almuerzo o cena."],
    tags: ["té", "quemador de grasa", "metabolismo", "control de peso", "digestión"]
  },
  {
    id: 6,
    name: "Berry Juice HIGH VC (Jugo de Arándano en Polvo)",
    slug: "berry-juice-high-vc-jugo-arandano",
    category: "Alimentos",
    rawMaterial: "Arándanos Azules & Vitamina C concentrada",
    presentation: "Caja con 30 sobres de 6 gramos c/u",
    publicPrice: 25.00,
    partnerPrice: 17.00,
    bv: 8.50,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    images: [
      "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Bebida en polvo de arándano con alto contenido de vitamina C, ideal para proteger vías urinarias, vejiga y reforzar las defensas.",
    fullDescription: "Bebida reconstituyente rica en proantocianidinas bioactivas que impiden la adhesión bacteriana (como E. coli) en las paredes del tracto urinario. Fortalece el sistema inmunitario y aporta antioxidantes celulares diarios.",
    benefits: [
      "Protege y desinflama las vías urinarias y vejiga",
      "Alto aporte de Vitamina C biodisponible",
      "Fortalece el sistema inmunológico frente a resfriados",
      "Refrescante sabor natural a frutos del bosque"
    ],
    ingredients: ["Polvo liofilizado de Arándano Azul", "Ácido L-ascórbico (Vitamina C)", "Fructooligosacáridos prebióticos"],
    usageInstructions: ["Disolver 1 sobre en un vaso de agua fría o fresca (200ml) y beber 1 a 2 veces al día."],
    tags: ["jugo", "vitamina C", "vias urinarias", "antioxidante", "arándano"]
  },
  {
    id: 7,
    name: "Blueberry Wine (Vino de Arándanos)",
    slug: "blueberry-wine-vino-de-arandanos",
    category: "Licores",
    rawMaterial: "Arándanos Azules fermentados",
    presentation: "Botella de vidrio premium de 750 ml",
    publicPrice: 36.00,
    partnerPrice: 26.00,
    bv: 5.20,
    currency: "USD",
    availableCountries: ["PA", "PE", "BO", "EC", "CL"],
    status: "Disponible",
    images: [
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Vino artesanal elaborado exclusivamente con fermentación de arándanos canadienses. Rico en polifenoles cardiosaludables y sabor elegante.",
    fullDescription: "Bebida alcohólica selecta obtenida de la fermentación natural de arándanos enteros seleccionados. Conserva los polifenoles bioactivos de la fruta, ofreciendo un maridaje gourmet con propiedades antioxidantes y soporte para la salud circulatoria.",
    benefits: [
      "Aporta antioxidantes polifenólicos cardiosaludables",
      "Promueve la buena circulación periférica",
      "Aroma y bouquet refinado para celebraciones y bienestar"
    ],
    ingredients: ["Mosto fermentado de Arándano Azul canadiense", "Sulfito vegetal de conservación"],
    usageInstructions: ["Consumir con moderación (1 copa de 100-150 ml) acompañando las comidas. Venta exclusiva para mayores de edad."],
    tags: ["vino", "arándanos", "gourmet", "licores", "antioxidantes"]
  },
  {
    id: 8,
    name: "Café Trébol (Salud Femenina y Hormonal)",
    slug: "cafe-trebol-salud-femenina",
    category: "Alimentos",
    rawMaterial: "Café de grano premium y extractos de Plantas Medicinales (Trébol Rojo)",
    presentation: "Caja con 12 sobres de 15 gramos c/u",
    publicPrice: 23.00,
    partnerPrice: 16.00,
    bv: 8.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR"],
    status: "Disponible",
    images: [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Café funcional enriquecido con trébol rojo y fitoestrógenos naturales para balance hormonal femenino, menopausia y función ovárica.",
    fullDescription: "Café gourmet suave formulado para la salud de la mujer. Sus extractos botánicos de trébol rojo aportan isoflavonas naturales que modulan el sistema endocrino femenino, ayudando a disminuir sofocos, cambios de humor y molestias premenstruales o climatéricas.",
    benefits: [
      "Alivia los síntomas de la menopausia (sofocos y sudoración nocturna)",
      "Regula y armoniza las hormonas femeninas",
      "Apoya la función ovárica y bienestar del ciclo menstrual",
      "Aporta energía suave y placentera sin alterar los nervios"
    ],
    ingredients: ["Café soluble premium", "Extracto de Trébol Rojo (Trifolium pratense)", "Crema vegetal sin lactosa", "Esteroles botánicos"],
    usageInstructions: ["Disolver 1 sobre en una taza con 150 ml de agua caliente. Tomar 1 vez al día, preferiblemente por la mañana o tarde."],
    tags: ["café", "mujer", "hormonas", "menopausia", "trébol rojo"]
  },
  {
    id: 9,
    name: "Cordyceps Coffee Cream (Café con Cordyceps y Crema)",
    slug: "cordyceps-coffee-cream-cafe-con-cordyceps-y-crema",
    category: "Alimentos",
    rawMaterial: "Cordyceps Sinensis cultivado & Café selecto",
    presentation: "Caja con 12 sobres de 15 gramos c/u",
    publicPrice: 23.00,
    partnerPrice: 16.00,
    bv: 9.60,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Café cremoso energizante enriquecido con Cordyceps Sinensis para fortalecer la función pulmonar, resistencia física y salud renal.",
    fullDescription: "El hongo medicinal Cordyceps Sinensis ha sido utilizado durante siglos en la medicina tradicional asiática por su capacidad para incrementar la oxigenación celular (ATP) y nutrir la energía vital del riñón y los pulmones. Esta versión cremosa combina café aromático con crema no láctea de origen vegetal.",
    benefits: [
      "Nutre y fortalece el sistema respiratorio y la capacidad pulmonar",
      "Apoya la función y desintoxicación renal",
      "Incrementa la energía, resistencia física y vitalidad sexual",
      "Textura cremosa y sabor reconfortante"
    ],
    ingredients: ["Café arábico soluble", "Extracto de micelio de Cordyceps Sinensis", "Crema vegetal no láctea", "Endulzante natural"],
    usageInstructions: ["Disolver 1 sobre en 150 ml de agua caliente (80°C). Revolver bien y disfrutar."],
    tags: ["cordyceps", "café", "pulmones", "riñones", "energía", "crema"]
  },
  {
    id: 10,
    name: "BlackTea Coffee (Café con Té Negro)",
    slug: "blacktea-coffee-cafe-te-negro",
    category: "Alimentos",
    rawMaterial: "Té Negro fermentado & Café tostado",
    presentation: "Caja con 12 sobres de 3.5 gramos c/u",
    publicPrice: 20.00,
    partnerPrice: 14.00,
    bv: 7.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR"],
    status: "Disponible",
    images: [
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Fusión premium de café y té negro para máxima concentración mental, estado de alerta prolongado y claridad cognitiva sin bajones.",
    fullDescription: "Sinergia estimulante entre la teanina del té negro y la cafeína del café selecto. Proporciona un impulso continuo de agudeza mental, mejora el enfoque en horas de estudio o trabajo y promueve la combustión calórica.",
    benefits: [
      "Mejora la concentración, memoria de trabajo y agilidad mental",
      "Proporciona estado de alerta constante sin nerviosismo",
      "Rico en teaflavinas antioxidantes protectoras",
      "Bajo aporte calórico y digestión ágil"
    ],
    ingredients: ["Extracto de Té Negro de alta montaña", "Café soluble puro", "Polifenoles botánicos"],
    usageInstructions: ["Mezclar 1 sobre en una taza con 120-150 ml de agua caliente."],
    tags: ["café", "té negro", "enfoque", "concentración", "energía"]
  },
  {
    id: 11,
    name: "Coffee Ceps (Café Cordyceps Sin Azúcar)",
    slug: "coffee-ceps-cafe-cordyceps-sin-azucar",
    category: "Alimentos",
    rawMaterial: "Cordyceps Sinensis & Café Negro Puro",
    presentation: "Caja con 12 sobres de 3.5 gramos c/u",
    publicPrice: 20.00,
    partnerPrice: 14.00,
    bv: 7.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    images: [
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Café negro puro sin azúcar ni aditivos con Cordyceps Sinensis para personas activas, deportistas y personas que cuidan su glucosa.",
    fullDescription: "La versión pura y sin edulcorantes para los amantes del buen café negro intenso. Aporta todas las bondades tonificantes del Cordyceps sobre la energía mitocondrial, pulmones y riñones con cero azúcares añadidos.",
    benefits: [
      "Cero azúcar y apto para dietas bajas en carbohidratos o cetogénicas",
      "Nutre y tonifica pulmones y riñones",
      "Eleva la resistencia y oxigenación durante entrenamientos",
      "Sabor intenso a café espresso de especialidad"
    ],
    ingredients: ["Café negro arábico tostado soluble", "Extracto puro de Cordyceps Sinensis"],
    usageInstructions: ["Disolver 1 sobre en 120 ml de agua caliente hirviendo o a 85°C."],
    tags: ["café negro", "cordyceps", "sin azúcar", "keto", "deporte"]
  },
  {
    id: 12,
    name: "Blueberry Coffee (Café con Arándanos)",
    slug: "blueberry-coffee-cafe-de-arandanos",
    category: "Alimentos",
    rawMaterial: "Arándanos Azules canadienses & Café Arábico",
    presentation: "Caja con 12 sobres de 15 gramos c/u",
    publicPrice: 23.00,
    partnerPrice: 16.00,
    bv: 9.60,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    bestSeller: true,
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Exclusiva combinación de café gourmet con arándano azul. Reduce el cansancio visual, aporta energía sostenida y apoya la salud cardiovascular.",
    fullDescription: "Uno de los productos estrella de HGW en toda América. Blueberry Coffee une el aroma tostado del café seleccionado con el extracto de arándano canadiense, ofreciendo un escudo antioxidante contra el cansancio ocular y el envejecimiento celular mientras disfrutas de una deliciosa taza.",
    benefits: [
      "Disminuye el cansancio visual y la sequedad ocular",
      "Potente acción antioxidante gracias a las antocianinas",
      "Ayuda a mantener niveles saludables de colesterol",
      "Aporta energía limpia, concentración y ánimo renovado"
    ],
    ingredients: ["Café arábico seleccionado", "Polvo de extracto de Arándano Azul", "Crema vegetal sin grasa trans", "Fructosa vegetal"],
    usageInstructions: ["Verter 1 sobre en 150 ml de agua caliente o con hielo para una versión fría refrescante."],
    tags: ["café arándano", "estrella", "visión", "antioxidante", "energía"]
  },
  {
    id: 13,
    name: "Lactiberry (Té Negro Cremoso con Arándanos y Probióticos)",
    slug: "lactiberry-te-cremoso-arandanos",
    category: "Alimentos",
    rawMaterial: "Té Negro, Arándanos & Probióticos",
    presentation: "Caja con 10 sobres de 30 gramos c/u",
    publicPrice: 26.00,
    partnerPrice: 18.00,
    bv: 9.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR"],
    status: "Disponible",
    images: [
      "https://images.unsplash.com/photo-1571328003758-4a3921661729?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Bebida cremosa tipo milk-tea que combina té negro, arándano y cepas probióticas para cuidar vías urinarias, vejiga y salud digestiva.",
    fullDescription: "Bebida indulgente y saludable con perfil suave. Sus microorganismos probióticos apoyan la microbiota intestinal, mientras las proantocianidinas de arándano protegen el sistema urinario femenino y masculino.",
    benefits: [
      "Protege la salud de la vejiga y vías urinarias",
      "Aporta cepas probióticas que equilibran la flora intestinal",
      "Mejora la agudeza mental y estado de calma concentrada",
      "Textura suave, cremosa y reconfortante"
    ],
    ingredients: ["Extracto de Té Negro", "Arándano en polvo", "Cultivos probióticos liofilizados", "Crema vegetal no láctea"],
    usageInstructions: ["Disolver 1 sobre en 180 ml de agua caliente o fría con cubitos de hielo."],
    tags: ["probióticos", "té cremoso", "arándano", "vías urinarias", "digestión"]
  },
  {
    id: 14,
    name: "Ashwagandha Coffee (Café con Ashwagandha)",
    slug: "ashwagandha-coffee-cafe-ashwagandha",
    category: "Alimentos",
    rawMaterial: "Withania somnifera (Ashwagandha) & Café Arábica",
    presentation: "Caja con 12 sobres de 15 gramos c/u",
    publicPrice: 23.00,
    partnerPrice: 16.00,
    bv: 8.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    images: [
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Café adaptógeno para modular el cortisol, reducir el estrés y la fatiga mental, elevar el estado de ánimo y apoyar el vigor masculino.",
    fullDescription: "La Ashwagandha es el adaptógeno rey de la medicina ayurvédica. Este café balancea el sistema nervioso frente al agotamiento crónico, fomenta la calma activa, reduce la ansiedad y apoya el equilibrio hormonal tanto en hombres como en mujeres.",
    benefits: [
      "Disminuye los niveles de estrés, ansiedad y fatiga mental",
      "Aumenta la energía física y vigor masculino",
      "Mejora el estado de ánimo y la calidad del descanso",
      "Regula la respuesta adaptativa ante situaciones exigentes"
    ],
    ingredients: ["Café soluble", "Extracto estandarizado de raíz de Ashwagandha", "Withanólidos bioactivos", "Crema vegetal"],
    usageInstructions: ["Tomar 1 sobre en 150 ml de agua caliente a media mañana o en momentos de alta exigencia mental."],
    tags: ["ashwagandha", "adaptógeno", "estrés", "ánimo", "vigor", "café"]
  },
  {
    id: 15,
    name: "Ganoderma Soluble Coffee (Café con Ganoderma Lucidum)",
    slug: "ganoderma-soluble-coffee-cafe-ganoderma",
    category: "Alimentos",
    rawMaterial: "Ganoderma Lucidum (Hongo Reishi / Lingzhi) & Café Gourmet",
    presentation: "Caja con 12 sobres de 15 gramos c/u",
    publicPrice: 23.00,
    partnerPrice: 16.00,
    bv: 9.60,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US", "ES"],
    status: "Disponible",
    featured: true,
    bestSeller: true,
    images: [
      "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Café medicinal enriquecido con extracto puro de Ganoderma Lucidum. Fortalece el sistema inmunológico, cuida el hígado y aporta protección celular profunda.",
    fullDescription: "Formulado con el hongo milenario Ganoderma Lucidum ('Hongo de la Inmortalidad'), rico en polisacáridos beta-glucanos, triterpenos y germanio orgánico. Regula la homeostasis del organismo, neutraliza radicales libres, estimula las defensas naturales y favorece la desintoxicación hepática.",
    benefits: [
      "Fortalece y modula el sistema inmunitario",
      "Favorece la regeneración de células hepáticas y función del hígado",
      "Ayuda a regular colesterol, lípidos y niveles de glucosa en sangre",
      "Aporta antioxidantes con potente acción antienvejecimiento",
      "Excelente regulador del sistema nervioso y la calidad del sueño"
    ],
    ingredients: [
      "Café arábico tostado de alta calidad",
      "Extracto concentrado de cuerpo fructífero de Ganoderma Lucidum",
      "Crema no láctea vegetal",
      "Polisacáridos 1,3-beta-D-glucanos"
    ],
    usageInstructions: [
      "Disolver 1 sobre en 150 ml de agua caliente (75-80°C).",
      "Consumir 1 a 2 veces al día para mantener una óptima protección inmunológica."
    ],
    tags: ["ganoderma", "reishi", "inmunidad", "hígado", "antioxidante", "café"]
  },
  {
    id: 16,
    name: "Blueberry Soy Protein Powder (Proteína de Soja con Arándanos)",
    slug: "blueberry-soy-protein-powder-proteina-soja-arandanos",
    category: "Alimentos",
    rawMaterial: "Aislado de Proteína de Soja no transgénica & Arándano",
    presentation: "Caja con 10 sobres de 30 gramos c/u",
    publicPrice: 36.00,
    partnerPrice: 25.00,
    bv: 15.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Proteína vegetal de alta densidad nutricional enriquecida con arándanos para nutrición muscular, saciedad, fibra y recuperación física.",
    fullDescription: "Aislado proteico vegetal con perfil completo de aminoácidos esenciales, enriquecido con fibra dietética y los antioxidantes del arándano. Ideal para personas activas, adultos mayores o quienes deseen complementar su ingesta proteica diaria.",
    benefits: [
      "Fortalece y regenera la masa muscular magra",
      "Ayuda a regular los niveles de colesterol en sangre",
      "Aporta fibra para la salud digestiva y saciedad prolongada",
      "Protección antioxidante para la vista y órganos vitales"
    ],
    ingredients: ["Aislado de proteína de soja premium", "Polvo de arándano azul liofilizado", "Fibra vegetal soluble", "Minerales quelados"],
    usageInstructions: ["Mezclar 1 sobre (30g) en 250 ml de agua, leche vegetal o batidos de fruta."],
    tags: ["proteína", "músculos", "soja", "arándano", "nutrición"]
  },
  {
    id: 17,
    name: "Ganoderma Candy (Caramelos de Ganoderma)",
    slug: "ganoderma-candy-caramelos-ganoderma",
    category: "Alimentos",
    rawMaterial: "Ganoderma Lucidum concentrado",
    presentation: "Frasco con 60 caramelos bioactivos",
    publicPrice: 8.30,
    partnerPrice: 5.80,
    bv: 2.90,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    images: [
      "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Caramelos antioxidantes con Ganoderma Lucidum para regeneración celular, refuerzo inmune y protección de la salud bucal.",
    fullDescription: "Prácticos caramelos duros que liberan gradualmente los triterpenos y beta-glucanos del Ganoderma en la cavidad oral, protegiendo encías y garganta al tiempo que refuerzan el sistema inmunológico.",
    benefits: [
      "Aporta antioxidantes que combaten los radicales libres",
      "Ayuda a regenerar tejidos celulares dañados",
      "Protege la mucosa oral y la salud bucal",
      "Apoyo inmunológico práctico para llevar en el bolsillo"
    ],
    ingredients: ["Extracto de Ganoderma Lucidum", "Glucosa purificada", "Aroma natural herbal"],
    usageInstructions: ["Disolver en la boca 1 a 2 caramelos al día."],
    tags: ["ganoderma", "caramelos", "inmunidad", "antioxidante", "salud bucal"]
  },
  {
    id: 18,
    name: "Coffee Candy (Caramelos de Café)",
    slug: "coffee-candy-caramelos-de-cafe",
    category: "Alimentos",
    rawMaterial: "Café Arábica de altura",
    presentation: "Frasco con 60 caramelos",
    publicPrice: 5.80,
    partnerPrice: 4.00,
    bv: 2.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR"],
    status: "Disponible",
    images: [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Caramelos duros con auténtico sabor a café arábico para dar energía instantánea, despejar la mente y mejorar el estado de alerta.",
    fullDescription: "Elaborados con infusión concentrada de café tostado natural. Perfectos para estudiantes, conductores o jornadas largas que requieren un impulso de lucidez mental.",
    benefits: [
      "Proporciona energía y vitalidad al instante",
      "Mejora el estado de alerta y combate la somnolencia",
      "Auténtico sabor a café tostado natural"
    ],
    ingredients: ["Extracto de café arábico", "Azúcar de caña purificada", "Aceite vegetal comestible"],
    usageInstructions: ["Consumir según necesidad para activar la energía."],
    tags: ["café", "caramelos", "energía", "alerta"]
  },
  {
    id: 19,
    name: "Biolacti Candy (Caramelos con Probióticos)",
    slug: "biolacti-candy-caramelos-probioticos",
    category: "Alimentos",
    rawMaterial: "Cepas Probióticas naturales (Lactobacillus & Bifidobacterias)",
    presentation: "Frasco con 60 caramelos bioactivos",
    publicPrice: 5.80,
    partnerPrice: 4.00,
    bv: 2.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR"],
    status: "Disponible",
    images: [
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Caramelos con probióticos vivos para equilibrar la microbiota digestiva, mejorar la digestión y proteger la flora intestinal.",
    fullDescription: "Innovador formato para la ingesta de probióticos protectores que colonizan positivamente el tracto digestivo, reduciendo molestias estomacales y fortaleciendo el sistema inmunitario de niños y adultos.",
    benefits: [
      "Aporta probióticos naturales para la flora bacteriana",
      "Favorece una digestión liviana y regular",
      "Ayuda a prevenir trastornos gastrointestinales leves",
      "Sabor suave y agradable para toda la familia"
    ],
    ingredients: ["Cultivos probióticos liofilizados", "Fructooligosacáridos prebióticos", "Base vegetal"],
    usageInstructions: ["Consumir de 1 a 2 caramelos al día."],
    tags: ["probióticos", "digestión", "microbiota", "caramelos"]
  },
  {
    id: 20,
    name: "Gestifruit Candy (Caramelos Gestifruta)",
    slug: "gestifruit-candy-caramelos-gestifruta",
    category: "Alimentos",
    rawMaterial: "Mix herbal y extractos frutales ricos en Vitamina C",
    presentation: "Frasco con 60 caramelos",
    publicPrice: 5.80,
    partnerPrice: 4.00,
    bv: 2.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR"],
    status: "Disponible",
    images: [
      "https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Caramelos funcionales enriquecidos con extractos frutales y vitamina C para apoyar la función digestiva y la salud intestinal.",
    fullDescription: "Combinación de extractos digestivos naturales con cítricos y hierbas aromáticas que refrescan el paladar y alivian la pesadez tras comidas copiosas.",
    benefits: [
      "Aporta nutrientes esenciales como Vitamina C",
      "Favorece el bienestar y la motilidad intestinal",
      "Refrescante sabor frutal natural"
    ],
    ingredients: ["Extractos de frutas naturales", "Ácido cítrico y ascórbico", "Esencias botánicas"],
    usageInstructions: ["Consumir 1 caramelo después de las comidas."],
    tags: ["frutales", "digestión", "vitamina C", "caramelos"]
  },
  {
    id: 21,
    name: "Peptipro Candy (Caramelos de Péptido de Colágeno)",
    slug: "peptipro-candy-caramelos-colageno",
    category: "Alimentos",
    rawMaterial: "Péptidos de Colágeno Bioactivo",
    presentation: "Frasco con 60 caramelos duros",
    publicPrice: 5.80,
    partnerPrice: 4.00,
    bv: 2.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR"],
    status: "Disponible",
    images: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Caramelos duros enriquecidos con péptidos de colágeno bioactivo para apoyar la nutrición de la piel, uñas y articulaciones.",
    fullDescription: "Una forma práctica y deliciosa de aportar colágeno a tu rutina diaria sin necesidad de preparar batidos.",
    benefits: [
      "Aporta péptidos de colágeno de fácil asimilación",
      "Nutre la estructura dérmica y articular",
      "Cómodo para llevar y consumir en cualquier momento"
    ],
    ingredients: ["Péptidos hidrolizados de colágeno", "Vitamina C", "Base caramelo sin gluten"],
    usageInstructions: ["Tomar de 1 a 3 caramelos al día."],
    tags: ["colágeno", "caramelos", "piel", "articulaciones"]
  },
  {
    id: 22,
    name: "Herbal Fresh Candy (Caramelos Frescos de Hierbas)",
    slug: "herbal-fresh-candy-caramelos-hierbas",
    category: "Alimentos",
    rawMaterial: "Mix herbal tradicional (Menta, Eucalipto, Regaliz)",
    presentation: "Frasco con 60 caramelos",
    publicPrice: 5.80,
    partnerPrice: 4.00,
    bv: 2.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR"],
    status: "Disponible",
    images: [
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Caramelos refrescantes a base de hierbas medicinales para despejar las vías respiratorias, calmar la garganta y brindar aliento fresco.",
    fullDescription: "Fórmula tradicional de plantas balsámicas que alivia la irritación faríngea, humecta las cuerdas vocales y elimina el mal aliento de manera duradera.",
    benefits: [
      "Despeja la garganta y vías respiratorias",
      "Aporta nutrientes botánicos para una óptima salud bucal",
      "Aliento fresco y prolongado"
    ],
    ingredients: ["Aceite esencial de menta piperita", "Extracto de eucalipto", "Regaliz", "Glucosa pura"],
    usageInstructions: ["Dejar disolver lentamente en la boca según necesidad."],
    tags: ["hierbas", "garganta", "frescura", "aliento", "caramelos"]
  },
  {
    id: 23,
    name: "Moruva Candy (Dulces Moruva)",
    slug: "moruva-candy-dulces-moruva",
    category: "Alimentos",
    rawMaterial: "Plantas Medicinales & Morus Alba (Morera)",
    presentation: "Frasco con 60 caramelos",
    publicPrice: 5.80,
    partnerPrice: 4.00,
    bv: 2.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR"],
    status: "Disponible",
    images: [
      "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Caramelos fitoterapéuticos con extracto de hojas de morera para mejorar la circulación sanguínea y regular los picos de glucosa.",
    fullDescription: "La morera blanca (Morus Alba) contiene 1-DNJ y bioflavonoides que favorecen la salud vascular y el metabolismo de los azúcares.",
    benefits: [
      "Aporta nutrientes botánicos para una mejor circulación",
      "Ayuda al equilibrio glucémico fisiológico",
      "Propiedades antioxidantes vasculares"
    ],
    ingredients: ["Extracto de Morus Alba", "Bioflavonoides vegetales", "Base natural"],
    usageInstructions: ["Consumir 1 a 2 caramelos al día."],
    tags: ["circulación", "morera", "glucosa", "caramelos"]
  },
  {
    id: 24,
    name: "Choco Blue (Chocolate con Arándanos)",
    slug: "choco-blue-chocolate-con-arandanos",
    category: "Alimentos",
    rawMaterial: "Cacao fino de aroma & Arándanos Azules",
    presentation: "Caja con 20 sobres de 33 gramos c/u",
    publicPrice: 40.00,
    partnerPrice: 28.00,
    bv: 11.20,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    bestSeller: true,
    images: [
      "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Bebida de chocolate gourmet enriquecida con arándano azul. Aporta fibra, mejora el ánimo, cuida la vista y eleva las defensas naturales.",
    fullDescription: "Choco Blue une la exquisitez del cacao aromático con las bondades del arándano azul. Ideal para desayunos nutritivos o meriendas reconfortantes tanto para niños como para adultos que desean energía sin culpa.",
    benefits: [
      "Aporta fibra soluble y mejora el estado de ánimo (endorfinas)",
      "Protege la salud visual frente al cansancio diario",
      "Refuerza las defensas naturales con alto contenido antioxidante",
      "Se prepara caliente o frío con hielo"
    ],
    ingredients: ["Cacao en polvo desgrasado", "Extracto liofilizado de Arándano Azul", "Crema vegetal sin colesterol", "Minerales esenciales"],
    usageInstructions: [
      "Bebida caliente: Verter 1 sobre en 150 ml de agua caliente (70-80°C) y revolver bien.",
      "Bebida fría: Mezclar en 50 ml de agua caliente para disolver y luego añadir 100 ml de agua con cubitos de hielo."
    ],
    tags: ["chocolate", "arándano", "cacao", "ánimo", "visión", "bebida"]
  },
  {
    id: 25,
    name: "Choco Gano (Chocolate con Ganoderma Lucidum)",
    slug: "choco-gano-chocolate-con-ganoderma",
    category: "Alimentos",
    rawMaterial: "Cacao fino & Extracto de Ganoderma Lucidum",
    presentation: "Caja con 20 sobres de 33 gramos c/u",
    publicPrice: 40.00,
    partnerPrice: 28.00,
    bv: 11.20,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    bestSeller: true,
    images: [
      "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Deliciosa bebida de chocolate terapéutico con Ganoderma. Regenera tejidos, nutre las células, equilibra hormonas y eleva defensas.",
    fullDescription: "Cada sorbo de Choco Gano representa la unión entre la medicina tradicional oriental y la exquisitez del chocolate gourmet. Proporciona una nutrición celular profunda protegiendo el sistema cardiovascular, hepático e inmunitario.",
    benefits: [
      "Aporta antioxidantes celulares profundos",
      "Regenerador celular y regulador hormonal",
      "Nutre y refuerza el sistema inmunológico",
      "Sabor suave, cremoso y altamente placentero"
    ],
    ingredients: [
      "Cacao puro de aroma",
      "Extracto concentrado de Ganoderma Lucidum (Reishi)",
      "Crema no láctea de origen vegetal",
      "Polisacáridos bioactivos"
    ],
    usageInstructions: [
      "Bebida caliente: Disolver 1 sobre en 150 ml de agua caliente (70-80°C).",
      "Bebida fría: Disolver con poca agua caliente y agregar hielo al gusto."
    ],
    tags: ["chocolate", "ganoderma", "inmunidad", "cacao", "reishi", "bebida"]
  },
  {
    id: 26,
    name: "Spirulina Plus Capsule (Espirulina en Cápsulas)",
    slug: "spirulina-plus-capsule-espirulina",
    category: "Suplementos",
    rawMaterial: "Spirulina Platensis pura cultivada con estándares GMP & Ginseng",
    presentation: "Frasco con 60 cápsulas de 500 mg c/u",
    publicPrice: 25.00,
    partnerPrice: 17.00,
    bv: 8.50,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Superalimento celular con más del 65% de proteína completa, vitaminas, minerales y clorofila. Combate la desnutrición, anemia y desinflama.",
    fullDescription: "La microalga Spirulina Platensis es considerada por la OMS como el superalimento más completo del planeta. Enriquecida con fitonutrientes esenciales, hierro altamente biodisponible y ficocianina, promueve la saciedad saludable, el vigor físico y la recuperación tisular.",
    benefits: [
      "Aporta vitaminas del complejo B, hierro, calcio y minerales esenciales",
      "Fortalece huesos, tejidos y combate estados anémicos",
      "Acción antiinflamatoria celular y antioxidante potente",
      "Genera saciedad natural colaborando en el control de peso",
      "Aumenta la vitalidad y reduce el agotamiento crónico"
    ],
    ingredients: ["Polvo puro de Spirulina Platensis orgánica", "Extracto de Ginseng tonificante", "Cápsula vegetal de celulosa"],
    usageInstructions: ["Tomar 2 cápsulas al día con abundante agua, 30 minutos antes de las comidas principales."],
    tags: ["espirulina", "superalimento", "hierro", "proteína", "nutrición", "cápsulas"]
  },
  {
    id: 27,
    name: "Tourmaline Healthcare Insoles (Plantillas de Turmalina)",
    slug: "tourmaline-healthcare-insoles-plantillas-turmalina",
    category: "Accesorios",
    rawMaterial: "Piedra de Turmalina natural & puntos reflexológicos",
    presentation: "1 par de plantillas ergonómicas recortables",
    publicPrice: 9.00,
    partnerPrice: 6.00,
    bv: 3.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Plantillas terapéuticas con partículas de turmalina que estimulan los puntos de reflexología plantar, evitan el mal olor y alivian el cansancio.",
    fullDescription: "Diseñadas según los principios de la medicina tradicional oriental y la reflexología podal. La emisión continua de iones negativos y rayos infrarrojos lejanos estimula la circulación de retorno en las piernas, disminuyendo la pesadez y el insomnio.",
    benefits: [
      "Evita la sudoración excesiva y combate hongos y mal olor en los pies",
      "Brinda amortiguación y descanso ortopédico superior",
      "Mejora la circulación venosa y linfática de piernas y pies",
      "Disminuye el cansancio corporal general y ayuda a conciliar el sueño"
    ],
    ingredients: ["Fibras transpirables de alta resistencia", "Microcristales de turmalina negra termo-activa"],
    usageInstructions: ["Recortar según la talla de calzado e insertar dentro del zapato de uso diario o deportivo."],
    tags: ["turmalina", "plantillas", "pies", "circulación", "reflexología"]
  },
  {
    id: 28,
    name: "Tourmaline Self-Heating Knee Protector (Rodillera Térmica)",
    slug: "tourmaline-self-heating-knee-protector-rodillera-turmalina",
    category: "Accesorios",
    rawMaterial: "Turmalina con puntos térmicos magnéticos",
    presentation: "1 unidad / par de rodilleras ajustables con velcro",
    publicPrice: 55.00,
    partnerPrice: 39.00,
    bv: 15.60,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    bestSeller: true,
    images: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Rodillera autocalentable con turmalina que emite calor infrarrojo profundo para aliviar dolores articulares, artritis, meniscos y rigidez.",
    fullDescription: "Al entrar en contacto con la humedad y temperatura corporal, los cristales de turmalina generan un suave calor terapéutico (hipertermia local) que penetra hasta 3-5 cm en los tejidos articulares, promoviendo la desinflamación y la recuperación ligamentosa.",
    benefits: [
      "Apoya y acelera la microcirculación local en la articulación de la rodilla",
      "Alivia dolores causados por artritis, artrosis, sobrecargas y lesiones deportivas",
      "Genera calor autónomo natural sin necesidad de electricidad",
      "Diseño ergonómico ajustable con bandas de sujeción seguras"
    ],
    ingredients: ["Neopreno elástico de grado médico", "Puntos de turmalina autocalentables"],
    usageInstructions: ["Humedecer ligeramente con un paño húmedo la zona de puntos de turmalina y ajustar a la rodilla durante 20 a 45 minutos."],
    tags: ["rodillera", "turmalina", "dolor", "artritis", "articulaciones", "calor"]
  },
  {
    id: 29,
    name: "Tourmaline Waist Protector (Faja Térmica Lumbar)",
    slug: "tourmaline-waist-protector-faja-cintura-turmalina",
    category: "Accesorios",
    rawMaterial: "Piedras de Turmalina & Fibras de soporte lumbar",
    presentation: "1 unidad de faja lumbar con ajuste reforzado",
    publicPrice: 69.00,
    partnerPrice: 48.00,
    bv: 19.20,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Cinturón protector lumbar con turmalina. Alivia dolores de espalda, lumbago, ciática y contracturas mediante calor bio-magnético.",
    fullDescription: "Proporciona soporte anatómico a la columna vertebral mientras su matriz de turmalina emite calor e iones negativos directamente en la zona lumbar y sacra, aliviando tensiones musculares y mejorando la postura corporal.",
    benefits: [
      "Alivia el dolor agudo y crónico de espalda, cintura y ciática",
      "Proporciona soporte postural a la columna vertebral",
      "Disminuye la tensión muscular en personas que pasan mucho tiempo de pie o sentadas",
      "Estimula la termogénesis localizada en la zona abdominal"
    ],
    ingredients: ["Faja elástica de compresión gradual", "Piedras y matriz de turmalina bioenergética"],
    usageInstructions: ["Colocar alrededor de la cintura y ajustar con los velcros. Usar de 30 a 60 minutos al día según tolerancia térmica."],
    tags: ["faja lumbar", "espalda", "turmalina", "dolor lumbar", "postura"]
  },
  {
    id: 30,
    name: "Tourmaline Self-Heating Neck Protector (Cuellera Térmica)",
    slug: "tourmaline-self-heating-neck-protector-cuellera-turmalina",
    category: "Accesorios",
    rawMaterial: "Turmalina autocalentable & microimanes",
    presentation: "1 unidad de cuellera cervical adaptable",
    publicPrice: 16.00,
    partnerPrice: 11.00,
    bv: 4.40,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    images: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Protector de cuello cervical con turmalina que relaja la tensión acumulada por estrés, tortícolis o malas posturas frente al computador.",
    fullDescription: "Calienta de manera gradual la musculatura del trapecio y la columna cervical, relajando los nudos de tensión, mejorando el flujo sanguíneo hacia el cerebro y aliviando migrañas tensionales.",
    benefits: [
      "Mejora la tensión en el cuello y hombros provocada por malas posturas",
      "Alivia la rigidez cervical y la tortícolis",
      "Disminuye los dolores de cabeza de origen tensional",
      "Fácil de usar en casa o la oficina"
    ],
    ingredients: ["Tejido suave hipoalergénico", "Matriz térmica de turmalina activa"],
    usageInstructions: ["Colocar en el cuello ajustando el velcro sin apretar excesivamente durante 15 a 30 minutos."],
    tags: ["cuellera", "cervical", "cuello", "turmalina", "estrés", "postura"]
  },
  {
    id: 31,
    name: "Toalla Sanitaria con Turmalina Uso Noche",
    slug: "toalla-sanitaria-turmalina-uso-noche",
    category: "Cuidado personal",
    rawMaterial: "Algodón orgánico ultra absorbente & Cinta de Aniones de Turmalina",
    presentation: "Paquete con 8 unidades de uso nocturno",
    publicPrice: 4.00,
    partnerPrice: 3.20,
    bv: 1.60,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Toalla sanitaria nocturna con cinta verde de turmalina emisora de aniones. Previene bacterias, elimina malos olores y alivia cólicos menstruales.",
    fullDescription: "Diseñada con 8 capas de protección transpirable y gel de polímero absorbente biodegradable. Su innovador chip de turmalina emite iones negativos que inhiben la proliferación bacteriana anaerobia, equilibran el pH íntimo y brindan noches de descanso seguro sin derrames.",
    benefits: [
      "Mejora la microcirculación en la zona íntima",
      "Reduce y previene malos olores de forma natural",
      "Ayuda a prevenir infecciones vaginales y hongos",
      "Alivia cólicos menstruales gracias a la emisión de calor bio-infrarrojo",
      "Máxima absorción y alas nocturnas antifugas"
    ],
    ingredients: ["Algodón puro no blanqueado con cloro", "Banda de aniones de turmalina", "Polímero superabsorbente japonés", "Capa transpirable"],
    usageInstructions: ["Uso externo durante la noche o días de flujo intenso menstrual."],
    tags: ["toallas sanitarias", "turmalina", "aniones", "cólicos", "salud femenina", "noche"]
  },
  {
    id: 32,
    name: "Protector Íntimo Diario con Turmalina",
    slug: "protector-intimo-diario-turmalina",
    category: "Cuidado personal",
    rawMaterial: "Algodón respirable & Chip de Aniones de Turmalina",
    presentation: "Paquete con 30 unidades de uso diario",
    publicPrice: 5.00,
    partnerPrice: 3.50,
    bv: 1.70,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Protectores diarios ultrafinos con cinta de aniones de turmalina para frescura continua, higiene íntima y balance antibacteriano 24/7.",
    fullDescription: "Protección diaria cómoda e imperceptible. Su cinta de turmalina mantiene la zona íntima fresca, seca y libre de humedad propensa a infecciones y malos olores.",
    benefits: [
      "Mantiene la frescura e higiene íntima todo el día",
      "Inhibe la proliferación bacteriana y hongos",
      "Neutraliza olores sin perfumes químicos irritantes",
      "Totalmente transpirable para evitar irritaciones dérmicas"
    ],
    ingredients: ["Superficie de algodón suave hipoalergénico", "Cinta de turmalina emisora de aniones", "Papel microporoso"],
    usageInstructions: ["Uso diario higiénico. Cambiar según necesidad durante el día."],
    tags: ["protectores diarios", "turmalina", "higiene intima", "aniones", "frescura"]
  },
  {
    id: 33,
    name: "Toalla Sanitaria con Turmalina Uso Día",
    slug: "toalla-sanitaria-turmalina-uso-dia",
    category: "Cuidado personal",
    rawMaterial: "Algodón orgánico & Cinta de Aniones de Turmalina",
    presentation: "Paquete con 10 unidades de uso diurno",
    publicPrice: 5.00,
    partnerPrice: 3.50,
    bv: 1.70,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Toalla sanitaria diurna con diseño anatómico y cinta de aniones de turmalina. Absorción instantánea, sequedad y confort durante todo el día.",
    fullDescription: "Toalla femenina para el día con tecnología de absorción multicapa que bloquea el líquido inmediatamente, manteniendo la piel seca y limpia en tus actividades diarias.",
    benefits: [
      "Mejora la circulación íntima y disminuye dolores menstruales",
      "Previene bacterias y neutraliza olores de raíz",
      "Capa superficial de seda de algodón suave que no irrita",
      "Alas de fijación segura anti-desplazamiento"
    ],
    ingredients: ["Algodón bio-amigable", "Cinta de aniones de turmalina", "Gel absorbente ecológico"],
    usageInstructions: ["Uso durante el periodo menstrual diurno."],
    tags: ["toalla de día", "turmalina", "aniones", "menstruación", "cuidado femenino"]
  },
  {
    id: 34,
    name: "Press On Nails (Uñas Acrílicas Postizas)",
    slug: "press-on-nails-unas-acrilicas-postizas",
    category: "Belleza",
    rawMaterial: "Materiales acrílicos no tóxicos de alta durabilidad",
    presentation: "Estuche con 24 unidades y adhesivo",
    publicPrice: 8.58,
    partnerPrice: 6.00,
    bv: 1.20,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR"],
    status: "Disponible",
    images: [
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Uñas postizas de calidad profesional y fácil colocación, elaboradas con materiales seguros no tóxicos y acabado elegante.",
    fullDescription: "Manicura instantánea tipo salón sin dañar tus uñas naturales. Reutilizables, resistentes al agua y con diseños modernos listos para lucir.",
    benefits: [
      "Mejora la apariencia estética de las manos al instante",
      "Materiales libres de toxinas dañinas para la queratina de la uña",
      "Fácil aplicación y remoción sin necesidad de lámpara UV",
      "Reutilizables con pegamento o almohadillas adhesivas"
    ],
    ingredients: ["Acrílico ABS de grado estético", "Adhesivo hipoalergénico"],
    usageInstructions: ["Limpiar la uña natural, seleccionar el tamaño correspondiente y presionar durante 20 segundos."],
    tags: ["uñas", "belleza", "press on nails", "manicura"]
  },
  {
    id: 35,
    name: "Pulsera de Turmalina Versión Limitada (Cód. 51-57)",
    slug: "pulsera-de-turmalina-version-limitada-51-57",
    category: "Accesorios",
    rawMaterial: "Piedra de Turmalina natural seleccionada en gama multicolor",
    presentation: "1 unidad con estuche de protección",
    publicPrice: 22.00,
    partnerPrice: 15.00,
    bv: 9.00,
    currency: "USD",
    availableCountries: ["PA", "PE", "CO", "BO", "EC", "MX", "CL", "GT", "SV", "CR", "US"],
    status: "Disponible",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Pulsera terapéutica artesanal de turmalina. Emite iones negativos e infrarrojo lejano para mejorar la microcirculación y protección EMF.",
    fullDescription: "Joya bioenergética coleccionable. Las turmalinas naturales actúan como filtros energéticos que equilibran los meridianos corporales y repelen la radiación electromagnética de dispositivos móviles.",
    benefits: [
      "Mejora la microcirculación a través de iones negativos",
      "Emisión natural de rayos infrarrojos lejanos beneficiosos",
      "Protección contra la radiación electromagnética (celulares y WiFi)",
      "Diseño elegante unisex para uso cotidiano"
    ],
    ingredients: ["Gemas de turmalina natural tallada", "Cordón elástico de alta tenacidad"],
    usageInstructions: ["Llevar en la muñeca derecha o izquierda durante el día. Limpiar periódicamente con agua corriente."],
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
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Colgante de cristal de turmalina bioactiva para protección áurica, armonización de chakras del corazón y garganta y neutralización de campos EMF.",
    fullDescription: "Piedra receptiva y protectora de alto calibre. Su proximidad al timo y al chakra cardíaco favorece la sensación de serenidad, enfoque mental y escudo bio-magnético.",
    benefits: [
      "Potente emisión de iones negativos y rayos infrarrojos lejanos",
      "Protege contra ondas electromagnéticas dañinas en el entorno laboral",
      "Armoniza los centros de energía (Chakras cardíaco y de garganta)",
      "Aporta serenidad, perspectiva y equilibrio emocional"
    ],
    ingredients: ["Cristal pulido de turmalina natural", "Engaste hipoalergénico"],
    usageInstructions: ["Colgar en el pecho a la altura del esternón. Recargar al sol matutino 1 hora semanalmente."],
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
    images: [
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Collar de piedras de turmalina seleccionadas. Estimula la circulación en la zona cervical, garganta y glándula tiroides.",
    fullDescription: "Gemas mixtas naturales ensartadas con precisión artesanal. Ideal para quienes buscan unir la belleza de la joyería fina con los beneficios holísticos de la litoterapia.",
    benefits: [
      "Mejora la microcirculación cervical y linfática",
      "Favorece el balance en la zona de la garganta y tiroides",
      "Equilibra el campo bioeléctrico corporal",
      "Pieza exclusiva de edición limitada"
    ],
    ingredients: ["Cuentas esféricas de turmalina natural", "Broche de seguridad de acero inoxidable"],
    usageInstructions: ["Usar como accesorio diario sobre la piel o prenda."],
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
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Collar continuo de turmalina para promover la vitalidad, disipar cargas electromagnéticas y elevar el chi personal.",
    fullDescription: "El collar clásico de HGW ayuda a personas con fatiga crónica, dolores de cabeza recurrentes o sobreexposición a computadores a reencontrar su centro y vitalidad.",
    benefits: [
      "Emisión constante de iones negativos terapéuticos",
      "Alivia la tensión muscular en el cuello y hombros",
      "Protección contra campos electromagnéticos",
      "Resistente y duradero para uso continuo"
    ],
    ingredients: ["Turmalina mineral natural", "Alma de hilo reforzado"],
    usageInstructions: ["Llevar en el cuello durante la jornada diurna."],
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
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Pulsera terapéutica elástica con cuentas de turmalina para mejorar la circulación de la mano, muñeca y canalizar energía positiva.",
    fullDescription: "Ideal para trabajadores de oficina, diseñadores o personas con síndrome de túnel carpiano que requieren estimular el flujo sanguíneo en la muñeca.",
    benefits: [
      "Mejora la microcirculación periférica en muñeca y dedos",
      "Disminuye la rigidez articular en manos",
      "Emisión de rayos infrarrojos lejanos bioactivos",
      "Práctica, cómoda y adaptable a cualquier muñeca"
    ],
    ingredients: ["Cuentas esféricas de turmalina", "Elástico de alta resistencia"],
    usageInstructions: ["Usar en la muñeca de forma continuada."],
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
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=800&auto=format&fit=crop&q=80"
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
    ingredients: ["Cuerpo de Acero Inoxidable doble pared al vacío", "Filtro cerámico con esferas de turmalina activa y minerales traza"],
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
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Taza térmica elegante con tapa hermética de acero inoxidable para mantener tus cafés HGW calientes durante horas.",
    fullDescription: "Diseñada para disfrutar tus bebidas HGW donde vayas. Conserva la temperatura óptima evitando la pérdida de aroma y sabor de tus cafés funcionales.",
    benefits: [
      "Mantiene bebidas calientes o frías por tiempo prolongado",
      "Acero inoxidable de grado alimentario libre de BPA",
      "Tapa antiderrame para auto o escritorio"
    ],
    ingredients: ["Acero inoxidable 304", "Silicona de sellado hermético"],
    usageInstructions: ["Lavar antes del primer uso. Ideal para preparar sobres individuales de café HGW."],
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
      "https://images.unsplash.com/photo-1594213114663-d94db9b17125?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Hervidor rápido de alta capacidad con apagado automático y cuerpo completo de acero inoxidable para preparar todas tus infusiones.",
    fullDescription: "Calienta el agua en segundos de manera segura y eficiente. Su interior 100% en acero inoxidable garantiza que tus bebidas no tengan contacto con plásticos a altas temperaturas.",
    benefits: [
      "Calienta agua de forma inmediata con tecnología de ebullición rápida",
      "Apagado automático de seguridad al alcanzar los 100°C",
      "Cuerpo de acero inoxidable higiénico y fácil de limpiar",
      "Capacidad generosa de 1.8 litros para toda la familia"
    ],
    ingredients: ["Estructura de Acero Inoxidable", "Base giratoria 360°", "Elemento calefactor oculto"],
    usageInstructions: ["Llenar con agua potable hasta la marca deseada, conectar a la base y accionar el interruptor."],
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
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Vaso térmico premium para llevar café, té o bebidas frías con máximo aislamiento de temperatura y diseño contemporáneo.",
    fullDescription: "Aislamiento al vacío que no transpira ni calienta el exterior al tacto. Perfecto para tu día a día.",
    benefits: [
      "Conserva bebidas calientes hasta 6 horas y frías hasta 12 horas",
      "Agarre ergonómico y superficie antideslizante",
      "Material higiénico que no retiene olores ni sabores"
    ],
    ingredients: ["Acero inoxidable 304", "Tapa con boquilla abatible"],
    usageInstructions: ["Apto para bebidas frías o calientes."],
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
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Almohada ergonómica con turmalina y terapia magnética. Induce sueño profundo, alinea la columna cervical y elimina tensiones.",
    fullDescription: "Combina soporte ortopédico cervical con la emisión continua de iones negativos y campos magnéticos suaves que mejoran la oxigenación cerebral durante el sueño, reduciendo ronquidos, contracturas y fatiga al despertar.",
    benefits: [
      "Mejora notablemente la calidad y profundidad del sueño",
      "Alivia tensiones acumuladas en cuello y hombros mientras duermes",
      "Emisión continua de iones negativos y rayos infrarrojos lejanos",
      "Diseño contorneado que alinea de forma natural las vértebras cervicales"
    ],
    ingredients: ["Núcleo de memoria viscoelástica ortopédica", "Pastillas de turmalina bioenergética", "Microimanes terapéuticos", "Funda de fibra de bambú transpirable"],
    usageInstructions: ["Usar como almohada principal para dormir todas las noches."],
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
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Bolígrafo fino de gel para registrar tus metas, planes de trabajo y momentos importantes con escritura fluida y elegante.",
    fullDescription: "Accesorio oficial corporativo para socios y distribuidores. Tinta de secado rápido y trazo impecable.",
    benefits: [
      "Aspecto fino, ligero y elegante para presentaciones de negocio",
      "Trazo suave y continuo sin manchas",
      "Herramienta de trabajo profesional para el networker"
    ],
    ingredients: ["Aleación ligera", "Tinta gel negra"],
    usageInstructions: ["Uso en papelería de oficina."],
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
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Dentífrico blanqueador natural con microcristales de turmalina blanca. Elimina manchas de café/té, combate el mal aliento y protege el esmalte.",
    fullDescription: "Fórmula sin flúor abrasivo que utiliza las propiedades bioeléctricas de la turmalina blanca para disolver la placa bacteriana y restaurar la blancura natural de las piezas dentales sin desgastar el esmalte.",
    benefits: [
      "Ayuda al blanqueamiento progresivo de los dientes sin dañar el esmalte",
      "Combate el mal aliento por tiempo prolongado",
      "Deja una sensación de boca mucho más limpia, fresca y saludable",
      "Libre de ingredientes agresivos y flúor perjudicial"
    ],
    ingredients: ["Polvo ultrafino de turmalina blanca", "Extractos de menta botánica", "Carbonato de calcio purificado", "Xilitol protector"],
    usageInstructions: ["Cepillar los dientes durante 2 a 3 minutos después de cada comida, al menos 3 veces al día."],
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
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Pasta dental antiinflamatoria con turmalina negra. Combate encías sangrantes, gingivitis, inflamaciones bucales y mal aliento persistente.",
    fullDescription: "Especialmente recomendada para personas con sensibilidad gingival, sangrado al cepillarse o periodontitis leve. La turmalina negra estimula la regeneración capilar en las encías y neutraliza bacterias bucales anaeróbicas.",
    benefits: [
      "Combate inflamaciones dentales, encías retraídas y sangrado",
      "Acción antibacteriana profunda contra la placa y sarro",
      "Boca fresca, desinfectada y limpia por más tiempo",
      "Alivia la sensibilidad dental al frío o calor"
    ],
    ingredients: ["Polvo mineral de turmalina negra", "Extractos antiinflamatorios de hierbas chinas", "Menta silvestre", "Bicarbonato biocompatible"],
    usageInstructions: ["Cepillar suavemente encías y dientes durante 3 minutos después de comer."],
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
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80"
    ],
    shortDescription: "Dentífrico de avanzada que aporta bacterias benéficas para equilibrar la microbiota oral, frenar microbios nocivos y prevenir caries.",
    fullDescription: "Revolución en la odontología biológica. En lugar de matar todas las bacterias con químicos fuertes, introduce probióticos específicos que compiten contra los microbios que causan sarro, caries y mal aliento, protegiendo tus encías de forma natural.",
    benefits: [
      "Equilibra la flora bacteriana saludable de la cavidad bucal",
      "Aporta bacterias buenas que frenan microbios patógenos",
      "Reduce la formación de placa bacteriana y frena la gingivitis",
      "Disminuye el mal aliento crónico y protege la salud de las encías"
    ],
    ingredients: ["Lactobacillus paracasei orales liofilizados", "Minerales remineralizantes", "Menta suave natural"],
    usageInstructions: ["Cepillar diariamente después de cada comida."],
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
