// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    return drivers.push(name)
}

function destructivelyPrependDriver(name) {
    return drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
    return drivers.pop()
}

function destructivelyRemoveFirstDriver() {
    return drivers.shift()
}

function appendDriver (name) {
    return [...drivers, name];
  }
  

// function appendDriver(name) {
//     [...drivers, name];
// }   

// function appendDriver(name) {
//     let newArray = drivers;
//     newArray.push(name);
//     console.log(newArray)
//     return newArray;
// }   

function prependDriver(name) {
    return [name, ...drivers]
}

function removeLastDriver () {
    return drivers.slice(0, drivers.length-1)
}

function removeFirstDriver () {
    return drivers.slice(1)
}