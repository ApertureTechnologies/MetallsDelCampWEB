# Deployment y Configuración - Metalls del Camp

## 🚀 Estado de Producción

### ✅ Listo para Deploy
El proyecto está **completamente preparado** para ser desplegado en producción:

- ✅ Compilación exitosa sin errores
- ✅ Optimización automática de Next.js 15
- ✅ Assets organizados y optimizados
- ✅ SEO básico configurado
- ✅ Responsive design implementado
- ✅ Performance optimizada

## 📋 Opciones de Hosting

### 1. Vercel (Recomendado) ⭐
**Ventajas:**
- Integración nativa con Next.js
- Deploy automático desde Git
- CDN global incluido
- SSL automático
- Analytics integrados

**Configuración:**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy desde el directorio del proyecto
cd metalls-web
vercel

# Configurar dominio personalizado
vercel domains add metallsdelcamp.com
```

**Configuración de Environment:**
```bash
# En Vercel Dashboard
NEXT_PUBLIC_SITE_URL=https://metallsdelcamp.com
```

### 2. Netlify
**Ventajas:**
- Fácil configuración
- Forms handling incluido
- Branch deploys
- Edge functions

**Configuración:**
```toml
# netlify.toml
[build]
  publish = ".next"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. Hosting Tradicional (cPanel/Apache)
**Configuración:**
```bash
# Build estático
npm run build
npm run export  # Si se configura export estático

# Subir carpeta 'out' al public_html
```

## 🔧 Configuración de Dominio

### DNS Records
```
A Record:     @ → IP del servidor
CNAME Record: www → metallsdelcamp.com
```

### SSL Certificate
- **Automático**: Con Vercel/Netlify
- **Manual**: Let's Encrypt o certificado comercial

## 📊 Environment Variables

### Variables de Producción
```bash
# .env.production
NEXT_PUBLIC_SITE_URL=https://metallsdelcamp.com
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX  # Google Analytics (opcional)
```

### Variables de Desarrollo
```bash
# .env.local
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🔍 SEO y Analytics

### Google Analytics (Opcional)
```typescript
// Configuración en layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

### Google Search Console
1. Verificar propiedad del dominio
2. Subir sitemap: `https://metallsdelcamp.com/sitemap.xml`
3. Configurar robots.txt

### Meta Tags Configurados
```typescript
// Cada página incluye:
export const metadata: Metadata = {
  title: 'Título específico',
  description: 'Descripción optimizada para SEO',
  openGraph: {
    title: 'Título para redes sociales',
    description: 'Descripción para redes sociales',
    images: ['/brand/og-image.jpg'],
  },
}
```

## 📱 Performance Optimizations

### Next.js Optimizations (Incluidas)
- **Image Optimization**: Automática con next/image
- **Font Optimization**: Google Fonts optimizadas
- **Bundle Splitting**: Automático por rutas
- **Static Generation**: Páginas estáticas cuando es posible

### Métricas Actuales
```
Lighthouse Score (estimado):
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 90+
```

### Optimizaciones Implementadas
- Lazy loading de imágenes
- Preload de fuentes críticas
- Minimización de CSS/JS
- Compresión de assets
- Tree shaking automático

## 🔒 Seguridad

### Headers de Seguridad
```javascript
// next.config.ts
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
]
```

### Validación de Formularios
- Validación client-side implementada
- Sanitización de inputs
- Rate limiting recomendado en API

## 📧 Configuración de Emails

### Formulario de Contacto
**Actual**: Mailto links y tel links
**Recomendado para producción**: 

#### Opción 1: Formspree
```typescript
// Configuración simple
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  {/* campos del formulario */}
</form>
```

#### Opción 2: Netlify Forms
```html
<form name="contact" method="POST" data-netlify="true">
  {/* campos del formulario */}
</form>
```

#### Opción 3: API Route personalizada
```typescript
// app/api/contact/route.ts
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const data = await request.formData()
  // Procesar y enviar email
}
```

## 🌐 CDN y Assets

### Assets Estáticos
```
public/
├── brand/           # Logos y recursos de marca
├── favicon.ico      # Favicon principal
└── robots.txt       # SEO configuration
```

### Optimización de Imágenes
- **Formato**: WebP automático con Next.js Image
- **Tamaños**: Responsive breakpoints automáticos
- **Carga**: Lazy loading por defecto
- **Prioridad**: Critical images marcadas con priority

## 🔄 CI/CD Pipeline

### GitHub Actions (Recomendado)
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
```

### Automated Testing
```yaml
# Agregar al workflow
- name: Type Check
  run: npm run type-check

- name: Lint
  run: npm run lint

- name: Build Test
  run: npm run build
```

## 📊 Monitoring y Analytics

### Error Tracking (Opcional)
```bash
# Sentry para tracking de errores
npm install @sentry/nextjs

# Configuración básica
npx @sentry/wizard -i nextjs
```

### Performance Monitoring
- **Vercel Analytics**: Incluido con hosting
- **Google PageSpeed Insights**: Monitoreo manual
- **Web Vitals**: Métricas automáticas

## 🚀 Pasos para Deploy

### Pre-Deploy Checklist
- [ ] Verificar que `npm run build` funciona sin errores
- [ ] Comprobar que todas las rutas cargan correctamente
- [ ] Validar formularios y enlaces
- [ ] Revisar responsive design en dispositivos reales
- [ ] Confirmar que los meta tags están correctos

### Deploy Steps

#### Para Vercel:
1. **Conectar repositorio** en Vercel Dashboard
2. **Configurar build settings**:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm ci`
3. **Configurar variables de entorno**
4. **Deploy automático** en cada push a main

#### Para otros hosts:
1. **Build del proyecto**: `npm run build`
2. **Subir archivos** de la carpeta `.next` y `public`
3. **Configurar redirects** para SPA routing
4. **Configurar SSL** y dominio

### Post-Deploy
1. **Verificar todas las páginas** funcionan correctamente
2. **Testear formulario de contacto**
3. **Comprobar performance** con Lighthouse
4. **Configurar Google Search Console**
5. **Configurar analytics** si se requiere

## 📞 Soporte y Mantenimiento

### Actualizaciones Regulares
```bash
# Verificar dependencias outdated
npm outdated

# Actualizar dependencias menores
npm update

# Actualizar Next.js (revisar changelog)
npm install next@latest
```

### Backup y Versionado
- **Git**: Control de versiones completo
- **Database**: No aplicable (contenido estático)
- **Assets**: Versionados en Git

### Contacto Técnico
- **Desarrollado por**: Aperture Technologies
- **Stack**: Next.js 15, TypeScript, TailwindCSS
- **Estado**: ✅ Listo para producción
