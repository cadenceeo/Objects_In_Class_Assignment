//Create an object for the student
//Create properties for the object
//Create a method to print student's information
const student= {
  users: [
    {
        firstName: "Cadence",
        lastName: "Ohl",
        grade: "A",
        percentage: 93
    },
    {
        firstName: "Daisy",
        lastName: "Lower",
        grade: "B",
        percentage: 87
    },
    {
        firstName: "Lory",
        lastName: "Cane",
        grade: "A",
        percentage: 96
    }   
    ],
    info(){
        console.log(student.users)
    }
}

//Create a function to print the student grades accoding to the percentage
function grades(){
    for(i=0;i<student.users.length;i++){
        if(student.users[i].percentage > 90){
            console.log(student.users[i].firstName +  " recieved a A or a " + student.users[i].percentage + "%")
        }else{
            console.log(student.users[i].firstName + " recieved a B or a " + student.users[i].percentage + "%")
        }
    }
}


grades()
student.info()




