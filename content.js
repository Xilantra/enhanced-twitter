/* 
  Enhanced Twitter
  @xilantra
  https://arc.net/e/E7D0C27B-9A71-4DEB-B28C-20CF8092C241
  https://github.com/Xilantra/enhanced-twitter
  Last updated: September 20 2022
*/

const menuBtn = document.createElement("button");
const body = document.body;
const bodyClass = body.classList;

// Add is-active by default
bodyClass.add("is-active");
menuBtn.className = "btn-menu";
menuBtn.textContent = "☰";
body.prepend(menuBtn);

const toggleBtn = document.querySelector(".btn-menu");

// Toggle hamburger button
toggleBtn.addEventListener("click", ()=>{
  bodyClass.toggle("is-active");
});


const style = getComputedStyle(body);
const bgDark = 'rgb(0, 0, 0)';
const bgDimmed = 'rgb(21, 32, 43)';
const bgDefault = 'rgb(255, 255, 255)';
const backgroundColor = style.backgroundColor;
// console.log(backgroundColor)

// Detect theme used
if (backgroundColor == bgDark) {
    bodyClass.add("bg-dark");
  } else if(backgroundColor == bgDimmed) {
    bodyClass.add("bg-dimmed");
  } else if(backgroundColor == bgDefault) {
    bodyClass.add("bg-default");
};





