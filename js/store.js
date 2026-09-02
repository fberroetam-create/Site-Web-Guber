/* GUBERNARE — store.js
   Shared data layer for noticias. Static hosting has no database, so the
   source of truth for every visitor is data/noticias.json. The admin panel
   (admin.html) edits a local draft in this browser's localStorage and lets
   the site owner export an updated noticias.json to re-upload to hosting. */
(function (global) {
  'use strict';

  var STORAGE_KEY = 'gubernare_noticias_draft_v1';
  var JSON_PATH = (function () {
    var path = location.pathname;
    var depth = path.endsWith('/') ? path : path.substring(0, path.lastIndexOf('/') + 1);
    return depth + 'data/noticias.json';
  })();

  function loadDraft() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (err) {
      return null;
    }
  }

  function saveDraft(items) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      return true;
    } catch (err) {
      return false;
    }
  }

  function clearDraft() {
    try { window.localStorage.removeItem(STORAGE_KEY); } catch (err) { /* noop */ }
  }

  /* Public pages: show the local draft if the owner is previewing on this
     browser, otherwise fetch the published JSON that every visitor sees. */
  function load() {
    var draft = loadDraft();
    if (draft) return Promise.resolve(draft);
    return fetch(JSON_PATH, { cache: 'no-store' })
      .then(function (res) { if (!res.ok) throw new Error('fetch failed'); return res.json(); })
      .catch(function () { return []; });
  }

  /* Admin panel: always start from the published JSON the first time,
     then layer localStorage edits on top of it. */
  function loadForAdmin() {
    var draft = loadDraft();
    if (draft) return Promise.resolve(draft);
    return fetch(JSON_PATH, { cache: 'no-store' })
      .then(function (res) { if (!res.ok) throw new Error('fetch failed'); return res.json(); })
      .catch(function () { return []; });
  }

  function exportJSON(items) {
    var blob = new Blob([JSON.stringify(items, null, 2)], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'noticias.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }

  global.GubernareStore = {
    load: load,
    loadForAdmin: loadForAdmin,
    saveDraft: saveDraft,
    clearDraft: clearDraft,
    hasDraft: function () { return !!loadDraft(); },
    exportJSON: exportJSON,
    uid: uid
  };
})(window);
