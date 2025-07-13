# MARTIN BOSSI SRL | Landing Page

## Descripción del Proyecto

Diseño y desarrollo de una landing page corporativa desde cero para una SRL dedicada a brindar servicios de importación para empresas, pymes y emprendedores. El sitio está desarrollado con tecnologías modernas como **React** y **Tailwind CSS**, enfocado en experiencia de usuario, diseño responsive y navegación clara.  
Incluye integración de animaciones con **Framer Motion**, formulario funcional con **EmailJS**, y un mapa de ubicación embebido de Google Maps, siguiendo el croquis e instrucciones del cliente.

---

## Tabla de Contenidos

- [Tecnologías](#tecnologías)
- [Características Principales](#características-principales)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Variables de Entorno](#variables-de-entorno)
- [Despliegue](#despliegue)
- [Contribuciones](#contribuciones)
- [Contacto](#contacto)

## Tecnologías

- React
- Tailwind CSS
- Framer Motion (para animaciones suaves y efectivas)
- EmailJS (envío de formularios sin backend)
- Google Maps Embed API (mapa interactivo de ubicación)
- Vite (bundler y servidor de desarrollo ultra rápido)
- Sonner (notificaciones visuales)

## Características Principales

- Diseño profesional, responsive y accesible con Tailwind CSS
- Navegación por anclas con scroll suave y menú móvil tipo overlay
- Rotador dinámico de frases e imágenes en sección "Cotizá tu operación"
- Formulario de contacto con validación y envío vía EmailJS
- Integración de Google Maps embebido con ubicación del cliente
- Animaciones fluidas con Framer Motion en componentes clave
- SEO y optimización para rendimiento (Lighthouse 99+)
- Deploy listo para producción y hosting en plataforma elegida

## Instalación

Sigue estos pasos para instalar y correr el proyecto localmente:

1. Cloná el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/martin-bossi-landing.git
   cd martin-bossi-landing
   ```

2. Instalá las dependencias:

   ```bash
   npm install
   ```

3. Configurá las variables de entorno (ver sección Variables de Entorno).

4. Iniciá el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abrí tu navegador y visitá:
   ```
   http://localhost:5173
   ```

## Uso

- Navegá por las secciones mediante el menú superior o desplazamiento por anclas.
- Probá el formulario de contacto, completando los campos y enviando para verificar la integración con EmailJS.
- Explorá las animaciones y rotadores para ver el dinamismo del sitio.
- Consultá el mapa embebido para la ubicación física del cliente.

## Estructura del Proyecto

```
martin-bossi-landing/
├── public/                     # Archivos estáticos (favicon, imágenes, etc.)
├── src/
│   ├── components/             # Componentes React reutilizables
│   ├── assets/                 # Imágenes, íconos y SVGs
│   ├── pages/                  # Vistas y secciones del sitio
│   ├── styles/                 # Archivos CSS / Tailwind config
│   ├── utils/                  # Funciones auxiliares y hooks personalizados
│   ├── App.jsx                 # Componente raíz
│   └── main.jsx                # Punto de entrada React + Vite
├── .env                       # Variables de entorno (no versionar)
├── .gitignore                 # Ignorar node_modules, dist, .env, etc.
├── package.json               # Dependencias y scripts
├── tailwind.config.js         # Configuración Tailwind CSS
└── vite.config.js             # Configuración Vite
```

## Variables de Entorno

Para que el formulario y el mapa funcionen correctamente, necesitás configurar estas variables:

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
VITE_GOOGLE_MAPS_API_KEY=tu_api_key
```

**Importante:** Nunca subas este archivo `.env` al repositorio público. Está incluido en `.gitignore`.

## Despliegue

Para preparar el proyecto para producción:

```bash
npm run build
```

Esto generará una carpeta `dist/` optimizada para ser subida a tu hosting (Netlify, Vercel, GitHub Pages, etc.).

## Contribuciones

Este proyecto está pensado para un cliente específico, por lo que no se contemplan contribuciones externas.

Para cambios o soporte, contactá directamente al desarrollador.

## Contacto

**Martín Bossi SRL**

- Email: contacto@martinbossi.com
- Teléfono: +54 9 11 1234 5678
- Dirección: Calle Falsa 123, Ciudad, País

**Desarrollado por:** Pablo Fabbian

- Email: pablo@example.com
- LinkedIn: https://linkedin.com/in/pablofabbian

---
