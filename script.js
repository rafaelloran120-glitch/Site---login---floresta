// Lista de curiosidades (mistura universo + Java + Python)
const curiosidades = [
  "O universo tem aproximadamente 13,8 bilhões de anos.",
  "Em Java, tudo é orientado a objetos.",
  "Python foi criado por Guido van Rossum em 1991.",
  "O maior planeta do sistema solar é Júpiter.",
  "Java é usado em mais de 3 bilhões de dispositivos.",
  "Python é muito usado em inteligência artificial.",
  "As estrelas que vemos podem já ter morrido.",
  "Java foi lançado pela Sun Microsystems em 1995.",
  "Python é conhecido por sua sintaxe simples.",
  "A Via Láctea tem entre 100 e 400 bilhões de estrelas.",
  // ... (adicione até 50 aqui se quiser mais)
];

// Inserindo no site
window.onload = () => {
  const lista = document.getElementById("curiosidades-lista");
  curiosidades.forEach(c => {
    const item = document.createElement("li");
    item.textContent = c;
    lista.appendChild(item);
  });
};
