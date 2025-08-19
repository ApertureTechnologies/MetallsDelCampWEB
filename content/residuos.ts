import { Residuo } from '../lib/content/types';

const residuos: Residuo[] = [
  // Residuos valorables
  {
    slug: "papel-carton",
    title: "Papel y Cartón",
    image: "/brand/residuos/papel-carton.jpg",
    valorable: true
  },
  {
    slug: "metales-ferrosos",
    title: "Metales Ferrosos",
    image: "/brand/residuos/metales-ferrosos.jpg",
    valorable: true
  },
  {
    slug: "metales-no-ferrosos",
    title: "Metales No Ferrosos",
    image: "/brand/residuos/metales-no-ferrosos.jpg",
    valorable: true
  },
  {
    slug: "plasticos-reciclables",
    title: "Plásticos Reciclables",
    image: "/brand/residuos/plasticos.jpg",
    valorable: true
  },
  {
    slug: "madera",
    title: "Madera",
    image: "/brand/residuos/madera.jpg",
    valorable: true
  },
  
  // Residuos no valorables
  {
    slug: "lodos-industriales",
    title: "Lodos Industriales",
    image: "/brand/residuos/lodos.jpg",
    valorable: false
  },
  {
    slug: "absorbentes-contaminados",
    title: "Absorbentes Contaminados",
    image: "/brand/residuos/absorbentes.jpg",
    valorable: false
  },
  {
    slug: "envases-contaminados",
    title: "Envases Contaminados",
    image: "/brand/residuos/envases-contaminados.jpg",
    valorable: false
  },
  {
    slug: "residuos-quimicos",
    title: "Residuos Químicos",
    image: "/brand/residuos/quimicos.jpg",
    valorable: false
  },
  {
    slug: "aceites-usados",
    title: "Aceites Usados",
    image: "/brand/residuos/aceites.jpg",
    valorable: false
  },
  {
    slug: "filtros-contaminados",
    title: "Filtros Contaminados",
    image: "/brand/residuos/filtros.jpg",
    valorable: false
  },
  {
    slug: "tierra-contaminada",
    title: "Tierra Contaminada",
    image: "/brand/residuos/tierra-contaminada.jpg",
    valorable: false
  }
];

export default residuos;
export { residuos };
