console.log("the Message!");

let myName = "kai"
let myLast = "jin"

console.log(myName + " " + myLast)

let theButton = document.querySelector("button");
let theBody = document.querySelector("body")
let theTxt = document.querySelector("h3")

theButton.addEventListener('click', buttonOne)

function buttonOne(){
    console.log("why?");
    console.log(theBody.style)
    theBody.style.backgroundColor = "gray"
    theTxt.textContent = "why?"
}
