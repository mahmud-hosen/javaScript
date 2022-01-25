
//For
var num = [10,20,40,50]

for(var i=0; i<=num.length;i++){
    console.log(num[i])
}

// Foreach 

num.forEach(function(x){
    console.log(x)
})

// square
var sqrnumber = []
num.forEach(function(x){
    sqrnumber.push(x*x)

})
console.log(sqrnumber)

//More
//x=array value ,index index pass, arr = totall array pass
num.forEach(function(x,index,arr){
    arr[index] = x+5
})
console.log(num)
