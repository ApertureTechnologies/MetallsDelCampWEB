# Guía de Desarrollo - Metalls del Camp

## 🛠️ Configuración del Entorno

### Requisitos Previos
- **Node.js**: 18.17+ o 20.0+
- **npm**: 9.0+ (incluido con Node.js)
- **Git**: Para control de versiones

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/ApertureTechnologies/MetallsDelCampWEB.git

# Navegar al directorio
cd MetallsDelCampWEB/metalls-web

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 📁 Estructura del Proyecto

```
metalls-web/
├── app/                          # Next.js App Router
│   ├── (site)/                  # Grupo de rutas con layout
│   │   ├── layout.tsx           # Layout con Header/Footer
│   │   ├── page.tsx             # Homepage
│   │   ├── empresa/             # Página empresa
│   │   ├── instalaciones/       # Página instalaciones
│   │   ├── maquinarias/         # Página maquinarias
│   │   ├── residuos/            # Página residuos
│   │   └── contacto/            # Página contacto
│   ├── servicios/               # Páginas de servicios
│   ├── proyectos/               # Páginas de proyectos
│   ├── legal/                   # Páginas legales
│   ├── layout.tsx               # Layout raíz
│   ├── globals.css              # Estilos globales
│   └── favicon.ico              # Favicon principal
├── components/                   # Componentes React
│   ├── Header.tsx               # Navegación principal
│   ├── Footer.tsx               # Pie de página
│   ├── Logo.tsx                 # Sistema de logos
│   ├── HeroVideo.tsx            # Hero con video
│   ├── InstallationsGrid.tsx    # Grid de instalaciones
│   ├── OrgChart.tsx             # Organigrama
│   ├── CEOMessage.tsx           # Mensaje del CEO
│   └── Philosophy.tsx           # Filosofía empresarial
├── content/                      # Sistema de contenido
│   ├── equipo.ts                # Datos del equipo (19 personas)
│   ├── instalaciones.ts         # Datos instalaciones (4 centros)
│   ├── maquinarias.ts           # Datos maquinaria (12 equipos)
│   ├── residuos.ts              # Tipos de residuos (11 categorías)
│   ├── servicios.ts             # Servicios especializados
│   └── proyectos.ts             # Portfolio de proyectos
├── lib/                          # Utilidades y configuración
│   ├── content/                 # Loaders de contenido
│   │   ├── loaders.ts           # Funciones de carga
│   │   └── types.ts             # Definiciones TypeScript
│   └── logos.ts                 # Configuración de logos
├── public/                       # Assets estáticos
│   └── brand/                   # Recursos de marca
│       ├── logos/               # Sistema de logos organizado
│       ├── instalaciones/       # Imágenes instalaciones (pendiente)
│       ├── team/                # Fotos equipo (pendiente)
│       ├── maq/                 # Imágenes maquinaria (pendiente)
│       └── residuos/            # Imágenes residuos (pendiente)
├── styles/                       # Configuración de estilos
│   └── theme.css                # Tema TailwindCSS personalizado
└── docs/                         # Documentación del proyecto
```

## 🧩 Arquitectura de Componentes

### Componentes de Layout
```tsx
// Layout principal con Header/Footer
app/(site)/layout.tsx
├── Header.tsx                   # Navegación responsive
└── Footer.tsx                   # Información corporativa
```

### Componentes de Contenido
```tsx
// Homepage
page.tsx
├── HeroVideo.tsx               # Hero con video de fondo
├── InstallationsGrid.tsx       # Grid de 4 instalaciones
├── OrgChart.tsx                # Organigrama del equipo
├── CEOMessage.tsx              # Mensaje personalizado del CEO
└── Philosophy.tsx              # Valores y filosofía
```

### Sistema de Logos
```tsx
// Componente base configurable
Logo.tsx
├── HeaderLogo                  # Logo horizontal para navegación
├── FooterLogo                  # Logo completo para footer
├── HeroLogo                    # Logo grande para heroes
└── IconLogo                    # Símbolo para iconos
```

## 📊 Sistema de Contenido

### Arquitectura TypeScript
El contenido está completamente tipado y centralizado:

```typescript
// Tipos principales
interface Persona {
  id: string;
  nombre: string;
  cargo: string;
  experiencia: string;
  // ... más propiedades
}

interface Instalacion {
  id: string;
  nombre: string;
  ubicacion: string;
  capacidad: string;
  // ... más propiedades
}
```

### Archivos de Contenido

1. **`content/equipo.ts`**: 19 perfiles de equipo
2. **`content/instalaciones.ts`**: 4 centros de tratamiento
3. **`content/maquinarias.ts`**: 12 equipos especializados
4. **`content/residuos.ts`**: 11 tipos de residuos
5. **`content/servicios.ts`**: Servicios especializados
6. **`content/proyectos.ts`**: Portfolio de proyectos

