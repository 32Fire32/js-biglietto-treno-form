'use strict'

const btnGenerate = document.getElementById("generator");
const display = document.querySelector(".ticket-result");
const hideResult = document.getElementById("hide");

btnGenerate.addEventListener('click', function(){

    // AGGIUNGE NOME AL BIGLIETTO
    var x = document.getElementById("name").value;
    console.log(x);
    document.getElementById("name-result").innerHTML = x;

    
    // CALCOLO DEL PREZZO IN BASE AI KM
    let userKm = document.getElementById("km").value;
    console.log(userKm);
    let totalPrice = userKm * 0.21;
    console.log(totalPrice);

   
    let userAge = document.getElementById("age").value;

    if (userAge === "minorenne") {
            totalPrice -= totalPrice * 0.2;
            console.log(totalPrice);
            document.getElementById("offer-result").innerHTML = "Biglietto Young";
    } else if (userAge === "over65") {
            totalPrice -= totalPrice * 0.4;
            console.log(totalPrice); 
            document.getElementById("offer-result").innerHTML = "Biglietto Over65";
    }  else {
            document.getElementById("price-result").innerHTML = totalPrice.toFixed(2);
            document.getElementById("offer-result").innerHTML = "Biglietto Standard";
    } 
    
})



// NASCONDE IL BIGLIETTO IN CASO DI RESET
hideResult.addEventListener ('click', function (){
    display.classList.add("ticket-none");
})

















 