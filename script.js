document.addEventListener('DOMContentLoaded', () => {

    // 1. MENÚ HAMBURGUESA RESPONSIVO
    const menuToggle = document.getElementById('menuToggle');
    const navbar = document.getElementById('navbar');

    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
            const expanded = navbar.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', expanded);
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // 2. MODO OSCURO / CLARO
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const icon = themeToggleBtn.querySelector('i');
            if (document.body.classList.contains('dark-mode')) {
                icon.className = 'fas fa-sun';
                themeToggleBtn.setAttribute('aria-label', 'Cambiar a modo claro');
            } else {
                icon.className = 'fas fa-moon';
                themeToggleBtn.setAttribute('aria-label', 'Cambiar a modo oscuro');
            }
        });
    }

    // 3. DIRECTORIO DOCENTE (Carga JSON + Filtros + Búsqueda)
    let docentesData = [];
    const teachersGrid = document.getElementById('teachersGrid');
    const teacherSearch = document.getElementById('teacherSearch');
    const academyFilter = document.getElementById('academyFilter');
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    const noResults = document.getElementById('noResults');

    function normalizarTexto(texto) {
        return (texto || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

    async function cargarDocentesJSON() {
        try {
            const respuesta = await fetch('docentes.json');
            if (!respuesta.ok) throw new Error('No se pudo cargar el archivo docentes.json');
            docentesData = await respuesta.json();
            renderDocentes(docentesData);
        } catch (error) {
            console.warn('Cargando respaldo local completo de docentes...', error);
            // DIRECTORY DOCENTE UNIFICADO Y SIN DUPLICADOS (32 DOCENTES)
            docentesData = [
                {
                    "nombre": "Dra. Bertha Alicia Zapata Aldape",
                    "academia": "Ciencias",
                    "materias": "Matemáticas",
                    "semestres": "1° y 3° Semestre",
                    "perfil": "Doctorado. 2 años y medio de trayectoria en ITACE.",
                    "foto": "img/bertha.jpg"
                },
                {
                    "nombre": "Ing. Carlos Melecio Carmona Olivares",
                    "academia": "Tecnología",
                    "materias": "Diseño Gráfico, Inglés",
                    "semestres": "1° y 3° Semestre",
                    "perfil": "Lic. en Diseño Gráfico por la UVB y Maestría en Educación Básica por la UPN. 2 años en ITACE.",
                    "foto": "img/carlos.jpg"
                },
                {
                    "nombre": "Lic. Erick Ramírez Solís",
                    "academia": "Ciencias",
                    "materias": "Pensamiento Matemático",
                    "semestres": "1°, 3° y 5° Semestre",
                    "perfil": "Lic. en Ingeniería Electromecánica y Maestría en Educación. 21 años en ITACE.",
                    "foto": "img/erick.jpg"
                },
                {
                    "nombre": "Mtra. Grecia Ávalos Ramos",
                    "academia": "Humanidades",
                    "materias": "Lengua y Comunicación",
                    "semestres": "1° y 3° Semestre",
                    "perfil": "Licenciatura y Maestría. 3 años de trayectoria en ITACE. Salón B1.",
                    "foto": "img/grecia.jpg"
                },
                {
                    "nombre": "Mtra. Sandra Catalina Silva Camacho",
                    "academia": "Humanidades",
                    "materias": "Comunicación",
                    "semestres": "Todos (Actual 5° Semestre)",
                    "perfil": "Maestría en Metodología de la Enseñanza. 25 años en ITACE. Salón B4.",
                    "foto": "img/sandra.jpg"
                },
                {
                    "nombre": "Dra. Liliana Rosas Pacheco",
                    "academia": "Humanidades",
                    "materias": "Conciencia Histórica, Formación Socioemocional, Lengua y Comunicación, Pensamiento Filosófico",
                    "semestres": "1° y 5° Semestre",
                    "perfil": "Lic. en Pedagogía, Maestría en Docencia y Doctorado en Educación. 5 años en ITACE.",
                    "foto": "img/liliana.jpg"
                },
                {
                    "nombre": "Mtra. Carla Valeria Morán Lerma",
                    "academia": "Humanidades",
                    "materias": "Pensamiento Filosófico, Ciencias Sociales, Cultura Digital",
                    "semestres": "1° y 3° Semestre",
                    "perfil": "Maestría. 33 años de trayectoria en ITACE.",
                    "foto": "img/carla.jpg"
                },
                {
                    "nombre": "Ing. Benjamin Limón Martínez",
                    "academia": "Tecnología",
                    "materias": "Programación, Inteligencia Artificial, Cultura Digital",
                    "semestres": "1°, 3° y 5° Semestre",
                    "perfil": "Administración en Productividad y Calidad. Maestría en Educación. Laboratorio 5. 5 años en ITACE.",
                    "foto": "img/benjamin.jpg"
                },
                {
                    "nombre": "Lic. Isidro de León Flores",
                    "academia": "Humanidades",
                    "materias": "Educación Física Premilitar, Servicios Psicopedagógicos",
                    "semestres": "Todos",
                    "perfil": "Lic. en Psicopedagogía y Lic. en Pedagogía. 29 años en ITACE.",
                    "foto": "img/isidro.jpg"
                },
                {
                    "nombre": "Mtro. Norma Elena Torres Quiñones",
                    "academia": "Ciencias",
                    "materias": "Ciencias Naturales e IT",
                    "semestres": "1°, 3° y 5° Semestre",
                    "perfil": "Ing. Químico y Maestro en Docencia. 26 años en ITACE. Salón C4.",
                    "foto": "img/norma.jpg"
                },
                {
                    "nombre": "Prof. Luis Enrique Lerma Martínez",
                    "academia": "Humanidades",
                    "materias": "Lengua y Comunicación 1 y 3, Conciencia Histórica 2, Formación Socioemocional, Mantenimiento Petrolero, Mantenimiento Industrial",
                    "semestres": "1°, 3° y 5° Semestre",
                    "perfil": "Presidente de la Academia de Conciencia Histórica. Ing. Petrolero, Lic. en Pedagogía y Diplomado en Competencias Docentes. 33 años en ITACE. Salón B2.",
                    "foto": "img/luis.jpg"
                },
                {
                    "nombre": "Ing. Brenda Itzel Herrera García",
                    "academia": "Tecnología",
                    "materias": "Cultura Digital, Inteligencia Artificial",
                    "semestres": "1° y 3° Semestre",
                    "perfil": "Técnica en Informática, Ing. en Sistemas Computacionales y Maestría en Educación. 4 años en ITACE.",
                    "foto": "img/brenda.jpg"
                },
                {
                    "nombre": "Ing. Walter Allan Barrera Cerda",
                    "academia": "Humanidades",
                    "materias": "Inglés 3, Club de Rondalla",
                    "semestres": "1°, 2° y 3° Semestre",
                    "perfil": "Ingeniería Industrial y Administración. 13 años en ITACE. Participa en el club de Rondalla.",
                    "foto": "img/walter.jpg"
                },
                {
                    "nombre": "L.C. Gerardo de la Rosa Ortega",
                    "academia": "Humanidades",
                    "materias": "Inglés",
                    "semestres": "5° Semestre",
                    "perfil": "Licenciado en Contaduría. Especialista en docencia y lenguaje técnico profesional.",
                    "foto": "img/gerardo.jpg"
                },
                {
                    "nombre": "Mtra. Erika Aidé Pérez Ábrego",
                    "academia": "Ciencias",
                    "materias": "Ciencias Naturales, Humanidades",
                    "semestres": "3° y 5° Semestre",
                    "perfil": "Ingeniería Industrial y de Sistemas y Maestría en Educación.",
                    "foto": "img/erika.jpg"
                },
                {
                    "nombre": "Lic. Samuel Gonzales de la Fuente",
                    "academia": "Humanidades",
                    "materias": "Pensamiento Filosófico 1 y 3, Ciencias Sociales 1, Estudios Literarios",
                    "semestres": "1°, 3° y 5° Semestre",
                    "perfil": "Licenciatura en Administración de Empresas y Carrera Técnica en Ebanistería.",
                    "foto": "img/samuel.jpg"
                },
                {
                    "nombre": "Biól. Laura Esmeralda Heredia Blanco",
                    "academia": "Ciencias",
                    "materias": "Ciencias 1, 3 y 5 (Física y Química)",
                    "semestres": "1°, 3° y 5° Semestre",
                    "perfil": "Bióloga especializada en Física y Química.",
                    "foto": "img/laura.jpg"
                },
                {
                    "nombre": "Ing. Felipe Hernández González",
                    "academia": "Tecnología",
                    "materias": "Electrónica, Semiconductores, Módulo Eléctrico",
                    "semestres": "3° y 5° Semestre",
                    "perfil": "Ingeniería en Electrónica.",
                    "foto": "img/felipe.jpg"
                },
                {
                    "nombre": "Mtra. Yuridia Lizbeth Cepeda Ramos",
                    "academia": "Humanidades",
                    "materias": "Inglés, Temas Selectos de Matemáticas 2",
                    "semestres": "5° Semestre",
                    "perfil": "Ingeniera Industrial, Lic. en Matemáticas, Maestría en Educación e Innovación Educativa. Estudiante de Doctorado en Educación.",
                    "foto": "img/yuridia.jpg"
                },
                {
                    "nombre": "Mtro. Juan Pablo Torres Adame",
                    "academia": "Tecnología",
                    "materias": "Programación, Cultura Digital, Cursos de Excel los Sábados",
                    "semestres": "1°, 3° y 5° Semestre",
                    "perfil": "Licenciatura en Información Administrativa y Maestría en Ciencias de la Enseñanza. Responsable del club de Robótica.",
                    "foto": "img/juanpablo.jpg"
                },
                {
                    "nombre": "Ing. Romualdo Guadalupe de la Cruz",
                    "academia": "Ciencias",
                    "materias": "Pensamiento Matemático 1 y 3",
                    "semestres": "1° y 3° Semestre",
                    "perfil": "Especialista en Mantenimiento Industrial e Instalaciones Petroleras.",
                    "foto": "img/romualdo.jpg"
                },
                {
                    "nombre": "Mtra. Nohemí Quintanilla Arcos",
                    "academia": "Humanidades",
                    "materias": "Prefectura y Disciplina Escolar",
                    "semestres": "1°, 3° y 5° Semestre",
                    "perfil": "Prefecta / Coordinación de convivencia escolar.",
                    "foto": "img/nohemi.jpg"
                },
                {
                    "nombre": "Dr. Ulises Solís Rieboles",
                    "academia": "Ciencias",
                    "materias": "Ciencias Naturales 1, 3 y 5",
                    "semestres": "1°, 3° y 5° Semestre",
                    "perfil": "Químico Farmacéutico Biólogo, Maestrías en Análisis Clínicos y Educación. Doctorando en Educación.",
                    "foto": "img/ulises.jpg"
                },
                {
                    "nombre": "Biól. Trinidad Hernández Barrera",
                    "academia": "Ciencias",
                    "materias": "Ciencias Naturales, Experimentales y Tecnología 1, 3 y 5",
                    "semestres": "1°, 3° y 5° Semestre",
                    "perfil": "Biólogo especializado en ciencias experimentales y conservación natural.",
                    "foto": "img/trinidad.jpg"
                },
                {
                    "nombre": "Mtra. Mildred Yasmín Reyes Norberto",
                    "academia": "Ciencias",
                    "materias": "Temas Selectos de Matemáticas 2",
                    "semestres": "5° Semestre",
                    "perfil": "Ingeniería Química y Maestría en Docencia.",
                    "foto": "img/mildred.jpg"
                },
                {
                    "nombre": "Ing. José López Vázquez",
                    "academia": "Tecnología",
                    "materias": "Módulo de Mantenimiento Industrial",
                    "semestres": "3° y 5° Semestre (Turno Vespertino)",
                    "perfil": "Ingeniero Industrial.",
                    "foto": "img/joselopez.jpg"
                },
                {
                    "nombre": "Prof. Rafael Villasana",
                    "academia": "Humanidades",
                    "materias": "Conciencia Histórica, Cultura Digital, Lengua y Comunicación, Educación Física",
                    "semestres": "1°, 3° y 5° Semestre",
                    "perfil": "Especialista en Historia y Deportes.",
                    "foto": "img/villasana.jpg"
                },
                {
                    "nombre": "Lic. Diana Janeth Uriegas Garza",
                    "academia": "Humanidades",
                    "materias": "Habilidades para Hablar en Público, Matemáticas Básicas, Administración, Cultura Digital",
                    "semestres": "1°, 3° y 5° Semestre",
                    "perfil": "Lic. en Administración por el Instituto Tecnológico de Reynosa. 12 años en ITACE. Salón C-11. Participa en el club de Oratoria.",
                    "foto": "img/diana.jpg"
                },
                {
                    "nombre": "Ing. José Luis González López",
                    "academia": "Tecnología",
                    "materias": "Matemáticas, Pensamiento Matemático 3, Módulo de Semiconductores",
                    "semestres": "3° Semestre",
                    "perfil": "Académico en Semiconductores y Matemáticas.",
                    "foto": "img/joseluis.jpg"
                },
                {
                    "nombre": "Ing. Javier Alfonso Acosta García",
                    "academia": "Tecnología",
                    "materias": "Módulo de Mantenimiento Automotriz",
                    "semestres": "3° y 5° Semestre",
                    "perfil": "Ingeniería Electromecánica y Maestría en Ingeniería Industrial y Manufactura Avanzada.",
                    "foto": "img/javier.jpg"
                },
                {
                    "nombre": "Ing. Mario Alonso Santoyo Arroyo",
                    "academia": "Tecnología",
                    "materias": "Módulo Profesional de Mantenimiento Industrial 2 y 4",
                    "semestres": "3° y 5° Semestre",
                    "perfil": "Ingeniería Industrial, Maestría en Educación y Carrera Técnica en Refrigeración y Climatización.",
                    "foto": "img/mario.jpg"
                },
                {
                    "nombre": "Omar Saúl González Alatriste",
                    "academia": "Humanidades",
                    "materias": "Prefectura",
                    "semestres": "3° Semestre",
                    "perfil": "Prefecto responsable de tercer semestre. 32 años en ITACE.",
                    "foto": "img/omar.jpg"
                }
            ];
            renderDocentes(docentesData);
        }
    }

    function renderDocentes(lista) {
        if (!teachersGrid) return;
        teachersGrid.innerHTML = '';

        if (lista.length === 0) {
            if (noResults) noResults.style.display = 'block';
            return;
        } else {
            if (noResults) noResults.style.display = 'none';
        }

        lista.forEach(docente => {
            const card = document.createElement('article');
            card.className = 'teacher-card';

            const avatarHTML = docente.foto 
                ? `<div class="teacher-avatar"><img src="${docente.foto}" alt="${docente.nombre}"></div>`
                : `<div class="teacher-avatar"><i class="fas fa-user-tie" aria-hidden="true"></i></div>`;

            card.innerHTML = `
                ${avatarHTML}
                <h3>${docente.nombre}</h3>
                <span class="teacher-academy">${docente.academia}</span>
                <p class="teacher-subjects"><strong>Materias:</strong> ${docente.materias}</p>
                <p class="teacher-subjects"><small><i class="fas fa-calendar-alt" aria-hidden="true"></i> ${docente.semestres}</small></p>
                ${docente.perfil ? `<p class="teacher-profile"><small><em>${docente.perfil}</em></small></p>` : ''}
            `;
            teachersGrid.appendChild(card);
        });
    }

    function filtrarDocentes() {
        const query = normalizarTexto(teacherSearch.value.trim());
        const academia = academyFilter.value;

        const filtrados = docentesData.filter(docente => {
            const coincideNombreOMateria = normalizarTexto(docente.nombre).includes(query) || 
                                           normalizarTexto(docente.materias).includes(query);
            const coincideAcademia = (academia === 'todos') || (normalizarTexto(docente.academia) === normalizarTexto(academia));

            return coincideNombreOMateria && coincideAcademia;
        });

        renderDocentes(filtrados);
    }

    if (teacherSearch && academyFilter) {
        teacherSearch.addEventListener('input', filtrarDocentes);
        academyFilter.addEventListener('change', filtrarDocentes);

        if (clearSearchBtn) {
            clearSearchBtn.addEventListener('click', () => {
                teacherSearch.value = '';
                academyFilter.value = 'todos';
                renderDocentes(docentesData);
            });
        }

        cargarDocentesJSON();
    }

    // 4. GALERÍA / LIGHTBOX
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.querySelector('.lightbox-close');

    if (lightbox && lightboxImg) {
        document.querySelectorAll('.facility-card').forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                const title = item.querySelector('h4');
                const desc = item.querySelector('p');

                if (img) {
                    lightboxImg.src = img.src;
                    lightboxImg.alt = img.alt || "Fotografía ampliada de instalaciones del ITACE";
                    if (lightboxCaption && title && desc) {
                        lightboxCaption.innerHTML = `<strong>${title.innerText}</strong><br>${desc.innerText}`;
                    } else if (lightboxCaption) {
                        lightboxCaption.innerHTML = `<strong>Fotografía de Galería ITACE</strong>`;
                    }
                    lightbox.style.display = 'flex';
                }
            });
        });

        if (lightboxClose) {
            lightboxClose.addEventListener('click', () => {
                lightbox.style.display = 'none';
            });
        }

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
    }
});