export function actualizarApp(idElemento, contenido) {
  const app = document.getElementById(idElemento);
  if (app) {
    app.innerHTML = contenido;
  }
}
