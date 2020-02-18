var drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
    drivers.push(name)
    return drivers 
}

function destructivelyPrependDriver(name){
    drivers.unshift(name)
    return drivers
}

function destructivelyRemoveLastDriver(){
    drivers.pop()
    return drivers
}

function destructivelyRemoveFirstDriver(){
    drivers.shift()
    return drivers
}

function appendDriver(name){
    var newDrivers = [ ...drivers, name]
    return newDrivers
  }
  
  function prependDriver(name){
    var newDrivers = [name, ...drivers]
    return newDrivers 
  }
  
  function removeLastDriver(){
    var newDrivers = drivers.slice(0, drivers.length -1)
    return newDrivers 
  }
  
  function removeFirstDriver(){
    var newDrivers = drivers.slice(1)
    return newDrivers 
  }