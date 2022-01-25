

// Object Literals
function studentInfo1(name,age){
    return{
        name,
        age
    }
}
console.log(studentInfo1("mahmud",20))

// Concise method syntax
  // previous

let message= {
    body: function(){
        return `Hi , I am object function`
    }
}

console.log(message.body())

// present one | or 
let message2 = {
    body(){
       return (`Eid is always special day for us.`);
    }
}
console.log(message2.body())


// we can space function name 
let message3 = {
    'body name'(){
       return (`Eid is always special day for us.`);
    }
}
console.log(message3['body name']())