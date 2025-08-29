export interface Instalacion {
  slug: string;
  title: string;
  desc: string;
  image: string;
  videoId?: string; // ID del video de YouTube
  location: {
    address: string;
    city: string;
    province: string;
    postalCode: string;
    coordinates: { lat: number; lng: number };
  };
  specifications: {
    area: string;
    coveredArea: string;
    capacity: string;
    operationalSince: string;
    employees: number;
    workingHours: string;
    specializations: string[];
  };
  equipment: string[];
  certifications: string[];
  environmentalAuthorizations?: string[]; // Nueva propiedad para autorizaciones medioambientales
  processes: string[];
  contact: {
    phone: string;
    email: string;
    manager: string;
  };
}

export const instalaciones: Instalacion[] = [
  {
    slug: "burgos",
    title: "Próximamente Nueva Instalación",
    desc: "Centro especializado en gestión de residuos ubicado estratégicamente en el norte de España para dar cobertura regional.",
    image: "/brand/instalaciones/inst-burgos.jpg",
    location: {
      address: "Polígono Industrial Villímar, Parcela 15",
      city: "Burgos",
      province: "Burgos",
      postalCode: "09007",
      coordinates: { lat: 42.3601, lng: -3.6967 }
    },
    specifications: {
      area: "18,000 m²",
      coveredArea: "8,000 m²",
      capacity: "25,000 t/año",
      operationalSince: "2022",
      employees: 4,
      workingHours: "L-V 8:30-19:00",
      specializations: [
        "Gestión de residuos metálicos",
        "Clasificación especializada",
        "Logística norte peninsular",
        "Almacenamiento temporal",
        "Control de calidad"
      ]
    },
    equipment: [
      "Báscula de Precisión BP-40t",
      "Sistema de Clasificación SC-Norte",
      "Grúa Móvil GM-12t",
      "Contenedores Especializados (×12)",
      "Sistema de Control Digital"
    ],
    certifications: [
      "Gestor Autorizado de Residuos",
      "ISO 14001:2015",
      "Autorización Ambiental",
      "Certificado de Calidad",
      "Registro Regional"
    ],
    processes: [
      "Recepción y control",
      "Clasificación por tipos",
      "Almacenamiento temporal",
      "Control de calidad",
      "Expedición regional"
    ],
    contact: {
      phone: "+34 947 234 567",
      email: "burgos@metallsdelcampslu.es",
      manager: "Miguel Fernández"
    }
  },
  {
    slug: "el-romeral",
    title: "Centro El Romeral",
    desc: "Nuestra instalación principal ubicada en El Romeral, Toledo, especializada en la gestión integral de residuos metálicos con tecnología de vanguardia.",
    image: "/brand/instalaciones/inst-1.jpg",
    videoId: "ONXvXOZNVRg", // INSTALACIONES EL ROMERAL
    location: {
      address: "Carretera CM-4013, Km 8.5",
      city: "El Romeral",
      province: "Toledo",
      postalCode: "45640",
      coordinates: { lat: 39.9142, lng: -4.0853 }
    },
    specifications: {
      area: "35,000 m²",
      coveredArea: "15,000 m²",
      capacity: "80,000 t/año",
      operationalSince: "2008",
      employees: 8,
      workingHours: "L-V 8:30-19:00",
      specializations: [
        "Gestión de residuos metálicos",
        "Clasificación y segregación",
        "Tratamiento especializado",
        "Valorización de materiales",
        "Comercialización internacional"
      ]
    },
    equipment: [
      "Cizalla Hidráulica CH-2000",
      "Báscula de Pesaje BP-50t",
      "Grúa Magnética GM-15t",
      "Sistema de Clasificación SC-Pro",
      "Compactador de Metales CM-500"
    ],
    certifications: [
      "Gestor Autorizado de Residuos",
      "ISO 14001:2015",
      "ISO 9001:2015",
      "Autorización Ambiental Integrada",
      "EMAS III",
      "Certificado OEA"
    ],
    processes: [
      "Recepción y control",
      "Pesaje certificado",
      "Clasificación por tipos",
      "Procesamiento mecánico",
      "Control de calidad",
      "Expedición y transporte"
    ],
    contact: {
      phone: "+34 925 456 123",
      email: "elromeral@metallsdelcampslu.es",
      manager: "Carlos Martínez"
    }
  },
  {
    slug: "aldaia",
    title: "Centro Logístico Aldaia",
    desc: "Moderno centro logístico en Aldaia, Valencia, enfocado en la optimización de rutas y distribución eficiente de materiales reciclados.",
    image: "/brand/instalaciones/inst-2.jpg",
    videoId: "KtGwTvzDJU4", // INSTALACIONES ALDAIA ENCREUATS
    location: {
      address: "Polígono Industrial La Costera, Calle 8, Nave 45",
      city: "Aldaia",
      province: "Valencia",
      postalCode: "46960",
      coordinates: { lat: 39.4698, lng: -0.4563 }
    },
    specifications: {
      area: "12,000 m²",
      coveredArea: "8,000 m²",
      capacity: "35,000 t/año",
      operationalSince: "2015",
      employees: 5,
      workingHours: "L-V 8:30-19:00",
      specializations: [
        "Logística y distribución",
        "Almacenamiento temporal",
        "Consolidación de cargas",
        "Gestión documental",
        "Optimización de rutas"
      ]
    },
    equipment: [
      "Sistema de Gestión SG-Log",
      "Báscula de Camiones BC-80t",
      "Carretillas Elevadoras (4 unidades)",
      "Sistema de Trazabilidad RFID",
      "Equipos de Carga y Descarga"
    ],
    certifications: [
      "Operador de Transporte Autorizado",
      "ISO 9001:2015",
      "Certificación de Calidad Logística",
      "Autorización Sanitaria",
      "Registro Mercantil Actualizado"
    ],
    environmentalAuthorizations: [
      "1021/G04/CV - TRATAMIENTO RESIDUOS NO PELIGROSOS"
    ],
    processes: [
      "Recepción de materiales",
      "Almacenamiento clasificado",
      "Gestión de inventarios",
      "Preparación de envíos",
      "Control de calidad",
      "Expedición y seguimiento"
    ],
    contact: {
      phone: "+34 961 234 567",
      email: "aldaia@metallsdelcampslu.es",
      manager: "Ana García"
    }
  },
  {
    slug: "coscollar",
    title: "Centro Coscollar",
    desc: "Instalación de almacenamiento temporal en Coscollar, Aldaia, diseñada para garantizar la trazabilidad y seguridad en el manejo de residuos.",
    image: "/brand/instalaciones/inst-3.jpg",
    videoId: "DtmOxLUw-r0", // INSTALACIONES EL COSCOLLAR
    location: {
      address: "Camino de Coscollar, Parcela 127",
      city: "Aldaia",
      province: "Valencia",
      postalCode: "46960",
      coordinates: { lat: 39.4521, lng: -0.4789 }
    },
    specifications: {
      area: "8,500 m²",
      coveredArea: "3,500 m²",
      capacity: "15,000 t/año",
      operationalSince: "2018",
      employees: 2,
      workingHours: "L-V 8:30-19:00",
      specializations: [
        "Almacenamiento temporal",
        "Segregación inicial",
        "Control de accesos",
        "Sistemas de seguridad",
        "Compromiso medioambiental"
      ]
    },
    equipment: [
      "Sistema de Vigilancia SV-24h",
      "Báscula Digital BD-25t",
      "Contenedores Especializados (×20)",
      "Sistema Anti-incendios",
      "Control de Accesos Biométrico"
    ],
    certifications: [
      "Centro Autorizado",
      "Registro de Pequeños Productores",
      "Certificado de Prevención",
      "Autorización Municipal",
      "Seguro de Responsabilidad Civil"
    ],
    processes: [
      "Recepción de residuos",
      "Gestión logística",
      "Transporte seguro",
      "Destino final responsable"
    ],
    contact: {
      phone: "+34 961 234 569",
      email: "coscollar@metallsdelcampslu.es",
      manager: "Josep Díaz"
    }
  },
  {
    slug: "serra-espada",
    title: "Centro de Serra d'Espadà",
    desc: "Centro especializado en gestión integral de residuos ubicado en la Sierra de Espadán, con múltiples autorizaciones medioambientales para el tratamiento de residuos peligrosos y no peligrosos.",
    image: "/brand/instalaciones/inst-4.jpg",
    videoId: "Vpx_hmx2qPU", // INSTALACIONES SERRA DE ESPADA
    location: {
      address: "Zona Industrial Serra d'Espadà",
      city: "Segorbe",
      province: "Castellón",
      postalCode: "12400",
      coordinates: { lat: 39.8519, lng: -0.4867 }
    },
    specifications: {
      area: "25,000 m²",
      coveredArea: "12,000 m²",
      capacity: "40,000 t/año",
      operationalSince: "2018",
      employees: 8,
      workingHours: "L-V 8:30-19:00",
      specializations: [
        "Almacenamiento residuos peligrosos",
        "Tratamiento residuos no peligrosos",
        "Transporte especializado",
        "Gestión documental",
        "Control medioambiental"
      ]
    },
    equipment: [
      "Báscula Industrial BI-80t",
      "Contenedores Residuos Peligrosos (×20)",
      "Sistema de Tratamiento ST-RP400",
      "Equipos de Seguridad Ambiental",
      "Scanner de clasificación automática"
    ],
    certifications: [
      "Gestor Autorizado de Residuos",
      "ISO 14001:2015",
      "Autorización Ambiental Integrada",
      "EMAS Registro Medioambiental",
      "Certificación OHSAS 18001"
    ],
    environmentalAuthorizations: [
      "157/G02/CV - ALMACENAMIENTO RESIDUOS PELIGROSOS",
      "33383/P02/CV - PEQUEÑO PRODUCTOR RESID.PELIGROSOS",
      "374/G04/CV - TRATAMIENTO RESIDUOS NO PELIGROSOS",
      "3873/P04/CV - PEQUEÑO PRODUCT.RESID.NO PELIGROSOS",
      "79/T01/CV - TRANSPORTISTA RESIDUOS PELIGROSOS",
      "361/T02/CV - TRANSPORTISTA RESID. NO PELIGROSOS"
    ],
    processes: [
      "Recepción y control de residuos",
      "Clasificación especializada",
      "Almacenamiento temporal seguro",
      "Tratamiento residuos no peligrosos",
      "Gestión documental integrada",
      "Transporte especializado"
    ],
    contact: {
      phone: "+34 964 691 234",
      email: "serraespada@metallsdelcampslu.es",
      manager: "Luis Herrera"
    }
  }
];

// Estadísticas generales de las instalaciones
export const installationsStats = {
  totalArea: "98,500 m²",
  totalCapacity: "195,000+ t/año",
  totalEmployees: 25,
  operationalSince: "2008",
  locations: 5,
  certifications: 28,
  provinces: ["Burgos", "Toledo", "Valencia", "Castellón"]
};

// Red logística y cobertura
export const logisticsNetwork = {
  coverage: "Centro, Levante y Mediterráneo de España",
  transportFleet: "15 vehículos especializados",
  responseTime: "24-48h",
  serviceRadius: "600km",
  partnerships: ["Gestores autorizados", "Plantas de reciclaje", "Centros de valorización", "Puertos mediterráneos"]
};

const instalacionesData = { instalaciones, installationsStats, logisticsNetwork };

export default instalacionesData;
