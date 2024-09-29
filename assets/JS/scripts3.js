const ingresarBtn = document.getElementById("ingresar");
const mensaje = document.getElementById("mensaje");

ingresarBtn.addEventListener("click", function () {
  const digito1 = document.getElementById("digito1").value;
  const digito2 = document.getElementById("digito2").value;
  const digito3 = document.getElementById("digito3").value;

  const password = digito1 + digito2 + digito3;

  if (password === "911") {
    mensaje.textContent = "password 1 correcto";
  } else if (password === "714") {
    mensaje.textContent = "password 2 es correcto";
  } else {
    mensaje.textContent = "password incorrecto";
  }
});
