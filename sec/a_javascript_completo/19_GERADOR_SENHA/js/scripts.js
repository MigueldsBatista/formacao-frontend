const generatePasswordButton = document.querySelector("#generate-password")

const openGeneratePasswordButton = document.querySelector("#open-generate-password")

const generatedPassword = document.querySelector("#generated-password")

const generateOptions = document.querySelector("#generate-options");

const passwordLength = document.querySelector("#length");

const enableLettersCheckbox = document.querySelector("#letters");
const enableNumbersCheckbox = document.querySelector("#numbers");
const enableSymbolsCheckbox = document.querySelector("#symbols");

const copyPassword = document.querySelector("#copy-password");

const validNumbers = () => {
    passwordLength.value = passwordLength.value.replace(/[^0-9]/g, ''); // Substitui não-números por vazio
};

passwordLength.addEventListener("input", () => {
    validNumbers();
});

//funções
//letras, números e símbolos
const getLetterLowerCase = () =>{
    let random = Math.floor(Math.random()*26)
    return (String.fromCharCode(random+97))
}
const getLetterUpperCase = () =>{
    let random = Math.floor(Math.random()*26)
    return (String.fromCharCode(random+65))
}

generatePasswordButton.addEventListener("click", ()=>{

    let activeFunctions =[];

    if(enableLettersCheckbox.checked) activeFunctions.push(getLetterLowerCase, getLetterUpperCase);

    if(enableNumbersCheckbox.checked) activeFunctions.push(getNumber)

    if(enableSymbolsCheckbox.checked) activeFunctions.push(getSymbol)

    if(!activeFunctions.length) return;

    generatePassword(...activeFunctions);

})

const getNumber = () =>{
    return (Math.floor(Math.random()*10)).toString()
}
//letters
//numbers
//symbols

const getSymbol = ()=>{
    const symbols="{}[]()=<>^.;,/!@#$%&*+-_:`´~?"
    return symbols[Math.floor(Math.random() * symbols.length)]
}

const generatePassword = (...functions) => {

    let password="";

    let len = passwordLength.value ? passwordLength.value : 10;

    const generators =[
        ...functions
    ]
    for (let i = 0; i < len; i++) {
        const randomValue = generators[Math.floor(Math.random()*generators.length)]();

        
        password+=randomValue;
    }
    console.log(password, password.length);

    generatedPassword.style.display="block";
    generatedPassword.querySelector("h4").innerText=password;


    
}

openGeneratePasswordButton.addEventListener("click", (e)=>{
    generateOptions.classList.toggle("hide")
})

copyPassword.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Clicou");

    const password = generatedPassword.querySelector("h4").innerText;
    console.log(password);

    navigator.clipboard.writeText(password).then(() => {
        copyPassword.innerText = "Senha copiada com sucesso!";

        setTimeout(() => {
            copyPassword.innerText = "Copiar";
        }, 1500);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
});
