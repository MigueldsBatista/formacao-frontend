class Node {

    constructor(data, next){
        this.data=data;
        this.next=next;
    }

}

const minhaFuncao = function(string) {
    console.log(string)
    return;
}




//arrow functions

const result = (num) => {
    if (num % 2 == 0) return true;

    return false;
}

const myFunction = function (obrigatorio, opcional=NaN){
    console.log(obrigatorio, opcional)

}

myFunction(1)