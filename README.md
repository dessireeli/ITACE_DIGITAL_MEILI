# ITACE DIGITAL 4.0 - Propuesta Institucional Plantel Reynosa

## 1. Descripción del Proyecto
Este proyecto es una propuesta académica de modernización del portal web institucional del **Instituto Tamaulipeco de Capacitación para el Empleo (ITACE), Plantel Reynosa**. El sitio ha sido rediseñado desde cero para ofrecer una experiencia interactiva, accesible, móvildinámica y moderna que satisface las necesidades de información de estudiantes, docentes, aspirantes y familias.

---

## 2. Autoría y Datos Académicos
* **Alumno / Desarrollador:** Mei Li Dessiree David Muñoz
* **Grupo:** 502 B
* **Materia / Asignatura:** Desarrollo Web
* **Institución:** ITACE Plantel Reynosa
* **Fecha de Entrega:** Lunes 28 de Octubre del 2026

---

## 3. Tecnologías Utilizadas
* **HTML5 Semántico:** Estructuración del contenido con jerarquía visual y accesibilidad.
* **CSS3:** Estilos personalizados, variables CSS, Flexbox, CSS Grid, animaciones y diseño responsivo adaptativo (*Media Queries*).
* **JavaScript (ES6+):** Programación asíncrona (*Fetch API*), manipulación del DOM, lógica de filtrado de búsqueda en tiempo real e interacciones multimedia.
* **JSON:** Almacenamiento estructurado del directorio docente institucional autorizada.
* **FontAwesome v6:** Librería de iconos vectoriales para mejorar la experiencia de usuario.

---

## 4. Estructura del Proyecto
```text
ITACE_DIGITAL_4_MEILI/
│
├── index.html              # Página web principal con toda la estructura semántica
├── docentes.json           # Base de datos JSON con el personal docente autorizado
├── style.css               # Hoja de estilos globales, variables y modo oscuro
├── script.js              # Lógica interactiva en JS (Buscador, menú, lightbox, theme)
├── README.md               # Documentación general del repositorio
│
├── datos/                  # Carpeta de respaldo de archivos de datos
│   └── docentes.json
│
├── img/                    # Fotografías e imágenes optimizadas del plantel
│   ├── foto1.jpeg
│   ├── imagen20.jpeg
│   └── ...
│
├── audio/                  # Archivos MP3 de los himnos institucionales
│   ├── himno-itace.mp3
│   └── himno-tamaulipas.mp3
│
└── evidencias/             # Evidencias del proyecto (Antes y Después, capturas móviles)
    ├── captura_anterior.png
    └── captura_nueva_movil.png