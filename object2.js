
//Create a car Object with properties
const car = {
    type: "sudan",
    color: "silver",
    tires: 4
}

//Inherit the properties of the car using an Object.creat and create different
//objects with different properties
const newCar = Object.create(car)
newCar.engine = "vroom"

console.log(newCar)

//Creat a for in loop to print of key from the object
let keys = Object.keys(car)

for(let keys in car){
    console.log(keys)
}

//Creat a for of loop to print of key and values from the object
for(let[key,values]of Object.entries(car)){
    console.log(`${key} ${values}`)
}