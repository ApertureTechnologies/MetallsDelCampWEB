import { SiteContent } from '../lib/content/types';

const siteContent: SiteContent = {
  homeVariant: "detailed",
  home: {
    claim: "Gestión de Residuos",
    subclaim: "Especialistas en gestión integral de residuos peligrosos y no peligrosos, con tecnología avanzada y compromiso medioambiental.",
    ctas: {
      primaryLabel: "Alquiler de Maquinaria",
      primaryHref: "/maquinarias",
      secondaryLabel: "Gestión de Residuos",
      secondaryHref: "/residuos",
      tertiaryLabel: "Gestión y Documentación Ambiental",
      tertiaryHref: "/contacto"
    },
    benefits: [
      {
        title: "Cumplimiento",
        desc: "Documentación y normativa al día para tu tranquilidad.",
        icon: "shield-check"
      },
      {
        title: "Ahorro",
        desc: "Optimización de rutas, frecuencias y costes de gestión.",
        icon: "trending-down"
      },
      {
        title: "Transparencia",
        desc: "Trazabilidad de residuos y evidencias de entrega.",
        icon: "eye"
      }
    ],
    carousel: [
      {
        src: "/brand/slide-1.jpg",
        alt: "Aerosoles y envases contaminados"
      },
      {
        src: "/brand/slide-2.jpg",
        alt: "Clasificación de cartón y papel"
      },
      {
        src: "/brand/slide-3.jpg",
        alt: "Prensa/compactadora en operación"
      }
    ],
    video: {
      poster: "/brand/video-poster.jpg",
      sources: [
        { src: "/brand/clip.webm", type: "video/webm" },
        { src: "/brand/clip.mp4", type: "video/mp4" }
      ]
    },
    taglineBelow: "Sistema exclusivo de gestión de residuos globalizado"
  },
  empresa: {
    title: "Somos una sociedad preparada para la nueva era en la gestión de residuos",
    body: "Desde 2008 hemos desarrollado un nuevo concepto empresarial centrado en la gestión integral de residuos industriales. Nuestra capacidad de adaptación nos permite trabajar con cualquier sector y volumen, ofreciendo soluciones personalizadas que responden a las necesidades específicas de cada cliente.\n\nNuestra vocación medioambiental va más allá del cumplimiento normativo. Trabajamos por la conservación de los recursos naturales y la minimización del impacto ambiental, estableciendo relaciones duraderas tanto con nuestros proveedores como con nuestros clientes.\n\nLa experiencia acumulada durante estos años nos ha posicionado como referente en el sector, manteniendo siempre un enfoque profesional y comprometido con la excelencia en el servicio.",
    highlights: [
      "Experiencia desde 2008",
      "Adaptación a cualquier sector",
      "Compromiso medioambiental",
      "Relaciones duraderas"
    ]
  },
  mision: {
    heroTitle: "Contribuir a la conservación de los recursos naturales",
    pillars: [
      {
        title: "Sostenibilidad",
        desc: "Manejo sostenible de los recursos naturales desde la justicia y la solidaridad."
      },
      {
        title: "Estrategia",
        desc: "Participamos en la ejecución y administración de proyectos de desarrollo ambiental."
      },
      {
        title: "Capacidad",
        desc: "Agilidad logística y aclimatación constante, mediante el diálogo y la escucha permanente con nuestros clientes."
      }
    ],
    sideClaim: "Empresa pionera y referente en el sector",
    intro: "Nuestro compromiso con el medio ambiente se fundamenta en una visión integral de la gestión de residuos, donde cada proceso contribuye a la preservación de los recursos naturales para las futuras generaciones."
  },
  contacto: {
    phone: "+34 925 123 456",
    email: "info@metallsdelcampslu.es",
    address: "Aldaia (Valencia) y El Romeral (Toledo)",
    mapImage: "/brand/map.jpg"
  },
  legales: {
    aviso: "Información legal y datos identificativos de la empresa. Contenido pendiente de completar.",
    privacidad: "Política de privacidad y protección de datos. Contenido pendiente de completar.",
    cookies: "Información sobre el uso de cookies en este sitio web. Contenido pendiente de completar."
  }
};

export default siteContent;

// Exportaciones individuales para compatibilidad con páginas existentes
export const companyInfo = siteContent.empresa;
export const legalContent = siteContent.legales;
