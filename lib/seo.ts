export interface OrganizationSchema {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  logo: string;
  description: string;
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint: {
    "@type": "ContactPoint";
    telephone: string;
    contactType: "customer service";
    areaServed: string;
    availableLanguage: string;
  };
}

export interface BreadcrumbSchema {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item?: string;
  }>;
}

export interface LocalBusinessSchema {
  "@context": "https://schema.org";
  "@type": "LocalBusiness";
  name: string;
  url: string;
  logo: string;
  description: string;
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint: {
    "@type": "ContactPoint";
    telephone: string;
    contactType: "customer service";
    areaServed: string;
    availableLanguage: string;
  };
  openingHours: string[];
  geo: {
    "@type": "GeoCoordinates";
    latitude: number;
    longitude: number;
  };
  priceRange: string;
}

export function generateOrganizationSchema(siteUrl: string): OrganizationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Metalls del Camp",
    url: siteUrl,
    logo: `${siteUrl}/brand/logos/completo/logo-500x353.png`,
    description: "Especialistas en gestión de residuos peligrosos y no peligrosos. Soluciones integrales para industria con más de 17 años de experiencia.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Carrer Serra d'Espadà, 6",
      addressLocality: "Aldaia",
      postalCode: "46960",
      addressCountry: "ES"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+34-925-123-456",
      contactType: "customer service",
      areaServed: "ES",
      availableLanguage: "Spanish"
    }
  };
}

export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url?: string }>, siteUrl: string): BreadcrumbSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url ? `${siteUrl}${crumb.url}` : undefined
    }))
  };
}

export function generateLocalBusinessSchema(siteUrl: string): LocalBusinessSchema {
  const orgSchema = generateOrganizationSchema(siteUrl);
  return {
    ...orgSchema,
    "@type": "LocalBusiness",
    openingHours: [
      "Mo-Fr 08:00-18:00",
      "Sa 09:00-14:00"
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.4699,
      longitude: -0.3763
    },
    priceRange: "€€"
  };
}
