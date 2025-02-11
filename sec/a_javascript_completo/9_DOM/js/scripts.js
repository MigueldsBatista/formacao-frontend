console.clear();
// //encontrando por tagname

// const listItens = document.getElementsByTagName("li");

// console.log(listItens)

// const uniqueElement = document.getElementById("title");

// console.log(uniqueElement)



// const products = document.getElementsByClassName("products")

// console.log(products);

// //5 selecionando por css

// const productsQuery = document.querySelectorAll(".products")

// console.log(productsQuery)

const mainContainer = document.querySelector("#main-container")

// console.log(mainContainer)

// //6 insert be4

// const paragraph = document.createElement("p");

// paragraph.textContent = "Este é um parágrafo criado com JavaScript";

// const title = document.querySelector("#title")

// const header = title.parentElement;

// header.insertBefore(paragraph, title)


const navLinks = document.querySelectorAll("nav ul");

// const newLink = document.createElement("li");

// newLink.innerHTML = "<a href='#'>Link 4</a>";

// navLinks.appendChild(newLink);

// //8 replace child

// const h2 = document.createElement("h2");

// h2.textContent="Meu novo título"

// header.replaceChild(h2, title)

// //9 - create text node 

// const myText = document.createTextNode("Agora vamos colocar mais um título");

// const h3 = document.createElement("h3");

// h3.appendChild(myText)

// console.log(h3)

// mainContainer.appendChild(h3)


// const firstLink = document.querySelector("a");
// firstLink.setAttribute("href", "https://google.com.br")
// console.log(firstLink.getAttribute("href"))
// console.log(firstLink)


// //11- altura e largura

const footer = document.querySelector("footer")

console.log(footer.offsetWidth)//considera padding e borda
console.log(footer.offsetHeight)

console.log(footer.clientWidth)//considera padding
console.log(footer.clientHeight)

//11 - posicao do elemento

console.log(footer.getBoundingClientRect())

mainContainer.style.color = "red";
mainContainer.style.backgroundColor="#333";


//12 alterando vários elementos
for(const ul in navLinks){
    ul.style.backgroundColor="red"
}