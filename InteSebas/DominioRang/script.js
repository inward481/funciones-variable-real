/* Ejercicio: identificar el dominio y la imagen de una correspondencia
   generada al azar entre dos conjuntos finitos.

   Los elementos que quedan sin flecha NO pertenecen al dominio: la función
   solo está definida sobre los elementos que sí tienen imagen. */

// --- Datos de partida ---------------------------------------------------

const CONJUNTO_A = [1, 2, 3, 4, 5, 6, 7, 8, 9];   // posibles entradas
const CONJUNTO_B = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']; // posibles salidas
const CANTIDAD = 5;        // cuántos elementos se muestran en cada conjunto
const PROB_ASIGNAR = 0.7;  // probabilidad de que un elemento tenga imagen

// Asignación vigente: { elementoDeA: elementoDeB o null }
let funcionActual = {};

// --- Utilidades ---------------------------------------------------------

/* Devuelve una copia barajada del arreglo (Fisher-Yates).
   Trabaja sobre una copia para no alterar CONJUNTO_A ni CONJUNTO_B. */
function barajar(arreglo) {
  const copia = arreglo.slice();
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

/* Convierte el texto que escribe el usuario en un arreglo de valores
   limpios: "3, 1 , 5" se vuelve ["1","3","5"]. */
function leerLista(texto) {
  return texto
    .split(',')
    .map(elemento => elemento.trim())
    .filter(elemento => elemento !== '')
    .sort();
}

/* Compara dos arreglos ya ordenados y sin repetidos. */
function sonIguales(lista1, lista2) {
  return lista1.length === lista2.length &&
         lista1.every((valor, indice) => valor === lista2[indice]);
}

// --- Generación de la función ------------------------------------------

function generarFuncion() {
  const elementosA = barajar(CONJUNTO_A).slice(0, CANTIDAD).sort((x, y) => x - y);
  const elementosB = barajar(CONJUNTO_B).slice(0, CANTIDAD).sort();

  // Se repite hasta que al menos un elemento tenga imagen; si no, el
  // ejercicio quedaría con dominio vacío y no tendría sentido.
  let asignados;
  do {
    asignados = 0;
    funcionActual = {};
    elementosA.forEach(elementoA => {
      if (Math.random() < PROB_ASIGNAR) {
        const posicion = Math.floor(Math.random() * elementosB.length);
        funcionActual[elementoA] = elementosB[posicion];
        asignados++;
      } else {
        funcionActual[elementoA] = null;  // se queda fuera del dominio
      }
    });
  } while (asignados === 0);

  dibujarDiagrama(elementosA, elementosB);

  // Se limpia lo que el usuario había escrito antes
  document.getElementById('dominio').value = '';
  document.getElementById('imagen').value = '';
  document.getElementById('respuesta').textContent = '';
  document.getElementById('respuesta').className = 'respuesta';
}

// --- Dibujo del diagrama sagital ---------------------------------------

function dibujarDiagrama(elementosA, elementosB) {
  const ANCHO = 420, ALTO = 250;
  const X_A = 85, X_B = 335;            // centro horizontal de cada óvalo
  const Y_INICIAL = 62, SEPARACION = 38; // posición vertical de los elementos

  // Altura de cada elemento según su posición en la lista
  const alturaA = indice => Y_INICIAL + indice * SEPARACION;

  let svg = `<svg viewBox="0 0 ${ANCHO} ${ALTO}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="punta" viewBox="0 0 10 10" refX="9" refY="5"
              markerWidth="5" markerHeight="5" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#c0392b"/>
      </marker>
    </defs>
    <ellipse class="ovalo" cx="${X_A}" cy="${ALTO / 2 + 12}" rx="58" ry="108"/>
    <ellipse class="ovalo" cx="${X_B}" cy="${ALTO / 2 + 12}" rx="58" ry="108"/>
    <text class="etiqueta" x="${X_A}" y="22" text-anchor="middle">A</text>
    <text class="etiqueta" x="${X_B}" y="22" text-anchor="middle">B</text>`;

  // Flechas primero, para que queden por debajo del texto
  elementosA.forEach((elementoA, i) => {
    const elementoB = funcionActual[elementoA];
    if (elementoB !== null) {
      const j = elementosB.indexOf(elementoB);
      svg += `<line class="flecha" x1="${X_A + 22}" y1="${alturaA(i)}"
                    x2="${X_B - 26}" y2="${alturaA(j)}" marker-end="url(#punta)"/>`;
    }
  });

  // Elementos de A: en gris si no tienen imagen
  elementosA.forEach((elementoA, i) => {
    const clase = funcionActual[elementoA] === null ? 'elemento sin-imagen' : 'elemento';
    svg += `<text class="${clase}" x="${X_A}" y="${alturaA(i) + 5}"
                  text-anchor="middle">${elementoA}</text>`;
  });

  // Elementos de B
  elementosB.forEach((elementoB, j) => {
    svg += `<text class="elemento" x="${X_B}" y="${alturaA(j) + 5}"
                  text-anchor="middle">${elementoB}</text>`;
  });

  svg += '</svg>';
  document.getElementById('diagrama').innerHTML = svg;
}

// --- Verificación de la respuesta --------------------------------------

function verificar() {
  // Dominio: los elementos de A que sí tienen imagen
  const dominioCorrecto = Object.keys(funcionActual)
    .filter(elemento => funcionActual[elemento] !== null)
    .sort();

  // Imagen: los valores alcanzados, sin repetir
  const imagenCorrecta = [...new Set(
    Object.values(funcionActual).filter(valor => valor !== null)
  )].sort();

  const dominioUsuario = leerLista(document.getElementById('dominio').value);
  const imagenUsuario = leerLista(document.getElementById('imagen').value);

  const dominioBien = sonIguales(dominioUsuario, dominioCorrecto);
  const imagenBien = sonIguales(imagenUsuario, imagenCorrecta);

  const respuesta = document.getElementById('respuesta');

  if (dominioBien && imagenBien) {
    respuesta.textContent = '¡Correcto! Dominio e imagen están bien identificados.';
    respuesta.className = 'respuesta correcto';
  } else if (!dominioBien && !imagenBien) {
    respuesta.textContent = 'Revisa los dos: ni el dominio ni la imagen coinciden.';
    respuesta.className = 'respuesta incorrecto';
  } else if (!dominioBien) {
    respuesta.textContent = 'La imagen está bien. Revisa el dominio: ¿incluiste algún elemento sin flecha?';
    respuesta.className = 'respuesta incorrecto';
  } else {
    respuesta.textContent = 'El dominio está bien. Revisa la imagen: los valores repetidos se escriben una sola vez.';
    respuesta.className = 'respuesta incorrecto';
  }
}

// --- Puesta en marcha ---------------------------------------------------

document.getElementById('btn-verificar').addEventListener('click', verificar);
document.getElementById('btn-nueva').addEventListener('click', generarFuncion);

// Permite verificar con la tecla Enter desde cualquiera de los dos campos
['dominio', 'imagen'].forEach(id => {
  document.getElementById(id).addEventListener('keydown', evento => {
    if (evento.key === 'Enter') verificar();
  });
});

generarFuncion();  // primera función al abrir la página
