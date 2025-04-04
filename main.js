let totalConta = 0;
let qtdPessoas = 0;
let percentualGorjeta = 0;

const campoConta = document.getElementById("conta");
campoConta.oninput = function () {
  totalConta = parseFloat(this.value) || 0;
  calcularValores();
};

const campoPessoas = document.getElementById("pessoas");
campoPessoas.oninput = function () {
  const avisoErro = document.querySelector("#erro");
  const divInput = this.parentElement;

  if (this.value === "0") {
    avisoErro.style.display = "block";
    divInput.classList.add("erro");
  } else {
    avisoErro.style.display = "none";
    divInput.classList.remove("erro");
    qtdPessoas = parseInt(this.value) || 0;
  }

  calcularValores();
};

const botoesPercentual = document.querySelectorAll(".gorjeta input[type='button']");
botoesPercentual.forEach(btn => {
  btn.onclick = function () {
    botoesPercentual.forEach(b => b.classList.remove("selecionado"));
    this.classList.add("selecionado");

    percentualGorjeta = parseInt(this.value) / 100;
    document.getElementById("outra").value = "";
    calcularValores();
  };
});

const inputOutroPercentual = document.getElementById("outra");
inputOutroPercentual.oninput = function () {
  percentualGorjeta = parseFloat(this.value) / 100 || 0;

  botoesPercentual.forEach(b => b.classList.remove("selecionado"));
  calcularValores();
};

function calcularValores() {
  if (totalConta > 0 && qtdPessoas > 0 && percentualGorjeta > 0) {
    const valorGorjeta = (totalConta * percentualGorjeta) / qtdPessoas;
    const valorTotal = (totalConta * (1 + percentualGorjeta)) / qtdPessoas;

    const campoGorjeta = document.querySelector(".gorjeta-total > strong");
    if (campoGorjeta) campoGorjeta.textContent = `R$ ${valorGorjeta.toFixed(2)}`;

    const campoTotal = document.querySelector(".total > strong");
    if (campoTotal) campoTotal.textContent = `R$ ${valorTotal.toFixed(2)}`;
  }
}
