//All Constances
const cardHolder = document.getElementById("cardholder-name");
const cardNumber = document.getElementById("card-number");
const expiry = Array.from(document.querySelectorAll(".expiry"));
const cvc = document.getElementById("cvc");
const submit = document.getElementById("submit");
const nameOnCard = document.querySelector(".cardholder-display");
const numOnCard = document.querySelector(".card-number-display");
const expMM = document.querySelector(".expiry-month-display");
const expYY = document.querySelector(".expiry-year-display");
const cvcDisplay = document.querySelector(".cvc-display");
const thankYou = document.getElementById("thank-you-header");
const thankYouSection = document.getElementById("thank-you");
const continueBtn = document.getElementById("continue");
const form = document.getElementById("myForm");
const expiryErrorMsg = document.getElementById("expiry-error") 
console.log(expiry[0]);
console.log(expiry[1]);

// card formatted

function inputName(){
    nameOnCard.innerHTML = cardHolder.value;
    thankYou.innerHTML = `Thank You ${cardHolder.value}`;
    if(nameOnCard.innerHTML == ""){
        nameOnCard.innerHTML = cardHolder.Placeholder;
    }
}


function inputCardNum () {
    let cardNumberInput = cardNumber.value;
    //ont allow user to write invalid characters
    let formattedCardNumber = cardNumberInput.replace(/[^\d]/g, "")
    formattedCardNumber = formattedCardNumber.substring(0, 16);
    //split the card number to groubs of 4
    let cardNumberSection = formattedCardNumber.match(/\d{1,4}/g);
    if(cardNumberSection !== null){
        formattedCardNumber = cardNumberSection.join(" ");
    }
    //if formattedCardNumber is different to what is showen , change

    if(cardNumberInput !== formattedCardNumber){
        cardNumber.value = formattedCardNumber;
    }
    numOnCard.innerHTML = cardNumber.value;
    if(cardNumber.value === ""){
        numOnCard.innerHTML = cardNumber.Placeholder;
    }
}   


function inputMM(){
    let formattedMM = expiry[0].value;
    formattedMM = formattedMM.substring(0,2);
    expiry[0].value = formattedMM;
    if (expiry[0].value === ""){
        expMM.innerHTML = "00";
    }else {
        expMM.innerHTML = expiry[0].value
    }
}


function inputYY (){
    let formattedYY = expiry[1].value;
    formattedYY = formattedYY.substring(0,4);
    expiry[1].value = formattedYY;
    if (expiry[1].value === ""){
        expYY.innerHTML = "0000";
    }else {
        expYY.innerHTML = expiry[1].value;
    }
}


function inputCvc() {
    let formattedCvc = cvc.value;
    formattedCvc = formattedCvc.substring(0,3);
    cvc.value = formattedCvc;
    if(cvc.value === ""){
        cvcDisplay.innerHTML = "000";
    }else {
        cvcDisplay.innerHTML = cvc.value;
    }
}



submit.addEventListener("click", function(e){
    e.preventDefault();
    
})
    