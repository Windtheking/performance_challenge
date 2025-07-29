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

/**
 * DOM Manipulation to renderize the user gmail 
 * as a reconizable way of dinamization for the page, 
 * recovering DOM elements by id and working with or over them
 */
const headerContainer = document.getElementById("welcomeMessage")
const divWithText = document.createElement("div")
const highTitle = document.createElement("h1")
highTitle.textContent = "Welcome " + localStorage.getItem("Useremail")
//appendChild function to add all the information given and give it a clean appereance
divWithText.appendChild(highTitle)
headerContainer.appendChild(divWithText)
divWithText.classList.add("MaximunHeader")

/**
 * Function to add new product to the json server, 
 * after clicking this button recovered from the DOM enviroment
 * it will redirect you to a "creating new products" page
 */
document.getElementById("newOperation").addEventListener("click", () =>{
    window.location.href = "http://127.0.0.1:5500/Project/src/pages/pages_dashboard/creation_of_New_Operation.html"
});