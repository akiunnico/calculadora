let num1, num2, operador;

const add = (num1, num2) => {return num1 + num2;}
const substract = (num1, num2) => {return num1 - num2;}
const multiply = (num1, num2) => {return num1 * num2;}
const divide = (num1, num2) => {return num1 / num2;}

function getOperacion (operador){
    switch(operador){
        case "+": return add;
        case "-": return substract;
        case "*": return multiply;
        default: return divide
    }
}

const currentNumber = document.querySelector(".current-number");
const previousNumber = document.querySelector(".previous-number");
const numeros = document.querySelectorAll(".numero");
const borrador = document.getElementById("clear");
const backspace = document.getElementById("backspace");
const punto = document.getElementById("punto");
const operadores = document.querySelectorAll(".operador");
const igual = document.getElementById("igual");

const escribe = (e) => {

   currentNumber.textContent += e.target.textContent;
 }

const resetea = () => {
    num1 = num2 = operador = undefined;

}

const borra = () => {
    currentNumber.textContent = " ";
    previousNumber.textContent = " ";
    resetea();  
}

const opera = () => {
  
    if(currentNumber.textContent === "") return;
    if(!num1) return;
    num2 = Number(currentNumber.textContent);
    let operacion = getOperacion(operador);
    console.log(num1, num2, operador, operacion);
    currentNumber.textContent = (Math.round(operacion(num1, num2)* 10**8)/10**8).toString();
    previousNumber.textContent = "";

}
const prepara = (e) => {
    if(currentNumber.textContent === "") return;
    if(previousNumber.textContent !== ""){
        num1 = Number(previousNumber.textContent.slice(0, -1));
        opera();
    }
        operador = e.target.textContent;
        num1 = Number(currentNumber.textContent);
        previousNumber.textContent = currentNumber.textContent +=   operador;
        currentNumber.textContent = "";
    
}


numeros.forEach(e => 
    e.addEventListener("click", escribe)
)
operadores.forEach(e => {
    e.addEventListener("click", prepara);
})

borrador.addEventListener("click", borra);

backspace.addEventListener("click", () => {
  
    display = currentNumber.textContent;
    // if(display.length === 1) return;
    currentNumber.textContent = display.slice(0, -1);

})

punto.addEventListener("click", () => {
    display = currentNumber.textContent;
    if(display.includes(".")) return;
    (!display)
        ? currentNumber.textContent = "0."
        : currentNumber.textContent += ".";
})


igual.addEventListener("click", opera);



