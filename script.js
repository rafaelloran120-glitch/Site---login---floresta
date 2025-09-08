// Função para mostrar/ocultar seções
function toggleSection(id) {
  const section = document.getElementById(id);
  if (section.style.display === "none" || section.style.display === "") {
    section.style.display = "block";
    section.scrollIntoView({ behavior: "smooth" });
  } else {
    section.style.display = "none";
  }
}

// Adiciona interatividade nos links do menu
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.getAttribute("href").substring(1);
      toggleSection(target);
    });
  });
});

// Mensagem de boas-vindas no console (quem abrir inspecionar vai ver isso 😎)
console.log("🌌 Bem-vindo ao site de curiosidades criado por Rafael Loran!");
