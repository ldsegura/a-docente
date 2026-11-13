# Identidad visual inicial de Lumina

**Nombre provisional:** Lumina. La petición reciente escribió “Lumnia”; confirmar la grafía antes de cerrar la identidad.

## Concepto

Lumina representa una luz que ayuda a notar cambios a tiempo. El símbolo del logo es un destello sencillo dentro de un cuadro azul redondeado. El agente ilustrado conserva ese destello en el pecho para conectar ambas piezas. Su aspecto amable acompaña la explicación del producto; no sugiere que el agente sustituya a Servicio Social.

## Colores

| Uso | Color | Código |
|---|---|---|
| Marca y CTA | Índigo | `#4338CA` |
| Texto principal | Azul noche | `#172554` |
| Texto secundario | Azul grisáceo | `#435477` |
| Fondo | Blanco azulado | `#F7FAFF` |
| Superficies | Blanco | `#FFFFFF` |
| Acento de apoyo | Menta | `#CCF7EA` |
| Acento cálido | Amarillo | `#FDE68A` |

Los acentos suaves son fondos o detalles. El texto corrido utiliza azul noche o azul grisáceo. Los botones principales usan blanco sobre índigo.

## Tipografía y formas

La hoja de estilos pide Nunito para títulos y DM Sans para texto, con fuentes del sistema como respaldo. La página no depende de un servicio externo de fuentes. Las esquinas redondeadas y las sombras suaves aportan cercanía; las tarjetas de datos permanecen sobrias y legibles.

## Archivos

- `assets/logo.svg`: logo y favicon vectorial.
- `assets/agent.svg`: ilustración vectorial del agente.
- `preview.png`: captura de la primera versión de la landing.

## Espacios para videos

`index.html` incluye dos tarjetas con posters visuales. La primera reproduce `assets/video_a2.mp4` en un modal propio que conserva el diseño del modal de la prueba. El botón de play y **Ver video** abren ese modal; al cerrarlo, la reproducción se detiene. La segunda tarjeta sigue reservada para el video del caso ficticio A-104. Cuando llegue, agregar su archivo, subtítulos `.vtt` y transcripción.

## Prueba interactiva

El enlace **Conoce a Lumina** desplaza a la sección de videos. El botón **Abrir la prueba** abre `prueba.html` dentro de un modal con iframe, a pantalla completa en móvil. El modal se cierra con su botón, con Escape o con el botón Atrás del navegador; el enlace original a `prueba.html` queda como alternativa si JavaScript no está disponible. La maqueta usa su propia navegación inferior y desplazamiento dentro del iframe. Es una copia de `Prueba.html` aportado por el equipo, con aviso de datos ficticios, almacenamiento de historial limitado a la sesión y escape del nombre introducido antes de mostrarlo en el historial. Sus dependencias visuales (Tailwind, Chart.js, Font Awesome e Inter) se cargan desde servicios externos y requieren conexión.
