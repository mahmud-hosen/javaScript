// map 
var numbers = [2,3,4]
var squarenumbers = numbers.map(function(x){
    return x*x;
})
console.log(squarenumbers)

//Filter = value filter according to condition

var num = [2,3,4,10,23,45]
var numbers = num.filter(function(x){
    return x>5;
})
console.log(numbers)