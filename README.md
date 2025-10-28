# Portfolio de Gabriel Oyarzun

Este repositorio contiene una maqueta estática para presentar la experiencia de **Gabriel Oyarzun**, arquitecto urbanista enfocado en el desarrollo sostenible de los territorios en Francia.

El sitio reproduce la tarjeta informativa mostrada en la referencia visual del cliente, incorporando el mapa de Francia, los marcadores de proyectos, el retrato del profesional y la indicación interactiva con un puntero pixelado.

## Estructura del proyecto

```
Sitio-web/
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── img/
│   │   ├── marker.svg
│   │   ├── pointer.svg
│   │   └── portrait.svg
│   └── js/
│       └── main.js
└── README.md
```

## Características principales

- Diseño inspirado en las tarjetas de referencia proporcionadas por el cliente para desktop y mobile.
- Mapa de Francia con marcadores interactivos que muestran la descripción del proyecto activo.
- Tarjeta de perfil con retrato ilustrado y lista de áreas de trabajo.
- Indicador de estadísticas de estudios realizados en Francia con CTA y puntero pixelado personalizado.
- Diseño responsive con tipografía Poppins y efectos de vidrio esmerilado.

## Uso

1. Clona o descarga este repositorio.
2. Abre el archivo `index.html` en tu navegador preferido.
3. Interactúa con los marcadores del mapa para conocer más sobre los proyectos destacados.

## Personalización

- Ajusta los proyectos editando los atributos `data-label` y `data-project` de los marcadores en `index.html`.
- Modifica colores y sombras actualizando las variables declaradas en `:root` dentro de `assets/css/styles.css`.
- Sustituye los recursos gráficos en `assets/img/` por otros SVG o imágenes propias si lo deseas.

## Licencia

El contenido se ofrece como referencia de portafolio y puede adaptarse libremente según las necesidades del cliente.
