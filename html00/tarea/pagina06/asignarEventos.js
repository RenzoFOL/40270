export function asignarEventos() {
  const imagenes = document.querySelectorAll('img');
  imagenes.forEach((img, index) => {
    img.addEventListener('click', () => {
      alert('Hola ' + (index + 1));
    });
  });
}
