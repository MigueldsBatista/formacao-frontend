// Index of and Last index of

const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Banana', 'Uva'];

// Index of
console.log(frutas.indexOf('Banana')); // 0

// Last index of
console.log(frutas.lastIndexOf('Banana')); // 3


//shift e unshift

const frutas2 = ['Banana', 'Maçã', 'Abacaxi', 'Banana', 'Uva'];

// shift
frutas2.shift();// remove o primeiro elemento
console.log(frutas2); // [ 'Maçã', 'Abacaxi', 'Banana', 'Uva' ]

// unshift
frutas2.unshift('Morango');// adiciona um elemento no início
console.log(frutas2); // [ 'Morango', 'Maçã', 'Abacaxi', 'Banana', 'Uva' ]

frutas2.pop();// remove o último elemento

console.log(frutas2); // [ 'Morango', 'Maçã', 'Abacaxi', 'Banana' ]

frutas2.push('Laranja');// adiciona um elemento no final
console.log(frutas2); // [ 'Morango', 'Maçã', 'Abacaxi', 'Banana', 'Laranja' ]

let dirtyText = '   Texto com espaços no início e no final   \n\n\n';

console.log(dirtyText.trim());// remove espaços em branco no início e no final

//nao altera a string original

//Estrutura for of

const frutas3 = ['Banana', 'Maçã', 'Abacaxi', 'Banana', 'Uva'];

for (let fruta of frutas3) { // =~ que nem o in do python ou o for each do java
    console.log(fruta);
}

//rest operator

const [primeiraFruta, ...outrasFrutas] = frutas3;

console.log(primeiraFruta); // Banana

console.log(outrasFrutas); // [ 'Maçã', 'Abacaxi', 'Banana', 'Uva' ]

const somaInfinita = (...numeros) => {//acc = acumulador
    return numeros.reduce((soma, item) => soma + item, 0);
}

//destructuring em objetos

const userDetails ={
    name: 'Miguel',
    email: 'miguel.batista@gmail.com',
    city: 'São Paulo',
    country: 'Brasil'
}

const {firstName, email, city, country} = userDetails;

console.log(firstName, email, city, country);//nao sao acessadas pelas propriedades do objeto e sim pelo nome da variavel

const {name : Username } = userDetails;

//destructuring em arrays

const frutas4 = ['Banana', 'Maçã', 'Abacaxi', 'Banana', 'Uva'];

const [primeiraFruta2, segundaFruta, ...outrasFrutas2] = frutas4; //primeiraFruta2 = frutas4[0], segundaFruta = frutas4[1] e outrasFrutas2 = frutas4[2:]

//Json

const user = {
    name: 'Miguel',
    email: 'email',
    city: 'São Paulo',
    country: 'Brasil'
}

const jsonUser = JSON.stringify(user);

console.log(jsonUser);

const parsedUser = JSON.parse(jsonUser);

console.log(parsedUser);

//BadJson
try{
    const badJson = '{"name": "Miguel", "email": "email", "city": "São Paulo", "country": "Brasil}';
    const parsedBadJson = JSON.parse(badJson);
}
catch(e){
    console.log('Erro ao fazer parse do JSON');
}