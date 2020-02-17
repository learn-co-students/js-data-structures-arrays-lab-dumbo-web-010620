// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];



function destructivelyAppendDriver(name) {
    drivers.push(name);
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
    drivers.pop();
}

function destructivelyRemoveFirstDriver(){
    drivers.shift();
}

function appendDriver(name) {
let arrayTwo = [...drivers, "Broom"];
return arrayTwo;
}

function prependDriver(name) {
    let arrayTwo = ["Arnold", ...drivers];
    return arrayTwo;
}

function removeLastDriver() {
    let newDrivers = drivers.slice(0, drivers.length -1 );
    return newDrivers;
}

function removeFirstDriver() {
    return drivers.slice(1);
}