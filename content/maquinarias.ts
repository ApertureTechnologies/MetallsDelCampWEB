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
  },
  // Máquinas adicionales para completar los layouts
  {
    slug: "extractor-polvo-ep-200",
    title: "Extractor de Polvo EP-200",
    image: "/brand/maq/maq-13.jpg",
    desc: "Sistema de extracción de polvo industrial para ambientes de trabajo limpios",
    featured: true,
    specifications: {
      capacity: "2000 m³/h",
      power: "12 kW",
      dimensions: "2.1 x 1.8 x 2.5 m",
      weight: "850 kg"
    },
    maintenance: {
      interval: "1200 horas",
      type: "Preventivo",
      warranty: "24 meses"
    },
    category: "Filtración"
  },
  {
    slug: "soldadora-automatica-sa-300",
    title: "Soldadora Automática SA-300",
    image: "/brand/maq/maq-14.jpg",
    desc: "Equipo de soldadura automática para reparación y fabricación de estructuras metálicas",
    specifications: {
      capacity: "300 A",
      power: "18 kW",
      dimensions: "1.8 x 1.2 x 1.5 m",
      weight: "420 kg"
    },
    maintenance: {
      interval: "800 horas",
      type: "Preventivo",
      warranty: "18 meses"
    },
    category: "Soldadura"
  },
  {
    slug: "mesa-vibradora-mv-150",
    title: "Mesa Vibradora MV-150",
    image: "/brand/maq/maq-15.jpg",
    desc: "Mesa vibradora para clasificación y separación de materiales por densidad",
    specifications: {
      capacity: "150 kg/h",
      power: "8 kW",
      dimensions: "3.0 x 1.5 x 1.0 m",
      weight: "650 kg"
    },
    maintenance: {
      interval: "1500 horas",
      type: "Preventivo",
      warranty: "12 meses"
    },
    category: "Clasificación"
  },
  {
    slug: "horno-fusion-hf-500",
    title: "Horno de Fusión HF-500",
    image: "/brand/maq/maq-16.jpg",
    desc: "Horno industrial para fusión de metales no ferrosos y aleaciones especiales",
    featured: true,
    specifications: {
      capacity: "500 kg",
      power: "85 kW",
      dimensions: "2.8 x 2.8 x 3.2 m",
      weight: "2800 kg"
    },
    maintenance: {
      interval: "600 horas",
      type: "Preventivo",
      warranty: "36 meses"
    },
    category: "Fusión"
  },
  {
    slug: "detector-metales-dm-400",
    title: "Detector de Metales DM-400",
    image: "/brand/maq/maq-17.jpg",
    desc: "Sistema de detección de metales para control de calidad en líneas de producción",
    specifications: {
      capacity: "400 mm apertura",
      power: "2 kW",
      dimensions: "1.2 x 0.8 x 1.8 m",
      weight: "180 kg"
    },
    maintenance: {
      interval: "2000 horas",
      type: "Preventivo",
      warranty: "24 meses"
    },
    category: "Detección"
  },
  {
    slug: "bomba-hidraulica-bh-750",
    title: "Bomba Hidráulica BH-750",
    image: "/brand/maq/maq-18.jpg",
    desc: "Unidad hidráulica de alta presión para alimentación de equipos industriales",
    specifications: {
      capacity: "750 bar",
      power: "22 kW",
      dimensions: "1.5 x 1.2 x 1.8 m",
      weight: "580 kg"
    },
    maintenance: {
      interval: "1000 horas",
      type: "Preventivo",
      warranty: "18 meses"
    },
    category: "Hidráulico"
  },
  {
    slug: "ventilador-industrial-vi-300",
    title: "Ventilador Industrial VI-300",
    image: "/brand/maq/maq-19.jpg",
    desc: "Sistema de ventilación industrial para extracción de gases y vapores",
    specifications: {
      capacity: "3000 m³/h",
      power: "15 kW",
      dimensions: "1.8 x 1.8 x 2.2 m",
      weight: "320 kg"
    },
    maintenance: {
      interval: "1800 horas",
      type: "Preventivo",
      warranty: "12 meses"
    },
    category: "Ventilación"
  },
  {
    slug: "cortadora-plasma-cp-200",
    title: "Cortadora Plasma CP-200",
    image: "/brand/maq/maq-20.jpg",
    desc: "Sistema de corte por plasma para metales de alta precisión y velocidad",
    specifications: {
      capacity: "200 A",
      power: "25 kW",
      dimensions: "2.5 x 1.8 x 1.6 m",
      weight: "750 kg"
    },
    maintenance: {
      interval: "900 horas",
      type: "Preventivo",
      warranty: "24 meses"
    },
    category: "Corte"
  },
  {
    slug: "elevador-tijera-et-400",
    title: "Elevador de Tijera ET-400",
    image: "/brand/maq/maq-21.jpg",
    desc: "Plataforma elevadora hidráulica para manipulación de cargas pesadas",
    specifications: {
      capacity: "4000 kg",
      power: "5 kW",
      dimensions: "3.0 x 2.0 x 1.2 m",
      weight: "1200 kg"
    },
    maintenance: {
      interval: "1200 horas",
      type: "Preventivo",
      warranty: "24 meses"
    },
    category: "Elevación"
  },
  {
    slug: "compresor-aire-ca-150",
    title: "Compresor de Aire CA-150",
    image: "/brand/maq/maq-22.jpg",
    desc: "Compresor de aire industrial para alimentación de herramientas neumáticas",
    specifications: {
      capacity: "150 L/min",
      power: "11 kW",
      dimensions: "1.8 x 1.0 x 1.6 m",
      weight: "450 kg"
    },
    maintenance: {
      interval: "1500 horas",
      type: "Preventivo",
      warranty: "18 meses"
    },
    category: "Neumático"
  },
  {
    slug: "mezcladora-metales-mm-800",
    title: "Mezcladora de Metales MM-800",
    image: "/brand/maq/maq-23.jpg",
    desc: "Equipo para mezcla homogénea de diferentes tipos de chatarra metálica",
    specifications: {
      capacity: "800 kg",
      power: "20 kW",
      dimensions: "3.5 x 2.8 x 2.5 m",
      weight: "1850 kg"
    },
    maintenance: {
      interval: "1100 horas",
      type: "Preventivo",
      warranty: "20 meses"
    },
    category: "Mezcla"
  },
  {
    slug: "bascula-camiones-bc-60",
    title: "Báscula para Camiones BC-60",
    image: "/brand/maq/maq-24.jpg",
    desc: "Sistema de pesaje para vehículos de carga con alta precisión y durabilidad",
    specifications: {
      capacity: "60 toneladas",
      power: "3 kW",
      dimensions: "18.0 x 3.5 x 0.5 m",
      weight: "8500 kg"
    },
    maintenance: {
      interval: "2500 horas",
      type: "Preventivo",
      warranty: "36 meses"
    },
    category: "Pesaje"
  },
  {
    slug: "transportador-cadena-tc-500",
    title: "Transportador de Cadena TC-500",
    image: "/brand/maq/maq-25.jpg",
    desc: "Sistema de transporte por cadena para materiales pesados y abrasivos",
    specifications: {
      capacity: "500 kg/m",
      power: "18 kW",
      dimensions: "10.0 x 1.2 x 2.0 m",
      weight: "2200 kg"
    },
    maintenance: {
      interval: "1300 horas",
      type: "Preventivo",
      warranty: "24 meses"
    },
    category: "Transporte"
  },
  {
    slug: "molino-martillos-mm-300",
    title: "Molino de Martillos MM-300",
    image: "/brand/maq/maq-26.jpg",
    desc: "Molino de martillos para reducción de tamaño de materiales diversos",
    specifications: {
      capacity: "300 kg/h",
      power: "30 kW",
      dimensions: "2.8 x 2.2 x 2.5 m",
      weight: "1650 kg"
    },
    maintenance: {
      interval: "800 horas",
      type: "Preventivo",
      warranty: "18 meses"
    },
    category: "Molienda"
  },
  {
    slug: "alimentador-vibratorio-av-200",
    title: "Alimentador Vibratorio AV-200",
    image: "/brand/maq/maq-27.jpg",
    desc: "Sistema de alimentación continua para líneas de procesamiento",
    specifications: {
      capacity: "200 kg/h",
      power: "6 kW",
      dimensions: "4.0 x 1.5 x 1.8 m",
      weight: "980 kg"
    },
    maintenance: {
      interval: "1600 horas",
      type: "Preventivo",
      warranty: "15 meses"
    },
    category: "Alimentación"
  },
  {
    slug: "cabina-pintura-cp-400",
    title: "Cabina de Pintura CP-400",
    image: "/brand/maq/maq-28.jpg",
    desc: "Cabina de pintura industrial con sistema de filtración avanzado",
    specifications: {
      capacity: "4.0 x 2.5 x 3.0 m",
      power: "35 kW",
      dimensions: "5.0 x 3.5 x 4.0 m",
      weight: "2800 kg"
    },
    maintenance: {
      interval: "1400 horas",
      type: "Preventivo",
      warranty: "24 meses"
    },
    category: "Pintura"
  },
  {
    slug: "sistema-refrigeracion-sr-150",
    title: "Sistema de Refrigeración SR-150",
    image: "/brand/maq/maq-29.jpg",
    desc: "Unidad de refrigeración industrial para control térmico de procesos",
    specifications: {
      capacity: "150 kW frío",
      power: "42 kW",
      dimensions: "3.2 x 2.8 x 2.5 m",
      weight: "1950 kg"
    },
    maintenance: {
      interval: "1700 horas",
      type: "Preventivo",
      warranty: "30 meses"
    },
    category: "Refrigeración"
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
