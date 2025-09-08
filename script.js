// ====== LOGIN ======
function login(event) {
  event.preventDefault(); // Impede o reload da página
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  // Usuário e senha fixos (pode trocar depois)
  if (user === "rafael" && pass === "1234") {
    alert("Bem-vindo, " + user + "!");
    window.location.href = "dashboard.html"; // Redireciona pro painel
  } else {
    alert("Usuário ou senha incorretos!");
  }
}

// ====== MENU ANIMAÇÃO ======
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-links a");

  links.forEach(link => {
    link.addEventListener("mouseover", () => {
      link.style.color = "#00ff99";
    });

    link.addEventListener("mouseout", () => {
      link.style.color = "#fff";
    });
  });
});

// ====== MENSAGEM DE BOAS-VINDAS NO DASHBOARD ======
window.onload = function() {
  if (document.body.contains(document.querySelector("#home"))) {
    setTimeout(() => {
      alert("🚀 Bem-vindo ao site do Rafael!");
    }, 1000);
  }
};
