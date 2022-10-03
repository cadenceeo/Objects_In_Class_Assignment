//object declaration
const person={
    //Properties of Object
    firstName: "John",
    lastName: "Doe",
    height: "6'2",
    weight: 180,
    //Nested Objects
    beverages:{moring: "coffee", evening: "tea"},
    hobbies: ["eat","code","sleep"],
    //Methods
    myMethod(){
        console.log("HelloWorld!")
    },
    //'this' keyword (private).... cannot use arrow '=>' syntax
    greeting(){
        console.log(this)
    },
    date(){
        let today = new Date()
        console.log(today.getHours())
        if(today.getHours() <12){
            console.log(`hello ${this.firstName} Good morning, its ${today.getHours()} am its time for ${this.beverages.moring}`)
        }else{
            console.log(`hello ${this.firstName} Good evening, its ${today.getHours()} am its time for ${this.beverages.evening}`)
        }
        
    }
}

//Dot Notation
console.log(person.firstName)
console.log(person["lastName"])

//Accessing the Method
person.myMethod()
person.greeting()
person.date()


//Accesses the windows object (public)
console.log(this)

const library = [
    {
    author: "Jon",
    book: "Harry Potter",
    readingStatus: true
    },
    {
        author: "Sam",
        book: "Maze Runner",
        readingStatus: false
    }

]

for(i=0;i<library.length;i++){
    if(library[i].readingStatus){
        console.log(library[i].book +  " has already been read")
    }else{
        console.log(library[i].book + " Still needs to be read")
    }
}

//Key, values, & entries
const professor = {
    firstName: "Harry",
    email: "harry@gmail.com",
    location: "Hammond Hall",
    courses: [
        {title: "front-end 1", students: 30},
        {title: "back-end 1", students: 30},
        {title: "mobile 1", students: 30},

    ]
}

let keys = Object.keys(professor)

keys.forEach(key =>{
    console.log(key)
})


//For in loop
for(let keys in professor){
    console.log(keys)
}

//Creating an Object
const vehicle = new Object();
vehicle.doors = 4;
vehicle.color = "silver";
vehicle.engine = function(){
    console.log("Vroom")
}

console.log(vehicle)

const newVehicle={
    doors: 4,
    color: "red",
    engine(){
        console.log(`No of doors ${this.doors} and the color is ${this.color}`)
    }
}

console.log(newVehicle)

const car = Object.create(newVehicle)
car.color = "Blue"
car.engine = function(){
    console.log("the engine says Vroom")
}

car.engine()