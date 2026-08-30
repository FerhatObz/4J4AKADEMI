/**
 * 4JAVA4 AKADEMİ — INTERACTION SYSTEM
 * Cursor coordinates, subtle parallax, button states, touch handling.
 */

(function(global) {
  const InteractionSystem = {
    init() {
      this.initMouseTracker();
      this.initSmoothCTA();
    },

    initMouseTracker() {
      const coordDisplayX = document.getElementById('coord-x');
      const coordDisplayY = document.getElementById('coord-y');
      let ticking = false;

      if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        window.addEventListener('pointermove', function(e) {
          if (!ticking) {
            requestAnimationFrame(function() {
              const xPercent = (e.clientX / window.innerWidth).toFixed(4);
              const yPercent = (e.clientY / window.innerHeight).toFixed(4);

              document.documentElement.style.setProperty('--mouse-x', xPercent);
              document.documentElement.style.setProperty('--mouse-y', yPercent);

              if (coordDisplayX && coordDisplayY) {
                coordDisplayX.textContent = Math.round(e.clientX).toString().padStart(4, '0');
                coordDisplayY.textContent = Math.round(e.clientY).toString().padStart(4, '0');
              }

              ticking = false;
            });
            ticking = true;
          }
        }, { passive: true });
      }
    },

    initSmoothCTA() {
      const ctaButtons = document.querySelectorAll('a[href^="#"]');
      ctaButtons.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
          const targetId = btn.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
    }
  };

  global.InteractionSystem = InteractionSystem;
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = InteractionSystem;
  }
})(typeof window !== 'undefined' ? window : this);
