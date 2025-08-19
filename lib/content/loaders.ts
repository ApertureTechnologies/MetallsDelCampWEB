import siteContent from '../../content/site.content';
import { servicios } from '../../content/servicios';
import { proyectos } from '../../content/proyectos';
import instalacionesData from '../../content/instalaciones';
import equipoData from '../../content/equipo';
import maquinariasData, { catalogUrl as catalogoMaquinariasUrl } from '../../content/maquinarias';
import residuosData from '../../content/residuos';
import { SiteContent, Servicio, Proyecto } from './types';

// Build-time loaders - sincronos, no usan fs en runtime

export function getSiteContent(): SiteContent {
  return siteContent;
}

export function getServicios(): Servicio[] {
  return servicios;
}

export function getServicioBySlug(slug: string): Servicio | undefined {
  return servicios.find(servicio => servicio.slug === slug);
}

export function getProyectos(): Proyecto[] {
  return proyectos.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getProyectoBySlug(slug: string): Proyecto | undefined {
  return proyectos.find(proyecto => proyecto.slug === slug);
}

export function getProyectosRecent(limit: number = 3): Proyecto[] {
  return getProyectos().slice(0, limit);
}

export const getInstalaciones = () => instalacionesData.instalaciones;
export const getEquipo = () => equipoData;
export const getMaquinarias = () => maquinariasData;
export const getCatalogoMaquinariasUrl = () => catalogoMaquinariasUrl;
export const getResiduos = () => residuosData;

// Generadores para páginas dinámicas
export function getServicioSlugs(): string[] {
  return servicios.map(servicio => servicio.slug);
}

export function getProyectoSlugs(): string[] {
  return proyectos.map(proyecto => proyecto.slug);
}
