# Sistema de Diseño - Metalls del Camp

## 🎨 Identidad Visual

### Filosofía de Diseño
El diseño refleja los **valores corporativos** de Metalls del Camp: sostenibilidad, innovación, profesionalidad y compromiso ambiental. La paleta de colores representa la economía circular y la transformación de residuos en recursos.

## 🌈 Paleta de Colores

### Colores Corporativos

#### 🌹 Color Primario - Rosa Corporativo
```css
--color-primary: #DF0A38
```
- **Uso**: Identidad principal, CTAs, elementos destacados
- **Simbolismo**: Energía, pasión, compromiso
- **Aplicación**: Botones principales, enlaces, destacados

#### 🌿 Color Secundario - Verde Sostenibilidad  
```css
--color-secondary: #007C28
```
- **Uso**: Elementos relacionados con sostenibilidad
- **Simbolismo**: Naturaleza, reciclaje, economía circular
- **Aplicación**: Iconos eco, badges de certificación

#### ⚡ Color Terciario - Amarillo Energía
```css
--color-tertiary: #F7F33A
```
- **Uso**: Elementos de atención, alertas positivas
- **Simbolismo**: Innovación, eficiencia energética
- **Aplicación**: Destacados, métricas importantes

#### 💜 Color Acento - Morado Innovación
```css
--color-accent: #A65FBC
```
- **Uso**: Elementos tecnológicos, innovación
- **Simbolismo**: Tecnología, I+D+i, futuro
- **Aplicación**: Secciones tech, badges premium

### Escalas de Color

#### Rosa Primario (50-950)
```css
--color-primary-50: #FCCFD9    /* Fondos suaves */
--color-primary-100: #FCCFD9   /* Fondos claros */
--color-primary-200: #FCCFD9   /* Bordes suaves */
--color-primary-300: #EE6B88   /* Elementos secundarios */
--color-primary-400: #EE6B88   /* Estados hover */
--color-primary-500: #DF0A38   /* Color principal */
--color-primary-600: #DF0A38   /* Estados activos */
--color-primary-700: #DF0A38   /* Textos principales */
--color-primary-800: #260007   /* Textos fuertes */
--color-primary-900: #260007   /* Textos máximo contraste */
--color-primary-950: #260007   /* Fondos oscuros */
```

#### Verde Secundario (50-950)
```css
--color-secondary-50: #D9FCE5   /* Fondos eco suaves */
--color-secondary-100: #D9FCE5  /* Fondos eco claros */
--color-secondary-200: #9BF6B9  /* Bordes eco */
--color-secondary-300: #9BF6B9  /* Elementos eco secundarios */
--color-secondary-400: #9BF6B9  /* Estados eco hover */
--color-secondary-500: #007C28  /* Verde principal */
--color-secondary-600: #007C28  /* Estados eco activos */
--color-secondary-700: #007C28  /* Textos eco */
--color-secondary-800: #00260C  /* Textos eco fuertes */
--color-secondary-900: #00260C  /* Textos eco máximo */
--color-secondary-950: #00260C  /* Fondos eco oscuros */
```

## 🖋️ Tipografía

### Fuentes Principales

#### **Inter** - Fuente Principal
```css
font-family: 'Inter', sans-serif;
```
- **Uso**: Textos corporativos, navegación, contenido
- **Características**: Moderna, legible, profesional
- **Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

#### **JetBrains Mono** - Fuente Técnica
```css
font-family: 'JetBrains Mono', monospace;
```
- **Uso**: Códigos, especificaciones técnicas, datos
- **Características**: Monoespaciada, técnica
- **Weights**: 400 (regular), 500 (medium)

### Escalas Tipográficas

#### Títulos y Encabezados
```css
/* H1 - Títulos principales */
font-size: clamp(2rem, 4vw, 3.5rem);
font-weight: 700;
line-height: 1.1;

/* H2 - Títulos de sección */
font-size: clamp(1.5rem, 3vw, 2.5rem);
font-weight: 600;
line-height: 1.2;

/* H3 - Subtítulos */
font-size: clamp(1.25rem, 2.5vw, 2rem);
font-weight: 600;
line-height: 1.3;

/* H4 - Títulos menores */
font-size: clamp(1.125rem, 2vw, 1.5rem);
font-weight: 500;
line-height: 1.4;
```

#### Textos de Contenido
```css
/* Texto principal */
font-size: clamp(1rem, 1.5vw, 1.125rem);
line-height: 1.6;

/* Texto pequeño */
font-size: clamp(0.875rem, 1.25vw, 1rem);
line-height: 1.5;

/* Texto micro */
font-size: clamp(0.75rem, 1vw, 0.875rem);
line-height: 1.4;
```

## 🎭 Componentes de UI

### Botones

#### Primario
```css
.btn-primary {
  background: linear-gradient(135deg, #DF0A38, #A65FBC);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(223, 10, 56, 0.3);
}
```

#### Secundario
```css
.btn-secondary {
  background: transparent;
  color: #007C28;
  border: 2px solid #007C28;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #007C28;
  color: white;
}
```

### Cards (Tarjetas)

#### Card Básica
```css
.card {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}
```

#### Card con Gradiente
```css
.card-gradient {
  background: linear-gradient(135deg, #FCCFD9, #D9FCE5);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}
```

### Navegación

#### Header
```css
.header {
  background: black;
  color: white;
  height: 4rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-link {
  color: white;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #DF0A38;
}
```

## 🌅 Gradientes Corporativos

### Gradientes Principales

