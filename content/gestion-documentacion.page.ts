export type GestionDocumentacionPage = {
  title: string;
  subtitle: string;
  intro: string[];
  bloques: Array<{ titulo: string; bullets: string[] }>;
};

const gestionDocumentacionPage: GestionDocumentacionPage = {
  title: "GESTIÓN Y DOCUMENTACIÓN MEDIOAMBIENTAL",
  subtitle: "Especializados en Productores de Residuos del Sector Automoción",
  intro: [
    "Nuestro servicio de Gestión y Documentación Medioambiental está especialmente diseñado para talleres de automoción, ofreciendo un acompañamiento integral en el cumplimiento de todas las obligaciones legales medioambientales.",
    "Garantizamos el cumplimiento de la Ley 7/2022 y toda la normativa autonómica aplicable, proporcionando tranquilidad y seguridad jurídica a nuestros clientes."
  ],
  bloques: [
    {
      titulo: "1. Diagnóstico Inicial y Cumplimiento Normativo",
      bullets: [
        "Auditoría ambiental inicial: revisión de actividades, tipos de residuos (LER), almacenamiento, etiquetado y transporte.",
        "Identificación de obligaciones legales según Ley 7/2022 y normativa autonómica.",
        "Revisión de inscripciones y autorizaciones: NIMA, APCA y declaraciones anuales.",
        "Verificación de contratos con gestores autorizados."
      ]
    },
    {
      titulo: "2. Gestión Documental y Tramitación",
      bullets: [
        "Alta y mantenimiento en plataformas eSIR/ADCR.",
        "Elaboración y control de Documentos de Identificación (DI).",
        "Archivo y control documental para auditorías.",
        "Presentación de declaraciones anuales y notificaciones previas.",
        "Control de plazos de almacenamiento."
      ]
    },
    {
      titulo: "3. Planificación y Seguimiento de Residuos",
      bullets: [
        "Elaboración de plan de minimización de residuos peligrosos.",
        "Seguimiento de stock en almacén y alertas por plazos/cantidades.",
        "Optimización de rutas y recogidas con gestor."
      ]
    },
    {
      titulo: "4. Formación y Sensibilización",
      bullets: [
        "Formación al personal sobre identificación, manipulación y etiquetado de residuos.",
        "Procedimientos documentales para recogidas.",
        "Manual práctico de gestión adaptado al taller."
      ]
    },
    {
      titulo: "5. Servicios Complementarios",
      bullets: [
        "Soporte en inspecciones medioambientales o de industria.",
        "Informes periódicos con resumen de residuos, cumplimiento e incidencias."
      ]
    },
    {
      titulo: "6. Obligaciones Clave de un Taller Productor de Residuos Peligrosos",
      bullets: [
        "Inscripción en el Registro de Productores (NIMA).",
        "Contratos con gestores autorizados.",
        "Etiquetado y almacenamiento correcto.",
        "Cumplimiento de plazos y cantidades máximas.",
        "Documentación trazable en todos los traslados.",
        "Plan de minimización (si aplica)."
      ]
    }
  ]
};

export default gestionDocumentacionPage;
