//

function Student(name,age,cgpa){

    this.name=name;
    this.age=age;
    this.cgpa=cgpa;



    this.display = function(){
        document.write(this.name+"</br>");
        document.write(this.age+"</br>");
        document.write(this.cgpa+"</br>");
        
    }
    
}


var student1= new Student("Mahmud",30,3.4);
var student2= new Student("Hasan",20,3.9);
var student3= new Student("Mahadi",70,3);




student1.display();
student2.display();
student3.display();