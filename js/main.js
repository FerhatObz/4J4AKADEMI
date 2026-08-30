/**
 * 4JAVA4 AKADEMİ — MAIN APPLICATION ENTRY
 * Initialization, system state, modules orchestration.
 */

document.addEventListener('DOMContentLoaded', function() {
  // Console Brand Signature
  console.log(
    '%c4JAVA4 AKADEMİ%c // SYSTEM_INIT: READY\n%c"Sistemi kullanmayı değil, nasıl çalıştığını öğren."',
    'background: #08090A; color: #B7FF00; font-family: monospace; font-size: 14px; font-weight: bold; padding: 4px 8px; border: 1px solid #B7FF00;',
    'color: #8B8F92; font-family: monospace; font-size: 12px;',
    'color: #F2F2EE; font-family: sans-serif; font-style: italic; font-size: 11px;'
  );

  // Initialize Core Systems safely
  if (window.AnimationSystem && typeof window.AnimationSystem.init === 'function') {
    window.AnimationSystem.init();
  }
  if (window.InteractionSystem && typeof window.InteractionSystem.init === 'function') {
    window.InteractionSystem.init();
  }
  if (window.NavigationSystem && typeof window.NavigationSystem.init === 'function') {
    window.NavigationSystem.init();
  }
  if (window.BooksSystem && typeof window.BooksSystem.init === 'function') {
    window.BooksSystem.init();
  }
});
