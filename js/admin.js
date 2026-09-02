/* GUBERNARE — admin.js (news panel, client-side only)
   IMPORTANT: this gate is a soft deterrent, not real security — anyone can
   read this file's source. Do not use it to protect sensitive data. */
(function () {
  'use strict';

  var ADMIN_PASSPHRASE = 'Gubernare2026';
  var AUTH_KEY = 'gubernare_admin_authed';

  var state = { items: [], editingId: null };

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  function fmtDate(iso) {
    try {
      var d = new Date(iso + 'T00:00:00');
      return d.toLocaleDateString('es-CL', { day: 'numeric', month: 'long', year: 'numeric' });
    } catch (err) { return iso; }
  }

  function escapeHTML(str) {
    var div = document.createElement('div');
    div.textContent = str == null ? '' : String(str);
    return div.innerHTML;
  }

  /* ---------- auth ---------- */
  function initAuth() {
    var lock = $('#adminLock');
    var shell = $('#adminShell');
    var form = $('#lockForm');
    var error = $('#lockError');

    function unlock() {
      lock.style.display = 'none';
      shell.style.display = 'block';
      boot();
    }

    if (window.sessionStorage.getItem(AUTH_KEY) === 'true') {
      unlock();
      return;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var val = $('#lockPass').value;
      if (val === ADMIN_PASSPHRASE) {
        window.sessionStorage.setItem(AUTH_KEY, 'true');
        error.style.display = 'none';
        unlock();
      } else {
        error.style.display = 'block';
      }
    });

    var logout = $('#logoutBtn');
    if (logout) {
      logout.addEventListener('click', function () {
        window.sessionStorage.removeItem(AUTH_KEY);
        location.reload();
      });
    }
  }

  /* ---------- data ---------- */
  function boot() {
    window.GubernareStore.loadForAdmin().then(function (items) {
      state.items = (items || []).slice().sort(function (a, b) { return (b.fecha || '').localeCompare(a.fecha || ''); });
      renderList();
      updateDraftBadge();
    });

    $('#newsForm').addEventListener('submit', onSubmit);
    $('#resetFormBtn').addEventListener('click', resetForm);
    $('#exportBtn').addEventListener('click', function () {
      window.GubernareStore.exportJSON(state.items);
    });
    $('#discardDraftBtn').addEventListener('click', function () {
      if (!confirm('¿Descartar los cambios guardados en este navegador y volver a la última versión publicada?')) return;
      window.GubernareStore.clearDraft();
      location.reload();
    });
  }

  function persist() {
    window.GubernareStore.saveDraft(state.items);
    updateDraftBadge();
  }

  function updateDraftBadge() {
    var badge = $('#draftBadge');
    if (!badge) return;
    badge.style.display = window.GubernareStore.hasDraft() ? 'inline-flex' : 'none';
  }

  /* ---------- form ---------- */
  function onSubmit(e) {
    e.preventDefault();
    var data = new FormData(e.target);
    var item = {
      id: state.editingId || window.GubernareStore.uid(),
      titulo: (data.get('titulo') || '').toString().trim(),
      categoria: (data.get('categoria') || 'Noticia').toString().trim(),
      fecha: (data.get('fecha') || '').toString(),
      extracto: (data.get('extracto') || '').toString().trim(),
      contenido: (data.get('contenido') || '').toString().trim()
    };
    if (!item.titulo || !item.fecha) return;

    if (state.editingId) {
      state.items = state.items.map(function (n) { return n.id === item.id ? item : n; });
    } else {
      state.items.unshift(item);
    }
    state.items.sort(function (a, b) { return (b.fecha || '').localeCompare(a.fecha || ''); });

    persist();
    renderList();
    resetForm();
  }

  function resetForm() {
    state.editingId = null;
    $('#newsForm').reset();
    $('#formTitle').textContent = 'Nueva noticia';
    $('#submitBtn').textContent = 'Publicar noticia';
    $('#fecha').value = new Date().toISOString().slice(0, 10);
  }

  function editItem(id) {
    var item = state.items.filter(function (n) { return n.id === id; })[0];
    if (!item) return;
    state.editingId = id;
    $('#titulo').value = item.titulo || '';
    $('#categoria').value = item.categoria || '';
    $('#fecha').value = item.fecha || '';
    $('#extracto').value = item.extracto || '';
    $('#contenido').value = item.contenido || '';
    $('#formTitle').textContent = 'Editar noticia';
    $('#submitBtn').textContent = 'Guardar cambios';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function deleteItem(id) {
    if (!confirm('¿Eliminar esta noticia?')) return;
    state.items = state.items.filter(function (n) { return n.id !== id; });
    persist();
    renderList();
    if (state.editingId === id) resetForm();
  }

  /* ---------- list ---------- */
  function renderList() {
    var list = $('#adminList');
    var count = $('#itemCount');
    if (count) count.textContent = state.items.length;
    if (!state.items.length) {
      list.innerHTML = '<p style="color:var(--text-faint);font-size:.9rem">Aún no hay noticias. Publique la primera con el formulario.</p>';
      return;
    }
    list.innerHTML = state.items.map(function (item) {
      return (
        '<div class="admin-item">' +
          '<div>' +
            '<h4>' + escapeHTML(item.titulo) + '</h4>' +
            '<div class="meta">' + escapeHTML(item.categoria || 'Noticia') + ' &middot; ' + fmtDate(item.fecha) + '</div>' +
          '</div>' +
          '<div class="actions">' +
            '<button type="button" class="icon-btn" data-edit="' + item.id + '" aria-label="Editar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg></button>' +
            '<button type="button" class="icon-btn" data-delete="' + item.id + '" aria-label="Eliminar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6h16Z"/></svg></button>' +
          '</div>' +
        '</div>'
      );
    }).join('');

    $all('[data-edit]', list).forEach(function (btn) {
      btn.addEventListener('click', function () { editItem(btn.getAttribute('data-edit')); });
    });
    $all('[data-delete]', list).forEach(function (btn) {
      btn.addEventListener('click', function () { deleteItem(btn.getAttribute('data-delete')); });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    try { initAuth(); } catch (err) { console.error('[GUBERNARE admin] init failed', err); }
  });
})();
