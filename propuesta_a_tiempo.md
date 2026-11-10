# A Tiempo

## Una señal temprana puede abrir una conversación.

**Propuesta de alerta temprana y acompañamiento humano para educación media superior**

> **La idea en una frase:** A Tiempo ayuda a las escuelas a notar cambios en la trayectoria escolar y a ofrecer apoyo humano antes de que un estudiante deje de asistir.

## El cambio que proponemos

Un estudiante empieza a faltar, baja su rendimiento o deja de entregar trabajos. Cada señal puede tener muchas explicaciones. A Tiempo ayuda a que esos cambios no se pierdan entre listas y carga de trabajo: organiza la información para que un adulto de confianza pueda acercarse, escuchar y explorar qué apoyo hace falta.

> **La IA no decide qué le pasa al estudiante. Ayuda a que una persona llegue a tiempo a preguntar.**

*Concepto preparado para prototipo y presentación. Las cifras de impacto y la efectividad de la intervención requieren validación local.*

## 1. Cómo funcionaría

A Tiempo convierte señales escolares en una invitación a revisar el caso con cuidado, no en una etiqueta sobre la persona.

1. **Observar cambios.** La escuela registra asistencia, tareas y calificaciones. Se consideran cambios relevantes en el tiempo, no una falta aislada.
2. **Revisión humana.** El orientador ve qué señales activaron la alerta, verifica el contexto y decide si conviene acercarse al estudiante.
3. **Conversar en privado.** Un adulto de confianza pregunta cómo está y qué apoyo, si alguno, le sería útil. No presupone una causa.
4. **Conectar con apoyo.** La escuela valora tutoría, apoyo económico disponible, transporte, flexibilidad académica o atención profesional, según el caso.
5. **Dar seguimiento.** El personal autorizado registra solo lo necesario para saber si se ofreció el apoyo y si hace falta seguimiento.

### Qué identifica al estudiante

- La escuela asigna un identificador interno (por ejemplo, `A-104`). Para la maqueta se usan datos enteramente ficticios.
- La identidad se conserva bajo control de la escuela; la herramienta muestra información solo al personal autorizado que necesita atender el caso.
- No se necesitan perfiles públicos, monitoreo de redes sociales, datos de ubicación ni información íntima para activar la primera revisión.
- La escuela debe acordar con su comunidad qué datos mínimos se usan, quién puede verlos, cómo corregirlos y cuándo eliminarlos.

## 2. Límites y papel de cada persona

El diseño debe proteger al estudiante de conclusiones apresuradas. La alerta señala un cambio; no revela la causa.

### El papel de la IA

- Reunir señales escolares que podrían estar dispersas y destacar cambios que merecen revisión.
- Explicar de forma legible qué señales dieron lugar a la alerta.
- Resumir el caso para el orientador y presentar opciones de apoyo previamente aprobadas por la escuela.
- Ayudar a redactar un acercamiento respetuoso, que invite a conversar sin acusar ni revelar información privada.

### Lo que la IA no hace

- No diagnostica depresión ni infiere salud mental a partir de faltas, calificaciones, comentarios o conducta.
- No declara que un alumno abandonará la escuela ni lo clasifica como “desertor”.
- No asigna becas, sanciones ni beneficios; no contacta automáticamente a estudiantes o familias.
- No sustituye al maestro, al orientador, a psicología ni a los protocolos profesionales de atención.

> **Salvaguarda central:** Si el estudiante expresa que necesita ayuda emocional, la respuesta debe ser una conversación confidencial con personal capacitado, siguiendo el protocolo de la escuela y las normas aplicables. Psicología puede ayudar a diseñar ese protocolo; la IA no reemplaza su evaluación.

### Roles

| Persona | Responsabilidad |
|---|---|
| Maestro | Aporta contexto educativo y observa cambios; no diagnostica. |
| Orientador | Revisa la alerta, decide si acercarse y coordina seguimiento. |
| Psicología | Asesora sobre conversación, confidencialidad, señales de derivación y rutas profesionales. |
| Estudiante | Puede explicar su situación y expresar qué tipo de apoyo desea, sin ser obligado a revelar información innecesaria. |

## 3. Demostración para el hackathon

La demo muestra el paso de señales dispersas a una conversación humana. No simula una predicción validada ni utiliza datos reales.

### Flujo sugerido

1. Pantalla del orientador con tres perfiles ficticios identificados como `A-104`, `B-208` y `C-311`.
2. En `A-104`, la herramienta observa más ausencias y tareas no entregadas que en semanas anteriores.
3. Aparece **“Revisar con el orientador”**, junto a las señales que motivaron la revisión y una nota: **“No se conoce la causa”**.
4. El orientador elige **“Conversar en privado para conocer qué apoyo necesita”**.
5. La siguiente pantalla ofrece apoyos posibles, sin asumir cuál corresponde: tutoría, explorar apoyos escolares disponibles o canalización humana.
6. La demo termina con **“seguimiento acordado”** y deja claro quién puede ver el registro.

