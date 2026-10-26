document.addEventListener('DOMContentLoaded', () => {
    // 1. CONTROL DEL MENÚ HAMBURGUESA
    const menuToggle = document.getElementById('menuToggle');
    const navbar = document.getElementById('navbar');

    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });

        // Cerrar menú móvil al hacer clic en cualquier enlace
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
            });
        });
    }

    // 2. CAMBIO DE TEMA (Modo Oscuro / Modo Claro)
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const icon = themeToggleBtn.querySelector('i');
            if (document.body.classList.contains('dark-mode')) {
                icon.className = 'fas fa-sun';
            } else {
                icon.className = 'fas fa-moon';
            }
        });
    }

    // 3. REPRODUCTOR DE AUDIO INTERACTIVO
    const audioPlayer = document.getElementById('audioPlayer');
    const playAudioBtn = document.getElementById('playAudioBtn');
    const pauseAudioBtn = document.getElementById('pauseAudioBtn');

    if (audioPlayer && playAudioBtn && pauseAudioBtn) {
        playAudioBtn.addEventListener('click', () => {
            audioPlayer.play();
        });

        pauseAudioBtn.addEventListener('click', () => {
            audioPlayer.pause();
        });
    }

    // 4. GALERÍA DE IMÁGENES LIGHTBOX
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.querySelector('.lightbox-close');

    if (lightbox && lightboxImg) {
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                if (img) {
                    lightboxImg.src = img.src;
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