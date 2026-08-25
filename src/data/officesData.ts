import { HGWOffice } from '../types';

export const HGW_OFFICES: HGWOffice[] = [
  // PANAMÁ
  {
    id: 'off-pa-01',
    countryCode: 'PA',
    countryName: 'Panamá',
    city: 'Ciudad de Panamá',
    name: 'Sede Principal & Centro de Distribución HGW Panamá',
    address: 'Vía España, Edificio Galerías Bolívar, Piso 3, Oficina 302, Bella Vista, Ciudad de Panamá',
    phone: '+507 6778-8375',
    whatsapp: '+50767788375',
    email: 'info@negociohgw.com',
    openingHours: 'Lunes a Viernes: 9:00 AM - 6:00 PM | Sábados: 9:00 AM - 2:00 PM',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Información General',
      'Registro de Socios',
      'Atención al Cliente',
      'Recepción de Pedidos',
      'Despacho Inmediato',
      'Envíos Nacionales',
      'Cobros y Pagos',
      'Capacitación'
    ],
    notes: 'Punto de retiro oficial para compras de clientes y activaciones de socios. Despachos con Servientrega a todo el país.'
  },
  {
    id: 'off-pa-02',
    countryCode: 'PA',
    countryName: 'Panamá',
    city: 'David, Chiriquí',
    name: 'Punto de Apoyo y Distribución Chiriquí',
    address: 'Calle F Sur y Avenida 3ra Oeste, David, Provincia de Chiriquí',
    phone: '+507 6778-8375',
    whatsapp: '+50767788375',
    openingHours: 'Lunes a Viernes: 9:30 AM - 5:30 PM | Sábados: 9:00 AM - 1:00 PM',
    isOfficial: false,
    status: 'Punto Autorizado',
    services: [
      'Información General',
      'Registro de Socios',
      'Recepción de Pedidos',
      'Despacho Inmediato',
      'Atención al Cliente'
    ],
    notes: 'Atención a líderes y clientes del occidente de Panamá.'
  },
  {
    id: 'off-pa-03',
    countryCode: 'PA',
    countryName: 'Panamá',
    city: 'Santiago de Veraguas',
    name: 'Centro de Enlace Veraguas y Provincias Centrales',
    address: 'Avenida Central frente a Parque Juan Demóstenes Arosemena, Santiago, Veraguas',
    whatsapp: '+50767788375',
    openingHours: 'Lunes a Viernes: 9:00 AM - 5:00 PM',
    isOfficial: false,
    status: 'Punto Autorizado',
    services: ['Información General', 'Registro de Socios', 'Recepción de Pedidos', 'Atención al Cliente']
  },
  {
    id: 'off-pa-04',
    countryCode: 'PA',
    countryName: 'Panamá',
    city: 'Colón',
    name: 'Punto de Contacto Costa Atlántica Colón',
    address: 'Calle 11 y Avenida Bolívar, Colón',
    whatsapp: '+50767788375',
    openingHours: 'Lunes a Viernes: 10:00 AM - 5:00 PM',
    isOfficial: false,
    status: 'Punto Autorizado',
    services: ['Información General', 'Registro de Socios', 'Atención al Cliente']
  },

  // PERÚ
  {
    id: 'off-pe-01',
    countryCode: 'PE',
    countryName: 'Perú',
    city: 'Lima',
    name: 'Sede Corporativa HGW Perú - Miraflores / San Isidro',
    address: 'Av. Paseo de la República, Centro Empresarial, Lima',
    phone: '+51 987 654 321',
    whatsapp: '+50767788375',
    email: 'peru@negociohgw.com',
    openingHours: 'Lunes a Viernes: 9:00 AM - 7:00 PM | Sábados: 9:00 AM - 2:00 PM',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Información General',
      'Registro de Socios',
      'Atención al Cliente',
      'Recepción de Pedidos',
      'Despacho Inmediato',
      'Envíos Nacionales',
      'Cobros y Pagos',
      'Capacitación'
    ],
    notes: 'Principal centro de operaciones y capacitaciones magistrales en Perú.'
  },
  {
    id: 'off-pe-02',
    countryCode: 'PE',
    countryName: 'Perú',
    city: 'Arequipa',
    name: 'Centro de Distribución HGW Arequipa',
    address: 'Calle Mercaderes / Urb. Cayma, Arequipa',
    whatsapp: '+50767788375',
    openingHours: 'Lunes a Sábado: 9:30 AM - 6:00 PM',
    isOfficial: false,
    status: 'Punto Autorizado',
    services: ['Información General', 'Registro de Socios', 'Recepción de Pedidos', 'Despacho Inmediato', 'Atención al Cliente']
  },
  {
    id: 'off-pe-03',
    countryCode: 'PE',
    countryName: 'Perú',
    city: 'Trujillo',
    name: 'Centro de Atención HGW La Libertad',
    address: 'Av. España, Zona Céntrica, Trujillo',
    whatsapp: '+50767788375',
    openingHours: 'Lunes a Viernes: 9:00 AM - 6:00 PM',
    isOfficial: false,
    status: 'Punto Autorizado',
    services: ['Información General', 'Registro de Socios', 'Recepción de Pedidos', 'Atención al Cliente']
  },
  {
    id: 'off-pe-04',
    countryCode: 'PE',
    countryName: 'Perú',
    city: 'Cusco',
    name: 'Punto de Servicio Imperial Cusco',
    address: 'Av. El Sol, Cusco Centro',
    whatsapp: '+50767788375',
    openingHours: 'Lunes a Viernes: 9:00 AM - 5:00 PM',
    isOfficial: false,
    status: 'Punto Autorizado',
    services: ['Información General', 'Registro de Socios', 'Atención al Cliente']
  },

  // BOLIVIA
  {
    id: 'off-bo-01',
    countryCode: 'BO',
    countryName: 'Bolivia',
    city: 'Santa Cruz de la Sierra',
    name: 'Sede Central HGW Bolivia - Equipetrol',
    address: 'Av. San Martín, Zona Equipetrol / 2do Anillo, Santa Cruz de la Sierra',
    phone: '+591 700 00000',
    whatsapp: '+50767788375',
    email: 'bolivia@negociohgw.com',
    openingHours: 'Lunes a Viernes: 8:30 AM - 6:30 PM | Sábados: 9:00 AM - 1:00 PM',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Información General',
      'Registro de Socios',
      'Atención al Cliente',
      'Recepción de Pedidos',
      'Despacho Inmediato',
      'Envíos Nacionales',
      'Cobros y Pagos',
      'Capacitación'
    ],
    notes: 'Respaldado por la Asociación Boliviana de Venta Directa.'
  },
  {
    id: 'off-bo-02',
    countryCode: 'BO',
    countryName: 'Bolivia',
    city: 'La Paz',
    name: 'Centro de Atención HGW La Paz - El Prado / Calacoto',
    address: 'Av. 16 de Julio (El Prado), Edificio Cosmos, La Paz',
    whatsapp: '+50767788375',
    openingHours: 'Lunes a Viernes: 9:00 AM - 6:00 PM',
    isOfficial: true,
    status: 'Operativa',
    services: ['Información General', 'Registro de Socios', 'Recepción de Pedidos', 'Despacho Inmediato', 'Atención al Cliente']
  },
  {
    id: 'off-bo-03',
    countryCode: 'BO',
    countryName: 'Bolivia',
    city: 'Cochabamba',
    name: 'Punto Autorizado HGW Cochabamba',
    address: 'Av. Heroínas / Av. Ayacucho, Cochabamba',
    whatsapp: '+50767788375',
    openingHours: 'Lunes a Viernes: 9:00 AM - 6:00 PM',
    isOfficial: false,
    status: 'Punto Autorizado',
    services: ['Información General', 'Registro de Socios', 'Recepción de Pedidos', 'Atención al Cliente']
  },

  // ECUADOR
  {
    id: 'off-ec-01',
    countryCode: 'EC',
    countryName: 'Ecuador',
    city: 'Quito',
    name: 'Sede Corporativa HGW Ecuador - Quito Norte',
    address: 'Av. Amazonas y Naciones Unidas, Sector La Carolina, Quito',
    phone: '+593 99 000 0000',
    whatsapp: '+50767788375',
    email: 'ecuador@negociohgw.com',
    openingHours: 'Lunes a Viernes: 9:00 AM - 6:00 PM | Sábados: 9:00 AM - 1:00 PM',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Información General',
      'Registro de Socios',
      'Atención al Cliente',
      'Recepción de Pedidos',
      'Despacho Inmediato',
      'Envíos Nacionales',
      'Cobros y Pagos',
      'Capacitación'
    ]
  },
  {
    id: 'off-ec-02',
    countryCode: 'EC',
    countryName: 'Ecuador',
    city: 'Guayaquil',
    name: 'Centro Logístico HGW Guayaquil - Kennedy Norte',
    address: 'Av. Francisco de Orellana, Sector Kennedy Norte, Guayaquil',
    whatsapp: '+50767788375',
    openingHours: 'Lunes a Viernes: 9:00 AM - 6:00 PM',
    isOfficial: true,
    status: 'Operativa',
    services: ['Información General', 'Registro de Socios', 'Recepción de Pedidos', 'Despacho Inmediato', 'Atención al Cliente']
  },

  // COLOMBIA
  {
    id: 'off-co-01',
    countryCode: 'CO',
    countryName: 'Colombia',
    city: 'Bogotá D.C.',
    name: 'Sede Principal HGW Colombia - Chapinero / Calle 100',
    address: 'Carrera 15 con Calle 93 / Calle 100, Sector Empresarial, Bogotá',
    phone: '+57 300 000 0000',
    whatsapp: '+50767788375',
    email: 'colombia@negociohgw.com',
    openingHours: 'Lunes a Viernes: 8:30 AM - 6:00 PM | Sábados: 9:00 AM - 1:00 PM',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Información General',
      'Registro de Socios',
      'Atención al Cliente',
      'Recepción de Pedidos',
      'Despacho Inmediato',
      'Envíos Nacionales',
      'Cobros y Pagos',
      'Capacitación'
    ]
  },
  {
    id: 'off-co-02',
    countryCode: 'CO',
    countryName: 'Colombia',
    city: 'Medellín',
    name: 'Centro HGW Antioquia - El Poblado',
    address: 'Milla de Oro, El Poblado, Medellín, Antioquia',
    whatsapp: '+50767788375',
    openingHours: 'Lunes a Viernes: 9:00 AM - 6:00 PM',
    isOfficial: true,
    status: 'Operativa',
    services: ['Información General', 'Registro de Socios', 'Recepción de Pedidos', 'Despacho Inmediato', 'Atención al Cliente']
  },
  {
    id: 'off-co-03',
    countryCode: 'CO',
    countryName: 'Colombia',
    city: 'Cali',
    name: 'Punto Autorizado Valle del Cauca',
    address: 'Avenida 6N, Sector Granada, Cali, Valle del Cauca',
    whatsapp: '+50767788375',
    openingHours: 'Lunes a Viernes: 9:00 AM - 5:30 PM',
    isOfficial: false,
    status: 'Punto Autorizado',
    services: ['Información General', 'Registro de Socios', 'Recepción de Pedidos', 'Atención al Cliente']
  },

  // MÉXICO
  {
    id: 'off-mx-01',
    countryCode: 'MX',
    countryName: 'México',
    city: 'Ciudad de México (CDMX)',
    name: 'Oficina Central HGW México - Insurgentes Sur / Reforma',
    address: 'Av. Insurgentes Sur, Col. Del Valle / Nápoles, Benito Juárez, CDMX',
    phone: '+52 55 0000 0000',
    whatsapp: '+50767788375',
    email: 'mexico@negociohgw.com',
    openingHours: 'Lunes a Viernes: 9:00 AM - 6:30 PM | Sábados: 9:00 AM - 2:00 PM',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Información General',
      'Registro de Socios',
      'Atención al Cliente',
      'Recepción de Pedidos',
      'Despacho Inmediato',
      'Envíos Nacionales',
      'Cobros y Pagos',
      'Capacitación'
    ]
  },
  {
    id: 'off-mx-02',
    countryCode: 'MX',
    countryName: 'México',
    city: 'Guadalajara, Jalisco',
    name: 'Centro HGW Occidente Guadalajara',
    address: 'Av. Vallarta / Av. Américas, Guadalajara, Jalisco',
    whatsapp: '+50767788375',
    openingHours: 'Lunes a Viernes: 9:30 AM - 6:00 PM',
    isOfficial: true,
    status: 'Operativa',
    services: ['Información General', 'Registro de Socios', 'Recepción de Pedidos', 'Atención al Cliente']
  },
  {
    id: 'off-mx-03',
    countryCode: 'MX',
    countryName: 'México',
    city: 'Monterrey, Nuevo León',
    name: 'Punto Autorizado Monterrey Norte',
    address: 'San Pedro Garza García / Zona Valle Oriente, Monterrey, N.L.',
    whatsapp: '+50767788375',
    openingHours: 'Lunes a Viernes: 9:00 AM - 6:00 PM',
    isOfficial: false,
    status: 'Punto Autorizado',
    services: ['Información General', 'Registro de Socios', 'Atención al Cliente']
  },

  // CHILE
  {
    id: 'off-cl-01',
    countryCode: 'CL',
    countryName: 'Chile',
    city: 'Santiago de Chile',
    name: 'Sede HGW Chile - Providencia / Las Condes',
    address: 'Av. Providencia / Av. Apoquindo, Santiago',
    phone: '+56 9 0000 0000',
    whatsapp: '+50767788375',
    email: 'chile@negociohgw.com',
    openingHours: 'Lunes a Viernes: 9:00 AM - 6:00 PM',
    isOfficial: true,
    status: 'Operativa',
    services: ['Información General', 'Registro de Socios', 'Recepción de Pedidos', 'Despacho Inmediato', 'Atención al Cliente', 'Capacitación']
  },

  // GUATEMALA
  {
    id: 'off-gt-01',
    countryCode: 'GT',
    countryName: 'Guatemala',
    city: 'Ciudad de Guatemala',
    name: 'Oficina Central HGW Guatemala - Zona 10 / Zona 9',
    address: 'Avenida Reforma / Diagonal 6, Zona 10, Ciudad de Guatemala',
    phone: '+502 5000 0000',
    whatsapp: '+50767788375',
    email: 'guatemala@negociohgw.com',
    openingHours: 'Lunes a Viernes: 8:30 AM - 5:30 PM | Sábados: 9:00 AM - 1:00 PM',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Información General',
      'Registro de Socios',
      'Atención al Cliente',
      'Recepción de Pedidos',
      'Despacho Inmediato',
      'Envíos Nacionales',
      'Cobros y Pagos'
    ]
  },

  // EL SALVADOR
  {
    id: 'off-sv-01',
    countryCode: 'SV',
    countryName: 'El Salvador',
    city: 'San Salvador',
    name: 'Centro de Servicios HGW San Salvador',
    address: 'Paseo General Escalón, Colonia Escalón, San Salvador',
    phone: '+503 7000 0000',
    whatsapp: '+50767788375',
    email: 'elsalvador@negociohgw.com',
    openingHours: 'Lunes a Viernes: 9:00 AM - 5:30 PM',
    isOfficial: true,
    status: 'Operativa',
    services: ['Información General', 'Registro de Socios', 'Recepción de Pedidos', 'Atención al Cliente', 'Despacho Inmediato']
  },

  // COSTA RICA
  {
    id: 'off-cr-01',
    countryCode: 'CR',
    countryName: 'Costa Rica',
    city: 'San José',
    name: 'Punto de Servicio HGW San José - Sabana / Escazú',
    address: 'Sector La Sabana / Paseo Colón, San José',
    phone: '+506 8000 0000',
    whatsapp: '+50767788375',
    email: 'costarica@negociohgw.com',
    openingHours: 'Lunes a Viernes: 9:00 AM - 5:00 PM',
    isOfficial: true,
    status: 'Operativa',
    services: ['Información General', 'Registro de Socios', 'Recepción de Pedidos', 'Atención al Cliente']
  }
];

export function getOfficesByCountry(countryCode: string): HGWOffice[] {
  return HGW_OFFICES.filter(o => o.countryCode.toUpperCase() === countryCode.toUpperCase());
}

export function getAllOfficeCountries(): { code: string; name: string }[] {
  const map = new Map<string, string>();
  HGW_OFFICES.forEach(o => {
    if (!map.has(o.countryCode)) {
      map.set(o.countryCode, o.countryName);
    }
  });
  return Array.from(map.entries()).map(([code, name]) => ({ code, name }));
}

