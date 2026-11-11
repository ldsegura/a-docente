# A Tiempo | Borrador de la propuesta

**Estado · Paso 2 en revisión.** El guion oral y el del video se integrarán después de revisar la evidencia y la historia con el equipo. [Plan de entregas](plan_hackathon.md) · [Investigación y señales](investigacion_y_senales.md) · [Origen de los datos](origen_de_datos.md) · [Propuesta base](propuesta_a_tiempo.md)

## Ficha de la propuesta

| Elemento | Propuesta inicial |
|---|---|
| Título | **A Tiempo** |
| Descripción | Asistente de uso interno para docentes de preparatoria. Muestra cambios en la asistencia y el desempeño y sugiere qué revisar y qué acción considerar. |
| Problema | Las señales de que un estudiante empieza a desconectarse pueden quedar repartidas entre listas de asistencia, entregas y boletas. Cuando alguien las reúne, puede haber pasado el mejor momento para ofrecer apoyo. |
| Solución | Reutilizar el reporte escolar que ya genera el plantel, si lo tiene disponible. Revisar las señales con reglas visibles o partir de una alerta existente. La IA resume los registros y muestra una recomendación al docente. El docente verifica los datos y decide si conversa con el estudiante o solicita apoyo a orientación. |
| Beneficio esperado | Acortar el tiempo entre una señal escolar y el primer contacto útil. Reducir las bajas es el objetivo a evaluar en un piloto. |
| Usuario inicial | Docente de preparatoria con acceso autorizado a sus grupos, por ejemplo quien también es tutor o asesor. En la primera fase, solo los docentes autorizados consultan información y hacen preguntas al agente. La participación del estudiante ocurre en la conversación con su docente. |

## Historia para los jueces · Primera versión

**Caso ficticio.** Daniela está en preparatoria. Durante dos semanas empieza a faltar a primera hora y deja dos actividades pendientes. Su maestra ve las entregas. El asesor tiene el registro de asistencia. Los datos se consultan por separado.

A Tiempo reúne las dos señales y le indica a la docente qué registros revisar. Ella comprueba las fechas e invita a Daniela a conversar en privado. Daniela explica que su turno de trabajo cambió y que quiere ponerse al día. Juntas acuerdan un plan para recuperar las dos actividades. La docente deja una fecha para revisar si el plan le está sirviendo.

La lista de asistencia muestra las faltas de Daniela y el registro de entregas muestra las dos actividades pendientes. Al revisar ambas señales juntas, la docente puede conversar con Daniela y acordar un seguimiento mientras sigue inscrita.

## Alcance de la propuesta para presentar al equipo

Daniela ilustra la ruta de trabajo y horarios. Los mismos registros pueden llevar a otras acciones según lo que el docente confirme. Por ejemplo, varias entregas pendientes podrían terminar en una tutoría de álgebra o en un ajuste de fechas si el problema es la carga de evaluaciones. Un trámite de reinscripción pendiente podría llevar a control escolar si el plantel dispone de ese dato. La [matriz de rutas](investigacion_y_senales.md#rutas-de-apoyo-para-integrar) distingue qué activa la revisión y qué apoyos podría ofrecer el plantel.

## Pitch oral para el jurado · Por desarrollar en el paso 4

El guion incluirá texto hablado, duración por bloque, señales de cambio de diapositiva y petición al jurado. El límite es de **5 minutos**, incluida la demo o el video si las bases lo exigen. El caso de Daniela abrirá el pitch. Después se explicarán la fricción del asesor, el flujo de apoyo y cómo se evaluaría el piloto.

## Pitch para el video · Por desarrollar en el paso 5

Recorrido inicial de cuatro pantallas. **Bandeja del docente → detalle de la alerta con fechas → recomendación para el docente → apoyo y seguimiento acordados.** El guion incluirá voz en off, textos y tiempos por escena. La pantalla usará el código ficticio `A-104`. La historia puede nombrar a Daniela en la narración.

La bandeja y el detalle muestran el código por defecto. El docente autorizado puede usar **Mostrar nombre** en la ficha que está revisando y volver a ocultarlo. Al cambiar de caso, el nombre se oculta de nuevo. En el video se pueden dejar visibles solo los códigos.

La bandeja distingue casos que se abren al revisar registros escolares de solicitudes o reportes que llegan al docente. El primer grupo incluye asistencia, rezago, reinscripción y fechas de evaluación. El segundo permite consultar rutas de apoyo por horarios laborales, transporte, cuidados o adaptación. Los reportes sensibles muestran el canal institucional y mantienen los detalles en el expediente correspondiente.

Cada ficha explica **cómo llegaron los datos**, **qué recibió A Tiempo**, **por qué se abrió el caso** y **qué puede hacer el docente**. En el caso ficticio de `A-104`, el plantel facilita el pase de lista y el reporte de entregas. La regla ilustrativa compara dos cortes de diez clases y abre una revisión si las faltas aumentan en dos o más. Aquí pasaron de una a cuatro. Las dos entregas pendientes aportan contexto. La docente verifica las capturas y conversa en privado. Cuando Daniela confirma que cambió su turno laboral, la docente puede consultar qué ajustes autoriza el plantel y acordar un seguimiento.

Ejemplo de consulta desde la cuenta docente: «¿Qué cambió en la asistencia de A-104 y qué registros conviene revisar?». El agente responde en esa misma cuenta con los datos disponibles y una sugerencia para el docente.

La bandeja partiría de registros escolares ficticios. La primera pantalla puede mostrar el origen y la fecha del reporte. Excel sirve como ejemplo si el plantel ya usa una hoja o puede exportar su reporte. El beneficio que debe mostrar la demo es cómo el asesor pasa de esos registros a una conversación y un seguimiento.

## Preguntas del jurado y fuentes · Por integrar

Preparar respuestas sobre por qué aporta la IA, qué pasa si el registro está mal, qué puede ver cada persona, quién atiende los casos y cómo se sabría si el piloto funciona. Las fuentes y los límites de cada afirmación se trabajan en [Investigación y señales](investigacion_y_senales.md).
