//COTACAO DE MOEDA DO DIA
const USD = 4.87
const EUR = 5.32
const GBP = 6.8

//OBTENDO OS ELEMENTOS DO FORMULARIO
const form  = document.querySelector("form")
const  amount=document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")


//MANIPULANDO INPUT AMOUNT PARA RECEBER APENAS NUMEROS
amount.addEventListener('input',()=>{
//console.log(amount.value)   //recuperando o valor digitado pelo usuario
hasCharactersRegex =/\D+/g
amount.value = amount.value.replace(hasCharactersRegex,"")//substituimos o texto por ada
})

//CAPTURANDO O EVENT DE SUBMIT DO FORMULARIO
form.onsubmit=(event)=>{
    event.preventDefault()
    switch(currency.value){
    case "USD":
        convertCurrency(amount.value, USD,"US$")
        break
    case "EUR":
        convertCurrency(amount.value, EUR,"€")
        break
    case "GBP":
        convertCurrency(amount.value, GBP,"£")
        break
        

    }

}

//FUNCAO PARA CONVERTER MOEDA
function convertCurrency(amount,price,symbol){
   try {

    //EXIBINDO A COTACAO DA MOEDA SELECIONADA
      description.textContent = `${symbol} 1 = ${formatCurrencyBR(price)}`

      //let total = String(amount * price).replace(".",",")
      let total=amount*price
       total =formatCurrencyBR(total).replace("R$","")

      result.textContent = `${total} Reais`
    //APLICA A CLASSE QUE EXIBE O FOOTER PARA MOSTRAR RESULTADO
    footer.classList.add('show-result')

      
   } catch (error) {
 //REMOVER A CLASSE FOOTER DA TELA
    footer.classList.remove('show-result')
    
   }
}
//FORMATA A MOEADA E REAL BRASILEIRO
function formatCurrencyBR(value){
    //PRIMEIRO CONVERTE PARA NUMERO PARA USAR O toLocatebr
    return Number(value).toLocaleString("pt-BR",
        {
            style:"currency",
            currency:"BRL"
        }
    )

}