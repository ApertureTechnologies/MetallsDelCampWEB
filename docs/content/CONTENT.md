# Sistema de Contenido - Metalls del Camp

## 📋 Descripción General

El sitio web utiliza un **sistema de contenido basado en TypeScript** que centraliza toda la información corporativa en archivos tipados, eliminando la necesidad de un CMS externo y garantizando la consistencia de datos.

## 🏗️ Arquitectura del Contenido

### Ubicación
```
content/
├── equipo.ts          # 19 perfiles del equipo directivo
├── instalaciones.ts   # 4 centros de tratamiento
├── maquinarias.ts     # 12 equipos especializados
├── residuos.ts        # 11 tipos de residuos gestionados
├── servicios.ts       # Servicios especializados
└── proyectos.ts       # Portfolio de proyectos
```

### Configuración Central
```
brand.config.ts        # Hub central con toda la configuración
lib/content/
├── types.ts          # Definiciones TypeScript
└── loaders.ts        # Funciones de carga de contenido
```

## 👥 Equipo (19 Personas)

### Estructura de Datos
```typescript
interface Persona {
  id: string;
  nombre: string;
  cargo: string;
  departamento: string;
  experiencia: string;
  especializaciones?: string[];
  certificaciones?: string[];
  responsabilidades?: string[];
  contacto?: {
    email?: string;
    telefono?: string;
    extension?: string;
  };
  imagen: string;
}
```

### Organización Jerárquica

#### **Alta Dirección (5 personas)**
- **CEO**: Ricard Escudé (25 años experiencia)
- **Directora General**: María López Fernández (18 años)
- **Director Operaciones**: Carlos Ruiz Sánchez (22 años)
- **Directora Financiera**: Ana Martín González (15 años)
- **Director Comercial**: Roberto Silva Torres (20 años)

#### **Gerencia Regional Levante (3 personas)**
- **Gerente Regional Valencia**: Luis Herrera Vázquez (12 años)
- **Gerente Sostenibilidad**: Carmen Díaz Moreno (10 años)
- **Gerente Desarrollo**: Francisco Ruiz López (8 años)

#### **Gerencia Regional Castilla-La Mancha (3 personas)**
- **Gerente Regional Toledo**: José Manuel García (14 años)
- **Gerente Operaciones**: Laura Sánchez Martín (9 años)
- **Gerente Calidad**: David González Pérez (11 años)

#### **Técnicos Especializados (3 personas)**
- **Técnico Senior Residuos Peligrosos**: Miguel Ángel Torres (13 años)
- **Técnico Valorización**: Elena Martínez Ruiz (7 años)
- **Técnico I+D+i**: Alejandro López García (6 años)

#### **Gerencia de Operaciones (5 personas)**
- **Gerente Logística**: Patricia Hernández (10 años)
- **Gerente Mantenimiento**: Sergio Díaz Romero (12 años)
- **Gerente RRHH**: Isabel García López (8 años)
- **Gerente Sistemas**: Antonio Ruiz Sánchez (9 años)
- **Gerente Compras**: Cristina López Martín (7 años)

## 🏭 Instalaciones (4 Centros)

### Estructura de Datos
```typescript
interface Instalacion {
  id: string;
  nombre: string;
  ubicacion: string;
  direccion: string;
  area: string;
  capacidad: string;
  especialidad: string;
  responsable: string;
  horario: string;
  certificaciones: string[];
  servicios: string[];
  contacto: {
    telefono: string;
    email: string;
  };
  imagen: string;
}
```

### Centros Operativos

1. **Centro de Tratamiento Romeral (Barcelona)**
   - **Ubicación**: Molins de Rei, Barcelona
   - **Área**: 15,000 m² (8,500 m² cubiertos)
   - **Capacidad**: 25,000 t/año
   - **Especialidad**: Residuos peligrosos y laboratorio

2. **Planta de Valorización Coscollar (Valencia)**
   - **Ubicación**: Sagunto, Valencia
   - **Área**: 22,000 m² (12,000 m² cubiertos)
   - **Capacidad**: 35,000 t/año
   - **Especialidad**: Valorización de metales y RAEE

3. **Terminal Logística Encrucillades (Castellón)**
   - **Ubicación**: Castellón de la Plana
   - **Área**: 45,000 m² (18,000 m² cubiertos)
   - **Capacidad**: 60,000 t/año
   - **Especialidad**: Hub logístico y almacenamiento

4. **Centro I+D+i Aldaia (Valencia)**
   - **Ubicación**: Parc Tecnològic de València
   - **Área**: 8,000 m² (6,500 m² cubiertos)
   - **Capacidad**: 5,000 t/año (piloto)
   - **Especialidad**: Investigación y desarrollo

## 🚛 Maquinarias (12 Equipos)

