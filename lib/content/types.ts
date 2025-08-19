export type Servicio = {
  slug: string;           // p.ej. "residuos-peligrosos"
  title: string;
  excerpt: string;
  icon?: string;          // nombre de icono (lucide) o ruta svg
  lerCodes?: string[];    // opcional
  body?: string;          // markdown simple permitido
  featured?: boolean;     // destacado en listados
  image?: string;         // imagen del servicio
};

export type Proyecto = {
  slug: string;
  title: string;
  date: string;           // ISO "YYYY-MM-DD"
  cover?: string;
  gallery?: string[];
  body: string;
  excerpt?: string;       // descripción corta
  featured?: boolean;     // destacado en listados
  client?: string;        // cliente del proyecto
  location?: string;      // ubicación del proyecto
  duration?: string;      // duración del proyecto
  tags?: string[];        // etiquetas del proyecto
  environmentalAuthorizations?: string[]; // autorizaciones medioambientales aplicables
};

export type Instalacion = {
  slug: string;
  title: string;
  desc: string;
  image: string; // /brand/instalacion-*.jpg
  location?: {
    address?: string;
    city?: string;
    province?: string;
    postalCode?: string;
    coordinates?: { lat: number; lng: number };
  };
  specifications?: {
    area?: string;
    coveredArea?: string;
    capacity?: string;
    operationalSince?: string;
    employees?: number;
    workingHours?: string;
    specializations?: string[];
  };
  equipment?: string[];
  certifications?: string[];
  processes?: string[];
  contact?: {
    phone?: string;
    email?: string;
    manager?: string;
  };
};

export type Persona = {
  id: string;
  nombre: string;
  puesto: string;
  foto?: string;
  contacto?: {
    email?: string;
    telefono?: string;
  };
};

export type Maquinaria = {
  slug: string;
  title: string;
  price?: string;        // mostrar como texto, opcional
  image: string;
  desc?: string;
  featured?: boolean;    // para destacar máquinas principales
  specifications?: {
    capacity?: string;
    power?: string;
    dimensions?: string;
    weight?: string;
    materials?: string[];
    outputSize?: string;
    pressure?: string;
    cycleTime?: string;
    cutForce?: string;
    rotorSpeed?: string;
    accuracy?: string;
    magneticField?: string;
    magneticForce?: string;
    reach?: string;
    precision?: string;
    platform?: string;
    material?: string;
    certification?: string;
    speed?: string;
    bandwidth?: string;
    elements?: string;
    features?: string[];
  };
  maintenance?: {
    interval?: string;
    type?: string;
    warranty?: string;
  };
  category?: string;
};

export type Residuo = {
  slug: string;
  title: string;
  image?: string;
  valorable: boolean;    // true → "Residuos valorables", false → "no valorables"
};

export type HomeVariant = "detailed" | "basic";

export type SiteContent = {
  home: {
    claim: string;
    subclaim: string;
    ctas: { primaryLabel: string; primaryHref: string; secondaryLabel: string; secondaryHref: string; tertiaryLabel?: string; tertiaryHref?: string; };
    benefits: { title: string; desc: string; icon?: string; }[];
    carousel: { src: string; alt: string; }[];
    video: { poster: string; sources: { src: string; type: string; }[]; };
    taglineBelow?: string; // "Sistema exclusivo de gestión de residuos globalizado"
  };
  empresa: { title: string; body: string; highlights?: string[]; };
  mision: {
    heroTitle: string;     // "Contribuir a la conservación de los recursos naturales"
    pillars: { title: string; desc: string; }[]; // Sostenibilidad, Estrategia, Capacidad
    sideClaim?: string;    // "Empresa pionera y referente en el sector"
    intro?: string;        // bloque de párrafo de la 3ª captura
  };
  contacto: { phone: string; email: string; address: string; mapImage?: string; };
  legales: { aviso: string; privacidad: string; cookies: string; };
  homeVariant?: HomeVariant;
};
