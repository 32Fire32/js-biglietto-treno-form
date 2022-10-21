'use strict'

const btnGenerate = document.getElementById("generator");
const display = document.querySelector(".ticket-result");
const hideResult = document.getElementById("hide");

btnGenerate.addEventListener('click', function(){
    // APRE IL BIGLIETTO
    display.classList.add("ticket-open");

    // AGGIUNGE NOME AL BIGLIETTO
    var x = document.getElementById("name").value;
    console.log(x);
    document.getElementById("name-result").innerHTML = x;

    
    // CALCOLO DEL PREZZO IN BASE AI KM
    let userKm = Number(document.getElementById("km").value);
    console.log("il tipo di km inserito è " + typeof userKm);

    let totalPrice = userKm * 0.21;
    console.log("il tipo di totalPrice è " + typeof totalPrice, totalPrice);

   
    let userAge = document.getElementById("age").value;

    if(!(isNaN(totalPrice))) {
        if (userAge === "minorenne") {
            totalPrice -= totalPrice * 0.2;
            console.log(totalPrice);
            document.getElementById("offer-result").innerHTML = "Biglietto Young";
    } else if (userAge === "over65") {
            totalPrice -= totalPrice * 0.4;
            console.log(totalPrice); 
            document.getElementById("offer-result").innerHTML = "Biglietto Over65";
    }  
    document.getElementById("price-result").innerHTML = totalPrice.toFixed(2);
    document.getElementById("offer-result").innerHTML = "Biglietto Standard";
    } else {
        alert('Devi usare i numeri per i Km');
        window.location.reload();
    }
            
        

    

    // NUMERI RANDOMICI
    document.getElementById("carriage-result").innerHTML = Math.floor(Math.random()*10 + 1);
    document.getElementById("code-result").innerHTML = Math.floor(Math.random() * (99999 - 90000 + 1) + 90000);

    
})



// NASCONDE IL BIGLIETTO IN CASO DI RESET
hideResult.addEventListener ('click', function (){
    display.classList.remove("ticket-open");
})

















 