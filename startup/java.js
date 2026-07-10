/**
 * Academia de Villanos - Core Script
 * Gestión de interactividad y efectos de la interfaz
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efecto de Scroll en el Header
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Cuando baja la página, el menú se vuelve más compacto y oscuro
            header.style.backgroundColor = '#050505';
            header.style.padding = '5px 40px';
            header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.5)';
        } else {
            // Estado inicial
            header.style.backgroundColor = '#111111';
            header.style.padding = '10px 40px';
            header.style.boxShadow = 'none';
        }
    });

    // 2. Interactividad en los botones del menú
    const enlacesMenu = document.querySelectorAll('.servicios a');

    enlacesMenu.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            // Evitamos que recargue la página si el href es "#"
            if (enlace.getAttribute('href') === '#') {
                e.preventDefault();
                
                // Animación de pulsación sutil o mensaje simulado
                const servicio = enlace.textContent;
                console.log(`Planificando misión secreta: ${servicio}`);
                
                // Ejemplo de feedback visual temporal
                alert(`Has seleccionado: "${servicio}". El departamento de planes malvados se pondrá en contacto contigo.`);
            }
        });
    });

});