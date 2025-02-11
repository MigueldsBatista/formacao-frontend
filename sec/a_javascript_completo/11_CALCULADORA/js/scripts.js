console.clear()

console.log("Teste")

const multiplicationForm = document.querySelector("#multiplication-form");
const firstInput= document.querySelector("#number");
const secondInput= document.querySelector("#multiplicator");



const multiplicationOperations = document.querySelector("#multiplication-operations")
multiplicationForm.addEventListener("submit", (e)=>{
    e.preventDefault();/*evita a recarga da página*/
  
    const num = + firstInput.value;
    const multiplicator = + secondInput.value;
    
    if(!num || ! multiplicator) return;

    console.log("Primeiro: ",num);
    console.log("Segundo: ", multiplicator);
    createTable(num, multiplicator);

})

const createTable = (number, second) =>{
    multiplicationOperations.innerHTML = ""

    for (let index = 1; index <= second; index++) {
        const element =number*index;
        console.log(number*index);
        
        const stringTemplate = `<div class="row">
                <div class="operation">${number} x ${index} = </div>
                <div class="result">${number*index}</div>
            </div>`

        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(stringTemplate, "text/html");

        const row = htmlTemplate.querySelector(".row");

        multiplicationOperations.appendChild(row);

    }
}