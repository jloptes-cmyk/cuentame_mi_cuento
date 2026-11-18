# Cuéntame mi cuento

**Tu nombre. Tu personaje. Tu aventura.**

Aplicación estática de cuentos infantiles personalizados. Primera historia: **Las golosinas del lobo / Les llaminadures del llop**.

## Qué incluye esta primera versión

- Personalización de nombre, personaje (unicornio o dinosaurio) y niña/niño.
- Lector adaptable al móvil, ocho páginas y cambio de idioma ES/CAT.
- Personalización gramatical en los textos, incluidos algunos adjetivos y referentes al personaje.
- Cuatro preguntas de comprensión al final: solo se señalan las incorrectas y desaparecen las acertadas, sin mostrar la solución.
- Preferencias guardadas **localmente** en el navegador; no hay cuentas, publicidad, analítica ni servidor para los nombres.
- PWA instalable y funcionamiento sin conexión una vez cargados los recursos.

## IMPORTANTE: historia de demostración

Los textos de `stories.js` son una **adaptación provisional del argumento** para probar todas las funciones. **No son una reproducción literal** del cuento original del autor. Antes de publicar para familias, reemplazar por el texto exacto validado, las ilustraciones y revisar las dos traducciones. Los símbolos emoji son marcadores visuales provisionales.

## Publicar gratis en GitHub Pages

1. En la cuenta `jloptes-cmyk`, usar el repositorio público ya creado: https://github.com/jloptes-cmyk/cuentame_mi_cuento
2. Subir **el contenido de esta carpeta** (no la carpeta anidada) a la rama `main`.
3. Abrir **Settings → Pages → Build and deployment → Deploy from a branch** y seleccionar **main / (root)**.
4. La dirección prevista será: https://jloptes-cmyk.github.io/cuentame_mi_cuento/

No requiere npm, compilación, API, claves ni servicios de pago. Para probarlo localmente, ejecutar `python3 -m http.server 8000` desde esta carpeta y abrir http://localhost:8000 .

## Cambiar contenido

- `stories.js`: páginas y variantes de la historia en ambos idiomas.
- `app.js`: interfaz, selección, navegación, cuestionario y almacenamiento local.
- `styles.css`: estilo visual.
- `index.html`: estructura de la pantalla.

## Privacidad

La configuración se guarda en `localStorage` del navegador del usuario. No se envía a un backend. Cualquier persona con acceso a ese navegador y perfil podría ver las preferencias guardadas; se pueden eliminar borrando los datos del sitio.

## Autoría

Proyecto desarrollado para Javier L. Teso. Texto original y universo narrativo: su autor. No se ha concedido aquí una licencia de reutilización comercial.
