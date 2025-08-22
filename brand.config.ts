// Importaciones de todos los datos centralizados
import { maquinarias, equipmentStats, catalogUrl, technicalDocsUrl } from './content/maquinarias';
import { instalaciones, installationsStats, logisticsNetwork } from './content/instalaciones';  
import { ceo, directiva, gerencias, orgChart } from './content/equipo';

const brandConfig = {
  company: {
    name: "Metalls del Camp",
    tagline: "Gestión integral de residuos industriales",
    description: "Especialistas en gestión de residuos peligrosos y no peligrosos. Soluciones integrales para industria con más de 17 años de experiencia.",
    email: "info@metallsdelcampslu.es",
    phone: "+34 961 234 567",
    address: {
      street: "Carrer Serra d'Espadà, 6",
      city: "Aldaia",
      postal: "46960",
      country: "España",
      province: "Valencia"
    },
    business: {
      founded: "2008",
      sector: "Gestión de residuos industriales",
      certifications: [
        "ISO 14001:2015",
        "ISO 9001:2015", 
        "ISO 45001:2018",
        "Gestor autorizado CAT-T-GP-08-456",
        "Transportista autorizado T-456-CAT"
      ],
      employees: "19",
      coverage: "Comunidad Valenciana y Castilla-La Mancha",
      locations: "Aldaia (Valencia) y El Romeral (Toledo)"
    },
    social: {
      linkedin: "https://linkedin.com/company/metalls-del-camp",
      facebook: "https://facebook.com/metallsdelcamp",
      twitter: "@metallsdelcamp"
    }
  },

  // === EQUIPAMIENTO Y MAQUINARIA ===
  equipment: {
    machinery: maquinarias,
    stats: equipmentStats,
    catalog: catalogUrl,
    technicalDocs: technicalDocsUrl,
    totalInvestment: "€630,000",
    maintenanceProgram: "Preventivo 24/7",
    totalEquipment: 29,
    categories: ["Trituradoras", "Prensas", "Separadores", "Equipos de Transporte", "Equipos Auxiliares"]
  },

  // === INSTALACIONES Y INFRAESTRUCTURA ===
  facilities: {
    installations: instalaciones,
    stats: installationsStats,
    logistics: logisticsNetwork,
    totalCapacity: "125,000 t/año",
    networkCoverage: "4 plantas estratégicas",
    mainLocations: ["El Romeral (Toledo)", "Aldaia (Valencia)", "Coscollar (Valencia)", "Burgos (Castilla y León)"],
    totalArea: "90,000 m²",
    coveredArea: "45,000 m²"
  },

  // === EQUIPO HUMANO ===
  team: {
    leadership: {
      ceo,
      executives: directiva
    },
    management: gerencias,
    organizationChart: orgChart,
    totalEmployees: 19,
    experienceYears: 251,
    structure: {
      management: 5,
      regional: 6, 
      technical: 3,
      operations: 5
    }
  },

  // === CAPACIDADES OPERATIVAS ===
  operations: {
    processing: {
      wasteTypes: [
        "Residuos peligrosos",
        "Metales ferrosos", 
        "Metales no ferrosos",
        "RAEE (Residuos de Aparatos Eléctricos y Electrónicos)",
        "Aceites usados",
        "Residuos sanitarios",
        "Chatarra electrónica",
        "Baterías y acumuladores",
        "Filtros industriales",
        "Residuos de construcción",
        "Envases contaminados"
      ],
      totalCapacity: "125,000 t/año",
      facilities: 4,
      workingHours: "L-V: 8:30-19:00",
      responseTime: "24h",
      certifiedProcesses: "11 tipos de residuos"
    },
    technology: {
      automation: "Clasificación automática con IA",
      analytics: "Laboratorio propio + análisis XRF",
      digitalization: "Trazabilidad IoT completa",
      maintenance: "Predictivo con sensores",
      equipment: "29 máquinas especializadas",
      innovation: "I+D+i en economía circular"
    },
    logistics: {
      fleetSize: "12 vehículos ADR",
      coverage: "Comunidad Valenciana y Castilla-La Mancha",
      responseTime: "24h",
      certifications: ["ADR", "OEA", "SQAS"],
      routes: "Optimización con IA",
      tracking: "Seguimiento GPS en tiempo real"
    }
  },

  theme: {
    colors: {
      primary: {
        50: "#FCCFD9",
        100: "#FCCFD9", 
        200: "#FCCFD9",
        300: "#EE6B88",
        400: "#EE6B88",
        500: "#DF0A38",
        600: "#DF0A38",
        700: "#DF0A38",
        800: "#260007",
        900: "#260007",
        950: "#260007"
      },
      secondary: {
        50: "#D9FCE5",
        100: "#D9FCE5",
        200: "#9BF6B9",
        300: "#9BF6B9",
        400: "#9BF6B9",
        500: "#007C28",
        600: "#007C28",
        700: "#007C28",
        800: "#00260C",
        900: "#00260C",
        950: "#00260C"
      },
      tertiary: {
        50: "#FFFED9",
        100: "#FFFED9",
        200: "#F8F69A",
        300: "#F8F69A",
        400: "#F7F33A",
        500: "#F7F33A",
        600: "#F7F33A",
        700: "#F7F33A",
        800: "#2B2A01",
        900: "#2B2A01",
        950: "#2B2A01"
      },
      accent: {
        50: "#F9E4FF",
        100: "#F9E4FF",
        200: "#E69FFD",
        300: "#E69FFD",
        400: "#A65FBC",
        500: "#A65FBC",
        600: "#A65FBC",
        700: "#A65FBC",
        800: "#22002B",
        900: "#22002B",
        950: "#22002B"
      },
      gray: {
        50: "#FFFFFF",
        100: "#DBDBDB",
        200: "#DBDBDB",
        300: "#999999",
        400: "#999999",
        500: "#666666",
        600: "#666666",
        700: "#333333",
        800: "#333333",
        900: "#000000",
        950: "#000000"
      }
    },
    typography: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace']
      }
    }
  },

  seo: {
    defaultTitle: "Metalls del Camp - Gestión Integral de Residuos Industriales",
    titleTemplate: "%s | Metalls del Camp",
    description: "Especialistas en gestión de residuos peligrosos y no peligrosos. 4 instalaciones en Valencia y Toledo, 19 profesionales, +17 años de experiencia.",
    keywords: [
      "gestión residuos industriales",
      "residuos peligrosos",
      "reciclaje metales",
      "economía circular",
      "valencia",
      "toledo",
      "aldaia",
      "el romeral",
      "ISO 14001",
      "RAEE",
      "chatarra"
    ],
    openGraph: {
      type: "website",
      locale: "es_ES",
      siteName: "Metalls del Camp",
      images: [
        {
          url: "/brand/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Metalls del Camp - Gestión Integral de Residuos Industriales"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      site: "@metallsdelcamp"
    }
  }
} as const;

// === RESUMEN EJECUTIVO ===
export const executiveSummary = {
  company: "Metalls del Camp",
  since: 2008,
  business: "Gestión integral de residuos industriales",
  
  infrastructure: {
    facilities: 4,
    totalArea: "90,000 m²",
    coveredArea: "45,000 m²",
    capacity: "125,000 t/año",
    investment: "€630,000 en equipamiento",
    locations: ["El Romeral (Toledo)", "Aldaia (Valencia)", "Coscollar (Valencia)", "Burgos (Castilla y León)"]
  },
  
  humanResources: {
    employees: 19,
    experience: "251 años acumulados",
    management: "5 directivos",
    regional: "6 gerentes regionales",
    technical: "3 técnicos especializados",
    operations: "5 gerentes operaciones"
  },
  
  technology: {
    equipment: 29,
    categories: 5,
    automation: "IA + IoT + Análisis predictivo",
    certifications: ["ISO 14001:2015", "ISO 9001:2015", "ISO 45001:2018"],
    specialization: "Análisis XRF + laboratorio propio",
    innovation: "Centro I+D+i propio"
  },
  
  coverage: {
    regions: ["Comunidad Valenciana", "Castilla-La Mancha"],
    mainCities: ["Valencia", "Toledo", "Aldaia", "El Romeral"],
    logistics: "Optimización con IA",
    responseTime: "24h",
    fleet: "12 vehículos ADR",
    wasteTypes: 11
  },

  performance: {
    yearsExperience: 17,
    wasteProcessed: "125,000 t/año",
    certifiedProcesses: 11,
    sustainabilityFocus: "Economía circular",
    compliance: "100% normativa vigente"
  }
};

export default brandConfig;
export type BrandConfig = typeof brandConfig;
