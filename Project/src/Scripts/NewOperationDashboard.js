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

import Income_Outcome_Controller from "./controlers/Income_Outcome_controller.js";


const detailedInfo = document.getElementById("operationDescription").value;
const Money = document.getElementById("ammoutMoney").value;
const gainOrLoss = document.getElementById("typeOf").value;
const Category = document.getElementById("identificatorCategory").value;
const timer = document.getElementById("date_and_time").value;



const listOfCategories = await Income_Outcome_Controller.getIncome_Outcome();
const parsedcategories = JSON.stringify(listOfCategories)
console.log(listOfCategories);


for(const categ of parsedcategories){
    const new0ption = document.createElement("option")
    new0ption.textContent = categ
    document.getElementById("identificatorCategory").appendChild(new0ption)      
};




document.getElementById("insertionForm").addEventListener("submit", async(event) => {     
        event.preventDefault();
        //verifications
        if (detailedInfo === null){ 
            alert(`Null value detected in password`);
            return;
        };
        if (Money === null) {
            alert(`Null value detected email`); 
            return;
        };
        if (Money < 0)
        if (gainOrLoss === null){ 
            alert(`Non positive numbers not accepted`);
            return;
        };

        if (Category === null) {
            alert(`Null value detected email`); 
            return;
        };

        Income_Outcome_Controller.postIncome_Outcome({detailedInfo,Money,gainOrLoss,Category,timer})


    });

