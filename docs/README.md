# Metalls del Camp - Sitio Web Corporativo

## 🏢 Descripción del Proyecto

Sitio web corporativo para **Metalls del Camp**, empresa especializada en la gestión integral de residuos industriales en la Comunidad Valenciana y Castilla-La Mancha. 

La web presenta los servicios, instalaciones, maquinaria y equipo de la empresa, posicionándola como líder en economía circular y sostenibilidad industrial.

## 🚀 Estado del Proyecto

**✅ COMPLETADO Y FUNCIONAL**

- Todas las funcionalidades implementadas
- Sin errores de compilación
- Optimizado para producción
- Sistema de contenido completo
- Identidad visual integrada

## � Documentación

### 🛠️ Para Desarrolladores
- **[Guía de Desarrollo](./development/DEVELOPMENT.md)** - Setup, arquitectura, componentes
- **[Deployment](./development/DEPLOYMENT.md)** - Configuración de producción y hosting

### 📋 Gestión de Contenido
- **[Sistema de Contenido](./content/CONTENT.md)** - Estructura de datos, equipo, instalaciones
- **[Assets Pendientes](./content/ASSETS.md)** - Imágenes y videos faltantes

### 🎨 Diseño
- **[Sistema de Diseño](./design/DESIGN_SYSTEM.md)** - Colores, tipografía, componentes

## �📋 Información Técnica

### Stack Tecnológico
- **Framework**: Next.js 15.4.6 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: TailwindCSS v4.1 con tema personalizado
- **Componentes**: React 18+ con Server Components
- **Gestión de Contenido**: Sistema basado en TypeScript
- **Optimización**: Componentes con Suspense y carga lazy

### Arquitectura
```
metalls-web/
├── app/                    # App Router (Next.js 15)
├── components/             # Componentes reutilizables
├── content/               # Sistema de contenido TypeScript
├── lib/                   # Utilidades y configuración
├── public/                # Assets estáticos
├── styles/                # Tema TailwindCSS personalizado
└── docs/                  # Documentación del proyecto
```

## 🌐 Páginas Implementadas

### Páginas Principales
- **`/`** - Homepage con hero, instalaciones, equipo y mensaje CEO
- **`/empresa`** - Información corporativa, organigrama y filosofía
- **`/instalaciones`** - 4 centros de tratamiento con detalles técnicos
- **`/maquinarias`** - 12 equipos especializados con especificaciones
- **`/residuos`** - Catálogo de 11 tipos de residuos gestionados
- **`/contacto`** - Formulario de contacto y datos de ubicación

### Páginas de Servicios
- **`/servicios`** - Índice de servicios especializados
- **`/servicios/residuos-peligrosos`** - Gestión de residuos peligrosos
- **`/servicios/residuos-no-peligrosos`** - Gestión de residuos no peligrosos
- **`/servicios/asesoramiento-tecnico`** - Consultoría especializada
- **`/servicios/servicio-de-maquinas`** - Alquiler de maquinaria

### Páginas de Proyectos
- **`/proyectos`** - Portfolio de proyectos
- **`/proyectos/optimizacion-talleres`** - Caso de éxito
- **`/proyectos/industria-logistica`** - Caso de éxito

### Páginas Corporativas
- **`/comerciales`** - Información para el equipo comercial
- **`/clientes`** - Portal de clientes

### Páginas Legales
- **`/aviso-legal`** - Aviso legal completo
- **`/politica-privacidad`** - Política de privacidad
- **`/politica-cookies`** - Política de cookies

## 📊 Métricas de Compilación

```
Route (app)                     Size    First Load JS
┌ ○ /                          2.64 kB      117 kB
├ ○ /empresa                   176 B        115 kB
├ ○ /instalaciones             491 B        105 kB
├ ○ /maquinarias               491 B        105 kB
├ ○ /residuos                  491 B        105 kB
└ ○ /contacto                  145 B        99.8 kB

Total de páginas: 28
Tiempo de compilación: ~3.0s
Estado: ✅ Optimizado para producción
```

## 🎨 Sistema de Diseño

### Colores Corporativos
- **Primario**: Rosa (#DF0A38) - Identidad principal
- **Secundario**: Verde (#007C28) - Sostenibilidad
- **Terciario**: Amarillo (#F7F33A) - Energía
- **Acento**: Morado (#A65FBC) - Innovación

### Tipografía
- **Principal**: Inter (Google Fonts)
- **Código**: JetBrains Mono (Google Fonts)
- **Escalas**: Responsive con clamp()

### Logos y Branding
- Sistema completo de logos organizados por tipo y tamaño
- Variantes: completo, horizontal, blanco, símbolo
- Optimizado para diferentes contextos de uso

## 📱 Características

### Responsive Design
- **Móvil**: Optimizado desde 320px
- **Tablet**: Adaptado para 768px+
- **Desktop**: Experiencia completa 1024px+
- **4K**: Escalado para pantallas grandes

### Performance
- **Server Components**: Renderizado optimizado
- **Lazy Loading**: Carga bajo demanda
- **Image Optimization**: Next.js Image con prioridades
- **Code Splitting**: Bundles optimizados automáticamente

### SEO
- **Meta Tags**: Configurados por página
- **Open Graph**: Preparado para redes sociales
- **Sitemap**: Generación automática
- **Robots.txt**: Configurado para indexación

### Accesibilidad
- **ARIA Labels**: Implementados en navegación
- **Focus Management**: Estilos de foco visibles
- **Alt Text**: Descripciones en todas las imágenes
- **Semantic HTML**: Estructura semánticamente correcta

## 🔧 Comandos Principales

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo (puerto 3000)

# Producción
npm run build        # Compilación optimizada
npm run start        # Servidor de producción

# Calidad de código
npm run lint         # ESLint
npm run type-check   # TypeScript
```

## 📈 Estado Actual

### ✅ Completado
- [x] Todas las páginas implementadas
- [x] Sistema de contenido funcional
- [x] Componentes reutilizables
- [x] Sistema de logos completo
- [x] Estilos personalizados
- [x] Navegación completa
- [x] Formulario de contacto
- [x] SEO básico configurado
- [x] Responsive design
- [x] Compilación sin errores

### 📋 Pendiente (Assets)
- [ ] Imágenes de instalaciones (4 fotos)
- [ ] Fotos del equipo (19 personas)
- [ ] Imágenes de maquinaria (12 equipos)
- [ ] Fotos de tipos de residuos (11 categorías)
- [ ] Video hero para la homepage
- [ ] Imagen Open Graph para redes sociales

## 🚀 Próximos Pasos

1. **Integración de imágenes reales** cuando estén disponibles
2. **Configuración de analytics** (Google Analytics/Tag Manager)
3. **Optimización SEO avanzada** (meta descriptions específicas)
4. **Integración de formularios** con backend/CRM
5. **Configuración de hosting** y dominio personalizado

## 📞 Contacto Técnico

**Desarrollado por**: Aperture Technologies  
**Tecnologías**: Next.js 15, TypeScript, TailwindCSS  
**Estado**: Listo para producción  
**Última actualización**: Agosto 2025
