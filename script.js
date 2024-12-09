const add = (num1, num2) => {return num1 + num2;}
const substract = (num1, num2) => {return num1 - num2;}
const multiply = (num1, num2) => {return num1 * num2;}
const divide = (num1, num2) => {return num1 / num2;}

let num1, num2;
let operator = {};
let display = "0";
let resultado;

const numerador = document.querySelector(".numerador");
const numeros = document.querySelectorAll(".numero");
const borrador = document.getElementById("clear");
const backspace = document.getElementById("backspace");
const punto = document.getElementById("punto");
const operadores = document.querySelectorAll(".operador");
const signo = document.querySelector(".signo");
const igual = document.getElementById("igual");

const escribe = (e) => {
    if(resultado) borraResultado();

    (display === "0")
    ? display = e.target.textContent
    : display += (e.target.textContent);

    numerador.textContent = display;
   
 }

 const fillOperator = (e) => {
    operator["name"] = e.target.id;
    
    switch(operator.name){
        case "add" : 
            operator.signo = "+";
            operator.operacion = add;
            break;
        case "substract" : 
            operator.signo = "-";
            operator.operacion = substract;
            break;
        case "multiply" : 
            operator.signo = "*";
            operator.operacion = multiply;
            break;
        default: 
            operator.signo = "/";
            operator.operacion = divide;
    }
 }
const borraResultado = () => {
        resultado = undefined;
        display = "0";
}

numeros.forEach(e => 
    e.addEventListener("click", escribe)
)

borrador.addEventListener("click", (() => {
    resultado = undefined;
    signo.textContent = "";
    display = "0";
    numerador.textContent = display;
}));

backspace.addEventListener("click", () => {
    if(display.length === 1){
        display = "0";
        numerador.textContent = display;
        return;
    }
    display = display.slice(0, -1);
    numerador.textContent = display;

})

punto.addEventListener("click", () => {
    if(resultado) borraResultado();
    if(display.includes(".")) return;
    (display === "0")
        ? display = "0."
        : display += ".";
    numerador.textContent = display;
})

operadores.forEach(e => {
    e.addEventListener("click", (element)=>{
        if(display === "") return;
        num1 =  parseFloat(display);
        fillOperator(element);
        display = "";
        numerador.textContent = display;
        signo.textContent = operator.signo;
        
    })
})

igual.addEventListener("click", () => {
  
    num2 = parseFloat(display);
    display = (Math.round(operator.operacion(num1, num2)* 10**8)/10**8).toString();
    resultado = true;
    numerador.textContent = display;
    signo.textContent = "";
    
})
numerador.textContent = display;


