# Introducción a las funciones de variable real

Libro digital interactivo sobre funciones de variable real. Recorre el lenguaje
de conjuntos, la definición de función, el dominio y la imagen, la gráfica, la
monotonía y la continuidad, con recursos interactivos en cada sección y
ejercicios propuestos con sus respuestas.

**Autor:** Juan Sebastián Romero Burgos · Bogotá, Colombia · 2026

📖 **[Leer el libro](https://inward481.github.io/funciones-variable-real/)**

---

## De qué trata

El libro está pensado para quien se encuentra por primera vez con el concepto de
función y quiere entenderlo bien, no solo aprender a operar con él. Dos ideas
guían la escritura:

**La definición manda sobre el dibujo.** Cada vez que la intuición visual y la
definición formal se separan, el libro lo advierte de forma explícita. El caso
más claro es la continuidad: la imagen de "dibujar la gráfica sin levantar el
lápiz" es útil, pero falla en cuanto el dominio deja de ser un intervalo, y la
función 1/x lo demuestra. El libro lo dice en vez de esconderlo.

**Se aprende moviendo cosas.** Cada concepto viene acompañado de un recurso que
se puede manipular. Varios no solo ilustran: generan ejercicios al azar y
corrigen lo que el lector escribe.

### Contenido

| Sección | Temas |
|---|---|
| Conjuntos | pertenencia, extensión y comprensión, conjunto vacío, subconjunto, igualdad, unión, intersección, diferencia, complemento, leyes de De Morgan, intervalos, producto cartesiano |
| Funciones | definición, existencia y unicidad, qué *no* es una función, dominio, codominio e imagen, dominio natural |
| Funciones de variable real | gráfica, prueba de la recta vertical, funciones elementales, funciones definidas a trozos |
| Monotonía | creciente y decreciente, extremos relativos |
| Continuidad | definición con límites, discontinuidad evitable, de salto y esencial |
| Cierre | ocho ejercicios propuestos con respuestas |

---

## Los recursos interactivos

Seis recursos escritos desde cero para este libro, en **HTML, CSS y JavaScript
sin ninguna librería externa**. Dibujan con SVG generado por código, se ajustan
solos al espacio disponible y funcionan sin conexión a internet.

| Carpeta | Qué hace |
|---|---|
| `InteSebas/DominioRang/` | Genera al azar una correspondencia entre dos conjuntos finitos, la dibuja como diagrama sagital y pide identificar el dominio y la imagen. Los elementos sin flecha no pertenecen al dominio |
| `InteSebas/Intervalos/` | Unión e intersección de dos intervalos sobre la recta real, con extremos abiertos, cerrados o infinitos. Muestra el resultado en notación de intervalos y por comprensión |
| `InteSebas/funcion-montana-cicla/` | Perfil de altitud de una etapa ciclista como función de los kilómetros recorridos, con punto arrastrable y tabla para completar |
| `InteSebas/DominioRangoGrafica/` | Punto móvil sobre la gráfica de seis funciones distintas, con el dominio marcado sobre el eje horizontal y el rango sobre el vertical |
| `InteSebas/DominioRangoEjercicio/` | Genera gráficas al azar formadas por trozos separados y pide escribir el dominio y el rango en notación de intervalos. Corrige la respuesta |
| `InteSebas/Monotonia/` | Genera curvas al azar y pide los intervalos de crecimiento, decrecimiento y constancia, junto con los extremos relativos. Corrige cada categoría por separado |

Cada uno se abre en grande con el botón de la esquina superior derecha.

### Un detalle de implementación

Los dos generadores de ejercicios no calculan las respuestas por muestreo, que
daría resultados con decimales feos y errores en los casos límite. Construyen la
curva de modo que las respuestas se conozcan de forma exacta.

En el de monotonía, la gráfica se arma por tramos entre nodos de coordenadas
enteras, y cada tramo se declara de antemano como creciente, decreciente o
constante. Dentro de cada tramo se usa la curva suave `s(t) = 3t² − 2t³`, que va
de 0 a 1 con tangente horizontal en los dos extremos: así el trazo queda
redondeado y los extremos relativos caen siempre en puntos de coordenadas
enteras.

El otro caso delicado es el rango cuando hay extremos abiertos. Si una parábola
hacia abajo tiene los dos bordes del dominio abiertos, su máximo se alcanza en el
vértice, que está en el interior, y por tanto el rango es **cerrado** por arriba.
En cambio, en una recta creciente con el borde derecho abierto, el máximo solo se
rozaría en ese borde excluido, y el rango es **abierto**. El código distingue los
dos casos comparando el extremo global con el mejor valor alcanzado en el
interior del tramo.

---

## Créditos

Este libro no habría existido sin el trabajo de otras personas. Todo el material
ajeno se usa con crédito a sus autores.

### La plantilla

El libro está construido sobre la plantilla
**[`libro_interactivo`](https://github.com/jlongi/libro_interactivo)** de
**Joel Espinosa Longi**, del Instituto de Matemáticas de la UNAM, con diseño de
**Juan Guillermo Rivera Berrío**. Es la que aporta el paso de páginas, la tabla
de contenido, el modo oscuro, el botón de ampliar los interactivos y las
herramientas del menú de configuración.

El código de la plantilla vive en `book/`, `extra/`, `editores/`, `tools/` e
`interactivos/`.

### RED Descartes

La [Red Educativa Digital Descartes](https://proyectodescartes.org) es una
asociación sin ánimo de lucro que desde 2013 promueve la renovación metodológica
en la enseñanza de las matemáticas mediante recursos digitales interactivos. De
su repositorio proviene la escena de jeroglíficos incluida en
`InteSebas/jeroglificos-JS/`, hecha con DescartesJS y adaptada para este libro.

### GeoGebra

El único recurso embebido desde un servidor externo es
**[Llenado de recipientes: gráfica](https://www.geogebra.org/m/TbYpSmjd)**, de
**Juan David Serrano Díaz**, en la sección "¡Piensa en ello!". Es también el
único que necesita conexión a internet.

### Otras herramientas

- **[KaTeX](https://katex.org)** (licencia MIT) renderiza todas las fórmulas.
- Tipografías **[Lato](https://fonts.google.com/specimen/Lato)** y
  **[Ubuntu Mono](https://fonts.google.com/specimen/Ubuntu+Mono)**, bajo SIL Open
  Font License.
- La imagen de portada proviene de [Pixabay](https://pixabay.com).

---

## Cómo verlo

No hace falta servidor. Basta clonar y abrir `index.html`:

```bash
git clone https://github.com/inward481/funciones-variable-real.git
cd funciones-variable-real
xdg-open index.html        # Linux
# open index.html          # macOS
```

Si prefieres servirlo en local:

```bash
python3 -m http.server 8000
# luego abre http://localhost:8000
```

## Estructura del repositorio

```
.
├── index.html          el libro completo: contenido, estilos y estructura
├── InteSebas/          los recursos interactivos
├── book/               núcleo de la plantilla (JS y CSS)
├── extra/              estilos propios, fuentes y KaTeX
├── imagenes/           imágenes del libro
├── images/             iconos de la plantilla
├── editores/           editor HTML del menú de herramientas
├── tools/              calculadora del menú de herramientas
└── interactivos/       editor de fórmulas del menú de herramientas
```

---

## Sobre el autor

**Juan Sebastián Romero Burgos** es matemático, egresado del programa de
Matemáticas de la Fundación Universitaria Konrad Lorenz, en Bogotá, Colombia. Le
apasionan el análisis matemático, la topología algebraica, las ecuaciones
diferenciales ordinarias (EDO), la programación y el área actuarial.

Esta es una obra personal del autor. No constituye una publicación oficial de
ninguna institución.

---

## Licencia

Obra publicada bajo licencia
**[Creative Commons Atribución-NoComercial-CompartirIgual 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es)**
(CC BY-NC-SA 4.0), salvo donde se indique lo contrario. El material de terceros
conserva su licencia original; los detalles están en el archivo
[LICENSE](LICENSE).

Eres libre de copiar, distribuir y adaptar el libro, siempre que des crédito, no
lo uses con fines comerciales y compartas tus adaptaciones bajo la misma
licencia.
