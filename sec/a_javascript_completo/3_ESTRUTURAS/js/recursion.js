function fibbonaci(num) {
    if (num < 2) {
        return num;
    }
    return fibbonaci(num - 1) + fibbonaci(num - 2);
}



//closure

function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++;
        return count;
    }
    return innerFunction;
}


const car = {
    brand: 'Ford',
    model: 'Fiesta',
    start: function() {
        console.log(`Car started`);
    }
}

const bike = {
    brand: 'Honda',
    model: 'CBR',
    start: function() {
        console.log(`Bike started`);
    }
}

const newBike = bike;

newBike.start();

car.start();


Object.keys(car).forEach(key => {
    console.log(key, car[key]);
});

Object.entries(car).forEach(([key, value]) => {
    console.log(key, value);
});


//Mutabilidade