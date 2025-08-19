import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProyectoBySlug, getProyectoSlugs } from '../../../../lib/content/loaders';

interface ProyectoPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getProyectoSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ProyectoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const proyecto = getProyectoBySlug(slug);
  
  if (!proyecto) {
    return {
      title: 'Proyecto no encontrado',
    };
  }

  return {
    title: proyecto.title,
    description: proyecto.excerpt,
    openGraph: {
      images: proyecto.cover ? [{ url: proyecto.cover }] : undefined,
    },
  };
}

export default async function ProyectoPage({ params }: ProyectoPageProps) {
  const { slug } = await params;
  const proyecto = getProyectoBySlug(slug);

  if (!proyecto) {
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
              <Link href="/proyectos" className="hover:text-secondary-700">
                Proyectos
              </Link>
            </li>
            <li>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li className="text-secondary-900 font-medium">
              {proyecto.title}
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            {proyecto.featured && (
              <span className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                Proyecto Destacado
              </span>
            )}
            <time className="text-sm text-secondary-500">
              {new Date(proyecto.date).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            {proyecto.title}
          </h1>
          
          <p className="text-xl text-secondary-600 mb-8">
            {proyecto.excerpt}
          </p>
          
          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-secondary-50 rounded-lg">
            {proyecto.client && (
              <div>
                <dt className="text-sm font-medium text-secondary-500 mb-1">Cliente</dt>
                <dd className="text-base text-secondary-900">{proyecto.client}</dd>
              </div>
            )}
            {proyecto.location && (
              <div>
                <dt className="text-sm font-medium text-secondary-500 mb-1">Ubicación</dt>
                <dd className="text-base text-secondary-900">{proyecto.location}</dd>
              </div>
            )}
            {proyecto.duration && (
              <div>
                <dt className="text-sm font-medium text-secondary-500 mb-1">Duración</dt>
                <dd className="text-base text-secondary-900">{proyecto.duration}</dd>
              </div>
            )}
          </div>
        </header>

        {/* Cover Image */}
        {proyecto.cover && (
          <div className="mb-12">
            <div className="aspect-video bg-secondary-100 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-secondary-400">
                <span className="text-lg">Imagen principal: {proyecto.title}</span>
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div className="text-secondary-700 leading-relaxed whitespace-pre-line">
            {proyecto.body}
          </div>
        </div>

        {/* Tags */}
        {proyecto.tags && proyecto.tags.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-secondary-900 mb-4">
              Categorías
            </h2>
            <div className="flex flex-wrap gap-2">
              {proyecto.tags.map((tag) => (
                <span key={tag} className="inline-block bg-accent-100 text-accent-800 px-3 py-1 rounded-lg text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Environmental Authorizations */}
        {proyecto.environmentalAuthorizations && proyecto.environmentalAuthorizations.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-secondary-900 mb-4">
              Autorizaciones Medioambientales
            </h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="text-sm text-green-700 mb-4">
                Este proyecto se ejecuta bajo el marco de nuestras autorizaciones medioambientales vigentes:
              </p>
              <ul className="space-y-2">
                {proyecto.environmentalAuthorizations.map((auth, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-green-800 font-medium">{auth}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Gallery */}
        {proyecto.gallery && proyecto.gallery.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-secondary-900 mb-6">
              Galería del proyecto
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {proyecto.gallery.map((image, index) => (
                <div key={index} className="aspect-video bg-secondary-100 rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-secondary-400">
                    <span className="text-sm">Imagen {index + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-primary-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">
            ¿Te interesa un proyecto similar?
          </h2>
          <p className="text-secondary-600 mb-6">
            Cada proyecto es único, pero podemos aplicar nuestra experiencia y conocimiento a tu próximo desafío.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary-600 border border-transparent rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
            >
              Consultar proyecto
            </Link>
            <Link 
              href="/proyectos"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-primary-600 bg-white border border-primary-600 rounded-lg hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
            >
              Ver más proyectos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
