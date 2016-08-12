document.addEventListener("DOMContentLoaded", function() {
    
    //variables 
    
    var menuElements = document.querySelectorAll(".menu_list > li");
   
   
    
    //event - show the hidden menu in the header 
    
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
   
    
    
});