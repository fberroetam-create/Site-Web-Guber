/* GUBERNARE — noticias.js (public rendering: home preview + noticias page) */
(function () {
  'use strict';

  function fmtDate(iso) {
    try {
      var d = new Date(iso + 'T00:00:00');
      return d.toLocaleDateString('es-CL', { day: 'numeric', month: 'long', year: 'numeric' });
    } catch (err) { return iso; }
  }

  function cardHTML(item) {
    return (
      '<article class="news-card reveal" data-id="' + item.id + '">' +
        '<div class="news-meta"><span class="news-cat">' + escapeHTML(item.categoria || 'Noticia') + '</span><span>&middot;</span><span>' + fmtDate(item.fecha) + '</span></div>' +
        '<h3>' + escapeHTML(item.titulo) + '</h3>' +
        '<p>' + escapeHTML(item.extracto || '') + '</p>' +
        '<span class="news-read">Leer más ' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>' +
        '</span>' +
      '</article>'
    );
  }

  function escapeHTML(str) {
    var div = document.createElement('div');
    div.textContent = str == null ? '' : String(str);
    return div.innerHTML;
  }

  function sortByDateDesc(items) {
    return items.slice().sort(function (a, b) { return (b.fecha || '').localeCompare(a.fecha || ''); });
  }

  function openModal(item) {
    var backdrop = document.getElementById('newsModal');
    if (!backdrop) return;
    backdrop.querySelector('.news-cat').textContent = item.categoria || 'Noticia';
    backdrop.querySelector('.news-date').textContent = fmtDate(item.fecha);
    backdrop.querySelector('.modal-title').textContent = item.titulo;
    backdrop.querySelector('.modal-body').innerHTML = (item.contenido || item.extracto || '')
      .split('\n\n').map(function (p) { return '<p>' + escapeHTML(p) + '</p>'; }).join('');
    backdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    var backdrop = document.getElementById('newsModal');
    if (!backdrop) return;
    backdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function wireModal(items) {
    var backdrop = document.getElementById('newsModal');
    if (!backdrop) return;
    document.addEventListener('click', function (e) {
      var card = e.target.closest('.news-card');
      if (card) {
        var item = items.filter(function (n) { return String(n.id) === card.getAttribute('data-id'); })[0];
        if (item) openModal(item);
      }
      if (e.target.closest('[data-modal-close]') || e.target === backdrop) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });
  }

  function renderInto(container, items) {
    if (!container) return;
    if (!items.length) {
      container.innerHTML = '<p style="color:var(--text-faint)">Aún no hay noticias publicadas.</p>';
      return;
    }
    container.innerHTML = items.map(cardHTML).join('');
    if (window.__revealNew) window.__revealNew();
  }

  function reobserveReveal() {
    var items = document.querySelectorAll('.reveal:not(.is-visible)');
    if (!items.length || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el) { io.observe(el); });
  }
  window.__revealNew = reobserveReveal;

  document.addEventListener('DOMContentLoaded', function () {
    if (!window.GubernareStore) return;

    window.GubernareStore.load().then(function (items) {
      var sorted = sortByDateDesc(items || []);

      var preview = document.getElementById('newsPreviewGrid');
      if (preview) renderInto(preview, sorted.slice(0, 3));

      var full = document.getElementById('newsFullGrid');
      if (full) renderInto(full, sorted);

      wireModal(sorted);

      if (window.GubernareStore.hasDraft()) {
        var notice = document.getElementById('draftNotice');
        if (notice) notice.style.display = 'flex';
      }
    });
  });
})();
