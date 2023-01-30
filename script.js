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
//form validate

function massValidate () {
    // validate input name
    function validateName (){
        let cardHolderExp = /^[A-Z a-z]+$/;
        let errorMsg = document.getElementById("errorMsg");
        if(cardHolder.value.match(cardHolderExp)){
            errorMsg.textContent = "";
        }else {
            errorMsg.innerHTML = "Please Enter Card Holder Name!"
        }
    }
    // validate input number
    function  validateCard() {
        let cardNumberError = document.getElementById("card-number-error");
        if(cardNumber.value.length > 0 && cardNumber.value.length < 16){
            cardNumberError.innerHTML = "Wrong Format!"
        }else if (cardNumberError.value == ""){
            cardNumberError.innerHTML ="Cant be blank !";
        } else {
            cardNumberError.innerHTML = "";
        }
    }
    // validate expiry date
    function validateExpiry() {
        let expMonth = /^(0[0-9]|1[1-2]){2}$/;
        let expYear = /^[0-9][0-2]{4}$/;

        if(expiry[0].value.match(expMonth)){
            expiryErrorMsg.innerHTML = "";
        } else if(expiry[0].value.match(expMonth) && expiry[1].value.match(expYear)){
            expiryErrorMsg.innerHTML = "";
        } else if (expiry[0] === "" && expiry[1] === ""){
            expiryErrorMsg.innerHTML = "Cant be blank !";
        } else {
            expiryErrorMsg.innerHTML = "Wrong Format!";

        }
    }
    // validate cvc card 
    function validateCvc (){
        let cvcErrorMsg = document.getElementById("error-cvc");
        let cvcExp = /^[0-9]{3}$/;
        if(cvc.value === ""){
            cvcErrorMsg.innerHTML = "Cant be blank !";
        }else if (cvc.value.match(cvcExp)){
            cvcErrorMsg.innerHTML = "";
        } else {
            cvcErrorMsg.innerHTML = "Wrong Format!"
        }
    }

    /// call all validate function 
    validateCard();
    validateCvc();
    validateName();
    validateExpiry();

    if(
        nameOnCard.innerHTML == cardHolder.Placeholder ||
        numOnCard.innerHTML == cardNumber.Placeholder ||
        expMM.innerHTML == "00" ||
        expYY.innerHTML == "0000" ||
        cvcDisplay.innerHTML == "00" ||
        (cardNumber.value.length > 0 && cardNumber.value.length < 16) 
    ){
        return false;
    }else {
        return true ;
    }
}

//////submit button//////
submit.addEventListener("click", function (e) {
    massValidate();
    e.preventDefault();
    if(massValidate() === false){
        e.preventDefault();
    } else {
        e.preventDefault();
        // form.classList.add("hidden");
        // thankYouSection.classList.remove("hidden")
    }
})

continueBtn.addEventListener("click", function (e) {
    e.preventDefault();
    thankYouSection.classList.add("hidden");
    form.classList.remove("hidden");
    nameOnCard.innerHTML == cardHolder.Placeholder;
    numOnCard.innerHTML == cardNumber.Placeholder;
    expMM.innerHTML == "00";
    expYY.innerHTML == "0000" ;
    cvcDisplay.innerHTML == "00";
    cardHolder.value = "";
    cardNumber.value = "";
    expiry[0].value = "";
    expiry[1].value = "";
    cvc.value = "";
    expiryErrorMsg.innerHTML = "";
})
