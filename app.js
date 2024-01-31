let listaDeNumeros = [];
let numeroLimite = 100;
let numeroSecreto = geraNumero();
let tentativas = 1;
function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.a.speak(texto, "Brazilian Portugueses Female");
}
function exibirMensagem() {
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 100");
  {
    rate: 1.2;
  }
}
exibirMensagem();

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa} tentativas`;
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor");
    } else {
      exibirTextoNaTela("p", "O número secreto é maior");
    }
    tentativas++;
    limparCampo();
  }
}

function geraNumero() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeElementos = listaDeNumeros.length;

  if (quantidadeElementos == numeroLimite) {
    listaDeNumeros = [];
  }
  if (listaDeNumeros.includes(numeroEscolhido)) {
    return geraNumero();
  } else {
    listaDeNumeros.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = geraNumero();
  limparCampo();
  tentativas = 1;
  exibirMensagem();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