### Estructura de Datos
```typescript
interface Maquinaria {
  id: string;
  nombre: string;
  tipo: string;
  modelo: string;
  capacidad: string;
  año: number;
  estado: 'Operativo' | 'Mantenimiento' | 'Reserva';
  ubicacion: string;
  especificaciones: {
    potencia?: string;
    peso?: string;
    dimensiones?: string;
    combustible?: string;
    rendimiento?: string;
  };
  mantenimiento: {
    ultimo: string;
    proximo: string;
    programa: string;
  };
  operador: string;
  imagen: string;
  inversion: number;
}
```

### Inventario por Categorías

#### **Trituradoras (3 equipos) - €180,000**
- Trituradora Industrial TI-2500 (2019)
- Trituradora de Metales TM-1800 (2020)
- Trituradora Móvil TMV-3000 (2021)

#### **Prensas (3 equipos) - €150,000**
- Prensa Hidráulica PH-500 (2018)
- Prensa de Chatarra PC-800 (2019)
- Prensa Compactadora PCP-400 (2020)

#### **Separadores (3 equipos) - €120,000**
- Separador Magnético SM-1200 (2019)
- Separador de Corrientes SCS-900 (2020)
- Separador Óptico SO-1500 (2021)

#### **Equipos de Transporte (3 equipos) - €180,000**
- Cinta Transportadora CT-2000 (2018)
- Elevador de Cangilones EC-1500 (2019)
- Sistema de Transporte Neumático STP-800 (2020)

**Inversión Total**: €630,000

## ♻️ Residuos (11 Categorías)

### Estructura de Datos
```typescript
interface TipoResiduo {
  id: string;
  nombre: string;
  categoria: 'No Peligroso' | 'Peligroso';
  descripcion: string;
  ejemplos: string[];
  tratamiento: string;
  valorizacion: string;
  normativa: string[];
  imagen: string;
}
```

### Residuos No Peligrosos (6 tipos)
1. **Papel y Cartón**: Recuperación de fibra celulósica
2. **Metales Ferrosos**: Fundición y reutilización
3. **Metales No Ferrosos**: Reciclaje de aluminio, cobre, etc.
4. **Plásticos**: Clasificación y reciclaje por tipos
5. **Madera**: Trituración y reutilización
6. **Lodos Industriales**: Tratamiento y estabilización

### Residuos Peligrosos (5 tipos)
1. **Absorbentes Contaminados**: Tratamiento térmico
2. **Envases Contaminados**: Limpieza y reciclaje
3. **Productos Químicos**: Neutralización y destrucción
4. **Aceites Usados**: Regeneración y valorización
5. **Filtros Contaminados**: Tratamiento especializado

## 🔧 Servicios Especializados

### Estructura de Datos
```typescript
interface Servicio {
  id: string;
  titulo: string;
  descripcion: string;
  detalles: string[];
  beneficios: string[];
  proceso: string[];
  certificaciones: string[];
  casos_uso: string[];
}
```

### Catálogo de Servicios
1. **Gestión de Residuos Peligrosos**
2. **Gestión de Residuos No Peligrosos**
3. **Asesoramiento Técnico**
4. **Servicio de Máquinas**

## 📈 Proyectos y Casos de Éxito

### Estructura de Datos
```typescript
interface Proyecto {
  id: string;
  titulo: string;
  cliente: string;
  fecha: string;
  ubicacion: string;
  sector: string;
  descripcion: string;
  objetivos: string[];
  solucion: string[];
  resultados: {
    residuos_gestionados: string;
    reduccion_emisiones: string;
    ahorro_costes: string;
    tiempo_proyecto: string;
  };
  testimonial?: {
    texto: string;
    autor: string;
    cargo: string;
  };
}
```

### Portfolio Actual
1. **Optimización de Talleres Industriales**
   - Cliente: Grupo Industrial Mediterráneo
   - Sector: Automoción
   - Resultados: 15% reducción costes de gestión

2. **Gestión Integral Industria Logística**
   - Cliente: LogiCorp Valencia
   - Sector: Logística
   - Resultados: 95% tasa de valorización

## 🔄 Gestión y Actualización

### Flujo de Actualización
1. **Editar archivo TypeScript** correspondiente
2. **Verificar tipos** con `npm run type-check`
3. **Probar en desarrollo** con `npm run dev`
4. **Compilar** con `npm run build`

### Ventajas del Sistema
- **Tipado fuerte**: Previene errores de datos
- **Centralizado**: Un solo lugar para cada tipo de información
- **Versionado**: Control con Git
- **Performance**: Carga estática, sin consultas de BD
- **Mantenible**: Fácil de actualizar y revisar

### Expansión Futura
- **Agregar campos**: Modificar interfaces en `types.ts`
- **Nuevas categorías**: Crear nuevos archivos de contenido
- **Validaciones**: Implementar schemas con Zod si necesario
- **CMS**: Migrar a Headless CMS manteniendo tipos
