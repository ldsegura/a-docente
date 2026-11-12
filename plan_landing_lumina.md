# Lumina | Plan por fases de la landing

## Objetivo

Crear una landing visual para presentar Lumina en el hackathon: explicar el problema, mostrar al agente y enseñar cómo una señal escolar se convierte en una revisión y un apoyo humano. La audiencia principal de la página será el jurado y posibles planteles; su lenguaje visual debe sentirse cercano a estudiantes de educación media superior sin parecer infantil.

**Base del proyecto:** [propuesta_lumina.md](propuesta_lumina.md), [borrador_propuesta_lumina.md](borrador_propuesta_lumina.md) y [plan_hackathon.md](plan_hackathon.md). La captura compartida sirve como referencia visual para una tarjeta de video con el agente en primer plano; no define las capacidades reales del producto. El nombre aparece como **Lumina** en los documentos y como **Lumnia** en la petición reciente. Usar **Lumina** provisionalmente y confirmar la grafía antes de cerrar el logo.

## Dirección creativa inicial

- **Idea de marca:** una luz que ayuda a notar señales y abrir una conversación a tiempo. El símbolo puede combinar un destello suave con un globo de diálogo o una trayectoria de puntos. Evitar símbolos de vigilancia, diagnósticos o una “puntuación de riesgo” como identidad central.
- **Tono:** optimista, claro y empático. El agente es una guía visual amistosa; quien decide y acompaña es Servicio Social.
- **Paleta propuesta:** índigo profundo `#4338CA` para identidad y CTA; azul noche `#172554` para texto; fondo marfil azulado `#F7FAFF`; menta `#CCF7EA` y amarillo cálido `#FDE68A` como acentos; coral `#F97373` solo en detalles. Verificar contraste en todas las combinaciones finales.
- **Tipografía propuesta:** Nunito en títulos y DM Sans en texto. Formas redondeadas moderadas, tarjetas claras y mucho espacio. El personaje puede tener volumen 3D suave, pero la interfaz seguirá siendo limpia.
- **Movimiento:** entradas breves al hacer scroll, brillo discreto del símbolo y respuesta táctil de botones. Respetar `prefers-reduced-motion` y evitar animación continua que distraiga.

## Arquitectura de la página

1. **Hero:** “Una señal temprana puede abrir una conversación”, explicación en una frase y CTA “Ver cómo funciona”. Ilustración del agente junto a una muestra abstracta del flujo.
2. **Video 1 · Conoce al agente:** tarjeta grande, esquinas redondeadas y poster del agente inspirados en la captura. Explica qué organiza Lumina y a quién ayuda. Control de reproducción visible.
3. **Cómo funciona:** señales escolares → revisión por Servicio Social → conversación → apoyo y seguimiento. Cada paso indica qué hace el agente y qué decide la persona.
4. **Video 2 · Caso ficticio A-104:** demo corta de bandeja, detalle de señales con fechas, opciones de apoyo y seguimiento. Si solo hay un video disponible, este espacio podrá usar una secuencia estática de pantallas sin dejar un reproductor vacío.
5. **Confianza y límites:** datos ficticios en la demo, acceso autorizado, explicación de señales y revisión humana. No presentar diagnósticos ni impacto probado.
6. **Cierre:** invitación a ver la demo o conversar sobre un piloto; pie con créditos y fuentes pertinentes.

## Fases y puntos de revisión

| Fase | Trabajo | Entregable revisable | Decisión para pasar a la siguiente |
|---|---|---|---|
| **0. Descubrimiento** | Leer propuesta, captura y guía UI/UX; fijar audiencia, mensaje y estructura. | Este plan. | Validar nombre, tono y papel de los dos videos. |
| **1. Branding** | Refinar paleta, tipografía, tono verbal, símbolo y variantes del logo. Definir tokens de color y reglas de uso. | Mini guía de marca, logo SVG claro/oscuro y favicon. | Elegir una dirección visual antes de producir imágenes. |
| **2. Arte del agente** | Diseñar el personaje y los posters de video con una misma identidad; preparar ilustraciones o imágenes web optimizadas. | Assets finales en `landing/assets/`, con versiones para escritorio y móvil. | Aprobar personaje y encuadre; reemplazar cualquier gráfico que sugiera una capacidad no demostrada. |
| **3. Estructura HTML** | Construir la landing semántica con CSS responsive y contenido fiel a la propuesta. Integrar posters y espacios preparados para uno o dos videos. | `landing/index.html`, estilos y assets; navegación y CTA funcionales. | Revisar texto, jerarquía y composición en móvil y escritorio. |
| **4. Video e interacciones** | Integrar videos cuando existan, subtítulos y transcripción; animaciones de entrada y controles accesibles. | Página interactiva con poster de respaldo para medios aún pendientes. | Confirmar que la historia del caso y el guion de video coinciden. |
| **5. Revisión final** | Probar a 375, 768, 1024 y 1440 px; teclado, contraste, movimiento reducido, carga y enlaces. | Landing lista para mostrar localmente y lista de ajustes finales. | Aprobación visual y de contenido antes de publicar o compartir. |

## Reglas de contenido y seguridad para la demo

- Usar solo casos y datos ficticios. Mostrar el código `A-104` por defecto en cualquier interfaz de ejemplo.
- La alerta indica un cambio observable; no atribuye causas, no diagnostica y no decide por la escuela.
- Si se menciona una cifra o resultado, indicar su fuente y distinguir contexto externo de resultados propios aún no medidos.
- Los videos deberán tener poster, controles, subtítulos y una alternativa textual. No reproducir automáticamente con sonido.

## Enfoque técnico inicial

El repositorio actual no contiene una aplicación web. Para esta pieza conviene comenzar con **HTML, CSS y JavaScript ligeros**, sin instalación ni compilación. Mantener las imágenes y videos como archivos separados y referencias fáciles de sustituir. Si después se necesita formulario, analítica, CMS o publicación, se decidirá como una fase adicional.

## Criterio de éxito

En menos de un minuto, una persona que ve la landing debe entender **qué problema atiende Lumina, qué hace el agente, qué decide Servicio Social y cómo se vería el caso ficticio**. La página debe verse sólida en móvil, poder recorrerse con teclado y funcionar aunque aún falte el segundo video.

## Avance de la primera versión

Se creó una landing local en [`landing/index.html`](landing/index.html) con logo y agente vectoriales, guía inicial de marca en [`landing/BRAND.md`](landing/BRAND.md), animaciones ligeras y dos espacios de video reservados. La integración de los archivos de video, subtítulos y transcripciones queda para la fase 4. Antes de cerrar la marca falta confirmar si el nombre definitivo será **Lumina** o **Lumnia**.

La maqueta aportada como `Prueba.html` se incorporó como [`landing/prueba.html`](landing/prueba.html). **Conoce a Lumina** mantiene el desplazamiento a los videos; **Abrir la prueba** abre la maqueta en un modal con iframe dentro de la landing. Se presenta explícitamente como prueba ilustrativa: el cálculo de riesgo y los factores de esa maqueta no equivalen al flujo delimitado en la propuesta principal y necesitan revisión del equipo antes de cualquier presentación como producto final.
