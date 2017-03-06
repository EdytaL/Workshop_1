document.addEventListener("DOMContentLoaded", function() {
    
    //variables DOM
    
    var menuElements = document.querySelectorAll(".menu_list > li");
    var sliderDiv = document.querySelector(".background_sec1");
    var listElementsSlider = sliderDiv.querySelectorAll("li");
    var arrowNext = document.querySelector(".arrow_right");
    var arrowPrev = document.querySelector(".arrow_left");
    var whiteBoxInfoSection = document.querySelectorAll(".white_box");
    var listArrow = document.querySelectorAll(".list_arrow");
    
    
    //variables DOM - section calc
    
    var listPanel = document.querySelectorAll(".list_panel");
    var chairList = listPanel[0].querySelectorAll("li");
    var colorList = listPanel[1].querySelectorAll("li");
    var patternList = listPanel[2].querySelectorAll("li");
    var transportCheckBox = document.querySelector("#transport");
    

    var titleSummaryPanel = document.querySelector(".panel_left .title_sum");
    var typePanelLeft = document.querySelector(".panel_left .type");
    var colorPanelLeft = document.querySelector(".panel_left .color");
    var patternPanelLeft = document.querySelector(".panel_left .pattern");
    var transportPanelLeft = document.querySelector(".panel_left .transport");
    
    var typePanelRight = document.querySelector(".panel_right .type");
    var colorPanelRight = document.querySelector(".panel_right .color");
    var patternPanelRight = document.querySelector(".panel_right .pattern");
    var transportPanelRight = document.querySelector(".panel_right .transport");
    
    var divSum = document.querySelector(".sum");
    
    //variables for charis' photos
    
    var chairPhotos = document.querySelectorAll(".img_box ul li");
    
    var redChair = chairPhotos[0];
    var blackChair = chairPhotos[1];
    var orangeChair = chairPhotos[2];
    
   //variables JS
    var photoIndex = 0;
   
    
    //event - show/hidden the hidden menu in the header 
    
    for(var i=0; i<menuElements.length; i++) {
        menuElements[i].addEventListener("mouseenter", function(){ 
            var listHover = this.querySelector(".menu_list_hover");
            var triangleDivList = listHover.querySelector("div .triangle");
            listHover.style.display="block";
            triangleDivList.style.display="block";
        });
        
        menuElements[i].addEventListener("mouseleave", function(){ 
            var listHover = this.querySelector(".menu_list_hover");
            var triangleDivList = this.querySelector("div .triangle");
            listHover.style.display="none";
            triangleDivList.style.display="none";
        });
    };
    
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
    });
    
    //event - show/hidden div with chair's name on white_box, section photo
    
    for(var i =0; i < 2; i++){
        whiteBoxInfoSection[i].addEventListener("mouseenter", function(){
            var nameChairDiv = this.querySelector("div");
            
            nameChairDiv.style.visibility="hidden";
        });
        
        whiteBoxInfoSection[i].addEventListener("mouseleave", function(){
            var nameChairDiv = this.querySelector("div");
            
            nameChairDiv.style.visibility="visible";
        });
    };
    
    //event show/hidden options, section calc
    
    for(var i = 0; i<listArrow.length; i++) {
        listArrow[i].addEventListener("click", function(event) {
            var listPanel = this.nextElementSibling;
            listPanel.classList.toggle("visible");   
        });
    };
    
    //when user chooses typ/color/pattern of chair show price in panel resume
    
    for(var i=0; i<listPanel.length; i++) {
        for(var i =0; i<chairList.length; i++) {
            chairList[i].addEventListener("click",  function (event) {
                var chairName = this.innerText;
                var chairPrice = this.dataset.price;

                typePanelLeft.innerText = chairName;
                typePanelRight.innerText = chairPrice;
                listPanel[0].classList.toggle("visible");
                titleSummaryPanel.style.display="none";
                orderCosts();

                //show chair's photo
                if (this.dataset.chair == "clair") {
                    redChair.classList.remove("visible"); 
                    orangeChair.classList.add("visible");   
                    blackChair.classList.remove("visible");
                } else if(this.dataset.chair == "margarita") {
                    redChair.classList.remove("visible"); orangeChair.classList.remove("visible");
                    blackChair.classList.add("visible");
                } else {
                    redChair.classList.add("visible"); 
                    orangeChair.classList.remove("visible");
                    blackChair.classList.remove("visible");
                };
            });
        };
        for(var i=0; i<colorList.length; i++){
            colorList[i].addEventListener("click", function (event) {
                var chairColor = this.innerText;
                var colorPrice = this.dataset.price;
            
                colorPanelLeft.innerText = chairColor;
                colorPanelRight.innerText = colorPrice;
                listPanel[1].classList.toggle("visible");
                titleSummaryPanel.style.display="none";
                orderCosts();
            }); 
        };
        for(var i=0; i<patternList.length; i++) {
            patternList[i].addEventListener("click", function (event) {
                var chairPattern = this.innerText;
                var patternPrice = this.dataset.price;

                patternPanelLeft.innerText = chairPattern;
                patternPanelRight.innerText = patternPrice;

                listPanel[2].classList.toggle("visible");
                titleSummaryPanel.style.display="none";
                orderCosts();
            });
        };    
    };
    transportCheckBox.addEventListener("change", function(event) {
        transportPanelLeft.innerText = "Transport";
        transportPanelRight.innerText = transportCheckBox.dataset.price;
        
        titleSummaryPanel.style.display="none";
        orderCosts();
            
        if(transportCheckBox.checked==false){
            transportPanelLeft.innerText = "";
            transportPanelRight.innerText = "";
            orderCosts();
        }
    });
        
    //function counts order costs
    function orderCosts() {
        var typePrice = Number(typePanelRight.innerText);
        var colorPrice = Number(colorPanelRight.innerText);
        var patternPrice = Number(patternPanelRight.innerText);
        var transportPrice = Number(transportPanelRight.innerText);
        
        return divSum.innerText =(typePrice+colorPrice+patternPrice+transportPrice);
    };
});