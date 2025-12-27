# MARTIN BOSSI SRL | Landing Page Corporativa

## Overview / Contexto de Negocio

Landing page corporativa desarrollada como **Single Page Application (SPA)** para *Martin Bossi SRL*, empresa especializada en **importación, exportación y gestión aduanera**.

El sitio funciona como **herramienta comercial y de generación de leads**, con foco en:
- Claridad de servicios
- Construcción de confianza
- Experiencia de usuario fluida
- Performance y percepción premium de marca

Está pensada para **empresas, pymes y emprendedores** que necesitan acompañamiento en operaciones de comercio internacional.

---

## Objetivos del Proyecto

- **Lead Generation:** captación de potenciales clientes mediante formulario de contacto  
- **Comunicación de Servicios:** importación, despacho aduanero y logística  
- **Brand Trust:** transmitir profesionalismo, proceso y transparencia  
- **Engagement:** navegación fluida, animaciones suaves y scroll inteligente  
- **Escalabilidad:** arquitectura mantenible y preparada para crecer  

---

## Stack Tecnológico

| Categoría | Tecnología | Rol |
|--------|-----------|-----|
| Framework | React 19 | Arquitectura de componentes |
| Bundler | Vite | Build rápido y optimizado |
| Routing | React Router DOM | Navegación client-side |
| Estilos | Tailwind CSS | Diseño utility-first |
| Animaciones | GSAP + ScrollTrigger | Animaciones avanzadas |
| Scroll Suave | Lenis | Experiencia de navegación |
| Formularios | EmailJS | Envío sin backend |
| Notificaciones | Sonner | Feedback visual |
| Tipografía | Google Fonts (Inter) | Consistencia visual |

---

## Arquitectura de la Aplicación

La aplicación sigue una **arquitectura basada en componentes**, con separación clara de responsabilidades.

### Principios clave:
- Lazy Loading estratégico para secciones secundarias  
- Code Splitting por ruta y componente  
- Componentes reutilizables  
- Sin estado global (no requerido para esta escala)  

### Rutas principales:
- `/` → Home  
- `/politica-de-privacidad` → Política de Privacidad  

---

## Navegación y UX

- Navegación por anclas con scroll suave  
- Sistema híbrido:
  - Routing entre páginas  
  - Scroll interno entre secciones  
- Persistencia de navegación con `sessionStorage`  
- Navbar animado con GSAP  

---

## Secciones del Home

| Sección | Rol |
|------|-----|
| Navbar | Navegación persistente |
| Hero | Propuesta de valor |
| Benefits | Diferenciales |
| About Us | Proceso |
| Services | Servicios |
| FAQ | Preguntas frecuentes |
| Contact CTA | Conversión |
| Footer | Información legal y mapa |

---

## Sistema de Animaciones

Arquitectura en dos capas:

**GSAP**
- Animaciones de entrada
- Timelines coordinadas
- ScrollTrigger

**CSS**
- Hover states
- Transiciones simples
- Modal de contacto

---

## Performance y Optimización

- Lazy loading
- Imágenes WebP optimizadas
- Preload de assets clave
- Tailwind purge en producción
- Event listeners pasivos

---

## Instalación

```bash
git clone https://github.com/tu-usuario/martin-bossi-landing.git
cd martin-bossi-landing
npm install
npm run dev
```

Servidor:
```
http://localhost:5173
```

---

## Variables de Entorno

```env
VITE_EMAILJS_SERVICE_ID=xxxx
VITE_EMAILJS_TEMPLATE_ID=xxxx
VITE_EMAILJS_PUBLIC_KEY=xxxx
```

---

## Build & Deploy

```bash
npm run build
npm run preview
```

---

## Autor

**Pablo Fabbian**  
Frontend Developer · React  

LinkedIn: https://linkedin.com/in/pablofabbian  
Email: pablo.fabbian@gmail.com
