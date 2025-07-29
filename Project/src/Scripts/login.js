import generateSHA256 from "./Utilities/Hash_generator.js";
import EmptyFields from "./Utilities/EmptyValidation.js";
import isEmail from "./Utilities/EmailValidation.js";
import users_controller from "./controlers/users_controller.js";

if (localStorage.getItem("Useremail") !== null) {
    window.location.href = "http://127.0.0.1:5500/Project/src/pages/dashboard.html"
}


document.getElementById("loginForm").addEventListener("submit", async (event) => {     
    event.preventDefault();                                                     //Preventing default behaviour (reolad)

    const Email = document.getElementById("Email").value;                           //Recovering DOM values
    const nickName = document.getElementById("Email").value;                           //Recovering DOM values
    const passWord = document.getElementById("Password").value;                     //Recovering DOM values


    const passWordHash = generateSHA256(passWord)

    console.log(passWordHash)

    // Verifications of values

    //verification of null
    if (Email === null) {
        alert(`Null value detected email`); 
        return;
    };
    if (passWord === null){ 
        alert(`Null value detected in password`);
        return;
    };


    // Verification of not valid values
    //empty fields
    if(EmptyFields({Email,passWord})){//Email,ConfirmPassword
        alert("All domains must be filled")
        return;
    };
    // empty email
    if(!isEmail(Email)){
        alert("Please insert a valid email")
        return;
    };
    
    const prom = await users_controller.getUsers()
    const foundUsser = prom.find((user) => user.Email === Email && user.passWordHash === passWordHash)
    if(!foundUsser){
        alert("Unexistent usser or incorrect credentials")
        return;
    }
    
   // const prom1 = await users_controller.getUsers()
  //  const foundNickname = prom1.find((user) => user.nickName === nickName)

    localStorage.setItem("Useremail", foundUsser.Email)

    window.location.href = "http://127.0.0.1:5500/Project/src/pages/dashboard.html"
    
    
});


