/**
 * Functions designed for protecting de redirections, 
 * if there is not a log in usser there will be no acceses
 * to the dashboard and will be rdirected to te login
 */
if (localStorage.getItem("Useremail") === null) {
    window.location.href = "http://127.0.0.1:5500/Project/src/pages/practice_login.html"
}

/**
 * Function for login out of sesion, this is meant to allow the protection 
 * to be effective and to make a more clean transition
 */
document.getElementById("logoutBtn").addEventListener("click", () =>{
    localStorage.removeItem("Useremail")
    window.location.href = "http://127.0.0.1:5500/Project/src/pages/practice_login.html"
});

import category_controller from "./category_controller.js";

const detailedInfo = document.getElementById("operationDescription").value;
const Money = document.getElementById("ammoutMoney").value;
const gainOrLoss = document.getElementById("typeOf").value;
const Category = document.getElementById("identificatorCategory").value;



const listOfCategories = await category_controller.getCategories();
const parsedcategories = JSON.stringify(listOfCategories)
console.log(listOfCategories);


for(const categ of parsedcategories){
    const new0ption = document.createElement("option")
    new0ption.textContent = categ
    document.getElementById("identificatorCategory").appendChild(new0ption)      
};




document.getElementById("insertionForm").addEventListener("submit", async(event) => {     
        event.preventDefault();
        //verification of null
        if (detailedInfo === null){ 
            alert(`Null value detected in password`);
            return;
        };
        if (Money === null) {
            alert(`Null value detected email`); 
            return;
        };
        if (gainOrLoss === null){ 
            alert(`Null value detected in password`);
            return;
        };

        if (Category === null) {
            alert(`Null value detected email`); 
            return;
        };

        if(EmptyFields({detailedInfo,Money,gainOrLoss,Category})){
            alert("All domains must be filled")
            return;
        };
    });