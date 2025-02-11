//object literals são objetos que não são instanciados a partir de uma classe

//existem metodos estaticos? sim

//metodos estaticos são metodos que podem ser chamados sem instanciar a classe

///exemplo

class CustomNode{
    constructor(value, next){
        this.value = value;
        this.next = next;
    }

    getValue(){
        return this.value;
    }

    setValue(value){
        this.value=value;
    }

    getNext(){
        return this.next;
    }

    setNext(next){
        this.next=next;
    }
}

//metodo estatico
class LinkedList{//analogia ao padrao factory
    static createNode(value){
        return new CustomNode(value, null);
    }
}



const newNode = LinkedList.createNode(3);

//temos modificadores de escopo? sim

/*exemple

class CustomNode{
    #value;
    #next;

    constructor(value, next){//# é um modificador de escopo que torna a variavel privada e acessivel apenas dentro da classe
        this.#value = value;
        this.#next = next;
    }

    getValue(){
        return this.#value;
    }

    setValue(value){
        this.#value=value;
    }

    getNext(){
        return this.#next;
    }

    setNext(next){
        this.#next=next;
    }
}
*/
//temos herança? sim

//exemplo

class Animal{
    constructor(name){
        this.name=name;
    }

    makeSound(){
        console.log('Generic animal sound');//metodo generico
    }
}

class Dog extends Animal{
    makeSound(){
        console.log('Au au');//metodo especifico sobrescreve o metodo generico
    }
}

// prototype

//prototype é um objeto que contem metodos e propriedades que podem ser acessados por outros objetos

//exemplo

const texto = 'texto';

console.log(Object.getPrototypeOf(texto));//retorna o prototype do objeto

const bool = false;

console.log(Object.getPrototypeOf(bool));//retorna o prototype do objeto

const arr = [];

console.log(Object.getPrototypeOf(arr));//retorna o prototype do objeto

// classses basicas

const animal = {
    species: null,
    sound: null,
    getSpecies(){
        return this.species;
    },
}

const dog = Object.create(animal);

//funcoes construtoras

function Animal(species, sound){
    this.species = species;
    this.sound = sound;
}

class Caminhao{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }

    start(){
        console.log('Caminhão ligado');
    }
}


//symbol

//symbol é um tipo de dado primitivo que é imutavel e unico
//similar ao final do java

class Aviao{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }

    start(){
        console.log('Avião ligado');
    }
}
const asas = Symbol();

Aviao.prototype[asas] = 2;

class Post {
    constructor(title, content){
        this.title = title;
        this.content = content;
    }

    get getTitle(){//metodo acessado como uma propriedade
        return this.title;
    }

    set setTitle(title){//metodo acessado como uma propriedade
        this.title = title;
    }
}
 
const post = new Post('titulo', 'conteudo');

post.getTitle = 'novo titulo';

//estilizando vários itens
