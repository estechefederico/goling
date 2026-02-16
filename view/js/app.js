/**
 * Goling - Interacciones de la landing
 * Menú móvil, scroll suave y efecto del header
 */

(function () {
  // Menú móvil: toggle
  var menuBtn = document.getElementById('mobile-menu-button');
  var mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Cerrar menú móvil al hacer clic en un enlace
  var menuLinks = document.querySelectorAll('#mobile-menu a');
  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (mobileMenu) mobileMenu.classList.add('hidden');
    });
  });

  // Scroll suave para anclas
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Efecto del header al hacer scroll
  window.addEventListener('scroll', function () {
    var header = document.getElementById('header');
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add('shadow-md', 'bg-white/95');
    } else {
      header.classList.remove('shadow-md', 'bg-white/95');
    }
  });

  // Carrusel de testimonios: scroll continuo lento + botones (compatible iOS/Safari)
  function initTestimonialsCarousel() {
    var track = document.getElementById('testimonials-track');
    var prevBtn = document.getElementById('testimonials-prev');
    var nextBtn = document.getElementById('testimonials-next');
    if (!track || !prevBtn || !nextBtn) return;

    var cardWidth = 320;
    var gap = 24;
    var scrollAmount = cardWidth + gap;
    var speedPxPerSec = 35;
    var lastTime = 0;
    // Posición lógica para iOS: Safari no actualiza scrollLeft bien en requestAnimationFrame
    var logicalScroll = 0;

    // Duplicar contenido para bucle infinito sin saltos
    var kids = Array.prototype.slice.call(track.children);
    var fragment = document.createDocumentFragment();
    kids.forEach(function (node) {
      fragment.appendChild(node.cloneNode(true));
    });
    track.appendChild(fragment);

    var half = track.scrollWidth / 2;

    function tick(now) {
      lastTime = lastTime || now;
      var delta = Math.min((now - lastTime) / 1000, 0.2);
      lastTime = now;
      logicalScroll += speedPxPerSec * delta;
      if (half > 0 && logicalScroll >= half) {
        logicalScroll -= half;
      }
      track.scrollLeft = logicalScroll;
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);

    prevBtn.addEventListener('click', function () {
      logicalScroll -= scrollAmount;
      if (logicalScroll < 0) logicalScroll += half;
      track.scrollLeft = logicalScroll;
    });
    nextBtn.addEventListener('click', function () {
      logicalScroll += scrollAmount;
      if (logicalScroll >= half) logicalScroll -= half;
      track.scrollLeft = logicalScroll;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTestimonialsCarousel);
  } else {
    initTestimonialsCarousel();
  }
})();
