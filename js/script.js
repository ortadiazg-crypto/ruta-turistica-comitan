// =========================================================
// Ruta Turística de Comitán de Domínguez
// Datos: data/lugares.js  ·  Plano: SVG dentro de index.html
// Cada lugar se enlaza por ID: datos (id) = tarjeta (#tarjeta-ID)
// = icono del plano (<g id="lugar-ID" data-lugar-id="ID">).
// =========================================================
const CIUDAD = 'Comitán de Domínguez, Chiapas';

const ICONOS = {
  'Tienda y Módulo Turístico': '🛍️',
  'Arquitectura Religiosa': '⛪',
  'Centros Culturales y Museos': '🏛️',
  'Mercado y Artesanías': '🧺',
  'Transporte Público': '🚌'
};

const lugaresPorId = new Map();
let puntoSeleccionado = null;
let lugarActual = null;

const dialogo = document.getElementById('detalleLugar');

/* ---------- Google Maps ----------
   Sin "origin", Google Maps usa la ubicación actual del usuario
   como punto de partida y traza la ruta hasta el lugar elegido. */
function urlRuta(lugar) {
  const destino = encodeURIComponent((lugar.consultaMapa || lugar.nombre) + ', ' + CIUDAD);
  return `https://www.google.com/maps/dir/?api=1&destination=${destino}`;
}

/* ---------- utilidades ---------- */
function el(tag, clase, texto) {
  const e = document.createElement(tag);
  if (clase) e.className = clase;
  if (texto !== undefined) e.textContent = texto;
  return e;
}

function imagen(lugar, clase) {
  const img = el('img', clase);
  img.src = lugar.imagen;
  img.alt = lugar.nombre;
  img.loading = 'lazy';
  img.addEventListener('error', () => img.remove());
  return img;
}

/* ---------- tarjetas ---------- */
function crearTarjeta(lugar, color) {
  const tarjeta = el('article', 'tarjeta-lugar');
  tarjeta.id = 'tarjeta-' + lugar.id;
  tarjeta.style.setProperty('--color-cat', color);

  const figura = el('div', 'tarjeta-imagen');
  figura.appendChild(imagen(lugar, ''));
  tarjeta.appendChild(figura);

  const cuerpo = el('div', 'tarjeta-cuerpo');
  cuerpo.appendChild(el('h3', '', lugar.nombre));
  cuerpo.appendChild(el('p', 'tarjeta-direccion', '📍 ' + lugar.direccion));

  const acciones = el('div', 'tarjeta-acciones');
  const boton = el('button', 'ver-detalle', 'Ver descripción');
  boton.type = 'button';
  boton.setAttribute('aria-label', 'Ver descripción de ' + lugar.nombre);
  boton.addEventListener('click', () => mostrarLugar(lugar.id));
  const ruta = el('a', 'ir-maps', 'Cómo llegar');
  ruta.href = urlRuta(lugar);
  ruta.target = '_blank';
  ruta.rel = 'noopener noreferrer';
  ruta.setAttribute('aria-label', 'Cómo llegar a ' + lugar.nombre + ' en Google Maps');
  acciones.append(boton, ruta);
  cuerpo.appendChild(acciones);
  tarjeta.appendChild(cuerpo);
  return tarjeta;
}

function crearSeccion(grupo) {
  const seccion = el('section', 'seccion-categoria');
  seccion.id = 'cat-' + grupo.id;

  const titulo = el('h2', 'titulo-categoria');
  titulo.style.backgroundColor = grupo.color;
  titulo.append(
    el('span', 'titulo-icono', ICONOS[grupo.categoria] || '📌'),
    el('span', '', grupo.categoria),
    el('span', 'titulo-contador', String(grupo.lugares.length))
  );
  seccion.appendChild(titulo);

  const grid = el('div', 'lista-lugares');
  grupo.lugares.forEach(l => grid.appendChild(crearTarjeta(l, grupo.color)));
  seccion.appendChild(grid);
  return seccion;
}

/* ---------- filtros y búsqueda ---------- */
function crearFiltros(datos, onFiltrar) {
  const contenedor = document.getElementById('filtros');
  const total = datos.reduce((n, g) => n + (g.soloMapa ? 0 : g.lugares.length), 0);

  const crear = (texto, categoria, activo) => {
    const b = el('button', 'chip' + (activo ? ' activo' : ''), texto);
    b.type = 'button';
    b.dataset.categoria = categoria;
    b.setAttribute('aria-pressed', activo ? 'true' : 'false');
    contenedor.appendChild(b);
  };
  crear(`Todos (${total})`, 'todos', true);
  datos.filter(g => !g.soloMapa).forEach(g => crear(`${ICONOS[g.categoria] || ''} ${g.categoria} (${g.lugares.length})`, g.categoria, false));

  contenedor.addEventListener('click', e => {
    const b = e.target.closest('.chip');
    if (!b) return;
    contenedor.querySelectorAll('.chip').forEach(x => {
      x.classList.remove('activo');
      x.setAttribute('aria-pressed', 'false');
    });
    b.classList.add('activo');
    b.setAttribute('aria-pressed', 'true');
    onFiltrar(b.dataset.categoria);
  });
}

