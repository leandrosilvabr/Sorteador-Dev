const btnShowcxmsg = document.querySelector(".btn-showcxmsg")
const alertaResult = document.querySelector(".alerta-result")
function generateNumber() {

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    
    alertaResult.innerText = result
}


btnShowcxmsg.addEventListener("click", generateNumber)

