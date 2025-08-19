export type ResiduosPage = {
  title: string;
  intro: string[]; // párrafos iniciales
  especializado: string; // "Estamos especializados en talleres de automoción."
  ventajas: string[]; // 1–2 párrafos sobre precios/mejores condiciones y planta propia de filtros
  flota: string[]; // lista EXACTA «Contamos con: ...»
  envases: string[]; // lista EXACTA «Trabajamos con: ...»
  facilitamos: string[]; // lista EXACTA «Facilitamos: ...»
};

const residuosPage: ResiduosPage = {
  title: "GESTIÓN DE RESIDUOS",
  especializado: "Estamos especializados en talleres de automoción.",
  intro: [
    "La correcta recogida de residuos peligrosos en los talleres de automoción es esencial para garantizar seguridad, cumplimiento legal y una gestión responsable, y en Metalls del Camp lo hacemos con los mejores precios del mercado, siendo la empresa que mejor paga el aceite, la chatarra y las baterías.",
    "En Metalls del Camp somos gestores finales gracias a nuestra propia planta de filtros, lo que nos permite tener los costes más bajos del sector en el tratamiento de filtros de aceite, combustible y envases contaminados, ofreciendo siempre las mejores condiciones a nuestros clientes."
  ],
  ventajas: [],
  flota: [
    "Camiones cisterna de cualquier tamaño",
    "Furgonetas",
    "Camiones con puerta elevadora de cualquier tonelaje",
    "Autobomba para aceite en camiones híbridos",
    "Portacontenedores",
    "Camión con remolque",
    "Contenedores cadeneros de 5m³ a 14m³",
    "Contenedores multilift de 14m³ a 40m³",
    "Camiones equipados con grúa y pinza de pulpo para recogida de materiales a granel"
  ],
  envases: [
    "Bidones de 25",
    "Bidones de 50",
    "Bidones de 120",
    "Bidones de 200",
    "Bidones de 1000 / GRG",
    "Boxes",
    "Sacas",
    "Jaula para paragolpes",
    "Jaula para plancha",
    "Jaula para lunas"
  ],
  facilitamos: [
    "Cubetas colectoras antiderrames de primera calidad fabricadas bajo pedido"
  ]
};

export default residuosPage;
