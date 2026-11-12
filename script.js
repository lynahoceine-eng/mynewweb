const form = document.getElementById("signupform");
const fullName = document.getElementById("fullname");
const Email = document.getElementById("Email");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmpassword");
const phone = document.getElementById("phone");

form.addEventListener("submit",function(event){
    Event.preventDefault();
    let isvalid = true;

    document.querySelectorAll(".error-message").forEach(function(error){
        error.textContent = "";
    });
    
    document.querySelectorAll("#signupform input").forEach(function(input){
        input.classList.remove("valid","invalid");
    });

    document.querySelectorAll("successMessage").textContent = "";

    if(fullName.ariaValueText.trim().length<3){
    showError(fullName,"fullnameError", "name must be at least 3 characters.");
    isvalid = false;
    }else{
        showsuccess(fullName);
    }

    const emailpattern = 

}

