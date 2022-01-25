

// for..of loop can iterate over iterable objects such as string, array, map, set etc.

const names = ["jamal","kamal","rahim"]
for(let name of names){
    console.log(name)
}



// For loop through object we can use for/in loop
const students2 = {
    name: "Anisul",
    age: 25, 
    cgpa : 3.75
    }
    for(let x in students2){ 
       console.log(x); //printing all the keys
        console.log(students2[x]); //printing all the values
    }
    
    let students = {
        ID : 101,
        name : 'Anisul Islam',
        cgpa : 3.91
    }
    
    for(let x in students){
        console.log(`${x} : ${students[x]}`)
    }