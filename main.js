let conta = 0
let pessoas = 0

 const contaInput = document.querySelector("#conta")
 contaInput.addEventListener("input", receberValorConta)
 
 function receberValorConta(evento) {
   conta = Number(evento.target.value)
 }
 
 const pessoasInput = document.querySelector("#pessoas")
 
 pessoasInput.addEventListener("input", receberQuantidadePessoa)
 
 function receberQuantidadePessoa(evento) {
    const paragrafoErro = document.querySelector(".pessoas #erro")
    const divErro = document.querySelector(".pessoas .input-box")
  
    if (evento.target.value === "0") {
      paragrafoErro.style.display = "block"
      divErro.setAttribute("id", "erro-div")
    } else {
      paragrafoErro.style.display = "none"
      divErro.setAttribute("id", "")
      pessoas = Number(evento.target.value)
    }
  }

  const botoesGorjeta = document.querySelectorAll(".gorjeta input[type='button']")
 
 botoesGorjeta.forEach(botao => {
   botao.addEventListener("click", ReceberPorcentagem)
 })
 
 function ReceberPorcentagem(evento) {
 
     botoesGorjeta.forEach(botao=> {
         botao.classList.remove("botao-ativo")
 
         if(botao.value === evento.target.value)
         botao.classList.add("botao-ativo")
     })
 
     if(evento.target.value != ""){
         porcentagem = parseFloat(evento.target.value) / 100
     } else{
         porcentagem = 0
     }
 
   console.log(porcentagem)
 }
 
 const gorjetaInput = document.querySelector("#outra")
 gorjetaInput.addEventListener("input", ReceberPorcentagemBotao)