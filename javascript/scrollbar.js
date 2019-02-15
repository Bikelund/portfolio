// Get the id of the <path> element and the length of <path>
var scrollBar = document.getElementById("scroll");
var length = scrollBar.getTotalLength();

// The start position of the drawing
scrollBar.style.strokeDasharray = length;

// Hide the line by offsetting dash. Remove this code to show the line before scroll draw
scrollBar.style.strokeDashoffset = length;

window.addEventListener("scroll", scrollAnimation);

function scrollAnimation() {
var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  var draw = length * scrollpercent;
  
  // Reverse the drawing (when scrolling upwards)
  scrollBar.style.strokeDashoffset = length - draw;
}