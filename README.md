# Sitio web — Gubernare

Sitio estático (HTML + CSS + JS puro, sin build ni frameworks) para
**Servicios Tecnológicos Gubernare SpA**. Listo para subir por FTP/gestor
de archivos a Hostinger o cualquier hosting estático.

## Estructura

```
index.html         Inicio
servicios.html      Detalle de las 3 líneas de servicio
nosotros.html        Modelo de negocio y forma de operar
noticias.html       Listado de noticias
contacto.html         Formulario e información de contacto
admin.html           Panel para publicar noticias (ver abajo)
css/styles.css       Estilos
js/                   Scripts (nav, animaciones, noticias, formulario, admin)
data/noticias.json   Noticias publicadas (fuente de verdad para todos los visitantes)
.htaccess              Cache y compresión para Apache/Hostinger
```

## Antes de publicar — datos a reemplazar

El sitio se generó con datos de contacto **de ejemplo**. Reemplace lo
siguiente antes de publicar (búsqueda global en el proyecto):

- `contacto@gubernare.cl` → correo real de contacto.
- `56900000000` (enlaces de WhatsApp) → número real, formato `56 9 XXXX XXXX`.
- Enlace de LinkedIn (actualmente `#` en el pie de página) → URL real de la empresa.
- Clave del panel de noticias en `js/admin.js` (`ADMIN_PASSPHRASE`, por defecto `Gubernare2026`) → cámbiela por una propia.

## Cómo publicar noticias

El sitio es 100% estático: no hay servidor ni base de datos, así que la
"fuente de verdad" que ven **todos** los visitantes es el archivo
`data/noticias.json`.

1. Abra `admin.html` en el sitio ya publicado (o en local) e ingrese con la clave de administración.
2. Agregue, edite o elimine noticias. Los cambios se guardan automáticamente en este navegador (borrador local) y puede previsualizarlos navegando el resto del sitio en el mismo navegador.
3. Cuando esté conforme, presione **"Exportar noticias.json"** — descarga el archivo actualizado.
4. Suba ese archivo a su hosting reemplazando `data/noticias.json` (por FTP, el administrador de archivos de Hostinger, o subiéndolo al repositorio si despliega desde Git).
5. Los visitantes verán las noticias actualizadas de inmediato (sin caché, ver `.htaccess`).

> El panel de administración es una protección básica pensada para evitar
> ediciones accidentales, no un sistema de autenticación seguro: la clave
> vive en el código fuente del sitio. No la use para contenido sensible.

## Despliegue

1. Suba el contenido completo de esta carpeta (incluyendo `.htaccess`) a la raíz de su hosting.
2. Verifique que `data/noticias.json` haya quedado accesible en `https://sudominio.cl/data/noticias.json`.
3. Ante cada cambio de CSS/JS, suba un cache-buster nuevo (cambie `?v=20260902` por la fecha del despliegue en los archivos HTML) para evitar que el navegador sirva versiones antiguas.

## Formulario de contacto

El formulario de `contacto.html` compone un correo (`mailto:`) pre-cargado
hacia la dirección configurada, ya que el sitio no tiene backend propio.
Si prefiere recibir los mensajes directamente en una base de datos o
enviarlos sin depender del cliente de correo del visitante, puede
reemplazar `js/contact.js` por una integración con un servicio de
formularios (por ejemplo Formspree, Web3Forms o una función serverless).
