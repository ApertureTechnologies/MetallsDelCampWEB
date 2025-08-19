import { Servicio } from '../lib/content/types';

const servicios: Servicio[] = [
  {
    slug: "gestion-y-documentacion-ambiental",
    title: "Gestión y Documentación Ambiental",
    excerpt: "Servicio integral especializado en productores de residuos del sector automoción.",
    icon: "clipboard-check",
    body: "Diagnóstico ambiental inicial, gestión documental completa, tramitación en plataformas eSIR/ADCR, elaboración de Documentos de Identificación (DI), declaraciones anuales, control de inspecciones, planes de minimización y formación especializada para el cumplimiento normativo."
  },
  {
    slug: "servicio-de-maquinas",
    title: "Servicio de máquinas",
    excerpt: "Nuestras máquinas están preparadas para trabajar en cualquier industria.",
    icon: "factory",
    body: "Suministro y mantenimiento básico de equipos auxiliares para compactación, clasificación y almacenamiento."
  }
];

export default servicios;
export { servicios };
