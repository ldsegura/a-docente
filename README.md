# Lumina

Propuesta para ayudar al personal autorizado de Servicio Social de una preparatoria a revisar cambios en la trayectoria escolar y ofrecer apoyo humano a tiempo. La landing y la aplicación de prueba son prototipos para presentar la idea; no usan datos reales ni demuestran impacto validado.

## Abrir la landing

Desde la raíz del proyecto, inicia un servidor local:

```bash
python3 -m http.server 8765 --directory landing
```

Abre **[http://localhost:8765/](http://localhost:8765/)**. El archivo principal es [`landing/index.html`](landing/index.html). Si el puerto 8765 ya está ocupado, usa otro número en el comando y en la dirección.

- **Conoce a Lumina** desplaza a los dos espacios reservados para los videos del equipo.
- **Abrir la prueba** muestra [`landing/prueba.html`](landing/prueba.html) en un modal con iframe, sin salir de la landing. Se cierra con **Cerrar**, Escape o el botón Atrás.
- La aplicación de prueba carga Tailwind, Chart.js, Font Awesome e Inter desde servicios externos; necesita conexión a internet para verse y funcionar por completo.

## Documento de la entrega

El documento editable de la propuesta está en **[`output/docx/Equipo2_Lumina.docx`](output/docx/Equipo2_Lumina.docx)**. El PDF [`output/pdf/lumina_propuesta_borrador.pdf`](output/pdf/lumina_propuesta_borrador.pdf) es un borrador de consulta; verifica cuál versión se entregará antes de subirla.

La [guía de contenido de IDEA](formato_entrega_idea.md) pide un único archivo de **máximo cuatro páginas** con ficha del equipo, problema, objetivos, solución y uso de IA. La [rúbrica](rubrica_hackathonia.md) sirve para revisarlo antes de la entrega. Según la guía, solo el capitán del equipo sube el archivo al Aula Virtual.

## Archivos de apoyo

| Archivo | Para qué sirve |
|---|---|
| [`propuesta_lumina.md`](propuesta_lumina.md) | Alcance y límites de la propuesta. |
| [`borrador_propuesta_lumina.md`](borrador_propuesta_lumina.md) | Historia y flujo previstos para la presentación. |
| [`insumos_entrega_lumina.md`](insumos_entrega_lumina.md) | Evidencia, fuentes y puntos pendientes de verificar. |
| [`plan_hackathon.md`](plan_hackathon.md) | Fases del pitch y de la entrega. |
| [`plan_landing_lumina.md`](plan_landing_lumina.md) | Fases de diseño y construcción de la página. |
| [`landing/BRAND.md`](landing/BRAND.md) | Colores, logo, agente y funcionamiento de la prueba. |

## Pendientes antes de presentar

- Integrar los videos cuando el equipo los entregue, con subtítulos y transcripción.
- Confirmar la grafía definitiva del nombre: los documentos usan **Lumina**; en una petición inicial apareció **Lumnia**.
- Revisar la aplicación de prueba antes de mostrarla como producto final: hoy calcula un “riesgo” con factores familiares y económicos, mientras la propuesta principal se centra en señales escolares explicables y revisión humana. Usar solo datos ficticios.
