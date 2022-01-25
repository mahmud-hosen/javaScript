// Taditional Function
// If we use return keyword then must use second braked 
//If we do not use return keyword then do't use second braked

function display1(){
    console.log("I am display1")
}

// Arrow Function

const display2 = () => {
    console.log("I am display 2")
}

//or if arrow function will be single statement 
const display3 = () =>  console.log("I am display 3") 


// return taditional function
function message(){
    return "Hi I am m just allow function"
}
// return allow function
var message1 = () => "Hi I am simple allow function $ I am return " 


display1()
display2()
display3()

console.log(message())
console.log(message1())


//Parameter pass in tadiotanal function

function add(x,y){
    return x+y
}
console.log(add(4,5))

// Allow function with parametre

var add2 = (k,l) => k+l
console.log(add2(3,5))




// Arrow function with map and filter
var students = [
    {
        id : 101,
        name : 'Anisul Islam',
        gpa : 3.92
    },
    {
        id : 102,
        name : 'Rabeya Begum',
        gpa : 3.12
    },
    {
        id : 103,
        name : 'Rokib',
        gpa : 2.92
    },
    {
        id : 104,
        name : 'Limon',
        gpa : 4.92
    },
]
console.log(students);


// returning the student name whose gpa is greater than 3 using traditional function
function studentsName1(){
    return students.filter(function(x){
        return x.gpa > 3 
    }).map(function(y){
        return y.name;
    })
}
console.log(studentsName1())

// returning the student name whose gpa is greater than 3 using arrow function
const studentsName2 = () =>  students.filter(x => x.gpa>3).map(y => y.name);
console.log(studentsName2())
