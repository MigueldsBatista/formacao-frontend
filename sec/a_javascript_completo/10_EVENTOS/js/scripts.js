console.clear()

const btn = document.querySelector("#my-button")

btn.addEventListener("click", function (){
    alert("Clidado");
    console.log("Clidado");
})


const secondBtn = document.querySelector("#btn");

function imprimirMensagem(){
    console.log("Tem evento");
}

secondBtn.addEventListener("click", imprimirMensagem)

const thirBtn = document.querySelector("#other-btn");

thirBtn.addEventListener("click", () => {
console.log("Removendo evento");
secondBtn.removeEventListener("click", imprimirMensagem)    
})


const title = document.querySelector("#title");

title.addEventListener("click", (event) => {
console.log(event);
console.log(event.target)
})


const containerBtn = document.querySelector("#btn-container");

const btnInside= document.querySelector("#div-btn");

containerBtn.addEventListener("click", () =>{
    console.log("Evento ");
})

btnInside.addEventListener("click", (e) =>{
    e.stopPropagation();
    console.log("Eventoooooooo");
})

const a = document.querySelector("a");

a.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("Nao alterou a página!");
})

document.addEventListener("keyup", (e) =>{
    console.log(`Soltou ${e.key}`)
})

document.addEventListener("keydown", (e) =>{
    console.log(`Apertou ${e.key}`)
})

const mouse = document.querySelector("#mouse");

mouse.addEventListener("mouseup", (e) =>{
    console.log("Mouse Up")
})

mouse.addEventListener("mousedown", (e) =>{
    console.log("Mouse Down")
})

mouse.addEventListener("dblclick", (e) =>{
    console.log("Mouse Doubl click")
})


//movimento

// document.addEventListener("mousemove", (e)=>{
//     console.log(`X: ${e.x}`)
//     console.log(`Y: ${e.y}`)
// })

//scroll event

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        console.log("Passamos de 200px");
    }
});

const input = document.querySelector("input");

input.addEventListener("focus", (e)=>{
    console.log("Entrou no input")
})

input.addEventListener("blur", (e)=>{
    console.log("Saiu do input")
})

window.addEventListener("load", ()=>{
    console.log("A página carregou")
})

window.addEventListener("beforeunload", (e)=>{
    e.preventDefault();//impede o comportamento de sair da página padrão
    e.returnValue="Nao saiaaa"
})

//12 - debounce
const debounce = (def, delay=300) =>{
    let timeout;

    return(...args)=>{//temos uma closure aq

        if(timeout) clearTimeout();//se o evento for chamado mais de uma vez preciso matar o atual e iniciar outra vez

        timeout = setTimeout(()=>{
            def.apply(this, args);//passamos os argumentos pra função usada no debounce
        }, delay)
    }
}

window.addEventListener("mousemove", debounce(()=>{
    console.log("Executando a cada 300s")
}, 300))