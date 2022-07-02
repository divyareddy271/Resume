/*scroll down only experience
 */

// var workexperience = document.getElementById("Work-experience");
// var exp = document.getElementById("experience");
// var cordinates = workexperience.getBoundingClientRect();
// exp.addEventListener("click", function (event) {
//   event.preventDefault();
//   // document.getElementById(workexperience).style.backgroundColor = "red";
//   var setIntervals = setInterval(function () {
//     console.log(window.pageYOffset, "and ", cordinates.y);
//     if (window.pageYOffset < cordinates.y) {
//       window.scrollBy(0, 10);
//       console.log("loop", cordinates.y);
//     } else if (cordinates.y <= window.pageYOffset) {
//       clearInterval(setIntervals);
//       return;
//     }
//   }, 100);
// });

/*             sroll dwn for all           */
var navmenuanchortag = document.querySelectorAll(".list a");
console.log(navmenuanchortag);
for (let i = 0; i < navmenuanchortag.length; i++) {
  navmenuanchortag[i].addEventListener("click", function (event) {
    event.preventDefault();
    let targetvalueid = this.textContent.trim().toLowerCase();
    let targetsection = document.getElementById(targetvalueid);
    let targetsectioncoordinates = targetsection.getBoundingClientRect();
    // var exp = document.getElementById("experience");
    // var cordinates = exp.getBoundingClientRect();
    //    console.log(targetsection, " ", exp)
    let setintervals = setInterval(function () {
      //refer function or write complete code
      //scrolltoparticularsection(targetcoordinates);
      // console.log(exp)
      var targetsectioncoordinates = targetsection.getBoundingClientRect();
      //targetsection.getBoundingClientRect();
      console.log(targetsectioncoordinates.y, "  ", top);
      if (targetsectioncoordinates.top <= 0||((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight)) {
        clearInterval(setintervals);
        return;
      }
      console.log(targetsectioncoordinates.top);
      window.scrollBy(0, 50);
    }, 30);
  });
}

/*               skills auto fill           */

var progressbar = document.querySelectorAll(".skills-bar > div"); //to select all progress bar divs
var skillscordinates = document.getElementById("skills").getBoundingClientRect(); // to get skills container co-ordinate values
window.addEventListener("scroll", function (event) {
  checkscroll();
});
var animationDone = false; //to check animation
let skills_bar = document.querySelectorAll(".skills-bar > .progress-bar")
// function to make div=0
function initializeskills(bar) {
  bar.setAttribute("data-visited", "false");
 
  bar.style.width = "0%";
}
for (bar of skills_bar) {
  
  let skill_bar_cordinates = bar.getBoundingClientRect();
  
  if (bar.getAttribute("data-visited") == "false" && skill_bar_cordinates.top <
   (window.innerHeight - skill_bar_cordinates.height)) {
    bar.setAttribute("data-visited", true);
    fillbars(bar);
  } else if (skill_bar_cordinates.top > window.innerHeight || skill_bar_cordinates <= 1) {
    bar.setAttribute("data-visited", false);
    
    initializeskills(bar);
  }
}

// fillbar
function fillbars(bar) {

  let targetvalue = bar.dataset.value;
  let currentwidth = 0;
  let setskillsinterval = setInterval(function () {
    if (currentwidth < targetvalue) {
      bar.style.width = currentwidth++ + "%";
      bar.setAttribute("data-visited", "true");
    } else {
      clearInterval(setskillsinterval);
      return;
    }
  }, 10);
}

//check if skills bar is visible or not

function checkscroll() {

  let i = 0;
  for (bar of skills_bar) {
    let skill_bar_cordinates = bar.getBoundingClientRect();
    if (bar.getAttribute("data-visited") == "false" &&  skill_bar_cordinates.top >=1 && skill_bar_cordinates.top < (window.innerHeight - skill_bar_cordinates.height))
     {
      bar.setAttribute("data-visited", true);
      fillbars(bar);
    } else if (bar.getAttribute("data-visited") == "true"&& skill_bar_cordinates.top > window.innerHeight || skill_bar_cordinates.top <= 1) {
      bar.setAttribute("data-visited", false);
     
      initializeskills(bar);
    }
  }


}


// // function to make div=0
// function initializeskills() {
//   skillscordinates = document.getElementById("skills").getBoundingClientRect();
//   console.log(skillscordinates.height - skillscordinates.top);
//   if (
//     skillscordinates.height - skillscordinates.y >= -300 &&
//     skillscordinates.height - skillscordinates.y <= 300
//   ) {
//   //  fillbars();
//   } else {
//     for (let bar of progressbar) {
//       // choose all elements
//       bar.style.width = "0%";
//     }
//   }
// }
// initializeskills(); // function call

// // fillbar
// function fillbars() {
//   // animationDone = true;
//   // for (let bar of progressbar) {
//     
//     let targetvalue = bar.dataset.value; // bar.attributes('data-value');
//     let currentwidth = 0;
//     let setskillsinterval = setInterval(function () {
//       // console.log("called");
//       if (currentwidth < targetvalue) {
//         bar.style.width = currentwidth++ + "%";
//       } else {
//         clearInterval(setskillsinterval);
//         return;
//       }
//     }, 10);
//   // }
// }







// //check scroll if skills section is visible or not
// function checkscroll() {
//   skillscontainer = document.getElementById("skills-container");
//   skillscordinates = document
//     .getElementById("skills-container")
//     .getBoundingClientRect();
//   //  console.log(skillscordinates.top,"     ", window.innerHeight+10)
//   //to get margin and padding values already defined
//   let compStyles = window.getComputedStyle(skillscontainer);
//   let marginslkillsandpadding = compStyles.getPropertyValue("padding"); //o/p 30px10px

//   //converting30px10px to int value
//   marginbottom = parseInt(compStyles.getPropertyValue("margin-bottom"));
//   let padding = parseInt(compStyles.getPropertyValue("padding"));
//   // console.log(marginbottom);

//   if (
//     !animationDone &&
//     skillscordinates.top >=
//     -(skillscordinates.height - (marginbottom + padding)) &&
//     skillscordinates.top <= window.innerHeight - padding
//   ) {
//     // for(let bar of progressbar){
//     // }
//     animationDone = true;
//     console.log("skills section is visible");
//     fillbars();
//   } else if (skillscordinates.top > window.innerHeight) {
//     // animationDone = false;
//     // initializeskills();
//   }
// }

var timedivider = document.getElementsByClassName("timeline-divider");
var experienceprofile = document.querySelectorAll('#experience .job-company-profile-company');
var educationprofile = document.querySelectorAll('#education .job-company-profile-company')
var timelinebox = document.querySelectorAll('#experience .timeline-box');
var timelinebox_education = document.querySelectorAll('#education .timeline-box');
// console.log(experienceprofile[0],experienceprofile.length);
function timedividerheight() {
  job_profile_first_child_cordinates = experienceprofile[0].getBoundingClientRect();
  job_profile_last_child_cordinates = experienceprofile[experienceprofile.length - 1].getBoundingClientRect();
  edu_profile_first_child_cordinates = educationprofile[0].getBoundingClientRect();
  edu_profile_last_child_cordinates = educationprofile[educationprofile.length - 1].getBoundingClientRect();
  let timelinebox_cordinates = timelinebox[0].getBoundingClientRect();
  let timelinebox_education_cordinates = timelinebox_education[0].getBoundingClientRect();
  //To caluculate height
  timedivider[0].style.height = (job_profile_last_child_cordinates.top - job_profile_first_child_cordinates.top);
  timedivider[1].style.height = (edu_profile_last_child_cordinates.top - edu_profile_first_child_cordinates.top);
  timedivider[0].style.top = (job_profile_first_child_cordinates.top - timelinebox_cordinates.top);
  timedivider[1].style.top = (edu_profile_first_child_cordinates.top - timelinebox_education_cordinates.top);


}
window.addEventListener('resize', function (event) {
  timlinebox();
  timedividerheight();
}, true);
var j = 0;
function timlinebox() {
  for (let i = 0; (i < experienceprofile.length && i < educationprofile.length); i++) {
    let job_profile_cordinates = experienceprofile[i].getBoundingClientRect();
    let edu_profile_cordinates = educationprofile[i].getBoundingClientRect();
    let timelinebox_cordinates = timelinebox[i].getBoundingClientRect();
    let timelinebox_education_cordinates = timelinebox_education[i].getBoundingClientRect();
    if (i % 2 == 0) {
      // console.log("jkkkk", timelinebox_cordinates.top, job_profile_cordinates.top - timelinebox_cordinates.top);
      timelinebox[i].style.setProperty('--aftertop', job_profile_cordinates.top - timelinebox_cordinates.top);
      timelinebox[i].style.setProperty('--aftercolor', "black");
      timelinebox_education[i].style.setProperty('--aftertop', edu_profile_cordinates.top - timelinebox_education_cordinates.top);
      timelinebox_education[i].style.setProperty('--aftercolor', "black");

    }
    else {
      timelinebox[i].style.setProperty('--beforetop', job_profile_cordinates.top - timelinebox_cordinates.top);
      timelinebox_education[i].style.setProperty('--beforetop', edu_profile_cordinates.top - timelinebox_education_cordinates.top);

    }
    j++;
  }

  if (j < educationprofile.length) {
    for (let i = j; (i < educationprofile.length); i++) {
      let edu_profile_cordinates = educationprofile[i].getBoundingClientRect();
      let timelinebox_education_cordinates = timelinebox_education[i].getBoundingClientRect();
      if (i % 2 == 0) {
        timelinebox_education[i].style.setProperty('--aftertop', edu_profile_cordinates.top - timelinebox_education_cordinates.top);
       
      }
      else {
        timelinebox_education[i].style.setProperty('--beforetop', edu_profile_cordinates.top - timelinebox_education_cordinates.top);
      }
    }
  }

}

timlinebox();
timedividerheight();

















