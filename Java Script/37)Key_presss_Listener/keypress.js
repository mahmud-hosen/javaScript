for(var i=0;i<3;i++){
    document.querySelectorAll("button")[i].addEventListener("click",abc);
    
}




function abc(){

    var text= this.innerHTML;
    audioplay(text);
    playAnimation(text);
}



document.addEventListener("keypress",function(event){
    var text=event.key;
    audioplay(text);
    playAnimation(text); 
 
 });




function audioplay(text){

     switch(text) {
    
        case "a":
            var audio = new Audio("sound/a.mp3");
            audio.play();
            break;
    
    
            case "b":
            var audio = new Audio("sound/b.mp3")
            audio.play();
            break;
    
    
            case "c":
            var audio = new Audio("sound/c.mp3")
            audio.play();
            break;
    }
    
        }





function playAnimation(text){
var selectedbutton=document.querySelector("."+text)
selectedbutton.classList.add("anim")

setTimeout(function(){
    selectedbutton.classList.remove("anim"); 
},2000);

}