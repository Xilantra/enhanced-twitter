/* 
  Enhanced Twitter
  @xilantra
  https://arc.net/e/E7D0C27B-9A71-4DEB-B28C-20CF8092C241
  https://github.com/Xilantra/enhanced-twitter
  Last updated: Jan 10 2023
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
toggleBtn.addEventListener("click", () => {
  bodyClass.contains("is-active") ? bodyClass.remove("is-active") : bodyClass.add("is-active");
});

const style = getComputedStyle(body);

// Define CSS variables
document.documentElement.style.setProperty("--bg-dark", "rgb(0, 0, 0)");
document.documentElement.style.setProperty("--bg-dimmed", "rgb(21, 32, 43)");
document.documentElement.style.setProperty("--bg-default", "rgb(255, 255, 255)");

const bgDark = style.getPropertyValue("--bg-dark");
const bgDimmed = style.getPropertyValue("--bg-dimmed");
const bgDefault = style.getPropertyValue("--bg-default");
const backgroundColor = style.backgroundColor;

// Detect theme used
switch (backgroundColor) {
  case bgDark:
    bodyClass.add("bg-dark");
    break;
  case bgDimmed:
    bodyClass.add("bg-dimmed");
    break;
  case bgDefault:
    bodyClass.add("bg-default");
    break;
}
