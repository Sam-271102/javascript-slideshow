var current = 0;
var total = 4;
function next(){
 //current = current +1;
   // current += 1;
    current ++;
    
    //if the current variable is greater than the 
    //nimber of slides,rest to zero

    if(current >= total){
        current = 0;
    }
    //Create a reference to all the slide div
    var slides = document.getElementsByClassName("slide");
    //loop throigh the slide
    for (var i = 0; i < slides.length; i++){
        slides[i].style.display = "none";


    }

    //display the selected slide
    slides[current].style.display = "block";
    console.log("next");
    console.log(current);
}
function previous(){
    current --;

    if(current < 0){
        current = total - 1;
    }
    //Create a reference to all the slide div
    var slides = document.getElementsByClassName("slide");
    //loop throigh the slide
    for (var i = 0; i < slides.length; i++){
        slides[i].style.display = "none";


    }

    //display the selected slide
    slides[current].style.display = "block";
    console.log("previous");
    console.log(current);
}