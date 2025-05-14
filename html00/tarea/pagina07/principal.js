import { capturarDatos } from "./capturarDatos.js";
import { configurarFormulario } from "./configurarFormulario.js";
import { actualizarFormulario } from "./actualizarFormulario.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Inicio de la página");

  const boton = document.getElementById("boton");

  boton.addEventListener("click", () => {
    const { user, password } = capturarDatos();
    actualizarFormulario(user, password);
    configurarFormulario();
    document.forms[0].submit();
  });
});
