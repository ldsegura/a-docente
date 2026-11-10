# A Tiempo | Cómo reutilizar los registros del plantel

**Paso 2 · En revisión.** Propuesta para la demo y preguntas para validar con el primer plantel.

## Qué encontramos en preparatorias mexicanas

| Ejemplo | Qué se pudo comprobar | Qué falta confirmar |
|---|---|---|
| CBTIS 62, La Paz | Su página de servicios escolares muestra un reporte de alumnos en riesgo por parcial con asistencia y calificaciones, y una opción XLS en esa sección. [Servicios Escolares del CBTIS 62](https://www.cbtis62.edu.mx/escolares/) | Si el exportado se puede reutilizar en el plantel elegido, qué campos trae y si los datos llegan antes del cierre del parcial. No se probó acceso ni descarga. |
| CECyTE Baja California | Su portal describe un sistema docente para registrar calificaciones e inasistencias. [Sistemas propios de CECyTE BC](https://www.cecytebc.edu.mx/sitio/linces_tecnologias.asp) | Si existe exportación, con qué detalle y quién puede autorizarla. |
| MIGE en una preparatoria oficial del Estado de México | La EPOAN de Ecatepec documenta que su módulo de control escolar recibe calificaciones de docentes. [Trámites y control escolar de EPOAN](https://epoanecatepec.edu.mx/tramites/) | Si el módulo ofrece asistencia y exportación. |
| Moodle, si el plantel ya lo usa | Su documentación describe exportación de calificaciones en Excel y otros formatos. [Documentación de Moodle](https://docs.moodle.org/502/en/grade_export) | Si ahí están las materias del grupo, si las matrículas coinciden con control escolar y si hay datos de asistencia. |

La SEP ya anunció en 2013 un sistema de alerta temprana para bachillerato público. El antecedente del CBTIS 62 es especialmente cercano a nuestra idea porque incluye un reporte de riesgo. Conviene centrar la propuesta en el trabajo posterior al reporte, desde verificar las señales hasta acordar un seguimiento. [SEP, comunicado sobre alerta temprana en bachillerato](https://www.gob.mx/sep/prensa/comunicado-138-la-sep-instrumenta-un-sistema-para-disminuir-el-abandono-escolar-en-bachillerato).

## Si el plantel ya trabaja con Excel

El docente sigue usando su hoja habitual. Si el plantel autoriza reutilizarla, A Tiempo puede leer las columnas que ya existen y convertirlas en casos para revisar. La misma lógica aplica si los datos vienen del sistema de control escolar. El formato depende de dónde trabaja hoy el plantel.

**Ejemplo ficticio.** La hoja registra una falta en las primeras diez clases y cuatro en las diez siguientes para `A-104`. A Tiempo muestra el cambio al docente y le permite abrir las filas que lo explican. Si alguna fila está sin capturar, la distingue de una ausencia. La IA resume los registros y sugiere un siguiente paso en la pantalla del docente.

> **Caso A-104 · Revisar asistencia**  
> Las faltas aumentaron de 1 a 4 entre dos periodos de 10 clases. Revisa si están justificadas o si hay un error de registro. Si el cambio se confirma, considera conversar en privado con el estudiante para conocer si necesita apoyo.

El docente decide si corresponde conversar, pedir apoyo a orientación o cerrar la alerta. Si acuerda una acción con el estudiante, registra quién dará seguimiento y cuándo. La pantalla es de uso interno del personal autorizado.

Si la hoja ya tiene filtros, fórmulas o un semáforo, se puede tomar esa lista como entrada. La ventaja que se debe comprobar es cuánto tiempo ahorra al preparar el contacto y si los casos reciben seguimiento. Si la hoja solo tiene totales por parcial, la app puede comparar cortes equivalentes. Las ausencias por día u horario requieren un registro con ese detalle.

## Cómo evitamos la doble captura

| Situación del plantel | Entrada propuesta para A Tiempo |
|---|---|
| Ya tiene una alerta o reporte de riesgo | Usar el reporte como punto de partida, con los registros que lo explican si están disponibles. El asesor revisa y prepara el contacto desde esa misma lista. |
| Tiene control escolar o una plataforma de cursos con exportación | Control escolar entrega el Excel o CSV que ya genera. Se configura una vez la correspondencia de columnas y se importa el siguiente corte sin volver a escribir los datos. Si se vuelve a subir el mismo corte, se actualizan los registros que correspondan sin repetir alertas. |
| Tiene una interfaz de integración autorizada | Evaluar una conexión de solo lectura después de verificar permisos, campos y frecuencia. Es una posibilidad de piloto, no una capacidad demostrada. |
| El docente ya usa una hoja compartida | Reutilizar esa hoja o su exportación. Una sola plantilla del plantel si no existe un formato aprovechable. |
| El pase de lista solo está en papel | Confirmar si hay alguien que ya lo consolida y con qué frecuencia. Si hace falta digitalizar cada clase exclusivamente para A Tiempo, ese plantel no es un buen primer piloto para este enfoque. |

El sistema escolar conserva el registro oficial. La nueva información de A Tiempo se limita al estado de la revisión, responsable, apoyo acordado y fecha de seguimiento. En la primera fase, cada docente autorizado consulta únicamente sus grupos y puede preguntar al agente desde su cuenta. Si el plantel ya registra tutorías, revisar si ese proceso puede mantenerse en la herramienta existente.

## Qué hace falta para que la alerta llegue a tiempo

- **Asistencia.** Identificador interno, grupo, fecha o corte, materia cuando aplique y estado de asistencia. Distinguir falta, justificación y registro pendiente. Para una revisión semanal hacen falta datos actualizados al menos con esa frecuencia.
- **Calificaciones.** Identificador interno, materia, corte y resultado. Si el único dato es la boleta al final del parcial, sirve como contexto. Con esa fuente sola no se puede mostrar un patrón de ausencias por día u horario.
- **Emparejamiento.** Usar matrícula interna o un código equivalente asignado por el plantel. Cuando falta una clave común, pedir que control escolar confirme la equivalencia antes de combinar datos. La demo usa códigos ficticios.
- **Datos justos para la tarea.** Solicitar únicamente las columnas necesarias del grupo autorizado. Mantener fuera del archivo que procesa la IA nombres, CURP, contactos, notas sensibles y expedientes completos. La identidad se resuelve dentro del plantel para el personal asignado.

## Qué mostraríamos en el video

Importar una copia ficticia de un reporte semanal con fechas de asistencia. El docente ve la fecha de actualización, abre un caso, comprueba las faltas y revisa la recomendación que le muestra el asistente. Después de conversar, registra un apoyo disponible y una fecha de seguimiento. Si en el plantel real solo existen totales por parcial, ajustar la historia y la pantalla al detalle disponible.

## Preguntas para una conversación con el plantel

1. ¿Dónde se registra hoy asistencia, calificaciones y tutorías? ¿Quién captura y quién revisa?
2. ¿Cuándo está visible cada dato y quién puede exportarlo? ¿Podemos ver los encabezados de un reporte vacío o ficticio?
3. ¿Los reportes comparten un identificador por alumno? ¿Cómo aparecen las justificaciones y las correcciones?
4. ¿Ya reciben alertas? ¿Qué paso entre el reporte y el apoyo consume más tiempo? ¿Quién se haría cargo de responder?
5. ¿Qué apoyos tiene el plantel y quién puede autorizarlos? Si la escuela ya realiza bien ese seguimiento, ¿qué mejora justificaría incorporar otra herramienta?
