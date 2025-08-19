import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getServicioBySlug, getServicioSlugs } from '../../../../lib/content/loaders';

interface ServicioPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getServicioSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ServicioPageProps): Promise<Metadata> {
  const { slug } = await params;
  const servicio = getServicioBySlug(slug);
  
  if (!servicio) {
    return {
      title: 'Servicio no encontrado',
    };
  }

  return {
    title: servicio.title,
    description: servicio.excerpt,
  };
}

export default async function ServicioPage({ params }: ServicioPageProps) {
  const { slug } = await params;
  const servicio = getServicioBySlug(slug);

  if (!servicio) {
    notFound();
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-secondary-500">
            <li>
              <Link href="/" className="hover:text-secondary-700">
                Inicio
              </Link>
            </li>
            <li>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li>
              <Link href="/servicios" className="hover:text-secondary-700">
                Servicios
              </Link>
            </li>
            <li>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li className="text-secondary-900 font-medium">
              {servicio.title}
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-12">
          {servicio.featured && (
            <div className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Servicio Destacado
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            {servicio.title}
          </h1>
          <p className="text-xl text-secondary-600">
            {servicio.excerpt}
          </p>
        </header>

        {/* Service Image */}
        {servicio.image && (
          <div className="mb-12">
            <div className="aspect-video bg-secondary-100 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-secondary-400">
                <span className="text-lg">Imagen del servicio: {servicio.title}</span>
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div className="text-secondary-700 leading-relaxed whitespace-pre-line">
            {servicio.body}
          </div>
        </div>

        {/* LER Codes */}
        {servicio.lerCodes && servicio.lerCodes.length > 0 && (
          <div className="mb-12 p-6 bg-accent-50 rounded-lg">
            <h2 className="text-xl font-semibold text-secondary-900 mb-4">
              Códigos LER Aplicables
            </h2>
            <div className="flex flex-wrap gap-2">
              {servicio.lerCodes.map((code) => (
                <span key={code} className="inline-block bg-accent-100 text-accent-800 px-3 py-1 rounded-lg font-mono text-sm">
                  {code}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-primary-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">
            ¿Interesado en este servicio?
          </h2>
          <p className="text-secondary-600 mb-6">
            Contacta con nosotros para más información o para solicitar un presupuesto personalizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary-600 border border-transparent rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
            >
              Solicitar presupuesto
            </Link>
            <Link 
              href="/servicios"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-primary-600 bg-white border border-primary-600 rounded-lg hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
            >
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
