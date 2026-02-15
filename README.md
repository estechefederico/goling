# Goling – Landing Dropshipping en Argentina

Sitio de **Goling**: landing de dropshipping en Argentina. Ofrece tienda online en 7 días (planes Starter y Premium), sin stock propio, con Tiendanube y proveedores locales.

**Dominio:** [dropshipping.goling.com.ar](https://dropshipping.goling.com.ar)

**Stack:** HTML, Tailwind CSS, JavaScript vanilla. Sin frameworks ni build obligatorio.

---

## Estructura

| Ruta | Descripción |
|------|-------------|
| `view/index.html` | Página principal (una sola página) |
| `view/css/styles.css` | Estilos propios (complementan Tailwind) |
| `view/css/fonts-inter.css` | Fuente Inter |
| `view/js/app.js` | Menú móvil, scroll suave, carrusel de testimonios, header |
| `view/js/tailwind.js` | Tailwind CSS (CDN / standalone) |
| `view/images/` | Logo, favicon, assets |
| `robots.txt` | Reglas para crawlers (Google, etc.) |
| `sitemap.xml` | Sitemap para SEO |
| `.htaccess` | Configuración Apache (cache, GZIP) — solo si hosteás en Apache |
| `CNAME` | Dominio custom para GitHub Pages |

No hay sistema de “secciones” ni `build.js`: el contenido vive en `view/index.html`.

---

## Cómo correrlo en local

```bash
# Opción 1: abrir el HTML
open view/index.html

# Opción 2: servidor en view/
cd view && python3 -m http.server 8000
# → http://localhost:8000

# Opción 3: con Node
npx serve view -p 3000
```

---

## Cómo desplegar

- **GitHub Pages:** activar Pages en el repo (rama `main`, carpeta raíz o `/docs`). El `index.html` que se sirve debe estar en la **raíz pública** del sitio (junto con `robots.txt` y `sitemap.xml` si querés que estén en la raíz del dominio).
- **CNAME:** en la raíz que use Pages, con una sola línea: `dropshipping.goling.com.ar`.
- Si el sitio se genera desde otra carpeta (ej. `view/`), copiá también `robots.txt` y `sitemap.xml` a esa raíz para que las URLs sean `https://dropshipping.goling.com.ar/robots.txt` y `https://dropshipping.goling.com.ar/sitemap.xml`.

---

## SEO

- **robots.txt:** `Allow: /` y URL del sitemap.
- **sitemap.xml:** una entrada con la URL de la landing; actualizá `lastmod` cuando cambies la página.
- **En `index.html`:** meta description, keywords, Open Graph, Twitter Card y JSON-LD (Schema.org) orientados a “dropshipping” y “dropshipping en Argentina”.

Recomendado: dar de alta el sitio y enviar el sitemap en [Google Search Console](https://search.google.com/search-console).

---

## .htaccess

Solo aplica si el hosting es **Apache** (GitHub Pages no lo usa). Incluye:

- Cache para imágenes, CSS, JS y fuentes.
- Compresión GZIP.
- Ejemplos comentados para forzar HTTPS y quitar www.

Subí `.htaccess` a la raíz del sitio en el servidor y descomentá lo que necesites.

---

## Licencia

[LICENSE](LICENSE)
