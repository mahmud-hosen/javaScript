
var  photos=["image/mahmud1.jpg","image/mahmud2.jpg","image/mahmud3.jpg","image/mahmud4.jpg"]
var imgtag=document.querySelector("img");

var count=0
function next()
{
  count++

  if(count>=photos.length){
    count=0
    imgtag.src=photos[count]

  }

  else{
    imgtag.src=photos[count]

  }
  


}



function previous(){

  count--

  if(count<0){
    count=photos.length-1
    imgtag.src=photos[count]

  }

  else{
    imgtag.src=photos[count]

  }
  

}