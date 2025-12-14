// Script básico para interacción
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnClick");
  const msg = document.getElementById("message");

  btn.addEventListener("click", () => {
    msg.textContent = "¡Has hecho clic en el botón!";
    msg.style.color = "#4CAF50";
  });
});
