
"use strict"
let form1=document.getElementById('contact-form')
var parent = document.querySelector(".modal-parent"),
    btn = document.querySelector(".btn"),
    X = document.querySelector(".X"),
    divEl = document.querySelector(".one")
form1.addEventListener("submit", appear);
 
function appear(event) {
 event.preventDefault()
parent.style.display = "block";
divEl.style.filter = "blur(10px)"
}
X.addEventListener("click", disappearX);
function disappearX() {
parent.style.display = "none";
divEl.style.filter = "blur(0px)";
document.getElementById("contact-form").reset();
}
parent.addEventListener("click", disappearParent)
function disappearParent(e) {
if (e.target.className == "modal-parent") {
parent.style.display = "none";
section.style.filter = "blur(0px)"
}
}