### Configuración Central
```typescript
// brand.config.ts - Hub central de toda la información
export default {
  company: { /* datos corporativos */ },
  contact: { /* información de contacto */ },
  seo: { /* configuración SEO */ },
  content: { /* configuración de contenido */ }
}
```

## 🎨 Sistema de Estilos

### TailwindCSS Personalizado
```css
/* styles/theme.css */
@theme {
  --color-primary: #DF0A38;      /* Rosa corporativo */
  --color-secondary: #007C28;    /* Verde sostenibilidad */
  --color-tertiary: #F7F33A;     /* Amarillo energía */
  --color-accent: #A65FBC;       /* Morado innovación */
}
```

### Clases Personalizadas
- Gradientes corporativos
- Sombras personalizadas
- Espaciado específico
- Tipografía responsive

### Componentes con Variantes
```tsx
// Ejemplo de uso de clases dinámicas
className={`
  bg-gradient-to-br 
  from-primary-50 to-secondary-50
  hover:from-primary-100 hover:to-secondary-100
  transition-all duration-300
`}
```

## 🔄 Flujo de Datos

### Carga de Contenido
```typescript
// lib/content/loaders.ts
export function getSiteContent() {
  return {
    equipo: getAllEquipo(),
    instalaciones: getAllInstalaciones(),
    maquinarias: getAllMaquinarias(),
    residuos: getAllResiduos(),
    // ...
  }
}
```

### Server Components
```tsx
// Componentes del servidor (por defecto)
export default function HomePage() {
  const content = getSiteContent(); // Ejecutado en servidor
  
  return (
    <Suspense fallback={<Loading />}>
      <InstallationsGrid instalaciones={content.instalaciones} />
    </Suspense>
  );
}
```

### Client Components
```tsx
// Componentes del cliente (cuando sea necesario)
'use client';

export default function InteractiveComponent() {
  const [state, setState] = useState();
  // Lógica del cliente
}
```

## 🚀 Optimización

### Performance
- **Server Components**: Renderizado en servidor por defecto
- **Suspense Boundaries**: Carga progresiva de componentes
- **Image Optimization**: Next.js Image con lazy loading
- **Bundle Splitting**: Automático por rutas

### SEO
```typescript
// Configuración por página
export const metadata: Metadata = {
  title: 'Título específico',
  description: 'Descripción optimizada',
  openGraph: { /* configuración OG */ }
}
```

## 🧪 Testing y Calidad

### Scripts Disponibles
```bash
npm run lint          # ESLint para calidad de código
npm run type-check    # Verificación TypeScript
npm run build         # Compilación optimizada
```

### Configuración ESLint
- Reglas para Next.js 15
- Configuración TypeScript
- Hooks de React
- Accesibilidad básica

## 📱 Responsive Design

### Breakpoints TailwindCSS
```css
sm:   640px   /* Móvil grande */
md:   768px   /* Tablet */
lg:   1024px  /* Desktop */
xl:   1280px  /* Desktop grande */
2xl:  1536px  /* 4K */
```

### Patrones Responsive
```tsx
// Grid responsive típico
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>

// Navegación responsive
<nav className="hidden lg:flex lg:space-x-8">
  {/* Desktop nav */}
</nav>
```

## 🔧 Comandos de Desarrollo

### Desarrollo Local
```bash
npm run dev           # http://localhost:3000
npm run dev -- -p 3001   # Puerto personalizado
```

### Compilación
```bash
npm run build         # Compilación optimizada
npm run start         # Servidor de producción
npm run analyze       # Análisis de bundle (si configurado)
```

### Depuración
```bash
npm run lint -- --fix    # Corregir problemas automáticamente
npm run type-check       # Verificar tipos sin compilar
```

## 📋 Convenciones de Código

### Nombres de Archivos
- **Componentes**: PascalCase (`Header.tsx`)
- **Páginas**: lowercase (`page.tsx`)
- **Utilidades**: camelCase (`loaders.ts`)
- **Tipos**: types.ts por módulo

### Estructura de Componentes
```tsx
// Imports
import React from 'react';
import type { ComponentProps } from './types';

// Interfaz (si es necesaria)
interface Props {
  // tipos específicos
}

// Componente principal
export default function Component({ prop }: Props) {
  return <div>Contenido</div>;
}

// Exports nombrados (si hay)
export { SubComponent };
```

### Gestión de Estado
- **Server State**: Contenido cargado en servidor
- **Client State**: useState para interacciones locales
- **No se necesita**: Redux/Zustand (proyecto de contenido estático)

## 🔗 Recursos Útiles

- [Next.js Docs](https://nextjs.org/docs)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React 18 Features](https://react.dev/blog/2022/03/29/react-v18)
