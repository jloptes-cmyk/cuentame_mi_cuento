# Cuéntame mi cuento

**Tu nombre. Tu personaje. Tu aventura.**

Lector digital bilingüe para personalizar cuentos infantiles. Primera historia: **Las golosinas del lobo**, de Javier L. Teso.

## Texto íntegro y variantes

La narración castellana procede del **cuento original íntegro** que ha facilitado el autor, sin recortar escenas, diálogos, desenlace ni moraleja. Se conserva una copia intocable en `originales/Las_golosinas_del_lobo_original.txt`.

- Nombre personalizable al escribirlo en la portada, sin modificar el argumento.
- Unicornio niña (unicornia), unicornio niño, dinosaurio niña (dinosauria) y dinosaurio niño.
- Concordancias y descripciones físicas de cada criatura, sin reescritura de escenas.
- En `variantes/` se incluyen las cuatro versiones castellanas completas con nombres de ejemplo Iris y Leo para cotejar el resultado.
- La versión **CAT** utiliza una traducción catalana completa y personalizada, no el resumen provisional anterior. La versión castellana facilitada por el autor sigue siendo el texto de referencia.
- Lectura repartida en **10 páginas**, sin eliminar ningún párrafo de la narración.

## Características

- Castellano y catalán.
- Nombre y opciones de niña/niño y unicornio/dinosaurio, introducidos en la pantalla inicial.
- Cuestionario de comprensión al final: las respuestas correctas desaparecen y las incorrectas pueden repetirse, sin revelar la solución.
- Compatible con móviles y PWA instalable y usable sin conexión después de la primera carga.
- Sin cuentas ni servicios externos: el nombre se guarda solamente en el navegador con `localStorage`.

## Pruebas de concordancia

Con Node.js: `node tests/variants.test.js`.

Comprueba las cuatro variantes castellanas **contra los textos completos** de `variantes/`, que no queden etiquetas sin sustituir y que el nombre se escape antes de insertarse en HTML. También verifica las variantes catalanas.

## Publicar en GitHub Pages

Repositorio: https://github.com/jloptes-cmyk/cuentame_mi_cuento

En **Settings → Pages**, elegir **Deploy from a branch → main / (root)**. Dirección prevista: https://jloptes-cmyk.github.io/cuentame_mi_cuento/.

La app no necesita compilación ni dependencias. Para probarla en local, desde la raíz ejecutar `python3 -m http.server 8000`.

## Autoría

**Texto original y universo narrativo: Javier L. Teso.** Todos los derechos reservados. La traducción catalana y las adaptaciones mantienen esa atribución. No se concede licencia comercial del texto mediante este repositorio.
