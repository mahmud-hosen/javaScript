var link = document.querySelector("#link")
link.innerHTML = "faceook"
link.style.textDecoration = "none"
link.style.color = "red"
link.style.fontSize = "2.5rem"
link.href = "http://mahmud.com"

// create html element
      
   // h1 create
var heading3 = document.createElement("h1");
   // Text create
var text = document.createTextNode("This is head three");
   // Text add with h1
heading3.appendChild(text);
    // div find
var myDiv = document.getElementById("my-div")
   // Head 1 add with div
myDiv.appendChild(heading3)


// Remove Head
var rhead = document.getElementsByTagName("h1")[0];
myDiv.removeChild(rhead)