function normalizar(t) {
  return t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

function iniciarFiltrado(datos) {
  const sinResultados = document.getElementById('sinResultados');
  const buscador = document.getElementById('buscador');
  let categoriaActiva = 'todos';

  function aplicar() {
    const texto = normalizar(buscador.value.trim());
    const visibles = new Set();
    let hayTarjetas = false;

    datos.forEach(grupo => {
      const okCat = categoriaActiva === 'todos' || categoriaActiva === grupo.categoria;
      const seccion = grupo.soloMapa ? null : document.getElementById('cat-' + grupo.id);
      let n = 0;
      grupo.lugares.forEach(lugar => {
        const ok = okCat && (!texto ||
          normalizar(lugar.nombre).includes(texto) ||
          normalizar(lugar.direccion).includes(texto));
        if (ok) visibles.add(String(lugar.id));
        if (!grupo.soloMapa) {
          document.getElementById('tarjeta-' + lugar.id).hidden = !ok;
          if (ok) { n++; hayTarjetas = true; }
        }
      });
      if (seccion) seccion.hidden = n === 0;
    });

    sinResultados.hidden = hayTarjetas;
    // Los iconos que no coinciden se atenúan en el plano
    document.querySelectorAll('.punto-mapa').forEach(p =>
      p.classList.toggle('atenuado', !visibles.has(p.dataset.lugarId)));
  }

  crearFiltros(datos, c => { categoriaActiva = c; aplicar(); });
  buscador.addEventListener('input', aplicar);
}

/* ---------- ventana de detalle ---------- */
function mostrarLugar(id) {
  const lugar = lugaresPorId.get(String(id));
  if (!lugar) return;
  lugarActual = lugar;

  if (puntoSeleccionado) {
    puntoSeleccionado.classList.remove('seleccionado');
    puntoSeleccionado.setAttribute('aria-pressed', 'false');
  }
  puntoSeleccionado = document.getElementById('lugar-' + id);
  if (puntoSeleccionado) {
    puntoSeleccionado.classList.add('seleccionado');
    puntoSeleccionado.setAttribute('aria-pressed', 'true');
  }

  const img = document.getElementById('imagenLugar');
  img.hidden = false;
  img.onerror = () => { img.hidden = true; };
  img.src = lugar.imagen;
  img.alt = lugar.nombre;

  document.getElementById('nombreLugar').textContent = lugar.nombre;
  document.getElementById('categoriaLugar').textContent = lugar.categoria;
  document.getElementById('descripcionLugar').textContent = lugar.descripcion;
  const dir = document.getElementById('direccionLugar');
  dir.textContent = lugar.direccion ? '📍 ' + lugar.direccion : '';
  dir.hidden = !lugar.direccion;
  const ruta = document.getElementById('rutaLugar');
  ruta.hidden = !!lugar.sinRuta;
  if (!lugar.sinRuta) ruta.href = urlRuta(lugar);
  if (!dialogo.open) dialogo.showModal();
}

document.getElementById('cerrarDetalle').addEventListener('click', () => dialogo.close());
dialogo.addEventListener('click', e => { if (e.target === dialogo) dialogo.close(); });
dialogo.addEventListener('close', () => {
  if (puntoSeleccionado) {
    puntoSeleccionado.classList.remove('seleccionado');
    puntoSeleccionado.setAttribute('aria-pressed', 'false');
    puntoSeleccionado = null;
  }
});
/* ---------- mapa ---------- */
function prepararMapa() {
  try {
    const svg = document.querySelector('#mapaInteractivo svg');
    if (!svg) throw new Error('No se encontró el SVG del mapa');
    svg.setAttribute('role', 'group');
    svg.setAttribute('aria-label', 'Mapa interactivo de Comitán');
    svg.querySelectorAll('.punto-mapa').forEach(punto => {
      const lugar = lugaresPorId.get(punto.dataset.lugarId);
      if (!lugar) throw new Error('ID sin datos: ' + punto.dataset.lugarId);
      punto.setAttribute('role', 'button');
      punto.setAttribute('tabindex', '0');
      punto.setAttribute('aria-label', lugar.nombre);
      punto.setAttribute('aria-haspopup', 'dialog');
      punto.setAttribute('aria-pressed', 'false');
      const t = document.createElementNS('http://www.w3.org/2000/svg', 'title');
      t.textContent = lugar.nombre;
      punto.appendChild(t);
      punto.addEventListener('click', () => mostrarLugar(punto.dataset.lugarId));
      punto.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          mostrarLugar(punto.dataset.lugarId);
        }
      });
    });
  } catch (error) {
    console.error(error);
    document.getElementById('mapaInteractivo').textContent = '';
    document.getElementById('errorMapa').hidden = false;
  }
}

let zoom = 1;
function cambiarZoom(v) {
  zoom = Math.min(3, Math.max(1, v));
  document.getElementById('mapaInteractivo').style.width = (zoom * 100) + '%';
  document.getElementById('nivelZoom').textContent = Math.round(zoom * 100) + '%';
  document.getElementById('alejarMapa').disabled = zoom === 1;
  document.getElementById('acercarMapa').disabled = zoom === 3;
}
document.getElementById('acercarMapa').addEventListener('click', () => cambiarZoom(zoom + 0.5));
document.getElementById('alejarMapa').addEventListener('click', () => cambiarZoom(zoom - 0.5));
document.getElementById('restablecerMapa').addEventListener('click', () => cambiarZoom(1));
cambiarZoom(1);

/* ---------- arranque ---------- */
function iniciar() {
  LUGARES.forEach(g => g.lugares.forEach(l =>
    lugaresPorId.set(String(l.id), { ...l, categoria: g.categoria })));

  const contenedor = document.getElementById('app');
  LUGARES.filter(g => !g.soloMapa).forEach(g => contenedor.appendChild(crearSeccion(g)));
  prepararMapa();
  iniciarFiltrado(LUGARES);
}
iniciar();
