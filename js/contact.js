/* GUBERNARE — contact.js
   No backend on static hosting, so the form composes a pre-filled email to
   the company address via mailto: and hands off to the visitor's own
   email client. Swap this for a form backend (Formspree, etc.) later if
   preferred. */
(function () {
  'use strict';

  var CONTACT_EMAIL = 'contacto@gubernare.cl';

  document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contactForm');
    if (!form) return;
    var status = document.getElementById('formStatus');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var nombre = (data.get('nombre') || '').toString().trim();
      var empresa = (data.get('empresa') || '').toString().trim();
      var tipo = (data.get('tipo') || '').toString();
      var email = (data.get('email') || '').toString().trim();
      var telefono = (data.get('telefono') || '').toString().trim();
      var mensaje = (data.get('mensaje') || '').toString().trim();

      var subject = 'Contacto sitio web — ' + (empresa || nombre || 'Nueva consulta');
      var bodyLines = [
        'Nombre: ' + nombre,
        'Empresa / institución: ' + empresa,
        'Tipo de cliente: ' + tipo,
        'Correo: ' + email,
        'Teléfono: ' + telefono,
        '',
        'Mensaje:',
        mensaje
      ];
      var mailto = 'mailto:' + CONTACT_EMAIL +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(bodyLines.join('\n'));

      window.location.href = mailto;

      if (status) {
        status.textContent = 'Se abrió su cliente de correo con el mensaje pre-cargado. Si no ocurre nada, escríbanos directamente a ' + CONTACT_EMAIL + '.';
        status.classList.add('show', 'ok');
      }
    });
  });
})();
