/* GUBERNARE — main.js (vanilla, no dependencies) */
(function () {
  'use strict';

  function safe(fn, name) {
    try { fn(); } catch (err) {
      console.error('[GUBERNARE] init failed:', name, err);
    }
  }

  /* ---------- nav scroll state + mobile toggle ---------- */
  function initNav() {
    var nav = document.querySelector('.nav');
    if (!nav) return;
    var onScroll = function () {
      if (window.scrollY > 12) nav.classList.add('is-scrolled');
      else nav.classList.remove('is-scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    var toggle = document.querySelector('.nav-toggle');
    var panel = document.querySelector('.mobile-panel');
    if (toggle && panel) {
      toggle.addEventListener('click', function () {
        var open = toggle.classList.toggle('is-open');
        panel.classList.toggle('is-open', open);
        document.body.style.overflow = open ? 'hidden' : '';
      });
      panel.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          toggle.classList.remove('is-open');
          panel.classList.remove('is-open');
          document.body.style.overflow = '';
        });
      });
    }

    var here = (location.pathname.split('/').pop() || 'index.html');
    document.querySelectorAll('.nav-links a, .mobile-panel a').forEach(function (a) {
      var href = a.getAttribute('href');
      if (href === here || (here === '' && href === 'index.html')) a.classList.add('active');
    });
  }

  /* ---------- scroll reveal, IntersectionObserver + safety timeout ---------- */
  function initReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

    items.forEach(function (el) { io.observe(el); });

    /* safety net: never leave content invisible if something goes wrong */
    window.setTimeout(function () {
      items.forEach(function (el) { el.classList.add('is-visible'); });
    }, 6000);
  }

  /* ---------- hero mouse-reactive glow (micro-interaction, cheap) ---------- */
  function initHeroGlow() {
    var glow = document.querySelector('.hero-glow');
    var hero = document.querySelector('.hero');
    if (!glow || !hero) return;
    hero.addEventListener('pointermove', function (e) {
      var rect = hero.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      glow.style.transform = 'translate(' + (x * 40 - 0) + 'px,' + (y * 30) + 'px) translateX(-50%)';
    });
  }

  /* ---------- animated stat counters ---------- */
  function initCounters() {
    var nums = document.querySelectorAll('[data-count]');
    if (!nums.length) return;
    var run = function (el) {
      var target = parseFloat(el.getAttribute('data-count'));
      var suffix = el.getAttribute('data-suffix') || '';
      var dur = 1100, start = null;
      var step = function (ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    };
    if (!('IntersectionObserver' in window)) {
      nums.forEach(run);
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { run(entry.target); io.unobserve(entry.target); }
      });
    }, { threshold: 0.4 });
    nums.forEach(function (el) { io.observe(el); });
  }

  /* ---------- year stamp ---------- */
  function initYear() {
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    safe(initNav, 'nav');
    safe(initReveal, 'reveal');
    safe(initHeroGlow, 'heroGlow');
    safe(initCounters, 'counters');
    safe(initYear, 'year');
  });
})();
