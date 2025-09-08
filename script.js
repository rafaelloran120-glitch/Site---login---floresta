// Curiosidades Java
const curiosidadesJava = [
  "Java foi criado em 1995 pela Sun Microsystems.",
  "É uma das linguagens mais usadas no mundo.",
  "O lema de Java é: 'escreva uma vez, rode em qualquer lugar'.",
  "Java é usado em sistemas bancários.",
  "O Minecraft foi feito originalmente em Java.",
  "Java é orientado a objetos.",
  "Tem forte segurança e é usado em grandes empresas.",
  "Android usa Java como base.",
  "Java é multiplataforma.",
  "Mais de 3 bilhões de dispositivos rodam Java.",
  "Java tem coletor de lixo automático.",
  "É muito usado em back-end de sites.",
  "Empresas como Netflix e Amazon usam Java.",
  "Java tem comunidades gigantes no mundo todo.",
  "Possui frameworks famosos como Spring.",
  "Java é a 3ª linguagem mais procurada no mercado.",
  "É usado em sistemas de cartão de crédito.",
  "Java é compilado em bytecode.",
  "O bytecode roda na JVM (Java Virtual Machine).",
  "Java ainda é ensinado em muitas universidades.",
  "É usado em caixas eletrônicos.",
  "Java tem atualizações frequentes.",
  "Muitos concursos de programação aceitam Java.",
  "Java roda até em smart TVs.",
  "Java foi inspirado em C++."
];

// Curiosidades Python
const curiosidadesPython = [
  "Python foi criado em 1991 por Guido van Rossum.",
  "O nome vem do grupo de comédia Monty Python.",
  "Python é muito usado em inteligência artificial.",
  "É conhecido por ter código limpo e simples.",
  "É usado em ciência de dados.",
  "Python é muito popular em automação.",
  "Google e YouTube usam Python.",
  "Python tem frameworks como Django e Flask.",
  "É ótimo para iniciantes em programação.",
  "Python suporta programação orientada a objetos.",
  "É usado em jogos também (Pygame).",
  "Python é open source.",
  "É uma das linguagens mais fáceis de aprender.",
  "Python roda em qualquer sistema operacional.",
  "É usado em machine learning.",
  "A NASA já usou Python em projetos.",
  "Python pode até controlar robôs.",
  "É muito usado em chatbots e IA.",
  "Possui milhares de bibliotecas.",
  "Python tem sintaxe parecida com inglês.",
  "Muitos sites de ciência usam Python.",
  "Python tem grande comunidade no GitHub.",
  "É usado em automação de tarefas repetitivas.",
  "Python pode analisar grandes quantidades de dados.",
  "Python cresce mais a cada ano."
];

// Função para mostrar curiosidades
function exibirCuriosidades(lista, idElemento) {
  const ul = document.getElementById(idElemento);
  lista.forEach(curiosidade => {
    const li = document.createElement("li");
    li.textContent = curiosidade;
    ul.appendChild(li);
  });
}

// Exibe na página
exibirCuriosidades(curiosidadesJava, "java-curiosidades");
exibirCuriosidades(curiosidadesPython, "python-curiosidades");