> **La sorpresa no es que una IA calcule un riesgo.** Es ver cómo una señal escolar se convierte en un siguiente paso cuidadoso, comprensible y supervisado por una persona.

### Métricas para un piloto futuro

- **Utilidad de alertas:** cuántas revisiones se consideran pertinentes por orientadores.
- **Tiempo hasta la revisión y el primer contacto**, medido de forma agregada.
- **Tipo de apoyo ofrecido y aceptación voluntaria**, con acceso restringido.
- **Errores y diferencias entre grupos:** a quién se alerta de más o de menos.
- **Continuidad escolar y asistencia** a lo largo del tiempo, comparadas con una línea base y con cautela causal.

*No presentar estos indicadores como resultados. Son medidas que un piloto tendría que evaluar, con aprobación institucional y protección de datos.*

## 4. Preguntas difíciles del jurado

### ¿No existen ya sistemas de alerta temprana?

Sí, hay iniciativas en la región. No afirmamos inventar la categoría. Proponemos demostrar un flujo que conecte señales claras con revisión humana y opciones de apoyo concretas. La diferenciación debe estar en el acompañamiento, no solo en usar IA.

### ¿Cómo evitan etiquetar injustamente?

No mostramos una predicción como verdad sobre el estudiante. Mostramos las señales, pedimos revisión humana y permitimos corregir datos o descartar alertas. Una alerta no debe causar sanciones ni reducir oportunidades.

### ¿Detectan depresión?

No. No diagnosticamos ni inferimos salud mental. Psicología asesora el protocolo humano y las derivaciones; los casos que requieren atención se atienden por personal capacitado.

### ¿Y si la causa es económica?

No se infiere por las faltas. El orientador escucha al estudiante y, si quiere apoyo, explora opciones disponibles como becas, transporte o flexibilidad.

### ¿Tienen evidencia de que reducirá el abandono?

Aún no. El prototipo demuestra el flujo, no impacto probado. Un piloto debe medir utilidad, calidad del seguimiento y continuidad escolar, además de revisar errores y privacidad.

### ¿Qué necesita del jurado?

Apoyo para validar el flujo con una escuela, orientadores y estudiantes, y para definir criterios de privacidad, revisión y evaluación antes de un piloto.

## 5. Evidencia y precisión del problema

> **Dato recomendado para el pitch:** la SEP reporta **11.3% de abandono escolar en educación media superior en México para el ciclo 2023–2024**. Es una cifra nacional de un nivel y ciclo concretos; no equivale a una tasa para toda América Latina ni a la proporción que no completa secundaria.

Por eso no usaría la afirmación **“30%–40% de jóvenes de Latinoamérica no termina la secundaria”** sin comprobar el indicador exacto, países, periodo y definición. Abandono escolar y no completar un nivel educativo no son medidas intercambiables.

El BID plantea que las alertas deben combinarse con respuestas que atiendan las causas. La alerta, por sí sola, no resuelve la barrera que enfrenta el estudiante.

### Fuentes

- [SEP, *Principales cifras del Sistema Educativo Nacional 2024–2025*](https://planeacion.sep.gob.mx/Doc/estadistica_e_indicadores/principales_cifras/principales_cifras_2024_2025_bolsillo.pdf) (incluye indicador de abandono 2023–2024).
- [UNESCO, *Los sistemas de alerta temprana para prevenir el abandono escolar en América Latina y el Caribe*](https://www.unesco.org/es/articles/los-sistemas-de-alerta-temprana-para-prevenir-el-abandono-escolar-en-america-latina-y-el-caribe).
- [BID, *Desarrollo de habilidades: cómo darle vuelta al partido en América Latina y el Caribe*](https://www.iadb.org/es/blog/educacion/desarrollo-de-habilidades-como-darle-vuelta-al-partido-en-america-latina-y-el-caribe).

## 6. Evaluación honesta

- **Fortaleza:** problema relevante, demo fácil de entender y un rol específico para la IA: organizar señales para que un adulto pueda actuar antes.
- **Riesgo principal:** alertas erróneas, sesgos o falta de apoyo disponible pueden perjudicar al estudiante y erosionar la confianza.
- **Condición para avanzar:** validar con una escuela y profesionales, acordar datos mínimos y salvaguardas, y demostrar que las alertas conducen a apoyos reales. Si no hay capacidad de respuesta humana, no conviene desplegar el sistema.

### La promesa

> A Tiempo no predice el futuro de un estudiante. Ayuda a que una señal no pase inadvertida y abre la posibilidad de una conversación antes de que sea tarde.
