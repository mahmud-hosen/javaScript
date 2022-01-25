document.querySelector("#B1").addEventListener("click",myfunction)


function myfunction(){
  document.write("hi")   // anonimus function with out nameof function 
}



var myvar=document.querySelector("#h1")
myvar.addEventListener("mouseover",function(){

  myvar.classList.add("BDStyle");

})



myvar.addEventListener("mouseout",function(){

  myvar.classList.remove("BDStyle");

})
