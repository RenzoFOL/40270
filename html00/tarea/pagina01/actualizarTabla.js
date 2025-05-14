export function actualizarTabla(idElemento, contenido) {
  const elem = document.getElementById(idElemento);
  if (elem) elem.innerHTML = contenido;
}
