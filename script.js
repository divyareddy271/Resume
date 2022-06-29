var workexperience = document.getElementById("Work-experience");
var exp = document.getElementById("experience");
var cordinates = workexperience.getBoundingClientRect();
exp.addEventListener("click", function (event) {
  event.preventDefault();
  // document.getElementById(workexperience).style.backgroundColor = "red";
  var setIntervals = setInterval(function () {
    console.log(window.pageYOffset, "and ", cordinates.y);
    if (window.pageYOffset < cordinates.y) {
      window.scrollBy(0, 10);
      console.log("loop", cordinates.y);
    } else if (cordinates.y <= window.pageYOffset) {
      clearInterval(setIntervals);
      return;
    }
  }, 100);
});

              /*               skills auto fill           */

var progressbar = document.querySelectorAll(".skills-bar > div");//to select all progress bar divs
var skillscordinates = document .getElementById("skills") .getBoundingClientRect(); // to get skills container co-ordinate values
window.addEventListener('scroll',checkscroll);
var animationDone = false; //to check animation 

// function to make div=0
function initializeskills() {
    skillscordinates = document .getElementById("skills") .getBoundingClientRect(); 
    console.log(skillscordinates.height-skillscordinates.top);
    if(skillscordinates.height - skillscordinates.y>= -300 && (skillscordinates.height  - skillscordinates.y <=300 )){
        fillbars();
    }
  else{     
       for (let bar of progressbar) {
            // choose all elements
            bar.style.width = "0%";
        }}
}
initializeskills(); // function call

// fillbar
function fillbars(){
    
    animationDone = true
    for(let bar of progressbar){ //!animationDone && 
        let targetvalue = bar.dataset.value; // bar.attributes('data-value');
        let currentwidth = 0;
        let setskillsinterval = setInterval(function() {
            console.log('called')
            if(currentwidth < targetvalue){
                
                bar.style.width = currentwidth++ +'%';
                
            }
            else{
                clearInterval(setskillsinterval);
                return;
            }
        }, 10);
    }
}

//check scroll if skills section is visible or not
function checkscroll(){
     skillscontainer = document .getElementById("skills-container");
     skillscordinates = document .getElementById("skills-container") .getBoundingClientRect();
   //  console.log(skillscordinates.top,"     ", window.innerHeight+10)
     //to get margin and padding values already defined
    let compStyles = window.getComputedStyle(skillscontainer);
    let marginslkillsandpadding =   compStyles.getPropertyValue('padding') //o/p 30px10px
    
    //converting30px10px to int value
    marginbottom = parseInt(compStyles.getPropertyValue('margin-bottom'))
    let padding =    parseInt(compStyles.getPropertyValue('padding'))
   // console.log(marginbottom);
    
    if(!animationDone && skillscordinates.top>=-(skillscordinates.height-(marginbottom+padding) )&& skillscordinates.top  <=(window.innerHeight - (padding) )){
        // for(let bar of progressbar){
        // }
        animationDone = true
        console.log("skills section is visible")
        fillbars();
    }
    else if(skillscordinates.top > window.innerHeight){
        // animationDone = false;
        // initializeskills();
    }
   
}
