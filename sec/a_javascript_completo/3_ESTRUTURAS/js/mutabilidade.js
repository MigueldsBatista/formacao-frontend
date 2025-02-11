const a = {
    name: 'Miguel'
}

const b = a;// b recebe o endereço de memória de a

b.name = 'João';// altera o valor de name de a

console.log(a); // { name: 'João' }//
console.log(b); // { name: 'João' }

const users = ['Miguel', 'João', 'Maria'];

for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}