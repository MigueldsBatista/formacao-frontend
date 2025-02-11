//1 - var, let e const

var x=10;

var y=15;

if(y>10){
    x=5;//altera o escopo global
    console.log(x);
}


let a = 10;
let b = 15;

if(b>a){
    let a=5;//nao altera o escopo global
}

console.log(a);


//arrow functions

const sum = function(a, b){
    return a+b;
}

const arrowSum = (a, b) => a+b;

const greeting = (name) =>{
    if(name) return `Hello ${name}`;

    return "Hello!";
}


const arr=[1, 2, 3, 4,5,6, 8];

const even=arr.filter((n)=>n%2===0);


const maped = arr.map(()=>{

})

const products = [
    {name: "Mouse", price: 30},
    {name: "Keyboard", price: 100},
    {name: "Monitor", price: 300},
    {name: "Headset", price: 80}
]

const mappedProducts = products.map((product)=>{
    product.price = product.price*2;
    return product
})

console.log(mappedProducts);


//5 tamplate literals
const nome = "Lucas";
const stringsample = `Hello ${nome}!`;

// 6 destructuring

const fruits = ["banana", "apple", "orange"];

const [banana, apple, orange] = fruits;

console.log(banana, apple, orange);

const {name, age} = {name: "Lucas", age: 20};

console.log(name, age);

//7 spread operator

const arr1 = [1, 2, 3];

const arr2 = [...arr1, 4, 5, 6];//algo como **dicionario do python


const carName ={name: "Fusca"};

const carYear = {year: 1970};

const carBrand = {brand: "Volkswagen"};

const car = {...carName, ...carYear, ...carBrand};

console.log(car);


//