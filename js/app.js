document.addEventListener("DOMContentLoaded", function() {
    
    //variables 
    
    var menuElements = document.querySelectorAll(".menu_list > li");
    var whiteBoxInfoSection = document.querySelectorAll(".white_box");
    
   
   
    
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