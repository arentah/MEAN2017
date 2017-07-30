const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e){ // event object has name e
  e.preventDefault();
  CTA.classList.toggle("hide");
  ALERT.classList.toggle("hide");
}

CTA.onclick = console.log("The button was clicked!");
CTA.onclick = reveal;

// if you switch the top 2 lines, the result changes
// information stored in the first CTA.onclick gets replaced with the new information
