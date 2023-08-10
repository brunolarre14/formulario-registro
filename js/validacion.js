function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}

function passOk() {
  let contrasenia1 = document.getElementById("password1").value;
  let contrasenia2 = document.getElementById("password2").value;
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let email = document.getElementById("email").value;
  let terminos = document.getElementById("terminos").value;

  if (contrasenia1.length >= 6 && contrasenia1 === contrasenia2 && nombre.length > 0 && apellido.length > 0 && email.length > 0 && terminos === true) {
    showAlertSuccess();
    console.log("success");
  } else {
    showAlertError();
    console.log("error");
  }
}
document.addEventListener("DOMContentLoaded", function () {
  let summit = document.getElementById("regBtn");
  summit.addEventListener("click", passOk);
});
