export function capturarDatos() {
  const user = document.getElementById("user");
  const password = document.getElementById("password");

  console.log(user.value);
  console.log(password.value);

  return { user, password };
}
