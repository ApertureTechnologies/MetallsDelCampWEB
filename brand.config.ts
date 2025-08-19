// Importaciones de todos los datos centralizados
import { maquinarias, equipmentStats, catalogUrl, technicalDocsUrl } from './content/maquinarias';
import { instalaciones, installationsStats, logisticsNetwork } from './content/instalaciones';  
import { ceo, directiva, gerencias, orgChart } from './content/equipo';

const brandConfig = {
  company: {
    name: "Metalls del Camp",
    tagline: "Gestión integral de residuos industriales",
    description: "Especialistas en gestión de residuos peligrosos y no peligrosos. Soluciones integrales para industria con más de 15 años de experiencia.",
    email: "info@metallsdelcamp.com",
    phone: "+34 977 123 456",
    address: {
      street: "Carrer de la Indústria, 45",
      city: "Valencia",
      postal: "46096",
      country: "España"
    },
    business: {
      founded: "2008",
      sector: "Gestión de residuos industriales",
      certifications: [
        "ISO 14001:2015",
        "Gestor autorizado CAT-T-GP-08-456",
        "Transportista autorizado T-456-CAT"
      ],
      employees: "50+",
      coverage: "Levante, Cataluña y Castilla-La Mancha"
    },
    social: {
      linkedin: "https://linkedin.com/company/metalls-del-camp",
      facebook: "https://facebook.com/metallsdelcamp"
    }
  },

  // === EQUIPAMIENTO Y MAQUINARIA ===
  equipment: {
    machinery: maquinarias,
    stats: equipmentStats,
    catalog: catalogUrl,
    technicalDocs: technicalDocsUrl,
    totalInvestment: "€630,000",
    maintenanceProgram: "Preventivo 24/7"
  },

  // === INSTALACIONES Y INFRAESTRUCTURA ===
  facilities: {
    installations: instalaciones,
    stats: installationsStats,
    logistics: logisticsNetwork,
    totalCapacity: "125,000 t/año",
    networkCoverage: "4 plantas estratégicas"
  },

  // === EQUIPO HUMANO ===
  team: {
    leadership: {
      ceo,
      executives: directiva
    },
    management: gerencias,
    organizationChart: orgChart,
    totalEmployees: 15
  },

  // === CAPACIDADES OPERATIVAS ===
  operations: {
    processing: {
      wasteTypes: ["Residuos peligrosos", "Metales ferrosos", "Metales no ferrosos", "RAEE", "Aceites usados"],
      totalCapacity: "125,000 t/año",
      facilities: 4,
      workingHours: "24/7 en plantas principales"
    },
    technology: {
      automation: "Clasificación automática con IA",
      analytics: "Laboratorio propio + análisis XRF",
      digitalization: "Trazabilidad IoT completa",
      maintenance: "Predictivo con sensores"
    },
    logistics: {
      fleetSize: "12 vehículos ADR",
      coverage: "500km radio",
      responseTime: "24h",
      certifications: ["ADR", "OEA", "SQAS"]
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
    description: "Especialistas en gestión de residuos peligrosos y no peligrosos. 4 instalaciones, 50+ profesionales, 15 años de experiencia en Levante y Cataluña.",
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
    capacity: "125,000 t/año",
    investment: "€630,000 en equipamiento"
  },
  
  humanResources: {
    employees: 50,
    experience: "251 años acumulados",
    management: "19 directivos y mandos intermedios",
    technical: "31 técnicos especializados"
  },
  
  technology: {
    equipment: 12,
    automation: "IA + IoT",
    certifications: ["ISO 14001", "ISO 9001", "ISO 45001"],
    specialization: "Análisis XRF + laboratorio propio"
  },
  
  coverage: {
    regions: ["Valencia", "Castellón", "Barcelona", "Madrid"],
    logistics: "Radio 500km",
    responseTime: "24h",
    fleet: "12 vehículos ADR"
  }
};

export default brandConfig;
export type BrandConfig = typeof brandConfig;
