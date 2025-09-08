const canvas = document.getElementById("estrelas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const estrelas = [];

for (let i = 0; i < 200; i++) {
  estrelas.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    raio: Math.random() * 1.5,
    brilho: Math.random(),
    velocidade: Math.random() * 0.05
  });
}

function desenhar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  estrelas.forEach(e => {
    e.brilho += e.velocidade;
    const alpha = (Math.sin(e.brilho) + 1) / 2;
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    ctx.arc(e.x, e.y, e.raio, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(desenhar);
}

desenhar();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
