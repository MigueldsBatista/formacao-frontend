// IMC DATA
const data = [
    {
      min: 0,
      max: 18.4,
      classification: "Menor que 18,5",
      info: "Magreza",
      obesity: "0",
    },
    {
      min: 18.5,
      max: 24.9,
      classification: "Entre 18,5 e 24,9",
      info: "Normal",
      obesity: "0",
    },
    {
      min: 25,
      max: 29.9,
      classification: "Entre 25,0 e 29,9",
      info: "Sobrepeso",
      obesity: "I",
    },
    {
      min: 30,
      max: 39.9,
      classification: "Entre 30,0 e 39,9",
      info: "Obesidade",
      obesity: "II",
    },
    {
      min: 40,
      max: 99,
      classification: "Maior que 40,0",
      info: "Obesidade grave",
      obesity: "III",
    },
  ];

//Seleção de elementos

const imcTable = document.querySelector("#imc-table");

const heightInput = document.querySelector("#height");

const weightInput= document.querySelector("#weight");

const calcBtn = document.querySelector("#calc-btn")

const clearBtn = document.querySelector("#clear-btn")

const imcNumber = document.querySelector("#imc-number span")


const imcInfo = document.querySelector("#imc-info span")

const backBtn = document.querySelector("#back-btn")


const calcContainer = document.querySelector("#calc-container");

const resultContainer = document.querySelector("#result-container");
//Funções

function createTable(data){
    data.forEach(element => {
        const div = document.createElement("div");
        div.classList.add("table-data")

        const classification = document.createElement("p");

        classification.innerText = element.classification;

        const info = document.createElement("p");
        info.innerText = element.info;
        
        const obesity = document.createElement("p");
        obesity.innerText = element.obesity;

        div.appendChild(classification)
        div.appendChild(info)
        div.appendChild(obesity)

        imcTable.appendChild(div)
    });
}

function clearInputs(){
    heightInput.value="";
    weightInput.value="";
    imcNumber.classList="";
    imcInfo.classList="";

}

function validDigits(str){
    return str.replace(/[^0-9,]/g, "")
}

function calcImc(weight, height){
  return (weight / (height * height)).toFixed(2);
}

function toggleContainer(){
  calcContainer.classList.toggle("hide")
  resultContainer.classList.toggle("hide")
}

function getInfoColor(info){
  switch(info){
    case "Magreza":
      return "low"

    case "Normal":
      return "good"

    case "Sobrepeso":
      return "low"

    case "Obesidade":
      return "medium"

    case "Obesidade grave":
      return "high"

    default:
      return "Valor inválido!"
  }
}

//Events


[heightInput, weightInput].forEach((element)=>{
    element.addEventListener("input", (event)=>{
        const updatedValue = validDigits(event.target.value);
        
        event.target.value=updatedValue;
      })
    })
    
    createTable(data);


calcBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    const weight = +weightInput.value.replace(",", ".")
    const height = +heightInput.value.replace(",", ".")

    
    if(!weight || !height) return;

    console.log(weight, height)

    const imc = calcImc(weight, height);

    console.log(imc)

    let info;

    data.forEach((item) =>{
        if (imc >= item.min && imc <= item.max){
            info=item.info;
        }
    });

    if(!info) return;

    color=getInfoColor(info);
    imcNumber.classList.add(color);
    imcInfo.classList.add(color);
    imcNumber.innerText=imc;
    imcInfo.innerText=info;
    toggleContainer();
    
})


clearBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    clearInputs()
})

backBtn.addEventListener("click", (e)=>{
  clearInputs()
  toggleContainer();
})
//inicialização

//Eventos