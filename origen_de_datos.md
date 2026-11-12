# Lumina | Cómo reutilizar los registros del plantel

**Paso 2 · En revisión.** Propuesta para la demo y preguntas para validar con el primer plantel.

## Qué encontramos en preparatorias mexicanas

En la conversación exploratoria del equipo se mencionó el uso de sistemas gubernamentales. Quedaron por confirmar el plantel o subsistema, el nombre de la plataforma y la forma en que Servicio Social recibe los reportes. Estos ejemplos sirven para reconocerla.

| Ejemplo | Qué se pudo comprobar | Qué falta confirmar |
|---|---|---|
| **SISEEMS · CBTis y CETis** | El CBTis 164 enlaza el Sistema de Seguimiento y Evaluación de la Educación Media Superior. El CETis 31 documenta cómo se utiliza el porcentaje de asistencia por parcial en la evaluación. [Portal del CBTis 164](https://www.cbtis164.edu.mx/web/siseems.php) · [Aviso del CETis 31](https://www.cetis031.edu.mx/avisos/Doc_avisos/aviso_2025_bis.pdf) | Si el plantel puede exportar faltas y calificaciones, y si la asistencia está disponible por clase, fecha o únicamente por parcial. |
| CBTIS 62, La Paz | Su página de servicios escolares muestra un reporte de alumnos en riesgo por parcial con asistencia y calificaciones, y una opción XLS en esa sección. [Servicios Escolares del CBTIS 62](https://www.cbtis62.edu.mx/escolares/) | Si el exportado se puede reutilizar en el plantel elegido, qué campos trae y si los datos llegan antes del cierre del parcial. No se probó acceso ni descarga. |
| **SICE · Colegio de Bachilleres de Quintana Roo** | El Colegio identifica su Sistema de Control Escolar como SICE, ofrece consulta de calificaciones y documenta que Control Escolar recibe listas de asistencia. [Boletín SICE](https://controlescolar.cobaqroo.edu.mx/Alumno/PDFboletinCTE) · [Consulta de calificaciones](https://controlescolar.cobaqroo.edu.mx/Alumno/Calificaciones/ConsultaCalificaciones.jsp) · [Manual del plantel, p. 45](https://www.cobaqroo.edu.mx/paginaweb2021/Descargas/Juridico/Manual%20de%20Organizacion%20del%20Plantel.pdf#page=45) | Si las listas de asistencia están cargadas en SICE y se pueden obtener juntas con las calificaciones. |
| **SIIAA · Colegio de Bachilleres, Plantel 3 Iztacalco** | Un documento del plantel describe la carga de calificaciones e inasistencias por parcial en SIIAA, además de reportes quincenales y una herramienta de alerta temprana. [Informe del plantel](https://transparencia.cbachilleres.edu.mx/Respuestas/Docs/330007024000588/330007024000588_CSC.pdf) | Qué reportes están disponibles para Servicio Social y cómo se registra el seguimiento de cada caso. |
| **SAE y Seguimiento Académico · CONALEP** | El Sistema de Administración Escolar recibe calificaciones. El módulo de Seguimiento Académico documentado por CONALEP las usa para generar un semáforo y reportes. [Módulo de Seguimiento Académico](https://cursos.conalep.edu.mx/mod/page/view.php?id=1263) | Si el plantel usa el módulo, si dispone de asistencia y si los reportes se pueden reutilizar. |
| **Saeko · CECyTE Quintana Roo** | El portal institucional enlaza a Saeko para captura de calificaciones del personal docente. [Portal de CECyTE Quintana Roo](https://cecyteqroo.edu.mx/portal/) | Qué módulos están activos en el plantel, cómo registra asistencia y quién puede exportar. |
| **HD y SIIACE · CECyTE Baja California** | Su portal describe HD como herramienta docente para registrar calificaciones e inasistencias, y SIIACE como sistema de administración académica. [Sistemas propios de CECyTE BC](https://www.cecytebc.edu.mx/sitio/linces_tecnologias.asp) | Si existe exportación, con qué detalle y quién puede autorizarla. |
| MIGE en una preparatoria oficial del Estado de México | La EPOAN de Ecatepec documenta que su módulo de control escolar recibe calificaciones de docentes. [Trámites y control escolar de EPOAN](https://epoanecatepec.edu.mx/tramites/) | Si el módulo ofrece asistencia y exportación. |
| Moodle, si el plantel ya lo usa | Su documentación describe exportación de calificaciones en Excel y otros formatos. [Documentación de Moodle](https://docs.moodle.org/502/en/grade_export) | Si ahí están las materias del grupo, si las matrículas coinciden con control escolar y si hay datos de asistencia. |

La SEP ya anunció en 2013 un sistema de alerta temprana para bachillerato público. El antecedente del CBTIS 62 es especialmente cercano a nuestra idea porque incluye un reporte de riesgo. Conviene centrar la propuesta en el trabajo posterior al reporte, desde verificar las señales hasta acordar un seguimiento. [SEP, comunicado sobre alerta temprana en bachillerato](https://www.gob.mx/sep/prensa/comunicado-138-la-sep-instrumenta-un-sistema-para-disminuir-el-abandono-escolar-en-bachillerato).

Para reconocer la plataforma basta el nombre o una captura del encabezado del portal sin información personal. Para probar el flujo de Lumina, lo más útil sería un reporte vacío o ficticio con sus columnas y la frecuencia de actualización. Una boleta por parcial y un registro de asistencia por clase permiten preguntas distintas.

### La pista «SAT» y las opciones de integración

- **SAT** puede referirse a un *Sistema de Alerta Temprana*. Una iniciativa legislativa mexicana de enero de 2026 usa esas siglas para el seguimiento de señales como faltas y rendimiento. Es una coincidencia plausible con lo que recuerda el equipo. La sigla también describe un tipo de sistema y por sí sola no identifica el programa que usa el plantel. [Iniciativa legislativa, Sistema de Información Legislativa](https://sil.gobernacion.gob.mx/Archivos/Documentos/2026/01/asun_5006458_20260126_1766003359.pdf).
- **Saeko** documenta carga de expedientes, pase de lista, condensados de calificaciones y una API REST con permisos institucionales. En un piloto, Lumina podría partir de los reportes que Control Escolar ya entrega. Una conexión de solo lectura depende del permiso institucional y de que la API ofrezca los campos requeridos. [Guía administrativa de Saeko](https://www.saeko.io/es/ayuda/administrativos/inicio) · [API de Saeko](https://apidoc.saeko.io/).
- **PDF o foto.** El diseño contempla extraer campos de una lista o reporte autorizado, mostrar el origen de los valores y pedir que el personal compruebe el resultado antes de actualizar la ficha. Por ejemplo, una celda ilegible queda como dato por verificar. La carga se limita a documentos pertinentes al caso.
- **MCP.** Un conector de Lumina podría ofrecer al asistente consultas de solo lectura, por ejemplo pedir la ficha por código. La conexión con la escuela seguiría usando un archivo autorizado o una API institucional y aplicaría permisos en ese origen. [Documentación de MCP](https://ts.sdk.modelcontextprotocol.io/v2/).

## Si el plantel ya trabaja con Excel

El docente sigue usando su hoja habitual. Si el plantel autoriza reutilizarla, Lumina puede leer las columnas que ya existen y convertirlas en casos para revisar. La misma lógica aplica si los datos vienen del sistema de control escolar. El formato depende de dónde trabaja hoy el plantel.

**Ejemplo ficticio.** La hoja registra una falta en las primeras diez clases y cuatro en las diez siguientes para `A-104`. Lumina muestra el cambio al equipo de Servicio Social y le permite abrir las filas que lo explican. Si alguna fila está sin capturar, la distingue de una ausencia. La IA resume los registros y sugiere un siguiente paso en el panel de Servicio Social.

> **Caso A-104 · Revisar asistencia**  
> Las faltas aumentaron de 1 a 4 entre dos periodos de 10 clases. Revisa si están justificadas o si hay un error de registro. Si el cambio se confirma, considera conversar en privado con el estudiante para conocer si necesita apoyo.

Servicio Social decide si corresponde conversar, pedir apoyo a orientación o cerrar la alerta. Si acuerda una acción con el estudiante, registra quién dará seguimiento y cuándo. La pantalla es de uso interno del personal autorizado.

Si la hoja ya tiene filtros, fórmulas o un semáforo, se puede tomar esa lista como entrada. La ventaja que se debe comprobar es cuánto tiempo ahorra al preparar el contacto y si los casos reciben seguimiento. Si la hoja solo tiene totales por parcial, la app puede comparar cortes equivalentes. Las ausencias por día u horario requieren un registro con ese detalle.

## Cómo evitamos la doble captura

| Situación del plantel | Entrada propuesta para Lumina |
|---|---|
| Ya tiene una alerta o reporte de riesgo | Usar el reporte como punto de partida, con los registros que lo explican si están disponibles. Servicio Social revisa y prepara el contacto desde esa misma lista. |
| Tiene control escolar o una plataforma de cursos con exportación | Control escolar entrega el Excel o CSV que ya genera. Se configura una vez la correspondencia de columnas y se importa el siguiente corte sin volver a escribir los datos. Si se vuelve a subir el mismo corte, se actualizan los registros que correspondan sin repetir alertas. |
| Tiene una interfaz de integración autorizada | Evaluar una conexión de solo lectura después de verificar permisos, campos y frecuencia. Es una posibilidad de piloto, no una capacidad demostrada. |
| El docente ya usa una hoja compartida | Reutilizar esa hoja o su exportación. Una sola plantilla del plantel si no existe un formato aprovechable. |
| El pase de lista solo está en papel | Confirmar si hay alguien que ya lo consolida y con qué frecuencia. Si hace falta digitalizar cada clase exclusivamente para Lumina, ese plantel no es un buen primer piloto para este enfoque. |

El sistema escolar conserva el registro oficial. La nueva información de Lumina se limita al estado de la revisión, responsable, apoyo acordado y fecha de seguimiento. En la primera fase, solo el personal autorizado de Servicio Social consulta los casos asignados y puede preguntar al agente desde su cuenta. Si el plantel ya registra tutorías, revisar si ese proceso puede mantenerse en la herramienta existente.

## Qué hace falta para que la alerta llegue a tiempo

- **Asistencia.** Identificador interno, grupo, fecha o corte, materia cuando aplique y estado de asistencia. Distinguir falta, justificación y registro pendiente. Para una revisión semanal hacen falta datos actualizados al menos con esa frecuencia.
- **Calificaciones.** Identificador interno, materia, corte y resultado. Si el único dato es la boleta al final del parcial, sirve como contexto. Con esa fuente sola no se puede mostrar un patrón de ausencias por día u horario.
- **Emparejamiento.** Usar matrícula interna o un código equivalente asignado por el plantel. Cuando falta una clave común, pedir que control escolar confirme la equivalencia antes de combinar datos. La demo usa códigos ficticios.
- **Datos justos para la tarea.** Solicitar únicamente las columnas necesarias del grupo autorizado. Mantener fuera del archivo que procesa la IA nombres, CURP, contactos, notas sensibles y expedientes completos. La identidad se resuelve dentro del plantel para el personal asignado.

## Qué mostraríamos en el video

Importar una copia ficticia de un reporte semanal con fechas de asistencia. Servicio Social ve la fecha de actualización, abre un caso, comprueba las faltas y revisa la recomendación que le muestra el asistente. Después de conversar, registra un apoyo disponible y una fecha de seguimiento. Si en el plantel real solo existen totales por parcial, ajustar la historia y la pantalla al detalle disponible.

## Preguntas para una conversación con el plantel

1. ¿Dónde se registra hoy asistencia, calificaciones y tutorías? ¿Quién captura y quién revisa?
2. ¿Cuándo está visible cada dato y quién puede exportarlo? ¿Podemos ver los encabezados de un reporte vacío o ficticio?
3. ¿Los reportes comparten un identificador por alumno? ¿Cómo aparecen las justificaciones y las correcciones?
4. ¿Ya reciben alertas? ¿Qué paso entre el reporte y el apoyo consume más tiempo? ¿Quién se haría cargo de responder?
5. ¿Qué apoyos tiene el plantel y quién puede autorizarlos? Si la escuela ya realiza bien ese seguimiento, ¿qué mejora justificaría incorporar otra herramienta?
