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