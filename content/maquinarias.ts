import { Maquinaria } from '../lib/content/types';

// Información detallada de toda la maquinaria y equipamiento de Metalls del Camp
const maquinarias: Maquinaria[] = [
  {
    slug: "trituradora-metales-tm-2000",
    title: "Trituradora de Metales TM-2000",
    price: "€75,000",
    image: "/brand/maq/maq-1.jpg",
    desc: "Trituradora industrial de alta capacidad para procesamiento de metales ferrosos y no ferrosos",
    featured: true,
    specifications: {
      capacity: "2000 kg/h",
      power: "45 kW",
      dimensions: "3.5 x 2.2 x 2.8 m",
      weight: "4500 kg",
      materials: ["Acero al carbono", "Aluminio", "Cobre", "Latón"],
      outputSize: "5-50 mm",
      features: [
        "Sistema de alimentación automática",
        "Separador magnético integrado", 
        "Control PLC con pantalla táctil",
        "Sistema de seguridad certificado",
        "Bajo consumo energético"
      ]
    },
    maintenance: {
      interval: "500 horas",
      type: "Preventivo",
      warranty: "24 meses"
    },
    category: "Trituración"
  },
  {
    slug: "separador-magnetico-sm-1500",
    title: "Separador Magnético SM-1500",
    price: "€32,000",
    image: "/brand/maq/maq-2.jpg",
    desc: "Separador magnético de alta intensidad para clasificación automática de metales ferrosos",
    specifications: {
      capacity: "1500 kg/h",
      power: "15 kW",
      dimensions: "2.8 x 1.5 x 1.2 m",
      weight: "1200 kg",
      materials: ["Metales ferrosos", "Acero inoxidable"],
      magneticField: "12,000 Gauss",
      features: [
        "Separación automática continua",
        "Ajuste de intensidad magnética",
        "Cinta transportadora integrada",
        "Sistema de limpieza automática",
        "Eficiencia de separación >98%"
      ]
    },
    maintenance: {
      interval: "1000 horas",
      type: "Preventivo",
      warranty: "18 meses"
    },
    category: "Separación"
  },
  {
    slug: "prensa-hidraulica-ph-800",
    title: "Prensa Hidráulica PH-800",
    price: "€52,000",
    image: "/brand/maq/maq-3.jpg",
    desc: "Prensa hidráulica de alta presión para compactación de residuos metálicos y chatarra",
    featured: true,
    specifications: {
      capacity: "800 kg/ciclo",
      power: "37 kW",
      dimensions: "4.2 x 2.5 x 3.1 m",
      weight: "6800 kg",
      pressure: "350 bar",
      cycleTime: "45 segundos",
      features: [
        "Control hidráulico de precisión",
        "Carga frontal y superior",
        "Sistema de seguridad bimanual",
        "Compactación variable",
        "Bajo nivel de ruido <75dB"
      ]
    },
    maintenance: {
      interval: "750 horas",
      type: "Preventivo",
      warranty: "30 meses"
    },
    category: "Compactación"
  },
  {
    slug: "cizalla-industrial-ci-1200",
    title: "Cizalla Industrial CI-1200",
    price: "€68,000",
    image: "/brand/maq/maq-4.jpg",
    desc: "Cizalla industrial para corte de perfiles metálicos y chatarra de gran tamaño",
    specifications: {
      capacity: "1200 mm corte",
      power: "55 kW",
      dimensions: "5.5 x 3.2 x 2.8 m",
      weight: "8500 kg",
      cutForce: "450 toneladas",
      materials: ["Vigas de acero", "Perfiles", "Chatarra pesada"],
      features: [
        "Cuchillas intercambiables",
        "Control automático de avance",
        "Sistema hidráulico reforzado",
        "Protecciones de seguridad CE",
        "Corte limpio sin rebabas"
      ]
    },
    maintenance: {
      interval: "600 horas",
      type: "Preventivo y correctivo",
      warranty: "24 meses"
    },
    category: "Corte"
  },
  {
    slug: "fragmentadora-residuos-fr-900",
    title: "Fragmentadora de Residuos FR-900",
    price: "€45,000",
    image: "/brand/maq/maq-5.jpg",
    desc: "Sistema de fragmentación para residuos diversos y materiales compuestos",
    specifications: {
      capacity: "900 kg/h",
      power: "30 kW",
      dimensions: "3.8 x 2.0 x 2.5 m",
      weight: "3200 kg",
      rotorSpeed: "150-300 rpm",
      materials: ["Plásticos", "Madera", "Textiles", "Caucho"],
      features: [
        "Doble rotor de corte",
        "Velocidad variable",
        "Sistema anti-bloqueo",
        "Cámara de corte reversible",
        "Malla intercambiable"
      ]
    },
    maintenance: {
      interval: "800 horas",
      type: "Preventivo",
      warranty: "18 meses"
    },
    category: "Fragmentación"
  },
  {
    slug: "clasificadora-automatica-ca-600",
    title: "Clasificadora Automática CA-600",
    price: "€95,000",
    image: "/brand/maq/maq-6.jpg",
    desc: "Sistema automatizado de clasificación por sensores ópticos e IA",
    specifications: {
      capacity: "600 objetos/min",
      power: "25 kW",
      dimensions: "6.0 x 2.5 x 3.0 m",
      weight: "2800 kg",
      accuracy: ">95%",
      materials: ["Plásticos", "Metales", "Papel", "Vidrio"],
      features: [
        "Sensores ópticos NIR",
        "Inteligencia artificial",
        "8 canales de salida",
        "Interfaz táctil 15''",
        "Conectividad IoT"
      ]
    },
    maintenance: {
      interval: "1200 horas",
      type: "Preventivo especializado",
      warranty: "36 meses"
    },
    category: "Clasificación"
  },
  {
    slug: "compactadora-chatarra-cc-1000",
    title: "Compactadora de Chatarra CC-1000",
    price: "€58,000",
    image: "/brand/maq/maq-7.jpg",
    desc: "Compactadora especializada para chatarra ligera y residuos metálicos voluminosos",
    specifications: {
      capacity: "1000 kg/h",
      power: "40 kW",
      dimensions: "4.5 x 2.8 x 3.2 m",
      weight: "5200 kg",
      pressure: "280 bar",
      materials: ["Latas", "Perfiles ligeros", "Chapas", "Cables"],
      features: [
        "Carga superior automática",
        "Compactación programable",
        "Eyector hidráulico",
        "Control de densidad",
        "Sistema de pesaje integrado"
      ]
    },
    maintenance: {
      interval: "650 horas",
      type: "Preventivo",
      warranty: "24 meses"
    },
    category: "Compactación"
  },
  {
    slug: "grua-magnetica-gm-500",
    title: "Grúa Magnética GM-500",
    price: "€85,000",
    image: "/brand/maq/maq-8.jpg",
    desc: "Grúa puente con electroimán para manipulación de materiales ferrosos",
    specifications: {
      capacity: "5000 kg",
      power: "22 kW",
      dimensions: "Luz: 15m, Altura: 8m",
      weight: "4800 kg",
      magneticForce: "8000 N",
      reach: "15 metros",
      features: [
        "Electroimán de 1200mm",
        "Control remoto inalámbrico",
        "Sistemas de seguridad redundantes",
        "Cabina ergonómica opcional",
        "Registro de operaciones"
      ]
    },
    maintenance: {
      interval: "1000 horas",
      type: "Preventivo crítico",
      warranty: "36 meses"
    },
    category: "Manipulación"
  },
  {
    slug: "balanza-industrial-bi-2000",
    title: "Balanza Industrial BI-2000",
    price: "€15,000",
    image: "/brand/maq/maq-9.jpg",
    desc: "Sistema de pesaje industrial de alta precisión para control de materiales",
    specifications: {
      capacity: "2000 kg",
      power: "2 kW",
      dimensions: "2.0 x 2.0 x 0.3 m",
      weight: "450 kg",
      precision: "±0.5 kg",
      platform: "Acero inoxidable",
      features: [
        "Célula de carga digital",
        "Display LED de 6 dígitos",
        "Conexión WiFi/Ethernet",
        "Software de gestión incluido",
        "Certificación metrológica"
      ]
    },
    maintenance: {
      interval: "2000 horas",
      type: "Calibración y preventivo",
      warranty: "24 meses"
    },
    category: "Pesaje"
  },
  {
    slug: "contenedor-especializado-ce-400",
    title: "Contenedor Especializado CE-400",
    price: "€12,000",
    image: "/brand/maq/maq-10.jpg",
    desc: "Contenedor especializado para residuos peligrosos con sistemas de seguridad",
    specifications: {
      capacity: "4000 litros",
      power: "No aplica",
      dimensions: "2.5 x 1.8 x 1.5 m",
      weight: "850 kg",
      material: "Acero al carbono recubierto",
      certification: "ADR/RID",
      features: [
        "Doble pared hermética",
        "Sistema de ventilación",
        "Válvulas de seguridad",
        "Etiquetado homologado",
        "Trazabilidad RFID"
      ]
    },
    maintenance: {
      interval: "6 meses",
      type: "Inspección reglamentaria",
      warranty: "60 meses"
    },
    category: "Almacenamiento"
  },
  {
    slug: "sistema-transporte-st-300",
    title: "Sistema de Transporte ST-300",
    price: "€28,000",
    image: "/brand/maq/maq-11.jpg",
    desc: "Sistema modular de cintas transportadoras para líneas de procesamiento",
    specifications: {
      capacity: "300 kg/m",
      power: "18 kW",
      dimensions: "Variable hasta 50m",
      weight: "120 kg/m",
      speed: "0.1 - 2.5 m/s",
      bandwidth: "800 mm",
      features: [
        "Módulos intercambiables",
        "Variador de frecuencia",
        "Estructura galvanizada",
        "Rodillos de impacto",
        "Sistema de limpieza"
      ]
    },
    maintenance: {
      interval: "1500 horas",
      type: "Preventivo",
      warranty: "24 meses"
    },
    category: "Transporte"
  },
  {
    slug: "equipo-analisis-ea-100",
    title: "Equipo de Análisis EA-100",
    price: "€35,000",
    image: "/brand/maq/maq-12.jpg",
    desc: "Analizador portátil de metales por fluorescencia de rayos X",
    specifications: {
      capacity: "Análisis instantáneo",
      power: "0.5 kW",
      dimensions: "0.3 x 0.2 x 0.4 m",
      weight: "1.5 kg",
      elements: "Mg a U (12-92)",
      precision: "±0.02%",
      features: [
        "Detector SDD refrigerado",
        "Pantalla táctil color",
        "Base de datos de aleaciones",
        "Bluetooth y WiFi",
        "Batería 8 horas autonomía"
      ]
    },
    maintenance: {
      interval: "3000 horas",
      type: "Calibración especializada",
      warranty: "24 meses"
    },
    category: "Análisis"
  }
];

// Información adicional del equipamiento
export const equipmentStats = {
  totalMachines: maquinarias.length,
  totalValue: "€630,000",
  categories: [
    "Trituración", "Separación", "Compactación", "Corte", 
    "Fragmentación", "Clasificación", "Manipulación", 
    "Pesaje", "Almacenamiento", "Transporte", "Análisis"
  ],
  certifications: [
    "CE Marking",
    "ISO 9001:2015",
    "ATEX (zonas explosivas)",
    "ADR/RID (transporte)",
    "Certificación metrológica"
  ],
  maintenanceProgram: {
    preventive: "Programa preventivo cada 500-2000h según equipo",
    emergency: "Servicio 24/7 para equipos críticos",
    training: "Formación especializada para operadores",
    spareParts: "Stock de repuestos garantizado 10 años"
  }
};

export const catalogUrl = "/brand/catalogo-maquinaria.pdf";
export const technicalDocsUrl = "/brand/docs-tecnicos/";

export default maquinarias;
export { maquinarias };
