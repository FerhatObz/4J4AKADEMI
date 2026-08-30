/**
 * 4JAVA4 AKADEMİ — MOTION & ANIMATION SYSTEM
 * Purposeful, performant, GPU-accelerated motion orchestration.
 */

(function(global) {
  const AnimationSystem = {
    init() {
      // Check if user prefers reduced motion
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (prefersReducedMotion) {
        document.querySelectorAll('.reveal-line').forEach(function(el) {
          el.style.animation = 'none';
          el.style.transform = 'none';
          el.style.opacity = '1';
        });
        return;
      }

      this.triggerWelcomeReveal();
    },

    triggerWelcomeReveal() {
      const welcomeSection = document.getElementById('welcome');
      if (welcomeSection) {
        welcomeSection.classList.add('is-revealed');
      }
    }
  };

  global.AnimationSystem = AnimationSystem;
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = AnimationSystem;
  }
})(typeof window !== 'undefined' ? window : this);
