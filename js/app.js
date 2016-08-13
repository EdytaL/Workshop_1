document.addEventListener("DOMContentLoaded", function() {
    
    //variables DOM
    
    var menuElements = document.querySelectorAll(".menu_list > li");
    var sliderDiv = document.querySelector("#background_sec1");
    var listElementsSlider = sliderDiv.querySelectorAll("li");
    var arrowNext = document.querySelector(".arrow_right");
    var arrowPrev = document.querySelector(".arrow_left");
    var whiteBoxInfoSection = document.querySelectorAll(".white_box");
    
   //variables JS
    var photoIndex = 0;
   
    
    //event - show/hdden the hidden menu in the header 
    
    for(var i=0; i<menuElements.length; i++) {
        menuElements[i].addEventListener("mouseenter", function(){ 
            var listHover = this.querySelector(".menu_list_hover");
            var triangleDivList = listHover.querySelector("div .triangle");
            listHover.style.display="block";
            triangleDivList.style.display="block";
        });
    
        menuElements[i].addEventListener("mouseleave", function(){ 
            var listHover = this.querySelector(".menu_list_hover");
            var triangleDivList = listHover.querySelector("div .triangle");
            listHover.style.display="none";
            triangleDivList.style.display="none";
        });
    }
    //event - slider in section info 
    
    arrowNext.addEventListener("click", function(event){

        listElementsSlider[photoIndex].classList.toggle("visible");
        photoIndex++;
        
        if(photoIndex>listElementsSlider.length-1) {
            photoIndex=0;
        }
        listElementsSlider[photoIndex].classList.toggle("visible");
    });
    
    arrowPrev.addEventListener("click", function(event) {
        listElementsSlider[photoIndex].classList.toggle("visible");
        photoIndex--;
        
        if(photoIndex<0) {
            photoIndex = listElementsSlider.length-1;
        }
        listElementsSlider[photoIndex].classList.toggle("visible");
    })
    
    //event - show/hidden div with chair's name on white_box, scetion photo
    
    for(var i =0; i < 2; i++){
        whiteBoxInfoSection[i].addEventListener("mouseenter", function(){
            var nameChairDiv = this.querySelector("div");
            
            nameChairDiv.style.visibility="hidden";
        });
        
        whiteBoxInfoSection[i].addEventListener("mouseleave", function(){
            var nameChairDiv = this.querySelector("div");
            
            nameChairDiv.style.visibility="visible";
        });
    }
    
    
   
    
    
});