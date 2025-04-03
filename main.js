let conta = 0;
let pessoas = 0;
let porcentagem = 0;
let botaoAtivo = null;

const contaInput = document.querySelector("#conta");
contaInput.addEventListener("input", receberValorConta);

function receberValorConta(evento) {
    conta = Number(evento.target.value) || 0;
    calcular();
}

const pessoasInput = document.querySelector("#pessoas");
pessoasInput.addEventListener("input", receberQuantidadePessoa);

function receberQuantidadePessoa(evento) {
    const paragrafoErro = document.querySelector(".pessoas #erro");
    const divErro = document.querySelector(".pessoas .input-box");

    if (evento.target.value === "0" || evento.target.value === "") {
        paragrafoErro.style.display = "block";
        divErro.setAttribute("id", "erro-div");
    } else {
        paragrafoErro.style.display = "none";
        divErro.removeAttribute("id");
        pessoas = Number(evento.target.value);
    }
    calcular();
}

const botoesGorjeta = document.querySelectorAll(".gorjeta input[type='button']");

botoesGorjeta.forEach(botao => {
    botao.addEventListener("click", ReceberPorcentagem);
});

function ReceberPorcentagem(evento) {
    if (botaoAtivo) {
        botaoAtivo.classList.remove("botao-ativo");
    }

    botaoAtivo = evento.target;
    botaoAtivo.classList.add("botao-ativo");

    porcentagem = parseFloat(evento.target.value) / 100 || 0;
    document.querySelector("#outra").value = "";
    calcular();
}

const gorjetaInput = document.querySelector("#outra");
gorjetaInput.addEventListener("input", ReceberPorcentagemManual);

gorjetaInput.addEventListener("focus", () => {
    if (botaoAtivo) {
        botaoAtivo.classList.remove("botao-ativo");
        botaoAtivo = null;
    }
});

function ReceberPorcentagemManual(evento) {
    porcentagem = parseFloat(evento.target.value) / 100 || 0;
    calcular();
}

function calcular() {
    const strongGorjetaTotal = document.querySelector(".gorjeta-total > strong");
    const strongTotal = document.querySelector(".total > strong");

    if (conta > 0 && porcentagem > 0 && pessoas > 0) {
        const gorjetaPorPessoa = (conta * porcentagem) / pessoas;
        const totalPorPessoa = (conta + conta * porcentagem) / pessoas;

        strongGorjetaTotal.textContent = `R$ ${gorjetaPorPessoa.toFixed(2)}`;
        strongTotal.textContent = `R$ ${totalPorPessoa.toFixed(2)}`;
    } else {
        strongGorjetaTotal.textContent = "R$ 0.00";
        strongTotal.textContent = "R$ 0.00";
    }
}

document.querySelector(".resultados button").addEventListener("click", () => {
    conta = 0;
    pessoas = 0;
    porcentagem = 0;
    botaoAtivo = null;

    contaInput.value = "";
    pessoasInput.value = "";
    gorjetaInput.value = "";

    botoesGorjeta.forEach(botao => botao.classList.remove("botao-ativo"));

    calcular();
});
