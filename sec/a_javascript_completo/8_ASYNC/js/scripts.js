//set timeout

console.log("Ainda não foi executado");

// const startTime = new Date();

// setTimeout(() => {
//     const endTime = new Date();
//     const timeDiff = endTime - startTime; // time difference in milliseconds
//     console.log("Requisição assíncrona...");
//     console.log(`Time difference: ${timeDiff} ms`);
// }, 3000);

// console.log("Ainda não executou");

//promisses

const promessa = Promise.resolve(5+5);

// console.log("Indo na farmácia buscar remédio enquanto isso...");

// promessa.then(value => {
//     console.log(`Valor retornado: ${value}\n`);
// })

//Falha na promisse

// Promise.resolve(2 * "ass").then(value => {
//     if(Number.isNaN(value)){
//         throw new Error("Valor não numérico");
//     }
// }).catch(err => console.log(`Ocorreu um erro ${err}`))

// //rejeição

// function checkNumber(num){
//     return new Promise((resolve, reject) =>{

//         if(num > 10){
//             resolve("Número maior que 10.");
//             return;
//         }

//         reject("Número menor que 10.");
//     });
// }


// const a = checkNumber(11);

// a.then((out)=>{
//     console.log(`Resultado ${out}`)
// }).catch((err)=>{
//     console.log(`Ocorreu um erro ${err}`)
// })

// const p1 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve(10);
//     }, 1000);
// });

// const p2 = Promise.resolve(10+10);

// const p3 = new Promise((resolve, reject) =>{
//     if(30>10){
//         resolve(30);
//         return;
//     }
//     reject("Erro!")
// })

// Promise.all([p1, p2, p3]).then(values =>{
//     console.log(values)
// })

// 7 async functions

// async function somarComDelay(a, b){//Determina que a função retorna uma promisse
//     return a+b;
// }

// somarComDelay(3,4).then((result)=>{
//     console.log(`Resultado ${result}`)
// })



function resolveComDelay(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Resultado chegou")
        }, 2000);
    })
}

async function chamadaAsync() {
    console.log("Chamada a promise e espera pelo reusltado");

    const res = await resolveComDelay();//aguarda aqui pelo resultado

    console.log(`Resultado: ${res}`);
}

chamadaAsync()


//9 generators 

function* generator(){
    yield 1;
    yield 2;
}

const gen = generator();

console.log(gen.next());//1

console.log(gen.next());//2
