import { HGWOffice } from '../types';
import { getDriveUrl, HGW_DRIVE_ASSETS } from '../utils/driveImages';

/**
 * Directorio Oficial de Oficinas y Sedes HGW en Latinoamérica e Hispanoamérica
 * 
 * Regla de atención al usuario:
 * Al escribir o acudir a las Oficinas Oficiales HGW, debes proporcionar tu número de usuario / código de socio registrado.
 * Si ya lo tienes, contacta a tu patrocinador para cualquier gestión.
 * Si no lo tienes, puedes escribirnos por WhatsApp y con gusto te enseñamos paso a paso cómo crearlo gratis.
 */

export const HGW_OFFICES: HGWOffice[] = [
  // --- PANAMÁ ---
  {
    id: 'off-pa-panama',
    countryCode: 'PA',
    countryName: 'Panamá',
    city: 'Ciudad de Panamá',
    name: 'HGW – Sede Central Panamá',
    address: 'Avenida Porras, Plaza Royal Blue, Local No. 6, Corregimiento de San Francisco, Ciudad de Panamá, Panamá',
    phone: '+507 392 8415',
    phones: ['+507 392 8415', '+507 6778-8375'],
    whatsapp: '+50767788375',
    email: 'info@negociohgw.com',
    openingHours: 'Lunes a Viernes: 09:00am a 18:00pm | Sábados: 09:00am a 13:00pm | Domingo: Cerrado',
    image: getDriveUrl(HGW_DRIVE_ASSETS.officePanama),
    type: 'Sede Central Regional',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Servicio al Cliente Registrado',
      'Facturación',
      'Compras Directas',
      'Recepción de Pedidos',
      'Despachos y Entregas',
      'Envíos Nacionales (3 a 6 días)'
    ],
    notes: 'Al acudir o comunicarte a la oficina, debes presentar tu número de usuario. Si no lo tienes, escríbenos y con gusto te enseñamos a crearlo.'
  },

  // --- PERÚ ---
  {
    id: 'off-pe-lima',
    countryCode: 'PE',
    countryName: 'Perú',
    city: 'Lima',
    name: 'HGW – Lima Miraflores',
    address: 'Av. Arequipa 4446, Miraflores, Lima, Perú',
    phone: '+51 972 014 926',
    phones: ['+51 972 014 926', '+51 967 678 797'],
    whatsapp: '+51972014926',
    openingHours: 'Lunes a Viernes: 09:00am a 6:00pm (Refrigerio 1pm a 2pm) | Sábados: 09:00am a 1:00pm',
    image: getDriveUrl(HGW_DRIVE_ASSETS.officeLimaPeru),
    type: 'Sede Corporativa Nacional',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Servicio al Cliente Registrado',
      'Facturación',
      'Compras',
      'Recepción de Pedidos',
      'Despachos y Entregas',
      'Envíos Nacionales'
    ],
    notes: 'Al escribir a la oficina debes dar tu número de usuario. Si no lo tienes, escríbenos para enseñarte a crearlo.'
  },
  {
    id: 'off-pe-arequipa',
    countryCode: 'PE',
    countryName: 'Perú',
    city: 'Arequipa',
    name: 'HGW – Arequipa',
    address: 'Urb. León XIII Mz. H Lt. 05, Arequipa, Perú',
    phone: '+51 913 622 247',
    phones: ['+51 913 622 247'],
    whatsapp: '+51913622247',
    openingHours: 'Lunes a Viernes: 09:00am a 6:00pm (Refrigerio 1pm a 2pm) | Sábados: 09:00am a 1:00pm',
    image: getDriveUrl(HGW_DRIVE_ASSETS.officeArequipaPeru),
    type: 'Sede Oficial',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Servicio al Cliente Registrado',
      'Facturación',
      'Compras',
      'Recepción de Pedidos',
      'Despachos y Entregas'
    ]
  },
  {
    id: 'off-pe-huancayo',
    countryCode: 'PE',
    countryName: 'Perú',
    city: 'Huancayo',
    name: 'HGW – Huancayo',
    address: 'Jr. Cusco N. 155, Huancayo, Junín, Perú',
    phone: '+51 913 661 118',
    phones: ['+51 913 661 118'],
    whatsapp: '+51913661118',
    openingHours: 'Lunes a Viernes: 10:00am a 7:00pm (Refrigerio 1pm a 2pm) | Sábados: 09:00am a 1:00pm',
    image: getDriveUrl(HGW_DRIVE_ASSETS.officeHuancayoPeru),
    type: 'Sede Oficial',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Servicio al Cliente Registrado',
      'Facturación',
      'Compras',
      'Recepción de Pedidos',
      'Despachos y Entregas'
    ]
  },
  {
    id: 'off-pe-jaen',
    countryCode: 'PE',
    countryName: 'Perú',
    city: 'Jaén',
    name: 'HGW – Jaén, Cajamarca',
    address: 'Ca. Pardo Miguel N.369, Jaén, Cajamarca, Perú',
    phone: '+51 952 400 705',
    phones: ['+51 952 400 705'],
    whatsapp: '+51952400705',
    openingHours: 'Lunes a Viernes: 09:00am a 6:00pm (Refrigerio 1pm a 2pm) | Sábados: 09:00am a 1:00pm',
    image: getDriveUrl(HGW_DRIVE_ASSETS.officeJaenPeru),
    type: 'Sede Oficial',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Servicio al Cliente Registrado',
      'Facturación',
      'Compras',
      'Recepción de Pedidos',
      'Despachos y Entregas'
    ]
  },
  {
    id: 'off-pe-tacna',
    countryCode: 'PE',
    countryName: 'Perú',
    city: 'Tacna',
    name: 'HGW – Tacna',
    address: 'Av. Pinto Nº K-14 (1265), Alto de Alianza (Frente a Polvos Rosados), Tacna, Perú',
    phone: '+51 956 383 885',
    phones: ['+51 956 383 885'],
    whatsapp: '+51956383885',
    openingHours: 'Lunes a Viernes: 09:00am a 6:00pm (Refrigerio 1pm a 2pm) | Sábados: 09:00am a 1:00pm',
    image: getDriveUrl(HGW_DRIVE_ASSETS.officeTacnaPeru),
    type: 'Sede Oficial',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Servicio al Cliente Registrado',
      'Facturación',
      'Compras',
      'Recepción de Pedidos',
      'Despachos y Entregas'
    ]
  },

  // --- COLOMBIA ---
  {
    id: 'off-co-bogota-norte',
    countryCode: 'CO',
    countryName: 'Colombia',
    city: 'Bogotá',
    name: 'HGW – Bogotá Norte',
    address: 'Calle 119 #14-42, Barrio Santa Bárbara Central, Bogotá D.C., Colombia',
    phone: '+57 321 221 8855',
    phones: ['+57 321 221 8855', '+57 311 433 8501', '+57 321 221 8805'],
    whatsapp: '+573212218855',
    openingHours: 'Lunes a Viernes: 09:00am a 18:00pm | Sábados: 09:00am a 13:00pm | Domingo y Festivos: Cerrado',
    image: getDriveUrl(HGW_DRIVE_ASSETS.officeColombiaBogotaNorte),
    type: 'Sede Corporativa Nacional',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Servicio al Cliente Registrado',
      'Facturación',
      'Compras',
      'Recepción de Pedidos',
      'Despachos y Entregas',
      'Envíos Nacionales'
    ],
    notes: 'Al escribir a la oficina debes dar tu número de usuario. Si no lo tienes, escríbenos para enseñarte a crearlo.'
  },
  {
    id: 'off-co-bogota-sur',
    countryCode: 'CO',
    countryName: 'Colombia',
    city: 'Bogotá',
    name: 'HGW – Bogotá Sur',
    address: 'Sector Sur / Centro Comercial y de Distribución Autorizado, Bogotá D.C., Colombia',
    phone: '+57 321 221 8855',
    phones: ['+57 321 221 8855', '+57 321 221 7498'],
    whatsapp: '+573212218855',
    openingHours: 'Lunes a Viernes: 09:00am a 18:00pm | Sábados: 09:00am a 13:00pm',
    image: getDriveUrl(HGW_DRIVE_ASSETS.officeColombiaBogotaSur),
    type: 'Sede Oficial',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Servicio al Cliente Registrado',
      'Facturación',
      'Compras',
      'Recepción de Pedidos',
      'Despachos y Entregas'
    ]
  },
  {
    id: 'off-co-medellin',
    countryCode: 'CO',
    countryName: 'Colombia',
    city: 'Medellín',
    name: 'HGW – Medellín',
    address: 'Carrera 43, 25 A 233, Lomas de San Julián, El Poblado, Medellín, Antioquia, Colombia',
    phone: '+57 321 221 8855',
    phones: ['+57 321 221 8855', '+57 311 434 2391', '+57 311 434 3563'],
    whatsapp: '+573212218855',
    openingHours: 'Lunes a Viernes: 09:00am a 18:00pm | Sábados: 09:00am a 13:00pm | Domingo y Festivos: Cerrado',
    image: getDriveUrl(HGW_DRIVE_ASSETS.officeColombiaMedellin),
    type: 'Sede Oficial',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Servicio al Cliente Registrado',
      'Facturación',
      'Compras',
      'Recepción de Pedidos',
      'Despachos y Entregas'
    ]
  },
  {
    id: 'off-co-cali',
    countryCode: 'CO',
    countryName: 'Colombia',
    city: 'Cali',
    name: 'HGW – Cali',
    address: 'Av. 8 Norte 17-26, Barrio Granada, Cali, Valle del Cauca, Colombia',
    phone: '+57 321 221 8855',
    phones: ['+57 321 221 8855', '+57 314 291 2647'],
    whatsapp: '+573212218855',
    openingHours: 'Lunes a Viernes: 09:00am a 18:00pm | Sábados: 09:00am a 13:00pm | Domingo y Festivos: Cerrado',
    image: getDriveUrl(HGW_DRIVE_ASSETS.officeColombiaCali),
    type: 'Sede Oficial',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Servicio al Cliente Registrado',
      'Facturación',
      'Compras',
      'Recepción de Pedidos',
      'Despachos y Entregas'
    ]
  },
  {
    id: 'off-co-yopal',
    countryCode: 'CO',
    countryName: 'Colombia',
    city: 'Yopal',
    name: 'HGW – Yopal',
    address: 'Calle 21 #19a – 29, Barrio Gabán, Yopal, Casanare, Colombia',
    phone: '+57 314 291 6428',
    phones: ['+57 314 291 6428', '+57 314 291 8958', '+57 321 221 8855'],
    whatsapp: '+573142916428',
    openingHours: 'Lunes a Viernes: 09:00am a 18:00pm | Sábados: 09:00am a 13:00pm | Domingo y Festivos: Cerrado',
    image: getDriveUrl(HGW_DRIVE_ASSETS.officeColombiaYopal),
    type: 'Sede Oficial',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Servicio al Cliente Registrado',
      'Facturación',
      'Compras',
      'Recepción de Pedidos',
      'Despachos y Entregas'
    ]
  },

  // --- BOLIVIA ---
  {
    id: 'off-bo-lapaz',
    countryCode: 'BO',
    countryName: 'Bolivia',
    city: 'La Paz',
    name: 'HGW – La Paz',
    address: 'Calle 23, Eduardo Diez de Medina No. 105, Ed. Torre TITANIUM, Oficina 101, Calacoto, La Paz, Bolivia',
    phone: '+591 601 30676',
    phones: ['+591 601 30676'],
    whatsapp: '+59160130676',
    openingHours: 'Lunes a Viernes: 09:00am a 17:30pm | Sábados: Cerrado | Domingo: Cerrado',
    image: getDriveUrl(HGW_DRIVE_ASSETS.officeBoliviaDirLaPaz),
    type: 'Sede Corporativa Nacional',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Servicio al Cliente Registrado',
      'Facturación',
      'Compras',
      'Recepción de Pedidos',
      'Despachos y Entregas'
    ],
    notes: 'Al escribir a la oficina debes dar tu número de usuario. Si no lo tienes, escríbenos para enseñarte a crearlo.'
  },
  {
    id: 'off-bo-santacruz',
    countryCode: 'BO',
    countryName: 'Bolivia',
    city: 'Santa Cruz de la Sierra',
    name: 'HGW – Santa Cruz',
    address: 'Av. Irala N.615 (a dos cuadras y media de la Av. Cañoto), Santa Cruz de la Sierra, Bolivia',
    phone: '+591 720 30346',
    phones: ['+591 720 30346'],
    whatsapp: '+59172030346',
    openingHours: 'Lunes a Viernes: 09:00am a 17:30pm | Sábados: 09:00am a 12:00pm | Domingo: Cerrado',
    image: getDriveUrl(HGW_DRIVE_ASSETS.officeBoliviaDir2SantaCruz),
    type: 'Sede Oficial',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Servicio al Cliente Registrado',
      'Facturación',
      'Compras',
      'Recepción de Pedidos',
      'Despachos y Entregas'
    ]
  },
  {
    id: 'off-bo-cochabamba',
    countryCode: 'BO',
    countryName: 'Bolivia',
    city: 'Cochabamba',
    name: 'HGW – Cochabamba',
    address: 'Calle 25 de Mayo entre Mayor Rocha y Ecuador #0375, Piso 2 Oficina 4, Cochabamba, Bolivia',
    phone: '+591 720 55536',
    phones: ['+591 720 55536'],
    whatsapp: '+59172055536',
    openingHours: 'Lunes a Viernes: 09:00am a 17:30pm | Sábados: 09:00am a 12:00pm | Domingo: Cerrado',
    image: getDriveUrl(HGW_DRIVE_ASSETS.officeCochabambaBolivia),
    type: 'Sede Oficial',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Servicio al Cliente Registrado',
      'Facturación',
      'Compras',
      'Recepción de Pedidos',
      'Despachos y Entregas'
    ]
  },
  {
    id: 'off-bo-elalto',
    countryCode: 'BO',
    countryName: 'Bolivia',
    city: 'El Alto',
    name: 'HGW – El Alto',
    address: 'Zona 12 de Octubre, calle 1, esquina Avenida Franco Valle, diagonal a la Plaza del Lustrabotas, El Alto, Bolivia',
    phone: '+591 712 31091',
    phones: ['+591 712 31091'],
    whatsapp: '+59171231091',
    openingHours: 'Lunes a Viernes: 09:00am a 17:30pm | Sábados: 09:00am a 12:00pm | Domingo: Cerrado',
    image: getDriveUrl(HGW_DRIVE_ASSETS.officeBoliviaDir3ElAlto),
    type: 'Sede Oficial',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Servicio al Cliente Registrado',
      'Facturación',
      'Compras',
      'Recepción de Pedidos',
      'Despachos y Entregas'
    ]
  },
  {
    id: 'off-bo-oruro',
    countryCode: 'BO',
    countryName: 'Bolivia',
    city: 'Oruro',
    name: 'HGW – Oruro',
    address: 'Av. Brasil #100, Zona Central, entre Calle Bolívar y Sucre, Oruro, Bolivia',
    phone: '+591 682 12255',
    phones: ['+591 682 12255'],
    whatsapp: '+59168212255',
    openingHours: 'Lunes a Viernes: 09:00am a 17:30pm | Sábados: 09:00am a 12:00pm | Domingo: Cerrado',
    image: getDriveUrl(HGW_DRIVE_ASSETS.officeBoliviaDir4Oruro),
    type: 'Sede Oficial',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Servicio al Cliente Registrado',
      'Facturación',
      'Compras',
      'Recepción de Pedidos',
      'Despachos y Entregas'
    ]
  },
  {
    id: 'off-bo-potosi',
    countryCode: 'BO',
    countryName: 'Bolivia',
    city: 'Potosí',
    name: 'HGW – Potosí',
    address: 'Av. Challanta, Edificio Mega Mall, Piso 2, entre Calles Boquerón y Smith, Potosí, Bolivia',
    phone: '+591 682 12255',
    phones: ['+591 682 12255'],
    whatsapp: '+59168212255',
    openingHours: 'Lunes a Viernes: 09:00am a 17:30pm | Sábados: 09:00am a 12:00pm | Domingo: Cerrado',
    image: getDriveUrl(HGW_DRIVE_ASSETS.officeBoliviaDir5Potosi),
    type: 'Sede Oficial',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Servicio al Cliente Registrado',
      'Facturación',
      'Compras',
      'Recepción de Pedidos',
      'Despachos y Entregas'
    ]
  },
  {
    id: 'off-bo-sucre',
    countryCode: 'BO',
    countryName: 'Bolivia',
    city: 'Sucre',
    name: 'HGW – Sucre',
    address: 'Av. Hernando Siles #713, Centro Comercial “Roacaf”, Piso 2, Oficinas 18 y 19, Sucre, Bolivia',
    phone: '+591 643 21961',
    phones: ['+591 643 21961'],
    whatsapp: '+59164321961',
    openingHours: 'Lunes a Viernes: 09:00am a 17:30pm | Sábados: 09:00am a 12:00pm | Domingo: Cerrado',
    image: getDriveUrl(HGW_DRIVE_ASSETS.officeBoliviaDir6Sucre),
    type: 'Sede Oficial',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Servicio al Cliente Registrado',
      'Facturación',
      'Compras',
      'Recepción de Pedidos',
      'Despachos y Entregas'
    ]
  },
  {
    id: 'off-bo-ivirgarzama',
    countryCode: 'BO',
    countryName: 'Bolivia',
    city: 'Ivirgarzama',
    name: 'HGW – Ivirgarzama',
    address: 'Calle Ecología y Av. Mortenson, Frente a la Plaza Principal, Barrio Central, Ivirgarzama, Cochabamba, Bolivia',
    phone: '+591 739 80259',
    phones: ['+591 739 80259'],
    whatsapp: '+59173980259',
    openingHours: 'Lunes a Viernes: 09:00am a 17:30pm | Sábados: 09:00am a 12:00pm | Domingo: Cerrado',
    image: getDriveUrl(HGW_DRIVE_ASSETS.officeBoliviaDir7Ivirgarzama),
    type: 'Sede Oficial',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Servicio al Cliente Registrado',
      'Facturación',
      'Compras',
      'Recepción de Pedidos',
      'Despachos y Entregas'
    ]
  },
  {
    id: 'off-bo-tarija',
    countryCode: 'BO',
    countryName: 'Bolivia',
    city: 'Tarija',
    name: 'HGW – Tarija',
    address: 'Zona Central, Centro Autorizado de Atención HGW, Tarija, Bolivia',
    phone: '+591 700 00000',
    phones: ['+591 700 00000', '+591 601 30676'],
    whatsapp: '+59160130676',
    openingHours: 'Lunes a Viernes: 09:00am a 17:30pm | Sábados: 09:00am a 12:00pm',
    image: getDriveUrl(HGW_DRIVE_ASSETS.officeBoliviaDir8Tarija),
    type: 'Sede Oficial',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Servicio al Cliente Registrado',
      'Facturación',
      'Compras',
      'Recepción de Pedidos',
      'Despachos y Entregas'
    ]
  },
  {
    id: 'off-bo-trinidad',
    countryCode: 'BO',
    countryName: 'Bolivia',
    city: 'Trinidad / Beni',
    name: 'HGW – Trinidad & Región',
    address: 'Centro Autorizado de Distribución HGW, Trinidad, Beni, Bolivia',
    phone: '+591 720 30346',
    phones: ['+591 720 30346'],
    whatsapp: '+59172030346',
    openingHours: 'Lunes a Viernes: 09:00am a 17:30pm | Sábados: 09:00am a 12:00pm',
    image: getDriveUrl(HGW_DRIVE_ASSETS.officeBoliviaDir9Trinidad),
    type: 'Sede Oficial',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Servicio al Cliente Registrado',
      'Facturación',
      'Compras',
      'Recepción de Pedidos',
      'Despachos y Entregas'
    ]
  },

  // --- ECUADOR ---
  {
    id: 'off-ec-quito',
    countryCode: 'EC',
    countryName: 'Ecuador',
    city: 'Quito',
    name: 'HGW – Quito',
    address: 'Av. 6 de Diciembre N25-96 y Pasaje Batallas, Quito, Pichincha, Ecuador',
    phone: '+593 098 589 1669',
    phones: ['+593 098 589 1669'],
    whatsapp: '+5930985891669',
    openingHours: 'Lunes a Viernes: 09:00am a 17:30pm | Sábados: 10:00am a 14:00pm | Domingo: Cerrado',
    image: getDriveUrl(HGW_DRIVE_ASSETS.officeEcuadorQuito),
    type: 'Sede Corporativa Nacional',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Servicio al Cliente Registrado',
      'Facturación',
      'Compras',
      'Recepción de Pedidos',
      'Despachos y Entregas'
    ],
    notes: 'Al escribir a la oficina debes dar tu número de usuario. Si no lo tienes, escríbenos para enseñarte a crearlo.'
  },
  {
    id: 'off-ec-guayaquil',
    countryCode: 'EC',
    countryName: 'Ecuador',
    city: 'Guayaquil',
    name: 'HGW – Guayaquil',
    address: 'Luis Urdaneta 1100, entre Av. Quito y Av. Machala, Guayaquil, Guayas, Ecuador',
    phone: '+593 980 609 976',
    phones: ['+593 980 609 976'],
    whatsapp: '+593980609976',
    openingHours: 'Lunes a Viernes: 09:00am a 17:30pm | Sábados: 10:00am a 14:00pm | Domingo: Cerrado',
    image: getDriveUrl(HGW_DRIVE_ASSETS.officeEcuadorGuayaquil),
    type: 'Sede Oficial',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Servicio al Cliente Registrado',
      'Facturación',
      'Compras',
      'Recepción de Pedidos',
      'Despachos y Entregas'
    ]
  },
  {
    id: 'off-ec-machala',
    countryCode: 'EC',
    countryName: 'Ecuador',
    city: 'Machala',
    name: 'HGW – Machala',
    address: 'Rocafuerte entre Napoleón Mera y 23 de Abril, Machala, El Oro, Ecuador',
    phone: '+593 992 382 749',
    phones: ['+593 992 382 749'],
    whatsapp: '+593992382749',
    openingHours: 'Lunes a Viernes: 09:00am a 13:00pm / 13:30pm a 17:30pm | Sábados: 10:00am a 14:00pm | Domingo: Cerrado',
    image: getDriveUrl(HGW_DRIVE_ASSETS.officeEcuadorMachala),
    type: 'Sede Oficial',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Servicio al Cliente Registrado',
      'Facturación',
      'Compras',
      'Recepción de Pedidos',
      'Despachos y Entregas'
    ]
  },
  {
    id: 'off-ec-quevedo',
    countryCode: 'EC',
    countryName: 'Ecuador',
    city: 'Quevedo',
    name: 'HGW – Quevedo',
    address: 'Calle Bolívar y Décima Tercera, Edificio Auhing, Quevedo, Los Ríos, Ecuador',
    phone: '+593 997 557 856',
    phones: ['+593 997 557 856'],
    whatsapp: '+593997557856',
    openingHours: 'Lunes a Viernes: 09:00am a 13:00pm / 14:00pm a 17:00pm | Sábados: 10:00am a 14:00pm | Domingo: Cerrado',
    image: getDriveUrl(HGW_DRIVE_ASSETS.officeEcuadorQuevedo),
    type: 'Sede Oficial',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Servicio al Cliente Registrado',
      'Facturación',
      'Compras',
      'Recepción de Pedidos',
      'Despachos y Entregas'
    ]
  },

  // --- MÉXICO ---
  {
    id: 'off-mx-cdmx',
    countryCode: 'MX',
    countryName: 'México',
    city: 'Ciudad de México',
    name: 'HGW – CDMX',
    address: 'Av. Insurgentes Sur Número Ext. 1216, Número Int. 408 y 409, Col. del Valle Centro, C.P. 03100, Benito Juárez, Ciudad de México, México',
    phone: '+52 55 5064 6959',
    phones: ['+52 55 5064 6959'],
    whatsapp: '+525550646959',
    openingHours: 'Lunes a Viernes: 09:00am a 18:00pm | Sábados: 09:00am a 12:00pm | Domingo: Cerrado',
    image: getDriveUrl(HGW_DRIVE_ASSETS.officeMexicoCdmx),
    type: 'Sede Corporativa Nacional',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Servicio al Cliente Registrado',
      'Facturación',
      'Compras',
      'Recepción de Pedidos',
      'Despachos y Entregas',
      'Envíos Nacionales'
    ],
    notes: 'Al escribir a la oficina debes dar tu número de usuario. Si no lo tienes, escríbenos para enseñarte a crearlo.'
  },

  // --- GUATEMALA ---
  {
    id: 'off-gt-guatemala',
    countryCode: 'GT',
    countryName: 'Guatemala',
    city: 'Ciudad de Guatemala',
    name: 'HGW – Guatemala',
    address: 'Calzada Raúl Aguilar Batres 34-52, Colonia Las Charcas, Local 1-17, Planta alta, Centro Comercial Galerías del Sur, Zona 11, Ciudad de Guatemala, Guatemala',
    phone: '+502 4847 9068',
    phones: ['+502 4847 9068', '+502 2311 9820'],
    whatsapp: '+50248479068',
    openingHours: 'Lunes a Domingo: 09:00am a 18:00pm (Horario Continuo)',
    image: getDriveUrl(HGW_DRIVE_ASSETS.officeGuatemala),
    type: 'Sede Oficial',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Servicio al Cliente Registrado',
      'Facturación',
      'Compras',
      'Recepción de Pedidos',
      'Despachos y Entregas'
    ],
    notes: 'Al escribir a la oficina debes dar tu número de usuario. Si no lo tienes, escríbenos para enseñarte a crearlo.'
  },

  // --- EL SALVADOR ---
  {
    id: 'off-sv-sansalvador',
    countryCode: 'SV',
    countryName: 'El Salvador',
    city: 'San Salvador',
    name: 'HGW – San Salvador',
    address: 'Calle Padres Aguilar #2, Local No. 3 entre 85 y 87 Av. Sur, Colonia Escalón, San Salvador, El Salvador',
    phone: '+503 2556 8699',
    phones: ['+503 2556 8699', '+503 7573 7265'],
    whatsapp: '+50375737265',
    openingHours: 'Lunes a Viernes: 09:00am a 17:30pm | Sábados: 09:00am a 13:00pm | Domingo: Cerrado',
    image: getDriveUrl(HGW_DRIVE_ASSETS.officeElSalvadorSanSalvador),
    type: 'Sede Oficial',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Servicio al Cliente Registrado',
      'Facturación',
      'Compras',
      'Recepción de Pedidos',
      'Despachos y Entregas'
    ],
    notes: 'Al escribir a la oficina debes dar tu número de usuario. Si no lo tienes, escríbenos para enseñarte a crearlo.'
  },

  // --- REPÚBLICA DOMINICANA ---
  {
    id: 'off-do-santodomingo',
    countryCode: 'DO',
    countryName: 'República Dominicana',
    city: 'Santo Domingo',
    name: 'HGW – República Dominicana',
    address: 'Av. 27 de Febrero No. 251, casi esquina Abraham Lincoln, Ensanche Naco (entre Claro y Farmacia Los Hidalgos), Santo Domingo, República Dominicana',
    phone: '+1 809 855 7167',
    phones: ['+1 809 855 7167', '+1 809 993 9262', '+57 321 221 8855'],
    whatsapp: '+18098557167',
    openingHours: 'Lunes a Viernes: 09:00am a 18:00pm | Sábados: 09:00am a 13:00pm | Domingo: Cerrado',
    image: getDriveUrl(HGW_DRIVE_ASSETS.officeRepublicaDominicana),
    type: 'Sede Oficial',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Servicio al Cliente Registrado',
      'Facturación',
      'Compras',
      'Recepción de Pedidos',
      'Despachos y Entregas'
    ],
    notes: 'Al escribir a la oficina debes dar tu número de usuario. Si no lo tienes, escríbenos para enseñarte a crearlo.'
  },

  // --- CHILE ---
  {
    id: 'off-cl-santiago',
    countryCode: 'CL',
    countryName: 'Chile',
    city: 'Santiago de Chile',
    name: 'HGW – Santiago',
    address: 'Andrés Bello #2325, Local 1, Providencia, Región Metropolitana, Santiago, Chile',
    phone: '+56 9 4028 7186',
    phones: ['+56 9 4028 7186', '+56 9 4028 7193'],
    whatsapp: '+56940287186',
    openingHours: 'Lunes a Jueves: 09:00am a 13:00pm / 14:00pm a 19:00pm | Viernes: 09:00am a 13:00pm / 14:00pm a 18:00pm | Sábados: 09:00am a 13:00pm | Domingo: Cerrado',
    image: getDriveUrl(HGW_DRIVE_ASSETS.officeChileSantiago),
    type: 'Sede Oficial',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Servicio al Cliente Registrado',
      'Facturación',
      'Compras',
      'Recepción de Pedidos',
      'Despachos y Entregas'
    ],
    notes: 'Al escribir a la oficina debes dar tu número de usuario. Si no lo tienes, escríbenos para enseñarte a crearlo.'
  },

  // --- PARAGUAY ---
  {
    id: 'off-py-asuncion',
    countryCode: 'PY',
    countryName: 'Paraguay',
    city: 'Asunción',
    name: 'HGW – Paraguay',
    address: 'España c/ Zanotti Cavazzoni, Asunción, Paraguay',
    phone: '+595 974 923 077',
    phones: ['+595 974 923 077'],
    whatsapp: '+595974923077',
    openingHours: 'Lunes a Viernes: 09:00am a 18:00pm | Sábados: 08:30am a 12:00pm | Domingo: Cerrado',
    image: getDriveUrl(HGW_DRIVE_ASSETS.officeParaguayAsuncion),
    type: 'Sede Oficial',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Servicio al Cliente Registrado',
      'Facturación',
      'Compras',
      'Recepción de Pedidos',
      'Despachos y Entregas'
    ],
    notes: 'Al escribir a la oficina debes dar tu número de usuario. Si no lo tienes, escríbenos para enseñarte a crearlo.'
  },

  // --- ESPAÑA ---
  {
    id: 'off-es-barcelona',
    countryCode: 'ES',
    countryName: 'España',
    city: 'Barcelona',
    name: 'HGW – Barcelona',
    address: 'Calle Joan Guell 144, BJ 1, Barcelona, 08028, Cataluña, España',
    phone: '+34 623 465 013',
    phones: ['+34 623 465 013'],
    whatsapp: '+34623465013',
    openingHours: 'Lunes a Viernes: 09:30h a 13:00h / 15:00h a 19:00h | Sábados: 10:00h a 14:00h | Domingo: Cerrado',
    image: getDriveUrl(HGW_DRIVE_ASSETS.officeBarcelonaEspana),
    type: 'Sede Oficial Europa',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Servicio al Cliente Registrado',
      'Facturación',
      'Compras',
      'Recepción de Pedidos',
      'Despachos y Entregas',
      'Envíos Nacionales'
    ],
    notes: 'Al escribir a la oficina debes dar tu número de usuario. Si no lo tienes, escríbenos para enseñarte a crearlo.'
  },

  // --- COSTA RICA ---
  {
    id: 'off-cr-sanjose',
    countryCode: 'CR',
    countryName: 'Costa Rica',
    city: 'San José',
    name: 'HGW – Costa Rica',
    address: 'Centro de Atención y Distribución Autorizada para Socios y Clientes, San José, Costa Rica',
    phone: '+507 6778-8375',
    phones: ['+507 6778-8375'],
    whatsapp: '+50767788375',
    openingHours: 'Lunes a Viernes: 09:00am a 18:00pm | Sábados: 09:00am a 13:00pm',
    image: getDriveUrl(HGW_DRIVE_ASSETS.officePanama),
    type: 'Punto de Atención y Despacho',
    isOfficial: true,
    status: 'Operativa',
    services: [
      'Servicio al Cliente Registrado',
      'Coordinación de Pedidos SINPE',
      'Asesoría de Afiliación',
      'Despachos y Entregas GAM'
    ],
    notes: 'Al escribir a la oficina debes dar tu número de usuario. Si no lo tienes, escríbenos para enseñarte a crearlo.'
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
