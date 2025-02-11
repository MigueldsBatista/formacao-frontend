const products = [
    {name: "Mouse", price: 30},
    {name: "Keyboard", price: 100},
    {name: "Monitor", price: 300},
    {name: "Headset", price: 80}
]

const mappedProducts = products.map((product)=>{
    product.price = product.price*2;
})

console.log(mappedProducts);
