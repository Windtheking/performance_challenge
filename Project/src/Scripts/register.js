import generateSHA256 from "./Utilities/Hash_generator.js";
import EmptyFields from "./Utilities/EmptyValidation.js";
import isEmail from "./Utilities/EmailValidation.js";
import users_controller from "./users_controller.js";
import validatePassword from "./Utilities/validPaswordValidate.js"
const isAdmin = false



document.getElementById("loginForm").addEventListener("submit", async(event) => {     
    event.preventDefault();                                                     //Preventing default behaviour (reolad)
    const nickName = document.getElementById("nickName").value;                 //Recovering DOM values
    const Email = document.getElementById("Email").value;                       //Recovering DOM values
    const passWord = document.getElementById("password").value;                 //Recovering DOM values
    const ConfirmPassword = document.getElementById("ConfirmPassword").value;   //Recovering DOM values
    EmptyFields({nickName, passWord, Email, ConfirmPassword})

    const passWordHash = generateSHA256(passWord)
    const confirmPwdHash = generateSHA256(ConfirmPassword)
    // Verifications of values

    //verification of null
    if (nickName === null){ 
        alert(`Null value detected in password`);
        return;
    };
    if (Email === null) {
        alert(`Null value detected email`); 
        return;
    };
    if (passWord === null){ 
        alert(`Null value detected in password`);
        return;
    };

    if (ConfirmPassword === null) {
        alert(`Null value detected email`); 
        return;
    };

    // Verification of not valid values
    //empty fields
    if(EmptyFields({nickName,Email,passWord,ConfirmPassword})){
        alert("All domains must be filled")
        return;
    };
    //empty email
    if(!isEmail(Email)){
        alert("Please insert a valid email")
        return;
    };

    //Validation if password is a propper length and characters
    if (validatePassword (password)) {
        alert("The password must contain at least 8 characters and a special character.");
        return;
    }

    //matching values
    if (passWordHash === confirmPwdHash){
        console.log("son iguales√")
    }else(
        alert("passwords do not match")
    )
    users_controller.postUsers({nickName , Email , passWordHash, isAdmin})
    window.location.href = "http://127.0.0.1:5500/Project/src/pages/practice_login.html"
    return
});

