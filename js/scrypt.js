'use strict'
// RACCOLGO LE INFORMAZIONI
let userName = document.getElementById("name").value;
let userKm = document.getElementById("km").value;
let userAge = document.getElementById("age").value;
const btnGenerate = document.getElementById("generator");
const display = document.querySelector(".ticket-result");
const hideResult = document.getElementById("hide");
totalPrice = userKm * 0.21;

console.log(userName, userKm, userAge);


btnGenerate.addEventListener('click', function(){
    // if (userAge.value === "maggiorenne") {
    //     totalPrice -= totalPrice * 0.2;
    //     console.log(totalPrice);
    // } else if (userAge.value === "over65") {
    //     totalPrice -= totalPrice * 0.4;
    //     console.log(totalPrice); 
    // }    
    // document.getElementById("price").innerHTML = totalPrice.toFixed(2);

    document.getElementById("name-result").innerHTML = userName;
})




hideResult.addEventListener ('click', function (){
    display.classList.add("ticket-none");
})

















 