#### Rosa-Morado (Primario)
```css
background: linear-gradient(135deg, #DF0A38, #A65FBC);
```
- **Uso**: Botones primarios, CTAs, elementos destacados

#### Verde-Amarillo (Sostenibilidad)
```css
background: linear-gradient(135deg, #007C28, #F7F33A);
```
- **Uso**: Secciones ambientales, certificaciones

#### Fondos Suaves
```css
background: linear-gradient(135deg, #FCCFD9, #D9FCE5);
```
- **Uso**: Fondos de sección, cards, areas de contenido

### Gradientes de Fondo

#### Hero Sections
```css
background: linear-gradient(
  135deg, 
  rgba(223, 10, 56, 0.9), 
  rgba(166, 95, 188, 0.9)
);
```

#### Overlays
```css
background: linear-gradient(
  to bottom,
  rgba(0, 0, 0, 0.4),
  rgba(0, 0, 0, 0.7)
);
```

## 📏 Espaciado y Layout

### Sistema de Espaciado
```css
/* Espaciado base */
--spacing-xs: 0.25rem;    /* 4px */
--spacing-sm: 0.5rem;     /* 8px */
--spacing-md: 1rem;       /* 16px */
--spacing-lg: 1.5rem;     /* 24px */
--spacing-xl: 2rem;       /* 32px */
--spacing-2xl: 3rem;      /* 48px */
--spacing-3xl: 4rem;      /* 64px */
--spacing-4xl: 6rem;      /* 96px */
```

### Grid System
```css
/* Container principal */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Grid responsive */
.grid-responsive {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
```

### Breakpoints
```css
/* Mobile First */
@media (min-width: 640px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

## 🖼️ Sistema de Logos

### Variantes Disponibles

#### Logo Completo
- **Uso**: Footer, páginas principales, materiales corporativos
- **Tamaños**: 100x71, 150x106, 300x212, 500x353
- **Formato**: PNG con transparencia

#### Logo Horizontal
- **Uso**: Header, navegación, firmas de email
- **Tamaños**: 243x33, 433x58, 546x73
- **Formato**: PNG con transparencia

#### Logo Blanco
- **Uso**: Fondos oscuros, videos, materiales especiales
- **Tamaños**: 120x14, 300x35, 500x58
- **Formato**: PNG con transparencia

#### Símbolo/Icono
- **Uso**: Favicons, iconos de app, badges pequeños
- **Tamaños**: 80x77, 150x144, 300x289, 500x481
- **Formato**: PNG con transparencia

### Uso Responsivo
```tsx
// Mobile: Logo horizontal pequeño
<Logo type="horizontal" size="small" />

// Desktop: Logo horizontal mediano  
<Logo type="horizontal" size="medium" />

// Footer: Logo completo
<Logo type="completo" size="medium" />
```

## 🎬 Animaciones y Transiciones

### Transiciones Base
```css
.transition-base {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.transition-fast {
  transition: all 0.15s ease-out;
}

.transition-slow {
  transition: all 0.5s ease-in-out;
}
```

### Efectos Hover
```css
.hover-lift:hover {
  transform: translateY(-4px);
}

.hover-scale:hover {
  transform: scale(1.05);
}

.hover-glow:hover {
  box-shadow: 0 0 20px rgba(223, 10, 56, 0.3);
}
```

### Animaciones de Entrada
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}
```

## 📱 Responsive Design

### Principios
1. **Mobile First**: Diseñar primero para móvil
2. **Progressive Enhancement**: Mejorar para pantallas grandes
3. **Contenido Adaptativo**: Priorizar información por dispositivo
4. **Performance**: Optimizar carga en dispositivos móviles

### Patrones de Layout

#### Stack to Grid
```css
/* Móvil: Stack vertical */
.layout-responsive {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Desktop: Grid horizontal */
@media (min-width: 768px) {
  .layout-responsive {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
  }
}
```

#### Hide/Show Elements
```css
.mobile-only {
  display: block;
}

.desktop-only {
  display: none;
}

@media (min-width: 768px) {
  .mobile-only {
    display: none;
  }
  
  .desktop-only {
    display: block;
  }
}
```

## ♿ Accesibilidad

### Contraste de Colores
- **Ratio mínimo**: 4.5:1 para texto normal
- **Ratio alto**: 7:1 para texto importante
- **Verificado**: Todos los colores cumplen WCAG 2.1 AA

### Estados de Foco
```css
:focus-visible {
  outline: 2px solid #DF0A38;
  outline-offset: 2px;
}
```

### Texto Alternativo
- Todas las imágenes tienen `alt` descriptivo
- Iconos decorativos usan `aria-hidden="true"`
- Logos incluyen texto alternativo corporativo

### Navegación
- Estructura semántica con `nav`, `main`, `section`
- Skip links para navegación por teclado
- ARIA labels en elementos interactivos

## 🎯 Mejores Prácticas

### Consistencia Visual
1. **Usar variables CSS** para colores y espaciado
2. **Mantener jerarquía** tipográfica consistente
3. **Aplicar efectos hover** uniformemente
4. **Respetar el sistema de grid** establecido

### Performance de Estilos
1. **Minimizar repaints** con `transform` y `opacity`
2. **Usar `will-change`** solo cuando sea necesario
3. **Optimizar gradientes** para dispositivos móviles
4. **Lazy load** de estilos no críticos

### Mantenimiento
1. **Documentar cambios** en variables
2. **Testear en dispositivos reales**
3. **Verificar accesibilidad** en cada cambio
4. **Mantener consistencia** con la guía de marca
