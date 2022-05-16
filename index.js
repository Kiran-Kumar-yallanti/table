let display = document.getElementById("displayArea");
let userInput = document.getElementById("number");
let btn = document.getElementById("submit");
let headingNumber = document.getElementById("span");

function multiply(a){

    let x = "";

    for(let i = 1 ; i <= 10 ; i++){
       x += `${a} x ${i} = ${a * i} <br>`; 
    }
    display.innerHTML = x;
    headingNumber.innerHTML = a;
    userInput.value = "";
}

btn.addEventListener("click",() => {
    let y = parseInt(userInput.value);
    multiply(y);
});