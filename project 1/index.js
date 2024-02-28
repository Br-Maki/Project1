const loginButton = document.querySelector("#Login");
const emailInput = document.querySelector('#email');
const passInput = document.querySelector('#password');

loginButton.addEventListener("click", () => {

    if (emailInput.value.trim() == "" && passInput.value.trim()== "") {
        event.preventDefault();
        emailInput.style.borderColor = "red"; 
        passInput.style.borderColor = "red"; 
    } 

    else if (emailInput.value.trim()== "") {
        event.preventDefault();
        emailInput.style.borderColor = "red"; 
    }

    else if (passInput.value.trim()== "") {
        event.preventDefault();
        passInput.style.borderColor = "red"; 
    }
    
    else {
        emailInput.style.borderColor = "";
        passInput.style.borderColor = ""; 
    }

});