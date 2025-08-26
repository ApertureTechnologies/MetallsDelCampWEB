# Reorganización de archivos multimedia - Metalls del Camp

## 📁 Estructura actualizada:

### Videos
- `public/videos/hero-video.mp4` ← `HeroVideoMetalls.mp4` (renombrado y movido)

### Imágenes
- `public/brand/img_catalogo.jpg` ← `images/img_catalogo.jpg` (movido)
- `public/images/bg-maquinarias.png` ✅ (ya existía)
- `public/images/bg-instalaciones.png` ✅ (ya existía)  
- `public/images/bg-residuos.png` ✅ (ya existía)

### Favicons
- `app/favicon.ico` ← `brand/Logo Metalls/favicon/favicon 48 x 48.ico` (actualizado)
- `public/favicon-16x16.png` ← `brand/Logo Metalls/favicon/favicon-16x16.png` (copiado)

## 🔧 Cambios en componentes:

### HeroVideo.tsx
- ❌ Eliminado: YouTube embed (`youtubeVideoId`, iframe)
- ✅ Agregado: Video HTML5 nativo con `/videos/hero-video.mp4`
- ✅ Agregado: Controles nativos de video (play, pause, fullscreen)
- ✅ Agregado: Botón de cerrar video con icono X
- ✅ Agregado: useRef para control programático del video
- ✅ Agregado: Estados para isPlaying y showVideoPlayer
- ✅ Agregado: Event handlers (onPlay, onPause, onEnded)

### Funcionalidades del nuevo video:
- **Autoplay muted**: Se inicia automáticamente sin sonido
- **Controles nativos**: Play, pause, scrubbing, fullscreen
- **Responsive**: Se adapta al tamaño del contenedor
- **object-cover**: Mantiene aspecto sin deformación
- **Botón cerrar**: Cierra el video y resetea a posición inicial
- **Estados sincronizados**: Botón play/pause refleja estado real

## 🎯 Beneficios de los cambios:

1. **Performance**: Video local es más rápido que YouTube embed
2. **Control total**: No depende de APIs externas
3. **Privacidad**: No tracking de YouTube
4. **Offline**: Funciona sin conexión a internet
5. **Branding**: Video corporativo propio
6. **SEO**: Mejor para motores de búsqueda
7. **Favicon**: Logo oficial de la empresa

## 🚀 URLs para probar:
- **Homepage con video**: http://localhost:3001
- **Maquinarias**: http://localhost:3001/maquinarias  
- **Instalaciones**: http://localhost:3001/instalaciones
- **Residuos**: http://localhost:3001/residuos
