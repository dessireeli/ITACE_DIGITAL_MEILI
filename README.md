# ITACE DIGITAL 4.0 - Propuesta Institucional Plantel Reynosa

> **Aviso de Carácter Académico:** Este sitio web representa una propuesta de proyecto estudiantil desarrollada para la asignatura de Desarrollo Web. No constituye el portal oficial del Instituto Tamaulipeco de Capacitación para el Empleo (ITACE) sin la autorización expresa de sus autoridades institucionales.

---

## 1. Descripción del Proyecto
**ITACE DIGITAL 4.0** es la modernización integral del portal web institucional del **Instituto Tamaulipeco de Capacitación para el Empleo (ITACE), Plantel Reynosa**. El sitio ha sido reconstruido desde sus bases aplicando estándares profesionales de arquitectura web, diseño limpio, accesibilidad universal, componentes dinámicos e integración multimedia.

El portal responde a las necesidades informativas de aspirantes, estudiantes, docentes y padres de familia, presentando la oferta educativa, instalaciones, plantilla docente, identidad cívica y vida estudiantil del plantel.

---

## 2. Ficha de Autoría y Datos Académicos
* **Desarrollador / Alumno:** Mei Li Dessiree David Muñoz
* **Grupo / Semestre:** 502 B (5° Semestre)
* **Asignatura:** Desarrollo Web
* **Institución:** Instituto Tamaulipeco de Capacitación para el Empleo (ITACE) — Plantel Reynosa
* **Fecha de Entrega:** Lunes 28 de Octubre del 2026
* **Docente Supervisor:** Academia de Informática y Tecnología

---

## 3. Tecnologías Utilizadas y Especificaciones Técnicas
* **HTML5 Semántico:** Estructuración mediante etiquetas estándar (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<details>`, `<footer>`) para optimización SEO y lectores de pantalla.
* **CSS3 Moderno:**
  * Variables CSS (`:root`) para gestión unificada de paleta de colores institucional (Guinda `#800020`, Dorado `#D4AF37`, Beige `#FAF8F5`).
  * Layouts híbridos combinando **Flexbox** y **CSS Grid** (`repeat(4, 1fr)`).
  * Animaciones mediante `@keyframes` (`fadeIn`, `pulseGlow`, `floatImage`).
  * Soporte nativo para **Modo Oscuro / Claro** via JavaScript.
  * Diseño 100% Responsivo adaptado a dispositivos móviles, tabletas y computadoras de escritorio.
* **JavaScript (ES6+):**
  * Consumo asíncrono de base de datos local usando **Fetch API**.
  * Búsqueda dinámica en tiempo real con normalización de caracteres e igorancia de acentos (`normalize("NFD")`).
  * Visor ampliado de imágenes (*Lightbox Modal*).
  * Gestor multimedia global de pausa automática para audio y video.
* **JSON (JavaScript Object Notation):** Estructuración de datos del directorio docente profesional.
* **FontAwesome v6.4.0:** Tipografía vectorial e iconografía institucional.

---

## 4. Estructura de Archivos del Repositorio
```text
ITACE_DIGITAL_4_MEILI/
│
├── index.html              # Estructura semántica principal del portal web
├── docentes.json           # Archivo JSON con datos del personal docente autorizado
├── style.css               # Hoja de estilos globales, variables, grids y temas
├── script.js              # Lógica interactiva en JS (Filtros, lightbox, auto-pausa)
├── README.md               # Documentación general y técnica del proyecto
│
├── datos/                  # Carpeta de respaldo de datos (docentes.json)
│   └── docentes.json
│
├── img/                    # Galería fotográfica e imágenes optimizadas del plantel
│   ├── foto1.jpeg
│   ├── bertha.jpeg
│   ├── carlos.jpeg
│   └── ...
│
├── audio/                  # Archivos de audio de los himnos institucionales
│   ├── himno1.mp4
│   └── himno2.mp4
│
├── video/                  # Videos institucionales en formato MP4
│   ├── institucional.mp4
│   ├── plantel.mp4
│   ├── tecnologicos.mp4
│   └── video.mp4
│
└── evidencias/             # Capturas de pantalla, diagnósticos y pruebas móviles
    ├── captura_anterior.png
    └── prueba_movil.png