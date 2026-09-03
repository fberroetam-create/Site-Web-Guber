# Sitio web — Gubernare

Sitio estático (HTML + CSS + JS puro, sin build ni frameworks) para
**Servicios Tecnológicos Gubernare SpA**. Listo para subir por FTP/gestor
de archivos a Hostinger o cualquier hosting estático.

## Estructura

```
index.html         Inicio
servicios.html      Detalle de las 2 líneas de servicio
nosotros.html        Origen del nombre, modelo de negocio y forma de operar
contacto.html         Formulario e información de contacto
css/styles.css       Estilos
js/                   Scripts (nav, animaciones, formulario)
.htaccess              Cache y compresión para Apache/Hostinger
```

> Esta versión no incluye la sección de Noticias ni su panel de
> administración (se quitaron del sitio; el código puede recuperarse
> del historial de git si se necesita más adelante).

## Antes de publicar — datos de contacto

Datos ya configurados:

- Correo: `gubernar@gubernare.cl`
- WhatsApp: `+56 9 4205 4080`

Pendiente por reemplazar:

- Enlace de LinkedIn (actualmente `#` en el pie de página) → cuando crees la página de empresa en LinkedIn, reemplaza el `href="#"` del ícono de LinkedIn en el footer de cada página por su URL.

## Logo de marca

En `assets/logo/` están los archivos listos para usar fuera del sitio (redes sociales, documentos, firma de correo):

- `mark.svg` / `mark-512.png` — ícono cuadrado con fondo en gradiente. **Este es el que debes subir como foto de perfil al crear la página de LinkedIn** (funciona igual para WhatsApp Business, Instagram, etc.).
- `mark-transparent.svg` / `mark-transparent-512.png` — solo el símbolo, sin fondo, para ponerlo sobre superficies de color.
- `wordmark-light.svg` / `wordmark-light-1400.png` — ícono + "GUBERNARE" en texto claro, para fondos oscuros (portadas, presentaciones oscuras).
- `wordmark-dark.svg` / `wordmark-dark-1400.png` — ícono + "GUBERNARE" en texto oscuro, para fondos claros (documentos, letterhead, banner de LinkedIn).

El favicon del sitio (`assets/favicon.svg`) usa el mismo símbolo.

## Despliegue

1. Suba el contenido completo de esta carpeta (incluyendo `.htaccess`) a la raíz de su hosting.
2. Ante cada cambio de CSS/JS, suba un cache-buster nuevo (cambie `?v=20260902` por la fecha del despliegue en los archivos HTML) para evitar que el navegador sirva versiones antiguas.

## Formulario de contacto

El formulario de `contacto.html` compone un correo (`mailto:`) pre-cargado
hacia la dirección configurada, ya que el sitio no tiene backend propio.
Si prefiere recibir los mensajes directamente en una base de datos o
enviarlos sin depender del cliente de correo del visitante, puede
reemplazar `js/contact.js` por una integración con un servicio de
formularios (por ejemplo Formspree, Web3Forms o una función serverless).
