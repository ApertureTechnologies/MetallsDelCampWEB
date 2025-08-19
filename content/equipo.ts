import { Persona } from '../lib/content/types';

// CEO / DIRECTOR GENERAL
export const ceo: Persona = {
  id: "director-general",
  nombre: "Ricard Escudé",
  puesto: "Director General",
  foto: "/brand/team/director-general.jpg"
};

// DIRECTIVA EJECUTIVA GLOBAL
export const directiva: Persona[] = [
  {
    id: "directora-ejecutiva-global",
    nombre: "Belén Gimeno",
    puesto: "Directora Ejecutiva Global",
    foto: "/brand/team/directora-ejecutiva-global.jpg"
  },
  {
    id: "ayudante-direccion",
    nombre: "Ignacio Miralles",
    puesto: "Ayudante de Dirección",
    foto: "/brand/team/ayudante-direccion.jpg"
  },
  {
    id: "director-comercial-nacional",
    nombre: "Francisco Javier Martín",
    puesto: "Director Comercial Nacional",
    foto: "/brand/team/director-comercial-nacional.jpg"
  }
];

// GERENCIAS TERRITORIALES
export const gerencias = {
  // ALDAIA - División Levante
  aldaia: {
    gerente: {
      id: "gerente-aldaia",
      nombre: "Valeriano Moreno",
      puesto: "Gerente",
      ubicacion: "Aldaia",
      foto: "/brand/team/gerente-aldaia.jpg"
    },
    jefeAdministrativo: {
      id: "jefe-administrativo-aldaia",
      nombre: "Daniel Mira",
      puesto: "Jefe Administración y Jefe Salidas Materiales",
      foto: "/brand/team/jefe-admin-aldaia.jpg"
    },
    equipos: {
      coscollar: {
        planificador: {
          id: "planificador-logistico-coscollar",
          nombre: "Josep Díaz",
          puesto: "Planificador Logístico",
          ubicacion: "Centro del Coscollar",
          foto: "/brand/team/planificador-coscollar.jpg"
        },
        jefeTrafico: {
          id: "jefe-trafico-coscollar",
          nombre: "Ilyan Ivanov",
          puesto: "Jefe de Tráfico",
          ubicacion: "Centro del Coscollar",
          foto: "/brand/team/jefe-trafico-coscollar.jpg"
        },
        responsable: {
          id: "responsable-planta-coscollar",
          nombre: "Mamadou Conteh",
          puesto: "Responsable de Planta",
          ubicacion: "Centro del Coscollar",
          foto: "/brand/team/responsable-planta-coscollar.jpg"
        }
      },
      serraEspada: {
        descarga: {
          id: "descarga-aceite-recepcion-residuos",
          nombre: "Abukakari Tunkara",
          puesto: "Descarga de Aceite y Recepción de Residuos Peligrosos y Salidas",
          ubicacion: "Centro de Serra d'Espadà",
          foto: "/brand/team/descarga-aceite-serra-espada.jpg"
        }
      },
      plantaResiduos: {
        jefa: {
          id: "jefa-administrativa-planta-residuos",
          nombre: "María Concepción Fernández",
          puesto: "Jefa Administrativa",
          ubicacion: "Planta de Residuos",
          foto: "/brand/team/jefa-admin-planta-residuos.jpg"
        },
        responsable: {
          id: "responsable-planta-residuos",
          nombre: "Juan Pablo Álvarez",
          puesto: "Responsable de Planta",
          ubicacion: "Planta de Residuos",
          foto: "/brand/team/responsable-planta-residuos.jpg"
        }
      }
    }
  },
  
  // EL ROMERAL - División Centro
  elRomeral: {
    gerente: {
      id: "gerente-el-romeral",
      nombre: "José Luis Ricarte",
      puesto: "Gerente",
      ubicacion: "El Romeral",
      foto: "/brand/team/gerente-el-romeral.jpg"
    },
    coordinacion: {
      id: "coordinador-general-planta-logistica-romeral",
      nombre: "Mario Sánchez",
      puesto: "Coordinador General de Planta y Logística",
      foto: "/brand/team/coordinador-general-romeral.jpg"
    },
    equipos: {
      plantaResiduos: {
        responsable: {
          id: "responsable-planta-residuos-romeral",
          nombre: "Juan Pablo Álvarez",
          puesto: "Responsable de Planta",
          ubicacion: "Planta de Residuos",
          foto: "/brand/team/responsable-planta-residuos-romeral.jpg"
        }
      },
      plantaFiltros: {
        responsable: {
          id: "responsable-planta-filtros-romeral",
          nombre: "Tomás Tapia",
          puesto: "Responsable de Planta",
          ubicacion: "Planta de Filtros",
          foto: "/brand/team/responsable-planta-filtros-romeral.jpg"
        }
      }
    }
  }
};

// Organigrama jerárquico completo
export const orgChart = {
  directorGeneral: ceo,
  directiva,
  gerencias
};

// Función para obtener el total de empleados
export function getTotalEmployees(): number {
  const directorGeneralCount = 1;
  const directivaCount = directiva.length;
  
  // Contar empleados por gerencia
  let gerenciasCount = 0;
  
  // Aldaia
  gerenciasCount += 1; // gerente
  gerenciasCount += 1; // coordinador
  gerenciasCount += 3; // coscollar (planificador, jefe tráfico, responsable)
  gerenciasCount += 2; // serra espada (admin, descarga)
  gerenciasCount += 2; // planta residuos (jefa, responsable)
  gerenciasCount += 1; // planta filtros (responsable)
  
  // El Romeral
  gerenciasCount += 1; // gerente
  gerenciasCount += 1; // coordinador (mismo que Aldaia, pero cuenta por ubicación)
  gerenciasCount += 2; // planta residuos (jefa, responsable)
  gerenciasCount += 1; // planta filtros (responsable)
  
  return directorGeneralCount + directivaCount + gerenciasCount;
}

const equipoData = {
  ceo,
  directiva,
  gerencias,
  orgChart,
  getTotalEmployees
};

export { equipoData };
export default equipoData;
